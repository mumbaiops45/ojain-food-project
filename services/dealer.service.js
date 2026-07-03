import {

registerDealer,
loginDealer,
refreshDealerToken,
logoutDealer,

getDealerDashboard,

getDealerProfile,
updateDealerProfile,

getDealerEarnings,

getPendingDealers,
approveDealer,
unapproveDealer,
rejectDealer,

} from "../api/dealerApi";

/* =========================================
   AUTH SERVICES
========================================= */

// REGISTER
export const registerDealerService = async (data) => {
  const res = await registerDealer(data);
  return res?.data ?? res;
};

// LOGIN
export const loginDealerService = async (data) => {
  const res = await loginDealer(data);
  return res?.data ?? res;
};

// REFRESH TOKEN
export const refreshDealerTokenService = async () => {
  const res = await refreshDealerToken();
  return res?.data ?? res;
};

// LOGOUT
export const logoutDealerService = async () => {
  const res = await logoutDealer();
  return res?.data ?? res;
};

/* =========================================
   DASHBOARD SERVICES
========================================= */

// GET DASHBOARD
export const getDealerDashboardService = async () => {
  const res = await getDealerDashboard();
  return res?.data ?? res;
};

/* =========================================
   PROFILE SERVICES
========================================= */

// GET PROFILE
export const getDealerProfileService = async () => {
  const res = await getDealerProfile();
  return res?.data ?? res;
};

// UPDATE PROFILE
export const updateDealerProfileService = async (data) => {
  const res = await updateDealerProfile(data);
  return res?.data ?? res;
};

/* =========================================
   EARNINGS / WALLET SERVICES
========================================= */

// GET EARNINGS
export const getDealerEarningsService = async () => {
  const res = await getDealerEarnings();
  return res?.data ?? res;
};

/* =========================================
   ADMIN CRUD SERVICES
========================================= */

// GET ALL DEALERS
export const getAllDealersService = async () => {
  const res = await getAllDealers();
  return res?.data ?? res;
};

// GET SINGLE DEALER
export const getDealerByIdService = async (id) => {
  const res = await getDealerById(id);
  return res?.data ?? res;
};

// GET PENDING DEALERS
export const getPendingDealersService = async () => {
  const res = await getPendingDealers();
  return res?.data ?? res;
};

// APPROVE DEALER
export const approveDealerService = async (id) => {
  const res = await approveDealer(id);
  return res?.data ?? res;
};

// UNAPPROVE DEALER
export const unapproveDealerService = async (id) => {
  const res = await unapproveDealer(id);
  return res?.data ?? res;
};

// UPDATE DEALER
export const updateDealerService = async (id, data) => {
  const res = await updateDealer(id, data);
  return res?.data ?? res;
};

// DELETE DEALER
export const deleteDealerService = async (id) => {
  const res = await deleteDealer(id);
  return res?.data ?? res;
};