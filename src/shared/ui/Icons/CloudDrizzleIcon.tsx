import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const CloudDrizzleIcon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
  return (
    <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><line x1='8' y1='19' x2='8' y2='21'></line><line x1='8' y1='13' x2='8' y2='15'></line><line x1='16' y1='19' x2='16' y2='21'></line><line x1='16' y1='13' x2='16' y2='15'></line><line x1='12' y1='21' x2='12' y2='23'></line><line x1='12' y1='15' x2='12' y2='17'></line><path d='M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25'></path></svg>
  );
});
