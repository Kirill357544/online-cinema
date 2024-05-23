import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const CloudLightningIcon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
  return (
    <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><path d='M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9'></path><polyline points='13 11 9 17 15 17 11 23'></polyline></svg>
  );
});
