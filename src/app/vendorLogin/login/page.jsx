"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaStore, FaEnvelope, FaLock, FaLeaf } from "react-icons/fa";
import { useVendor } from "../../../../hooks/useVendor";
import { validateEmail, validatePassword } from "../../../../shared/validation";

const VendorLogin = () => {
  const router = useRouter();
  const { loginVendor, loading } = useVendor();
  const [errors, setErrors]     = useState({});
  const [formData, setFormData] = useState({ email: "", password: "" });

  const validateField = (name, value) => {
    if (name === "email")    return validateEmail(value);
    if (name === "password") return validatePassword(value);
    return "";
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) { toast.error("Please fix form errors"); return; }
    try {
      await loginVendor(formData);
      toast.success("Login successful");
      setTimeout(() => router.push("/vendor/dashboard"), 1000);
    } catch (err) {
      const msg = err?.response?.data?.message || err?.message || "Login failed";
      toast.error(msg);
    }
  };

  const InputField = ({ icon, type, name, placeholder, value, error }) => (
    <div>
      <div className={`flex items-center h-14 rounded-2xl border px-4 bg-white transition-all duration-300
        ${error ? "border-red-400" : "border-gray-300 focus-within:border-brand-green focus-within:ring-4 focus-within:ring-brand-green-pale"}`}>
        <div className="text-brand-green text-lg">{icon}</div>
        <input type={type} name={name} placeholder={placeholder} value={value} onChange={handleChange}
          className="w-full h-full bg-transparent outline-none px-3 text-gray-800 placeholder:text-gray-400" />
      </div>
      {error && <p className="text-red-500 text-sm mt-1 ml-1">{error}</p>}
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=2070&auto=format&fit=crop')" }}>

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 w-full max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white/95 backdrop-blur-xl rounded-[35px] overflow-hidden shadow-2xl">

          {/* ── LEFT PANEL ── */}
          <div className="hidden lg:flex flex-col justify-center bg-linear-to-br from-[#1B5E20] via-brand-green to-[#43A047] text-white p-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-white/10" />

            <div className="relative z-10">
              <div className="h-24 w-24 rounded-3xl bg-white/20 flex items-center justify-center shadow-xl mb-8">
                <FaStore size={42} />
              </div>
              <h1 className="text-5xl font-black leading-tight">
                Welcome <br /> Back Vendor
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Login to manage products, orders, payments and vendor dashboard with secure authentication.
              </p>
              <div className="mt-10 flex gap-4">
                <div className="h-3 w-3 rounded-full bg-white" />
                <div className="h-3 w-3 rounded-full bg-white/60" />
                <div className="h-3 w-3 rounded-full bg-white/30" />
              </div>
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="p-8 md:p-12 flex flex-col justify-center">

            {/* Mobile logo */}
            <div className="lg:hidden flex justify-center mb-6">
              <div className="h-20 w-20 rounded-3xl bg-brand-green-pale flex items-center justify-center shadow-lg">
                <FaStore size={36} className="text-brand-green" />
              </div>
            </div>

            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-brand-green-pale text-brand-green px-5 py-2 rounded-full text-sm font-bold mb-5">
                <FaLeaf size={11} /> Vendor Access
              </div>
              <h2 className="text-4xl font-black text-gray-900">
                <span className="text-brand-green">Vendor</span> Login
              </h2>
              <p className="text-gray-500 mt-3">Enter your details to continue</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField icon={<FaEnvelope />} type="email"    name="email"    placeholder="Enter Email Address" value={formData.email}    error={errors.email} />
              <InputField icon={<FaLock />}     type="password" name="password" placeholder="Enter Password"       value={formData.password} error={errors.password} />

              <button type="submit" disabled={loading}
                className="w-full h-14 rounded-2xl bg-brand-green hover:bg-[#1B5E20] text-white text-lg font-bold shadow-lg transition-all duration-300 disabled:opacity-70">
                {loading ? "Logging In..." : "Login Now"}
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-8">
              Don&apos;t have an account?{" "}
              <Link href="/vendorLogin/register" className="text-brand-green font-bold hover:underline">Create Account</Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VendorLogin;
