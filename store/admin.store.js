// import { create } from "zustand";

// import {
//   // AUTH
//   adminLoginService,

//   // DASHBOARD
//   getDashboardStatsService,

//   // VENDORS
//   getPendingVendorsService,
//   approveVendorService,
//   rejectVendorService,

//   // PRODUCTS
//   getAllProductsService,
//   approveProductService,
//   rejectProductService,

//   // ORDERS
//   getAllOrdersService,

//   // PAYOUTS
//   getPayoutSummaryService,
//   markPayoutPaidService,

// } from "../services/admin.service";

// export const useAdminStore = create(
//   (set, get) => ({

//     // ================= AUTH =================
//     admin: null,

//     token: null,

//     // ================= DATA =================
//     dashboard: null,

//     vendors: [],

//     products: [],

//     orders: [],

//     payouts: [],

//     // ================= COMMON =================
//     loading: false,

//     error: null,

//     // =====================================================
//     // ADMIN LOGIN
//     // =====================================================

//     loginAdmin: async (
//       data
//     ) => {

//       try {

//         set({
//           loading: true,
//           error: null,
//         });

//         const res =
//           await adminLoginService(
//             data
//           );

//         // SAVE TOKEN
//         localStorage.setItem(
//           "adminToken",
//           res.token
//         );

//         // SAVE ADMIN
//         localStorage.setItem(
//           "adminData",
//           JSON.stringify(
//             res.admin
//           )
//         );

//         set({
//           admin: res.admin,

//           token: res.token,

//           loading: false,
//         });

//         return res;

//       } catch (err) {

//         set({
//           error:
//             err?.response?.data
//               ?.message ||
//             "Admin Login Failed",

//           loading: false,
//         });

//         throw err;
//       }
//     },

//     // =====================================================
//     // LOGOUT
//     // =====================================================

//     logoutAdmin: () => {

//       localStorage.removeItem(
//         "adminToken"
//       );

//       localStorage.removeItem(
//         "adminData"
//       );

//       set({
//         admin: null,

//         token: null,
//       });
//     },

//     // =====================================================
//     // DASHBOARD
//     // =====================================================

//     fetchDashboard:
//       async () => {

//         try {

//           set({
//             loading: true,
//             error: null,
//           });

//           const res =
//             await getDashboardStatsService();

//           set({
//             dashboard: res,

//             loading: false,
//           });

//         } catch (err) {

//           set({
//             error:
//               err?.response?.data
//                 ?.message ||
//               "Failed to fetch dashboard",

//             loading: false,
//           });
//         }
//       },

//     // =====================================================
//     // VENDORS
//     // =====================================================

//    fetchPendingVendors:
//   async () => {

//     try {

//       set({
//         loading: true,
//       });

//       const res =
//         await getPendingVendorsService();

//       console.log(
//         "VENDORS API:",
//         res
//       );

//       set({

//         vendors:
//           Array.isArray(res)
//             ? res
//             : res?.vendors || [],

//         loading: false,
//       });

//     } catch (err) {

//       console.log(err);

//       set({

//         error:
//           err?.response?.data
//             ?.message ||
//           "Failed to fetch vendors",

//         loading: false,
//       });
//     }
//   },

//     approveVendor:
//       async (id) => {

//         try {

//           await approveVendorService(
//             id
//           );

//           get().fetchPendingVendors();

//         } catch (err) {

//           console.log(err);
//         }
//       },

//     rejectVendor:
//       async (id) => {

//         try {

//           await rejectVendorService(
//             id
//           );

//           get().fetchPendingVendors();

//         } catch (err) {

//           console.log(err);
//         }
//       },

//     // =====================================================
//     // PRODUCTS
//     // =====================================================

//     fetchProducts:
//       async () => {

//         try {

//           set({
//             loading: true,
//           });

//           const res =
//             await getAllProductsService();

//           set({
//             products: res,

//             loading: false,
//           });

//         } catch (err) {

//           set({
//             error:
//               err?.response?.data
//                 ?.message ||
//               "Failed to fetch products",

//             loading: false,
//           });
//         }
//       },

//     approveProduct:
//       async (id) => {

//         try {

//           await approveProductService(
//             id
//           );

//           get().fetchProducts();

//         } catch (err) {

