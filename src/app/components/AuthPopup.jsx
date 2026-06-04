"use client";

import { useState, useEffect } from "react";
import { FaEnvelope, FaLock, FaLeaf, FaUser, FaPhoneAlt, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import { useCustomerStore } from "../../../store/customer.store";
import { validateName, validateEmail, validateMobile, validatePassword } from "../../../shared/validation";

export default function AuthPopup() {
  const [visible, setVisible] = useState(false);
  const [tab, setTab] = useState("login");

  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const [registerData, setRegisterData] = useState({ name: "", email: "", password: "", phone: "" });
  const [registerErrors, setRegisterErrors] = useState({});

  const customer = useCustomerStore((s) => s.customer);
  const loginCustomer = useCustomerStore((s) => s.loginCustomer);
  const registerCustomer = useCustomerStore((s) => s.registerCustomer);
  const loading = useCustomerStore((s) => s.loading);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited && !customer) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, [customer]);

  const close = () => {
    localStorage.setItem("hasVisited", "true");
    setVisible(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginCustomer({ email: loginData.email, password: loginData.password });
      toast.success("Login Successful! Welcome back.");
      close();
    } catch (err) {
      toast.error(err?.response?.data?.message || "Login Failed");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const errors = {
      name:     validateName(registerData.name),
      email:    validateEmail(registerData.email),
      password: validatePassword(registerData.password),
      phone:    validateMobile(registerData.phone),
    };
    setRegisterErrors(errors);
    if (Object.values(errors).some(Boolean)) {
      toast.error("Please fix validation errors");
      return;
    }
    try {
      await registerCustomer(registerData);
      toast.success("Account created! Welcome to Ojain.");
      close();
    } catch (err) {
      toast.error(err?.response?.data?.message || "Registration Failed");
    }
  };

  if (!visible) return null;

  const inputClass =
    "w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#2E7D32]/40 focus:border-[#2E7D32] transition";

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
      style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(5px)" }}
    >
      <div className="relative w-full max-w-md bg-white rounded-[28px] shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-[#1B5E20] to-[#43A047] px-8 pt-8 pb-6 text-white">
          <button
            onClick={close}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
          >
            <FaTimes size={13} />
          </button>
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-md mb-3">
            <FaLeaf size={10} /> A Brand That Serves Pure
          </div>
          <h2 className="text-2xl font-extrabold leading-tight">
            {tab === "login" ? "Welcome Back!" : "Join O-Jain Family!"}
          </h2>
          <p className="text-white/80 text-sm mt-1">
            {tab === "login"
              ? "Login to explore pure Jain & Satvik products."
              : "Create your account and start ordering."}
          </p>
        </div>

        {/* Tabs */}
        <div className="px-8 pt-5">
          <div className="grid grid-cols-2 bg-gray-100 p-1 rounded-2xl">
            {[["login", "Login"], ["register", "Register"]].map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setTab(key)}
                className={`h-10 rounded-xl font-semibold text-sm transition ${
                  tab === key ? "bg-[#2E7D32] text-white shadow" : "text-gray-600"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="px-8 pb-8 pt-4">

          {/* LOGIN FORM */}
          {tab === "login" && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-xs font-medium text-gray-700 mb-1.5 block">Email Address</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2E7D32] text-sm" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-gray-700 mb-1.5 block">Password</label>
                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2E7D32] text-sm" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white py-3 rounded-xl font-bold text-sm shadow hover:shadow-lg transition duration-300 mt-1"
              >
                {loading ? "Logging in..." : "Login Now"}
              </button>

              <p className="text-center text-gray-500 text-xs">
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  onClick={() => setTab("register")}
                  className="text-[#2E7D32] font-semibold hover:underline"
                >
                  Register
                </button>
              </p>
            </form>
          )}

          {/* REGISTER FORM */}
          {tab === "register" && (
            <form onSubmit={handleRegister} className="space-y-3">
              {[
                { key: "name",     label: "Full Name",     type: "text",     Icon: FaUser,      placeholder: "Enter your full name" },
                { key: "email",    label: "Email Address", type: "email",    Icon: FaEnvelope,  placeholder: "Enter your email" },
                { key: "password", label: "Password",      type: "password", Icon: FaLock,      placeholder: "Create a password" },
                { key: "phone",    label: "Phone Number",  type: "tel",      Icon: FaPhoneAlt,  placeholder: "10-digit mobile number" },
              ].map(({ key, label, type, Icon, placeholder }) => (
                <div key={key}>
                  <label className="text-xs font-medium text-gray-700 mb-1.5 block">{label}</label>
                  <div className="relative">
                    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2E7D32] text-sm" />
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={registerData[key]}
                      onChange={(e) => {
                        setRegisterData({ ...registerData, [key]: e.target.value });
                        setRegisterErrors({ ...registerErrors, [key]: "" });
                      }}
                      className={inputClass}
                    />
                  </div>
                  {registerErrors[key] && (
                    <p className="text-red-500 text-xs mt-1">{registerErrors[key]}</p>
                  )}
                </div>
              ))}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white py-3 rounded-xl font-bold text-sm shadow hover:shadow-lg transition duration-300 mt-1"
              >
                {loading ? "Creating Account..." : "Register Now"}
              </button>

              <p className="text-center text-gray-500 text-xs">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setTab("login")}
                  className="text-[#2E7D32] font-semibold hover:underline"
                >
                  Login
                </button>
              </p>
            </form>
          )}

          <button
            onClick={close}
            className="w-full text-center text-xs text-gray-400 hover:text-gray-600 mt-4 transition"
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
}
