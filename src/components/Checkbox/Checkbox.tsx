import React from 'react';
import './Checkbox.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, size = 'md', className = '', disabled, ...props }, ref) => {
    const wrapperClasses = [
      'gl-checkbox-wrapper',
      size !== 'md' && `gl-checkbox-wrapper-${size}`,
      disabled && 'gl-checkbox-disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <label className={wrapperClasses}>
        <input
          ref={ref}
          type="checkbox"
          className="gl-checkbox-input"
          disabled={disabled}
          {...props}
        />
        <span className="gl-checkbox-box" />
        {label && <span className="gl-checkbox-label">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, size = 'md', className = '', disabled, ...props }, ref) => {
    const wrapperClasses = [
      'gl-radio-wrapper',
      size !== 'md' && `gl-radio-wrapper-${size}`,
      disabled && 'gl-radio-disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <label className={wrapperClasses}>
        <input
          ref={ref}
          type="radio"
          className="gl-radio-input"
          disabled={disabled}
          {...props}
        />
        <span className="gl-radio-circle" />
        {label && <span className="gl-radio-label">{label}</span>}
      </label>
    );
  }
);

Radio.displayName = 'Radio';
