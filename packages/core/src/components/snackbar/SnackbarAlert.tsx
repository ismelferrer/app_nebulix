import { Info as InfoIcon } from '@styled-icons/material-outlined/Info';
import { Close as CloseIcon } from '@styled-icons/material/Close';
import { ErrorOutline as ErrorOutlineIcon } from '@styled-icons/material/ErrorOutline';
import { TaskAlt as TaskAltIcon } from '@styled-icons/material/TaskAlt';
import { WarningAmber as WarningAmberIcon } from '@styled-icons/material/WarningAmber';
import React, { forwardRef, useMemo } from 'react';

import useTranslate from '@staticcms/core/lib/hooks/useTranslate';
import classNames from '@staticcms/core/lib/util/classNames.util';
import { generateClassNames } from '@staticcms/core/lib/util/theming.util';
import IconButton from '../common/button/IconButton';

import type { SnackbarMessage } from '@staticcms/core/store/slices/snackbars';

import './SnackbarAlert.css';

export const classes = generateClassNames('SnackbarAlert', [
  'root',
  'error',
  'success',
  'warning',
  'info',
  'icon-wrapper',
  'icon',
  'message',
  'close-button',
  'close-button-sr-label',
  'close-button-icon',
]);

interface SnackbarAlertProps {
  data: SnackbarMessage;
  onClose: () => void;
}

const SnackbarAlert = forwardRef<HTMLDivElement, SnackbarAlertProps>(({ data, onClose }, ref) => {
  const t = useTranslate();

  const { type, message } = data;

  const renderedMessage = useMemo(() => {
    if (typeof message === 'string') {
      return message;
    }

    const { key, options } = message;
    return t(key, options);
  }, [message, t]);

  const icon = useMemo(() => {
    switch (type) {
      case 'error':
        return <ErrorOutlineIcon className={classes.icon} />;
      case 'success':
        return <TaskAltIcon className={classes.icon} />;
      case 'warning':
        return <WarningAmberIcon className={classes.icon} />;
      default:
        return <InfoIcon className={classes.icon} />;
    }
  }, [type]);

  return (
    <div
      id="toast-default"
      className={classNames(
        classes.root,
        type === 'error' && classes.error,
        type === 'success' && classes.success,
        type === 'warning' && classes.warning,
        type === 'info' && classes.info,
      )}
      role="alert"
      ref={ref}
    >
      <div className={classes['icon-wrapper']}>{icon}</div>
      <div className={classes.message} data-testid="toast-messages">
        {renderedMessage}
      </div>
      <IconButton
        icon={CloseIcon}
        variant="text"
        color="secondary"
        onClick={onClose}
        rootClassName={classes['close-button']}
        size="small"
        aria-label="close"
      />
    </div>
  );
});

SnackbarAlert.displayName = 'SnackbarAlert';

export default SnackbarAlert;
