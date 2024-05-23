import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const BoldIcon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
  return (
    <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><path d='M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z'></path><path d='M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z'></path></svg>
  );
});
