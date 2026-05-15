// src/api/customer.js

import api from "../utils/axios";

/* =========================
   CUSTOMER AUTH APIs
========================= */

// Register Customer
export const registerCustomer = (data) =>
  api.post("/auth/register", data);

// Login Customer
export const loginCustomer = (data) =>
  api.post("/auth/login", data);

// Get Profile
export const getCustomerProfile = () =>
  api.get("/auth/profile");

// Update Profile
export const updateCustomerProfile = (data) =>
  api.put("/auth/profile", data);

// Logout
export const logoutCustomer = () =>
  api.post("/auth/logout");