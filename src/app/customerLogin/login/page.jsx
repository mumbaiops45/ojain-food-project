// src/app/customerLogin/login/page.jsx

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { useCustomer } from "../../../../hooks/useCustomer";

export default function CustomerLoginPage() {
  const router = useRouter();

  const { loginCustomer, loading, error } = useCustomer();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginCustomer(formData);

      console.log("Login Success:", res);

      toast.success("Login Successful");

      router.push("/");

    } catch (err) {

      console.log(err);

      toast.error(
        err?.response?.data?.message ||
        "Login Failed"
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
              🍲 Homemade Food Platform
            </div>

            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Welcome <br />
              Back To <br />
              Home Taste
            </h1>

            <p className="text-lg text-orange-50 leading-8 max-w-md">
              Login to explore healthy homemade meals prepared
              with love by trusted home chefs near you.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
                  🥘
                </div>

                <span className="text-lg">
                  Fresh Daily Meals
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
                  🚚
                </div>

                <span className="text-lg">
                  Fast & Safe Delivery
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
                  ❤️
                </div>

                <span className="text-lg">
                  Healthy Homemade Food
                </span>
              </div>

            </div>
          </div>

          {/* Bottom Cards */}
          <div className="relative z-10 mt-12">

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                <div className="text-4xl mb-3">🥗</div>

                <h3 className="font-semibold text-lg">
                  Healthy Meals
                </h3>

                <p className="text-sm text-orange-50 mt-2 leading-6">
                  Nutritious homemade recipes made fresh every day.
                </p>
              </div>

              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                <div className="text-4xl mb-3">🍱</div>

                <h3 className="font-semibold text-lg">
                  Authentic Taste
                </h3>

                <p className="text-sm text-orange-50 mt-2 leading-6">
                  Enjoy real home-cooked meals with traditional flavors.
                </p>
              </div>

            </div>

            {/* Quote */}
            <div className="mt-8 bg-white/10 rounded-2xl p-5 backdrop-blur-md border border-white/20">

              <p className="text-lg italic leading-8 text-orange-50">
                “Homemade food brings comfort to every heart.”
              </p>

            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12 bg-white flex flex-col justify-center">

          {/* Heading */}
          <div className="mb-8">

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Customer Login
            </h2>

            <p className="text-gray-500 mt-2">
              Login to continue your homemade food journey.
            </p>

          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

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
                required
              />

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
                required
              />

            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">

              <button
                type="button"
                className="text-sm text-orange-500 hover:underline"
              >
                Forgot Password?
              </button>

            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-100 border border-red-300 text-red-600 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-2xl font-semibold text-lg shadow-md hover:shadow-xl transition duration-300"
            >
              {loading ? "Logging in..." : "Login Now"}
            </button>

          </form>

          {/* Register Link */}
          <p className="text-center text-gray-600 mt-8">

            Don&apos;t have an account?{" "}

            <Link
              href="/customerLogin/register"
              className="text-orange-500 font-semibold hover:underline"
            >
              Create Account
            </Link>

          </p>

        </div>

      </div>
    </div>
  );
}