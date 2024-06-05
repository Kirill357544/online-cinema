import { FC, useState } from 'react';

import { Rating } from '@shared/ui/Rating';

import '@shared/styles/styles.css';
import { Button } from '@shared/ui/Button';

export const App: FC = () => {
  const [rating, setRating] = useState(5);

  return (
    <div className='light'>
      <Rating size={10} rating={rating} onChange={setRating} />
      <h1>{rating}</h1>
      <Button>test</Button>
    </div>
  );
};
