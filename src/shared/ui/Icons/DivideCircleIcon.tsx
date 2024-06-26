import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const DivideCircleIcon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
  return (
    <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><line x1='8' y1='12' x2='16' y2='12'></line><line x1='12' y1='16' x2='12' y2='16'></line><line x1='12' y1='8' x2='12' y2='8'></line><circle cx='12' cy='12' r='10'></circle></svg>
  );
});