//           console.log(err);
//         }
//       },

//     rejectProduct:
//       async (id) => {

//         try {

//           await rejectProductService(
//             id
//           );

//           get().fetchProducts();

//         } catch (err) {

//           console.log(err);
//         }
//       },

//     // =====================================================
//     // ORDERS
//     // =====================================================

//     fetchOrders:
//       async () => {

//         try {

//           set({
//             loading: true,
//           });

//           const res =
//             await getAllOrdersService();

//           set({
//             orders: res,

//             loading: false,
//           });

//         } catch (err) {

//           set({
//             error:
//               err?.response?.data
//                 ?.message ||
//               "Failed to fetch orders",

//             loading: false,
//           });
//         }
//       },

//     // =====================================================
//     // PAYOUTS
//     // =====================================================

//     fetchPayouts:
//       async () => {

//         try {

//           set({
//             loading: true,
//           });

//           const res =
//             await getPayoutSummaryService();

//           set({
//             payouts: res,

//             loading: false,
//           });

//         } catch (err) {

//           set({
//             error:
//               err?.response?.data
//                 ?.message ||
//               "Failed to fetch payouts",

//             loading: false,
//           });
//         }
//       },

//     markPayoutPaid:
//       async (data) => {

//         try {

//           await markPayoutPaidService(
//             data
//           );

//           get().fetchPayouts();

//         } catch (err) {

//           console.log(err);
//         }
//       },

//     // =====================================================
//     // CLEAR ERROR
//     // =====================================================

//     clearError: () =>
//       set({
//         error: null,
//       }),

//     // =====================================================
//     // RESET STORE
//     // =====================================================

//     reset: () => {

//       set({

//         admin: null,

//         token: null,

//         dashboard: null,

//         vendors: [],

//         products: [],

//         orders: [],

//         payouts: [],

//         loading: false,

//         error: null,
//       });
//     },
//   })
// );

// import { create } from "zustand";

// import {
//   // AUTH
//   adminLoginService,

//   // DASHBOARD
//   getDashboardStatsService,

//   // VENDORS
//   getPendingVendorsService,
//   approveVendorService,
//   rejectVendorService,

//   // PRODUCTS
//   getAllProductsService,
//   approveProductService,
//   rejectProductService,

//   // ORDERS
//   getAllOrdersService,

//   // PAYOUTS
//   getPayoutSummaryService,
//   markPayoutPaidService,

// } from "../services/admin.service";

// export const useAdminStore = create(
//   (set, get) => ({

//     // ================= AUTH =================
//     admin: null,

//     token: null,

//     // ================= DATA =================
//     dashboard: null,

//     vendors: [],

//     products: [],

//     orders: [],

//     payouts: [],

//     // ================= COMMON =================
//     loading: false,

//     error: null,

//     // =====================================================
//     // ADMIN LOGIN
//     // =====================================================

//     loginAdmin: async (
//       data
//     ) => {

//       try {

//         set({
//           loading: true,
//           error: null,
//         });

//         const res =
//           await adminLoginService(
//             data
//           );

//         // SAVE TOKEN
//         localStorage.setItem(
//           "adminToken",
//           res.token
//         );

//         // SAVE ADMIN
//         localStorage.setItem(
//           "adminData",
//           JSON.stringify(
//             res.admin
//           )
//         );

//         set({
//           admin: res.admin,

//           token: res.token,

//           loading: false,
//         });

//         return res;

//       } catch (err) {

//         set({
//           error:
//             err?.response?.data
//               ?.message ||
//             "Admin Login Failed",

//           loading: false,
//         });

//         throw err;
//       }
//     },

//     // =====================================================
//     // LOGOUT
//     // =====================================================

//     logoutAdmin: () => {

//       localStorage.removeItem(
//         "adminToken"
//       );

//       localStorage.removeItem(
//         "adminData"
//       );

//       set({
//         admin: null,

//         token: null,
//       });
//     },

//     // =====================================================
//     // DASHBOARD
//     // =====================================================

//     fetchDashboard:
//       async () => {

//         try {

//           set({
//             loading: true,
//             error: null,
//           });

//           const res =
//             await getDashboardStatsService();

//           set({
//             dashboard: res,

//             loading: false,
//           });

//         } catch (err) {

