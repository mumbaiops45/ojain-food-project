"use client";

import React, {
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

import toast from "react-hot-toast";

import {
  useAdmin,
} from "../../../hooks/useAdmin";

import {
  MdEmail,
  MdLock,
} from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function AdminLoginPage() {

  const router = useRouter();

  const {
    loginAdmin,
    loading,
    error,
  } = useAdmin();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });
  const [showPassword, setShowPassword] = useState(false);

  // HANDLE CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  // HANDLE LOGIN
  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    try {

      await loginAdmin(
        formData
      );

      toast.success(
        "Admin Login Successful"
      );

      router.push(
        "/admin/dashboard"
      );

    } catch (err) {

      toast.error(
        err?.response?.data
          ?.message ||
          "Login Failed"
      );
    }
  };

  return (

   <div
  className="min-h-screen flex items-center justify-center py-16 px-4 relative overflow-hidden bg-cover bg-center"
 style={{
  backgroundImage:
    "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=2070&auto=format&fit=crop')",
}}
>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* LOGIN CARD */}
      <div className="relative z-10 w-full max-w-md">

        <div className="bg-white rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.35)] p-8">

          {/* HEADER */}
          <div className="text-center mb-8">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
              Admin Login
            </h1>

            <p className="text-gray-500 text-base mt-4 leading-7">
              Login to manage vendors,
              products and orders.
            </p>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* EMAIL */}
            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Email Address
              </label>

              <div className="flex items-center h-14 rounded-2xl border border-gray-300 bg-white px-4 focus-within:border-brand-green focus-within:bg-gray-100 transition-all duration-300">

                <MdEmail className="text-xl text-brand-green" />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter admin email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-full bg-transparent outline-none px-3 text-base text-gray-800"
                  required
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Password
              </label>

              <div className="flex items-center h-14 rounded-2xl border border-gray-300 bg-white px-4 focus-within:border-brand-green focus-within:bg-gray-100 transition-all duration-300">

                <MdLock className="text-xl text-brand-green" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full h-full bg-transparent outline-none px-3 text-base text-gray-800"
                  required
                />

                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="ml-2 text-gray-400 hover:text-brand-green transition">
                  {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                </button>

              </div>

            </div>

            {/* ERROR */}
            {error && (

              <div className="bg-red-100 border border-red-300 text-red-600 px-4 py-3 rounded-2xl text-sm">

                {error}

              </div>

            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 rounded-2xl bg-brand-green hover:bg-[#1B5E20] text-white text-lg font-bold transition-all duration-300"
            >

              {loading
                ? "Logging in..."
                : "Login Now"}

            </button>

          </form>        
        </div>

      </div>

    </div>
  );
}