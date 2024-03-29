const { Octokit } = require('@octokit/rest');
const fs = require('fs-extra');
const path = require('path');
const {
  getExpectationsFilename,
  transformRecordedData: transformData,
  getGitClient,
} = require('./common');
const { updateConfig } = require('../utils/config');
const { escapeRegExp } = require('../utils/regexp');
const { merge } = require('lodash');

const GITHUB_REPO_OWNER_SANITIZED_VALUE = 'owner';
const GITHUB_REPO_NAME_SANITIZED_VALUE = 'repo';
const GITHUB_REPO_TOKEN_SANITIZED_VALUE = 'fakeToken';
const GITHUB_OPEN_AUTHORING_OWNER_SANITIZED_VALUE = 'forkOwner';
const GITHUB_OPEN_AUTHORING_TOKEN_SANITIZED_VALUE = 'fakeForkToken';

const FAKE_OWNER_USER = {
  login: 'owner',
  id: 1,
  avatar_url: 'https://avatars1.githubusercontent.com/u/7892489?v=4',
  name: 'owner',
};

const FAKE_FORK_OWNER_USER = {
  login: 'forkOwner',
  id: 2,
  avatar_url: 'https://avatars1.githubusercontent.com/u/9919?s=200&v=4',
  name: 'forkOwner',
};

function getGitHubClient(token) {
  const client = new Octokit({
    auth: `token ${token}`,
    baseUrl: 'https://api.github.com',
  });
  return client;
}

function getEnvs() {
  const {
    GITHUB_REPO_OWNER: owner,
    GITHUB_REPO_NAME: repo,
    GITHUB_REPO_TOKEN: token,
    GITHUB_OPEN_AUTHORING_OWNER: forkOwner,
    GITHUB_OPEN_AUTHORING_TOKEN: forkToken,
  } = process.env;
  if (!owner || !repo || !token || !forkOwner || !forkToken) {
    throw new Error(
      'Please set GITHUB_REPO_OWNER, GITHUB_REPO_NAME, GITHUB_REPO_TOKEN, GITHUB_OPEN_AUTHORING_OWNER, GITHUB_OPEN_AUTHORING_TOKEN  environment variables',
    );
  }
  return { owner, repo, token, forkOwner, forkToken };
}

async function prepareTestGitHubRepo() {
  const { owner, repo, token } = getEnvs();

  // postfix a random string to avoid collisions
  const postfix = Math.random().toString(32).slice(2);
  const testRepoName = `${repo}-${Date.now()}-${postfix}`;

  const client = getGitHubClient(token);

  console.info('Creating repository', testRepoName);
  await client.repos.createForAuthenticatedUser({
    name: testRepoName,
  });

  const tempDir = path.join('.temp', testRepoName);
  await fs.remove(tempDir);
  let git = getGitClient();

  const repoUrl = `git@github.com:${owner}/${repo}.git`;

  console.info('Cloning repository', repoUrl);
  await git.clone(repoUrl, tempDir);
  git = getGitClient(tempDir);

  console.info('Pushing to new repository', testRepoName);

  await git.removeRemote('origin');
  await git.addRemote(
    'origin',
    `https://${token}:x-oauth-basic@github.com/${owner}/${testRepoName}`,
  );
  await git.push(['-u', 'origin', 'main']);

  return { owner, repo: testRepoName, tempDir };
}

async function getAuthenticatedUser(token) {
  const client = getGitHubClient(token);
  const { data: user } = await client.users.getAuthenticated();
  return { ...user, token, backendName: 'github' };
}

async function getUser() {
  const { token } = getEnvs();
  return getAuthenticatedUser(token);
}

async function getForkUser() {
  const { forkToken } = getEnvs();
  return getAuthenticatedUser(forkToken);
}

async function deleteRepositories({ owner, repo, tempDir }) {
  const { forkOwner, token, forkToken } = getEnvs();

  const errorHandler = e => {
    if (e.status !== 404) {
      throw e;
    }
  };

  console.info('Deleting repository', `${owner}/${repo}`);
  await fs.remove(tempDir);

  let client = getGitHubClient(token);
  await client.repos
    .delete({
      owner,
      repo,
    })
    .catch(errorHandler);

  console.info('Deleting forked repository', `${forkOwner}/${repo}`);
  client = getGitHubClient(forkToken);
  await client.repos
    .delete({
      owner: forkOwner,
      repo,
    })
    .catch(errorHandler);
}

