import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  registerCustomerService,
  loginCustomerService,
  getCustomerProfileService,
  updateCustomerProfileService,
  changeCustomerPasswordService,
  uploadCustomerAvatarService,
  logoutCustomerService,
} from "../services/customer.service";

const STORAGE_KEY = "ojain-customer";
let profileRequest = null;

export const useCustomerStore = create(
  persist(
    (set, get) => ({
      customer: null,
      loading:  false,
      error:    null,

      /* ── REGISTER ── */
      registerCustomer: async (data) => {
        set({ loading: true, error: null });
        try {
          const res = await registerCustomerService(data);
          const customer = res?.customer || res?.user || res;
          set({ customer, loading: false });
          return res;
        } catch (err) {
          set({ error: err?.response?.data?.message || err.message, loading: false });
          throw err;
        }
      },

      /* ── LOGIN ── */
      loginCustomer: async (data) => {
        set({ loading: true, error: null });
        try {
          const res = await loginCustomerService(data);
          const customer = res?.customer || res?.user || res;
          if (res?.token && typeof window !== "undefined") {
            localStorage.setItem("token", res.token);
          }
          set({ customer, loading: false });
          return res;
        } catch (err) {
          set({ error: err?.response?.data?.message || err.message, loading: false });
          throw err;
        }
      },

      /* ── FETCH PROFILE ── */
      fetchCustomerProfile: async () => {
        if (profileRequest) return profileRequest;
        profileRequest = (async () => {
          try {
            set({ loading: true, error: null });
            const res = await getCustomerProfileService();
            const customer = res?.customer || res?.user || res;
            set({ customer, loading: false });
            return customer;
          } catch (err) {
            const status = err?.response?.status;
            if (status === 401) {
              // Cookie expired or not logged in — clear stored user
              set({ customer: null, loading: false, error: null });
            } else {
              set({ error: err?.response?.data?.message || err.message, loading: false });
            }
            throw err;
          } finally {
            profileRequest = null;
          }
        })();
        return profileRequest;
      },

      /* ── UPDATE PROFILE ── */
      updateCustomerProfile: async (data) => {
        set({ loading: true, error: null });
        try {
          const updated = await updateCustomerProfileService(data);
          await get().fetchCustomerProfile();
          set({ loading: false });
          return updated;
        } catch (err) {
          set({ error: err?.response?.data?.message || err.message, loading: false });
          throw err;
        }
      },

      /* ── CHANGE PASSWORD ── */
      changePassword: async ({ currentPassword, newPassword }) => {
        set({ loading: true, error: null });
        try {
          const res = await changeCustomerPasswordService({ currentPassword, newPassword });
          set({ loading: false });
          return res;
        } catch (err) {
          set({ error: err?.response?.data?.message || err.message, loading: false });
          throw err;
        }
      },

      /* ── UPLOAD AVATAR ── */
      uploadAvatar: async (formData) => {
        set({ loading: true, error: null });
        try {
          const res = await uploadCustomerAvatarService(formData);
          const customer = res?.customer || res?.user || res;
          if (customer) set({ customer, loading: false });
          else {
            await get().fetchCustomerProfile();
            set({ loading: false });
          }
          return res;
        } catch (err) {
          set({ error: err?.response?.data?.message || err.message, loading: false });
          throw err;
        }
      },

      /* ── LOGOUT ── */
      logoutCustomer: async () => {
        try {
          await logoutCustomerService();
        } catch (_) {}
        set({ customer: null, loading: false, error: null });
        if (typeof window !== "undefined") {
          localStorage.removeItem(STORAGE_KEY);
          localStorage.removeItem("token");
        }
      },

      /* ── UTILS ── */
      clearError: () => set({ error: null }),
      reset: () => {
        profileRequest = null;
        set({ customer: null, loading: false, error: null });
        if (typeof window !== "undefined") {
          localStorage.removeItem(STORAGE_KEY);
          localStorage.removeItem("token");
        }
      },
    }),
    {
      name: STORAGE_KEY,
      // Only persist the customer object — never loading/error state
      // Strip password field just in case (API shouldn't include it, but be safe)
      partialize: (state) => {
        if (!state.customer) return { customer: null };
        const { password, ...safeCustomer } = state.customer;
        return { customer: safeCustomer };
      },
    }
  )
);
