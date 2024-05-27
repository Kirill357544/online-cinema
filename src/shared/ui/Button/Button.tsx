import classNames from 'classnames';
import { ReactElement, forwardRef } from 'react';

import { IconProps } from '@shared/ui/Icons';
import { Spinner } from '@shared/ui/Spinner';

import { BaseButtonProps } from './types';

import styles from './Button.module.css';

export type ButtonProps = BaseButtonProps & {
  lIcon?: ReactElement<IconProps>;
  rIcon?: ReactElement<IconProps>;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  loading = false,
  variant = 'contained',
  lIcon,
  rIcon,
  children,
  className,
  disabled,
  ...props
}, ref) => {
  return (
    <button
      className={classNames(styles.button, styles[variant], loading && styles.loading, className)}
      disabled={loading || disabled}
      ref={ref}
      {...props}
    >
      {lIcon}
      {children}
      {rIcon}
      {loading && <Spinner className={styles.spinner} size='small' />}
    </button>
  );
});
