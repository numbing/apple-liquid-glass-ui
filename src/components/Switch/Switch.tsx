import React from 'react';
import './Switch.css';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, size = 'md', className = '', disabled, ...props }, ref) => {
    const wrapperClasses = [
      'gl-switch-wrapper',
      size !== 'md' && `gl-switch-wrapper-${size}`,
      disabled && 'gl-switch-disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <label className={wrapperClasses}>
        <input
          ref={ref}
          type="checkbox"
          className="gl-switch-input"
          disabled={disabled}
          {...props}
        />
        <span className="gl-switch-track" />
        {label && <span className="gl-switch-label">{label}</span>}
      </label>
    );
  }
);

Switch.displayName = 'Switch';
