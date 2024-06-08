import { FC, MouseEvent, ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';

import { ModalSizeType } from './types';
import styles from './Modal.module.css';

export type ModalProps = {
  className?: string,
  size?: ModalSizeType;
  children?: ReactNode;
  key?: string | null;
  onClose: () => void;
};

export const Modal: FC<ModalProps> = ({ size = 'medium', children, className, key, onClose, ...props }) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    modalRef.current?.showModal();
  }, []);

  function handleCancel(event: React.SyntheticEvent<HTMLDialogElement, Event>) {
    event.preventDefault();
    onClose();
  }

  function handleClick(event: MouseEvent<HTMLDialogElement, globalThis.MouseEvent>) {
    if (event.target === modalRef.current) {
      onClose();
    }
  }

  return createPortal(
    <dialog
      className={classNames(styles.root, styles[size], className)}
      ref={modalRef}
      onCancel={handleCancel}
      onClick={handleClick}
      {...props}
    >
      <div className={styles.dialog}>
        {children}
      </div>
    </dialog>,
    document.getElementById('modal') as HTMLDivElement,
    key
  );
};
