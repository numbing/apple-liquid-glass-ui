import React from 'react';
import './Avatar.css';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'busy' | 'away';
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, fallback, size = 'md', status, className = '', ...props }, ref) => {
    const classes = ['gl-avatar', `gl-avatar-${size}`, className].filter(Boolean).join(' ');

    const getInitials = (text?: string) => {
      if (!text) return '?';
      const words = text.split(' ');
      if (words.length >= 2) {
        return `${words[0][0]}${words[1][0]}`.toUpperCase();
      }
      return text.slice(0, 2).toUpperCase();
    };

    return (
      <div ref={ref} className={classes} {...props}>
        {src ? (
          <img src={src} alt={alt || fallback || 'Avatar'} className="gl-avatar-img" />
        ) : (
          <span>{getInitials(fallback)}</span>
        )}
        {status && <span className={`gl-avatar-status gl-avatar-status-${status}`} />}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`gl-avatar-group ${className}`} {...props}>
      {children}
    </div>
  );
};
