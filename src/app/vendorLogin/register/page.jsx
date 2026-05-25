// // =============================================
// // app/vendor/register/page.jsx
// // =============================================

// "use client";

// import React, {
//   useState,
// } from "react";

// import Link from "next/link";

// import {
//   useRouter,
// } from "next/navigation";

// import toast from "react-hot-toast";

// import {
//   FaStore,
// } from "react-icons/fa";

// import {
//   useVendor,
// } from "../../../../hooks/useVendor";

// const VendorRegister = () => {

//   const router =
//     useRouter();

//   const {
//     registerVendor,
//     loading,
//   } = useVendor();

//   const [errors, setErrors] =
//     useState({});

//   const [formData, setFormData] =
//     useState({

//       fullName: "",

//       email: "",

//       password: "",

//       phone: "",

//       shopName: "",

//       shopDescription: "",

//       city: "",

//       bankAccountNumber: "",

//       ifscCode: "",

//       accountHolderName: "",
//     });

//   // HANDLE CHANGE
//   const handleChange = (e) => {

//     setFormData({

//       ...formData,

//       [e.target.name]:
//         e.target.value,
//     });

//     // REMOVE ERROR
//     setErrors({

//       ...errors,

//       [e.target.name]: "",
//     });
//   };

//   // VALIDATION
//   const validateForm =
//     () => {

//       let newErrors = {};

//       if (
//         !formData.fullName
//       ) {
//         newErrors.fullName =
//           "Full name is required";
//       }

//       if (
//         !formData.email
//       ) {
//         newErrors.email =
//           "Email is required";
//       }

//       if (
//         !formData.password
//       ) {
//         newErrors.password =
//           "Password is required";
//       }

//       if (
//         formData.password
//           .length < 6
//       ) {
//         newErrors.password =
//           "Password must be 6+ characters";
//       }

//       if (
//         !formData.phone
//       ) {
//         newErrors.phone =
//           "Phone is required";
//       }

//       if (
//         !formData.shopName
//       ) {
//         newErrors.shopName =
//           "Shop name is required";
//       }

//       if (
//         !formData.city
//       ) {
//         newErrors.city =
//           "City is required";
//       }

//       setErrors(
//         newErrors
//       );

//       return (
//         Object.keys(
//           newErrors
//         ).length === 0
//       );
//     };

//   // SUBMIT
//   const handleSubmit =
//     async (e) => {

//       e.preventDefault();

//       if (
//         !validateForm()
//       ) {
//         toast.error(
//           "Please fix form errors"
//         );

//         return;
//       }

//       try {

//         const res =
//           await registerVendor(
//             formData
//           );

//         toast.success(
//           "Vendor registered successfully"
//         );

//         setTimeout(() => {

//           router.push(
//             "/vendor/login"
//           );

//         }, 1500);

//       } catch (err) {

//         toast.error(
//           err?.response?.data
//             ?.message ||
//           "Registration failed"
//         );
//       }
//     };

//   return (

//     <section
//       className="
//       min-h-screen
//       bg-gradient-to-br
//       from-orange-50
//       to-red-50
//       flex
//       items-center
//       justify-center
//       py-10
//       px-4
//     "
//     >

//       <div
//         className="
//         w-full
//         max-w-2xl
//         bg-white
//         rounded-3xl
//         shadow-2xl
//         p-8
//       "
//       >

//         {/* HEADER */}
//         <div
//           className="
//           text-center
//           mb-8
//         "
//         >

//           <div
//             className="
//             flex
//             justify-center
//             mb-4
//           "
//           >

//             <div
//               className="
//               h-16
//               w-16
//               rounded-full
//               bg-orange-100
//               flex
//               items-center
//               justify-center
//             "
//             >

//               <FaStore
//                 size={28}
//                 className="
//                 text-orange-500
//               "
//               />

//             </div>

//           </div>

//           <h1
//             className="
//             text-3xl
//             font-bold
//             text-gray-800
//           "
//           >
//             Vendor Register
//           </h1>

//           <p
//             className="
//             text-gray-500
//             mt-2
//           "
//           >
//             Create your store account
//           </p>

//         </div>

//         {/* FORM */}
//         <form
//           onSubmit={
//             handleSubmit
//           }
//           className="
//           grid
//           grid-cols-1
//           md:grid-cols-2
//           gap-5
//         "
//         >

//           {/* FULL NAME */}
//           <div>

//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full Name"
//               className="
//               border
//               rounded-xl
//               p-3
//               outline-none
//               w-full
//             "
//               onChange={
//                 handleChange
//               }
//             />

//             {errors.fullName && (

