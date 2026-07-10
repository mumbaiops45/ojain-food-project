// // import axios from "axios";
// // import toast from "react-hot-toast";

// // const api = axios.create({
// //   baseURL: "https://ojain-backend-2.onrender.com",
// //   // baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
// //   withCredentials: true,
// //   // timeout: 40000, // covers Render.com free-tier cold starts
// // });

// // // ==========================================
// // // REQUEST INTERCEPTOR
// // // ==========================================
// // // api.interceptors.request.use(
// // //   (config) => {
// // //     config._startTime = Date.now();
// // //     // Attach JWT token from localStorage so protected routes (cart, orders, etc.) are authenticated
// // //     if (typeof window !== "undefined") {
// // //       const token =
// // //         localStorage.getItem("token") ||
// // //         localStorage.getItem("adminToken") ||
// // //         localStorage.getItem("vendorToken");
// // //       if (token) {
// // //         config.headers.Authorization = `Bearer ${token}`;
// // //       }
// // //     }
// // //     return config;
// // //   },
// // //   (error) => Promise.reject(error)
// // // );
// // api.interceptors.request.use(
// //   (config) => {
// //     config._startTime = Date.now();

// //     if (typeof window !== "undefined") {

// //       const path = window.location.pathname;

// //       let token = null;

// //       if (path.startsWith("/admin")) {
// //         token = localStorage.getItem("adminToken");
// //       }
// //       else if (path.startsWith("/dealer")) {
// //         token = localStorage.getItem("dealerToken");
// //       }
// //       else {
// //         token = localStorage.getItem("token");
// //       }

// //       console.log("PATH:", path);
// //       console.log("TOKEN:", token);

// //       if (token) {
// //         config.headers.Authorization = `Bearer ${token}`;
// //       }
// //     }

// //     return config;
// //   },
// //   (error) => Promise.reject(error)
// // );

// // // ==========================================
// // // RESPONSE INTERCEPTOR
// // // ==========================================
// // // api.interceptors.response.use(
// // //   (response) => {
// // //     // Warn the user if the server took an unusually long time (Render cold start)
// // //     const elapsed = Date.now() - (response.config._startTime || Date.now());
// // //     if (elapsed > 8000 && typeof window !== "undefined") {
// // //       toast("Server response was slow. It may have been waking up.", {
// // //         icon: "⚡",
// // //         duration: 3000,
// // //       });
// // //     }
// // //     return response;
// // //   },
// // //   (error) => {
// // //     if (typeof window === "undefined") return Promise.reject(error);

// // //     const status = error.response?.status;

// // //     if (error.code === "ECONNABORTED" || error.message?.includes("timeout")) {
// // //       toast.error(
// // //         "Server is taking too long. It may be starting up — please try again in a moment.",
// // //         { duration: 6000 }
// // //       );
// // //     } else if (!error.response) {
// // //       // Network error (server unreachable, CORS, etc.)
// // //       toast.error("Cannot reach server. Please check your internet connection.", {
// // //         duration: 5000,
// // //       });
// // //     }
// // //     // else if (status === 401) {
// // //     //   // Token expired or invalid — clear credentials and redirect
// // //     //   localStorage.removeItem("token");
// // //     //   localStorage.removeItem("adminToken");
// // //     //   const path = window.location.pathname;
// // //     //   const isLoginPage =
// // //     //     path.includes("login") || path.includes("Login") || path === "/adminlogin";
// // //     //   if (!isLoginPage) {
// // //     //     toast.error("Session expired. Please log in again.");
// // //     //     // window.location.href = "/customerLogin/login";
// // //     //     window.location.href = "/";
// // //     //   }
// // //     // } 
// // //     else if (status === 401) {
// // //       const url = error.config?.url || "";
// // //       const method = error.config?.method || "";
// // //       const path = window.location.pathname;

// // //       // Profile check on page load — user simply isn't logged in. Fail silently.
// // //       const isProfileCheck =
// // //         url.includes("/api/auth/profile") && method === "get";

// // //       if (!isProfileCheck) {
// // //         if (path.startsWith("/admin")) {
// // //           toast.error("Session expired. Please login again.");
// // //           window.location.href = "/adminlogin";
// // //         } else if (path.startsWith("/vendor")) {
// // //           toast.error("Session expired. Please login again.");
// // //           window.location.href = "/vendorLogin/login";
// // //         } else {
// // //           toast.error("Please login to continue.");
// // //         }
// // //       }
// // //     }
// // //     else if (status >= 500) {
// // //       toast.error("Server error. Please try again later.", { duration: 4000 });
// // //     }

// // //     return Promise.reject(error);
// // //   }
// // // );
// // api.interceptors.request.use(
// //   (config) => {
// //     config._startTime = Date.now();

