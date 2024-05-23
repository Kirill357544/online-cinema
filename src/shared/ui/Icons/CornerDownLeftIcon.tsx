import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const CornerDownLeftIcon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
  return (
    <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><polyline points='9 10 4 15 9 20'></polyline><path d='M20 4v7a4 4 0 0 1-4 4H4'></path></svg>
  );
});
