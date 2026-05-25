// hooks/useCart.js
import useCartStore from "../store/cartStore";

export const useCart = () => {
  const cart       = useCartStore((s) => s.cart);
  const loading    = useCartStore((s) => s.loading);
  const fetchCart  = useCartStore((s) => s.fetchCart);
  const addItem    = useCartStore((s) => s.addItem);
  const updateItem = useCartStore((s) => s.updateItem);
  const removeItem = useCartStore((s) => s.removeItem);
  const clearCart  = useCartStore((s) => s.clearCart);
  const totalItems = useCartStore((s) => s.totalItems());
  const totalPrice = useCartStore((s) => s.totalPrice());

  return { cart, loading, fetchCart, addItem, updateItem, removeItem, clearCart, totalItems, totalPrice };
};
