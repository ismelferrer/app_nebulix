import React from 'react';

import useMediaAsset from '@staticcms/core/lib/hooks/useMediaAsset';

import type {
  CollectionWithDefaults,
  Entry,
  FileOrImageField,
  WidgetPreviewProps,
} from '@staticcms/core';
import type { FC } from 'react';

interface FileLinkProps {
  value: string;
  collection: CollectionWithDefaults<FileOrImageField>;
  field: FileOrImageField;
  entry: Entry;
}

const FileLink: FC<FileLinkProps> = ({ value, collection, field, entry }) => {
  const assetSource = useMediaAsset(value, collection, field, entry);

  return (
    <a href={assetSource} rel="noopener noreferrer" target="_blank">
      {value}
    </a>
  );
};

const FileContent: FC<WidgetPreviewProps<string | string[], FileOrImageField>> = ({
  value,
  collection,
  field,
  entry,
}) => {
  if (!value) {
    return null;
  }

  if (Array.isArray(value)) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {value.map((link, index) => (
          <FileLink
            key={`link-preview-${index}`}
            value={link}
            collection={collection}
            field={field}
            entry={entry}
          />
        ))}
      </div>
    );
  }

  return <FileLink key={value} value={value} collection={collection} field={field} entry={entry} />;
};

const FilePreview: FC<WidgetPreviewProps<string | string[], FileOrImageField>> = props => {
  return <div>{props.value ? <FileContent {...props} /> : null}</div>;
};

export default FilePreview;
