// "use client";

// import { useState } from "react";

// import Sidebar from "../components/dashboard/Sidebar";

// import {
//   MdSearch,
//   MdNotifications,
//   MdMenu,
// } from "react-icons/md";

// export default function AdminLayout({ children }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen bg-[#f4f7fe]">

//       {/* Mobile overlay */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-40 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* SIDEBAR */}
//       <div
//         className={`
//           fixed inset-y-0 left-0 z-50 lg:static lg:z-auto
//           transform transition-transform duration-300 ease-in-out
//           ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
//         `}
//       >
//         <Sidebar onClose={() => setSidebarOpen(false)} />
//       </div>

//       {/* RIGHT SECTION */}
//       <div className="flex-1 flex flex-col overflow-hidden min-w-0">

//         {/* HEADER */}
//         <header className="h-auto min-h-[70px] lg:h-[90px] bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-10 py-4 lg:py-0 flex items-center justify-between gap-4 shadow-sm">

//           {/* LEFT */}
//           <div className="flex items-center gap-3 min-w-0">

//             {/* Hamburger — mobile/tablet */}
//             <button
//               className="lg:hidden shrink-0 w-10 h-10 rounded-xl bg-[#f4f7fe] border border-gray-200 flex items-center justify-center hover:bg-orange-50 transition"
//               onClick={() => setSidebarOpen(true)}
//               aria-label="Open sidebar"
//             >
//               <MdMenu className="text-2xl text-gray-700" />
//             </button>

//             <div className="min-w-0">
//               <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 truncate">
//                 Admin Dashboard
//               </h1>
//               <p className="text-gray-500 mt-0.5 text-sm hidden sm:block">
//                 Welcome back 👋 Manage your platform
//               </p>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="flex items-center gap-3 lg:gap-6 shrink-0">

//             {/* SEARCH — lg+ */}
//             <div className="hidden lg:flex items-center bg-[#f4f7fe] rounded-2xl px-5 h-14 w-[320px] border border-gray-200">
//               <MdSearch className="text-2xl text-gray-400 shrink-0" />
//               <input
//                 type="text"
//                 placeholder="Search here..."
//                 className="bg-transparent outline-none border-none px-3 w-full text-gray-700"
//               />
//             </div>

//             {/* NOTIFICATION */}
//             <button className="relative w-10 h-10 lg:w-14 lg:h-14 rounded-2xl bg-[#f4f7fe] border border-gray-200 flex items-center justify-center hover:bg-orange-50 transition">
//               <MdNotifications className="text-xl lg:text-3xl text-gray-700" />
//               <span className="absolute top-1.5 right-1.5 lg:top-2 lg:right-2 w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-red-500"></span>
//             </button>

//             {/* PROFILE */}
//             <div className="flex items-center gap-2 lg:gap-4 bg-[#f4f7fe] border border-gray-200 rounded-2xl px-3 lg:px-4 py-2">
//               <div className="text-right hidden sm:block">
//                 <h3 className="font-bold text-gray-800 text-sm lg:text-base">Super Admin</h3>
//                 <p className="text-xs lg:text-sm text-gray-500">Administrator</p>
//               </div>
//               <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center text-white text-lg lg:text-xl font-bold shadow-lg">
//                 A
//               </div>
//             </div>

//           </div>
//         </header>

//         {/* PAGE CONTENT */}
//         <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
//           {children}
//         </main>

//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import { MdSearch, MdNotifications, MdMenu } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: "#F0F7F0" }}>
      {/* ── Mobile overlay ── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Sidebar ── */}
      <div
        className={`
          fixed inset-y-0 left-0 z-50 lg:relative lg:z-auto lg:flex lg:shrink-0
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* ── Main content ── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto overflow-x-hidden">

        {/* ── Header ── */}
        <header
          className="sticky top-0 z-30 px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4"
          style={{
            background: "rgba(255,255,255,0.95)",
            borderBottom: "1px solid #C8E6C9",
            backdropFilter: "blur(8px)",
            boxShadow: "0 1px 12px rgba(46,125,50,0.07)",
          }}
        >
          {/* Left */}
          <div className="flex items-center gap-3 min-w-0">
            {/* Hamburger — mobile */}
            <button
              className="lg:hidden p-2 rounded-xl transition-colors"
              style={{ background: "#EBF5E9", color: "#2E7D32" }}
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
              onMouseEnter={e => (e.currentTarget.style.background = "#C8E6C9")}
              onMouseLeave={e => (e.currentTarget.style.background = "#EBF5E9")}
            >
              <MdMenu className="text-2xl" />
            </button>

            {/* Brand mark — visible on mobile when sidebar is hidden */}
            <div className="flex items-center gap-2 lg:hidden">
              <FaLeaf style={{ color: "#2E7D32", fontSize: 18 }} />
              <span className="font-extrabold tracking-widest text-base" style={{ color: "#2E7D32" }}>
                OJAIN
              </span>
            </div>

            {/* Page title — desktop */}
            <div className="hidden lg:block">
              <h1 className="text-2xl font-bold" style={{ color: "#1B5E20" }}>
                Admin Dashboard
              </h1>
              <p className="text-sm" style={{ color: "#66BB6A" }}>
                Welcome back 👋 Manage your platform
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            {/* Search — desktop */}
            <div
              className="hidden lg:flex items-center gap-2 rounded-xl px-4 py-2.5 w-72 border transition-colors"
              style={{ background: "#F9FFF6", borderColor: "#C8E6C9" }}
            >
              <MdSearch className="text-xl shrink-0" style={{ color: "#66BB6A" }} />
              <input
                type="text"
                placeholder="Search orders, vendors…"
                className="bg-transparent outline-none w-full text-sm"
                style={{ color: "#333333" }}
              />
            </div>

            {/* Notifications */}
            <button
              className="relative p-2.5 rounded-xl transition-colors"
              style={{ background: "#EBF5E9" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#C8E6C9")}
              onMouseLeave={e => (e.currentTarget.style.background = "#EBF5E9")}
              aria-label="Notifications"
            >
              <MdNotifications className="text-xl" style={{ color: "#2E7D32" }} />
              <span
                className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
                style={{ background: "#FF8F00", boxShadow: "0 0 5px rgba(255,143,0,0.6)" }}
              />
            </button>

            {/* Profile */}
            <div
              className="flex items-center gap-3 pl-3 pr-1 py-1 rounded-2xl border"
              style={{ background: "#F9FFF6", borderColor: "#C8E6C9" }}
            >
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold" style={{ color: "#1B5E20" }}>Super Admin</p>
                <p className="text-xs" style={{ color: "#66BB6A" }}>Administrator</p>
              </div>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-base shadow-sm"
                style={{ background: "linear-gradient(135deg, #FF8F00, #FFB300)" }}
              >
                A
              </div>
            </div>
          </div>
        </header>

        {/* ── Page Content ── */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
