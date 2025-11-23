import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'subtle' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  iconOnly?: boolean;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      iconOnly = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const classes = [
      'gl-btn',
      `gl-btn-${variant}`,
      iconOnly ? `gl-btn-icon-${size}` : `gl-btn-${size}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
