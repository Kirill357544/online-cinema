import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const AlignLeftIcon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
  return (
    <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><line x1='17' y1='10' x2='3' y2='10'></line><line x1='21' y1='6' x2='3' y2='6'></line><line x1='21' y1='14' x2='3' y2='14'></line><line x1='17' y1='18' x2='3' y2='18'></line></svg>
  );
});
