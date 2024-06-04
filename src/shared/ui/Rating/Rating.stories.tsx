import { Meta } from '@storybook/react';

import { Rating, RatingProps } from './Rating';
import { FC, useState } from 'react';

const meta: Meta = {
  title: 'Components/Rating',
  component: Rating,
  tags: ['autodocs'],
};

export const Playground: FC<RatingProps> = ({ size, rating: initRating, onChange, ...props }) => {
  const [rating, setRating] = useState(initRating);

  function handleChange(value: number) {
    if (typeof onChange === 'function') {
      onChange(value);
    }
    setRating(value);
  }

  return <Rating size={size} rating={rating} onChange={handleChange} {...props} />;
};


export default meta;
