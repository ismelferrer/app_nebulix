import { Image as ImageIcon } from '@styled-icons/material/Image';
import { ELEMENT_IMAGE, getAboveNode, setNodes } from '@udecode/plate';
import React, { useCallback, useMemo, useState } from 'react';

import { useTranslate } from '@staticcms/core/lib';
import useMediaInsert from '@staticcms/core/lib/hooks/useMediaInsert';
import { isNotEmpty } from '@staticcms/core/lib/util/string.util';
import { useMdPlateEditorState } from '@staticcms/markdown/plate/plateTypes';
import ToolbarButton from './common/ToolbarButton';

import type { CollectionWithDefaults, MarkdownField, MediaPath } from '@staticcms/core';
import type { MdImageElement } from '@staticcms/markdown/plate/plateTypes';
import type { FC } from 'react';
import type { BaseSelection } from 'slate';

export interface InsertImageToolbarButtonProps {
  variant: 'button' | 'menu';
  currentValue?: { url: string; alt?: string };
  collection: CollectionWithDefaults<MarkdownField>;
  field: MarkdownField;
  disabled: boolean;
}

const InsertImageToolbarButton: FC<InsertImageToolbarButtonProps> = ({
  variant,
  field,
  collection,
  currentValue,
  disabled,
}) => {
  const t = useTranslate();

  const [selection, setSelection] = useState<BaseSelection>();
  const editor = useMdPlateEditorState();
  const handleInsert = useCallback(
    (newUrl: MediaPath<string>) => {
      if (isNotEmpty(newUrl.path)) {
        const image: MdImageElement = {
          type: ELEMENT_IMAGE,
          url: newUrl.path,
          children: [{ text: '' }],
        };

        const imageAbove = getAboveNode<MdImageElement>(editor, {
          at: selection?.focus,
          match: { type: ELEMENT_IMAGE },
        });

        if (imageAbove) {
          if (newUrl.path !== imageAbove[0]?.url || newUrl.alt !== imageAbove[0]?.alt) {
            setNodes<MdImageElement>(
              editor,
              { url: newUrl.path, alt: newUrl.alt },
              {
                at: imageAbove[1],
              },
            );
          }

          return;
        }

        setNodes<MdImageElement>(editor, image, {
          at: selection?.focus,
        });
      }
    },
    [editor, selection],
  );

  const chooseUrl = useMemo(() => field.choose_url ?? true, [field.choose_url]);

  const openMediaLibrary = useMediaInsert(
    {
      path: currentValue?.url ?? '',
      alt: currentValue?.alt,
    },
    { collection, field, forImage: true, insertOptions: { chooseUrl, showAlt: true } },
    handleInsert,
  );

  const handleOpenMediaLibrary = useCallback(() => {
    setSelection(editor.selection);
    openMediaLibrary();
  }, [editor.selection, openMediaLibrary]);

  return (
    <ToolbarButton
      id="image"
      label={t('editor.editorWidgets.markdown.image')}
      tooltip={t('editor.editorWidgets.markdown.insertImage')}
      icon={ImageIcon}
      onClick={handleOpenMediaLibrary}
      disabled={disabled}
      variant={variant}
    />
  );
};

export default InsertImageToolbarButton;
