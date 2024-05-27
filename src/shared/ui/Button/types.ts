import { ButtonHTMLAttributes } from 'react';

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  loading?: boolean;
  variant?: ButtonVariants;
};

export type ButtonVariants = 'contained' | 'outlined' | 'text';
