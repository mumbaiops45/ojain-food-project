import {
  adminLogin,
  getDashboardStats,
  getPendingVendors,
  approveVendor,
  rejectVendor,
  getAllProducts,
  approveProduct,
  rejectProduct,
  getAllOrders,
  getPayoutSummary,
  markPayoutPaid,
} from "../api/adminApi";

// ADMIN LOGIN 
export const adminLoginService = async (
  data
) => {
  const res = await adminLogin(data);

  return res?.data ?? res;
};

// DASHBOARD
export const getDashboardStatsService =
  async () => {
    const res =
      await getDashboardStats();

    return res?.data ?? res;
  };

// VENDORS
export const getPendingVendorsService =
  async () => {
    const res =
      await getPendingVendors();

    return res?.data ?? res;
  };

export const approveVendorService =
  async (id) => {
    const res =
      await approveVendor(id);

    return res?.data ?? res;
  };

export const rejectVendorService =
  async (id) => {
    const res =
      await rejectVendor(id);

    return res?.data ?? res;
  };

// PRODUCTS
export const getAllProductsService =
  async () => {
    const res =
      await getAllProducts();

    return res?.data ?? res;
  };

export const approveProductService =
  async (id) => {
    const res =
      await approveProduct(id);

    return res?.data ?? res;
  };

export const rejectProductService =
  async (id) => {
    const res =
      await rejectProduct(id);

    return res?.data ?? res;
  };

// ORDERS
export const getAllOrdersService =
  async () => {
    const res =
      await getAllOrders();

    return res?.data ?? res;
  };

// PAYOUTS
export const getPayoutSummaryService =
  async () => {
    const res =
      await getPayoutSummary();

    return res?.data ?? res;
  };

export const markPayoutPaidService =
  async (data) => {
    const res =
      await markPayoutPaid(data);

    return res?.data ?? res;
  };