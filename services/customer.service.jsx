

import { registerCustomer,loginCustomer,getCustomerProfile,updateCustomerProfile,logoutCustomer } from "../api/customerApi";
/* =========================
   CUSTOMER SERVICES
========================= */

// Register Customer
export const registerCustomerService = async (data) => {
  const res = await registerCustomer(data);
  return res?.data ?? res;
};

// Login Customer
export const loginCustomerService = async (data) => {
  const res = await loginCustomer(data);
  return res?.data ?? res;
};

// Get Logged In Customer Profile
export const getCustomerProfileService = async () => {
  const res = await getCustomerProfile();
  return res?.data ?? res;
};

// Update Customer Profile
export const updateCustomerProfileService = async (data) => {
  const res = await updateCustomerProfile(data);
  return res?.data ?? res;
};

// Logout Customer
export const logoutCustomerService = async () => {
  const res = await logoutCustomer();
  return res?.data ?? res;
};