"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  MdStorefront,
  MdRestaurantMenu,
  MdAttachMoney,
  MdPendingActions,
  MdArrowForward,
  MdTrendingUp,
  MdCheckCircle,
  MdAccessTime,
} from "react-icons/md";
import {
  FaUsers,
  FaLeaf,
  FaChartLine,
  FaShoppingCart,
} from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";
import { getDashboardStatsService } from "../../../../services/admin.service";

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────
const AVATAR_GRADS = [
  ["#2E7D32", "#66BB6A"],
  ["#FF8F00", "#FFB300"],
  ["#1565C0", "#42A5F5"],
  ["#6A1B9A", "#AB47BC"],
  ["#C62828", "#EF5350"],
  ["#00695C", "#26A69A"],
];
const grad = (i) => AVATAR_GRADS[i % AVATAR_GRADS.length];

const initials = (name = "") =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase() || "?";

const fmtDate = (d) =>
  new Date(d).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const orderStatusStyle = (s) => {
  const m = {
    Delivered: { bg: "#EBF5E9", color: "#2E7D32", border: "#A5D6A7" },
    Cancelled: { bg: "#FFEBEE", color: "#B71C1C", border: "#EF9A9A" },
    Placed: { bg: "#EBF5E9", color: "#1B5E20", border: "#C8E6C9" },
    Processing: { bg: "#FFF8E1", color: "#E65100", border: "#FFD54F" },
    Shipped: { bg: "#F3E5F5", color: "#6A1B9A", border: "#CE93D8" },
    "Out for Delivery": { bg: "#FFF3E0", color: "#BF360C", border: "#FFCC80" },
    Packed: { bg: "#E3F2FD", color: "#1565C0", border: "#90CAF9" },
  };
  return m[s] || { bg: "#F0F7F0", color: "#555", border: "#C8E6C9" };
};

// ─────────────────────────────────────────────────────────────
// SKELETON COMPONENTS
// ─────────────────────────────────────────────────────────────
const SkeletonStatCard = () => (
  <div
    className="rounded-2xl border p-5 animate-pulse"
    style={{ background: "#fff", borderColor: "#C8E6C9" }}
  >
    <div className="flex items-start justify-between mb-4">
      <div className="w-12 h-12 rounded-xl" style={{ background: "#E8F5E9" }} />
      <div className="w-10 h-5 rounded-full" style={{ background: "#E8F5E9" }} />
    </div>
    <div className="h-8 w-20 rounded-lg mb-2" style={{ background: "#E8F5E9" }} />
    <div className="h-3 w-28 rounded" style={{ background: "#F0F7F0" }} />
  </div>
);

const SkeletonRow = () => (
  <div className="flex items-center gap-3 py-3 animate-pulse">
    <div className="w-9 h-9 rounded-xl shrink-0" style={{ background: "#E8F5E9" }} />
    <div className="flex-1 space-y-1.5">
      <div className="h-3.5 rounded w-1/2" style={{ background: "#E8F5E9" }} />
      <div className="h-3 rounded w-1/3" style={{ background: "#F0F7F0" }} />
    </div>
    <div className="w-16 h-5 rounded-full" style={{ background: "#E8F5E9" }} />
  </div>
);

// ─────────────────────────────────────────────────────────────
// STAT CARD
// ─────────────────────────────────────────────────────────────
function StatCard({ icon: Icon, label, value, bg, iconColor, valueColor, sublabel, href }) {
  const inner = (
    <div
      className="rounded-2xl border p-5 flex flex-col gap-3 transition-all duration-200 h-full"
      style={{
        background: "#FFFFFF",
        borderColor: "#C8E6C9",
        boxShadow: "0 1px 8px rgba(46,125,50,0.06)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 28px rgba(46,125,50,0.14)";
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.borderColor = "#A5D6A7";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 1px 8px rgba(46,125,50,0.06)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "#C8E6C9";
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: bg }}
        >
          <Icon className="text-2xl" style={{ color: iconColor }} />
        </div>
        <span
          className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full"
          style={{ background: "#EBF5E9", color: "#2E7D32" }}
        >
          <MdTrendingUp className="text-xs" /> Live
        </span>
      </div>

      {/* Value */}
      <div>
        <p className="text-3xl font-extrabold leading-none" style={{ color: valueColor || "#1B5E20" }}>
          {value ?? "—"}
        </p>
        <p className="text-sm font-semibold mt-1" style={{ color: "#555" }}>
          {label}
        </p>
        {sublabel && (
          <p className="text-xs mt-0.5" style={{ color: "#A5D6A7" }}>
            {sublabel}
          </p>
        )}
      </div>

      {/* Link row */}
      {href && (
        <div
          className="flex items-center gap-1 text-xs font-semibold mt-auto pt-1"
          style={{ color: "#66BB6A" }}
        >
          View all <MdArrowForward className="text-sm" />
        </div>
      )}
    </div>
  );

  return href ? (
    <Link href={href} className="block">
      {inner}
    </Link>
  ) : (
    inner
  );
}

