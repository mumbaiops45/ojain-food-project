import {
  registerCustomer,
  loginCustomer,
  getCustomerProfile,
  updateCustomerProfile,
  changeCustomerPassword,
  uploadCustomerAvatar,
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

// UPDATE PROFILE (name / phone)
export const updateCustomerProfileService = async (data) => {
  const res = await updateCustomerProfile(data);
  return res?.data ?? res;
};

// CHANGE PASSWORD
export const changeCustomerPasswordService = async (data) => {
  const res = await changeCustomerPassword(data);
  return res?.data ?? res;
};

// UPLOAD AVATAR
export const uploadCustomerAvatarService = async (formData) => {
  const res = await uploadCustomerAvatar(formData);
  return res?.data ?? res;
};

// LOGOUT
export const logoutCustomerService = async () => {
  const res = await logoutCustomer();
  return res?.data ?? res;
};
