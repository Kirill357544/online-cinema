import { forwardRef, TextareaHTMLAttributes, useRef, useEffect } from 'react';
import classNames from 'classnames';

import styles from './Textarea.module.css';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  autoResize?: boolean;
  required?: boolean;
  label?: string;
  helperText?: string;
  fullWidth?: boolean;
  error?: boolean;
};

export const Textarea = forwardRef<HTMLLabelElement, TextareaProps>(({
  error = false,
  autoResize = false,
  required = false,
  fullWidth = false,
  disabled = false,
  readOnly = false,
  className,
  label,
  helperText,
  ...props
}, ref) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textAreaRef.current;

    function setHeight() {
      if (textarea !== null) {
        const offset = textarea.offsetHeight - textarea.clientHeight;

        if (textarea.clientHeight !== textarea.scrollHeight + offset) {
          textarea.style.height = 'auto';
        }

        textarea.style.height = String(textarea.scrollHeight + offset) + 'px';
      }
    }

    if (autoResize && textarea !== null) {
      textarea.addEventListener('input', setHeight, false);
    }

    return () => {
      textarea?.removeEventListener('input', setHeight);
    };
  }, [autoResize]);

  return (
    <span
      className={classNames(
        styles.container,
        disabled && styles.disabled,
        error && styles.error,
        fullWidth && styles.fullWidth,
        className
      )}
      ref={ref}
    >
      <label className={styles.label}>
        <span className={classNames(styles.labelText, required && styles.required)}>
          {label}
        </span>
        <textarea
          className={classNames(styles.textarea, readOnly && styles.readOnly, autoResize && styles.autoResize)}
          required={required}
          readOnly={readOnly}
          disabled={disabled}
          ref={textAreaRef}
          {...props}
        />
      </label>
      <span className={styles.helperText}>{helperText}</span>
    </span>
  );
});
