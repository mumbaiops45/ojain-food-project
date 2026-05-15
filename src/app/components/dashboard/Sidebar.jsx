// // "use client";

// // import Link from "next/link";

// // import {
// //   usePathname,
// //   useRouter,
// // } from "next/navigation";

// // import toast from "react-hot-toast";

// // import {

// //   MdDashboard,
// //   MdRestaurantMenu,
// //   MdAnalytics,
// //   MdLogout,
// //   MdClose,

// // } from "react-icons/md";

// // import {
// //   FaUsers,
// //   FaShoppingCart,
// // } from "react-icons/fa";

// // import {
// //   GiChefToque,
// // } from "react-icons/gi";

// // import {
// //   useAdmin,
// // } from "../../../../hooks/useAdmin";

// // export default function Sidebar({ onClose }) {

// //   const pathname =
// //     usePathname();

// //   const router =
// //     useRouter();

// //   const {
// //     logoutAdmin,
// //   } = useAdmin();

// //   const menus = [
// //     {
// //       name: "Dashboard",
// //       path: "/admin/dashboard",
// //       icon: <MdDashboard />,
// //     },
// //     {
// //       name: "Orders",
// //       path: "/admin/orders",
// //       icon: <FaShoppingCart />,
// //     },
// //     {
// //       name: "Customers",
// //       path: "/admin/customers",
// //       icon: <FaUsers />,
// //     },
// //     {
// //       name: "Vendors",
// //       path: "/admin/vendorList",
// //       icon: <GiChefToque />,
// //     },
// //     {
// //       name: "Foods",
// //       path: "/admin/foods",
// //       icon: <MdRestaurantMenu />,
// //     },
// //     {
// //       name: "Analytics",
// //       path: "/admin/analytics",
// //       icon: <MdAnalytics />,
// //     },
// //   ];

// //   // LOGOUT
// //   const handleLogout =
// //     () => {

// //       logoutAdmin();

// //       toast.success(
// //         "Logout Successful"
// //       );

// //       router.push("/");
// //     };

// //   return (
// //     <div className="w-72 bg-[#0f172a] text-white flex flex-col min-h-screen border-r border-gray-800 shadow-2xl">

// //       {/* PROFILE */}
// //       <div className="px-6 py-6 border-b border-gray-800">

// //         <div className="flex items-center justify-between gap-4">

// //           {/* AVATAR */}
// //           <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center text-2xl font-bold shadow-lg">
// //             A
// //           </div>

// //           {/* INFO */}
// //           <div className="flex-1">

// //             <h3 className="font-bold text-lg">
// //               Super Admin
// //             </h3>

// //             <p className="text-sm text-gray-400">
// //               Administrator
// //             </p>

// //           </div>

// //           {/* Close — mobile only */}
// //           {onClose && (
// //             <button
// //               onClick={onClose}
// //               className="lg:hidden shrink-0 w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
// //               aria-label="Close sidebar"
// //             >
// //               <MdClose className="text-lg text-white" />
// //             </button>
// //           )}

// //         </div>

// //       </div>

// //       {/* MENU */}
// //       <div className="flex-1 p-5 space-y-3 overflow-y-auto">

// //         {menus.map((menu) => {

// //           const active =
// //             pathname ===
// //             menu.path;

// //           return (
// //             <Link
// //               key={menu.path}
// //               href={menu.path}
// //               className={`group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
// //                 active
// //                   ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-xl"
// //                   : "hover:bg-gray-800 text-gray-300"
// //               }`}
// //             >

// //               {/* ICON */}
// //               <span className={`text-2xl ${
// //                 active
// //                   ? "text-white"
// //                   : "text-orange-400 group-hover:text-white"
// //               }`}>
// //                 {menu.icon}
// //               </span>

// //               {/* NAME */}
// //               <span className="font-semibold text-lg">
// //                 {menu.name}
// //               </span>

// //             </Link>
// //           );
// //         })}

// //       </div>

// //       {/* LOGOUT */}
// //       <div className="p-5 border-t border-gray-800">

// //         <button
// //           onClick={handleLogout}
// //           className="w-full bg-red-500 hover:bg-red-600 flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold text-lg transition duration-300 shadow-lg"
// //         >

// //           <MdLogout className="text-2xl" />

// //           Logout

// //         </button>

// //       </div>

// //     </div>
// //   );
// // }

// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import toast from "react-hot-toast";
// import {
//   MdDashboard,
//   MdRestaurantMenu,
//   MdAnalytics,
//   MdLogout,
//   MdClose,
// } from "react-icons/md";
// import { FaUsers, FaShoppingCart } from "react-icons/fa";
// import { GiChefToque } from "react-icons/gi";
// import { useAdmin } from "../../../../hooks/useAdmin";

// export default function Sidebar({ onClose }) {
//   const pathname = usePathname();
//   const router = useRouter();
//   const { logoutAdmin } = useAdmin();

//   const menus = [
//     { name: "Dashboard", path: "/admin/dashboard", icon: <MdDashboard /> },
//     { name: "Orders", path: "/admin/orders", icon: <FaShoppingCart /> },
//     { name: "Customers", path: "/admin/customers", icon: <FaUsers /> },
//     { name: "Vendors", path: "/admin/vendorList", icon: <GiChefToque /> },
//     { name: "Foods", path: "/admin/foods", icon: <MdRestaurantMenu /> },
//     { name: "Analytics", path: "/admin/analytics", icon: <MdAnalytics /> },
//   ];

//   const handleLogout = () => {
//     logoutAdmin();
//     toast.success("Logout Successful");
//     router.push("/");
//   };

