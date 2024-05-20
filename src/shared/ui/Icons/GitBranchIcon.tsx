import classNames from 'classnames';
import { forwardRef } from 'react';

import { IconProps } from './IconProps';
import styles from './Icon.module.css';

export const GitBranchIcon = forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => {
    return (
        <svg className={classNames(styles.icon, className)} ref={ref} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' {...props}><line x1='6' y1='3' x2='6' y2='15'></line><circle cx='18' cy='6' r='3'></circle><circle cx='6' cy='18' r='3'></circle><path d='M18 9a9 9 0 0 1-9 9'></path></svg>
    );
});
