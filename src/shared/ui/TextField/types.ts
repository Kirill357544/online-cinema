import { InputHTMLAttributes, ReactElement, RefObject } from 'react';

import { IconProps } from '@shared/ui/Icons';

export type BaseInputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  fullWidth?: boolean;
  helperText?: string;
  inputRef?: RefObject<HTMLInputElement>;
  label?: string;
  lIcon?: ReactElement<IconProps>;
  rIcon?: ReactElement<IconProps>;
};
