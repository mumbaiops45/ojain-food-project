"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  MdCheckCircle,
  MdEdit,
  MdClose,
  MdUndo,
  MdDelete,
  MdSearch,
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdStorefront,
  MdPeople,
} from "react-icons/md";
import { FaLeaf, FaStore } from "react-icons/fa";
import { useAdmin } from "../../../../hooks/useAdmin";

/* ── Avatar gradient colours by index ── */
const AVATAR_GRADIENTS = [
  ["#2E7D32", "#66BB6A"],
  ["#FF8F00", "#FFB300"],
  ["#1565C0", "#42A5F5"],
  ["#6A1B9A", "#AB47BC"],
  ["#C62828", "#EF5350"],
  ["#00695C", "#26A69A"],
];
const avatarGrad = (i) => AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length];

/* ── Skeleton card ── */
const SkeletonCard = () => (
  <div className="bg-white rounded-2xl border border-gray-100 p-5 animate-pulse space-y-4">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-2xl bg-gray-200 shrink-0" />
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-100 rounded w-1/2" />
      </div>
      <div className="w-16 h-6 bg-gray-100 rounded-full" />
    </div>
    <div className="space-y-2 pt-1">
      <div className="h-3 bg-gray-100 rounded w-full" />
      <div className="h-3 bg-gray-100 rounded w-5/6" />
      <div className="h-3 bg-gray-100 rounded w-4/6" />
    </div>
    <div className="flex gap-2 pt-1">
      <div className="h-9 flex-1 bg-gray-200 rounded-xl" />
      <div className="h-9 w-9 bg-gray-100 rounded-xl" />
      <div className="h-9 w-9 bg-gray-100 rounded-xl" />
    </div>
  </div>
);

/* ── Empty state ── */
const EmptyState = ({ tab }) => (
  <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
    <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5"
      style={{ background: "#EBF5E9" }}>
      <FaStore className="text-4xl" style={{ color: "#66BB6A" }} />
    </div>
    <h3 className="text-lg font-bold mb-1" style={{ color: "#1B5E20" }}>
      No {tab === "pending" ? "Pending" : "Approved"} Vendors
    </h3>
    <p className="text-sm" style={{ color: "#81C784" }}>
      {tab === "pending" ? "All vendors have been reviewed." : "No vendors approved yet."}
    </p>
  </div>
);

