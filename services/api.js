// // services/api.js — Central API export
// // Used by cartStore, cart page, etc.
// import api from "../utils/axios";

// /* ── CART ── */
// export const cartAPI = {
//   get: () => api.get("/cart"),
//   add: (productId, quantity = 1) => api.post("/cart/add", { productId, quantity }),
//   update: (productId, quantity) => api.put("/cart/update", { productId, quantity }),
//   remove: (productId) => api.delete(`/cart/remove/${productId}`),
//   clear: () => api.delete("/cart"),
// };

// /* ── ADDRESS ── */
// export const addressAPI = {getAll: () =>api.get("/address"),

// create: (data) =>api.post("/address", data),

// update: (id, data) =>api.put(`/address/${id}`,data),

// remove: (id) =>api.delete(`/address/${id}`),};

// /* ── ORDERS ── */
// export const orderAPI = {
//   create: (data) => api.post("/orders", data),
//   getAll: () => api.get("/orders"),
//   getById: (id) => api.get(`/orders/${id}`),
// };

// /* ── RAZORPAY PAYMENT (calls Next.js API routes, not Express backend) ── */
// export const paymentAPI = {
//   // Creates a Razorpay order on the server (keeps Key Secret server-side)
//   createOrder: (amount) =>
//     fetch("/api/payment/create-order", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ amount }),
//     }).then((r) => r.json()),

//   // Verifies HMAC signature after user completes payment
//   verifyPayment: (data) =>
//     fetch("/api/payment/verify", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     }).then((r) => r.json()),
// };



// services/api.js
// Central API export

import api from "../utils/axios";

/* =========================================
   CART API
========================================= */
export const cartAPI = {
  get: () => api.get("/api/cart"),

  add: (productId, quantity = 1) =>
    api.post("/api/cart/add", {
      productId,
      quantity,
    }),

  update: (productId, quantity) =>
    api.put("/api/cart/update", {
      productId,
      quantity,
    }),

  remove: (productId) =>
    api.delete(`/api/cart/remove/${productId}`),

  clear: () => api.delete("/api/cart"),
};

/* =========================================
   ADDRESS API
========================================= */
export const addressAPI = {
  getAll: () => api.get("/api/address"),

  create: (data) =>
    api.post("/api/address", data),

  update: (id, data) =>
    api.put(`/api/address/${id}`, data),

  remove: (id) =>
    api.delete(`/api/address/${id}`),
};

/* =========================================
   USER ORDER API
========================================= */
export const orderAPI = {
  // Create Order
  create: (data) =>
    api.post("/api/orders", data),

  // Logged In User Orders
  getAll: () =>
    api.get("/api/orders"),

  // Single Order
  getById: (id) =>
    api.get(`/api/orders/${id}`),
};

/* =========================================
   ADMIN ORDER API
========================================= */
export const adminOrderAPI = {
  // Get All Orders
  getAllOrders: () =>
    api.get("/api/orders/admin/all"),

  // Get Single Order
  getOrderById: (id) =>
    api.get(`/api/orders/${id}`),

  // Update Full Order
  updateOrder: (id, data) =>
    api.put(`/api/orders/admin/${id}`, data),

  // Update Order Status
  updateOrderStatus: (id, orderStatus) =>
    api.put(`/api/orders/admin/status/${id}`, {
      orderStatus,
    }),

  // Delete Order
  deleteOrder: (id) =>
    api.delete(`/api/orders/admin/${id}`),
};

/* =========================================
   RAZORPAY PAYMENT API
========================================= */
export const paymentAPI = {
  // Create Razorpay Order
  createOrder: (amount) =>
    fetch("/api/payment/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    }).then((r) => r.json()),

  // Verify Payment
  verifyPayment: (data) =>
    fetch("/api/payment/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((r) => r.json()),
};

