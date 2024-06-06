import { FC, useState } from 'react';

import { Rating } from '@shared/ui/Rating';

import { ThemeSwitcher } from '@features/ThemeSwitcher';

import '@shared/styles/styles.css';
import { Button } from '@shared/ui/Button';
import { useThemeContext } from '@shared/providers/ThemeProvider';

export const App: FC = () => {
  const [rating, setRating] = useState(5);
  const { theme } = useThemeContext();

  return (
    <div className={theme}>
      <Rating size={10} rating={rating} onChange={setRating} />
      <h1>{rating}</h1>
      <ThemeSwitcher />
      <Button>test</Button>
    </div>
  );
};
