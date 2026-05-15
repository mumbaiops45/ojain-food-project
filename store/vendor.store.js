// =============================================
// src/store/vendor.store.js
// =============================================

import { create }
from "zustand";

import {

  registerVendorService,

  loginVendorService,

  getVendorProfileService,

  updateVendorProfileService,

  getVendorEarningsService,

  logoutVendorService,

} from "../services/vendor.service";

export const useVendorStore =
  create((set, get) => ({

    // STATE
    vendor: null,

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
            vendor: res.vendor,
            loading: false,
          });

          return res;

        } catch (err) {

          set({
            error:
              err?.response?.data
                ?.message ||
              "Vendor register failed",

            loading: false,
          });

          throw err;
        }
      },

    // =============================================
    // LOGIN
    // =============================================

    loginVendor:
      async (data) => {

        try {

          set({
            loading: true,
            error: null,
          });

          const res =
            await loginVendorService(
              data
            );

          localStorage.setItem(
            "vendorToken",
            res.token
          );

          localStorage.setItem(
            "vendorData",
            JSON.stringify(
              res.vendor
            )
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
              "Vendor login failed",

            loading: false,
          });

          throw err;
        }
      },

    // =============================================
    // PROFILE
    // =============================================

    fetchVendorProfile:
      async () => {

        try {

          set({
            loading: true,
          });

          const res =
            await getVendorProfileService();

          set({

            vendor: res,

            loading: false,
          });

        } catch (err) {

          set({

            error:
              err?.response?.data
                ?.message ||
              "Failed to fetch profile",

            loading: false,
          });
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
          });

          const res =
            await updateVendorProfileService(
              data
            );

          await get().fetchVendorProfile();

          set({
            loading: false,
          });

          return res;

        } catch (err) {

          set({

            error:
              err?.response?.data
                ?.message ||
              "Update failed",

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
          });

          const res =
            await getVendorEarningsService();

          set({

            earnings: res,

            loading: false,
          });

        } catch (err) {

          set({

            error:
              err?.response?.data
                ?.message ||
              "Failed to fetch earnings",

            loading: false,
          });
        }
      },

    // =============================================
    // LOGOUT
    // =============================================

    logoutVendor:
      async () => {

        try {

          await logoutVendorService();

          localStorage.removeItem(
            "vendorToken"
          );

          localStorage.removeItem(
            "vendorData"
          );

          set({
            vendor: null,
          });

        } catch (err) {

          console.log(err);
        }
      },

    // =============================================
    // CLEAR ERROR
    // =============================================

    clearError:
      () =>
        set({
          error: null,
        }),

    // =============================================
    // RESET
    // =============================================

    reset:
      () =>
        set({

          vendor: null,

          earnings: null,

          loading: false,

          error: null,
        }),
  }));