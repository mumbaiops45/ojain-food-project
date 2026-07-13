"use client";

import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import {
  MdSearch,
  MdDeleteOutline,
  MdPeople,
  MdAdminPanelSettings,
  MdVerifiedUser,
  MdPerson,
  MdPhone,
  MdCalendarToday,
  MdFilterList,
} from "react-icons/md";
import { FaUsers, FaLeaf } from "react-icons/fa";
import { deleteUserService, getAllUsersService } from "../../../../services/admin.service";

// ─────────────────────────────────────────────────────────────
// AVATAR GRADIENT POOL
// ─────────────────────────────────────────────────────────────
const GRADIENTS = [
  ["#2E7D32", "#66BB6A"],
  ["#FF8F00", "#FFB300"],
  ["#1565C0", "#42A5F5"],
  ["#6A1B9A", "#AB47BC"],
  ["#C62828", "#EF5350"],
  ["#00695C", "#26A69A"],
];
const grad = (i) => GRADIENTS[i % GRADIENTS.length];

// ─────────────────────────────────────────────────────────────
// ROLE CONFIG
// ─────────────────────────────────────────────────────────────
const roleStyle = (role) => {
  const map = {
    admin:    { bg: "#EDE7F6", color: "#4527A0", border: "#B39DDB", icon: <MdAdminPanelSettings /> },
    vendor:   { bg: "#FFF8E1", color: "#E65100", border: "#FFD54F", icon: <FaLeaf /> },
    customer: { bg: "#EBF5E9", color: "#2E7D32", border: "#A5D6A7", icon: <MdVerifiedUser /> },
  };
  return (
    map[role?.toLowerCase()] || {
      bg: "#F0F7F0",
      color: "#555",
      border: "#C8E6C9",
      icon: <MdPerson />,
    }
  );
};

// ─────────────────────────────────────────────────────────────
// SKELETON ROW
// ─────────────────────────────────────────────────────────────
const SkeletonRow = () => (
  <tr className="animate-pulse" style={{ borderTop: "1px solid #E8F5E9" }}>
    {[...Array(6)].map((_, i) => (
      <td key={i} className="px-4 py-4">
        <div
          className="h-4 rounded-lg"
          style={{ background: "#E8F5E9", width: i === 0 ? "70%" : i === 4 ? "40%" : "60%" }}
        />
      </td>
    ))}
  </tr>
);

