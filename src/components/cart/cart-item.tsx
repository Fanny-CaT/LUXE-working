'use client';

import Image from 'next/image';
import { useCartStore } from '@/lib/stores/cart';
import { CartLine } from '@/types';
import { formatPrice } from '@/lib/utils';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

interface CartItemProps {
  line: CartLine;
}

export function CartItem({ line }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCartStore();
  const { merchandise, quantity, cost } = line;
  const image = merchandise.product.images.edges[0]?.node;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(line.id);
    } else {
      updateQuantity(line.id, newQuantity);
    }
  };

  return (
    <div className="flex w-full">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-charcoal-200">
        {image && (
          <Image
            src={image.url}
            alt={image.altText || merchandise.product.title}
            width={image.width}
            height={image.height}
            className="h-full w-full object-cover object-center"
          />
        )}
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-charcoal-900">
            <h3 className="line-clamp-2">{merchandise.product.title}</h3>
            <p className="ml-4">
              {formatPrice(cost.totalAmount.amount, cost.totalAmount.currencyCode)}
            </p>
          </div>
          <p className="mt-1 text-sm text-charcoal-500">
            {merchandise.selectedOptions.map((option) => option.value).join(', ')}
          </p>
        </div>

        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center border border-charcoal-200 rounded-md">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              className="p-2 text-charcoal-500 hover:text-charcoal-700 disabled:opacity-50"
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              <MinusIcon className="h-4 w-4" />
            </button>
            <span className="px-3 py-2 text-center font-medium">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="p-2 text-charcoal-500 hover:text-charcoal-700"
              aria-label="Increase quantity"
            >
              <PlusIcon className="h-4 w-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => removeFromCart(line.id)}
            className="font-medium text-amber-600 hover:text-amber-500 flex items-center"
          >
            <TrashIcon className="h-4 w-4 mr-1" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}