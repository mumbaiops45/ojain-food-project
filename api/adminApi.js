import api from "../utils/axios";

// ADMIN LOGIN
export const adminLogin = (data) =>
  api.post("/auth/admin/login", data);

// ================= DASHBOARD =================
export const getDashboardStats = () =>
  api.get("/admin/dashboard");

// ================= VENDORS =================
export const getPendingVendors = () =>
  api.get("/vendors/pending");

// APPROVE VENDOR
export const approveVendor = (id) =>
  api.put( `/admin/vendors/${id}/approve`);

// REJECT VENDOR
export const rejectVendor = (id) =>
  api.delete( `/admin/vendors/${id}/reject`);

// ================= PRODUCTS =================
export const getAllProducts = () =>
  api.get("/admin/products");

export const approveProduct = (id) =>
  api.put(`/admin/products/${id}/approve`);

export const rejectProduct = (id) =>
  api.delete(`/admin/products/${id}/reject`);

// ================= ORDERS =================
export const getAllOrders = () =>
  api.get("/admin/orders");

// ================= PAYOUTS =================
export const getPayoutSummary = () =>
  api.get("/admin/payouts");

export const markPayoutPaid = (data) =>
  api.put(
    "/admin/payouts/mark-paid",
    data
  );

  /* =========================================
   USERS API
========================================= */

// GET ALL USERS
export const getAllUsers = () =>
  api.get("/auth/admin/users");

// GET SINGLE USER
export const getUserById = (id) =>
  api.get(`/auth/admin/users/${id}`);

// UPDATE USER
export const updateUser = (
  id,
  data
) =>
  api.put(
    `/auth/admin/users/${id}`,
    data
  );

// DELETE USER
export const deleteUser = (id) =>
  api.delete(
    `/auth/admin/users/${id}`
  );