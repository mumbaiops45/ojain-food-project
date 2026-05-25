"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  MdSearch,
  MdNotifications,
  MdMenu,
} from "react-icons/md";
import { FaLeaf, FaUser, FaSignOutAlt, FaChevronDown } from "react-icons/fa";
import { useVendor } from "../../../../hooks/useVendor";

export default function VendorHeader({ onMenuClick }) {
  const { vendor, logoutVendor } = useVendor();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await logoutVendor();
    window.location.href = "/vendorLogin/login";
  };

  // Get first letter for avatar
  const getInitial = () => {
    if (vendor?.fullName) return vendor.fullName.charAt(0).toUpperCase();
    if (vendor?.shopName) return vendor.shopName.charAt(0).toUpperCase();
    return "V";
  };

  return (
    <header
      className="sticky top-0 z-30 px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4"
      style={{
        background: "rgba(255,255,255,0.95)",
        borderBottom: "1px solid #C8E6C9",
        backdropFilter: "blur(8px)",
        boxShadow: "0 1px 12px rgba(46,125,50,0.07)",
      }}
    >
      {/* ── Left ── */}
      <div className="flex items-center gap-3 min-w-0">
        {/* Hamburger — mobile */}
        <button
          className="lg:hidden p-2 rounded-xl transition-colors"
          style={{ background: "#EBF5E9", color: "#2E7D32" }}
          onClick={onMenuClick}
          aria-label="Open sidebar"
          onMouseEnter={e => (e.currentTarget.style.background = "#C8E6C9")}
          onMouseLeave={e => (e.currentTarget.style.background = "#EBF5E9")}
        >
          <MdMenu className="text-2xl" />
        </button>

        {/* Brand mark — mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <FaLeaf style={{ color: "#2E7D32", fontSize: 18 }} />
          <span className="font-extrabold tracking-widest text-base" style={{ color: "#2E7D32" }}>
            OJAIN
          </span>
        </div>

        {/* Page title — desktop */}
        <div className="hidden lg:block">
          <h1 className="text-2xl font-bold" style={{ color: "#1B5E20" }}>
            Vendor Dashboard
          </h1>
          <p className="text-sm" style={{ color: "#66BB6A" }}>
            Welcome back 👋 Manage your store
          </p>
        </div>
      </div>

      {/* ── Right ── */}
      <div className="flex items-center gap-3">
        {/* Search — desktop */}
        <div
          className="hidden lg:flex items-center gap-2 rounded-xl px-4 py-2.5 w-72 border transition-colors"
          style={{ background: "#F9FFF6", borderColor: "#C8E6C9" }}
        >
          <MdSearch className="text-xl shrink-0" style={{ color: "#66BB6A" }} />
          <input
            type="text"
            placeholder="Search products, orders…"
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

        {/* Profile dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-3 pl-3 pr-2 py-1 rounded-2xl border transition-colors focus:outline-none"
            style={{ background: "#F9FFF6", borderColor: "#C8E6C9" }}
          >
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold" style={{ color: "#1B5E20" }}>
                {vendor?.fullName || vendor?.shopName || "Vendor"}
              </p>
              <p className="text-xs" style={{ color: "#66BB6A" }}>
                {vendor?.email || "Seller"}
              </p>
            </div>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-base shadow-sm"
              style={{ background: "linear-gradient(135deg, #FF8F00, #FFB300)" }}
            >
              {getInitial()}
            </div>
            <FaChevronDown
              className={`text-xs transition-transform mr-1`}
              style={{ color: "#66BB6A", transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>

          {/* Dropdown */}
          {dropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-56 rounded-xl overflow-hidden z-50"
              style={{
                background: "#FFFFFF",
                boxShadow: "0 8px 30px rgba(46,125,50,0.15)",
                border: "1px solid #C8E6C9",
              }}
            >
              <Link
                href="/vendor/profile"
                className="flex items-center gap-3 px-4 py-3 text-sm transition-colors"
                style={{ color: "#1B5E20" }}
                onClick={() => setDropdownOpen(false)}
                onMouseEnter={e => (e.currentTarget.style.background = "#EBF5E9")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <FaUser style={{ color: "#66BB6A" }} />
                My Profile
              </Link>
              <div style={{ height: "1px", background: "#E8F5E9" }} />
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full px-4 py-3 text-sm transition-colors"
                style={{ color: "#EF4444" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#FEF2F2")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
