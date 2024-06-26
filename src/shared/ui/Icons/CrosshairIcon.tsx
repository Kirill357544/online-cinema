import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const CrosshairIcon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
  return (
    <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><circle cx='12' cy='12' r='10'></circle><line x1='22' y1='12' x2='18' y2='12'></line><line x1='6' y1='12' x2='2' y2='12'></line><line x1='12' y1='6' x2='12' y2='2'></line><line x1='12' y1='22' x2='12' y2='18'></line></svg>
  );
});
