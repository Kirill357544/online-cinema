import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const RepeatIcon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
    return (
        <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><polyline points='17 1 21 5 17 9'></polyline><path d='M3 11V9a4 4 0 0 1 4-4h14'></path><polyline points='7 23 3 19 7 15'></polyline><path d='M21 13v2a4 4 0 0 1-4 4H3'></path></svg>
    );
});
