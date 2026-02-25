import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, CartStore } from "../types";

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (product: CartItem) => {
        const isItemExist = get().items.find((item) => item.id === product.id);

        if (isItemExist) {
          set({
            items: get().items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + product.quantity }
                : item,
            ),
          });
        } else {
          set({
            items: [
              ...get().items,
              { ...product, quantity: product.quantity || 1 },
            ],
          });
        }
      },

      removeFromCart: (id: number) => {
        const existingItem = get().items.find((item) => item.id === id);
        if (!existingItem) return;

        if (existingItem.quantity > 1) {
          set({
            items: get().items.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
            ),
          });
        } else {
          set({
            items: get().items.filter((item) => item.id !== id),
          });
        }
      },

      updateQuantity: (id: number, quantity: number) => {
        if (quantity <= 0) {
          get().removeFromCart(id);
          return;
        }
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity } : item,
          ),
        });
      },

      clearCart: () => set({ items: [] }),

      totalItems: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),

      totalPrice: () =>
        get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        ),
    }),

    { name: "cart-storage" },
  ),
);

export default useCartStore;
