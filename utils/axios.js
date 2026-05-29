// // import axios from "axios";


// // const api =
// //   axios.create({

// //     baseURL:
// //       "http://localhost:5000/api",


// //     // baseURL:
// //     // "https://ethnotechbackend-1.onrender.com"
// //   });

// // // ========================================
// // // ATTACH TOKEN
// // // ========================================

// // api.interceptors.request.use(
// //   (config) => {

// //     if (
// //       typeof window !==
// //       "undefined"
// //     ) {

// //       // ADMIN TOKEN
// //       const adminToken =
// //         localStorage.getItem(
// //           "adminToken"
// //         );

// //       // NORMAL TOKEN
// //       const token =
// //         localStorage.getItem(
// //           "token"
// //         );

// //       // PRIORITY ADMIN
// //       const finalToken =
// //         adminToken || token;

// //       if (finalToken) {

// //         config.headers.Authorization =
// //           `Bearer ${finalToken}`;
// //       }
// //     }

// //     return config;
// //   }
// // );

// // export default api;





// import axios from "axios";

// const api = axios.create({
//   baseURL:
//     "http://localhost:5000/api",

//   withCredentials: true,
// });

// // ==========================================
// // ADD TOKEN AUTOMATICALLY
// // ==========================================
// api.interceptors.request.use(
//   (config) => {
//     if (
//       typeof window !==
//       "undefined"
//     ) {
//       const token =
//         localStorage.getItem(
//           "token"
//         );

//       if (token) {
//         config.headers.Authorization =
//           `Bearer ${token}`;
//       }
//     }

//     return config;
//   },

//   (error) => {
//     return Promise.reject(
//       error
//     );
//   }
// );

// export default api;

// import axios from "axios";

// const api = axios.create({
//   // baseURL:
//   //   "http://localhost:5000/api",
//   baseURL: "https://ojain-backend-1.onrender.com",
//   withCredentials: true,
// });

// // ==========================================
// // REQUEST INTERCEPTOR
// // ==========================================
// api.interceptors.request.use(
//   (config) => {
//     if (typeof window !== "undefined") {
//       // Admin token takes priority over regular user token
//       const adminToken = localStorage.getItem("adminToken");
//       const token = localStorage.getItem("token");
//       const finalToken = adminToken || token;

//       if (finalToken) {
//         config.headers.Authorization = `Bearer ${finalToken}`;
//       }
//     }

//     return config;
//   },

//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default api;

import axios from "axios";

const api = axios.create({
  baseURL: "https://ojain-backend-1.onrender.com",
    // baseURL:
    // "http://localhost:5000",
  withCredentials: true,
});

// ==========================================
// REQUEST INTERCEPTOR
// ==========================================

api.interceptors.request.use(
  (config) => {

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

  (error) => {
    return Promise.reject(error);
  }
);

export default api;