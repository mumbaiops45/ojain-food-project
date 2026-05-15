// src/api/vendorApi.js

import api from "../utils/axios";

/* =========================
   VENDOR AUTH APIs
========================= */

// REGISTER VENDOR
export const registerVendor = (
  data
) =>
  api.post(
    "/auth/vendor/register",
    data
  );

// LOGIN VENDOR
export const loginVendor = (
  data
) =>
  api.post(
    "/auth/vendor/login",
    data
  );

/* =========================
   VENDOR APIs
========================= */

// GET PROFILE
export const getVendorProfile =
  () =>
    api.get(
      "/vendors/profile"
    );

// UPDATE PROFILE
export const updateVendorProfile =
  (data) =>
    api.put(
      "/vendors/profile",
      data
    );

// GET EARNINGS
export const getVendorEarnings =
  () =>
    api.get(
      "/vendors/earnings"
    );

// LOGOUT
export const logoutVendor =
  () =>
    api.post(
      "/auth/logout"
    );