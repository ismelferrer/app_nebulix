import type { LocalePhrasesRoot } from '../types';

const zh_Hans: LocalePhrasesRoot = {
  auth: {
    login: '登录',
    loggingIn: '正在登录...',
    loginWithNetlifyIdentity: '使用 Netlify Identity 登录',
    loginWithBitbucket: '使用 Bitbucket 登录',
    loginWithGitHub: '使用 GitHub 登录',
    loginWithGitLab: '使用 GitLab 登录',
    loginWithGitea: '使用 Gitea 登录',
    errors: {
      email: '请输入电子邮箱',
      password: '请输入密码',
      authTitle: undefined, // English translation: 'Error logging in'
      authBody: '%{details}',
      netlifyIdentityNotFound: undefined, // English translation: 'Netlify Identity plugin not found'
      identitySettings:
        '无法连接账户认证系统（如果正在使用 git-gateway 作为 backend，请确保已经开启 Netlify Identity 服务以及 Git Gateway）',
    },
  },
  app: {
    header: {
      content: '内容',
      workflow: '工作流',
      media: '媒体',
      quickAdd: '快速新建',
    },
    app: {
      loading: '正在加载...',
      errorHeader: '加载 CMS 配置时发生错误',
      configErrors: '配置错误',
      configNotFound: undefined, // English translation: 'Config not found'
      checkConfigYml: '请检查 config.yml 文件是否配置正确',
      loadingConfig: '正在加载配置...',
      waitingBackend: '等待 backend 数据...',
    },
    notFoundPage: {
      header: '页面不存在',
    },
  },
  collection: {
    sidebar: {
      collections: '集合',
      allCollections: '所有集合',
      searchAll: '查找所有...',
      searchIn: '查找',
    },
    collectionTop: {
      sortBy: '排序',
      viewAs: '查看',
      newButton: '新建%{collectionLabel}',
      ascending: '升序',
      descending: '降序',
      searchResults: '有关“%{searchTerm}”的搜索结果',
      searchResultsInCollection: '在%{collection}中有关“%{searchTerm}”的搜索结果',
      filterBy: '筛选',
      groupBy: '分组',
    },
    entries: {
      loadingEntries: '正在加载内容...',
      cachingEntries: '正在缓存内容...',
      longerLoading: '这可能需要花费几分钟时间',
      noEntries: '暂无内容',
    },
    groups: {
      other: '其他',
      negateLabel: '非%{label}',
    },
    table: {
      summary: undefined, // English translation: 'Summary'
      collection: undefined, // English translation: 'Collection'
    },
    defaultFields: {
      author: {
        label: '作者',
      },
      updatedOn: {
        label: '更新于',
      },
    },
    notFound: undefined, // English translation: 'Collection not found'
  },
  editor: {
    editorControl: {
      field: {
        optional: '可选',
      },
    },
    editorControlPane: {
      widget: {
        required: '“%{fieldLabel}”是必填项',
        regexPattern: '“%{fieldLabel}”不满足模式%{pattern}',
        processing: '“%{fieldLabel}”正在处理中',
        range: '“%{fieldLabel}”必须位于 %{minValue} 和 %{maxValue} 之间',
        min: '“%{fieldLabel}”必须至少为 %{minValue}',
        max: '“%{fieldLabel}”必须小于等于 %{maxValue}',
        rangeCount: '“%{fieldLabel}”必须包含 %{minCount} 到 %{maxCount} 个项目',
        rangeCountExact: '“%{fieldLabel}”必须且只能包含 %{count} 个项目',
        rangeMin: '“%{fieldLabel}”必须为至少 %{minCount} 个项目',
        rangeMax: '“%{fieldLabel}”必须为小于等于 %{maxCount} 个项目',
        invalidPath: '“%{path}”为无效路径',
        pathExists: '路径“%{path}”已经存在',
        invalidColor: undefined, // English translation: 'Color '%{color}' is invalid.'
        invalidHexCode: undefined, // English translation: 'Hex codes must start with a # sign.'
      },
      i18n: {
        writingInLocale: '正在使用%{locale}撰写',
        copyFromLocale: undefined, // English translation: 'Fill in from another locale'
        copyFromLocaleConfirm: undefined, // English translation: 'Do you want to fill in data from %{locale} locale?\nAll existing content will be overwritten.'
      },
    },
    editor: {
      onLeavePage: '你确定要离开此页面吗？',
      onUpdatingWithUnsavedChangesTitle: undefined, // English translation: 'Unsaved changes'
      onUpdatingWithUnsavedChangesBody: '你有尚未保存的修改，请在更新状态前进行保存',
      onPublishingNotReadyTitle: undefined, // English translation: 'Not ready to publish'
      onPublishingNotReadyBody: '请在发布之前将状态更新为“就绪”',
      onPublishingWithUnsavedChangesTitle: undefined, // English translation: 'Unsaved changes'
      onPublishingWithUnsavedChangesBody: '你有尚未保存的修改，请在发布前进行保存',
      onPublishingTitle: undefined, // English translation: 'Publish entry?'
      onPublishingBody: '你确定要发布此内容吗？',
      onUnpublishingTitle: undefined, // English translation: 'Unpublish entry?'
      onUnpublishingBody: '你确定要撤销发布此内容吗？',
      onDeleteWithUnsavedChangesTitle: undefined, // English translation: 'Delete this published entry?'
      onDeleteWithUnsavedChangesBody: '你确定要删除这个已经发布的内容，以及当前尚未保存的修改吗？',
      onDeletePublishedEntryTitle: undefined, // English translation: 'Delete this published entry?'
      onDeletePublishedEntryBody: '你确定要删除这个已经发布的内容吗？',
      onDeleteUnpublishedChangesWithUnsavedChangesTitle: undefined, // English translation: 'Delete unpublished changes?'
      onDeleteUnpublishedChangesWithUnsavedChangesBody:
        '此内容所有未被发布的修改，以及当前尚未保存的修改都将被删除，你确定吗？',
      onDeleteUnpublishedChangesTitle: undefined, // English translation: 'Delete unpublished changes?'
      onDeleteUnpublishedChangesBody: '此内容所有未被发布的修改都将被删除，你确定吗？',
      loadingEntry: '正在加载内容...',
    },
    editorInterface: {
      sideBySideI18n: undefined, // English translation: 'I18n Side by Side'
      preview: undefined, // English translation: 'Preview'
      toggleI18n: '打开/关闭国际化',
      togglePreview: '打开/关闭预览',
      toggleScrollSync: '同步滚动',
    },
    editorToolbar: {
      publishing: '正在发布...',
      publish: '发布',
      published: '已发布',
      unpublish: '撤销发布',
      duplicate: '复制',
      unpublishing: '正在撤销发布...',
      publishAndCreateNew: '发布，然后新建内容',
      publishAndDuplicate: '发布，然后复制内容',
      deleteUnpublishedChanges: '删除未发布的修改',
      deleteUnpublishedEntry: '删除未发布的内容',
      deletePublishedEntry: '删除已发布的内容',
      deleteEntry: '删除内容',
      saving: '正在保存...',
      save: '保存',
      statusInfoTooltipDraft: undefined, // English translation: 'Entry status is set to draft. To finalize and submit it for review, set the status to �In review�'
      statusInfoTooltipInReview: undefined, // English translation: 'Entry is being reviewed, no further actions are required. However, you can still make additional changes while it is being reviewed.'
      deleting: '正在删除...',
      updating: '正在更新...',
      status: '状态: %{status}',
      backCollection: '正在集合“%{collectionLabel}”中编写',
      unsavedChanges: '含未保存的修改',
      changesSaved: '修改已保存',
      draft: '草稿',
      inReview: '审核中',
      ready: '就绪',
      publishNow: '立即发布',
      deployPreviewPendingButtonLabel: '点击以预览',
      deployPreviewButtonLabel: '查看预览',
      deployButtonLabel: '查看发布',
      discardChanges: undefined, // English translation: 'Discard changes'
      discardChangesTitle: undefined, // English translation: 'Discard changes'
      discardChangesBody: undefined, // English translation: 'Are you sure you want to discard the unsaved changed?'
    },
    editorWidgets: {
      markdown: {
        bold: '粗体',
        italic: '斜体',
        strikethrough: undefined, // English translation: 'Strikethrough'
        code: '代码',
        codeBlock: undefined, // English translation: 'Code block'
        insertCodeBlock: undefined, // English translation: 'Insert code block'
        link: '链接',
        insertLink: undefined, // English translation: 'Insert link'
        paragraph: undefined, // English translation: 'Paragraph'
        headings: '标题',
        quote: '引用',
        insertQuote: undefined, // English translation: 'Insert blockquote'
        bulletedList: '无序列表',
        numberedList: '有序列表',
        addComponent: '添加组件',
        richText: '富文本',
        markdown: 'Markdown',
        type: undefined, // English translation: 'Type...'
        decreaseIndent: undefined, // English translation: 'Decrease indent'
        increaseIndent: undefined, // English translation: 'Increase indent'
        image: undefined, // English translation: 'Image'
        insertImage: undefined, // English translation: 'Insert image'
        table: {
          table: undefined, // English translation: 'Table'
          deleteColumn: undefined, // English translation: 'Delete column'
          deleteRow: undefined, // English translation: 'Delete row'
          deleteTable: undefined, // English translation: 'Delete table'
          insertColumn: undefined, // English translation: 'Insert column'
          insertRow: undefined, // English translation: 'Insert row'
          insertTable: undefined, // English translation: 'Insert table'
        },
      },
      image: {
        choose: '选择图片',
        chooseMultiple: undefined, // English translation: 'Choose images'
        chooseUrl: '从 URL 插入',
        replaceUrl: '用 URL 替代',
        promptUrl: '输入图片的 URL',
        chooseDifferent: '选择其他图片',
        addMore: undefined, // English translation: 'Add more images'
        remove: '移除图片',
        removeAll: undefined, // English translation: 'Remove all images'
      },
      file: {
        choose: '选择文件',
        chooseUrl: '从 URL 插入',
        chooseMultiple: undefined, // English translation: 'Choose files'
        replaceUrl: '用 URL 替代',
        promptUrl: '输入文件的 URL',
        chooseDifferent: '选择其他文件',
        addMore: undefined, // English translation: 'Add more files'
        remove: '移除文件',
        removeAll: undefined, // English translation: 'Remove all files'
      },
      folder: {
        choose: undefined, // English translation: 'Choose a folder'
        chooseUrl: undefined, // English translation: 'Insert folder path'
        chooseMultiple: undefined, // English translation: 'Choose folders'
        replaceUrl: undefined, // English translation: 'Replace with path'
        promptUrl: undefined, // English translation: 'Enter path of the folder'
        chooseDifferent: undefined, // English translation: 'Choose different folder'
        addMore: undefined, // English translation: 'Add more folders'
        remove: undefined, // English translation: 'Remove folder'
        removeAll: undefined, // English translation: 'Remove all folders'
      },
      unknownControl: {
        noControl: "'%{widget}'的控件不存在",
      },
      unknownPreview: {
        noPreview: "'%{widget}'无法预览",
      },
      headingOptions: {
        headingOne: '标题 1',
        headingTwo: '标题 2',
        headingThree: '标题 3',
        headingFour: '标题 4',
        headingFive: '标题 5',
        headingSix: '标题 6',
      },
      datetime: {
        now: '现在',
        invalidDateTitle: undefined, // English translation: 'Invalid date'
        invalidDateBody: undefined, // English translation: 'The date you entered is invalid.'
      },
      list: {
        add: undefined, // English translation: 'Add %{item}'
        addType: undefined, // English translation: 'Add %{item}'
        noValue: undefined, // English translation: 'No value'
      },
      keyvalue: {
        key: undefined, // English translation: 'Key'
        value: undefined, // English translation: 'Value'
        uniqueKeys: undefined, // English translation: '%{keyLabel} must be unique'
      },
      code: {
        language: undefined, // English translation: 'Language'
        selectLanguage: undefined, // English translation: 'Select language'
      },
    },
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: '草稿',
      copy: '复制',
      copyUrl: '复制 URL',
      copyPath: '复制路径',
      copyName: '复制名称',
      copied: '已复制',
    },
    mediaLibrary: {
      onDeleteTitle: undefined, // English translation: 'Delete selected media?'
      onDeleteBody: '你确定要删除此媒体项目吗？',
      fileTooLargeTitle: undefined, // English translation: 'File too large'
      fileTooLargeBody: '文件体积过大\n目前的配置中不允许文件体积超过 %{size} kB',
      alreadyExistsTitle: undefined, // English translation: 'File already exists'
      alreadyExistsBody: undefined, // English translation: '%{filename} already exists. Do you want to replace it?'
    },
    mediaLibraryModal: {
      noResults: '暂无结果',
      noAssetsFound: '未找到资源',
      noImagesFound: '未找到图片',
      private: '私有',
      images: '图片',
      mediaAssets: '媒体资源',
      search: '搜索...',
      uploading: '正在上传...',
      upload: '上传',
      download: '下载',
      deleting: '正在下载...',
      deleteSelected: '删除已选中项目',
      chooseSelected: '选用已选中项目',
      dropImages: undefined, // English translation: 'Drop images to upload'
      dropFiles: undefined, // English translation: 'Drop files to upload'
    },
    folderSupport: {
      newFolder: undefined, // English translation: 'New folder'
      createNewFolder: undefined, // English translation: 'Create new folder'
      enterFolderName: undefined, // English translation: 'Enter folder name...'
      create: undefined, // English translation: 'Create'
      home: undefined, // English translation: 'Home'
      up: undefined, // English translation: 'Up'
      upToFolder: undefined, // English translation: 'Up to %{folder}'
    },
  },
  ui: {
    common: {
      yes: undefined, // English translation: 'Yes'
      no: undefined, // English translation: 'No'
      okay: undefined, // English translation: 'OK'
      cancel: undefined, // English translation: 'Cancel'
    },
    default: {
      goBackToSite: '返回主页',
    },
    localBackup: {
      hasLocalBackup: undefined, // English translation: 'Has local backup'
    },
    errorBoundary: {
      title: '错误',
      details: '程序发生了一个错误，请',
      reportIt: '在 Github 上发布一个 Issue',
      detailsHeading: '详情',
      privacyWarning:
        '发布一个 Issue 会将错误信息和调试数据预置其中\n请确保这些信息是正确的，同时移除那些敏感数据',
      recoveredEntry: {
        heading: '已恢复的文档',
        warning: '请在切换至其他页面之前，将它复制并粘贴到某个地方',
        copyButtonLabel: '复制到剪贴板',
      },
    },
    settingsDropdown: {
      theme: undefined, // English translation: 'Theme'
      logOut: '注销',
    },
    toast: {
      onFailToLoadEntries: '加载内容失败: %{details}',
      onFailToLoadDeployPreview: '加载预览失败: %{details}',
      onFailToPersist: '保存内容失败: %{details}',
      onFailToPersistMedia: undefined, // English translation: 'Failed to persist media: %{details}'
      onFailToDelete: '删除内容失败: %{details}',
      onFailToDeleteMedia: undefined, // English translation: 'Failed to delete media: %{details}'
      onFailToUpdateStatus: '更新状态失败: %{details}',
      missingRequiredField: '你漏掉了一个必填项，请在保存之前将它填写好',
      entrySaved: '内容已保存',
      entryDeleted: undefined, // English translation: 'Entry delete'
      entryPublished: '内容已发布',
      entryUnpublished: '内容已撤销发布',
      onFailToPublishEntry: '发布失败: %{details}',
      onFailToUnpublishEntry: '撤销发布失败: %{details}',
      entryUpdated: '内容状态已更新',
      onDeletePublishedEntry: undefined, // English translation: 'Published entry deleted'
      onDeleteUnpublishedChanges: '未发布的修改已删除',
      onFailToAuth: '%{details}',
      onLoggedOut: '你已注销，请先保存好数据然后再次登录',
      onBackendDown: 'Backend 服务已中断，欲知详情请查看：%{details}',
    },
  },
  workflow: {
    workflow: {
      dashboard: undefined, // English translation: 'Dashboard'
      loading: '正在加载编辑工作流项目',
      workflowHeading: '编辑工作流',
      newPost: '新建帖子',
      description:
        '%{smart_count} 个待审查的内容、%{readyCount} 个已就绪的内容 |||| %{smart_count} 个待检查的内容、%{readyCount} 个已就绪的内容',
      dateFormat: 'MMMM D',
    },
    workflowCard: {
      lastChange: '%{date} 由 %{author} 修改',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: '由 %{author} 修改',
      deleteChanges: '删除修改',
      deleteNewEntry: '删除新内容',
      publishChanges: '发布修改',
      publishNewEntry: '发布新内容',
    },
    workflowList: {
      onDeleteEntry: '你确定要删除此内容吗？',
      onPublishingNotReadyEntry:
        '只有状态为“就绪”的项目才能被发布。需要先将卡片拖动到“就绪”一列才能发布',
      onPublishEntry: '你确定要发布此内容吗？',
      draft: '草稿',
      pending_review: '审查中',
      pending_publish: '就绪',
      currentEntries: '%{smart_count} 个内容 |||| %{smart_count} 个内容',
    },
    openAuthoring: {
      forkRequired: undefined, // English translation: 'Open Authoring is enabled. We need to use a fork on your github account. (If a fork already exists, we'll use that.)'
      forkRepo: undefined, // English translation: 'Fork the repo'
      markReadyForReview: undefined, // English translation: 'Mark Ready for Review'
    },
  },
};

export default zh_Hans;
