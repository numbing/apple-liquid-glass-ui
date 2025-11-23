import React from 'react';
import './Input.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ size = 'md', error = false, className = '', ...props }, ref) => {
    const classes = [
      'gl-input',
      `gl-input-${size}`,
      error && 'gl-input-invalid',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return <input ref={ref} className={classes} {...props} />;
  }
);

Input.displayName = 'Input';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ size = 'md', error = false, className = '', ...props }, ref) => {
    const classes = [
      'gl-input',
      'gl-textarea',
      `gl-textarea-${size}`,
      error && 'gl-input-invalid',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return <textarea ref={ref} className={classes} {...props} />;
  }
);

Textarea.displayName = 'Textarea';

export interface InputGroupProps {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const InputGroup: React.FC<InputGroupProps> = ({
  label,
  hint,
  error,
  required,
  children,
  className = '',
}) => {
  return (
    <div className={`gl-input-group ${className}`}>
      {label && (
        <label className="gl-input-label">
          {label}
          {required && <span style={{ color: 'var(--gl-color-error)' }}> *</span>}
        </label>
      )}
      {children}
      {hint && !error && <span className="gl-input-hint">{hint}</span>}
      {error && <span className="gl-input-error">{error}</span>}
    </div>
  );
};
