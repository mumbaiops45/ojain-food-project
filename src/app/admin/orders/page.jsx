"use client";

import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import {
  MdSearch,
  MdDeleteOutline,
  MdShoppingBag,
  MdAttachMoney,
  MdCheckCircle,
  MdPendingActions,
  MdLocalShipping,
  MdCancel,
} from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { adminOrderAPI } from "../../../../services/api";

// ─────────────────────────────────────────────────────────────
// STATUS CONFIG
// ─────────────────────────────────────────────────────────────
const STATUS_OPTIONS = [
  "Placed",
  "Processing",
  "Packed",
  "Shipped",
  "Out for Delivery",
  "Delivered",
  "Cancelled",
];

const statusStyle = (s) => {
  const map = {
    Placed: { bg: "#EBF5E9", color: "#2E7D32", border: "#A5D6A7" },
    Processing: { bg: "#FFF8E1", color: "#E65100", border: "#FFD54F" },
    Packed: { bg: "#E3F2FD", color: "#1565C0", border: "#90CAF9" },
    Shipped: { bg: "#F3E5F5", color: "#6A1B9A", border: "#CE93D8" },
    "Out for Delivery": { bg: "#FFF3E0", color: "#BF360C", border: "#FFCC02" },
    Delivered: { bg: "#E8F5E9", color: "#1B5E20", border: "#66BB6A" },
    Cancelled: { bg: "#FFEBEE", color: "#B71C1C", border: "#EF9A9A" },
  };
  return map[s] || { bg: "#F0F7F0", color: "#2E7D32", border: "#C8E6C9" };
};

// ─────────────────────────────────────────────────────────────
// SKELETON ROW
// ─────────────────────────────────────────────────────────────
const SkeletonRow = () => (
  <tr className="animate-pulse border-t" style={{ borderColor: "#E8F5E9" }}>
    {[...Array(7)].map((_, i) => (
      <td key={i} className="p-4">
        <div className="h-4 rounded-lg" style={{ background: "#E8F5E9" }} />
      </td>
    ))}
  </tr>
);