//           set({
//             error:
//               err?.response?.data
//                 ?.message ||
//               "Failed to fetch dashboard",

//             loading: false,
//           });
//         }
//       },

//     // =====================================================
//     // VENDORS
//     // =====================================================

//    fetchPendingVendors:
//   async () => {

//     try {

//       set({
//         loading: true,
//       });

//       const res =
//         await getPendingVendorsService();

//       console.log(
//         "VENDORS API:",
//         res
//       );

//       set({

//         vendors:
//           Array.isArray(res)
//             ? res
//             : res?.vendors || [],

//         loading: false,
//       });

//     } catch (err) {

//       console.log(err);

//       set({

//         error:
//           err?.response?.data
//             ?.message ||
//           "Failed to fetch vendors",

//         loading: false,
//       });
//     }
//   },

//     approveVendor:
//       async (id) => {

//         try {

//           await approveVendorService(
//             id
//           );

//           get().fetchPendingVendors();

//         } catch (err) {

//           console.log(err);
//         }
//       },

//     rejectVendor:
//       async (id) => {

//         try {

//           await rejectVendorService(
//             id
//           );

//           get().fetchPendingVendors();

//         } catch (err) {

//           console.log(err);
//         }
//       },

//     // =====================================================
//     // PRODUCTS
//     // =====================================================

//     fetchProducts:
//       async () => {

//         try {

//           set({
//             loading: true,
//           });

//           const res =
//             await getAllProductsService();

//           set({
//             products: res,

//             loading: false,
//           });

//         } catch (err) {

//           set({
//             error:
//               err?.response?.data
//                 ?.message ||
//               "Failed to fetch products",

//             loading: false,
//           });
//         }
//       },

//     approveProduct:
//       async (id) => {

//         try {

//           await approveProductService(
//             id
//           );

//           get().fetchProducts();

//         } catch (err) {

//           console.log(err);
//         }
//       },

//     rejectProduct:
//       async (id) => {

//         try {

//           await rejectProductService(
//             id
//           );

//           get().fetchProducts();

//         } catch (err) {

//           console.log(err);
//         }
//       },

//     // =====================================================
//     // ORDERS
//     // =====================================================

//     fetchOrders:
//       async () => {

//         try {

//           set({
//             loading: true,
//           });

//           const res =
//             await getAllOrdersService();

//           set({
//             orders: res,

//             loading: false,
//           });

//         } catch (err) {

//           set({
//             error:
//               err?.response?.data
//                 ?.message ||
//               "Failed to fetch orders",

//             loading: false,
//           });
//         }
//       },

//     // =====================================================
//     // PAYOUTS
//     // =====================================================

//     fetchPayouts:
//       async () => {

//         try {

//           set({
//             loading: true,
//           });

//           const res =
//             await getPayoutSummaryService();

//           set({
//             payouts: res,

//             loading: false,
//           });

//         } catch (err) {

//           set({
//             error:
//               err?.response?.data
//                 ?.message ||
//               "Failed to fetch payouts",

//             loading: false,
//           });
//         }
//       },

//     markPayoutPaid:
//       async (data) => {

//         try {

//           await markPayoutPaidService(
//             data
//           );

//           get().fetchPayouts();

//         } catch (err) {

//           console.log(err);
//         }
//       },

//     // =====================================================
//     // CLEAR ERROR
//     // =====================================================

//     clearError: () =>
//       set({
//         error: null,
//       }),

//     // =====================================================
//     // RESET STORE
//     // =====================================================

//     reset: () => {

//       set({

//         admin: null,

//         token: null,

//         dashboard: null,

//         vendors: [],

//         products: [],

//         orders: [],

//         payouts: [],

//         loading: false,

//         error: null,
//       });
//     },
//   })
// );


import { create } from "zustand";
import api from "../utils/axios";
import {
  adminLoginService,
  getDashboardStatsService,
  getPendingVendorsService,
  approveVendorService,
  rejectVendorService,
  getAllProductsService,
  approveProductService,
  rejectProductService,
  getAllOrdersService,
  getPayoutSummaryService,
  markPayoutPaidService,
} from "../services/admin.service";