// //     if (typeof window !== "undefined") {
// //       const path = window.location.pathname;

// //       let token = null;

// //       if (path.startsWith("/admin")) {
// //         token = localStorage.getItem("token");
// //       } else if (
// //         path.startsWith("/vendor") ||
// //         path.startsWith("/dealer")
// //       ) {
// //         token = localStorage.getItem("dealerToken");
// //       } else {
// //         token = localStorage.getItem("token");
// //       }

// //       console.log("PATH:", path);
// //       console.log("TOKEN:", token);

// //       if (token) {
// //         config.headers.Authorization = `Bearer ${token}`;
// //       }
// //     }

// //     return config;
// //   },
// //   (error) => Promise.reject(error)
// // );
// // export default api;



// import axios from "axios";
// import toast from "react-hot-toast";

// const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL || "https://ojain-backend-2.onrender.com",
//   withCredentials: true,
//   timeout: 40000, // handles Render cold starts
// });

// // ─── REQUEST INTERCEPTOR ─────────────────────────────────
// api.interceptors.request.use(
//   (config) => {
//     config._startTime = Date.now();

//     if (typeof window !== "undefined") {
//       const token = localStorage.getItem("token");
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // ─── RESPONSE INTERCEPTOR ────────────────────────────────
// api.interceptors.response.use(
//   (response) => {
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

//     // Network / timeout errors
//     if (error.code === "ECONNABORTED" || error.message?.includes("timeout")) {
//       toast.error(
//         "Server is taking too long. It may be starting up — please try again.",
//         { duration: 6000 }
//       );
//     } else if (!error.response) {
//       toast.error("Cannot reach server. Please check your internet connection.", {
//         duration: 5000,
//       });
//     }
//     // 401 Unauthorized – clear token and redirect
//     else if (status === 401) {
//       const url = error.config?.url || "";
//       const method = error.config?.method || "";

//       // Ignore profile checks on page load (silent fail)
//       const isProfileCheck =
//         url.includes("/api/auth/profile") && method === "get";

//       if (!isProfileCheck) {
//         localStorage.removeItem("token");

//         const path = window.location.pathname;
//         if (path.startsWith("/admin")) {
//           toast.error("Session expired. Please login again.");
//           window.location.href = "/adminlogin";
//         } else if (path.startsWith("/vendor") || path.startsWith("/dealer")) {
//           toast.error("Session expired. Please login again.");
//           window.location.href = "/vendorLogin/login";
//         } else {
//           toast.error("Please login to continue.");
//           window.location.href = "/customerLogin/login";
//         }
//       }
//     }
//     // Server errors
//     else if (status >= 500) {
//       toast.error("Server error. Please try again later.", { duration: 4000 });
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;



import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "https://ojain-backend-2.onrender.com",

  withCredentials: true,

  // Helps with Render free-server cold starts
  timeout: 40000,
});

// ─────────────────────────────────────────────
// REQUEST INTERCEPTOR
// ─────────────────────────────────────────────

