import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const RewindIcon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
  return (
    <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><polygon points='11 19 2 12 11 5 11 19'></polygon><polygon points='22 19 13 12 22 5 22 19'></polygon></svg>
  );
});
