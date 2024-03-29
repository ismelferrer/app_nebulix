import { FormatBold as FormatBoldIcon } from '@styled-icons/material/FormatBold';
import { MARK_BOLD } from '@udecode/plate';
import React from 'react';

import MarkToolbarButton from './common/MarkToolbarButton';
import { useTranslate } from '@staticcms/core/lib';

import type { FC } from 'react';

export interface BoldToolbarButtonProps {
  disabled: boolean;
  variant: 'button' | 'menu';
}

const BoldToolbarButton: FC<BoldToolbarButtonProps> = ({ disabled, variant }) => {
  const t = useTranslate();

  return (
    <MarkToolbarButton
      id="bold"
      tooltip={t('editor.editorWidgets.markdown.bold')}
      type={MARK_BOLD}
      variant={variant}
      icon={FormatBoldIcon}
      disabled={disabled}
    />
  );
};

export default BoldToolbarButton;
