import isBoolean from 'lodash/isBoolean';

import type { MediaFile } from '../backend';
import type { WorkflowStatus } from '../constants/publishModes';
import type { Entry } from '../interface';

interface Options {
  partial?: boolean;
  raw?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  label?: string | null;
  isModification?: boolean | null;
  mediaFiles?: MediaFile[] | null;
  author?: string;
  updatedOn?: string;
  status?: WorkflowStatus;
  meta?: { path: string };
  i18n?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [locale: string]: any;
  };
  openAuthoring?: boolean;
}

export default function createEntry(
  collection: string,
  slug = '',
  path = '',
  options: Options = {},
) {
  const returnObj: Entry = {
    collection,
    slug,
    path,
    partial: options.partial || false,
    raw: options.raw || '',
    data: options.data || {},
    label: options.label || null,
    isModification: isBoolean(options.isModification) ? options.isModification : null,
    mediaFiles: options.mediaFiles || [],
    author: options.author || '',
    updatedOn: options.updatedOn || '',
    status: options.status || undefined,
    i18n: options.i18n || {},
    meta: options.meta || undefined,
    openAuthoring: options.openAuthoring,
  };

  return returnObj;
}
