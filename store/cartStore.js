// store/cartStore.js
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { cartAPI } from "../services/api";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: { items: [] },
      loading: false,
      error: null,
      // Timestamp updated on every cart mutation — ViewCartBar watches this
      // to know when to show itself. Not persisted to localStorage.
      cartUpdatedAt: null,

      fetchCart: async () => {
        set({ loading: true });
        try {
          const { data } = await cartAPI.get();
          set({ cart: data, loading: false });
        } catch (err) {
          set({ error: err.message, loading: false });
        }
      },

      addItem: async (productId, quantity = 1) => {
        set({ loading: true });
        try {
          const { data } = await cartAPI.add(productId, quantity);
          set({ cart: data, loading: false, cartUpdatedAt: Date.now() });
        } catch (err) {
          set({ error: err.message, loading: false });
          throw err;
        }
      },

      updateItem: async (productId, quantity) => {
        set({ loading: true });
        try {
          const { data } = await cartAPI.update(productId, quantity);
          set({ cart: data, loading: false, cartUpdatedAt: Date.now() });
        } catch (err) {
          set({ error: err.message, loading: false });
        }
      },

      removeItem: async (productId) => {
        set({ loading: true });
        try {
          const { data } = await cartAPI.remove(productId);
          set({ cart: data, loading: false, cartUpdatedAt: Date.now() });
        } catch (err) {
          set({ error: err.message, loading: false });
        }
      },

      clearCart: async () => {
        await cartAPI.clear();
        set({ cart: { items: [] } });
      },

      totalItems: () => {
        const { cart } = get();
        return cart.items.reduce((sum, i) => sum + i.quantity, 0);
      },

      totalPrice: () => {
        const { cart } = get();
        return cart.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ cart: state.cart }),
    }
  )
);

export default useCartStore;  