import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const PauseIcon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
  return (
    <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><rect x='6' y='4' width='4' height='16'></rect><rect x='14' y='4' width='4' height='16'></rect></svg>
  );
});
