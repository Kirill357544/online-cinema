import classNames from 'classnames';
import { forwardRef } from 'react';

import styles from './Spinner.module.css';

export type SpinnerProps = {
  size?: SpinnerSizesType;
  className?: string;
};

type SpinnerSizesType = 'small' | 'medium' | 'large';

export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(({
  size = 'medium',
  className,
  ...props
}, ref) => {
  return (
    <span className={classNames(styles.spinner, styles[size], className)} ref={ref} {...props} />
  );
});
