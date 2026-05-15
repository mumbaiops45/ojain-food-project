// =============================================
// app/vendor/login/page.jsx
// =============================================

"use client";

import React, {
  useState,
} from "react";

import Link from "next/link";

import {
  useRouter,
} from "next/navigation";

import {
  FaStore,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

import {
  useVendor,
} from "../../../../hooks/useVendor";

const VendorLogin = () => {

  const router =
    useRouter();

  const {
    loginVendor,
    loading,
    error,
  } = useVendor();

  const [formData, setFormData] =
    useState({

      email: "",

      password: "",
    });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await loginVendor(
          formData
        );

        router.push(
          "/vendor/dashboard"
        );

      } catch (err) {

        console.log(err);
      }
    };

  return (

    <section
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-orange-50
      to-red-50
      px-4
    "
    >

      <div
        className="
        w-full
        max-w-md
        bg-white
        rounded-3xl
        shadow-2xl
        p-8
      "
      >

        {/* LOGO */}
        <div
          className="
          flex
          justify-center
          mb-6
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
              size={30}
              className="
              text-orange-500
            "
            />
          </div>
        </div>

        {/* TITLE */}
        <div
          className="
          text-center
          mb-8
        "
        >

          <h1
            className="
            text-3xl
            font-bold
            text-gray-800
          "
          >
            Vendor Login
          </h1>

          <p
            className="
            text-gray-500
            mt-2
          "
          >
            Login to manage your store
          </p>

        </div>

        {/* ERROR */}
        {error && (
          <div
            className="
            bg-red-100
            text-red-600
            p-3
            rounded-xl
            mb-4
            text-sm
          "
          >
            {error}
          </div>
        )}

        {/* FORM */}
        <form
          onSubmit={
            handleSubmit
          }
          className="
          space-y-5
        "
        >

          {/* EMAIL */}
          <div>

            <label
              className="
              text-sm
              font-medium
              text-gray-700
              mb-2
              block
            "
            >
              Email
            </label>

            <div
              className="
              flex
              items-center
              border
              rounded-xl
              px-4
              py-3
            "
            >

              <FaEnvelope
                className="
                text-gray-400
                mr-3
              "
              />

              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="
                w-full
                outline-none
              "
                onChange={
                  handleChange
                }
              />

            </div>
          </div>

          {/* PASSWORD */}
          <div>

            <label
              className="
              text-sm
              font-medium
              text-gray-700
              mb-2
              block
            "
            >
              Password
            </label>

            <div
              className="
              flex
              items-center
              border
              rounded-xl
              px-4
              py-3
            "
            >

              <FaLock
                className="
                text-gray-400
                mr-3
              "
              />

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="
                w-full
                outline-none
              "
                onChange={
                  handleChange
                }
              />

            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="
            w-full
            bg-orange-500
            hover:bg-orange-600
            text-white
            py-3
            rounded-xl
            font-semibold
            transition
          "
          >
            {loading
              ? "Please wait..."
              : "Login"}
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
          Don&apos;t have an account?{" "}

          <Link
            href="/vendorLogin/register"
            className="
            text-orange-500
            font-semibold
          "
          >
            Register
          </Link>
        </p>

      </div>

    </section>
  );
};

export default VendorLogin;