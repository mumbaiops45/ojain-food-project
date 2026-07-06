"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import {
  MdEdit,
  MdSave,
  MdCancel,
  MdPerson,
  MdEmail,
  MdPhone,
  MdLocationCity,
  MdAccountBalance,
  MdCreditCard,
  MdBadge,
  MdLock,
  MdVerified,
  MdClose,
  MdCameraAlt,
} from "react-icons/md";
import { FaLeaf, FaSpinner, FaShieldAlt, FaCheck, FaCamera } from "react-icons/fa";
import {
  getDealerProfileService,
  updateDealerProfileService,
} from "../../../../services/dealer.service";

// ─── Helpers ──────────────────────────────────────────
const getImageUrl = (path) => {
  if (!path) return null;
  if (path.startsWith("blob:") || path.startsWith("http")) return path;
  const base = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  return `${base}/${path.replace(/^\/+/, "")}`;
};

const getInitial = (name) => name?.charAt(0).toUpperCase() || "D";

// ─── Input Styles ─────────────────────────────────────
const inputBase = "w-full px-4 py-2.5 rounded-xl text-sm font-medium outline-none border transition-all";
const inputStyle = { background: "#F9FFF6", borderColor: "#C8E6C9", color: "#333" };
const inputFocus = {
  onFocus: (e) => {
    e.currentTarget.style.borderColor = "#2E7D32";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(46,125,50,0.12)";
  },
  onBlur: (e) => {
    e.currentTarget.style.borderColor = "#C8E6C9";
    e.currentTarget.style.boxShadow = "none";
  },
};

// ─── Field Wrapper ────────────────────────────────────
function Field({ label, icon, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-green-800">
        {icon && <span className="text-green-500 text-sm">{icon}</span>}
        {label}
        {required && <span className="text-orange-500">*</span>}
      </label>
      {children}
    </div>
  );
}

// ─── Info Row (read‑only) ────────────────────────────
function InfoRow({ icon, label, value, masked }) {
  const show = masked && value ? "••••" + String(value).slice(-4) : value || "—";
  return (
    <div className="flex items-start gap-3 py-3 border-b border-green-50">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-green-50 text-green-600">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-[10px] font-bold uppercase tracking-widest text-green-400">{label}</p>
        <p className="text-sm font-semibold text-gray-800">{show}</p>
      </div>
    </div>
  );
}