// ─────────────────────────────────────────────────────────────
// SECTION WRAPPER
// ─────────────────────────────────────────────────────────────
function Section({ title, subtitle, href, linkLabel = "View all", children }) {
  return (
    <div
      className="rounded-2xl border overflow-hidden"
      style={{
        background: "#FFFFFF",
        borderColor: "#C8E6C9",
        boxShadow: "0 1px 10px rgba(46,125,50,0.07)",
      }}
    >
      {/* Section header */}
      <div
        className="flex items-center justify-between px-5 py-4"
        style={{ borderBottom: "1px solid #E8F5E9", background: "#F9FFF6" }}
      >
        <div>
          <h2 className="text-base font-bold" style={{ color: "#1B5E20" }}>
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs mt-0.5" style={{ color: "#81C784" }}>
              {subtitle}
            </p>
          )}
        </div>
        {href && (
          <Link
            href={href}
            className="flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg transition-all duration-200"
            style={{ background: "#EBF5E9", color: "#2E7D32" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#C8E6C9")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#EBF5E9")}
          >
            {linkLabel} <MdArrowForward className="text-sm" />
          </Link>
        )}
      </div>

      {/* Content */}
      <div className="p-5">{children}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// QUICK ACTION BUTTON
// ─────────────────────────────────────────────────────────────
function QuickAction({ icon: Icon, label, href, color, bg }) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-2 px-4 py-3 rounded-2xl border transition-all duration-200 group"
      style={{
        background: bg,
        borderColor: color + "40",
        boxShadow: "0 1px 4px " + color + "20",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 14px " + color + "35";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 1px 4px " + color + "20";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: color + "22" }}
      >
        <Icon className="text-xl" style={{ color }} />
      </div>
      <span className="text-[11px] font-semibold whitespace-nowrap" style={{ color }}>
        {label}
      </span>
    </Link>
  );
}

