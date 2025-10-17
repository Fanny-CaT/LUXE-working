'use client';

import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useUIStore } from '@/lib/stores/ui';
import { cn } from '@/lib/utils';

interface CartButtonProps {
  itemCount: number;
  className?: string;
}

export function CartButton({ itemCount, className }: CartButtonProps) {
  const { toggleCart } = useUIStore();

  return (
    <button
      onClick={toggleCart}
      className={cn(
        'relative p-2 text-charcoal-600 hover:text-amber-600 transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2',
        'rounded-md',
        className
      )}
      aria-label={`Shopping cart with ${itemCount} items`}
    >
      <ShoppingBagIcon className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-amber-600 text-white text-xs font-medium flex items-center justify-center">
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </button>
  );
}