// services/cart.js
import api from "../utils/axios";

export const getCart = () => api.get("/cart");
export const addToCart = (productId, quantity = 1) => api.post("/cart/add", { productId, quantity });
export const updateCartItem = (productId, quantity) => api.put("/cart/update", { productId, quantity });
export const removeCartItem = (productId) => api.delete(`/cart/remove/${productId}`);
export const clearCart = () => api.delete("/cart");