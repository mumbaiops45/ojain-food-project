import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: "https://ojain-backend-2.onrender.com",
  // baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
  withCredentials: true,
  // timeout: 20000, // 20 s — covers Render.com free-tier cold starts
});

// ==========================================
// REQUEST INTERCEPTOR
// ==========================================
api.interceptors.request.use(
  (config) => {
    // Track start time so we can warn on slow responses
    config._startTime = Date.now();

    if (typeof window !== "undefined") {
      const adminToken = localStorage.getItem("adminToken");
      const token = localStorage.getItem("token");
      const finalToken = adminToken || token;
      if (finalToken) {
        config.headers.Authorization = `Bearer ${finalToken}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ==========================================
// RESPONSE INTERCEPTOR
// ==========================================
api.interceptors.response.use(
  (response) => {
    // Warn the user if the server took an unusually long time (Render cold start)
    const elapsed = Date.now() - (response.config._startTime || Date.now());
    if (elapsed > 8000 && typeof window !== "undefined") {
      toast("Server response was slow. It may have been waking up.", {
        icon: "⚡",
        duration: 3000,
      });
    }
    return response;
  },
  (error) => {
    if (typeof window === "undefined") return Promise.reject(error);

    const status = error.response?.status;

    if (error.code === "ECONNABORTED" || error.message?.includes("timeout")) {
      toast.error(
        "Server is taking too long. It may be starting up — please try again in a moment.",
        { duration: 6000 }
      );
    } else if (!error.response) {
      // Network error (server unreachable, CORS, etc.)
      toast.error("Cannot reach server. Please check your internet connection.", {
        duration: 5000,
      });
    } else if (status === 401) {
      // Token expired or invalid — clear credentials and redirect
      localStorage.removeItem("token");
      localStorage.removeItem("adminToken");
      const path = window.location.pathname;
      const isLoginPage =
        path.includes("login") || path.includes("Login") || path === "/adminlogin";
      if (!isLoginPage) {
        toast.error("Session expired. Please log in again.");
        window.location.href = "/customerLogin/login";
      }
    } else if (status >= 500) {
      toast.error("Server error. Please try again later.", { duration: 4000 });
    }

    return Promise.reject(error);
  }
);

export default api;
