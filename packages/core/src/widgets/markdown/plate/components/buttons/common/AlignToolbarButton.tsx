import { isCollapsed, KEY_ALIGN, setAlign, someNode } from '@udecode/plate';
import React, { useCallback } from 'react';

import { useMdPlateEditorState } from '@staticcms/markdown/plate/plateTypes';
import ToolbarButton from './ToolbarButton';

import type { Alignment } from '@udecode/plate';
import type { FC } from 'react';
import type { ToolbarButtonProps } from './ToolbarButton';

export interface AlignToolbarButtonProps extends Omit<ToolbarButtonProps, 'active' | 'onClick'> {
  value: Alignment;
  pluginKey?: string;
  variant: 'button' | 'menu';
}

const AlignToolbarButton: FC<AlignToolbarButtonProps> = ({
  value,
  pluginKey = KEY_ALIGN,
  ...props
}) => {
  const editor = useMdPlateEditorState();

  const handleOnClick = useCallback(() => {
    setAlign(editor, {
      value,
      key: pluginKey,
    });
  }, [editor, pluginKey, value]);

  return (
    <ToolbarButton
      active={
        isCollapsed(editor?.selection) && someNode(editor!, { match: { [pluginKey]: value } })
      }
      onClick={handleOnClick}
      {...props}
    />
  );
};

export default AlignToolbarButton;
