import api from "../utils/axios";

const BASE = "/api/auth";

// REGISTER
export const registerCustomer = (data) =>
  api.post(`${BASE}/register`, data);

// LOGIN
export const loginCustomer = (data) =>
  api.post(`${BASE}/login`, data);

// LOGOUT
export const logoutCustomer = () =>
  api.post(`${BASE}/logout`);

// GET PROFILE
export const getCustomerProfile = () =>
  api.get(`${BASE}/profile`);

// UPDATE PROFILE (name / phone)
export const updateCustomerProfile = (data) =>
  api.put(`${BASE}/profile`, data);

// CHANGE PASSWORD
export const changeCustomerPassword = (data) =>
  api.put(`${BASE}/profile/change-password`, data);

// UPLOAD AVATAR (form-data field: avatar)
export const uploadCustomerAvatar = (formData) =>
  api.put(`${BASE}/profile/avatar`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
