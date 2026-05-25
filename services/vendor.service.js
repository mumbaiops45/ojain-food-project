import {
  // AUTH
  registerVendor,
  loginVendor,
  refreshVendorToken,
  logoutVendor,

  // DASHBOARD
  getVendorDashboard,

  // PROFILE
  getVendorProfile,
  updateVendorProfile,

  // EARNINGS
  getVendorEarnings,

  // ADMIN CRUD
  getAllVendors,
  getVendorById,
  getPendingVendors,
  approveVendor,
  unapproveVendor,
  updateVendor,
  deleteVendor,
} from "../api/vendorApi";

/* =========================================
   AUTH SERVICES
========================================= */

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
      await loginVendor(data);

    return res?.data ?? res;
  };

// REFRESH TOKEN
export const refreshVendorTokenService =
  async () => {
    const res =
      await refreshVendorToken();

    return res?.data ?? res;
  };

// LOGOUT
export const logoutVendorService =
  async () => {
    const res =
      await logoutVendor();

    return res?.data ?? res;
  };

/* =========================================
   DASHBOARD SERVICES
========================================= */

// GET DASHBOARD
export const getVendorDashboardService =
  async () => {
    const res =
      await getVendorDashboard();

    return res?.data ?? res;
  };

/* =========================================
   PROFILE SERVICES
========================================= */

// GET PROFILE
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

/* =========================================
   EARNINGS SERVICES
========================================= */

// GET EARNINGS
export const getVendorEarningsService =
  async () => {
    const res =
      await getVendorEarnings();

    return res?.data ?? res;
  };

/* =========================================
   ADMIN CRUD SERVICES
========================================= */

// GET ALL VENDORS
export const getAllVendorsService =
  async () => {
    const res =
      await getAllVendors();

    return res?.data ?? res;
  };

// GET SINGLE VENDOR
export const getVendorByIdService =
  async (id) => {
    const res =
      await getVendorById(id);

    return res?.data ?? res;
  };

// GET PENDING VENDORS
export const getPendingVendorsService =
  async () => {
    const res =
      await getPendingVendors();

    return res?.data ?? res;
  };

// APPROVE VENDOR
export const approveVendorService =
  async (id) => {
    const res =
      await approveVendor(id);

    return res?.data ?? res;
  };

// UNAPPROVE VENDOR
export const unapproveVendorService =
  async (id) => {
    const res =
      await unapproveVendor(id);

    return res?.data ?? res;
  };

// UPDATE VENDOR
export const updateVendorService =
  async (
    id,
    data
  ) => {
    const res =
      await updateVendor(
        id,
        data
      );

    return res?.data ?? res;
  };

// DELETE VENDOR
export const deleteVendorService =
  async (id) => {
    const res =
      await deleteVendor(id);

    return res?.data ?? res;
  };