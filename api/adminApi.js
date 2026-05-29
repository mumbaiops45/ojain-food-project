import api from "../utils/axios";

// ADMIN LOGIN
export const adminLogin = (data) =>
  api.post("/api/auth/admin/login", data);

// ================= DASHBOARD =================
export const getDashboardStats = () =>
  api.get("/api/admin/dashboard");

// ================= VENDORS =================
export const getPendingVendors = () =>
  api.get("/api/vendors/pending");

// APPROVE VENDOR
export const approveVendor = (id) =>
  api.put( `/api/admin/vendors/${id}/approve`);

// REJECT VENDOR
export const rejectVendor = (id) =>
  api.delete( `/api/admin/vendors/${id}/reject`);

// ================= PRODUCTS =================
export const getAllProducts = () =>
  api.get("/api/admin/products");

export const approveProduct = (id) =>
  api.put(`/api/admin/products/${id}/approve`);

export const rejectProduct = (id) =>
  api.delete(`/api/admin/products/${id}/reject`);

// ================= ORDERS =================
export const getAllOrders = () =>
  api.get("/api/admin/orders");

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