/* ══════════════════════════════════════════ */
export default function VendorManagementPage() {
  const {
    vendors,
    loading,
    fetchAllVendors,
    approveVendor,
    unapproveVendor,
    rejectVendor,
    updateVendor,
  } = useAdmin();

  const [activeTab,    setActiveTab]    = useState("pending");
  const [searchQuery,  setSearchQuery]  = useState("");
  const [isModalOpen,  setIsModalOpen]  = useState(false);
  const [editingVendor, setEditingVendor] = useState(null);
  const [editFormData,  setEditFormData]  = useState({
    fullName: "", email: "", phone: "", shopName: "", city: "",
  });

  useEffect(() => { fetchAllVendors(); }, []);

  /* ── Derived lists ── */
  const pending  = vendors?.filter((v) => !v.isApproved) || [];
  const approved = vendors?.filter((v) =>  v.isApproved) || [];

  const filterList = (list) =>
    list.filter(
      (v) =>
        v.fullName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.shopName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.city?.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const visibleVendors =
    activeTab === "pending" ? filterList(pending) : filterList(approved);

  /* ── Handlers ── */
  const handleApprove = async (id) => {
    try {
      await approveVendor(id);
      toast.success("Vendor approved!");
      fetchAllVendors();
    } catch { toast.error("Approval failed"); }
  };

  const handleUnapprove = async (id) => {
    try {
      await unapproveVendor(id);
      toast.success("Vendor unapproved");
      fetchAllVendors();
    } catch { toast.error("Unapprove failed"); }
  };

  const handleDelete = async (id) => {
    if (!confirm("Permanently delete this vendor?")) return;
    try {
      await rejectVendor(id);
      toast.success("Vendor deleted");
      fetchAllVendors();
    } catch { toast.error("Delete failed"); }
  };

  const openEditModal = (vendor) => {
    setEditingVendor(vendor);
    setEditFormData({
      fullName: vendor.fullName || "",
      email:    vendor.email    || "",
      phone:    vendor.phone    || "",
      shopName: vendor.shopName || "",
      city:     vendor.city     || "",
    });
    setIsModalOpen(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateVendor(editingVendor._id, editFormData);
      toast.success("Vendor updated");
      setIsModalOpen(false);
      fetchAllVendors();
    } catch { toast.error("Update failed"); }
  };

  const tabs = [
    { key: "pending",  label: "Pending",  count: pending.length  },
    { key: "approved", label: "Approved", count: approved.length },
  ];

  return (
    <div className="space-y-6">

      {/* ── Page Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#1B5E20" }}>
            Vendor Management
          </h1>
          <p className="text-sm mt-0.5" style={{ color: "#66BB6A" }}>
            Manage vendor approvals and details
          </p>
        </div>

        {/* Stats pills */}
        <div className="flex items-center gap-3 flex-wrap">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold"
            style={{ background: "#FFF8E1", borderColor: "#FFD54F", color: "#E65100" }}
          >
            <MdPeople className="text-base" />
            {pending.length} Pending
          </div>
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold"
            style={{ background: "#EBF5E9", borderColor: "#A5D6A7", color: "#2E7D32" }}
          >
            <MdCheckCircle className="text-base" />
            {approved.length} Approved
          </div>
        </div>
      </div>

      {/* ── Search + Tabs bar ── */}
      <div
        className="rounded-2xl border p-4 flex flex-col sm:flex-row sm:items-center gap-4"
        style={{ background: "#FFFFFF", borderColor: "#C8E6C9" }}
      >
        {/* Tabs */}
        <div
          className="flex items-center gap-1 p-1 rounded-xl shrink-0"
          style={{ background: "#F0F7F0" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
              style={
                activeTab === tab.key
                  ? { background: "#2E7D32", color: "#fff", boxShadow: "0 2px 8px rgba(46,125,50,0.25)" }
                  : { color: "#66BB6A" }
              }
            >
              {tab.label}
              <span
                className="text-xs px-1.5 py-0.5 rounded-md font-bold"
                style={
                  activeTab === tab.key
                    ? { background: "rgba(255,255,255,0.25)", color: "#fff" }
                    : { background: "#C8E6C9", color: "#2E7D32" }
                }
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search */}
        <div
          className="flex items-center gap-2 flex-1 rounded-xl px-4 py-2.5 border"
          style={{ background: "#F9FFF6", borderColor: "#C8E6C9" }}
        >
          <MdSearch className="text-xl shrink-0" style={{ color: "#66BB6A" }} />
          <input
            type="text"
            placeholder="Search by name, shop, city…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent outline-none w-full text-sm"
            style={{ color: "#333" }}
          />
        </div>
      </div>

      {/* ── Vendor Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {/* Skeletons */}
        {loading && Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}

        {/* Empty state */}
        {!loading && visibleVendors.length === 0 && <EmptyState tab={activeTab} />}

        {/* Vendor cards */}
        {!loading &&
          visibleVendors.map((vendor, idx) => (
            <VendorCard
              key={vendor._id}
              vendor={vendor}
              idx={idx}
              showApprove={activeTab === "pending"}
              showUnapprove={activeTab === "approved"}
              onApprove={handleApprove}
              onUnapprove={handleUnapprove}
              onEdit={openEditModal}
              onDelete={handleDelete}
            />
          ))}
      </div>

      {/* ── Edit Modal ── */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div
            className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden"
            style={{ border: "1px solid #C8E6C9" }}
          >
            {/* Modal header */}
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{ background: "linear-gradient(135deg,#1B5E20,#2E7D32)", borderBottom: "1px solid #A5D6A7" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.15)" }}>
                  <MdEdit className="text-xl text-white" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">Edit Vendor</h2>
                  <p className="text-xs" style={{ color: "#A5D6A7" }}>
                    {editingVendor?.fullName}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition"
                style={{ background: "rgba(255,255,255,0.12)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
              >
                <MdClose className="text-white text-lg" />
              </button>
            </div>

            {/* Modal form */}
            <form onSubmit={handleUpdate} className="p-6 space-y-4">
              {[
                { name: "fullName", label: "Full Name",  icon: <MdPeople />,     type: "text"  },
                { name: "email",    label: "Email",       icon: <MdEmail />,      type: "email" },
                { name: "phone",    label: "Phone",       icon: <MdPhone />,      type: "tel"   },
                { name: "shopName", label: "Shop Name",   icon: <MdStorefront />, type: "text"  },
                { name: "city",     label: "City",        icon: <MdLocationOn />, type: "text"  },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#2E7D32" }}>
                    {field.label}
                  </label>
                  <div
                    className="flex items-center gap-2 rounded-xl px-3 py-2.5 border"
                    style={{ borderColor: "#C8E6C9", background: "#F9FFF6" }}
                  >
                    <span className="text-base shrink-0" style={{ color: "#66BB6A" }}>
                      {field.icon}
                    </span>
                    <input
                      type={field.type}
                      name={field.name}
                      value={editFormData[field.name]}
                      onChange={(e) =>
                        setEditFormData({ ...editFormData, [e.target.name]: e.target.value })
                      }
                      placeholder={field.label}
                      className="bg-transparent outline-none w-full text-sm"
                      style={{ color: "#333" }}
                      required
                    />
                  </div>
                </div>
              ))}

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                  style={{ background: "#2E7D32" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#1B5E20";
                    e.currentTarget.style.boxShadow = "0 4px 14px rgba(46,125,50,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#2E7D32";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={{ background: "#F0F7F0", color: "#2E7D32" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#C8E6C9")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#F0F7F0")}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════ */
/* Vendor Card Component                     */
/* ══════════════════════════════════════════ */
function VendorCard({ vendor, idx, showApprove, showUnapprove, onApprove, onUnapprove, onEdit, onDelete }) {
  const [g1, g2] = avatarGrad(idx);

  return (
    <div
      className="bg-white rounded-2xl border flex flex-col transition-all duration-200"
      style={{
        borderColor: "#E8F5E9",
        boxShadow: "0 1px 8px rgba(46,125,50,0.06)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 28px rgba(46,125,50,0.12)";
        e.currentTarget.style.borderColor = "#A5D6A7";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 1px 8px rgba(46,125,50,0.06)";
        e.currentTarget.style.borderColor = "#E8F5E9";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* ── Card top accent bar ── */}
      <div
        className="h-1.5 w-full rounded-t-2xl"
        style={{ background: `linear-gradient(90deg,${g1},${g2})` }}
      />

      <div className="p-5 flex flex-col gap-4">
        {/* ── Header row ── */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            {/* Avatar */}
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-lg font-extrabold shrink-0 shadow-sm"
              style={{ background: `linear-gradient(135deg,${g1},${g2})` }}
            >
              {vendor.fullName?.charAt(0)?.toUpperCase() || "V"}
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-[15px] truncate" style={{ color: "#1B5E20" }}>
                {vendor.fullName || "—"}
              </h3>
              <p className="text-xs flex items-center gap-1 truncate" style={{ color: "#888" }}>
                <FaLeaf className="text-[10px]" style={{ color: "#66BB6A" }} />
                {vendor.shopName || "No shop name"}
              </p>
            </div>
          </div>

          {/* Status badge */}
          <span
            className="shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-full"
            style={
              vendor.isApproved
                ? { background: "#EBF5E9", color: "#2E7D32", border: "1px solid #A5D6A7" }
                : { background: "#FFF8E1", color: "#E65100", border: "1px solid #FFD54F" }
            }
          >
            {vendor.isApproved ? "✓ Approved" : "⏳ Pending"}
          </span>
        </div>

        {/* ── Info rows ── */}
        <div
          className="rounded-xl p-3 space-y-2"
          style={{ background: "#F9FFF6", border: "1px solid #E8F5E9" }}
        >
          <InfoRow icon={<MdEmail />}     text={vendor.email || "—"} />
          <InfoRow icon={<MdPhone />}     text={vendor.phone || "—"} />
          <InfoRow icon={<MdLocationOn />} text={vendor.city  || "—"} />
        </div>

        {/* ── Divider ── */}
        <div style={{ height: 1, background: "#F0F7F0" }} />

        {/* ── Action buttons ── */}
        <div className="flex gap-2">
          {/* Approve */}
          {showApprove && (
            <ActionBtn
              flex
              color="#2E7D32"
              hoverColor="#1B5E20"
              onClick={() => onApprove(vendor._id)}
            >
              <MdCheckCircle className="text-base" />
              Approve
            </ActionBtn>
          )}

          {/* Unapprove */}
          {showUnapprove && (
            <ActionBtn
              flex
              color="#FF8F00"
              hoverColor="#E65100"
              onClick={() => onUnapprove(vendor._id)}
            >
              <MdUndo className="text-base" />
              Unapprove
            </ActionBtn>
          )}

          {/* Edit */}
          <ActionBtn
            icon
            color="#1565C0"
            hoverColor="#0D47A1"
            onClick={() => onEdit(vendor)}
          >
            <MdEdit className="text-base" />
          </ActionBtn>

          {/* Delete */}
          <ActionBtn
            icon
            color="#C62828"
            hoverColor="#B71C1C"
            onClick={() => onDelete(vendor._id)}
          >
            <MdDelete className="text-base" />
          </ActionBtn>
        </div>
      </div>
    </div>
  );
}

/* ── Small helpers ── */
function InfoRow({ icon, text }) {
  return (
    <div className="flex items-center gap-2 text-xs" style={{ color: "#555" }}>
      <span className="text-sm shrink-0" style={{ color: "#66BB6A" }}>{icon}</span>
      <span className="truncate">{text}</span>
    </div>
  );
}

function ActionBtn({ children, flex, color, hoverColor, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold
        text-white transition-all duration-200
        ${flex ? "flex-1" : "w-10 shrink-0"}
      `}
      style={{ background: color }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = hoverColor;
        e.currentTarget.style.boxShadow = `0 4px 12px ${color}55`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = color;
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {children}
    </button>
  );
}
