// stores/customer.store.js

import { create } from "zustand";
import { registerCustomerService,loginCustomerService,getCustomerProfileService,updateCustomerProfileService,logoutCustomerService } from "../services/customer.service";

let customerProfileRequest = null;

export const useCustomerStore = create((set, get) => ({
  // State
  customer: null,
  loading: false,
  error: null,

  /* =========================
     REGISTER CUSTOMER
  ========================= */
  registerCustomer: async (data) => {
    set({ loading: true, error: null });

    try {
      const res = await registerCustomerService(data);

      set({
        customer: res,
        loading: false,
      });

      return res;
    } catch (err) {
      set({
        error: err.message,
        loading: false,
      });

      throw err;
    }
  },

  /* =========================
     LOGIN CUSTOMER
  ========================= */
  loginCustomer: async (data) => {
    set({ loading: true, error: null });

    try {
      const res = await loginCustomerService(data);

      set({
        customer: res,
        loading: false,
      });

      return res;
    } catch (err) {
      set({
        error: err.message,
        loading: false,
      });

      throw err;
    }
  },

  /* =========================
     FETCH CUSTOMER PROFILE
  ========================= */
  fetchCustomerProfile: async () => {
    if (customerProfileRequest) return customerProfileRequest;

    customerProfileRequest = (async () => {
      try {
        set({ loading: true, error: null });

        const res = await getCustomerProfileService();

        console.log("Fetched Customer Profile:", res);

        set({
          customer: res,
          loading: false,
        });

        return res;
      } catch (err) {
        set({
          error: err.message,
          loading: false,
        });

        throw err;
      } finally {
        customerProfileRequest = null;
      }
    })();

    return customerProfileRequest;
  },

  /* =========================
     UPDATE CUSTOMER PROFILE
  ========================= */
  updateCustomerProfile: async (data) => {
    set({ loading: true, error: null });

    try {
      const updated = await updateCustomerProfileService(data);

      await get().fetchCustomerProfile();

      set({ loading: false });

      return updated;
    } catch (err) {
      set({
        error: err.message,
        loading: false,
      });

      throw err;
    }
  },

  /* =========================
     LOGOUT CUSTOMER
  ========================= */
  logoutCustomer: async () => {
    set({ loading: true, error: null });

    try {
      await logoutCustomerService();

      set({
        customer: null,
        loading: false,
      });
    } catch (err) {
      set({
        error: err.message,
        loading: false,
      });

      throw err;
    }
  },

  /* =========================
     CLEAR ERROR
  ========================= */
  clearError: () => set({ error: null }),

  /* =========================
     RESET STORE
  ========================= */
  reset: () => {
    set({
      customer: null,
      loading: false,
      error: null,
    });

    customerProfileRequest = null;
  },
}));