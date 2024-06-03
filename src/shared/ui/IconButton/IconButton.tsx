import classNames from 'classnames';
import { ReactElement, forwardRef } from 'react';

import { Button, BaseButtonProps } from '@shared/ui/Button';
import { IconProps } from '@shared/ui/Icons';

import styles from './IconButton.module.css';

export type IconButtonProps = Omit<BaseButtonProps, 'children'> & {
  icon: ReactElement<IconProps>;
  isRound?: boolean;
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({
  isRound = false,
  icon,
  className,
  ...props
}, ref) => {
  return (
    <Button className={classNames(styles.iconButton, isRound && styles.isRound, className)} ref={ref} {...props}>
      {icon}
    </Button>
  );
});
