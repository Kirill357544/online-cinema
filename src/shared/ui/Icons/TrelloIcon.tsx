import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const TrelloIcon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
  return (
    <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect><rect x='7' y='7' width='3' height='9'></rect><rect x='14' y='7' width='3' height='5'></rect></svg>
  );
});
