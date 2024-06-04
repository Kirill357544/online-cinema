import { FC, useState } from 'react';
import classNames from 'classnames';

import { StarIcon } from '@shared/ui/Icons';

import styles from './Rating.module.css';

export type RatingProps = {
  size?: number;
  rating: number;
  onChange: (value: number) => void;
};

export const Rating: FC<RatingProps> = ({ size = 5, rating, onChange, ...props }) => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className={styles.root} {...props}>
      {new Array(size).fill(null).map((_, index) => {
        const value = index + 1;

        return (
          <button
            key={value}
            className={styles.button}
            onClick={() => onChange(value)}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(null)}
          >
            <StarIcon className={classNames(styles.star, (hover || rating) >= value && styles.hovered)} />
          </button>
        );
      })}
    </div>
  );
};
