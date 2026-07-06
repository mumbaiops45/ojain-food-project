import api from "../utils/axios";

const WISHLIST_BASE = "/api/wishlist";

// Add to Wishlist
export const addToWishlist = (productId) =>
  api.post(WISHLIST_BASE, { productId });

// Get Wishlist
export const getWishlist = () =>
  api.get(WISHLIST_BASE);

// Remove Wishlist
export const removeFromWishlist = (productId) =>
  api.delete(`${WISHLIST_BASE}/${productId}`);

// Check Product
export const checkWishlist = (productId) =>
  api.get(`${WISHLIST_BASE}/check/${productId}`);

// Clear Wishlist
export const clearWishlist = () =>
  api.delete(WISHLIST_BASE);