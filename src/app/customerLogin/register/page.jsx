// src/app/customerLogin/register/page.jsx

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { useCustomer } from "../../../../hooks/useCustomer";

import {
  validateName,
  validateEmail,
  validateMobile,
  validatePassword,
} from "../../../../shared/validation";

export default function CustomerRegisterPage() {
  const router = useRouter();

  const {
    registerCustomer,
    loading,
    error,
  } = useCustomer();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear validation error while typing
    setValidationErrors({
      ...validationErrors,
      [e.target.name]: "",
    });
  };

  // Handle Register
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
      phone: validateMobile(formData.phone),
    };

    setValidationErrors(errors);

    const hasError = Object.values(errors).some(
      (error) => error
    );

    if (hasError) {
      toast.error("Please fix validation errors");
      return;
    }

    try {
      const res = await registerCustomer(formData);

      console.log("Register Success:", res);

      toast.success("Registration Successful");

      router.push("/customerLogin/login");

    } catch (err) {

      console.log(err);

      toast.error(
        err?.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-between bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 text-white p-10 relative overflow-hidden">

          {/* Background Blur */}
          <div className="absolute -top-10 -right-10 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>

          {/* Top Content */}
          <div className="relative z-10">

            <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md mb-6">
              🍲 Homemade Food Delivery
            </div>

            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Taste The <br />
              Love Of <br />
              Home Cooking
            </h1>

            <p className="text-lg text-orange-50 leading-8 max-w-md">
              Fresh homemade meals prepared with care by local home chefs.
              Healthy, hygienic, and delivered straight to your doorstep.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
                  🥘
                </div>

                <span className="text-lg">
                  Fresh Homemade Meals
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
                  🚚
                </div>

                <span className="text-lg">
                  Fast Delivery
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
                  ❤️
                </div>

                <span className="text-lg">
                  Healthy & Hygienic Food
                </span>
              </div>

            </div>
          </div>

          {/* Bottom Design */}
          <div className="relative z-10 mt-12">

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                <div className="text-4xl mb-3">🥗</div>

                <h3 className="font-semibold text-lg">
                  Healthy Meals
                </h3>

                <p className="text-sm text-orange-50 mt-2 leading-6">
                  Fresh vegetables and homemade recipes prepared daily.
                </p>
              </div>

              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                <div className="text-4xl mb-3">🍱</div>

                <h3 className="font-semibold text-lg">
                  Homemade Taste
                </h3>

                <p className="text-sm text-orange-50 mt-2 leading-6">
                  Enjoy authentic home-style food with traditional flavors.
                </p>
              </div>

            </div>

            {/* Bottom Quote */}
            <div className="mt-8 bg-white/10 rounded-2xl p-5 backdrop-blur-md border border-white/20">

              <p className="text-lg italic leading-8 text-orange-50">
                “Good food is the foundation of genuine happiness.”
              </p>

            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12 bg-white">

          <div className="mb-8">

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Create Account
            </h2>

            <p className="text-gray-500 mt-2">
              Join now and enjoy delicious homemade food.
            </p>

          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>

              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
              />

              {validationErrors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {validationErrors.name}
                </p>
              )}

            </div>

            {/* Email */}
            <div>

              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
              />

              {validationErrors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {validationErrors.email}
                </p>
              )}

            </div>

            {/* Password */}
            <div>

              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
              />

              {validationErrors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {validationErrors.password}
                </p>
              )}

            </div>

            {/* Phone */}
            <div>

              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Phone Number
              </label>

              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
              />

              {validationErrors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {validationErrors.phone}
                </p>
              )}

            </div>

            {/* API Error */}
            {error && (
              <div className="bg-red-100 border border-red-300 text-red-600 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-2xl font-semibold text-lg shadow-md hover:shadow-xl transition duration-300"
            >
              {loading ? "Creating Account..." : "Register Now"}
            </button>

          </form>

          {/* Login Link */}
          <p className="text-center text-gray-600 mt-8">

            Already have an account?{" "}

            <Link
              href="/customerLogin/login"
              className="text-orange-500 font-semibold hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>
    </div>
  );
}