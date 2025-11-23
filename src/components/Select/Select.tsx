import React from 'react';
import './Select.css';

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ size = 'md', error = false, className = '', children, ...props }, ref) => {
    const classes = [
      'gl-select',
      `gl-select-${size}`,
      error && 'gl-input-invalid',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className="gl-select-container">
        <select ref={ref} className={classes} {...props}>
          {children}
        </select>
      </div>
    );
  }
);

Select.displayName = 'Select';

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select...',
  size = 'md',
  className = '',
}) => {
  const [open, setOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue);
    setOpen(false);
  };

  return (
    <div className={`gl-dropdown ${className}`} ref={dropdownRef}>
      <button
        type="button"
        className={`gl-dropdown-trigger gl-dropdown-trigger-${size}`}
        onClick={() => setOpen(!open)}
      >
        <span>{selectedOption?.label || placeholder}</span>
        <span>▼</span>
      </button>
      {open && (
        <div className="gl-dropdown-menu">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`gl-dropdown-item ${
                option.value === value ? 'gl-dropdown-item-selected' : ''
              }`}
              onClick={() => handleSelect(option.value)}
              disabled={option.disabled}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