//               <p
//                 className="
//                 text-red-500
//                 text-sm
//                 mt-1
//               "
//               >
//                 {errors.fullName}
//               </p>
//             )}

//           </div>

//           {/* EMAIL */}
//           <div>

//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               className="
//               border
//               rounded-xl
//               p-3
//               outline-none
//               w-full
//             "
//               onChange={
//                 handleChange
//               }
//             />

//             {errors.email && (

//               <p
//                 className="
//                 text-red-500
//                 text-sm
//                 mt-1
//               "
//               >
//                 {errors.email}
//               </p>
//             )}

//           </div>

//           {/* PASSWORD */}
//           <div>

//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               className="
//               border
//               rounded-xl
//               p-3
//               outline-none
//               w-full
//             "
//               onChange={
//                 handleChange
//               }
//             />

//             {errors.password && (

//               <p
//                 className="
//                 text-red-500
//                 text-sm
//                 mt-1
//               "
//               >
//                 {errors.password}
//               </p>
//             )}

//           </div>

//           {/* PHONE */}
//           <div>

//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone"
//               className="
//               border
//               rounded-xl
//               p-3
//               outline-none
//               w-full
//             "
//               onChange={
//                 handleChange
//               }
//             />

//             {errors.phone && (

//               <p
//                 className="
//                 text-red-500
//                 text-sm
//                 mt-1
//               "
//               >
//                 {errors.phone}
//               </p>
//             )}

//           </div>

//           {/* SHOP NAME */}
//           <div>

//             <input
//               type="text"
//               name="shopName"
//               placeholder="Shop Name"
//               className="
//               border
//               rounded-xl
//               p-3
//               outline-none
//               w-full
//             "
//               onChange={
//                 handleChange
//               }
//             />

//             {errors.shopName && (

//               <p
//                 className="
//                 text-red-500
//                 text-sm
//                 mt-1
//               "
//               >
//                 {errors.shopName}
//               </p>
//             )}

//           </div>

//           {/* CITY */}
//           <div>

//             <input
//               type="text"
//               name="city"
//               placeholder="City"
//               className="
//               border
//               rounded-xl
//               p-3
//               outline-none
//               w-full
//             "
//               onChange={
//                 handleChange
//               }
//             />

//             {errors.city && (

//               <p
//                 className="
//                 text-red-500
//                 text-sm
//                 mt-1
//               "
//               >
//                 {errors.city}
//               </p>
//             )}

//           </div>

//           {/* OTHER FIELDS */}
//           <input
//             type="text"
//             name="bankAccountNumber"
//             placeholder="Bank Account Number"
//             className="
//             border
//             rounded-xl
//             p-3
//             outline-none
//           "
//             onChange={
//               handleChange
//             }
//           />

//           <input
//             type="text"
//             name="ifscCode"
//             placeholder="IFSC Code"
//             className="
//             border
//             rounded-xl
//             p-3
//             outline-none
//           "
//             onChange={
//               handleChange
//             }
//           />

//           <input
//             type="text"
//             name="accountHolderName"
//             placeholder="Account Holder Name"
//             className="
//             border
//             rounded-xl
//             p-3
//             outline-none
//             md:col-span-2
//           "
//             onChange={
//               handleChange
//             }
//           />

//           <textarea
//             name="shopDescription"
//             placeholder="Shop Description"
//             rows="4"
//             className="
//             border
//             rounded-xl
//             p-3
//             outline-none
//             md:col-span-2
//           "
//             onChange={
//               handleChange
//             }
//           />

//           {/* BUTTON */}
//           <button
//             type="submit"
//             className="
//             md:col-span-2
//             bg-orange-500
//             hover:bg-orange-600
//             text-white
//             py-3
//             rounded-xl
//             font-semibold
//           "
//           >
//             {loading
//               ? "Please wait..."
//               : "Create Vendor Account"}
//           </button>

//         </form>

//         {/* FOOTER */}
//         <p
//           className="
//           text-center
//           text-sm
//           text-gray-500
//           mt-6
//         "
//         >
//           Already have an account?{" "}

//           <Link
//             href="/vendor/login"
//             className="
//             text-orange-500
//             font-semibold
//           "
//           >
//             Login
//           </Link>
//         </p>

//       </div>

//     </section>
//   );
// };

// export default VendorRegister;


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
} from "react-icons/fa";

import { useVendor } from "../../../../hooks/useVendor";

import {
  validateName,
  validateEmail,
  validateMobile,
  validatePassword,
  validateBankAccount,
  validateIfsc,
  validateDescription,
} from "../../../../shared/validation";

