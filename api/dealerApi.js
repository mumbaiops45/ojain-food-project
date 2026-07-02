import axios from "axios";

// ── Base URL ──
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/dealer";

// ── Axios instance ──
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,   // sends cookies (refresh token) automatically
});

// ── Request interceptor: attach access token ──
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("dealerToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ── Response interceptor: handle token refresh on 401 ──
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const res = await axios.post(
          `${API_URL}/refresh`,
          {},
          { withCredentials: true }
        );
        const newToken = res.data.token;
        localStorage.setItem("dealerToken", newToken);
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // Refresh failed – clear token and redirect to login
        localStorage.removeItem("dealerToken");
        window.location.href = "/dealerLogin/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

// ──────────────────────────────────────────────
// AUTH ENDPOINTS
// ──────────────────────────────────────────────

export const registerDealer = (data) => api.post("/register", data);
export const loginDealer = (data) => api.post("/login", data);
export const refreshDealerToken = () => api.post("/refresh");
export const logoutDealer = () => api.post("/logout");

// ──────────────────────────────────────────────
// PROFILE
// ──────────────────────────────────────────────

export const getDealerProfile = () => api.get("/profile");
export const updateDealerProfile = (data) => api.put("/profile", data);

// ──────────────────────────────────────────────
// DASHBOARD
// ──────────────────────────────────────────────

export const getDealerDashboard = () => api.get("/dashboard");

// ──────────────────────────────────────────────
// EARNINGS / WALLET
// ──────────────────────────────────────────────

export const getDealerEarnings = () => api.get("/earnings");

// ──────────────────────────────────────────────
// ADMIN – DEALER MANAGEMENT
// ──────────────────────────────────────────────

export const getAllDealers = () => api.get("/admin/all");
export const getDealerById = (id) => api.get(`/admin/${id}`);
export const getPendingDealers = () => api.get("/admin/pending");
export const approveDealer = (id) => api.put(`/admin/approve/${id}`);
export const unapproveDealer = (id) => api.put(`/admin/unapprove/${id}`);
export const updateDealer = (id, data) => api.put(`/admin/${id}`, data);
export const deleteDealer = (id) => api.delete(`/admin/${id}`);