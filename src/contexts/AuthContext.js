"use client";

import { createContext, useContext, useEffect } from "react";
import { useCustomerStore } from "../../store/customer.store";
import useCartStore from "../../store/cartStore";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const customer             = useCustomerStore((s) => s.customer);
  const fetchCustomerProfile = useCustomerStore((s) => s.fetchCustomerProfile);
  const logoutCustomer       = useCustomerStore((s) => s.logoutCustomer);
  const resetCart            = useCartStore((s) => s.resetCart);

  // On mount: always verify the httpOnly cookie session in background.
  // If cookie is valid → updates customer with fresh data from API.
  // If cookie is expired/missing → fetchCustomerProfile sets customer to null
  //   which also clears the localStorage entry via the persist middleware.
  useEffect(() => {
    fetchCustomerProfile().catch(() => {
      // Not authenticated — handled inside fetchCustomerProfile (sets customer null on 401)
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = async () => {
    await logoutCustomer();
    resetCart(); // clear cart items and localStorage on logout
  };

  return (
    <AuthContext.Provider value={{ user: customer, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
