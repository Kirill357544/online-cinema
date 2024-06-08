import { Meta } from '@storybook/react';

import { Modal, ModalProps } from './Modal';
import { FC, useState } from 'react';
import { Button } from '../Button';

const meta: Meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export const Playground: FC<ModalProps> = ({ onClose, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    if (typeof onClose === 'function') {
      onClose();
    }
    setIsOpen(false);
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      {isOpen && (
        <Modal onClose={handleClose} {...props}>
          Some Modal
        </Modal>
      )}
    </div>
  );
};


export default meta;