async function batchRequests(items, batchSize, func) {
  while (items.length > 0) {
    const batch = items.splice(0, batchSize);
    await Promise.all(batch.map(func));
    await new Promise(resolve => setTimeout(resolve, 2500));
  }
}

async function resetOriginRepo({ owner, repo, tempDir }) {
  console.info('Resetting origin repo:', `${owner}/${repo}`);
  const { token } = getEnvs();
  const client = getGitHubClient(token);

  const { data: prs } = await client.pulls.list({
    repo,
    owner,
    state: 'open',
  });
  const numbers = prs.map(pr => pr.number);
  console.info('Closing prs:', numbers);

  await batchRequests(numbers, 10, async pull_number => {
    await client.pulls.update({
      owner,
      repo,
      pull_number,
      state: 'closed',
    });
  });

  const { data: branches } = await client.repos.listBranches({ owner, repo });
  const refs = branches.filter(b => b.name !== 'main').map(b => `heads/${b.name}`);

  console.info('Deleting refs', refs);

  await batchRequests(refs, 10, async ref => {
    await client.git.deleteRef({
      owner,
      repo,
      ref,
    });
  });

  console.info('Resetting main');
  const git = getGitClient(tempDir);
  await git.push(['--force', 'origin', 'main']);
  console.info('Done resetting origin repo:', `${owner}/${repo}`);
}

async function resetForkedRepo({ repo }) {
  const { forkToken, forkOwner } = getEnvs();
  const client = getGitHubClient(forkToken);

  const { data: repos } = await client.repos.list();
  if (repos.some(r => r.name === repo)) {
    console.info('Resetting forked repo:', `${forkOwner}/${repo}`);
    const { data: branches } = await client.repos.listBranches({ owner: forkOwner, repo });
    const refs = branches.filter(b => b.name !== 'main').map(b => `heads/${b.name}`);

    console.info('Deleting refs', refs);
    await Promise.all(
      refs.map(ref =>
        client.git.deleteRef({
          owner: forkOwner,
          repo,
          ref,
        }),
      ),
    );
    console.info('Done resetting forked repo:', `${forkOwner}/${repo}`);
  }
}

async function resetRepositories({ owner, repo, tempDir }) {
  await resetOriginRepo({ owner, repo, tempDir });
  await resetForkedRepo({ repo });
}

async function setupGitHub(options) {
  console.info('Running tests - live data will be used!');
  const [user, forkUser, repoData] = await Promise.all([
    getUser(),
    getForkUser(),
    prepareTestGitHubRepo(),
  ]);

  await updateConfig(config => {
    merge(config, options, {
      backend: {
        repo: `${repoData.owner}/${repoData.repo}`,
      },
    });
  });

  return { ...repoData, user, forkUser };
}

async function teardownGitHub(taskData) {
  await deleteRepositories(taskData);

  return null;
}

async function setupGitHubTest(taskData) {
  await resetRepositories(taskData);

  return null;
}

const sanitizeString = (
  str,
  { owner, repo, token, forkOwner, forkToken, ownerName, forkOwnerName },
) => {
  let replaced = str
    .replace(new RegExp(escapeRegExp(forkOwner), 'g'), GITHUB_OPEN_AUTHORING_OWNER_SANITIZED_VALUE)
    .replace(new RegExp(escapeRegExp(forkToken), 'g'), GITHUB_OPEN_AUTHORING_TOKEN_SANITIZED_VALUE)
    .replace(new RegExp(escapeRegExp(owner), 'g'), GITHUB_REPO_OWNER_SANITIZED_VALUE)
    .replace(new RegExp(escapeRegExp(repo), 'g'), GITHUB_REPO_NAME_SANITIZED_VALUE)
    .replace(new RegExp(escapeRegExp(token), 'g'), GITHUB_REPO_TOKEN_SANITIZED_VALUE)
    .replace(
      new RegExp('https://avatars\\d+\\.githubusercontent\\.com/u/\\d+?\\?v=\\d', 'g'),
      `${FAKE_OWNER_USER.avatar_url}`,
    );

  if (ownerName) {
    replaced = replaced.replace(new RegExp(escapeRegExp(ownerName), 'g'), FAKE_OWNER_USER.name);
  }

  if (forkOwnerName) {
    replaced = replaced.replace(
      new RegExp(escapeRegExp(forkOwnerName), 'g'),
      FAKE_FORK_OWNER_USER.name,
    );
  }

  return replaced;
};