//   return (
//     <div className="w-72 bg-gradient-to-b from-slate-900 to-slate-800 text-white flex flex-col min-h-screen shadow-2xl shadow-black/20 border-r border-white/5 backdrop-blur-sm">
//       {/* PROFILE SECTION */}
//       <div className="relative px-6 pt-8 pb-6 border-b border-white/10">
//         <div className="flex items-center justify-between gap-3">
//           <div className="flex items-center gap-4">
//             {/* Avatar with ring effect */}
//             <div className="relative">
//               <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-2xl font-bold shadow-lg shadow-orange-500/30 ring-2 ring-white/20">
//                 A
//               </div>
//             </div>
//             {/* Info */}
//             <div>
//               <h3 className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                 Super Admin
//               </h3>
//               <p className="text-xs text-gray-400 mt-0.5 font-medium">
//                 Administrator
//               </p>
//             </div>
//           </div>
//           {/* Mobile close button */}
//           {onClose && (
//             <button
//               onClick={onClose}
//               className="lg:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 transition-all duration-200 hover:scale-105"
//               aria-label="Close sidebar"
//             >
//               <MdClose className="text-xl" />
//             </button>
//           )}
//         </div>
//       </div>

//       {/* MENU LIST */}
//       <nav className="flex-1 py-6 px-4 space-y-1.5 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600">
//         {menus.map((menu) => {
//           const isActive = pathname === menu.path;
//           return (
//             <Link key={menu.path} href={menu.path}>
//               <div
//                 className={`
//                   group relative flex items-center gap-4 px-4 py-3.5 rounded-xl
//                   transition-all duration-200 ease-out cursor-pointer
//                   ${
//                     isActive
//                       ? "bg-gradient-to-r from-amber-500/20 to-orange-500/10 text-white shadow-sm"
//                       : "text-gray-300 hover:bg-white/5 hover:text-white"
//                   }
//                 `}
//               >
//                 {/* Active indicator bar (left side) */}
//                 {isActive && (
//                   <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full shadow-md shadow-orange-500/50" />
//                 )}

//                 {/* Icon with scaling on hover */}
//                 <span
//                   className={`
//                     text-2xl transition-transform duration-200
//                     ${isActive ? "text-amber-400" : "text-gray-400 group-hover:text-amber-400"}
//                     group-hover:scale-110
//                   `}
//                 >
//                   {menu.icon}
//                 </span>

//                 {/* Name */}
//                 <span
//                   className={`
//                     font-medium text-[15px] tracking-wide
//                     ${isActive ? "font-semibold" : "font-normal"}
//                   `}
//                 >
//                   {menu.name}
//                 </span>

//                 {/* Optional: subtle chevron on hover */}
//                 <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-amber-400 text-sm">
//                   →
//                 </span>
//               </div>
//             </Link>
//           );
//         })}
//       </nav>

//       {/* LOGOUT BUTTON */}
//       <div className="p-5 border-t border-white/10 mt-auto">
//         <button
//           onClick={handleLogout}
//           className="
//             w-full flex items-center justify-center gap-3 py-3.5 rounded-xl
//             bg-red-500/10 hover:bg-red-500/20
//             text-red-400 hover:text-red-300
//             font-semibold text-base
//             transition-all duration-200
//             border border-red-500/20 hover:border-red-500/40
//             backdrop-blur-sm
//             group
//           "
//         >
//           <MdLogout className="text-xl transition-transform duration-200 group-hover:rotate-12" />
//           <span>Logout</span>
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  MdDashboard,
  MdRestaurantMenu,
  MdAnalytics,
  MdLogout,
  MdClose,
} from "react-icons/md";
import { FaUsers, FaShoppingCart } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";
import { useAdmin } from "../../../../hooks/useAdmin";

export default function Sidebar({ onClose }) {
  const pathname = usePathname();
  const router = useRouter();
  const { logoutAdmin } = useAdmin();

   const menus = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <MdDashboard /> },
    { name: "Orders", path: "/admin/orders", icon: <FaShoppingCart /> },
    { name: "Customers", path: "/admin/customers", icon: <FaUsers /> },
    { name: "Vendors", path: "/admin/vendorList", icon: <GiChefToque /> },
    { name: "Foods", path: "/admin/foods", icon: <MdRestaurantMenu /> },
    { name: "Analytics", path: "/admin/analytics", icon: <MdAnalytics /> },
  ];

  const handleLogout = () => {
    logoutAdmin();
    toast.success("Logout Successful");
    router.push("/");
  };

  return (
    <div className="w-72 bg-white text-gray-800 flex flex-col min-h-screen shadow-xl border-r border-gray-100">
      {/* Profile Section */}
      <div className="px-6 pt-8 pb-6 border-b border-gray-100">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            {/* <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white text-2xl font-bold shadow-md">
              A
            </div> */}
            <div>
               <h3 className="font-bold text-xl text-gray-900 text-center w-full">
            OJAIN
          </h3>
              {/* <p className="text-sm text-gray-500">Administrator</p> */}
            </div>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition"
            >
              <MdClose className="text-xl text-gray-600" />
            </button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
        {menus.map((menu) => {
          const isActive = pathname === menu.path;
          return (
            <Link key={menu.path} href={menu.path}>
              <div
                className={`
                  flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer
                  ${
                    isActive
                      ? "bg-orange-50 text-orange-600 font-semibold"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }
                `}
              >
                <span className="text-2xl">{menu.icon}</span>
                <span className="text-[15px]">{menu.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-5 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-3 rounded-xl transition-all duration-200 border border-red-200"
        >
          <MdLogout className="text-xl" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}