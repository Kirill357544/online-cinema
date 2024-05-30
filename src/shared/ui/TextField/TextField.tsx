import { forwardRef } from 'react';
import classNames from 'classnames';

import { BaseInputProps } from './types';

import styles from './TextField.module.css';

export type TextFieldProps = BaseInputProps & {
  type?: InputTextType;
};

export type InputTextType = 'email' | 'password' | 'tel' | 'text' | 'url';

export const TextField = forwardRef<HTMLLabelElement, TextFieldProps>(({
  disabled = false,
  error = false,
  fullWidth = false,
  required = false,
  readOnly = false,
  className,
  helperText,
  inputRef,
  label,
  rIcon,
  lIcon,
  ...props
}, rootRef) => {
  return (
    <span className={classNames(
      styles.container,
      fullWidth && styles.fullWidth,
      disabled && styles.disabled,
      error && styles.error,
      className
    )}>
      <label className={styles.label} ref={rootRef}>
        <span className={classNames(styles.labelText, required && styles.required)}>{label}</span>
        <span className={classNames(styles.textField, readOnly && styles.readOnly)}>
          {lIcon}
          <input
            className={styles.input}
            ref={inputRef}
            required={required}
            readOnly={readOnly}
            disabled={disabled}
            {...props}
          />
          {rIcon}
        </span>
      </label>
      {helperText && <span className={styles.helperText}>{helperText}</span>}
    </span>
  );
});
