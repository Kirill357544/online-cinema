import { FC, useState } from 'react';

import { Rating } from '@shared/ui/Rating';

import '@shared/styles/styles.css';

export const App: FC = () => {
  const [rating, setRating] = useState(5);

  return (
    <>
      <Rating size={10} rating={rating} onChange={setRating} />
      <h1>{rating}</h1>
    </>
  );
};
