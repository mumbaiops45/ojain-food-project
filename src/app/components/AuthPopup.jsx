// "use client";

// import { useState, useEffect } from "react";
// import { FaEnvelope, FaLock, FaLeaf, FaUser, FaPhoneAlt, FaTimes } from "react-icons/fa";
// import toast from "react-hot-toast";
// import { useCustomerStore } from "../../../store/customer.store";
// import { validateName, validateEmail, validateMobile, validatePassword } from "../../../shared/validation";

// export default function AuthPopup() {
//   const [visible, setVisible] = useState(false);
//   const [tab, setTab] = useState("login");

//   const [loginData, setLoginData] = useState({ email: "", password: "" });

//   const [registerData, setRegisterData] = useState({ name: "", email: "", password: "", phone: "" });
//   const [registerErrors, setRegisterErrors] = useState({});

//   const customer = useCustomerStore((s) => s.customer);
//   const loginCustomer = useCustomerStore((s) => s.loginCustomer);
//   const registerCustomer = useCustomerStore((s) => s.registerCustomer);
//   const loading = useCustomerStore((s) => s.loading);

//   useEffect(() => {
//     const hasVisited = localStorage.getItem("hasVisited");
//     if (!hasVisited && !customer) {
//       const timer = setTimeout(() => setVisible(true), 800);
//       return () => clearTimeout(timer);
//     }
//   }, [customer]);

