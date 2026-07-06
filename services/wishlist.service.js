import {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
  checkWishlist,
  clearWishlist,
} from "../api/wishlistApi";

/* ==========================
   ADD TO WISHLIST
========================== */

export const addToWishlistService = async (productId) => {
  const res = await addToWishlist(productId);
  return res?.data ?? res;
};

/* ==========================
   GET WISHLIST
========================== */

export const getWishlistService = async () => {
  const res = await getWishlist();
  return res?.data ?? res;
};

/* ==========================
   REMOVE FROM WISHLIST
========================== */

export const removeFromWishlistService = async (productId) => {
  const res = await removeFromWishlist(productId);
  return res?.data ?? res;
};

/* ==========================
   CHECK WISHLIST
========================== */

export const checkWishlistService = async (productId) => {
  const res = await checkWishlist(productId);
  return res?.data ?? res;
};

/* ==========================
   CLEAR WISHLIST
========================== */

export const clearWishlistService = async () => {
  const res = await clearWishlist();
  return res?.data ?? res;
};