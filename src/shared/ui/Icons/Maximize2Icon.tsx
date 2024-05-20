import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const Maximize2Icon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
    return (
        <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><polyline points='15 3 21 3 21 9'></polyline><polyline points='9 21 3 21 3 15'></polyline><line x1='21' y1='3' x2='14' y2='10'></line><line x1='3' y1='21' x2='10' y2='14'></line></svg>
    );
});