//   const close = () => {
//     localStorage.setItem("hasVisited", "true");
//     setVisible(false);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await loginCustomer({ email: loginData.email, password: loginData.password });
//       toast.success("Login Successful! Welcome back.");
//       close();
//     } catch (err) {
//       toast.error(err?.response?.data?.message || "Login Failed");
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     const errors = {
//       name:     validateName(registerData.name),
//       email:    validateEmail(registerData.email),
//       password: validatePassword(registerData.password),
//       phone:    validateMobile(registerData.phone),
//     };
//     setRegisterErrors(errors);
//     if (Object.values(errors).some(Boolean)) {
//       toast.error("Please fix validation errors");
//       return;
//     }
//     try {
//       await registerCustomer(registerData);
//       toast.success("Account created! Welcome to Ojain.");
//       close();
//     } catch (err) {
//       toast.error(err?.response?.data?.message || "Registration Failed");
//     }
//   };

//   if (!visible) return null;

//   const inputClass =
//     "w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#2E7D32]/40 focus:border-[#2E7D32] transition";

//   return (
//     <div
//       className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
//       style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(5px)" }}
//     >
//       <div className="relative w-full max-w-md bg-white rounded-[28px] shadow-2xl overflow-hidden">

//         {/* Header */}
//         <div className="bg-gradient-to-r from-[#1B5E20] to-[#43A047] px-8 pt-8 pb-6 text-white">
//           <button
//             onClick={close}
//             className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
//           >
//             <FaTimes size={13} />
//           </button>
//           <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-md mb-3">
//             <FaLeaf size={10} /> A Brand That Serves Pure
//           </div>
//           <h2 className="text-2xl font-extrabold leading-tight">
//             {tab === "login" ? "Welcome Back!" : "Join O-Jain Family!"}
//           </h2>
//           <p className="text-white/80 text-sm mt-1">
//             {tab === "login"
//               ? "Login to explore pure Jain & Satvik products."
//               : "Create your account and start ordering."}
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="px-8 pt-5">
//           <div className="grid grid-cols-2 bg-gray-100 p-1 rounded-2xl">
//             {[["login", "Login"], ["register", "Register"]].map(([key, label]) => (
//               <button
//                 key={key}
//                 type="button"
//                 onClick={() => setTab(key)}
//                 className={`h-10 rounded-xl font-semibold text-sm transition ${
//                   tab === key ? "bg-[#2E7D32] text-white shadow" : "text-gray-600"
//                 }`}
//               >
//                 {label}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="px-8 pb-8 pt-4">

//           {/* LOGIN FORM */}
//           {tab === "login" && (
//             <form onSubmit={handleLogin} className="space-y-4">
//               <div>
//                 <label className="text-xs font-medium text-gray-700 mb-1.5 block">Email Address</label>
//                 <div className="relative">
//                   <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2E7D32] text-sm" />
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     value={loginData.email}
//                     onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
//                     required
//                     className={inputClass}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="text-xs font-medium text-gray-700 mb-1.5 block">Password</label>
//                 <div className="relative">
//                   <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2E7D32] text-sm" />
//                   <input
//                     type="password"
//                     placeholder="Enter your password"
//                     value={loginData.password}
//                     onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
//                     required
//                     className={inputClass}
//                   />
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white py-3 rounded-xl font-bold text-sm shadow hover:shadow-lg transition duration-300 mt-1"
//               >
//                 {loading ? "Logging in..." : "Login Now"}
//               </button>

//               <p className="text-center text-gray-500 text-xs">
//                 Don&apos;t have an account?{" "}
//                 <button
//                   type="button"
//                   onClick={() => setTab("register")}
//                   className="text-[#2E7D32] font-semibold hover:underline"
//                 >
//                   Register
//                 </button>
//               </p>
//             </form>
//           )}

//           {/* REGISTER FORM */}
//           {tab === "register" && (
//             <form onSubmit={handleRegister} className="space-y-3">
//               {[
//                 { key: "name",     label: "Full Name",     type: "text",     Icon: FaUser,      placeholder: "Enter your full name" },
//                 { key: "email",    label: "Email Address", type: "email",    Icon: FaEnvelope,  placeholder: "Enter your email" },
//                 { key: "password", label: "Password",      type: "password", Icon: FaLock,      placeholder: "Create a password" },
//                 { key: "phone",    label: "Phone Number",  type: "tel",      Icon: FaPhoneAlt,  placeholder: "10-digit mobile number" },
//               ].map(({ key, label, type, Icon, placeholder }) => (
//                 <div key={key}>
//                   <label className="text-xs font-medium text-gray-700 mb-1.5 block">{label}</label>
//                   <div className="relative">
//                     <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2E7D32] text-sm" />
//                     <input
//                       type={type}
//                       placeholder={placeholder}
//                       value={registerData[key]}
//                       onChange={(e) => {
//                         setRegisterData({ ...registerData, [key]: e.target.value });
//                         setRegisterErrors({ ...registerErrors, [key]: "" });
//                       }}
//                       className={inputClass}
//                     />
//                   </div>
//                   {registerErrors[key] && (
//                     <p className="text-red-500 text-xs mt-1">{registerErrors[key]}</p>
//                   )}
//                 </div>
//               ))}

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white py-3 rounded-xl font-bold text-sm shadow hover:shadow-lg transition duration-300 mt-1"
//               >
//                 {loading ? "Creating Account..." : "Register Now"}
//               </button>

//               <p className="text-center text-gray-500 text-xs">
//                 Already have an account?{" "}
//                 <button
//                   type="button"
//                   onClick={() => setTab("login")}
//                   className="text-[#2E7D32] font-semibold hover:underline"
//                 >
//                   Login
//                 </button>
//               </p>
//             </form>
//           )}

//           <button
//             onClick={close}
//             className="w-full text-center text-xs text-gray-400 hover:text-gray-600 mt-4 transition"
//           >
//             Skip for now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaLock,
  FaLeaf,
  FaUser,
  FaPhoneAlt,
  FaTimes,
  FaEye,
  FaEyeSlash ,
} from "react-icons/fa";

import toast from "react-hot-toast";

import { useCustomerStore } from "../../../store/customer.store";

import {
  validateName,
  validateEmail,
  validateMobile,
  validatePassword,
} from "../../../shared/validation";