// ─────────────────────────────────────────────────────────────
// STAT CARD
// ─────────────────────────────────────────────────────────────
const StatCard = ({ icon: Icon, label, value, bg, iconColor, valueColor }) => (
  <div
    className="flex items-center gap-4 rounded-2xl border p-4 transition-all duration-200"
    style={{
      background: "#FFFFFF",
      borderColor: "#C8E6C9",
      boxShadow: "0 1px 8px rgba(46,125,50,0.06)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = "0 6px 20px rgba(46,125,50,0.12)";
      e.currentTarget.style.transform = "translateY(-2px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = "0 1px 8px rgba(46,125,50,0.06)";
      e.currentTarget.style.transform = "translateY(0)";
    }}
  >
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
      style={{ background: bg }}
    >
      <Icon className="text-2xl" style={{ color: iconColor }} />
    </div>
    <div>
      <p className="text-xs font-medium" style={{ color: "#81C784" }}>
        {label}
      </p>
      <p className="text-2xl font-extrabold mt-0.5" style={{ color: valueColor || "#1B5E20" }}>
        {value}
      </p>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────
export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [deletingId, setDeletingId] = useState(null);

  // ── Fetch ──────────────────────────────────────────────────
  const fetchOrders = async () => {
    try {
      const res = await adminOrderAPI.getAllOrders();
      setOrders(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchOrders(); }, []);

  // ── Update status ──────────────────────────────────────────
  const updateStatus = async (id, status) => {
    try {
      await adminOrderAPI.updateOrderStatus(id, status);
      setOrders((prev) =>
        prev.map((o) => (o._id === id ? { ...o, orderStatus: status } : o))
      );
    } catch (err) {
      console.error(err);
      toast.error("Status update failed");
    }
  };

  // ── Delete ─────────────────────────────────────────────────
  const deleteOrder = async (id) => {
    if (!confirm("Delete this order? This action cannot be undone.")) return;
    setDeletingId(id);
    try {
      await adminOrderAPI.deleteOrder(id);
      setOrders((prev) => prev.filter((o) => o._id !== id));
    } catch (err) {
      console.error(err);
      toast.error("Delete failed");
    } finally {
      setDeletingId(null);
    }
  };

  // ── Derived stats ──────────────────────────────────────────
  const totalRevenue = orders.reduce((s, o) => s + (o.totalAmount || 0), 0);
  const paidCount = orders.filter((o) => o.paymentStatus === "Paid").length;
  const deliveredCount = orders.filter((o) => o.orderStatus === "Delivered").length;
  const cancelledCount = orders.filter((o) => o.orderStatus === "Cancelled").length;

  // ── Filter ─────────────────────────────────────────────────
  // ── Filter + SORT (newest first) ──────────────────────────
  const filteredOrders = useMemo(() => {
    // 1. Sort by createdAt descending (latest first)
    const sorted = [...orders].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    // 2. Apply search and status filters
    return sorted.filter((order) => {
      const keyword = search.toLowerCase();
      const matchSearch =
        order.user?.name?.toLowerCase().includes(keyword) ||
        order.user?.email?.toLowerCase().includes(keyword) ||
        order.paymentStatus?.toLowerCase().includes(keyword) ||
        order.orderStatus?.toLowerCase().includes(keyword);

      const matchStatus =
        statusFilter === "All" || order.orderStatus === statusFilter;

      return matchSearch && matchStatus;
    });
  }, [orders, search, statusFilter]);

  // ── Render ─────────────────────────────────────────────────
  return (
    <div className="space-y-6">

      {/* ── Page Header ────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#1B5E20" }}>
            Orders Management
          </h1>
          <p className="text-sm mt-0.5" style={{ color: "#66BB6A" }}>
            View, manage and update all customer orders
          </p>
        </div>

        {/* Quick badges */}
        <div className="flex items-center gap-3 flex-wrap">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold"
            style={{ background: "#EBF5E9", borderColor: "#A5D6A7", color: "#2E7D32" }}
          >
            <FaShoppingCart className="text-base" />
            {orders.length} Total Orders
          </div>
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold"
            style={{ background: "#FFF8E1", borderColor: "#FFD54F", color: "#E65100" }}
          >
            ₹{totalRevenue.toLocaleString()} Revenue
          </div>
        </div>
      </div>

      {/* ── Stat Cards ─────────────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={MdShoppingBag}
          label="Total Orders"
          value={orders.length}
          bg="#EBF5E9"
          iconColor="#2E7D32"
        />
        <StatCard
          icon={MdAttachMoney}
          label="Total Revenue"
          value={`₹${totalRevenue.toLocaleString()}`}
          bg="#FFF8E1"
          iconColor="#FF8F00"
          valueColor="#FF8F00"
        />
        <StatCard
          icon={MdCheckCircle}
          label="Delivered"
          value={deliveredCount}
          bg="#E8F5E9"
          iconColor="#1B5E20"
        />
        <StatCard
          icon={MdCancel}
          label="Cancelled"
          value={cancelledCount}
          bg="#FFEBEE"
          iconColor="#B71C1C"
          valueColor="#B71C1C"
        />
      </div>

      {/* ── Search + Filter Bar ─────────────────────────────── */}
      <div
        className="rounded-2xl border p-4 flex flex-col sm:flex-row sm:items-center gap-4"
        style={{ background: "#FFFFFF", borderColor: "#C8E6C9" }}
      >
        {/* Search */}
        <div
          className="flex items-center gap-2 flex-1 rounded-xl px-4 py-2.5 border"
          style={{ background: "#F9FFF6", borderColor: "#C8E6C9" }}
        >
          <MdSearch className="text-xl shrink-0" style={{ color: "#66BB6A" }} />
          <input
            type="text"
            placeholder="Search by customer name, email, status…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none w-full text-sm"
            style={{ color: "#333" }}
          />
        </div>

        {/* Status Filter */}
        <div
          className="flex items-center gap-1 p-1 rounded-xl flex-wrap"
          style={{ background: "#F0F7F0" }}
        >
          {["All", "Placed", "Delivered", "Cancelled"].map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
              style={
                statusFilter === s
                  ? { background: "#2E7D32", color: "#fff", boxShadow: "0 2px 8px rgba(46,125,50,0.25)" }
                  : { color: "#66BB6A" }
              }
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* ── Table ──────────────────────────────────────────── */}
      <div
        className="rounded-2xl border overflow-hidden"
        style={{
          background: "#FFFFFF",
          borderColor: "#C8E6C9",
          boxShadow: "0 1px 12px rgba(46,125,50,0.07)",
        }}
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-225">

            {/* Head */}
            <thead>
              <tr style={{ background: "#F0F7F0", borderBottom: "2px solid #C8E6C9" }}>
                {["#", "Customer", "Items", "Amount", "Payment", "Status", "Date", "Action"].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3.5 text-left text-xs font-bold uppercase tracking-wider"
                    style={{ color: "#2E7D32" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {/* Skeleton loading */}
              {loading &&
                Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} />)}

              {/* Empty state */}
              {!loading && filteredOrders.length === 0 && (
                <tr>
                  <td colSpan={8}>
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                        style={{ background: "#EBF5E9" }}
                      >
                        <MdPendingActions className="text-3xl" style={{ color: "#66BB6A" }} />
                      </div>
                      <h3 className="text-base font-bold mb-1" style={{ color: "#1B5E20" }}>
                        No Orders Found
                      </h3>
                      <p className="text-sm" style={{ color: "#81C784" }}>
                        Try adjusting your search or filter.
                      </p>
                    </div>
                  </td>
                </tr>
              )}

              {/* Rows */}
              {!loading &&
                filteredOrders.map((order, idx) => {
                  const ss = statusStyle(order.orderStatus);
                  return (
                    <tr
                      key={order._id}
                      className="transition-colors duration-150"
                      style={{ borderTop: "1px solid #E8F5E9" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#F9FFF6")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      {/* Index */}
                      <td className="px-4 py-4">
                        <span
                          className="text-xs font-bold px-2 py-1 rounded-lg"
                          style={{ background: "#F0F7F0", color: "#2E7D32" }}
                        >
                          #{idx + 1}
                        </span>
                      </td>

                      {/* Customer */}
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0"
                            style={{
                              background: "linear-gradient(135deg, #FF8F00, #FFB300)",
                              color: "#fff",
                            }}
                          >
                            {(order.user?.name?.[0] || "?").toUpperCase()}
                          </div>
                          <div>
                            <p className="font-semibold text-sm" style={{ color: "#1B5E20" }}>
                              {order.user?.name || "Customer"}
                            </p>
                            <p className="text-xs" style={{ color: "#81C784" }}>
                              {order.user?.email || "—"}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Items */}
                      <td className="px-4 py-4">
                        <div className="space-y-0.5">
                          {order.items?.slice(0, 2).map((item, i) => (
                            <p key={i} className="text-xs" style={{ color: "#555" }}>
                              {item.name}{" "}
                              <span className="font-semibold" style={{ color: "#2E7D32" }}>
                                ×{item.quantity}
                              </span>
                            </p>
                          ))}
                          {order.items?.length > 2 && (
                            <p className="text-[10px] font-medium" style={{ color: "#A5D6A7" }}>
                              +{order.items.length - 2} more
                            </p>
                          )}
                        </div>
                      </td>

                      {/* Amount */}
                      <td className="px-4 py-4">
                        <span className="font-extrabold text-base" style={{ color: "#FF8F00" }}>
                          ₹{order.totalAmount?.toLocaleString()}
                        </span>
                      </td>

                      {/* Payment */}
                      <td className="px-4 py-4">
                        <span
                          className="px-2.5 py-1 rounded-full text-[11px] font-bold border"
                          style={
                            order.paymentStatus === "Paid"
                              ? { background: "#EBF5E9", color: "#2E7D32", borderColor: "#A5D6A7" }
                              : { background: "#FFF8E1", color: "#E65100", borderColor: "#FFD54F" }
                          }
                        >
                          {order.paymentStatus}
                        </span>
                      </td>

                      {/* Status select */}
                      <td className="px-4 py-4">
                        <select
                          value={order.orderStatus}
                          onChange={(e) => updateStatus(order._id, e.target.value)}
                          className="text-xs font-semibold rounded-xl px-3 py-2 outline-none border cursor-pointer transition-all duration-200"
                          style={{
                            background: ss.bg,
                            color: ss.color,
                            borderColor: ss.border,
                          }}
                        >
                          {STATUS_OPTIONS.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </td>

                      {/* Date */}
                      <td className="px-4 py-4">
                        <div>
                          <p className="text-xs font-medium" style={{ color: "#555" }}>
                            {new Date(order.createdAt).toLocaleDateString("en-IN", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </p>
                          <p className="text-[10px] mt-0.5" style={{ color: "#A5D6A7" }}>
                            {new Date(order.createdAt).toLocaleTimeString("en-IN", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                      </td>

                      {/* Delete */}
                      <td className="px-4 py-4">
                        <button
                          onClick={() => deleteOrder(order._id)}
                          disabled={deletingId === order._id}
                          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border"
                          style={{
                            background: deletingId === order._id ? "#F0F7F0" : "rgba(239,68,68,0.08)",
                            color: deletingId === order._id ? "#A5D6A7" : "#EF4444",
                            borderColor: deletingId === order._id ? "#C8E6C9" : "rgba(239,68,68,0.25)",
                          }}
                          onMouseEnter={(e) => {
                            if (deletingId !== order._id) {
                              e.currentTarget.style.background = "rgba(239,68,68,0.18)";
                              e.currentTarget.style.color = "#B91C1C";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (deletingId !== order._id) {
                              e.currentTarget.style.background = "rgba(239,68,68,0.08)";
                              e.currentTarget.style.color = "#EF4444";
                            }
                          }}
                        >
                          <MdDeleteOutline className="text-base" />
                          {deletingId === order._id ? "Deleting…" : "Delete"}
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        {/* Footer count */}
        {!loading && filteredOrders.length > 0 && (
          <div
            className="px-5 py-3 flex items-center justify-between border-t text-xs"
            style={{ borderColor: "#E8F5E9", color: "#81C784" }}
          >
            <span>
              Showing <span className="font-bold" style={{ color: "#2E7D32" }}>{filteredOrders.length}</span> of{" "}
              <span className="font-bold" style={{ color: "#2E7D32" }}>{orders.length}</span> orders
            </span>
            <span className="flex items-center gap-1">
              <MdLocalShipping className="text-base" />
              {paidCount} Paid · {deliveredCount} Delivered
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
