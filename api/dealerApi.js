import api from "../utils/axios";

// ── Base path (relative to the shared axios base URL) ──
const DEALER_BASE = "/api/dealers";

// ──────────────────────────────────────────────
// AUTH ENDPOINTS
// ──────────────────────────────────────────────

export const registerDealer = (data) =>
  api.post(`${DEALER_BASE}/register`, data);

export const loginDealer = (data) =>
  api.post(`${DEALER_BASE}/login`, data);

export const refreshDealerToken = () =>
  api.post(`${DEALER_BASE}/refresh`);

export const logoutDealer = () =>
  api.post(`${DEALER_BASE}/logout`);

export const verifyDealer = (data) =>
  api.post(`${DEALER_BASE}/verify`, data);

// =========================================
// VERIFY DEALER CODE
// =========================================

export const verifyDealerCode = (dealerCode) =>
  api.post(`${DEALER_BASE}/verify`, { dealerCode });



// ──────────────────────────────────────────────
// PROFILE
// ──────────────────────────────────────────────

export const getDealerProfile = () =>
  api.get(`${DEALER_BASE}/profile`);

export const updateDealerProfile = (data) =>
  api.put(`${DEALER_BASE}/profile`, data);

// ──────────────────────────────────────────────
// DASHBOARD
// ──────────────────────────────────────────────

export const getDealerDashboard = () =>
  api.get(`${DEALER_BASE}/dashboard`);

// ──────────────────────────────────────────────
// EARNINGS / WALLET
// ──────────────────────────────────────────────

export const getDealerEarnings = () =>
  api.get(`${DEALER_BASE}/earnings`);

// ──────────────────────────────────────────────
// ADMIN – DEALER MANAGEMENT (using raw axios)
// ──────────────────────────────────────────────
// If you want to keep admin endpoints separate, they can stay as is.
// But to be consistent, you could also use the shared api instance.

import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";

export const getPendingDealers = () =>
  axios.get(`${BASE_URL}/api/admin/dealers/pending`, {
    withCredentials: true,
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });

export const getApprovedDealers = () =>
  axios.get(`${BASE_URL}/api/admin/dealers/approved`, {
    withCredentials: true,
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  export const approveDealer = (id) =>
  axios.put(
    `${BASE_URL}/api/admin/dealers/${id}/approve`,
    {},
    {
      withCredentials: true,
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }
  );

export const unapproveDealer = (id) =>
  axios.put(
    `${BASE_URL}/api/admin/dealers/${id}/unapprove`,
    {},
    {
      withCredentials: true,
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }
  );

export const rejectDealer = (id) =>
  axios.delete(`${BASE_URL}/api/admin/dealers/${id}/reject`, {
    withCredentials: true,
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });