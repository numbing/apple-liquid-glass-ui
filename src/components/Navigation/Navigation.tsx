import React from 'react';
import './Navigation.css';

export interface GlassTopNavProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const GlassTopNav: React.FC<GlassTopNavProps> & {
  Left: typeof GlassTopNavLeft;
  Center: typeof GlassTopNavCenter;
  Right: typeof GlassTopNavRight;
} = ({ children, className = '', ...props }) => {
  return (
    <header className={`gl-top-nav ${className}`} {...props}>
      {children}
    </header>
  );
};

const GlassTopNavLeft: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <div className={`gl-top-nav-left ${className}`}>{children}</div>;

const GlassTopNavCenter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <nav className={`gl-top-nav-center ${className}`}>{children}</nav>;

const GlassTopNavRight: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <div className={`gl-top-nav-right ${className}`}>{children}</div>;

GlassTopNav.Left = GlassTopNavLeft;
GlassTopNav.Center = GlassTopNavCenter;
GlassTopNav.Right = GlassTopNavRight;

export interface GlassNavItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  icon?: React.ReactNode;
  label?: string;
}

export const GlassNavItem: React.FC<GlassNavItemProps> = ({
  active = false,
  icon,
  label,
  children,
  className = '',
  ...props
}) => {
  const classes = ['gl-nav-item', active && 'gl-nav-item-active', className]
    .filter(Boolean)
    .join(' ');

  return (
    <button type="button" className={classes} {...props}>
      {icon && <span className="gl-nav-icon">{icon}</span>}
      {label && <span className="gl-nav-label">{label}</span>}
      {children}
    </button>
  );
};

export interface GlassBottomNavProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const GlassBottomNav: React.FC<GlassBottomNavProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <nav className={`gl-bottom-nav ${className}`} {...props}>
      {children}
    </nav>
  );
};
