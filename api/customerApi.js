// =============================================
// src/api/customerApi.js
// =============================================

import api from "../utils/axios";

// BASE URL
const BASE = "/auth";

// REGISTER
export const registerCustomer = (data) =>
  api.post(`${BASE}/register`, data);

// LOGIN
export const loginCustomer = (data) =>
  api.post(`${BASE}/login`, data);

// LOGOUT
export const logoutCustomer = () =>
  api.post(`${BASE}/logout`);

// PROFILE
export const getCustomerProfile = () =>
  api.get(`/customer/profile`);

// UPDATE PROFILE
export const updateCustomerProfile = (data) =>
  api.put(`/customer/profile`, data); 