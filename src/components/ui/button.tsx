import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500',
          'disabled:pointer-events-none disabled:opacity-50',
          'active:scale-95',
          {
            'bg-charcoal-900 text-white hover:bg-charcoal-800': variant === 'default',
            'border border-charcoal-300 bg-transparent hover:bg-charcoal-50': variant === 'outline',
            'hover:bg-charcoal-100 hover:text-charcoal-900': variant === 'ghost',
            'bg-charcoal-100 text-charcoal-900 hover:bg-charcoal-200': variant === 'secondary',
          },
          {
            'h-10 px-4 py-2': size === 'default',
            'h-9 rounded-md px-3': size === 'sm',
            'h-11 rounded-md px-8': size === 'lg',
            'h-10 w-10': size === 'icon',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };