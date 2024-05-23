import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const ShuffleIcon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
  return (
    <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><polyline points='16 3 21 3 21 8'></polyline><line x1='4' y1='20' x2='21' y2='3'></line><polyline points='21 16 21 21 16 21'></polyline><line x1='15' y1='15' x2='21' y2='21'></line><line x1='4' y1='4' x2='9' y2='9'></line></svg>
  );
});
