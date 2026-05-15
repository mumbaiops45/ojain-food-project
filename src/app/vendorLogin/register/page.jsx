// =============================================
// app/vendor/register/page.jsx
// =============================================

"use client";

import React, {
  useState,
} from "react";

import Link from "next/link";

import {
  useRouter,
} from "next/navigation";

import toast from "react-hot-toast";

import {
  FaStore,
} from "react-icons/fa";

import {
  useVendor,
} from "../../../../hooks/useVendor";

const VendorRegister = () => {

  const router =
    useRouter();

  const {
    registerVendor,
    loading,
  } = useVendor();

  const [errors, setErrors] =
    useState({});

  const [formData, setFormData] =
    useState({

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

  // HANDLE CHANGE
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,
    });

    // REMOVE ERROR
    setErrors({

      ...errors,

      [e.target.name]: "",
    });
  };

  // VALIDATION
  const validateForm =
    () => {

      let newErrors = {};

      if (
        !formData.fullName
      ) {
        newErrors.fullName =
          "Full name is required";
      }

      if (
        !formData.email
      ) {
        newErrors.email =
          "Email is required";
      }

      if (
        !formData.password
      ) {
        newErrors.password =
          "Password is required";
      }

      if (
        formData.password
          .length < 6
      ) {
        newErrors.password =
          "Password must be 6+ characters";
      }

      if (
        !formData.phone
      ) {
        newErrors.phone =
          "Phone is required";
      }

      if (
        !formData.shopName
      ) {
        newErrors.shopName =
          "Shop name is required";
      }

      if (
        !formData.city
      ) {
        newErrors.city =
          "City is required";
      }

      setErrors(
        newErrors
      );

      return (
        Object.keys(
          newErrors
        ).length === 0
      );
    };

  // SUBMIT
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      if (
        !validateForm()
      ) {
        toast.error(
          "Please fix form errors"
        );

        return;
      }

      try {

        const res =
          await registerVendor(
            formData
          );

        toast.success(
          "Vendor registered successfully"
        );

        setTimeout(() => {

          router.push(
            "/vendor/login"
          );

        }, 1500);

      } catch (err) {

        toast.error(
          err?.response?.data
            ?.message ||
          "Registration failed"
        );
      }
    };

  return (

    <section
      className="
      min-h-screen
      bg-gradient-to-br
      from-orange-50
      to-red-50
      flex
      items-center
      justify-center
      py-10
      px-4
    "
    >

      <div
        className="
        w-full
        max-w-2xl
        bg-white
        rounded-3xl
        shadow-2xl
        p-8
      "
      >

        {/* HEADER */}
        <div
          className="
          text-center
          mb-8
        "
        >

          <div
            className="
            flex
            justify-center
            mb-4
          "
          >

            <div
              className="
              h-16
              w-16
              rounded-full
              bg-orange-100
              flex
              items-center
              justify-center
            "
            >

              <FaStore
                size={28}
                className="
                text-orange-500
              "
              />

            </div>

          </div>

          <h1
            className="
            text-3xl
            font-bold
            text-gray-800
          "
          >
            Vendor Register
          </h1>

          <p
            className="
            text-gray-500
            mt-2
          "
          >
            Create your store account
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={
            handleSubmit
          }
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-5
        "
        >

          {/* FULL NAME */}
          <div>

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="
              border
              rounded-xl
              p-3
              outline-none
              w-full
            "
              onChange={
                handleChange
              }
            />

            {errors.fullName && (

              <p
                className="
                text-red-500
                text-sm
                mt-1
              "
              >
                {errors.fullName}
              </p>
            )}

          </div>

          {/* EMAIL */}
          <div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="
              border
              rounded-xl
              p-3
              outline-none
              w-full
            "
              onChange={
                handleChange
              }
            />

            {errors.email && (

              <p
                className="
                text-red-500
                text-sm
                mt-1
              "
              >
                {errors.email}
              </p>
            )}

          </div>

          {/* PASSWORD */}
          <div>

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="
              border
              rounded-xl
              p-3
              outline-none
              w-full
            "
              onChange={
                handleChange
              }
            />

            {errors.password && (

              <p
                className="
                text-red-500
                text-sm
                mt-1
              "
              >
                {errors.password}
              </p>
            )}

          </div>

          {/* PHONE */}
          <div>

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="
              border
              rounded-xl
              p-3
              outline-none
              w-full
            "
              onChange={
                handleChange
              }
            />

            {errors.phone && (

              <p
                className="
                text-red-500
                text-sm
                mt-1
              "
              >
                {errors.phone}
              </p>
            )}

          </div>

          {/* SHOP NAME */}
          <div>

            <input
              type="text"
              name="shopName"
              placeholder="Shop Name"
              className="
              border
              rounded-xl
              p-3
              outline-none
              w-full
            "
              onChange={
                handleChange
              }
            />

            {errors.shopName && (

              <p
                className="
                text-red-500
                text-sm
                mt-1
              "
              >
                {errors.shopName}
              </p>
            )}

          </div>

          {/* CITY */}
          <div>

            <input
              type="text"
              name="city"
              placeholder="City"
              className="
              border
              rounded-xl
              p-3
              outline-none
              w-full
            "
              onChange={
                handleChange
              }
            />

            {errors.city && (

              <p
                className="
                text-red-500
                text-sm
                mt-1
              "
              >
                {errors.city}
              </p>
            )}

          </div>

          {/* OTHER FIELDS */}
          <input
            type="text"
            name="bankAccountNumber"
            placeholder="Bank Account Number"
            className="
            border
            rounded-xl
            p-3
            outline-none
          "
            onChange={
              handleChange
            }
          />

          <input
            type="text"
            name="ifscCode"
            placeholder="IFSC Code"
            className="
            border
            rounded-xl
            p-3
            outline-none
          "
            onChange={
              handleChange
            }
          />

          <input
            type="text"
            name="accountHolderName"
            placeholder="Account Holder Name"
            className="
            border
            rounded-xl
            p-3
            outline-none
            md:col-span-2
          "
            onChange={
              handleChange
            }
          />

          <textarea
            name="shopDescription"
            placeholder="Shop Description"
            rows="4"
            className="
            border
            rounded-xl
            p-3
            outline-none
            md:col-span-2
          "
            onChange={
              handleChange
            }
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="
            md:col-span-2
            bg-orange-500
            hover:bg-orange-600
            text-white
            py-3
            rounded-xl
            font-semibold
          "
          >
            {loading
              ? "Please wait..."
              : "Create Vendor Account"}
          </button>

        </form>

        {/* FOOTER */}
        <p
          className="
          text-center
          text-sm
          text-gray-500
          mt-6
        "
        >
          Already have an account?{" "}

          <Link
            href="/vendor/login"
            className="
            text-orange-500
            font-semibold
          "
          >
            Login
          </Link>
        </p>

      </div>

    </section>
  );
};

export default VendorRegister;