const transformRecordedData = (expectation, toSanitize) => {
  const requestBodySanitizer = httpRequest => {
    let body;
    if (httpRequest.body && httpRequest.body.type === 'JSON' && httpRequest.body.json) {
      const bodyObject =
        typeof httpRequest.body.json === 'string'
          ? JSON.parse(httpRequest.body.json)
          : httpRequest.body.json;

      if (bodyObject.encoding === 'base64') {
        // sanitize encoded data
        const decodedBody = Buffer.from(bodyObject.content, 'base64').toString('binary');
        const sanitizedContent = sanitizeString(decodedBody, toSanitize);
        const sanitizedEncodedContent = Buffer.from(sanitizedContent, 'binary').toString('base64');
        bodyObject.content = sanitizedEncodedContent;
        body = JSON.stringify(bodyObject);
      } else {
        body = JSON.stringify(bodyObject);
      }
    } else if (httpRequest.body && httpRequest.body.type === 'STRING' && httpRequest.body.string) {
      body = httpRequest.body.string;
    } else if (httpRequest.body) {
      const str =
        typeof httpRequest.body !== 'string' ? JSON.stringify(httpRequest.body) : httpRequest.body;
      body = sanitizeString(str, toSanitize);
    }
    return body;
  };

  const responseBodySanitizer = (httpRequest, httpResponse) => {
    let responseBody = null;
    if (httpResponse.body && httpResponse.body.string) {
      responseBody = httpResponse.body.string;
    } else if (
      httpResponse.body &&
      httpResponse.body.type === 'BINARY' &&
      httpResponse.body.base64Bytes
    ) {
      responseBody = {
        encoding: 'base64',
        content: httpResponse.body.base64Bytes,
      };
    } else if (httpResponse.body && httpResponse.body.json) {
      responseBody = JSON.stringify(httpResponse.body.json);
    } else {
      responseBody =
        typeof httpResponse.body === 'string'
          ? httpResponse.body
          : httpResponse.body && JSON.stringify(httpResponse.body);
    }

    // replace recorded user with fake one
    if (
      responseBody &&
      httpRequest.path === '/user' &&
      httpRequest.headers.host.includes('api.github.com')
    ) {
      const parsed = JSON.parse(responseBody);
      if (parsed.login === toSanitize.forkOwner) {
        responseBody = JSON.stringify(FAKE_FORK_OWNER_USER);
      } else {
        responseBody = JSON.stringify(FAKE_OWNER_USER);
      }
    }
    return responseBody;
  };

  const cypressRouteOptions = transformData(
    expectation,
    requestBodySanitizer,
    responseBodySanitizer,
  );

  return cypressRouteOptions;
};

const defaultOptions = {
  transformRecordedData,
};

async function teardownGitHubTest(taskData, { transformRecordedData } = defaultOptions) {
  await resetRepositories(taskData);

  return null;
}

async function seedGitHubRepo(taskData) {
  const { owner, token } = getEnvs();

  const client = getGitHubClient(token);
  const repo = taskData.repo;

  try {
    console.info('Getting main branch');
    const { data: main } = await client.repos.getBranch({
      owner,
      repo,
      branch: 'main',
    });

    const prCount = 120;
    const prs = new Array(prCount).fill(0).map((v, i) => i);
    const batchSize = 5;
    await batchRequests(prs, batchSize, async i => {
      const branch = `seed_branch_${i}`;
      console.info(`Creating branch ${branch}`);
      await client.git.createRef({
        owner,
        repo,
        ref: `refs/heads/${branch}`,
        sha: main.commit.sha,
      });

      const path = `seed/file_${i}`;
      console.info(`Creating file ${path}`);
      await client.repos.createOrUpdateFile({
        owner,
        repo,
        branch,
        content: Buffer.from(`Seed File ${i}`).toString('base64'),
        message: `Create seed file ${i}`,
        path,
      });

      const title = `Non CMS Pull Request ${i}`;
      console.info(`Creating PR ${title}`);
      await client.pulls.create({
        owner,
        repo,
        base: 'main',
        head: branch,
        title,
      });
    });
  } catch (e) {
    console.error(e);
    throw e;
  }

  return null;
}

module.exports = {
  transformRecordedData,
  setupGitHub,
  teardownGitHub,
  setupGitHubTest,
  teardownGitHubTest,
  seedGitHubRepo,
};