const VendorRegister = () => {
  const router = useRouter();

  const { registerVendor, loading } = useVendor();

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    shopName: "",
    shopDescription: "",
    city: "",
    bankAccountNumber: "",
    ifscCode: "",
    accountHolderName: "",
  });

  // ================= VALIDATION =================

  const validateField = (name, value) => {
    switch (name) {
      case "fullName":
        return validateName(value);

      case "email":
        return validateEmail(value);

      case "password":
        return validatePassword(value);

      case "phone":
        return validateMobile(value);

      case "shopName":
        return validateName(value);

      case "city":
        return validateName(value);

      case "bankAccountNumber":
        return validateBankAccount(value);

      case "ifscCode":
        return validateIfsc(value);

      case "shopDescription":
        return validateDescription(value);

      case "accountHolderName":
        return validateName(value);

      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);

      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ================= HANDLE CHANGE =================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  // ================= SUBMIT =================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix all form errors");
      return;
    }

    try {
      console.log("REGISTER DATA:", formData);

      await registerVendor(formData);

      toast.success("Vendor account created successfully");

      setTimeout(() => {
        router.push("/vendorLogin/login");
      }, 1200);
    } catch (err) {
      console.log(err);

      toast.error(
        err?.message ||
          err?.response?.data?.message ||
          "Registration failed"
      );
    }
  };

  // ================= INPUT COMPONENT =================

  const InputField = ({
    icon,
    type,
    name,
    placeholder,
    value,
    error,
  }) => (
    <div>
      <div
        className={`flex items-center h-14 rounded-2xl border px-4 bg-white transition-all duration-300
        ${
          error
            ? "border-red-400"
            : "border-gray-300 focus-within:border-brand-green focus-within:ring-4 focus-within:ring-brand-green-pale"
        }`}
      >
        <div className="text-brand-green text-lg">{icon}</div>

        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className="w-full h-full bg-transparent outline-none px-3 text-gray-800 placeholder:text-gray-400"
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-1 ml-1">{error}</p>
      )}
    </div>
  );

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-5xl">
        <div className="bg-white/95 backdrop-blur-xl rounded-[35px] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT */}
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
                Vendor Account
              </h1>

              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Join our marketplace and start managing your store,
                products, orders and earnings with a modern vendor
                dashboard.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-white"></div>
                <div className="h-3 w-3 rounded-full bg-white/60"></div>
                <div className="h-3 w-3 rounded-full bg-white/30"></div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
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
                Fill all details to create vendor account
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
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
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                error={errors.password}
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
                icon={<FaStore />}
                type="text"
                name="shopName"
                placeholder="Shop Name"
                value={formData.shopName}
                error={errors.shopName}
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
                name="bankAccountNumber"
                placeholder="Bank Account Number"
                value={formData.bankAccountNumber}
                error={errors.bankAccountNumber}
              />

              <InputField
                icon={<FaUniversity />}
                type="text"
                name="ifscCode"
                placeholder="IFSC Code"
                value={formData.ifscCode}
                error={errors.ifscCode}
              />

              <div className="md:col-span-2">
                <InputField
                  icon={<FaUser />}
                  type="text"
                  name="accountHolderName"
                  placeholder="Account Holder Name"
                  value={formData.accountHolderName}
                  error={errors.accountHolderName}
                />
              </div>

              {/* TEXTAREA */}
              <div className="md:col-span-2">
                <div
                  className={`rounded-2xl border p-4 bg-white transition-all duration-300
                  ${
                    errors.shopDescription
                      ? "border-red-400"
                      : "border-gray-300 focus-within:border-brand-green focus-within:ring-4 focus-within:ring-brand-green-pale"
                  }`}
                >
                  <textarea
                    rows="4"
                    name="shopDescription"
                    placeholder="Shop Description"
                    value={formData.shopDescription}
                    onChange={handleChange}
                    className="w-full outline-none resize-none text-gray-800 placeholder:text-gray-400"
                  />
                </div>

                {errors.shopDescription && (
                  <p className="text-red-500 text-sm mt-1 ml-1">
                    {errors.shopDescription}
                  </p>
                )}
              </div>

              {/* BUTTON */}
              <div className="md:col-span-2 mt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 rounded-2xl bg-brand-green hover:bg-[#1B5E20] text-white text-lg font-bold shadow-lg transition-all duration-300 disabled:opacity-70"
                >
                  {loading
                    ? "Creating Account..."
                    : "Create Vendor Account"}
                </button>
              </div>
            </form>

            <p className="text-center text-gray-500 text-sm mt-8">
              Already have an account?{" "}
              <Link
                href="/vendorLogin/login"
                className="text-brand-green font-bold hover:underline"
              >
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorRegister;