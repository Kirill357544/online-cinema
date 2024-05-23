import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const ZapOffIcon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
  return (
    <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><polyline points='12.41 6.75 13 2 10.57 4.92'></polyline><polyline points='18.57 12.91 21 10 15.66 10'></polyline><polyline points='8 8 3 14 12 14 11 22 16 16'></polyline><line x1='1' y1='1' x2='23' y2='23'></line></svg>
  );
});
