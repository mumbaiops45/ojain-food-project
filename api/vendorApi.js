  import api from "../utils/axios";

  /* =========================================
    VENDOR AUTH APIs
  ========================================= */

  // REGISTER VENDOR
  export const registerVendor =
    (data) =>
      api.post(
        "/auth/vendor/register",
        data
      );

  // LOGIN VENDOR
  export const loginVendor =
    (data) =>
      api.post(
        "/auth/vendor/login",
        data
      );

  // REFRESH TOKEN
  export const refreshVendorToken =
    () =>
      api.post(
        "/vendors/refresh"
      );

  // LOGOUT
  export const logoutVendor =
    () =>
      api.post(
        "/auth/logout"
      );

  /* =========================================
    DASHBOARD APIs
  ========================================= */

  // GET DASHBOARD
  export const getVendorDashboard =
    () =>
      api.get(
        "/vendors/dashboard"
      );

  /* =========================================
    PROFILE APIs
  ========================================= */

  // GET PROFILE
  export const getVendorProfile =
    () =>
      api.get(
        "/vendors/profile"
      );

  // UPDATE PROFILE  (accepts plain object OR FormData)
  export const updateVendorProfile = (data) => {
    const isFormData = data instanceof FormData;
    return api.put("/vendors/profile", data, {
      headers: isFormData ? { "Content-Type": "multipart/form-data" } : {},
    });
  };

  /* =========================================
    EARNINGS APIs
  ========================================= */

  // GET EARNINGS
  export const getVendorEarnings =
    () =>
      api.get(
        "/vendors/earnings"
      );

  /* =========================================
    ADMIN VENDOR CRUD APIs
  ========================================= */

  // GET ALL VENDORS
  export const getAllVendors =
    () =>
      api.get(
        "/vendors"
      );

  // GET SINGLE VENDOR
  export const getVendorById =
    (id) =>
      api.get(
        `/vendors/${id}`
      );

  // GET PENDING VENDORS
  export const getPendingVendors =
    () =>
      api.get(
        "/vendors/pending"
      );

  // APPROVE VENDOR
  export const approveVendor =
    (id) =>
      api.put(
        `/vendors/${id}/approve`
      );

  // UNAPPROVE VENDOR
  export const unapproveVendor =
    (id) =>
      api.put(
        `/vendors/${id}/unapprove`
      );

  // UPDATE VENDOR
  export const updateVendor =
    (id, data) =>
      api.put(
        `/vendors/${id}`,
        data
      );

  // DELETE VENDOR
  export const deleteVendor =
    (id) =>
      api.delete(
        `/vendors/${id}`
      );