export const useAdminStore = create((set, get) => ({
  // State
  admin: null,
  token: typeof window !== "undefined" ? localStorage.getItem("adminToken") : null,
  dashboard: null,
  vendors: [],
  products: [],
  orders: [],
  payouts: [],
  loading: false,
  error: null,

  // ================= AUTH =================
  loginAdmin: async (data) => {
    try {
      set({ loading: true, error: null });
      const res = await adminLoginService(data);
      localStorage.setItem("adminToken", res.token);
      localStorage.setItem("adminData", JSON.stringify(res.admin));
      set({ admin: res.admin, token: res.token, loading: false });
      return res;
    } catch (err) {
      set({ error: err?.response?.data?.message || "Admin Login Failed", loading: false });
      throw err;
    }
  },

  logoutAdmin: () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminData");
    set({ admin: null, token: null, vendors: [], products: [], orders: [], payouts: [] });
  },

  // ================= DASHBOARD =================
  fetchDashboard: async () => {
    try {
      set({ loading: true });
      const res = await getDashboardStatsService();
      set({ dashboard: res, loading: false });
    } catch (err) {
      set({ error: err?.response?.data?.message || "Failed to fetch dashboard", loading: false });
    }
  },

  // ================= VENDORS =================
  // NEW: fetch ALL vendors (admin)
  fetchAllVendors: async () => {
    const { token } = get();
    if (!token) return;
    set({ loading: true });
    try {
      const res = await api.get("/api/vendors");
      const data = res.data;
      set({
        vendors: Array.isArray(data) ? data : data?.vendors || [],
        loading: false,
      });
    } catch (err) {
      set({ error: err?.response?.data?.message, loading: false });
    }
  },

  fetchPendingVendors: async () => {
    try {
      set({ loading: true });
      const res = await getPendingVendorsService();
      set({ vendors: Array.isArray(res) ? res : res?.vendors || [], loading: false });
    } catch (err) {
      set({ error: err?.response?.data?.message || "Failed to fetch vendors", loading: false });
    }
  },

  approveVendor: async (id) => {
    if (!get().token) throw new Error("Not authenticated");
    await api.put(`/api/vendors/${id}/approve`, {});
    await get().fetchAllVendors();
  },

  // NEW: unapprove a vendor
  unapproveVendor: async (id) => {
    if (!get().token) throw new Error("Not authenticated");
    await api.put(`/api/vendors/${id}/unapprove`, {});
    await get().fetchAllVendors();
  },

  // NEW: admin updates any vendor
  updateVendor: async (id, data) => {
    if (!get().token) throw new Error("Not authenticated");
    await api.put(`/api/vendors/${id}`, data);
    await get().fetchAllVendors();
  },

  rejectVendor: async (id) => {
    if (!get().token) throw new Error("Not authenticated");
    await api.delete(`/api/vendors/${id}`);
    await get().fetchAllVendors();
  },

  // ================= PRODUCTS =================
  fetchProducts: async () => {
    try {
      set({ loading: true });
      const res = await getAllProductsService();
      set({ products: res, loading: false });
    } catch (err) {
      set({ error: err?.response?.data?.message || "Failed to fetch products", loading: false });
    }
  },

  approveProduct: async (id) => {
    await approveProductService(id);
    get().fetchProducts();
  },

  rejectProduct: async (id) => {
    await rejectProductService(id);
    get().fetchProducts();
  },

  // ================= ORDERS =================
  fetchOrders: async () => {
    try {
      set({ loading: true });
      const res = await getAllOrdersService();
      set({ orders: res, loading: false });
    } catch (err) {
      set({ error: err?.response?.data?.message || "Failed to fetch orders", loading: false });
    }
  },

  // ================= PAYOUTS =================
  fetchPayouts: async () => {
    try {
      set({ loading: true });
      const res = await getPayoutSummaryService();
      set({ payouts: res, loading: false });
    } catch (err) {
      set({ error: err?.response?.data?.message || "Failed to fetch payouts", loading: false });
    }
  },

  markPayoutPaid: async (data) => {
    await markPayoutPaidService(data);
    get().fetchPayouts();
  },

  // ================= UTILS =================
  clearError: () => set({ error: null }),
  reset: () => set({
    admin: null, token: null, dashboard: null, vendors: [], products: [], orders: [], payouts: [], loading: false, error: null,
  }),
}));