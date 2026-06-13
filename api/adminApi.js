import api from "../utils/axios";

// ADMIN LOGIN
export const adminLogin = (data) =>
  api.post("/api/auth/admin/login", data);

// DASHBOARD STATS
export const getDashboardStats = () =>
  api.get("/api/admin/dashboard");

// ================= VENDORS (all) =================
export const getAllVendors = () =>
  api.get("/api/vendors");

// ================= VENDORS =================
export const getPendingVendors = () =>
  api.get("/api/vendors/pending");



// APPROVE VENDOR
export const approveVendor = (id) =>
  api.put(`/api/vendors/${id}/approve`);

// REJECT VENDOR
export const rejectVendor = (id) =>
  api.delete(`/api/vendors/${id}`);

// ================= PRODUCTS =================
export const getAllProducts = () =>
  api.get("/api/products");

export const approveProduct = (id) =>
  api.put(`/api/products/${id}/approve`);

export const rejectProduct = (id) =>
  api.delete(`/api/products/${id}`);

// ================= ORDERS =================
export const getAllOrders = () =>
  api.get("/api/orders/admin/all");

// ================= PAYOUTS =================
export const getPayoutSummary = () =>
  api.get("/api/admin/payouts");

export const markPayoutPaid = (data) =>
  api.put(
    "/api/admin/payouts/mark-paid",
    data
  );

  /* =========================================
   USERS API
========================================= */

// GET ALL USERS
export const getAllUsers = () =>
  api.get("/api/auth/admin/users");

// GET SINGLE USER
export const getUserById = (id) =>
  api.get(`/api/auth/admin/users/${id}`);

// UPDATE USER
export const updateUser = (
  id,
  data
) =>
  api.put(
    `/api/auth/admin/users/${id}`,
    data
  );

// DELETE USER
export const deleteUser = (id) =>
  api.delete(
    `/api/auth/admin/users/${id}`
  );