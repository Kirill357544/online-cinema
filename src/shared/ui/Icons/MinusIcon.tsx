import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const MinusIcon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
  return (
    <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><line x1='5' y1='12' x2='19' y2='12'></line></svg>
  );
});