// ─────────────────────────────────────────────────────────────
// STAT CARD
// ─────────────────────────────────────────────────────────────
const StatCard = ({ icon: Icon, label, value, bg, iconColor, valueColor }) => (
  <div
    className="flex items-center gap-4 rounded-2xl border p-4 transition-all duration-200 cursor-default"
    style={{
      background: "#FFFFFF",
      borderColor: "#C8E6C9",
      boxShadow: "0 1px 8px rgba(46,125,50,0.06)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = "0 6px 20px rgba(46,125,50,0.13)";
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
export default function AdminUsersPage() {
  const [users, setUsers]         = useState([]);
  const [loading, setLoading]     = useState(true);
  const [search, setSearch]       = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [deletingId, setDeletingId] = useState(null);

  // ── Fetch ──────────────────────────────────────────────────
  const fetchUsers = async () => {
    try {
      const res = await getAllUsersService();
      setUsers(res.users || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchUsers(); }, []);

  // ── Delete ─────────────────────────────────────────────────
  const handleDelete = async (id) => {
    if (!confirm("Delete this user? This action cannot be undone.")) return;
    setDeletingId(id);
    try {
      await deleteUserService(id);
      setUsers((prev) => prev.filter((u) => u._id !== id));
    } catch (err) {
      console.error(err);
      toast.error("Delete failed");
    } finally {
      setDeletingId(null);
    }
  };

  // ── Derived counts ─────────────────────────────────────────
  const adminCount    = users.filter((u) => u.role?.toLowerCase() === "admin").length;
  const vendorCount   = users.filter((u) => u.role?.toLowerCase() === "vendor").length;
  const customerCount = users.filter((u) => u.role?.toLowerCase() === "customer").length;

  // ── Roles for filter pills ─────────────────────────────────
  const roles = ["All", "admin", "vendor", "customer"];

  // ── Filter ─────────────────────────────────────────────────
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const kw = search.toLowerCase();
      const matchSearch =
        user.name?.toLowerCase().includes(kw) ||
        user.email?.toLowerCase().includes(kw) ||
        user.phone?.toLowerCase().includes(kw) ||
        user.role?.toLowerCase().includes(kw);
      const matchRole =
        roleFilter === "All" || user.role?.toLowerCase() === roleFilter.toLowerCase();
      return matchSearch && matchRole;
    });
  }, [users, search, roleFilter]);

  // ── Render ─────────────────────────────────────────────────
  return (
    <div className="space-y-6">

      {/* ── Page Header ────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#1B5E20" }}>
            Users Management
          </h1>
          <p className="text-sm mt-0.5" style={{ color: "#66BB6A" }}>
            Manage and monitor all registered platform users
          </p>
        </div>

        {/* Quick badge */}
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold self-start sm:self-auto"
          style={{ background: "#EBF5E9", borderColor: "#A5D6A7", color: "#2E7D32" }}
        >
          <FaUsers className="text-base" />
          {users.length} Total Users
        </div>
      </div>

      {/* ── Stat Cards ─────────────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={MdPeople}
          label="Total Users"
          value={users.length}
          bg="#EBF5E9"
          iconColor="#2E7D32"
        />
        <StatCard
          icon={MdAdminPanelSettings}
          label="Admins"
          value={adminCount}
          bg="#EDE7F6"
          iconColor="#4527A0"
          valueColor="#4527A0"
        />
       
        <StatCard
          icon={MdVerifiedUser}
          label="Customers"
          value={customerCount}
          bg="#E3F2FD"
          iconColor="#1565C0"
          valueColor="#1565C0"
        />
      </div>

      {/* ── Search + Role Filter Bar ────────────────────────── */}
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
            placeholder="Search by name, email, phone or role…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none w-full text-sm"
            style={{ color: "#333" }}
          />
        </div>

        {/* Role filter pills */}
        <div
          className="flex items-center gap-1 p-1 rounded-xl flex-wrap shrink-0"
          style={{ background: "#F0F7F0" }}
        >
          <MdFilterList className="text-lg ml-1 shrink-0" style={{ color: "#A5D6A7" }} />
          {roles.map((r) => (
            <button
              key={r}
              onClick={() => setRoleFilter(r)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all duration-200"
              style={
                roleFilter === r
                  ? { background: "#2E7D32", color: "#fff", boxShadow: "0 2px 8px rgba(46,125,50,0.25)" }
                  : { color: "#66BB6A" }
              }
            >
              {r}
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
          <table className="w-full min-w-175">

            {/* ── Head ── */}
            <thead>
              <tr style={{ background: "#F0F7F0", borderBottom: "2px solid #C8E6C9" }}>
                {["#", "User", "Phone", "Role", "Joined", "Action"].map((h) => (
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

            {/* ── Body ── */}
            <tbody>

              {/* Skeletons */}
              {loading &&
                Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} />)}

              {/* Empty state */}
              {!loading && filteredUsers.length === 0 && (
                <tr>
                  <td colSpan={6}>
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                        style={{ background: "#EBF5E9" }}
                      >
                        <MdPeople className="text-3xl" style={{ color: "#66BB6A" }} />
                      </div>
                      <h3 className="text-base font-bold mb-1" style={{ color: "#1B5E20" }}>
                        No Users Found
                      </h3>
                      <p className="text-sm" style={{ color: "#81C784" }}>
                        Try adjusting your search or role filter.
                      </p>
                    </div>
                  </td>
                </tr>
              )}

              {/* User rows */}
              {!loading &&
                filteredUsers.map((user, idx) => {
                  const [g1, g2] = grad(idx);
                  const rs = roleStyle(user.role);
                  const initials = user.name
                    ? user.name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()
                    : "?";

                  return (
                    <tr
                      key={user._id}
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

                      {/* User info */}
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          {/* Avatar */}
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 shadow-sm"
                            style={{
                              background: `linear-gradient(135deg, ${g1}, ${g2})`,
                              color: "#fff",
                            }}
                          >
                            {initials}
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-sm truncate" style={{ color: "#1B5E20" }}>
                              {user.name || "—"}
                            </p>
                            <p className="text-xs truncate" style={{ color: "#81C784" }}>
                              {user.email || "—"}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Phone */}
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-1.5">
                          <MdPhone className="text-sm shrink-0" style={{ color: "#A5D6A7" }} />
                          <span className="text-sm" style={{ color: "#555" }}>
                            {user.phone || "—"}
                          </span>
                        </div>
                      </td>

                      {/* Role badge */}
                      <td className="px-4 py-4">
                        <span
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border capitalize"
                          style={{
                            background: rs.bg,
                            color: rs.color,
                            borderColor: rs.border,
                          }}
                        >
                          <span className="text-sm">{rs.icon}</span>
                          {user.role || "user"}
                        </span>
                      </td>

                      {/* Joined date */}
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-1.5">
                          <MdCalendarToday className="text-sm shrink-0" style={{ color: "#A5D6A7" }} />
                          <div>
                            <p className="text-xs font-medium" style={{ color: "#555" }}>
                              {new Date(user.createdAt).toLocaleDateString("en-IN", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              })}
                            </p>
                            <p className="text-[10px] mt-0.5" style={{ color: "#A5D6A7" }}>
                              {new Date(user.createdAt).toLocaleTimeString("en-IN", {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Delete action */}
                      <td className="px-4 py-4">
                        <button
                          onClick={() => handleDelete(user._id)}
                          disabled={deletingId === user._id}
                          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border"
                          style={{
                            background:
                              deletingId === user._id
                                ? "#F0F7F0"
                                : "rgba(239,68,68,0.08)",
                            color:
                              deletingId === user._id ? "#A5D6A7" : "#EF4444",
                            borderColor:
                              deletingId === user._id
                                ? "#C8E6C9"
                                : "rgba(239,68,68,0.25)",
                          }}
                          onMouseEnter={(e) => {
                            if (deletingId !== user._id) {
                              e.currentTarget.style.background = "rgba(239,68,68,0.18)";
                              e.currentTarget.style.color = "#B91C1C";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (deletingId !== user._id) {
                              e.currentTarget.style.background = "rgba(239,68,68,0.08)";
                              e.currentTarget.style.color = "#EF4444";
                            }
                          }}
                        >
                          <MdDeleteOutline className="text-base" />
                          {deletingId === user._id ? "Deleting…" : "Delete"}
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        {/* ── Table Footer ── */}
        {!loading && filteredUsers.length > 0 && (
          <div
            className="px-5 py-3 flex items-center justify-between border-t text-xs"
            style={{ borderColor: "#E8F5E9", color: "#81C784" }}
          >
            <span>
              Showing{" "}
              <span className="font-bold" style={{ color: "#2E7D32" }}>
                {filteredUsers.length}
              </span>{" "}
              of{" "}
              <span className="font-bold" style={{ color: "#2E7D32" }}>
                {users.length}
              </span>{" "}
              users
            </span>
            <span className="flex items-center gap-3">
              <span
                className="flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-bold"
                style={{ background: "#EDE7F6", color: "#4527A0" }}
              >
                <MdAdminPanelSettings /> {adminCount} Admin{adminCount !== 1 ? "s" : ""}
              </span>
              <span
                className="flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-bold"
                style={{ background: "#FFF8E1", color: "#E65100" }}
              >
                <FaLeaf className="text-[9px]" /> {vendorCount} Vendor{vendorCount !== 1 ? "s" : ""}
              </span>
              <span
                className="flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-bold"
                style={{ background: "#EBF5E9", color: "#2E7D32" }}
              >
                <MdVerifiedUser /> {customerCount} Customer{customerCount !== 1 ? "s" : ""}
              </span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
