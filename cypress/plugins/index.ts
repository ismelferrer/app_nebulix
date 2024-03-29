// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
import 'dotenv/config';

import { addMatchImageSnapshotPlugin } from '@simonsmith/cypress-image-snapshot/plugin';
import merge from 'lodash/merge';

// const { setupGitHub, teardownGitHub, setupGitHubTest, teardownGitHubTest, seedGitHubRepo } = require("./github");
// const { setupGitGateway, teardownGitGateway, setupGitGatewayTest, teardownGitGatewayTest } = require("./gitGateway");
// const { setupGitLab, teardownGitLab, setupGitLabTest, teardownGitLabTest } = require("./gitlab");
// const { setupBitBucket, teardownBitBucket, setupBitBucketTest, teardownBitBucketTest } = require("./bitbucket");
// const { setupProxy, teardownProxy, setupProxyTest, teardownProxyTest } = require("./proxy");
import { setupTestBackend } from './testBackend';

import { copyBackendFiles, switchVersion, updateConfig } from '../utils/config';

import type { Config } from '@staticcms/core/interface';
import type {
  SeedRepoProps,
  SetupBackendProps,
  SetupBackendResponse,
  SetupBackendTestProps,
  TeardownBackendProps,
  TeardownBackendTestProps,
} from '../interface';

export default async (on: Cypress.PluginEvents) => {
  // `on` is used to hook into various events Cypress emits
  on('task', {
    async setupBackend({ backend, options }: SetupBackendProps): Promise<SetupBackendResponse> {
      console.info('Preparing environment for backend', backend);
      await copyBackendFiles(backend);

      let result = null;
      switch (backend) {
        // case "github":
        //   result = await setupGitHub(options);
        //   break;
        // case "git-gateway":
        //   result = await setupGitGateway(options);
        //   break;
        // case "gitlab":
        //   result = await setupGitLab(options);
        //   break;
        // case "bitbucket":
        //   result = await setupBitBucket(options);
        //   break;
        // case "proxy":
        //   result = await setupProxy(options);
        //   break;
        case 'test':
          result = await setupTestBackend(options);
          break;
      }

      return result;
    },
    async teardownBackend({ backend }: TeardownBackendProps): Promise<null> {
      console.info('Tearing down backend', backend);

      switch (
        backend
        // case "github":
        //   await teardownGitHub(taskData);
        //   break;
        // case "git-gateway":
        //   await teardownGitGateway(taskData);
        //   break;
        // case "gitlab":
        //   await teardownGitLab(taskData);
        //   break;
        // case "bitbucket":
        //   await teardownBitBucket(taskData);
        //   break;
        // case "proxy":
        //   await teardownProxy(taskData);
        //   break;
      ) {
      }

      console.info('Restoring defaults');
      await copyBackendFiles('test');

      return null;
    },
    async setupBackendTest({ backend, testName }: SetupBackendTestProps): Promise<null> {
      console.info(`Setting up single test '${testName}' for backend`, backend);

      switch (
        backend
        // case "github":
        //   await setupGitHubTest(taskData);
        //   break;
        // case "git-gateway":
        //   await setupGitGatewayTest(taskData);
        //   break;
        // case "gitlab":
        //   await setupGitLabTest(taskData);
        //   break;
        // case "bitbucket":
        //   await setupBitBucketTest(taskData);
        //   break;
        // case "proxy":
        //   await setupProxyTest(taskData);
        //   break;
      ) {
      }

      return null;
    },
    async teardownBackendTest({ backend, testName }: TeardownBackendTestProps): Promise<null> {
      console.info(`Tearing down single test '${testName}' for backend`, backend);

      switch (
        backend
        // case "github":
        //   await teardownGitHubTest(taskData);
        //   break;
        // case "git-gateway":
        //   await teardownGitGatewayTest(taskData);
        //   break;
        // case "gitlab":
        //   await teardownGitLabTest(taskData);
        //   break;
        // case "bitbucket":
        //   await teardownBitBucketTest(taskData);
        //   break;
        // case "proxy":
        //   await teardownProxyTest(taskData);
        //   break;
      ) {
      }

      return null;
    },
    async seedRepo({ backend }: SeedRepoProps): Promise<null> {
      console.info(`Seeding repository for backend`, backend);

      switch (
        backend
        // case "github":
        //   await seedGitHubRepo(taskData);
        //   break;
      ) {
      }

      return null;
    },
    async switchToVersion(taskData) {
      const { version } = taskData;

      console.info(`Switching CMS to version '${version}'`);

      await switchVersion(version);

      return null;
    },
    async updateConfig(config: Partial<Config>) {
      await updateConfig(current => {
        merge(current, config);
      });

      return null;
    },
  });

  addMatchImageSnapshotPlugin(on);
};
