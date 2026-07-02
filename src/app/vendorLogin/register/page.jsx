"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import {
  FaStore,
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaCity,
  FaUniversity,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import { useDealer } from "../../../../hooks/useDealer";          // ← dealer hook

import {
  validateName,
  validateEmail,
  validateMobile,
  validatePassword,
  validateBankAccount,
  validateIfsc,
} from "../../../../shared/validation";

const DealerRegister = () => {
  const router = useRouter();
  const { register, isLoading } = useDealer();                   // ← register action

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    bankName: "",                // new field (optional)
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
  });

  // ================= VALIDATION =================

  const validateField = (name, value) => {
    switch (name) {
      case "fullName":
      case "city":
      case "accountHolderName":
      case "bankName":
        return validateName(value);

      case "email":
        return validateEmail(value);

      case "password":
        return validatePassword(value);

      case "phone":
        return validateMobile(value);

      case "accountNumber":
        return validateBankAccount(value);

      case "ifscCode":
        return validateIfsc(value);

      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ================= HANDLE CHANGE =================

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
  };

  // ================= SUBMIT =================

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix all form errors");
      return;
    }

    try {
      const result = await register(formData);
      if (result.success) {
        toast.success("Dealer account registered successfully. Waiting for admin approval.");
        setTimeout(() => router.push("/dealerLogin/login"), 1200);
      } else {
        toast.error(result.error || "Registration failed");
      }
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message || err?.message || "Registration failed");
    }
  };

  // ================= INPUT COMPONENT =================

  const InputField = ({ icon, type, name, placeholder, value, error, rightSlot }) => (
    <div>
      <div className={`flex items-center h-14 rounded-2xl border px-4 bg-white transition-all duration-300
        ${error ? "border-red-400" : "border-gray-300 focus-within:border-brand-green focus-within:ring-4 focus-within:ring-brand-green-pale"}`}>
        <div className="text-brand-green text-lg">{icon}</div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className="w-full h-full bg-transparent outline-none px-3 text-gray-800 placeholder:text-gray-400"
        />
        {rightSlot && <div className="ml-2">{rightSlot}</div>}
      </div>
      {error && <p className="text-red-500 text-sm mt-1 ml-1">{error}</p>}
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 w-full max-w-5xl">
        <div className="bg-white/95 backdrop-blur-xl rounded-[35px] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT PANEL */}
          <div className="hidden lg:flex flex-col justify-center bg-linear-to-br from-[#1B5E20] via-brand-green to-[#43A047] text-white p-12 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10"></div>
            <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-white/10"></div>
            <div className="relative z-10">
              <div className="h-24 w-24 rounded-3xl bg-white/20 flex items-center justify-center mb-8 shadow-lg">
                <FaStore size={42} />
              </div>
              <h1 className="text-5xl font-black leading-tight">
                Create
                <br />
                Dealer Account
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Join our partner program and start earning commissions
                by promoting OJAIN products. Manage your wallet, orders
                and referrals.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-white"></div>
                <div className="h-3 w-3 rounded-full bg-white/60"></div>
                <div className="h-3 w-3 rounded-full bg-white/30"></div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="p-8 md:p-10">
            <div className="lg:hidden flex justify-center mb-6">
              <div className="h-20 w-20 rounded-3xl bg-brand-green-pale flex items-center justify-center shadow-lg">
                <FaStore size={38} className="text-brand-green" />
              </div>
            </div>

            <div className="mb-8 text-center lg:text-left">
              <h2 className="text-4xl font-black text-gray-900">
                Register
              </h2>
              <p className="text-gray-500 mt-3">
                Fill all details to create dealer account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField
                icon={<FaUser />}
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                error={errors.fullName}
              />

              <InputField
                icon={<FaEnvelope />}
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                error={errors.email}
              />

              <InputField
                icon={<FaLock />}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                error={errors.password}
                rightSlot={
                  <button type="button" onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-brand-green transition">
                    {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                  </button>
                }
              />

              <InputField
                icon={<FaPhone />}
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                error={errors.phone}
              />

              <InputField
                icon={<FaCity />}
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                error={errors.city}
              />

              <InputField
                icon={<FaUniversity />}
                type="text"
                name="bankName"
                placeholder="Bank Name (optional)"
                value={formData.bankName}
                error={errors.bankName}
              />

              <InputField
                icon={<FaUser />}
                type="text"
                name="accountHolderName"
                placeholder="Account Holder Name"
                value={formData.accountHolderName}
                error={errors.accountHolderName}
              />

              <InputField
                icon={<FaUniversity />}
                type="text"
                name="accountNumber"
                placeholder="Bank Account Number"
                value={formData.accountNumber}
                error={errors.accountNumber}
              />

              <InputField
                icon={<FaUniversity />}
                type="text"
                name="ifscCode"
                placeholder="IFSC Code"
                value={formData.ifscCode}
                error={errors.ifscCode}
              />

              {/* Submit button */}
              <div className="md:col-span-2 mt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-14 rounded-2xl bg-brand-green hover:bg-[#1B5E20] text-white text-lg font-bold shadow-lg transition-all duration-300 disabled:opacity-70"
                >
                  {isLoading ? "Creating Account..." : "Create Dealer Account"}
                </button>
              </div>
            </form>

            <p className="text-center text-gray-500 text-sm mt-8">
              Already have an account?{" "}
              <Link href="/dealerLogin/login" className="text-brand-green font-bold hover:underline">
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealerRegister;