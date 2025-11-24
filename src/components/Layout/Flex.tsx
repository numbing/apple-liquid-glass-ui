import React from 'react';
import './Flex.css';

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  inline?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const Flex: React.FC<FlexProps> = ({
  direction = 'row',
  align = 'stretch',
  justify = 'start',
  wrap = 'nowrap',
  gap = 'none',
  inline = false,
  children,
  className = '',
  ...props
}) => {
  const classes = [
    inline ? 'gl-inline-flex' : 'gl-flex',
    `gl-flex-direction-${direction}`,
    `gl-flex-align-${align}`,
    `gl-flex-justify-${justify}`,
    `gl-flex-wrap-${wrap}`,
    gap !== 'none' && `gl-flex-gap-${gap}`,
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
