import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const CodepenIcon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
    return (
        <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><polygon points='12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2'></polygon><line x1='12' y1='22' x2='12' y2='15.5'></line><polyline points='22 8.5 12 15.5 2 8.5'></polyline><polyline points='2 15.5 12 8.5 22 15.5'></polyline><line x1='12' y1='2' x2='12' y2='8.5'></line></svg>
    );
});
