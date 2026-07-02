// hooks/useDealer.js
import { useEffect } from "react";
import useDealerStore from "../store/dealerStore";

export const useDealer = () => {
    const {
        // ── State ──
        token,
        dealer,
        isAuthenticated,
        isLoading,
        error,
        dashboard,
        allDealers,
        pendingDealers,

        // ── Auth ──
        login,
        logout,
        register,
        refreshToken,
        fetchProfile,
        updateProfile,

        // ── Dashboard ──
        fetchDashboard,

        // ── Admin (Dealer Management) ──
        fetchAllDealers,
        fetchPendingDealers,
        approveDealer,
        unapproveDealer,
        deleteDealer,
        updateDealer,

        // ── Utility ──
        reset,
    } = useDealerStore();

    // Auto-fetch profile on mount if token exists
    useEffect(() => {
        if (token && !dealer && !isLoading) {
            fetchProfile();
        }
    }, [token, dealer, isLoading, fetchProfile]);

    // Auto-fetch dashboard if token and dealer exist (optional)
    // You can uncomment if needed:
    // useEffect(() => {
    //   if (isAuthenticated && dealer && !dashboard && !isLoading) {
    //     fetchDashboard();
    //   }
    // }, [isAuthenticated, dealer, dashboard, isLoading, fetchDashboard]);

    return {
        // State
        token,
        dealer,
        isAuthenticated,
        isLoading,
        error,
        dashboard,
        allDealers,
        pendingDealers,

        // Auth
        login,
        logout,
        refreshToken,
        fetchProfile,
        register,
        updateProfile,

        // Dashboard
        fetchDashboard,

        // Admin (Dealer Management)
        fetchAllDealers,
        fetchPendingDealers,
        approveDealer,
        unapproveDealer,
        deleteDealer,
        updateDealer,

        // Reset
        reset,
    };
};