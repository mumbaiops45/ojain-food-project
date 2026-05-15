import axios from "axios";

const api =
  axios.create({

    baseURL:
      "http://localhost:5000/api",

    // baseURL:
    // "https://ethnotechbackend-1.onrender.com"
  });

// ========================================
// ATTACH TOKEN
// ========================================

api.interceptors.request.use(
  (config) => {

    if (
      typeof window !==
      "undefined"
    ) {

      // ADMIN TOKEN
      const adminToken =
        localStorage.getItem(
          "adminToken"
        );

      // NORMAL TOKEN
      const token =
        localStorage.getItem(
          "token"
        );

      // PRIORITY ADMIN
      const finalToken =
        adminToken || token;

      if (finalToken) {

        config.headers.Authorization =
          `Bearer ${finalToken}`;
      }
    }

    return config;
  }
);

export default api;