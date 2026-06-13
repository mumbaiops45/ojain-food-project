// // =============================================
// // src/store/vendor.store.js
// // =============================================

// import { create } from "zustand";

// import {
//   // AUTH
//   registerVendorService,
//   loginVendorService,
//   logoutVendorService,

//   // PROFILE
//   getVendorProfileService,
//   updateVendorProfileService,

//   // EARNINGS
//   getVendorEarningsService,

//   // DASHBOARD
//   getVendorDashboardService,
// } from "../services/vendor.service";

// export const useVendorStore =
//   create((set, get) => ({
//     // =============================================
//     // STATE
//     // =============================================

//     vendor: null,

//     dashboard: null,

//     earnings: null,

//     loading: false,

//     error: null,

//     // =============================================
//     // REGISTER
//     // =============================================

//     registerVendor:
//       async (data) => {
//         try {
//           set({
//             loading: true,
//             error: null,
//           });

//           const res =
//             await registerVendorService(
//               data
//             );

//           // SAVE TOKEN
//           if (res.token) {
//             localStorage.setItem(
//               "token",
//               res.token
//             );
//           }

//           // SAVE VENDOR
//           if (res.vendor) {
//             localStorage.setItem(
//               "vendor",
//               JSON.stringify(
//                 res.vendor
//               )
//             );
//           }

//           set({
//             vendor:
//               res.vendor || null,

//             loading: false,
//           });

//           return res;
//         } catch (err) {
//           set({
//             error:
//               err?.response?.data
//                 ?.message ||
//               "Vendor registration failed",

//             loading: false,
//           });

//           throw err;
//         }
//       },

//     // =============================================
//     // LOGIN
//     // =============================================

//     loginVendor:
//       async (formData) => {
//         try {
//           set({
//             loading: true,
//             error: null,
//           });

//           const res =
//             await loginVendorService(
//               formData
//             );

//           // SAVE TOKEN
//           localStorage.setItem(
//             "token",
//             res.token
//           );

//           // SAVE VENDOR
//           localStorage.setItem(
//             "vendor",
//             JSON.stringify(
//               res.vendor
//             )
//           );

//           set({
//             vendor:
//               res.vendor,

//             loading: false,
//           });

//           return res;
//         } catch (error) {
//           set({
//             error:
//               error?.response?.data
//                 ?.message ||
//               "Login failed",

//             loading: false,
//           });

//           throw error;
//         }
//       },

//     // =============================================
//     // FETCH PROFILE
//     // =============================================

//     fetchVendorProfile:
//       async () => {
//         try {
//           set({
//             loading: true,
//             error: null,
//           });

//           const res =
//             await getVendorProfileService();

//           // IMPORTANT FIX
//           set({
//             vendor:
//               res.vendor,

//             loading: false,
//           });

//           // UPDATE LOCAL STORAGE
//           localStorage.setItem(
//             "vendor",
//             JSON.stringify(
//               res.vendor
//             )
//           );

//           return res;
//         } catch (err) {
//           set({
//             error:
//               err?.response?.data
//                 ?.message ||
//               "Failed to fetch profile",

//             loading: false,
//           });

//           throw err;
//         }
//       },

//     // =============================================
//     // UPDATE PROFILE
//     // =============================================

//     updateVendorProfile:
//       async (data) => {
//         try {
//           set({
//             loading: true,
//             error: null,
//           });

//           const res =
//             await updateVendorProfileService(
//               data
//             );

//           // UPDATE STATE
//           set({
//             vendor:
//               res.vendor,

//             loading: false,
//           });

//           // UPDATE LOCAL STORAGE
//           localStorage.setItem(
//             "vendor",
//             JSON.stringify(
//               res.vendor
//             )
//           );

//           return res;
//         } catch (err) {
//           set({
//             error:
//               err?.response?.data
//                 ?.message ||
//               "Profile update failed",

//             loading: false,
//           });

//           throw err;
//         }
//       },

//     // =============================================
//     // FETCH DASHBOARD
//     // =============================================

//     fetchVendorDashboard:
//       async () => {
//         try {
//           set({
//             loading: true,
//             error: null,
//           });

//           const res =
//             await getVendorDashboardService();

//           set({
//             dashboard: res,

//             loading: false,
//           });

//           return res;
//         } catch (err) {
//           set({
//             error:
//               err?.response?.data
//                 ?.message ||
//               "Failed to fetch dashboard",

//             loading: false,
//           });

//           throw err;
//         }
//       },

//     // =============================================
//     // FETCH EARNINGS
//     // =============================================

//     fetchVendorEarnings:
//       async () => {
//         try {
//           set({
//             loading: true,
//             error: null,
//           });

//           const res =
//             await getVendorEarningsService();

//           set({
//             earnings: res,

//             loading: false,
//           });

//           return res;
//         } catch (err) {
//           set({
//             error:
//               err?.response?.data
//                 ?.message ||
//               "Failed to fetch earnings",

//             loading: false,
//           });

//           throw err;
//         }
//       },

//     // =============================================
//     // LOGOUT
//     // =============================================

//     logoutVendor:
//       async () => {
//         try {
//           await logoutVendorService();

