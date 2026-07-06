import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: "https://ojain-backend-2.onrender.com",
  // baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
  withCredentials: true,
  // timeout: 40000, // covers Render.com free-tier cold starts
});

// ==========================================
// REQUEST INTERCEPTOR
// ==========================================
// api.interceptors.request.use(
//   (config) => {
//     config._startTime = Date.now();
//     // Attach JWT token from localStorage so protected routes (cart, orders, etc.) are authenticated
//     if (typeof window !== "undefined") {
//       const token =
//         localStorage.getItem("token") ||
//         localStorage.getItem("adminToken") ||
//         localStorage.getItem("vendorToken");
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );
api.interceptors.request.use(
  (config) => {
    config._startTime = Date.now();

    if (typeof window !== "undefined") {

      const path = window.location.pathname;

      let token = null;

      if (path.startsWith("/admin")) {
        token = localStorage.getItem("adminToken");
      }
      else if (path.startsWith("/dealer")) {
        token = localStorage.getItem("dealerToken");
      }
      else {
        token = localStorage.getItem("token");
      }

      console.log("PATH:", path);
      console.log("TOKEN:", token);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ==========================================
// RESPONSE INTERCEPTOR
// ==========================================
// api.interceptors.response.use(
//   (response) => {
//     // Warn the user if the server took an unusually long time (Render cold start)
//     const elapsed = Date.now() - (response.config._startTime || Date.now());
//     if (elapsed > 8000 && typeof window !== "undefined") {
//       toast("Server response was slow. It may have been waking up.", {
//         icon: "⚡",
//         duration: 3000,
//       });
//     }
//     return response;
//   },
//   (error) => {
//     if (typeof window === "undefined") return Promise.reject(error);

//     const status = error.response?.status;

//     if (error.code === "ECONNABORTED" || error.message?.includes("timeout")) {
//       toast.error(
//         "Server is taking too long. It may be starting up — please try again in a moment.",
//         { duration: 6000 }
//       );
//     } else if (!error.response) {
//       // Network error (server unreachable, CORS, etc.)
//       toast.error("Cannot reach server. Please check your internet connection.", {
//         duration: 5000,
//       });
//     }
//     // else if (status === 401) {
//     //   // Token expired or invalid — clear credentials and redirect
//     //   localStorage.removeItem("token");
//     //   localStorage.removeItem("adminToken");
//     //   const path = window.location.pathname;
//     //   const isLoginPage =
//     //     path.includes("login") || path.includes("Login") || path === "/adminlogin";
//     //   if (!isLoginPage) {
//     //     toast.error("Session expired. Please log in again.");
//     //     // window.location.href = "/customerLogin/login";
//     //     window.location.href = "/";
//     //   }
//     // } 
//     else if (status === 401) {
//       const url = error.config?.url || "";
//       const method = error.config?.method || "";
//       const path = window.location.pathname;

//       // Profile check on page load — user simply isn't logged in. Fail silently.
//       const isProfileCheck =
//         url.includes("/api/auth/profile") && method === "get";

//       if (!isProfileCheck) {
//         if (path.startsWith("/admin")) {
//           toast.error("Session expired. Please login again.");
//           window.location.href = "/adminlogin";
//         } else if (path.startsWith("/vendor")) {
//           toast.error("Session expired. Please login again.");
//           window.location.href = "/vendorLogin/login";
//         } else {
//           toast.error("Please login to continue.");
//         }
//       }
//     }
//     else if (status >= 500) {
//       toast.error("Server error. Please try again later.", { duration: 4000 });
//     }

//     return Promise.reject(error);
//   }
// );
api.interceptors.request.use(
  (config) => {
    config._startTime = Date.now();

    if (typeof window !== "undefined") {
      const path = window.location.pathname;

      let token = null;

      if (path.startsWith("/admin")) {
        token = localStorage.getItem("adminToken");
      } else if (
        path.startsWith("/vendor") ||
        path.startsWith("/dealer")
      ) {
        token = localStorage.getItem("dealerToken");
      } else {
        token = localStorage.getItem("token");
      }

      console.log("PATH:", path);
      console.log("TOKEN:", token);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);
export default api;
