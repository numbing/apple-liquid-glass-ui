import React from 'react';
import './Layout.css';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  size,
  className = '',
  children,
  ...props
}) => {
  const classes = [
    'gl-container',
    size && `gl-container-${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  direction?: 'vertical' | 'horizontal';
  children: React.ReactNode;
}

export const Stack: React.FC<StackProps> = ({
  gap = 'md',
  direction = 'vertical',
  className = '',
  children,
  ...props
}) => {
  const classes = [
    'gl-stack',
    direction === 'horizontal' && 'gl-stack-horizontal',
    `gl-stack-gap-${gap}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  children: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({
  cols = 3,
  gap = 'lg',
  className = '',
  children,
  ...props
}) => {
  const classes = [
    'gl-grid',
    `gl-grid-cols-${cols}`,
    `gl-grid-gap-${gap}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  vertical?: boolean;
}

export const Divider: React.FC<DividerProps> = ({ vertical = false, className = '', ...props }) => {
  if (vertical) {
    return <span className={`gl-divider-vertical ${className}`} {...props} />;
  }
  return <hr className={`gl-divider ${className}`} {...props} />;
};

export const Spacer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', ...props }) => {
  return <div className={`gl-spacer ${className}`} {...props} />;
};

export interface CenterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Center: React.FC<CenterProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`gl-center ${className}`} {...props}>
      {children}
    </div>
  );
};
