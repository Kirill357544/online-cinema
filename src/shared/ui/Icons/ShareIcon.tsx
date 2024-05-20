import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const ShareIcon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
    return (
        <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><path d='M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8'></path><polyline points='16 6 12 2 8 6'></polyline><line x1='12' y1='2' x2='12' y2='15'></line></svg>
    );
});
