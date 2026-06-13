// import {
//   adminLogin,
//   getDashboardStats,
//   getPendingVendors,
//   approveVendor,
//   rejectVendor,
//   getAllProducts,
//   approveProduct,
//   rejectProduct,
//   getAllOrders,
//   getPayoutSummary,
//   markPayoutPaid,
// } from "../api/adminApi";

// // ADMIN LOGIN 
// export const adminLoginService = async (
//   data
// ) => {
//   const res = await adminLogin(data);

//   return res?.data ?? res;
// };

// // DASHBOARD
// export const getDashboardStatsService =
//   async () => {
//     const res =
//       await getDashboardStats();

//     return res?.data ?? res;
//   };

// // VENDORS
// export const getPendingVendorsService =
//   async () => {
//     const res =
//       await getPendingVendors();

//     return res?.data ?? res;
//   };

// export const approveVendorService =
//   async (id) => {
//     const res =
//       await approveVendor(id);

//     return res?.data ?? res;
//   };

// export const rejectVendorService =
//   async (id) => {
//     const res =
//       await rejectVendor(id);

//     return res?.data ?? res;
//   };

// // PRODUCTS
// export const getAllProductsService =
//   async () => {
//     const res =
//       await getAllProducts();

//     return res?.data ?? res;
//   };

// export const approveProductService =
//   async (id) => {
//     const res =
//       await approveProduct(id);

//     return res?.data ?? res;
//   };

// export const rejectProductService =
//   async (id) => {
//     const res =
//       await rejectProduct(id);

//     return res?.data ?? res;
//   };

// // ORDERS
// export const getAllOrdersService =
//   async () => {
//     const res =
//       await getAllOrders();

//     return res?.data ?? res;
//   };

// // PAYOUTS
// export const getPayoutSummaryService =
//   async () => {
//     const res =
//       await getPayoutSummary();

//     return res?.data ?? res;
//   };

// export const markPayoutPaidService =
//   async (data) => {
//     const res =
//       await markPayoutPaid(data);

//     return res?.data ?? res;
//   };


import {
  adminLogin,

  // DASHBOARD
  getDashboardStats,

  // VENDORS
  getAllVendors,
  getPendingVendors,
  approveVendor,
  rejectVendor,

  // PRODUCTS
  getAllProducts,
  approveProduct,
  rejectProduct,

  // ORDERS
  getAllOrders,

  // PAYOUTS
  getPayoutSummary,
  markPayoutPaid,

  // USERS
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../api/adminApi";

const toArray = (val) => {
  if (!val) return [];
  if (Array.isArray(val)) return val;
  // handle { orders: [...] } / { users: [...] } / { vendors: [...] } / { products: [...] }
  const nested = val.orders ?? val.users ?? val.vendors ?? val.products ?? val.data;
  return Array.isArray(nested) ? nested : [];
};

/* =========================================
   ADMIN LOGIN
========================================= */
export const adminLoginService =
  async (data) => {
    const res =
      await adminLogin(data);

    return res?.data ?? res;
  };

/* =========================================
   DASHBOARD
========================================= */
export const getDashboardStatsService = async () => {
  const [dashRes, ordersRes, usersRes, vendorsRes] = await Promise.allSettled([
    getDashboardStats().then((r) => r?.data ?? r),
    getAllOrders().then((r) => r?.data ?? r),
    getAllUsers().then((r) => r?.data ?? r),
    getAllVendors().then((r) => r?.data ?? r),
  ]);

  const dash    = dashRes.status    === "fulfilled" ? (dashRes.value    ?? {}) : {};
  const orders  = toArray(ordersRes.status  === "fulfilled" ? ordersRes.value  : null);
  const users   = toArray(usersRes.status   === "fulfilled" ? usersRes.value   : null);
  const vendors = toArray(vendorsRes.status === "fulfilled" ? vendorsRes.value : null);

  const byDate = (a, b) => new Date(b.createdAt) - new Date(a.createdAt);

  return {
    stats: {
      totalUsers:     dash.totalUsers    ?? users.length,
      totalVendors:   dash.totalVendors  ?? vendors.filter((v) => v.isApproved).length,
      totalProducts:  dash.totalProducts ?? 0,
      totalOrders:    dash.totalOrders   ?? orders.length,
      totalSales:     dash.totalRevenue  ?? 0,
      pendingVendors: vendors.filter((v) => !v.isApproved).length,
    },
    recentOrders:  [...orders].sort(byDate).slice(0, 5),
    recentUsers:   [...users].sort(byDate).slice(0, 5),
    recentVendors: [...vendors].sort(byDate).slice(0, 5),
  };
};

/* =========================================
   VENDORS
========================================= */
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

/* =========================================
   PRODUCTS
========================================= */
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

/* =========================================
   ORDERS
========================================= */
export const getAllOrdersService =
  async () => {
    const res =
      await getAllOrders();

    return res?.data ?? res;
  };

/* =========================================
   PAYOUTS
========================================= */
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

/* =========================================
   USERS MANAGEMENT
========================================= */

// GET ALL USERS
export const getAllUsersService =
  async () => {
    const res =
      await getAllUsers();

    return res?.data ?? res;
  };

// GET SINGLE USER
export const getUserByIdService =
  async (id) => {
    const res =
      await getUserById(id);

    return res?.data ?? res;
  };

// UPDATE USER
export const updateUserService =
  async (id, data) => {
    const res =
      await updateUser(
        id,
        data
      );

    return res?.data ?? res;
  };

// DELETE USER
export const deleteUserService =
  async (id) => {
    const res =
      await deleteUser(id);

    return res?.data ?? res;
  };