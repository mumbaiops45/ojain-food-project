// =============================================
// src/services/vendor.service.js
// =============================================

import {

  registerVendor,

  loginVendor,

  getVendorProfile,

  updateVendorProfile,

  getVendorEarnings,

  logoutVendor,

} from "../api/vendorApi";

// REGISTER
export const registerVendorService =
  async (data) => {

    const res =
      await registerVendor(
        data
      );

    return res?.data ?? res;
  };

// LOGIN
export const loginVendorService =
  async (data) => {

    const res =
      await loginVendor(
        data
      );

    return res?.data ?? res;
  };

// PROFILE
export const getVendorProfileService =
  async () => {

    const res =
      await getVendorProfile();

    return res?.data ?? res;
  };

// UPDATE PROFILE
export const updateVendorProfileService =
  async (data) => {

    const res =
      await updateVendorProfile(
        data
      );

    return res?.data ?? res;
  };

// EARNINGS
export const getVendorEarningsService =
  async () => {

    const res =
      await getVendorEarnings();

    return res?.data ?? res;
  };

// LOGOUT
export const logoutVendorService =
  async () => {

    const res =
      await logoutVendor();

    return res?.data ?? res;
  };