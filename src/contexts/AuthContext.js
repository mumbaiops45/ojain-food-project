"use client";

import { createContext, useContext, useEffect } from "react";
import { useCustomerStore } from "../../store/customer.store";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const customer            = useCustomerStore((s) => s.customer);
  const fetchCustomerProfile = useCustomerStore((s) => s.fetchCustomerProfile);
  const logoutCustomer      = useCustomerStore((s) => s.logoutCustomer);

  // On mount: if token exists but customer is null, re-hydrate profile
  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token && !customer) {
      fetchCustomerProfile().catch(() => {
        // Token invalid / expired — clear it silently
        if (typeof window !== "undefined") localStorage.removeItem("token");
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ user: customer, logout: logoutCustomer }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
