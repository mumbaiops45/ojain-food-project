import {
  useAdminStore,
} from "../store/admin.store";

export const useAdmin = () => {

  const {

    // AUTH
    admin,
    token,

    // DATA
    dashboard,
    vendors,
    products,
    orders,
    payouts,

    // COMMON
    loading,
    error,

    // AUTH METHODS
    loginAdmin,
    logoutAdmin,

    // DASHBOARD
    fetchDashboard,

    // VENDORS
    fetchPendingVendors,
    approveVendor,
    rejectVendor,

    // PRODUCTS
    fetchProducts,
    approveProduct,
    rejectProduct,

    // ORDERS
    fetchOrders,

    // PAYOUTS
    fetchPayouts,
    markPayoutPaid,

    // COMMON
    clearError,
    reset,

  } = useAdminStore();

  return {

    // AUTH
    admin,
    token,

    // DATA
    dashboard,
    vendors,
    products,
    orders,
    payouts,

    // COMMON
    loading,
    error,

    // AUTH METHODS
    loginAdmin,
    logoutAdmin,

    // DASHBOARD
    fetchDashboard,

    // VENDORS
    fetchPendingVendors,
    approveVendor,
    rejectVendor,

    // PRODUCTS
    fetchProducts,
    approveProduct,
    rejectProduct,

    // ORDERS
    fetchOrders,

    // PAYOUTS
    fetchPayouts,
    markPayoutPaid,

    // COMMON
    clearError,
    reset,
  };
};