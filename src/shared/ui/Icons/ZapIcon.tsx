import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const ZapIcon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
    return (
        <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'></polygon></svg>
    );
});
