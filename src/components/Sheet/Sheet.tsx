import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Sheet.css';

export interface SheetProps {
  open: boolean;
  onClose: () => void;
  size?: 'sm' | 'md' | 'lg' | 'full';
  children?: React.ReactNode;
  className?: string;
}

export const Sheet: React.FC<SheetProps> & {
  Header: typeof SheetHeader;
  Body: typeof SheetBody;
  Footer: typeof SheetFooter;
} = ({ open, onClose, size = 'md', children, className = '' }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [open, onClose]);

  if (!open) return null;

  const classes = ['gl-sheet', `gl-sheet-${size}`, className].filter(Boolean).join(' ');

  return createPortal(
    <div className="gl-sheet-overlay" onClick={onClose}>
      <div className={classes} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        {children}
      </div>
    </div>,
    document.body
  );
};

export interface SheetHeaderProps {
  title?: string;
  description?: string;
  showClose?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export const SheetHeader: React.FC<SheetHeaderProps> = ({
  title,
  description,
  showClose = true,
  onClose,
  children,
  className = '',
}) => {
  return (
    <div className={`gl-sheet-header ${className}`}>
      <div className="gl-sheet-header-content">
        {title && <h2 className="gl-sheet-title">{title}</h2>}
        {description && <p className="gl-sheet-description">{description}</p>}
        {children}
      </div>
      {showClose && onClose && (
        <button className="gl-sheet-close" onClick={onClose} aria-label="Close">
          ×
        </button>
      )}
    </div>
  );
};

export interface SheetBodyProps {
  children?: React.ReactNode;
  className?: string;
}

export const SheetBody: React.FC<SheetBodyProps> = ({ children, className = '' }) => {
  return <div className={`gl-sheet-body ${className}`}>{children}</div>;
};

export interface SheetFooterProps {
  children?: React.ReactNode;
  className?: string;
}

export const SheetFooter: React.FC<SheetFooterProps> = ({ children, className = '' }) => {
  return <div className={`gl-sheet-footer ${className}`}>{children}</div>;
};

Sheet.Header = SheetHeader;
Sheet.Body = SheetBody;
Sheet.Footer = SheetFooter;
