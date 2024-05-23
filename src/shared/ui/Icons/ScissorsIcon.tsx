import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const ScissorsIcon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
  return (
    <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><circle cx='6' cy='6' r='3'></circle><circle cx='6' cy='18' r='3'></circle><line x1='20' y1='4' x2='8.12' y2='15.88'></line><line x1='14.47' y1='14.48' x2='20' y2='20'></line><line x1='8.12' y1='8.12' x2='12' y2='12'></line></svg>
  );
});
