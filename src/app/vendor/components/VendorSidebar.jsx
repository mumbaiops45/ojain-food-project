"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdDashboard,
  MdRestaurantMenu,
  MdPerson,
  MdLogout,
  MdCategory,
  MdClose,
} from "react-icons/md";
import { FaLeaf } from "react-icons/fa";
import { useVendor } from "../../../../hooks/useVendor";

export default function VendorSidebar({ onClose }) {
  const pathname = usePathname();
  const { logoutVendor } = useVendor();

  const menuItems = [
    { name: "Dashboard",  path: "/vendor/dashboard",       icon: <MdDashboard />      },
    { name: "Category",   path: "/vendor/categorymanager", icon: <MdCategory />       },
    { name: "Products",   path: "/vendor/product",         icon: <MdRestaurantMenu /> },
    { name: "Profile",    path: "/vendor/profile",         icon: <MdPerson />         },
  ];

  const handleLogout = async () => {
    await logoutVendor();
    window.location.href = "/vendorLogin/login";
  };

  return (
    <aside
      className="flex flex-col h-screen w-64 shrink-0"
      style={{
        background: "linear-gradient(180deg, #1B5E20 0%, #2E7D32 60%, #388E3C 100%)",
        boxShadow: "4px 0 24px rgba(27,94,32,0.18)",
      }}
    >
      {/* ── Brand Header ── */}
      <div
        className="flex items-center justify-between px-5 py-5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}
      >
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          {/* Icon badge */}
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md shrink-0"
            style={{ background: "rgba(255,143,0,0.18)", border: "1.5px solid rgba(255,143,0,0.55)" }}
          >
            <FaLeaf className="text-xl" style={{ color: "#FF8F00" }} />
          </div>

          <div className="leading-none">
            <span
              className="block text-xl font-extrabold tracking-widest"
              style={{ color: "#FFFFFF", letterSpacing: "0.18em" }}
            >
              OJAIN
            </span>
            <span
              className="block text-[10px] font-medium tracking-wider"
              style={{ color: "#A5D6A7", letterSpacing: "0.12em" }}
            >
              Vendor Panel
            </span>
          </div>
        </div>

        {/* Close button — mobile only */}
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Close sidebar"
            className="lg:hidden w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
            style={{ background: "rgba(255,255,255,0.1)" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
          >
            <MdClose className="text-lg text-white" />
          </button>
        )}
      </div>

      {/* ── Section Label ── */}
      <p
        className="px-5 pt-6 pb-2 text-[10px] font-bold uppercase tracking-[0.18em]"
        style={{ color: "#81C784" }}
      >
        Main Menu
      </p>

      {/* ── Navigation ── */}
      <nav className="flex-1 px-3 space-y-0.5 overflow-y-auto pb-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link key={item.path} href={item.path} onClick={onClose}>
              <div
                className="group relative flex items-center gap-3.5 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200"
                style={
                  isActive
                    ? {
                        background: "rgba(255,143,0,0.18)",
                        borderLeft: "3px solid #FF8F00",
                      }
                    : {
                        background: "transparent",
                        borderLeft: "3px solid transparent",
                      }
                }
                onMouseEnter={e => {
                  if (!isActive) e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                }}
                onMouseLeave={e => {
                  if (!isActive) e.currentTarget.style.background = "transparent";
                }}
              >
                {/* Icon */}
                <span
                  className="text-xl shrink-0 transition-colors duration-200"
                  style={{ color: isActive ? "#FF8F00" : "#A5D6A7" }}
                >
                  {item.icon}
                </span>

                {/* Label */}
                <span
                  className="text-[14px] font-medium transition-colors duration-200"
                  style={{ color: isActive ? "#FFFFFF" : "#C8E6C9" }}
                >
                  {item.name}
                </span>

                {/* Active dot */}
                {isActive && (
                  <span
                    className="ml-auto w-2 h-2 rounded-full shrink-0"
                    style={{ background: "#FF8F00", boxShadow: "0 0 6px #FF8F00" }}
                  />
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* ── Divider ── */}
      <div
        className="mx-5"
        style={{ height: "1px", background: "rgba(255,255,255,0.1)" }}
      />

      {/* ── Logout ── */}
      <div className="p-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 py-3 rounded-xl font-semibold text-[14px] transition-all duration-200"
          style={{
            background: "rgba(239,68,68,0.12)",
            color: "#FCA5A5",
            border: "1px solid rgba(239,68,68,0.25)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "rgba(239,68,68,0.22)";
            e.currentTarget.style.color = "#FFFFFF";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "rgba(239,68,68,0.12)";
            e.currentTarget.style.color = "#FCA5A5";
          }}
        >
          <MdLogout className="text-xl" />
          <span>Logout</span>
        </button>
      </div>

      {/* ── Footer tag ── */}
      <p
        className="text-center text-[10px] pb-4 font-medium"
        style={{ color: "rgba(165,214,167,0.5)" }}
      >
        © 2025 Ojain Food
      </p>
    </aside>
  );
}