export default function AuthPopup() {
  // ─────────────────────────────────────────
  // POPUP STATE
  // ─────────────────────────────────────────

  const [visible, setVisible] = useState(false);

  const [tab, setTab] = useState("login");

  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  // ─────────────────────────────────────────
  // LOGIN STATE
  // ─────────────────────────────────────────

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // ─────────────────────────────────────────
  // REGISTER STATE
  // ─────────────────────────────────────────

  const [registerData, setRegisterData] =
    useState({
      name: "",
      email: "",
      password: "",
      phone: "",
    });

  const [
    registerErrors,
    setRegisterErrors,
  ] = useState({});

  // ─────────────────────────────────────────
  // CUSTOMER STORE
  // ─────────────────────────────────────────

  const customer = useCustomerStore(
    (state) => state.customer
  );

  const loginCustomer = useCustomerStore(
    (state) => state.loginCustomer
  );

  const registerCustomer = useCustomerStore(
    (state) => state.registerCustomer
  );

  const loading = useCustomerStore(
    (state) => state.loading
  );

  // ─────────────────────────────────────────
  // SHOW POPUP
  // ─────────────────────────────────────────

  useEffect(() => {
    const hasVisited =
      localStorage.getItem("hasVisited");

    /*
     * Show popup only when:
     *
     * 1. Customer has not opened it before
     * 2. Customer is not logged in
     */

    if (!hasVisited && !customer) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 800);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [customer]);

  // ─────────────────────────────────────────
  // CLOSE POPUP
  // ─────────────────────────────────────────

  const close = () => {
    localStorage.setItem(
      "hasVisited",
      "true"
    );

    setVisible(false);
  };

  // ─────────────────────────────────────────
  // LOGIN CUSTOMER
  // ─────────────────────────────────────────

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await loginCustomer({
        email: loginData.email.trim(),
        password: loginData.password,
      });

      toast.success(
        "Login successful! Welcome back."
      );

      // Close popup after successful login
      close();
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
        "Login failed. Please check your details."
      );
    }
  };

  // ─────────────────────────────────────────
  // REGISTER CUSTOMER
  // ─────────────────────────────────────────

  const handleRegister = async (event) => {
    event.preventDefault();

    // Remove unnecessary spaces
    const cleanRegisterData = {
      name: registerData.name.trim(),

      email: registerData.email
        .trim()
        .toLowerCase(),

      password: registerData.password,

      phone: registerData.phone.trim(),
    };

    // Validate registration details
    const errors = {
      name: validateName(
        cleanRegisterData.name
      ),

      email: validateEmail(
        cleanRegisterData.email
      ),

      password: validatePassword(
        cleanRegisterData.password
      ),

      phone: validateMobile(
        cleanRegisterData.phone
      ),
    };

    setRegisterErrors(errors);

    // Stop registration if validation fails
    if (
      Object.values(errors).some(
        (error) => Boolean(error)
      )
    ) {
      toast.error(
        "Please fix the validation errors."
      );

      return;
    }

    try {
      // Create customer account
      await registerCustomer(
        cleanRegisterData
      );

      toast.success(
        "Account created successfully! Please login."
      );

      /*
       * Automatically add the registered
       * email address to the login form.
       */

      setLoginData({
        email: cleanRegisterData.email,
        password: "",
      });

      // Clear registration form
      setRegisterData({
        name: "",
        email: "",
        password: "",
        phone: "",
      });

      // Clear validation errors
      setRegisterErrors({});

      /*
       * Keep popup open and change
       * Register tab to Login tab.
       */

      setTab("login");
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
        "Registration failed. Please try again."
      );
    }
  };

  // Do not render popup when hidden
  if (!visible) {
    return null;
  }

  // ─────────────────────────────────────────
  // COMMON INPUT STYLE
  // ─────────────────────────────────────────

  const inputClass = `
    w-full
    border
    border-gray-200
    rounded-xl
    pl-11
    pr-4
    py-3
    text-sm
    outline-none
    focus:ring-2
    focus:ring-[#2E7D32]/40
    focus:border-[#2E7D32]
    transition
  `;

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        px-4
      "
      style={{
        backgroundColor:
          "rgba(0,0,0,0.55)",

        backdropFilter:
          "blur(5px)",
      }}
    >
      <div
        className="
          relative
          w-full
          max-w-md
          bg-white
          rounded-[28px]
          shadow-2xl
          overflow-hidden
        "
      >
        {/* ───────────────────────────── */}
        {/* HEADER */}
        {/* ───────────────────────────── */}

        <div
          className="
            bg-gradient-to-r
            from-[#1B5E20]
            to-[#43A047]
            px-8
            pt-8
            pb-6
            text-white
          "
        >
          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={close}
            aria-label="Close login popup"
            className="
              absolute
              top-4
              right-4
              w-8
              h-8
              rounded-full
              bg-white/20
              flex
              items-center
              justify-center
              hover:bg-white/30
              transition
            "
          >
            <FaTimes size={13} />
          </button>

          {/* BRAND BADGE */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              bg-white/20
              px-4
              py-1.5
              rounded-full
              text-xs
              font-medium
              backdrop-blur-md
              mb-3
            "
          >
            <FaLeaf size={10} />

            A Brand That Serves Pure
          </div>

          {/* HEADING */}

          <h2
            className="
              text-2xl
              font-extrabold
              leading-tight
            "
          >
            {tab === "login"
              ? "Welcome Back!"
              : "Join O-Jain Family!"}
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              text-white/80
              text-sm
              mt-1
            "
          >
            {tab === "login"
              ? "Login to explore pure Jain & Satvik products."
              : "Create your account and start ordering."}
          </p>
        </div>

        {/* ───────────────────────────── */}
        {/* LOGIN / REGISTER TABS */}
        {/* ───────────────────────────── */}

        <div className="px-8 pt-5">
          <div
            className="
              grid
              grid-cols-2
              bg-gray-100
              p-1
              rounded-2xl
            "
          >
            <button
              type="button"
              onClick={() => {
                setTab("login");

                setRegisterErrors({});
              }}
              className={`
                h-10
                rounded-xl
                font-semibold
                text-sm
                transition

                ${tab === "login"
                  ? `
                      bg-[#2E7D32]
                      text-white
                      shadow
                    `
                  : "text-gray-600"
                }
              `}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => {
                setTab("register");

                setRegisterErrors({});
              }}
              className={`
                h-10
                rounded-xl
                font-semibold
                text-sm
                transition

                ${tab === "register"
                  ? `
                      bg-[#2E7D32]
                      text-white
                      shadow
                    `
                  : "text-gray-600"
                }
              `}
            >
              Register
            </button>
          </div>
        </div>

        {/* ───────────────────────────── */}
        {/* FORM AREA */}
        {/* ───────────────────────────── */}

        <div className="px-8 pb-8 pt-4">

          {/* ─────────────────────────── */}
          {/* LOGIN FORM */}
          {/* ─────────────────────────── */}

          {tab === "login" && (
            <form
              onSubmit={handleLogin}
              className="space-y-4"
            >
              {/* EMAIL */}

              <div>
                <label
                  htmlFor="login-email"
                  className="
                    text-xs
                    font-medium
                    text-gray-700
                    mb-1.5
                    block
                  "
                >
                  Email Address
                </label>

                <div className="relative">
                  <FaEnvelope
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-[#2E7D32]
                      text-sm
                    "
                  />

                  <input
                    id="login-email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    value={
                      loginData.email
                    }
                    onChange={(event) => {
                      setLoginData({
                        ...loginData,

                        email:
                          event.target.value,
                      });
                    }}
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              {/* PASSWORD */}

              <div>
                <label
                  htmlFor="login-password"
                  className="
                    text-xs
                    font-medium
                    text-gray-700
                    mb-1.5
                    block
                  "
                >
                  Password
                </label>

                <div className="relative">
                  <FaLock
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-[#2E7D32]
                      text-sm
                    "
                  />

                  <input
                    id="login-password"
                    type={showLoginPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={(event) => {
                      setLoginData({
                        ...loginData,
                        password: event.target.value,
                      });
                    }}
                    required
                    className={`${inputClass} pr-12`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                    aria-label={showLoginPassword ? "Hide password" : "Show password"}
                    className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                    hover:text-[#2E7D32]
                    transition
                  "
                  >
                    {showLoginPassword ? (
                      <FaEyeSlash size={16} />
                    ) : (
                      <FaEye size={16} />
                    )}
                  </button>
                </div>
              </div>

              {/* LOGIN BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  bg-[#2E7D32]
                  hover:bg-[#1B5E20]
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                  text-white
                  py-3
                  rounded-xl
                  font-bold
                  text-sm
                  shadow
                  hover:shadow-lg
                  transition
                  duration-300
                  mt-1
                "
              >
                {loading
                  ? "Logging in..."
                  : "Login Now"}
              </button>

              {/* OPEN REGISTER */}

              <p
                className="
                  text-center
                  text-gray-500
                  text-xs
                "
              >
                Don&apos;t have an account?{" "}

                <button
                  type="button"
                  onClick={() => {
                    setTab("register");
                  }}
                  className="
                    text-[#2E7D32]
                    font-semibold
                    hover:underline
                  "
                >
                  Register
                </button>
              </p>
            </form>
          )}

          {/* ─────────────────────────── */}
          {/* REGISTER FORM */}
          {/* ─────────────────────────── */}

          {tab === "register" && (
            <form
              onSubmit={
                handleRegister
              }
              className="space-y-3"
            >
              {[
                {
                  key: "name",

                  label:
                    "Full Name",

                  type: "text",

                  Icon: FaUser,

                  placeholder:
                    "Enter your full name",

                  autoComplete:
                    "name",
                },

                {
                  key: "email",

                  label:
                    "Email Address",

                  type: "email",

                  Icon:
                    FaEnvelope,

                  placeholder:
                    "Enter your email",

                  autoComplete:
                    "email",
                },

                {
                  key:
                    "password",

                  label:
                    "Password",

                  type:
                    "password",

                  Icon:
                    FaLock,

                  placeholder:
                    "Create a password",

                  autoComplete:
                    "new-password",
                },

                {
                  key:
                    "phone",

                  label:
                    "Phone Number",

                  type:
                    "tel",

                  Icon:
                    FaPhoneAlt,

                  placeholder:
                    "10-digit mobile number",

                  autoComplete:
                    "tel",
                },
              ].map(
                ({
                  key,

                  label,

                  type,

                  Icon,

                  placeholder,

                  autoComplete,
                }) => (
                  <div key={key}>
                    <label
                      htmlFor={`register-${key}`}
                      className="
                        text-xs
                        font-medium
                        text-gray-700
                        mb-1.5
                        block
                      "
                    >
                      {label}
                    </label>

                    <div
                      className="relative"
                    >
                      <Icon
                        className="
                          absolute
                          left-4
                          top-1/2
                          -translate-y-1/2
                          text-[#2E7D32]
                          text-sm
                        "
                      />

                      <input
                        id={`register-${key}`}
                        type={
                         key === "password"
                           ? showRegisterPassword
                             ? "text"
                             : "password"
                           : type
                        }
                        autoComplete={
                          autoComplete
                        }
                        placeholder={
                          placeholder
                        }
                        value={
                          registerData[
                          key
                          ]
                        }
                        onChange={(
                          event
                        ) => {
                          setRegisterData(
                            {
                              ...registerData,

                              [key]:
                                event
                                  .target
                                  .value,
                            }
                          );

                          setRegisterErrors(
                            {
                              ...registerErrors,

                              [key]:
                                "",
                            }
                          );
                        }}
                        required
                        className={
                          inputClass
                        }
                      />
                    </div>

                    {/* VALIDATION ERROR */}

                    {registerErrors[
                      key
                    ] && (
                        <p
                          className="
                          text-red-500
                          text-xs
                          mt-1
                        "
                        >
                          {
                            registerErrors[
                            key
                            ]
                          }
                        </p>
                      )}
                  </div>
                )
              )}

              {/* REGISTER BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  bg-[#2E7D32]
                  hover:bg-[#1B5E20]
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                  text-white
                  py-3
                  rounded-xl
                  font-bold
                  text-sm
                  shadow
                  hover:shadow-lg
                  transition
                  duration-300
                  mt-1
                "
              >
                {loading
                  ? "Creating Account..."
                  : "Register Now"}
              </button>

              {/* OPEN LOGIN */}

              <p
                className="
                  text-center
                  text-gray-500
                  text-xs
                "
              >
                Already have an account?{" "}

                <button
                  type="button"
                  onClick={() => {
                    setTab("login");
                  }}
                  className="
                    text-[#2E7D32]
                    font-semibold
                    hover:underline
                  "
                >
                  Login
                </button>
              </p>
            </form>
          )}

          {/* ─────────────────────────── */}
          {/* SKIP BUTTON */}
          {/* ─────────────────────────── */}

          <button
            type="button"
            onClick={close}
            className="
              w-full
              text-center
              text-xs
              text-gray-400
              hover:text-gray-600
              mt-4
              transition
            "
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
}

