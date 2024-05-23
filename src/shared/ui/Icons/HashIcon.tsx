import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const HashIcon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
  return (
    <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><line x1='4' y1='9' x2='20' y2='9'></line><line x1='4' y1='15' x2='20' y2='15'></line><line x1='10' y1='3' x2='8' y2='21'></line><line x1='16' y1='3' x2='14' y2='21'></line></svg>
  );
});
