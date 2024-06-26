import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const CloudSnowIcon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
  return (
    <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><path d='M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25'></path><line x1='8' y1='16' x2='8.01' y2='16'></line><line x1='8' y1='20' x2='8.01' y2='20'></line><line x1='12' y1='18' x2='12.01' y2='18'></line><line x1='12' y1='22' x2='12.01' y2='22'></line><line x1='16' y1='16' x2='16.01' y2='16'></line><line x1='16' y1='20' x2='16.01' y2='20'></line></svg>
  );
});
