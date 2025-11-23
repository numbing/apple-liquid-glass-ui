import React from 'react';
import './Typography.css';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level, className = '', children, ...props }, ref) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    const classes = ['gl-heading', `gl-h${level}`, className].filter(Boolean).join(' ');

    return React.createElement(Tag, { ref, className: classes, ...props }, children);
  }
);

Heading.displayName = 'Heading';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'success' | 'warning' | 'error' | 'info';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  as?: 'p' | 'span' | 'div';
  children: React.ReactNode;
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      size = 'md',
      variant = 'primary',
      weight = 'regular',
      as = 'p',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const classes = [
      'gl-text',
      `gl-text-${size}`,
      `gl-text-${variant}`,
      `gl-text-${weight}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return React.createElement(as, { ref, className: classes, ...props }, children);
  }
);

Text.displayName = 'Text';

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Code = React.forwardRef<HTMLElement, CodeProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <code ref={ref} className={`gl-code ${className}`} {...props}>
        {children}
      </code>
    );
  }
);

Code.displayName = 'Code';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <a ref={ref} className={`gl-link ${className}`} {...props}>
        {children}
      </a>
    );
  }
);

Link.displayName = 'Link';
