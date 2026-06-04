  import api from "../utils/axios";

  /* =========================================
    VENDOR AUTH APIs
  ========================================= */

  // REGISTER VENDOR
  export const registerVendor =
    (data) =>
      api.post(
        "/api/auth/vendor/register",
        data
      );

  // LOGIN VENDOR
  export const loginVendor =
    (data) =>
      api.post(
        "/api/auth/vendor/login",
        data
      );

  // REFRESH TOKEN
  export const refreshVendorToken =
    () =>
      api.post(
        "/api/vendors/refresh"
      );

  // LOGOUT
  export const logoutVendor =
    () =>
      api.post(
        "/api/auth/logout"
      );

  /* =========================================
    DASHBOARD APIs
  ========================================= */

  // GET DASHBOARD
  export const getVendorDashboard =
    () =>
      api.get(
        "/api/vendors/dashboard"
      );

  /* =========================================
    PROFILE APIs
  ========================================= */

  // GET PROFILE
  export const getVendorProfile =
    () =>
      api.get(
        "/api/vendors/profile"
      );

  // UPDATE PROFILE  (accepts plain object OR FormData)
  export const updateVendorProfile = (data) => {
    const isFormData = data instanceof FormData;
    return api.put("/api/vendors/profile", data, {
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
        "/api/vendors/earnings"
      );

  /* =========================================
    ADMIN VENDOR CRUD APIs
  ========================================= */

  // GET ALL VENDORS
  export const getAllVendors =
    () =>
      api.get(
        "/api/vendors"
      );

  // GET SINGLE VENDOR
  export const getVendorById =
    (id) =>
      api.get(
        `/api/vendors/${id}`
      );

  // GET PENDING VENDORS
  // export const getPendingVendors =
  //   () =>
  //     api.get(
  //       "/api/vendors/pending"
  //     );

      export const getPendingVendors = () =>
  api.get("/api/admin/vendors/pending");

  // APPROVE VENDOR
  export const approveVendor =
    (id) =>
      api.put(
        `/api/vendors/${id}/approve`
      );

  // UNAPPROVE VENDOR
  export const unapproveVendor =
    (id) =>
      api.put(
        `/api/vendors/${id}/unapprove`
      );

  // UPDATE VENDOR
  export const updateVendor =
    (id, data) =>
      api.put(
        `/api/vendors/${id}`,
        data
      );

  // DELETE VENDOR
  export const deleteVendor =
    (id) =>
      api.delete(
        `/api/vendors/${id}`
      );