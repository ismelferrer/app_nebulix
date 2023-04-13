export const SORT_DIRECTION_ASCENDING = 'Ascending';
export const SORT_DIRECTION_DESCENDING = 'Descending';
export const SORT_DIRECTION_NONE = 'None';

/**
 * Local Storage
 */
export const SCROLL_SYNC_ENABLED = 'cms.scroll-sync-enabled';

/**
 * Actions
 */

// Auth
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const AUTH_REQUEST_DONE = 'AUTH_REQUEST_DONE';
export const LOGOUT = 'LOGOUT';

// Config
export const CONFIG_REQUEST = 'CONFIG_REQUEST';
export const CONFIG_SUCCESS = 'CONFIG_SUCCESS';
export const CONFIG_FAILURE = 'CONFIG_FAILURE';

// Entries
export const ENTRY_REQUEST = 'ENTRY_REQUEST';
export const ENTRY_SUCCESS = 'ENTRY_SUCCESS';
export const ENTRY_FAILURE = 'ENTRY_FAILURE';

export const ENTRIES_REQUEST = 'ENTRIES_REQUEST';
export const ENTRIES_SUCCESS = 'ENTRIES_SUCCESS';
export const ENTRIES_FAILURE = 'ENTRIES_FAILURE';

export const SORT_ENTRIES_REQUEST = 'SORT_ENTRIES_REQUEST';
export const SORT_ENTRIES_SUCCESS = 'SORT_ENTRIES_SUCCESS';
export const SORT_ENTRIES_FAILURE = 'SORT_ENTRIES_FAILURE';

export const FILTER_ENTRIES_REQUEST = 'FILTER_ENTRIES_REQUEST';
export const FILTER_ENTRIES_SUCCESS = 'FILTER_ENTRIES_SUCCESS';
export const FILTER_ENTRIES_FAILURE = 'FILTER_ENTRIES_FAILURE';

export const GROUP_ENTRIES_REQUEST = 'GROUP_ENTRIES_REQUEST';
export const GROUP_ENTRIES_SUCCESS = 'GROUP_ENTRIES_SUCCESS';
export const GROUP_ENTRIES_FAILURE = 'GROUP_ENTRIES_FAILURE';

export const DRAFT_CREATE_FROM_ENTRY = 'DRAFT_CREATE_FROM_ENTRY';
export const DRAFT_CREATE_EMPTY = 'DRAFT_CREATE_EMPTY';
export const DRAFT_DISCARD = 'DRAFT_DISCARD';
export const DRAFT_CHANGE_FIELD = 'DRAFT_CHANGE_FIELD';
export const DRAFT_VALIDATION_ERRORS = 'DRAFT_VALIDATION_ERRORS';
export const DRAFT_LOCAL_BACKUP_RETRIEVED = 'DRAFT_LOCAL_BACKUP_RETRIEVED';
export const DRAFT_LOCAL_BACKUP_DELETE = 'DRAFT_LOCAL_BACKUP_DELETE';
export const DRAFT_CREATE_FROM_LOCAL_BACKUP = 'DRAFT_CREATE_FROM_LOCAL_BACKUP';
export const DRAFT_CREATE_DUPLICATE_FROM_ENTRY = 'DRAFT_CREATE_DUPLICATE_FROM_ENTRY';

export const ENTRY_PERSIST_REQUEST = 'ENTRY_PERSIST_REQUEST';
export const ENTRY_PERSIST_SUCCESS = 'ENTRY_PERSIST_SUCCESS';
export const ENTRY_PERSIST_FAILURE = 'ENTRY_PERSIST_FAILURE';

export const ENTRY_DELETE_REQUEST = 'ENTRY_DELETE_REQUEST';
export const ENTRY_DELETE_SUCCESS = 'ENTRY_DELETE_SUCCESS';
export const ENTRY_DELETE_FAILURE = 'ENTRY_DELETE_FAILURE';

export const ADD_DRAFT_ENTRY_MEDIA_FILE = 'ADD_DRAFT_ENTRY_MEDIA_FILE';
export const REMOVE_DRAFT_ENTRY_MEDIA_FILE = 'REMOVE_DRAFT_ENTRY_MEDIA_FILE';

export const CHANGE_VIEW_STYLE = 'CHANGE_VIEW_STYLE';

// Media
export const ADD_ASSETS = 'ADD_ASSETS';
export const ADD_ASSET = 'ADD_ASSET';
export const REMOVE_ASSET = 'REMOVE_ASSET';

export const LOAD_ASSET_REQUEST = 'LOAD_ASSET_REQUEST';
export const LOAD_ASSET_SUCCESS = 'LOAD_ASSET_SUCCESS';
export const LOAD_ASSET_FAILURE = 'LOAD_ASSET_FAILURE';

// Media Library
export const MEDIA_LIBRARY_OPEN = 'MEDIA_LIBRARY_OPEN';
export const MEDIA_LIBRARY_CLOSE = 'MEDIA_LIBRARY_CLOSE';
export const MEDIA_INSERT = 'MEDIA_INSERT';
export const MEDIA_REMOVE_INSERTED = 'MEDIA_REMOVE_INSERTED';
export const MEDIA_LOAD_REQUEST = 'MEDIA_LOAD_REQUEST';
export const MEDIA_LOAD_SUCCESS = 'MEDIA_LOAD_SUCCESS';
export const MEDIA_LOAD_FAILURE = 'MEDIA_LOAD_FAILURE';
export const MEDIA_PERSIST_REQUEST = 'MEDIA_PERSIST_REQUEST';
export const MEDIA_PERSIST_SUCCESS = 'MEDIA_PERSIST_SUCCESS';
export const MEDIA_PERSIST_FAILURE = 'MEDIA_PERSIST_FAILURE';
export const MEDIA_DELETE_REQUEST = 'MEDIA_DELETE_REQUEST';
export const MEDIA_DELETE_SUCCESS = 'MEDIA_DELETE_SUCCESS';
export const MEDIA_DELETE_FAILURE = 'MEDIA_DELETE_FAILURE';
export const MEDIA_DISPLAY_URL_REQUEST = 'MEDIA_DISPLAY_URL_REQUEST';
export const MEDIA_DISPLAY_URL_SUCCESS = 'MEDIA_DISPLAY_URL_SUCCESS';
export const MEDIA_DISPLAY_URL_FAILURE = 'MEDIA_DISPLAY_URL_FAILURE';

// Scroll
export const TOGGLE_SCROLL = 'TOGGLE_SCROLL';
export const SET_SCROLL = 'SET_SCROLL';

// Search
export const SEARCH_ENTRIES_REQUEST = 'SEARCH_ENTRIES_REQUEST';
export const SEARCH_ENTRIES_SUCCESS = 'SEARCH_ENTRIES_SUCCESS';
export const SEARCH_ENTRIES_FAILURE = 'SEARCH_ENTRIES_FAILURE';

export const QUERY_REQUEST = 'QUERY_REQUEST';
export const QUERY_SUCCESS = 'QUERY_SUCCESS';
export const QUERY_FAILURE = 'QUERY_FAILURE';

export const SEARCH_CLEAR = 'SEARCH_CLEAR';

// Status
export const STATUS_REQUEST = 'STATUS_REQUEST';
export const STATUS_SUCCESS = 'STATUS_SUCCESS';
export const STATUS_FAILURE = 'STATUS_FAILURE';

// Wait Until
export const WAIT_UNTIL_ACTION = 'WAIT_UNTIL_ACTION';

// Global UI
export const THEME_CHANGE = 'THEME_CHANGE';
