// services/customer.service.js

import {
  registerCustomer,
  loginCustomer,
  getCustomerProfile,
  updateCustomerProfile,
  logoutCustomer,
} from "../api/customerApi";

// REGISTER
export const registerCustomerService = async (data) => {
  const res = await registerCustomer(data);
  return res?.data ?? res;
};

// LOGIN
export const loginCustomerService = async (data) => {
  const res = await loginCustomer(data);
  return res?.data ?? res;
};

// GET PROFILE
export const getCustomerProfileService = async () => {
  const res = await getCustomerProfile();
  return res?.data ?? res;
};

// UPDATE PROFILE
export const updateCustomerProfileService = async (data) => {
  const res = await updateCustomerProfile(data);
  return res?.data ?? res;
};

// LOGOUT
export const logoutCustomerService = async () => {
  const res = await logoutCustomer();
  return res?.data ?? res;
};
