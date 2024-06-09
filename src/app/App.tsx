import { FC, useState } from 'react';

import { Rating } from '@shared/ui/Rating';

import { ThemeSwitcher } from '@features/ThemeSwitcher';

import '@shared/styles/styles.css';
import { Button } from '@shared/ui/Button';
import { useThemeContext } from '@shared/providers/ThemeProvider';
import { Modal } from '@shared/ui/Modal/Modal';

export const App: FC = () => {
  const [rating, setRating] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme } = useThemeContext();

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <div className={theme}>
      <Rating size={10} rating={rating} onChange={setRating} />
      <h1>{rating}</h1>
      <ThemeSwitcher />
      <Button onClick={handleOpenModal}>test</Button>

      {isModalOpen && <Modal onClose={handleCloseModal}>
        <h1>testModal</h1>
        <div>
          <Button>test</Button>
        </div>
      </Modal>}
    </div>
  );
};
