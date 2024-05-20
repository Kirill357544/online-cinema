import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const ArrowDownCircleIcon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
    return (
        <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><circle cx='12' cy='12' r='10'></circle><polyline points='8 12 12 16 16 12'></polyline><line x1='12' y1='8' x2='12' y2='16'></line></svg>
    );
});
