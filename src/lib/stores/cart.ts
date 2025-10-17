import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Cart, CartLine, Merchandise } from '@/types';
import { shopifyClient } from '../shopify/client';

interface CartState {
  cart: Cart | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  initializeCart: () => Promise<void>;
  addToCart: (merchandiseId: string, quantity: number) => Promise<void>;
  removeFromCart: (lineId: string) => Promise<void>;
  updateQuantity: (lineId: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  setCart: (cart: Cart | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: null,
      isLoading: false,
      error: null,

      initializeCart: async () => {
        set({ isLoading: true, error: null });
        try {
          const cart = await shopifyClient.getCart();
          set({ cart, isLoading: false });
        } catch (error) {
          console.error('Failed to initialize cart:', error);
          set({ 
            error: error instanceof Error ? error.message : 'Failed to initialize cart',
            isLoading: false 
          });
        }
      },

      addToCart: async (merchandiseId: string, quantity: number) => {
        set({ isLoading: true, error: null });
        try {
          const { cart } = get();
          const cartId = cart?.id;
          
          const updatedCart = await shopifyClient.addToCart(cartId, merchandiseId, quantity);
          set({ cart: updatedCart, isLoading: false });
        } catch (error) {
          console.error('Failed to add to cart:', error);
          set({ 
            error: error instanceof Error ? error.message : 'Failed to add to cart',
            isLoading: false 
          });
        }
      },

      removeFromCart: async (lineId: string) => {
        set({ isLoading: true, error: null });
        try {
          const { cart } = get();
          if (!cart) return;

          const updatedCart = await shopifyClient.removeFromCart(cart.id, [lineId]);
          set({ cart: updatedCart, isLoading: false });
        } catch (error) {
          console.error('Failed to remove from cart:', error);
          set({ 
            error: error instanceof Error ? error.message : 'Failed to remove from cart',
            isLoading: false 
          });
        }
      },

      updateQuantity: async (lineId: string, quantity: number) => {
        set({ isLoading: true, error: null });
        try {
          const { cart } = get();
          if (!cart) return;

          if (quantity <= 0) {
            await get().removeFromCart(lineId);
            return;
          }

          const updatedCart = await shopifyClient.updateCartLines(cart.id, [
            { id: lineId, quantity }
          ]);
          set({ cart: updatedCart, isLoading: false });
        } catch (error) {
          console.error('Failed to update quantity:', error);
          set({ 
            error: error instanceof Error ? error.message : 'Failed to update quantity',
            isLoading: false 
          });
        }
      },

      clearCart: async () => {
        set({ isLoading: true, error: null });
        try {
          const { cart } = get();
          if (!cart) return;

          const lineIds = cart.lines.map(line => line.id);
          const updatedCart = await shopifyClient.removeFromCart(cart.id, lineIds);
          set({ cart: updatedCart, isLoading: false });
        } catch (error) {
          console.error('Failed to clear cart:', error);
          set({ 
            error: error instanceof Error ? error.message : 'Failed to clear cart',
            isLoading: false 
          });
        }
      },

      setCart: (cart: Cart | null) => set({ cart }),
      setLoading: (isLoading: boolean) => set({ isLoading }),
      setError: (error: string | null) => set({ error }),
    }),
    {
      name: 'luxe-cart-storage',
      partialize: (state) => ({ cart: state.cart }),
    }
  )
);