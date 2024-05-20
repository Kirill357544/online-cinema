import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const PenToolIcon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
    return (
        <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><path d='M12 19l7-7 3 3-7 7-3-3z'></path><path d='M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z'></path><path d='M2 2l7.586 7.586'></path><circle cx='11' cy='11' r='2'></circle></svg>
    );
});
