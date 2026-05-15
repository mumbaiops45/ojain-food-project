// hooks/useCustomer.js

import { useCustomerStore } from "../store/customer.store";

export const useCustomer = () => {
  const {
    customer,
    loading,
    error,
    registerCustomer,
    loginCustomer,
    fetchCustomerProfile,
    updateCustomerProfile,
    logoutCustomer,
    reset,
  } = useCustomerStore();

  return {
    customer,
    loading,
    error,
    registerCustomer,
    loginCustomer,
    fetchCustomerProfile,
    updateCustomerProfile,
    logoutCustomer,
    reset,
  };
};