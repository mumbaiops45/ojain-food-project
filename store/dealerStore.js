// store/dealerStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

import {
  loginDealerService,
  logoutDealerService,
  refreshDealerTokenService,
  getDealerProfileService,
  updateDealerProfileService,
  getDealerDashboardService,
  getAllDealersService,
  getPendingDealersService,
  approveDealerService,
  unapproveDealerService,
  deleteDealerService,
  registerDealerService,
  updateDealerService,
} from "../services/dealer.service";

const useDealerStore = create(
  persist(
    (set, get) => ({
      // ── State ──
      token: null,
      dealer: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Dashboard data
      dashboard: null,

      // Admin: all dealers, pending dealers
      allDealers: [],
      pendingDealers: [],

      // ── Auth Actions ──
      login: async (credentials) => {
        set({ isLoading: true, error: null });
        try {
          const res = await loginDealerService(credentials);
          if (res.success) {
            // ✅ store as "token" – matches the interceptor
            localStorage.setItem("dealerToken", res.token);

            set({
              token: res.token,
              dealer: res.dealer,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });

            return { success: true };
          } else {
            set({ isLoading: false, error: res.message });
            return { success: false, error: res.message };
          }
        } catch (error) {
          set({ isLoading: false, error: error.message });
          return { success: false, error: error.message };
        }
      },

      // ── logout – unified (removes 'token') ──
      logout: async () => {
        try {
          await logoutDealerService();
        } catch (e) {
          // ignore errors on logout
        }

        // ✅ remove the key used by the interceptor
        localStorage.removeItem("dealerToken");

        set({
          token: null,
          dealer: null,
          isAuthenticated: false,
          dashboard: null,
        });
      },

      // ── refreshToken – now also updates localStorage ──
      refreshToken: async () => {
        try {
          const res = await refreshDealerTokenService();
          if (res.success) {
            // ✅ keep localStorage in sync
            localStorage.setItem("dealerToken", res.token);
            set({ token: res.token });
            return { success: true };
          }
          return { success: false };
        } catch (error) {
          return { success: false };
        }
      },

      // ── Profile Actions ──
      fetchProfile: async () => {
        set({ isLoading: true, error: null });
        try {
          const res = await getDealerProfileService();
          if (res.success) {
            set({ dealer: res.dealer, isLoading: false });
            return { success: true };
          } else {
            set({ isLoading: false, error: res.message });
            return { success: false, error: res.message };
          }
        } catch (error) {
          set({ isLoading: false, error: error.message });
          return { success: false, error: error.message };
        }
      },

      updateProfile: async (data) => {
        set({ isLoading: true, error: null });
        try {
          const res = await updateDealerProfileService(data);
          if (res.success) {
            set({ dealer: res.dealer, isLoading: false });
            return { success: true };
          } else {
            set({ isLoading: false, error: res.message });
            return { success: false, error: res.message };
          }
        } catch (error) {
          set({ isLoading: false, error: error.message });
          return { success: false, error: error.message };
        }
      },

      // ── Dashboard ──
      fetchDashboard: async () => {
        set({ isLoading: true });
        try {
          const res = await getDealerDashboardService();
          if (res.success) {
            set({ dashboard: res.data, isLoading: false });
            return { success: true };
          } else {
            set({ isLoading: false });
            return { success: false };
          }
        } catch (error) {
          set({ isLoading: false });
          return { success: false };
        }
      },

      // ── Admin Actions ──
      fetchAllDealers: async () => {
        set({ isLoading: true });
        try {
          const res = await getAllDealersService();
          if (res.success) {
            set({ allDealers: res.dealers, isLoading: false });
            return { success: true };
          }
          set({ isLoading: false });
          return { success: false };
        } catch {
          set({ isLoading: false });
          return { success: false };
        }
      },

      fetchPendingDealers: async () => {
        set({ isLoading: true });
        try {
          const res = await getPendingDealersService();
          if (res.success) {
            set({ pendingDealers: res.dealers, isLoading: false });
            return { success: true };
          }
          set({ isLoading: false });
          return { success: false };
        } catch {
          set({ isLoading: false });
          return { success: false };
        }
      },

      approveDealer: async (id) => {
        try {
          const res = await approveDealerService(id);
          if (res.success) {
            // Refresh pending list
            await get().fetchPendingDealers();
            await get().fetchAllDealers();
            return { success: true };
          }
          return { success: false, error: res.message };
        } catch (error) {
          return { success: false, error: error.message };
        }
      },

      unapproveDealer: async (id) => {
        try {
          const res = await unapproveDealerService(id);
          if (res.success) {
            await get().fetchPendingDealers();
            await get().fetchAllDealers();
            return { success: true };
          }
          return { success: false, error: res.message };
        } catch (error) {
          return { success: false, error: error.message };
        }
      },

      deleteDealer: async (id) => {
        try {
          const res = await deleteDealerService(id);
          if (res.success) {
            await get().fetchAllDealers();
            await get().fetchPendingDealers();
            return { success: true };
          }
          return { success: false, error: res.message };
        } catch (error) {
          return { success: false, error: error.message };
        }
      },

      updateDealer: async (id, data) => {
        try {
          const res = await updateDealerService(id, data);
          if (res.success) {
            await get().fetchAllDealers();
            await get().fetchPendingDealers();
            return { success: true };
          }
          return { success: false, error: res.message };
        } catch (error) {
          return { success: false, error: error.message };
        }
      },

      register: async (data) => {
        set({ isLoading: true, error: null });
        try {
          const res = await registerDealerService(data);
          if (res.success) {
            set({ isLoading: false });
            return { success: true };
          } else {
            set({ isLoading: false, error: res.message });
            return { success: false, error: res.message };
          }
        } catch (error) {
          set({ isLoading: false, error: error.message });
          return { success: false, error: error.message };
        }
      },

      // ── Reset ──
      reset: () => {
        set({
          token: null,
          dealer: null,
          isAuthenticated: false,
          isLoading: false,
          error: null,
          dashboard: null,
          allDealers: [],
          pendingDealers: [],
        });
      },
    }),
    {
      name: "dealer-storage",
      partialize: (state) => ({
        token: state.token,
        dealer: state.dealer,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

export default useDealerStore;