//           // REMOVE STORAGE
//           localStorage.removeItem(
//             "token"
//           );

//           localStorage.removeItem(
//             "vendor"
//           );

//           set({
//             vendor: null,
//             dashboard: null,
//             earnings: null,
//             error: null,
//           });
//         } catch (err) {
//           console.log(err);
//         }
//       },

//     // =============================================
//     // CLEAR ERROR
//     // =============================================

//     clearError: () =>
//       set({
//         error: null,
//       }),

//     // =============================================
//     // RESET STORE
//     // =============================================

//     reset: () =>
//       set({
//         vendor: null,
//         dashboard: null,
//         earnings: null,
//         loading: false,
//         error: null,
//       }),
//   }));

// =============================================
// src/store/vendor.store.js
// =============================================

import { create } from "zustand";

import {
  // AUTH
  registerVendorService,
  loginVendorService,
  logoutVendorService,

  // PROFILE
  getVendorProfileService,
  updateVendorProfileService,

  // EARNINGS
  getVendorEarningsService,

  // DASHBOARD
  getVendorDashboardService,
} from "../services/vendor.service";
import { useCustomerStore } from "./customer.store";
import useCartStore from "./cartStore";

export const useVendorStore =
  create((set, get) => ({
    // =============================================
    // STATE
    // =============================================

    vendor: null,

    dashboard: null,

    earnings: null,

    loading: false,

    error: null,

    // =============================================
    // REGISTER
    // =============================================

    registerVendor:
      async (data) => {
        try {
          set({
            loading: true,
            error: null,
          });

          const res =
            await registerVendorService(
              data
            );

          set({
            vendor: res.vendor || null,
            loading: false,
          });

          return res;
        } catch (err) {
          set({
            error:
              err?.response?.data
                ?.message ||
              "Vendor registration failed",

            loading: false,
          });

          throw err;
        }
      },

    // =============================================
    // LOGIN
    // =============================================

    loginVendor:
      async (formData) => {
        try {
          set({
            loading: true,
            error: null,
          });

          const res =
            await loginVendorService(
              formData
            );

          if (res?.token && typeof window !== "undefined") {
            localStorage.setItem("vendorToken", res.token);
          }

          set({
            vendor: res.vendor,
            loading: false,
          });

          return res;
        } catch (error) {
          set({
            error:
              error?.response?.data
                ?.message ||
              "Login failed",

            loading: false,
          });

          throw error;
        }
      },

    // =============================================
    // FETCH PROFILE
    // =============================================

    fetchVendorProfile:
      async () => {
        try {
          set({
            loading: true,
            error: null,
          });

          const res =
            await getVendorProfileService();

          set({
            vendor:
              res.vendor,

            loading: false,
          });

          return res;
        } catch (err) {
          set({
            error:
              err?.response?.data
                ?.message ||
              "Failed to fetch profile",

            loading: false,
          });

          console.log(err);

          throw err;
        }
      },

    // =============================================
    // UPDATE PROFILE
    // =============================================

    updateVendorProfile:
      async (data) => {
        try {
          set({
            loading: true,
            error: null,
          });

          const res =
            await updateVendorProfileService(
              data
            );

          set({
            vendor:
              res.vendor,

            loading: false,
          });

          return res;
        } catch (err) {
          set({
            error:
              err?.response?.data
                ?.message ||
              "Profile update failed",

            loading: false,
          });

          throw err;
        }
      },

    // =============================================
    // DASHBOARD
    // =============================================

    fetchVendorDashboard:
      async () => {
        try {
          set({
            loading: true,
            error: null,
          });

          const res =
            await getVendorDashboardService();

          set({
            dashboard: res,

            loading: false,
          });

          return res;
        } catch (err) {
          set({
            error:
              err?.response?.data
                ?.message ||
              "Dashboard fetch failed",

            loading: false,
          });

          throw err;
        }
      },

    // =============================================
    // EARNINGS
    // =============================================

    fetchVendorEarnings:
      async () => {
        try {
          set({
            loading: true,
            error: null,
          });

          const res =
            await getVendorEarningsService();

          set({
            earnings: res,

            loading: false,
          });

          return res;
        } catch (err) {
          set({
            error:
              err?.response?.data
                ?.message ||
              "Failed to fetch earnings",

            loading: false,
          });

          throw err;
        }
      },

    // =============================================
    // LOGOUT
    // =============================================

    logoutVendor:
      async () => {
        try {
          await logoutVendorService();
        } catch (err) {
          console.log(err);
        }
        if (typeof window !== "undefined") {
          localStorage.removeItem("vendorToken");
          localStorage.removeItem("ojain-customer");
          localStorage.removeItem("token");
        }
        useCustomerStore.getState().reset();
        useCartStore.getState().resetCart();
        set({
          vendor: null,
          dashboard: null,
          earnings: null,
          error: null,
        });
      },

    // =============================================
    // CLEAR ERROR
    // =============================================

    clearError: () =>
      set({
        error: null,
      }),

    // =============================================
    // RESET
    // =============================================

    reset: () =>
      set({
        vendor: null,
        dashboard: null,
        earnings: null,
        loading: false,
        error: null,
      }),
  }));