import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const Navigation2Icon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
    return (
        <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><polygon points='12 2 19 21 12 17 5 21 12 2'></polygon></svg>
    );
});
