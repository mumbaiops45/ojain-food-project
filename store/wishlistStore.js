import { create } from "zustand";
import {
  getWishlistService,
  addToWishlistService,
  removeFromWishlistService,
} from "../services/wishlist.service";

const useWishlistStore = create((set, get) => ({
  wishlist: [],
  loading: false,

  // Get Wishlist
  fetchWishlist: async () => {
    try {
      set({ loading: true });

      const res = await getWishlistService();

      if (res.success) {
        set({
          wishlist: res.wishlist || [],
          loading: false,
        });
      } else {
        set({
          wishlist: [],
          loading: false,
        });
      }
    } catch (err) {
      console.log(err);
      set({
        wishlist: [],
        loading: false,
      });
    }
  },

  // Add Product
  addToWishlist: async (productId) => {
    const res = await addToWishlistService(productId);

    if (res.success) {
      await get().fetchWishlist();
    }

    return res;
  },

  // Remove Product
  // Remove Product
  removeFromWishlist: async (productId) => {
    const res = await removeFromWishlistService(productId);

    if (res.success) {
      await get().fetchWishlist();
    }

    return res;
  },

  // Reset Wishlist
  resetWishlist: () => {
    set({
      wishlist: [],
      loading: false,
    });
  },
}));

export default useWishlistStore;