// ─────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────
export default function DashboardPage() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDashboard = async () => {
    try {
      const res = await getDashboardStatsService();
      setDashboard(res);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchDashboard(); }, []);

  const stats = dashboard?.stats || {};
  const recentOrders = dashboard?.recentOrders || [];
  const recentUsers = dashboard?.recentUsers || [];
  const recentVendors = dashboard?.recentVendors || [];
  const topDealers = dashboard?.topDealers || [];


  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // ── Stat card config ──────────────────────────────────────
  const statCards = [
    {
      icon: FaUsers,
      label: "Total Users",
      value: stats.totalUsers,
      sublabel: "Registered accounts",
      bg: "#EBF5E9",
      iconColor: "#2E7D32",
      href: "/admin/users",
    },
    // {
    //   icon: GiChefToque,
    //   label: "Total Vendors",
    //   value: stats.totalVendors,
    //   sublabel: "Onboarded vendors",
    //   bg: "#FFF8E1",
    //   iconColor: "#FF8F00",
    //   valueColor: "#FF8F00",
    //   href: "/admin/vendorList",
    // },
    {
      icon: MdRestaurantMenu,
      label: "Total Products",
      value: stats.totalProducts,
      sublabel: "Listed menu items",
      bg: "#E3F2FD",
      iconColor: "#1565C0",
      valueColor: "#1565C0",
      href: "/admin/approve-products",
    },
    {
      icon: FaShoppingCart,
      label: "Total Orders",
      value: stats.totalOrders,
      sublabel: "All time orders",
      bg: "#F3E5F5",
      iconColor: "#6A1B9A",
      valueColor: "#6A1B9A",
      href: "/admin/orders",
    },
    {
      icon: FaChartLine,
      label: "Total Revenue",
      value: stats.totalSales != null ? `₹${Number(stats.totalSales).toLocaleString("en-IN")}` : "—",
      sublabel: "Gross sales",
      bg: "#E8F5E9",
      iconColor: "#1B5E20",
      valueColor: "#1B5E20",
    },
    {
      icon: MdPendingActions,
      label: "Pending Dealers",
      value: stats.pendingDealers,
      sublabel: "Awaiting approval",
      bg: "#FFF8E1",
      iconColor: "#E65100",
      valueColor: "#E65100",
      href: "/admin/dealers",
    },
  ];

  return (
    <div className="space-y-6">

      {/* ── Welcome Hero ─────────────────────────────────────── */}
      <div
        className="rounded-2xl overflow-hidden relative"
        style={{
          background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 55%, #388E3C 100%)",
          boxShadow: "0 4px 24px rgba(27,94,32,0.25)",
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute -top-10 -right-10 w-52 h-52 rounded-full opacity-10"
          style={{ background: "#FF8F00" }}
        />
        <div
          className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full opacity-10"
          style={{ background: "#66BB6A" }}
        />
        <div
          className="absolute top-6 right-32 w-20 h-20 rounded-full opacity-5"
          style={{ background: "#FFFFFF" }}
        />

        <div className="relative px-6 py-7 sm:px-8 sm:py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Left — greeting */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <FaLeaf className="text-base" style={{ color: "#A5D6A7" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#81C784" }}>
                Admin Dashboard
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              Welcome back, Super Admin 👋
            </h1>
            <p className="text-sm mt-1" style={{ color: "#A5D6A7" }}>
              {today} — Here's what's happening on your platform today.
            </p>
          </div>

          {/* Right — key metric pill */}
          {!loading && stats.totalRevenue !== undefined && (
            <div
              className="flex flex-col items-center px-6 py-4 rounded-2xl shrink-0"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)" }}
            >
              <p className="text-xs font-medium" style={{ color: "#A5D6A7" }}>Total Revenue</p>
              <p className="text-3xl font-extrabold text-white mt-1">
                ₹{Number(stats.totalSales || 0).toLocaleString("en-IN")}
              </p>
              <span
                className="flex items-center gap-1 text-[10px] font-bold mt-1.5 px-2 py-0.5 rounded-full"
                style={{ background: "rgba(255,143,0,0.25)", color: "#FFD54F" }}
              >
                <MdTrendingUp /> Lifetime Earnings
              </span>
            </div>
          )}
        </div>

        {/* Quick actions bar */}
        <div
          className="relative px-6 sm:px-8 py-4 flex items-center gap-3 overflow-x-auto"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.08)" }}
        >
          <span className="text-[11px] font-bold shrink-0" style={{ color: "#81C784" }}>
            Quick Actions:
          </span>
          {[
            { label: "Orders", href: "/admin/orders", icon: FaShoppingCart, color: "#FF8F00", bg: "#FFF8E1" },
            { label: "Dealers", href: "/admin/dealers", icon: GiChefToque, color: "#66BB6A", bg: "#EBF5E9" },
            { label: "Products", href: "/admin/approve-products", icon: MdRestaurantMenu, color: "#42A5F5", bg: "#E3F2FD" },
            { label: "Users", href: "/admin/users", icon: FaUsers, color: "#AB47BC", bg: "#F3E5F5" },
          ].map((a) => (
            <QuickAction key={a.label} {...a} />
          ))}
        </div>
      </div>

      {/* ── KPI Stat Cards ──────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonStatCard key={i} />)
          : statCards.map((card) => (
            <StatCard key={card.label} {...card} />
          ))}
      </div>

      {/* ── Middle Row: Recent Orders + Recent Users ─────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* Recent Orders — wider */}
        <div className="lg:col-span-3">
          <Section
            title="Recent Orders"
            subtitle="Latest customer order activity"
            href="/admin/orders"
            linkLabel="All Orders"
          >
            {loading ? (
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => <SkeletonRow key={i} />)}
              </div>
            ) : recentOrders.length === 0 ? (
              <EmptyState icon={<FaShoppingCart />} message="No recent orders" />
            ) : (
              <div className="space-y-2">
                {recentOrders.map((order, i) => {
                  const [g1, g2] = grad(i);
                  const ss = orderStatusStyle(order.orderStatus);
                  return (
                    <div
                      key={order._id}
                      className="flex items-center gap-3 p-3 rounded-xl transition-colors duration-150"
                      style={{ border: "1px solid #F0F7F0" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#F9FFF6")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      {/* Avatar */}
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold shrink-0"
                        style={{ background: `linear-gradient(135deg,${g1},${g2})` }}
                      >
                        {initials(order.user?.name)}
                      </div>

                      {/* Name + amount */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate" style={{ color: "#1B5E20" }}>
                          {order.user?.name || "Customer"}
                        </p>
                        <p className="text-xs flex items-center gap-1 mt-0.5" style={{ color: "#81C784" }}>
                          <MdAttachMoney className="text-sm" />
                          <span className="font-bold" style={{ color: "#FF8F00" }}>
                            ₹{order.totalAmount?.toLocaleString("en-IN")}
                          </span>
                          <span className="mx-1">·</span>
                          <MdAccessTime className="text-xs" />
                          {fmtDate(order.createdAt)}
                        </p>
                      </div>

                      {/* Status */}
                      <span
                        className="px-2.5 py-1 rounded-full text-[11px] font-bold border shrink-0"
                        style={{ background: ss.bg, color: ss.color, borderColor: ss.border }}
                      >
                        {order.orderStatus}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </Section>
        </div>

        {/* Recent Users — narrower */}
        <div className="lg:col-span-2">
          <Section
            title="Recent Users"
            subtitle="Newly registered accounts"
            href="/admin/users"
            linkLabel="All Users"
          >
            {loading ? (
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => <SkeletonRow key={i} />)}
              </div>
            ) : recentUsers.length === 0 ? (
              <EmptyState icon={<FaUsers />} message="No recent users" />
            ) : (
              <div className="space-y-2">
                {recentUsers.map((user, i) => {
                  const [g1, g2] = grad(i + 2);
                  const roleMap = {
                    admin: { bg: "#EDE7F6", color: "#4527A0" },
                    vendor: { bg: "#FFF8E1", color: "#E65100" },
                    customer: { bg: "#EBF5E9", color: "#2E7D32" },
                  };
                  const rs = roleMap[user.role?.toLowerCase()] || { bg: "#F0F7F0", color: "#555" };

                  return (
                    <div
                      key={user._id}
                      className="flex items-center gap-3 p-3 rounded-xl transition-colors duration-150"
                      style={{ border: "1px solid #F0F7F0" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#F9FFF6")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      {/* Avatar */}
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold shrink-0"
                        style={{ background: `linear-gradient(135deg,${g1},${g2})` }}
                      >
                        {initials(user.name)}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate" style={{ color: "#1B5E20" }}>
                          {user.name || "—"}
                        </p>
                        <p className="text-xs truncate" style={{ color: "#81C784" }}>
                          {user.email}
                        </p>
                      </div>

                      {/* Role */}
                      <span
                        className="px-2.5 py-1 rounded-full text-[11px] font-bold capitalize shrink-0"
                        style={{ background: rs.bg, color: rs.color }}
                      >
                        {user.role}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </Section>
        </div>
      </div>

      {/* ── Recent Vendors ──────────────────────────────────── */}
      <Section
        title="Recent Vendors"
        subtitle="Newly registered vendor accounts"
        href="/admin/vendorList"
        linkLabel="All Vendors"
      >
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border p-4 animate-pulse space-y-3"
                style={{ borderColor: "#E8F5E9" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl shrink-0" style={{ background: "#E8F5E9" }} />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 rounded w-3/4" style={{ background: "#E8F5E9" }} />
                    <div className="h-3 rounded w-1/2" style={{ background: "#F0F7F0" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : recentVendors.length === 0 ? (
          <EmptyState icon={<GiChefToque />} message="No recent vendors" />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentVendors.map((vendor, i) => {
              const [g1, g2] = grad(i + 1);
              return (
                <div
                  key={vendor._id}
                  className="flex items-center gap-3 p-4 rounded-xl border transition-all duration-200"
                  style={{
                    borderColor: "#E8F5E9",
                    boxShadow: "0 1px 6px rgba(46,125,50,0.05)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 6px 18px rgba(46,125,50,0.12)";
                    e.currentTarget.style.borderColor = "#A5D6A7";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 1px 6px rgba(46,125,50,0.05)";
                    e.currentTarget.style.borderColor = "#E8F5E9";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Avatar */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-base shrink-0"
                    style={{ background: `linear-gradient(135deg,${g1},${g2})` }}
                  >
                    {initials(vendor.fullName)}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm truncate" style={{ color: "#1B5E20" }}>
                      {vendor.fullName || "—"}
                    </p>
                    <p className="text-xs truncate flex items-center gap-1 mt-0.5" style={{ color: "#81C784" }}>
                      <MdStorefront className="text-sm shrink-0" />
                      {vendor.shopName || "No shop name"}
                    </p>
                  </div>

                  {/* Status */}
                  <span
                    className="text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0 flex items-center gap-1"
                    style={
                      vendor.isApproved
                        ? { background: "#EBF5E9", color: "#2E7D32" }
                        : { background: "#FFF8E1", color: "#E65100" }
                    }
                  >
                    {vendor.isApproved
                      ? <><MdCheckCircle className="text-sm" /> Approved</>
                      : <><MdPendingActions className="text-sm" /> Pending</>
                    }
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </Section>
      {/* ── Top Dealers ───────────────────────────────────── */}
      {/* <Section
        title="Top Dealers"
        subtitle="Dealers generating highest sales & commission"
      >
        {topDealers.length === 0 ? (
          <EmptyState
            icon={<FaUsers />}
            message="No dealer sales available"
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">Dealer</th>
                  <th className="text-left py-3">Code</th>
                  <th className="text-center py-3">Orders</th>
                  <th className="text-center py-3">Sales</th>
                  <th className="text-center py-3">Commission</th>
                </tr>
              </thead>

              <tbody>
                {topDealers.map((dealer) => (
                  <tr
                    key={dealer._id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="py-3 font-semibold">
                      {dealer.fullName}
                    </td>

                    <td>{dealer.dealerCode}</td>

                    <td className="text-center">
                      {dealer.totalOrders}
                    </td>

                    <td className="text-center">
                      ₹{Number(dealer.totalSales).toLocaleString("en-IN")}
                    </td>

                    <td className="text-center text-green-600 font-bold">
                      ₹{Number(dealer.totalCommission).toLocaleString("en-IN")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Section> */}

      {/* ── Platform Summary Footer ──────────────────────────── */}
      <div
        className="rounded-2xl border p-5 flex flex-wrap gap-4 items-center justify-between"
        style={{ background: "#FFFFFF", borderColor: "#C8E6C9" }}
      >
        <div className="flex items-center gap-2">
          <FaLeaf style={{ color: "#66BB6A" }} />
          <span className="text-sm font-bold" style={{ color: "#1B5E20" }}>
            Ojain Admin Panel
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "#EBF5E9", color: "#2E7D32" }}>
            v1.0
          </span>
        </div>
        <div className="flex flex-wrap gap-4 text-xs" style={{ color: "#81C784" }}>
          {[
            { label: "Users", value: stats.totalUsers, color: "#2E7D32" },
            { label: "Vendors", value: stats.totalVendors, color: "#FF8F00" },
            { label: "Products", value: stats.totalProducts, color: "#1565C0" },
            { label: "Orders", value: stats.totalOrders, color: "#6A1B9A" },
          ].map((s) => (
            <span key={s.label} className="flex items-center gap-1">
              {s.label}:{" "}
              <strong style={{ color: s.color }}>{s.value ?? "—"}</strong>
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// EMPTY STATE
// ─────────────────────────────────────────────────────────────
function EmptyState({ icon, message }) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 text-2xl"
        style={{ background: "#EBF5E9", color: "#66BB6A" }}
      >
        {icon}
      </div>
      <p className="text-sm font-medium" style={{ color: "#81C784" }}>
        {message}
      </p>
    </div>
  );
}
