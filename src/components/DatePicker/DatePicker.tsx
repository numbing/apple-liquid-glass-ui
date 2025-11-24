import React, { useState, useRef, useEffect } from 'react';
import './DatePicker.css';

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  label?: string;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  label,
  placeholder = 'Select date',
  minDate,
  maxDate,
  disabled = false,
  size = 'md',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(value);
  const [viewDate, setViewDate] = useState<Date>(value || new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const getDaysInMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isDateDisabled = (date: Date): boolean => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  const isSameDay = (date1: Date | undefined, date2: Date): boolean => {
    if (!date1) return false;
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const isToday = (date: Date): boolean => {
    const today = new Date();
    return isSameDay(today, date);
  };

  const handleDateSelect = (day: number) => {
    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);

    if (isDateDisabled(newDate)) return;

    setSelectedDate(newDate);
    onChange?.(newDate);
    setIsOpen(false);
  };

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1));
  };

  const handleToday = () => {
    const today = new Date();
    setViewDate(today);
    setSelectedDate(today);
    onChange?.(today);
    setIsOpen(false);
  };

  const formatDate = (date: Date | undefined): string => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(viewDate);
    const firstDay = getFirstDayOfMonth(viewDate);
    const days: (number | null)[] = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days.map((day, index) => {
      if (day === null) {
        return <div key={`empty-${index}`} className="gl-datepicker-day gl-datepicker-day-empty" />;
      }

      const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
      const isSelected = isSameDay(selectedDate, date);
      const isTodayDate = isToday(date);
      const isDisabled = isDateDisabled(date);

      return (
        <button
          key={day}
          type="button"
          className={[
            'gl-datepicker-day',
            isSelected && 'gl-datepicker-day-selected',
            isTodayDate && 'gl-datepicker-day-today',
            isDisabled && 'gl-datepicker-day-disabled',
          ]
            .filter(Boolean)
            .join(' ')}
          onClick={() => handleDateSelect(day)}
          disabled={isDisabled}
        >
          {day}
        </button>
      );
    });
  };

  return (
    <div className={`gl-datepicker-container ${className}`} ref={containerRef}>
      {label && <label className="gl-datepicker-label">{label}</label>}

      <button
        type="button"
        className={[
          'gl-datepicker-input',
          `gl-datepicker-input-${size}`,
          isOpen && 'gl-datepicker-input-open',
          disabled && 'gl-datepicker-input-disabled',
        ]
          .filter(Boolean)
          .join(' ')}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
      >
        <span className={selectedDate ? 'gl-datepicker-value' : 'gl-datepicker-placeholder'}>
          {selectedDate ? formatDate(selectedDate) : placeholder}
        </span>
        <svg
          className="gl-datepicker-icon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 2.5H11.5V1.5C11.5 1.22386 11.2761 1 11 1C10.7239 1 10.5 1.22386 10.5 1.5V2.5H5.5V1.5C5.5 1.22386 5.27614 1 5 1C4.72386 1 4.5 1.22386 4.5 1.5V2.5H3.5C2.67157 2.5 2 3.17157 2 4V13C2 13.8284 2.67157 14.5 3.5 14.5H12.5C13.3284 14.5 14 13.8284 14 13V4C14 3.17157 13.3284 2.5 12.5 2.5ZM3.5 3.5H4.5V4C4.5 4.27614 4.72386 4.5 5 4.5C5.27614 4.5 5.5 4.27614 5.5 4V3.5H10.5V4C10.5 4.27614 10.7239 4.5 11 4.5C11.2761 4.5 11.5 4.27614 11.5 4V3.5H12.5C12.7761 3.5 13 3.72386 13 4V5.5H3V4C3 3.72386 3.22386 3.5 3.5 3.5ZM12.5 13.5H3.5C3.22386 13.5 3 13.2761 3 13V6.5H13V13C13 13.2761 12.7761 13.5 12.5 13.5Z"
            fill="currentColor"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="gl-datepicker-dropdown">
          <div className="gl-datepicker-header">
            <button
              type="button"
              className="gl-datepicker-nav-button"
              onClick={handlePrevMonth}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M7.5 2L3.5 6L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="gl-datepicker-month-year">
              {MONTHS[viewDate.getMonth()]} {viewDate.getFullYear()}
            </div>

            <button
              type="button"
              className="gl-datepicker-nav-button"
              onClick={handleNextMonth}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M4.5 2L8.5 6L4.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="gl-datepicker-weekdays">
            {DAYS.map(day => (
              <div key={day} className="gl-datepicker-weekday">
                {day}
              </div>
            ))}
          </div>

          <div className="gl-datepicker-days">
            {renderCalendar()}
          </div>

          <div className="gl-datepicker-footer">
            <button
              type="button"
              className="gl-datepicker-today-button"
              onClick={handleToday}
            >
              Today
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