api.interceptors.request.use(
  (config) => {
    config._startTime = Date.now();

    if (typeof window !== "undefined") {
      const path = window.location.pathname;

      let token = null;

      // Admin token
      if (
        path.startsWith("/admin") ||
        path.startsWith("/adminlogin")
      ) {
        token =
          localStorage.getItem("adminToken") ||
          localStorage.getItem("token");
      }

      // Vendor / Dealer token
      else if (
        path.startsWith("/vendor") ||
        path.startsWith("/dealer") ||
        path.startsWith("/vendorLogin")
      ) {
        token =
          localStorage.getItem("dealerToken") ||
          localStorage.getItem("vendorToken");
      }

      // Customer token
      else {
        token = localStorage.getItem("token");
      }

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      console.log("Current path:", path);
      console.log("API URL:", config.url);
      console.log("Token available:", Boolean(token));
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

// ─────────────────────────────────────────────
// RESPONSE INTERCEPTOR
// ─────────────────────────────────────────────

api.interceptors.response.use(
  (response) => {
    // Check API response time
    const startTime =
      response.config._startTime || Date.now();

    const elapsed = Date.now() - startTime;

    // Show slow-server message
    if (
      elapsed > 8000 &&
      typeof window !== "undefined"
    ) {
      toast(
        "Server response was slow. It may have been waking up.",
        {
          icon: "⚡",
          duration: 3000,
        }
      );
    }

    return response;
  },

  (error) => {
    if (typeof window === "undefined") {
      return Promise.reject(error);
    }

    const status = error.response?.status;

    const apiUrl =
      error.config?.url?.toLowerCase() || "";

    const method =
      error.config?.method?.toLowerCase() || "";

    const path =
      window.location.pathname.toLowerCase();

    console.log("API error status:", status);
    console.log("Failed API:", apiUrl);
    console.log("API method:", method);
    console.log("Current page:", path);

    // ─────────────────────────────────────────
    // TIMEOUT ERROR
    // ─────────────────────────────────────────

    if (
      error.code === "ECONNABORTED" ||
      error.message
        ?.toLowerCase()
        .includes("timeout")
    ) {
      toast.error(
        "Server is taking too long. Please try again.",
        {
          duration: 6000,
        }
      );

      return Promise.reject(error);
    }

    // ─────────────────────────────────────────
    // NETWORK ERROR
    // ─────────────────────────────────────────

    if (!error.response) {
      toast.error(
        "Cannot reach server. Please check your internet connection.",
        {
          duration: 5000,
        }
      );

      return Promise.reject(error);
    }

    // ─────────────────────────────────────────
    // 401 UNAUTHORIZED
    // ─────────────────────────────────────────

    if (status === 401) {
      /*
       * These APIs can run automatically when
       * the website opens.
       *
       * If the customer is not logged in,
       * they may return 401.
       *
       * We do not want to display:
       * "Please login to continue"
       * during registration or page loading.
       */

      const isAutomaticAuthCheck =
        apiUrl.includes("/api/auth/profile") ||
        apiUrl.includes("/api/auth/me") ||
        apiUrl.includes("/api/user/profile");

      /*
       * Cart and wishlist APIs may run when
       * the website loads.
       *
       * Ignore their 401 response when the
       * customer is not logged in.
       */

      const isOptionalCustomerApi =
        apiUrl.includes("/api/cart") ||
        apiUrl.includes("/api/wishlist");

      /*
       * Do not redirect from customer login
       * or registration pages.
       */

      const isCustomerAuthPage =
        path.includes("/customerlogin") ||
        path.includes("/register") ||
        path.includes("/registration") ||
        path.includes("/signup");

      /*
       * Login/register APIs can themselves
       * return 401 for incorrect credentials.
       *
       * The page should display that error,
       * not this interceptor.
       */

      const isLoginOrRegisterApi =
        apiUrl.includes("/login") ||
        apiUrl.includes("/register") ||
        apiUrl.includes("/signup");

      /*
       * Ignore automatic unauthorized
       * responses silently.
       */

      if (
        isAutomaticAuthCheck ||
        isOptionalCustomerApi ||
        isCustomerAuthPage ||
        isLoginOrRegisterApi
      ) {
        return Promise.reject(error);
      }

      // ───────────────────────────────────────
      // ADMIN SESSION
      // ───────────────────────────────────────

      if (path.startsWith("/admin")) {
        const adminToken =
          localStorage.getItem("adminToken");

        // Show expiry only if admin was logged in
        if (adminToken) {
          localStorage.removeItem(
            "adminToken"
          );

          toast.error(
            "Admin session expired. Please login again."
          );

          setTimeout(() => {
            window.location.href =
              "/adminlogin";
          }, 1000);
        }

        return Promise.reject(error);
      }

      // ───────────────────────────────────────
      // VENDOR / DEALER SESSION
      // ───────────────────────────────────────

      if (
        path.startsWith("/vendor") ||
        path.startsWith("/dealer")
      ) {
        const dealerToken =
          localStorage.getItem(
            "dealerToken"
          );

        const vendorToken =
          localStorage.getItem(
            "vendorToken"
          );

        /*
         * Show session-expired message only
         * when a dealer/vendor was logged in.
         */

        if (
          dealerToken ||
          vendorToken
        ) {
          localStorage.removeItem(
            "dealerToken"
          );

          localStorage.removeItem(
            "vendorToken"
          );

          toast.error(
            "Session expired. Please login again."
          );

          setTimeout(() => {
            window.location.href =
              "/vendorLogin/login";
          }, 1000);
        }

        return Promise.reject(error);
      }

      // ───────────────────────────────────────
      // CUSTOMER SESSION
      // ───────────────────────────────────────

      const customerToken =
        localStorage.getItem("token");

      /*
       * Show session expired only when
       * the customer previously had a token.
       *
       * If there is no token, do nothing.
       * This prevents the unwanted:
       * "Please login to continue"
       * message after registration.
       */

      if (customerToken) {
        localStorage.removeItem("token");

        toast.error(
          "Session expired. Please login again."
        );

        setTimeout(() => {
          window.location.href =
            "/customerLogin/login";
        }, 1000);
      }

      return Promise.reject(error);
    }

    // ─────────────────────────────────────────
    // SERVER ERROR
    // ─────────────────────────────────────────

    if (status >= 500) {
      toast.error(
        "Server error. Please try again later.",
        {
          duration: 4000,
        }
      );
    }

    return Promise.reject(error);
  }
);

export default api;