// ─── Section Card ─────────────────────────────────────
function Section({ icon, title, accent = "#2E7D32", children }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-green-100 shadow-sm">
      <div className="flex items-center gap-3 px-5 py-4 bg-green-50/50 border-b border-green-100">
        <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white shrink-0" style={{ background: accent }}>
          {icon}
        </div>
        <h3 className="font-black text-sm text-green-800">{title}</h3>
      </div>
      <div className="bg-white p-5">{children}</div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────
const FORM_ID = "dealer-profile-form";

export default function DealerProfilePage() {
  const [dealer, setDealer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");

  const avatarInputRef = useRef(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
  });

  // ── Fetch profile ────────────────────────────────────
  const fetchProfile = async () => {
    try {
      const res = await getDealerProfileService();
      setDealer(res.dealer);
      setForm({
        fullName: res.dealer.fullName || "",
        email: res.dealer.email || "",
        phone: res.dealer.phone || "",
        city: res.dealer.city || "",
        bankName: res.dealer.bankName || "",
        accountHolderName: res.dealer.accountHolderName || "",
        accountNumber: res.dealer.accountNumber || "",
        ifscCode: res.dealer.ifscCode || "",
      });
    } catch (err) {
      toast.error("Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // ── Form handlers ────────────────────────────────────
  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be under 5MB");
      return;
    }
    setAvatarFile(file);
    setAvatarPreview(URL.createObjectURL(file));
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setAvatarFile(null);
    setAvatarPreview(null);
    if (dealer) {
      setForm({
        fullName: dealer.fullName || "",
        email: dealer.email || "",
        phone: dealer.phone || "",
        city: dealer.city || "",
        bankName: dealer.bankName || "",
        accountHolderName: dealer.accountHolderName || "",
        accountNumber: dealer.accountNumber || "",
        ifscCode: dealer.ifscCode || "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.fullName.trim()) {
      toast.error("Full name is required");
      return;
    }

    setSubmitting(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      if (avatarFile) fd.append("profileImage", avatarFile);

      await updateDealerProfileService(fd);
      toast.success("Profile updated successfully ✅");
      setIsEditing(false);
      setAvatarFile(null);
      setAvatarPreview(null);
      await fetchProfile();
    } catch (err) {
      toast.error(err?.response?.data?.message || "Update failed");
    } finally {
      setSubmitting(false);
    }
  };

  // ── Loading / Error ──────────────────────────────────
  if (loading && !dealer) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-3">
          <FaLeaf className="text-4xl text-green-500 animate-pulse" />
          <p className="text-green-600 font-semibold">Loading profile…</p>
        </div>
      </div>
    );
  }

  if (!dealer && !loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <p className="text-red-500">Could not load profile</p>
        <button
          onClick={fetchProfile}
          className="px-6 py-2 bg-green-600 text-white rounded-xl font-bold"
        >
          Retry
        </button>
      </div>
    );
  }

  const displayedAvatar = avatarPreview || (dealer?.profileImage ? getImageUrl(dealer.profileImage) : null);

  const tabs = [
    { key: "personal", label: "Personal", icon: <MdPerson /> },
    { key: "bank", label: "Bank Details", icon: <MdAccountBalance /> },
  ];

  return (
    <div className="min-h-screen bg-green-50/50 pb-16">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">

        {/* ── Hero Banner ── */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 60%, #388E3C 100%)",
            boxShadow: "0 8px 32px rgba(27,94,32,0.3)",
          }}
        >
          {/* decorative blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none opacity-20"
            style={{ background: "radial-gradient(circle, rgba(255,143,0,0.3) 0%, transparent 70%)", transform: "translate(30%,-30%)" }} />

          <div className="relative z-10 p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">

            {/* Avatar */}
            <div className="relative shrink-0">
              <input
                ref={avatarInputRef}
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
              <div
                className="w-24 h-24 rounded-2xl overflow-hidden flex items-center justify-center text-white text-4xl font-black shadow-xl relative"
                style={{ border: "3px solid rgba(255,255,255,0.25)" }}
              >
                {displayedAvatar ? (
                  <Image src={displayedAvatar} alt="Profile" fill className="object-cover" unoptimized />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-orange-500">
                    {getInitial(dealer.fullName)}
                  </div>
                )}
              </div>
              {isEditing && (
                <button
                  type="button"
                  onClick={() => avatarInputRef.current?.click()}
                  className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-1 bg-black/50 hover:bg-black/60 transition"
                >
                  <FaCamera className="text-white text-xl" />
                  <span className="text-white text-[10px] font-bold">Change</span>
                </button>
              )}
              {dealer?.isApproved && (
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-green-600 border-2 border-white flex items-center justify-center">
                  <FaCheck size={10} className="text-white" />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-black text-white">
                {dealer.fullName || "Dealer"}
              </h1>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-1">
                <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white border border-white/10">
                  <MdVerified /> Dealer
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-orange-500/30 text-white border border-orange-500/20">
                  Code: {dealer.dealerCode || "—"}
                </span>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-3 text-sm text-green-200">
                {dealer.email && <span className="flex items-center gap-1"><MdEmail /> {dealer.email}</span>}
                {dealer.phone && <span className="flex items-center gap-1"><MdPhone /> {dealer.phone}</span>}
                {dealer.city && <span className="flex items-center gap-1"><MdLocationCity /> {dealer.city}</span>}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0">
              {isEditing ? (
                <>
                  <button
                    type="submit"
                    form={FORM_ID}
                    disabled={submitting}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition hover:scale-105 disabled:opacity-60"
                    style={{ background: "linear-gradient(135deg,#FF8F00,#FFB300)", boxShadow: "0 3px 12px rgba(255,143,0,0.4)" }}
                  >
                    {submitting ? <FaSpinner className="animate-spin" /> : <MdSave />}
                    {submitting ? "Saving…" : "Save"}
                  </button>
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/20 hover:bg-white/30 transition text-white"
                  >
                    <MdClose size={18} />
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  // className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white border border-white/30 hover:bg-white/20 transition"
                >
                  {/* <MdEdit /> Edit Profile */}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ── Tab Bar ── */}
        <div className="flex items-center gap-1 p-1 bg-white rounded-2xl border border-green-100 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === tab.key
                  ? "bg-green-700 text-white shadow-md"
                  : "text-green-600 hover:bg-green-50"
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* ── Form ── */}
        <form id={FORM_ID} onSubmit={handleSubmit}>

          {activeTab === "personal" && (
            <Section icon={<MdPerson />} title="Personal Information">
              {isEditing ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Full Name" icon={<MdPerson />} required>
                    <input
                      name="fullName"
                      type="text"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className={inputBase}
                      style={inputStyle}
                      {...inputFocus}
                    />
                  </Field>
                  <Field label="Email" icon={<MdEmail />} required>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className={inputBase}
                      style={inputStyle}
                      {...inputFocus}
                      disabled
                      // className={`${inputBase} bg-gray-50 cursor-not-allowed`}
                    />
                  </Field>
                  <Field label="Phone" icon={<MdPhone />} required>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className={inputBase}
                      style={inputStyle}
                      {...inputFocus}
                    />
                  </Field>
                  <Field label="City" icon={<MdLocationCity />} required>
                    <input
                      name="city"
                      type="text"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="City"
                      className={inputBase}
                      style={inputStyle}
                      {...inputFocus}
                    />
                  </Field>
                </div>
              ) : (
                <>
                  <InfoRow icon={<MdPerson />} label="Full Name" value={form.fullName} />
                  <InfoRow icon={<MdEmail />} label="Email" value={form.email} />
                  <InfoRow icon={<MdPhone />} label="Phone" value={form.phone} />
                  <InfoRow icon={<MdLocationCity />} label="City" value={form.city} />
                  <div className="mt-4 p-4 rounded-xl bg-green-50 border border-green-100 flex items-center gap-3">
                    <MdVerified className="text-green-600 text-xl" />
                    <div>
                      <p className="text-xs text-green-600 font-bold">Your Dealer Code</p>
                      <p className="text-xl font-black text-green-800 tracking-wider">
                        {dealer.dealerCode || "—"}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </Section>
          )}

          {activeTab === "bank" && (
            <Section icon={<MdAccountBalance />} title="Bank Details" accent="#1565C0">
              {/* <div className="flex items-start gap-3 p-4 rounded-xl mb-5 bg-blue-50 border border-blue-200">
                <FaShieldAlt className="text-blue-600 text-lg shrink-0 mt-0.5" />
                <p className="text-xs text-blue-700">
                  Your bank details are encrypted and used only for commission payouts.
                </p>
              </div> */}

              {isEditing ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Bank Name" icon={<MdAccountBalance />}>
                    <input
                      name="bankName"
                      type="text"
                      value={form.bankName}
                      onChange={handleChange}
                      placeholder="Bank Name"
                      className={inputBase}
                      style={inputStyle}
                      {...inputFocus}
                    />
                  </Field>
                  <Field label="Account Holder Name" icon={<MdBadge />}>
                    <input
                      name="accountHolderName"
                      type="text"
                      value={form.accountHolderName}
                      onChange={handleChange}
                      placeholder="Account Holder Name"
                      className={inputBase}
                      style={inputStyle}
                      {...inputFocus}
                    />
                  </Field>
                  <Field label="Account Number" icon={<MdCreditCard />}>
                    <input
                      name="accountNumber"
                      type="text"
                      value={form.accountNumber}
                      onChange={handleChange}
                      placeholder="Account Number"
                      className={inputBase}
                      style={inputStyle}
                      {...inputFocus}
                    />
                  </Field>
                  <Field label="IFSC Code" icon={<MdLock />}>
                    <input
                      name="ifscCode"
                      type="text"
                      value={form.ifscCode}
                      onChange={handleChange}
                      placeholder="IFSC Code"
                      className={`${inputBase} uppercase`}
                      style={inputStyle}
                      {...inputFocus}
                    />
                  </Field>
                </div>
              ) : (
                <>
                  <InfoRow icon={<MdAccountBalance />} label="Bank Name" value={form.bankName} />
                  <InfoRow icon={<MdBadge />} label="Account Holder" value={form.accountHolderName} />
                  <InfoRow icon={<MdCreditCard />} label="Account Number" value={form.accountNumber} masked />
                  <InfoRow icon={<MdLock />} label="IFSC Code" value={form.ifscCode} />
                </>
              )}
            </Section>
          )}

        </form>

        {/* ── Sticky Save Bar (edit mode) ── */}
        {isEditing && (
          <div
            className="sticky bottom-4 z-20 flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-4 rounded-2xl bg-white/95 backdrop-blur-md border border-green-100 shadow-lg"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full animate-pulse bg-orange-500" />
              <p className="text-sm font-black text-green-800">Unsaved changes</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={cancelEdit}
                className="px-4 py-2 rounded-xl font-bold text-sm border border-green-200 hover:bg-green-50 transition"
              >
                <MdCancel className="inline mr-1" /> Discard
              </button>
              <button
                type="submit"
                form={FORM_ID}
                disabled={submitting}
                className="px-6 py-2 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-green-700 to-green-600 hover:scale-105 transition disabled:opacity-60"
              >
                {submitting ? <FaSpinner className="animate-spin inline mr-1" /> : <MdSave className="inline mr-1" />}
                {submitting ? "Saving…" : "Save Changes"}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}