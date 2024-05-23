import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const CornerDownRightIcon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
  return (
    <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><polyline points='15 10 20 15 15 20'></polyline><path d='M4 4v7a4 4 0 0 0 4 4h12'></path></svg>
  );
});
