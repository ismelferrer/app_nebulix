import { Info as InfoIcon } from '@styled-icons/material-outlined/Info';
import get from 'lodash/get';
import React, { useEffect, useMemo, useState } from 'react';

import { getFieldPreview } from '@staticcms/core/lib/registry';
import { getEntryBackupKey } from '@staticcms/core/lib/util/backup.util';
import {
  selectEntryCollectionTitle,
  getFields,
  selectTemplateName,
} from '@staticcms/core/lib/util/collection.util';
import localForage from '@staticcms/core/lib/util/localForage';
import { isNullish } from '@staticcms/core/lib/util/null.util';
import { selectConfig, selectUseWorkflow } from '@staticcms/core/reducers/selectors/config';
import { useAppSelector } from '@staticcms/core/store/hooks';
import TableCell from '../../common/table/TableCell';
import TableRow from '../../common/table/TableRow';
import WorkflowStatusPill from '../../workflow/WorkflowStatusPill';
import entriesClasses from './Entries.classes';
import RelationSummary from '@staticcms/relation/RelationSummary';
import { getI18nInfo } from '@staticcms/core/lib/i18n';

import type { BackupEntry, CollectionWithDefaults, Entry, TranslatedProps } from '@staticcms/core';
import type { FC } from 'react';

export interface EntryRowProps {
  entry: Entry;
  collection: CollectionWithDefaults;
  collectionLabel?: string;
  columnFields: string[];
}

const EntryRow: FC<TranslatedProps<EntryRowProps>> = ({
  collection,
  entry,
  collectionLabel,
  columnFields,
  t,
}) => {
  const path = useMemo(
    () => `/collections/${collection.name}/entries/${entry.slug}`,
    [collection.name, entry.slug],
  );

  const { default_locale } = useMemo(() => getI18nInfo(collection), [collection]) ?? {};

  const summary = useMemo(() => selectEntryCollectionTitle(collection, entry), [collection, entry]);

  const fields = useMemo(() => getFields(collection, entry.slug), [collection, entry.slug]);

  const config = useAppSelector(selectConfig);
  const useWorkflow = useAppSelector(selectUseWorkflow);

  const templateName = useMemo(
    () => selectTemplateName(collection, entry.slug),
    [collection, entry.slug],
  );

  const [hasLocalBackup, setHasLocalBackup] = useState(false);
  useEffect(() => {
    if (config?.disable_local_backup) {
      return;
    }

    let alive = true;

    const checkLocalBackup = async () => {
      const key = getEntryBackupKey(collection.name, entry.slug);
      const backup = await localForage.getItem<BackupEntry>(key);

      if (alive) {
        setHasLocalBackup(Boolean(backup));
      }
    };

    checkLocalBackup();

    // Check again after small delay to ensure we capture the draft just made from the editor
    setTimeout(() => {
      checkLocalBackup();
    }, 250);

    return () => {
      alive = false;
    };
  }, [collection.name, config?.disable_local_backup, entry.slug]);

  return (
    <TableRow className={entriesClasses['entry-listing-table-row']} to={path}>
      {collectionLabel ? (
        <TableCell key="collectionLabel" to={path}>
          {collectionLabel}
        </TableCell>
      ) : null}
      {columnFields.map(fieldName => {
        if (fieldName === 'summary') {
          return (
            <TableCell key={fieldName} to={path}>
              {summary}
            </TableCell>
          );
        }

        const field = fields.find(f => f.name === fieldName);
        const value = get(entry.data, fieldName);
        const FieldPreviewComponent = getFieldPreview(templateName, fieldName);

        return (
          <TableCell key={fieldName} to={path}>
            {field && FieldPreviewComponent ? (
              <FieldPreviewComponent collection={collection} field={field} value={value} />
            ) : isNullish(value) ? (
              ''
            ) : field?.widget === 'relation' ? (
              <RelationSummary field={field} value={value} locale={default_locale} entry={entry} />
            ) : (
              String(value)
            )}
          </TableCell>
        );
      })}
      <TableCell key="unsavedChanges" to={path} shrink>
        {hasLocalBackup ? (
          <InfoIcon
            className={entriesClasses['entry-listing-local-backup']}
            title={t('ui.localBackup.hasLocalBackup')}
          />
        ) : null}
      </TableCell>
      {useWorkflow ? (
        <TableCell key="status" to={path} shrink>
          <WorkflowStatusPill status={entry.status} />
        </TableCell>
      ) : null}
    </TableRow>
  );
};

export default EntryRow;
