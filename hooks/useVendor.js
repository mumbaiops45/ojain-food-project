// // =============================================
// // src/hooks/useVendor.js
// // =============================================

// import {
//   useVendorStore,
// } from "../store/vendor.store";

// export const useVendor =
//   () => {

//     const {

//       vendor,

//       earnings,

//       loading,

//       error,

//       registerVendor,

//       loginVendor,

//       fetchVendorProfile,

//       updateVendorProfile,

//       fetchVendorEarnings,

//       logoutVendor,

//       clearError,

//       reset,

//     } = useVendorStore();

//     return {

//       vendor,

//       earnings,

//       loading,

//       error,

//       registerVendor,

//       loginVendor,

//       fetchVendorProfile,

//       updateVendorProfile,

//       fetchVendorEarnings,

//       logoutVendor,

//       clearError,

//       reset,
//     };
//   };

// =============================================
// src/hooks/useVendor.js
// =============================================

import {
  useVendorStore,
} from "../store/vendor.store";

export const useVendor =
  () => {
    const {
      vendor,

      dashboard,

      earnings,

      loading,

      error,

      registerVendor,

      loginVendor,

      fetchVendorProfile,

      updateVendorProfile,

      fetchVendorDashboard,

      fetchVendorEarnings,

      logoutVendor,

      clearError,

      reset,
    } = useVendorStore();

    return {
      vendor,

      dashboard,

      earnings,

      loading,

      error,

      registerVendor,

      loginVendor,

      fetchVendorProfile,

      updateVendorProfile,

      fetchVendorDashboard,

      fetchVendorEarnings,

      logoutVendor,

      clearError,

      reset,
    };
  };