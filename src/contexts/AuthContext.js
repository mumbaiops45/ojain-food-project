// "use client";

// import { createContext, useContext, useEffect } from "react";
// import { useCustomerStore } from "../../store/customer.store";
// import useCartStore from "../../store/cartStore";

// const AuthContext = createContext(null);

// export function AuthProvider({ children }) {
//   const customer             = useCustomerStore((s) => s.customer);
//   const fetchCustomerProfile = useCustomerStore((s) => s.fetchCustomerProfile);
//   const logoutCustomer       = useCustomerStore((s) => s.logoutCustomer);
//   const resetCart            = useCartStore((s) => s.resetCart);

  
//   useEffect(() => {
//     const hasToken =
//       typeof window !== "undefined" &&
//       (localStorage.getItem("token") ||
//         localStorage.getItem("adminToken") ||
//         localStorage.getItem("vendorToken"));

//     if (hasToken) {
//       fetchCustomerProfile().catch(() => {
//         // Not authenticated — handled inside fetchCustomerProfile (sets customer null on 401)
//       });
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const logout = async () => {
//     await logoutCustomer();
//     resetCart(); // clear cart items and localStorage on logout
//   };

//   return (
//     <AuthContext.Provider value={{ user: customer, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);



"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useCustomerStore } from "../../store/customer.store";
import useCartStore from "../../store/cartStore";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const customer = useCustomerStore((s) => s.customer);
  const fetchCustomerProfile = useCustomerStore((s) => s.fetchCustomerProfile);
  const logoutCustomer = useCustomerStore((s) => s.logoutCustomer);
  const resetCart = useCartStore((s) => s.resetCart);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const hasToken =
        typeof window !== "undefined" &&
        (localStorage.getItem("token") ||
          localStorage.getItem("adminToken") ||
          localStorage.getItem("vendorToken"));

      if (hasToken) {
        try {
          await fetchCustomerProfile();
        } catch (err) {}
      }

      setLoading(false);
    };

    loadUser();
  }, []);

  const logout = async () => {
    await logoutCustomer();
    resetCart();
  };

  return (
    <AuthContext.Provider
      value={{
        user: customer,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);