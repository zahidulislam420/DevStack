import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'category';
}

export const Chip = forwardRef<HTMLSpanElement, ChipProps>(
  ({ variant = 'default', className = '', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center font-medium rounded-full border';

    const variants = {
      default: 'bg-gray-100 text-gray-700 border-gray-200',
      category: 'bg-blue-50 text-blue-700 border-blue-200',
    };

    return (
      <span
        ref={ref}
        className={`${baseStyles} ${variants[variant]} px-2.5 py-0.5 text-xs ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Chip.displayName = 'Chip';