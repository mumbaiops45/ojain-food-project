import { create } from "zustand";

import {
  // AUTH
  adminLoginService,

  // DASHBOARD
  getDashboardStatsService,

  // VENDORS
  getPendingVendorsService,
  approveVendorService,
  rejectVendorService,

  // PRODUCTS
  getAllProductsService,
  approveProductService,
  rejectProductService,

  // ORDERS
  getAllOrdersService,

  // PAYOUTS
  getPayoutSummaryService,
  markPayoutPaidService,

} from "../services/admin.service";

export const useAdminStore = create(
  (set, get) => ({

    // ================= AUTH =================
    admin: null,

    token: null,

    // ================= DATA =================
    dashboard: null,

    vendors: [],

    products: [],

    orders: [],

    payouts: [],

    // ================= COMMON =================
    loading: false,

    error: null,

    // =====================================================
    // ADMIN LOGIN
    // =====================================================

    loginAdmin: async (
      data
    ) => {

      try {

        set({
          loading: true,
          error: null,
        });

        const res =
          await adminLoginService(
            data
          );

        // SAVE TOKEN
        localStorage.setItem(
          "adminToken",
          res.token
        );

        // SAVE ADMIN
        localStorage.setItem(
          "adminData",
          JSON.stringify(
            res.admin
          )
        );

        set({
          admin: res.admin,

          token: res.token,

          loading: false,
        });

        return res;

      } catch (err) {

        set({
          error:
            err?.response?.data
              ?.message ||
            "Admin Login Failed",

          loading: false,
        });

        throw err;
      }
    },

    // =====================================================
    // LOGOUT
    // =====================================================

    logoutAdmin: () => {

      localStorage.removeItem(
        "adminToken"
      );

      localStorage.removeItem(
        "adminData"
      );

      set({
        admin: null,

        token: null,
      });
    },

    // =====================================================
    // DASHBOARD
    // =====================================================

    fetchDashboard:
      async () => {

        try {

          set({
            loading: true,
            error: null,
          });

          const res =
            await getDashboardStatsService();

          set({
            dashboard: res,

            loading: false,
          });

        } catch (err) {

          set({
            error:
              err?.response?.data
                ?.message ||
              "Failed to fetch dashboard",

            loading: false,
          });
        }
      },

    // =====================================================
    // VENDORS
    // =====================================================

   fetchPendingVendors:
  async () => {

    try {

      set({
        loading: true,
      });

      const res =
        await getPendingVendorsService();

      console.log(
        "VENDORS API:",
        res
      );

      set({

        vendors:
          Array.isArray(res)
            ? res
            : res?.vendors || [],

        loading: false,
      });

    } catch (err) {

      console.log(err);

      set({

        error:
          err?.response?.data
            ?.message ||
          "Failed to fetch vendors",

        loading: false,
      });
    }
  },

    approveVendor:
      async (id) => {

        try {

          await approveVendorService(
            id
          );

          get().fetchPendingVendors();

        } catch (err) {

          console.log(err);
        }
      },

    rejectVendor:
      async (id) => {

        try {

          await rejectVendorService(
            id
          );

          get().fetchPendingVendors();

        } catch (err) {

          console.log(err);
        }
      },

    // =====================================================
    // PRODUCTS
    // =====================================================

    fetchProducts:
      async () => {

        try {

          set({
            loading: true,
          });

          const res =
            await getAllProductsService();

          set({
            products: res,

            loading: false,
          });

        } catch (err) {

          set({
            error:
              err?.response?.data
                ?.message ||
              "Failed to fetch products",

            loading: false,
          });
        }
      },

    approveProduct:
      async (id) => {

        try {

          await approveProductService(
            id
          );

          get().fetchProducts();

        } catch (err) {

          console.log(err);
        }
      },

    rejectProduct:
      async (id) => {

        try {

          await rejectProductService(
            id
          );

          get().fetchProducts();

        } catch (err) {

          console.log(err);
        }
      },

    // =====================================================
    // ORDERS
    // =====================================================

    fetchOrders:
      async () => {

        try {

          set({
            loading: true,
          });

          const res =
            await getAllOrdersService();

          set({
            orders: res,

            loading: false,
          });

        } catch (err) {

          set({
            error:
              err?.response?.data
                ?.message ||
              "Failed to fetch orders",

            loading: false,
          });
        }
      },

    // =====================================================
    // PAYOUTS
    // =====================================================

    fetchPayouts:
      async () => {

        try {

          set({
            loading: true,
          });

          const res =
            await getPayoutSummaryService();

          set({
            payouts: res,

            loading: false,
          });

        } catch (err) {

          set({
            error:
              err?.response?.data
                ?.message ||
              "Failed to fetch payouts",

            loading: false,
          });
        }
      },

    markPayoutPaid:
      async (data) => {

        try {

          await markPayoutPaidService(
            data
          );

          get().fetchPayouts();

        } catch (err) {

          console.log(err);
        }
      },

    // =====================================================
    // CLEAR ERROR
    // =====================================================

    clearError: () =>
      set({
        error: null,
      }),

    // =====================================================
    // RESET STORE
    // =====================================================

    reset: () => {

      set({

        admin: null,

        token: null,

        dashboard: null,

        vendors: [],

        products: [],

        orders: [],

        payouts: [],

        loading: false,

        error: null,
      });
    },
  })
);