import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md cursor-pointer',
          {
            'bg-ocean text-white hover:bg-ocean-dark hover:shadow-lg': variant === 'primary',
            'bg-sand text-gray-900 hover:bg-sand-dark': variant === 'secondary',
            'border-2 border-ocean text-ocean hover:bg-ocean/10': variant === 'outline',
            'hover:bg-gray-100 text-gray-700 shadow-none transform-none': variant === 'ghost',
            'h-9 px-4 text-sm': size === 'sm',
            'h-12 px-6 text-base': size === 'md',
            'h-14 px-8 text-lg font-semibold': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export default Button;
