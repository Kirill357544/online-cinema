import { forwardRef } from 'react';
import classNames from 'classnames';

import styles from './Badge.module.css';

export type BadgeProps = {
  className?: string;
  title: string;
  variant?: BadgeVariantType;
};

export type BadgeVariantType = 'neutral' | 'success' | 'warning' | 'danger' | 'promo';

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(({
  variant = 'neutral',
  title,
  className,
  ...props
}, ref) => {
  return (
    <div className={classNames(styles.badge, styles[variant], className)} ref={ref} {...props}>
      {title}
    </div>
  );
});
