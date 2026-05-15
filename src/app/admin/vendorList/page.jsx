"use client";

import React, {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import {
  MdEdit,
  MdDelete,
  MdCheckCircle,
  MdClose,
} from "react-icons/md";


import { useAdmin } from "../../../../hooks/useAdmin";

export default function PendingVendorsPage() {

  const {
    vendors,
    loading,

    fetchPendingVendors,

    approveVendor,

    rejectVendor,
  } = useAdmin();

  const [editVendor, setEditVendor] =
    useState(null);

  const [formData, setFormData] =
    useState({
      fullName: "",
      email: "",
      phone: "",
      shopName: "",
      city: "",
    });

  // FETCH VENDORS
  useEffect(() => {
    fetchPendingVendors();
  }, []);

  // APPROVE
  const handleApprove =
    async (id) => {

      try {

        await approveVendor(id);

        toast.success(
          "Vendor Approved"
        );

        fetchPendingVendors();

      } catch (error) {

        toast.error(
          "Approve Failed"
        );
      }
    };

  // REJECT
  const handleReject =
    async (id) => {

      try {

        await rejectVendor(id);

        toast.success(
          "Vendor Rejected"
        );

        fetchPendingVendors();

      } catch (error) {

        toast.error(
          "Reject Failed"
        );
      }
    };

  // EDIT
  const handleEdit = (
    vendor
  ) => {

    setEditVendor(vendor);

    setFormData({
      fullName:
        vendor.fullName,

      email:
        vendor.email,

      phone:
        vendor.phone,

      shopName:
        vendor.shopName,

      city:
        vendor.city,
    });
  };

  // CHANGE
  const handleChange = (
    e
  ) => {

    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  // UPDATE
  const handleUpdate = async (
    e
  ) => {

    e.preventDefault();

    toast.success(
      "Vendor Updated"
    );

    setEditVendor(null);
  };

  return (

   <div className="p-4 sm:p-8">

  {/* HEADER */}
  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">

    <div>

      <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
        Vendor Management
      </h1>

      <p className="text-gray-500 mt-2 text-base sm:text-lg">
        Manage pending vendors
      </p>

    </div>

    <div className="bg-white border border-gray-200 shadow-sm px-6 py-4 rounded-2xl self-start sm:self-auto">

      <p className="text-sm text-gray-500">
        Total Vendors
      </p>

      <h2 className="text-3xl font-bold text-gray-900">
        {vendors?.length || 0}
      </h2>

    </div>

  </div>

  {/* TABLE */}
  <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">

    <div className="overflow-x-auto">

      <table className="w-full">

        {/* TABLE HEAD */}
        <thead className="bg-gray-50 border-b border-gray-200">

          <tr>

            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              #
            </th>

            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              Vendor
            </th>

            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              Email
            </th>

            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              Phone
            </th>

            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              Shop
            </th>

            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              City
            </th>

            <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600">
              Status
            </th>

            <th className="px-6 py-5 text-center text-sm font-semibold text-gray-600">
              Actions
            </th>

          </tr>

        </thead>

        {/* BODY */}
        <tbody>

          {vendors?.map(
            (
              vendor,
              index
            ) => (

              <tr
                key={vendor._id}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >

                {/* INDEX */}
                <td className="px-6 py-5 text-gray-700 font-medium">
                  {index + 1}
                </td>

                {/* VENDOR */}
                <td className="px-6 py-5">

                  <div className="flex items-center gap-4">

                    <div className="w-11 h-11 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">

                      {vendor?.fullName
                        ?.charAt(0)
                        ?.toUpperCase()}

                    </div>

                    <div>

                      <h3 className="font-semibold text-gray-900">
                        {vendor?.fullName}
                      </h3>

                      <p className="text-sm text-gray-500">
                        Vendor
                      </p>

                    </div>

                  </div>

                </td>

                {/* EMAIL */}
                <td className="px-6 py-5 text-gray-600">
                  {vendor?.email}
                </td>

                {/* PHONE */}
                <td className="px-6 py-5 text-gray-700">
                  {vendor?.phone}
                </td>

                {/* SHOP */}
                <td className="px-6 py-5 text-gray-700 font-medium">
                  {vendor?.shopName}
                </td>

                {/* CITY */}
                <td className="px-6 py-5 text-gray-600">
                  {vendor?.city}
                </td>

                {/* STATUS */}
                <td className="px-6 py-5">

                  <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-xs font-semibold">
                    Pending
                  </span>

                </td>

                {/* ACTIONS */}
                <td className="px-6 py-5">

                  <div className="flex items-center justify-center gap-3">

                    {/* APPROVE */}
                    <button
                      onClick={() =>
                        handleApprove(
                          vendor._id
                        )
                      }
                      className="px-4 h-10 rounded-xl bg-green-500 hover:bg-green-600 text-white text-sm font-medium transition"
                    >

                      Approve

                    </button>

                    {/* EDIT */}
                    <button
                      onClick={() =>
                        handleEdit(
                          vendor
                        )
                      }
                      className="px-4 h-10 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition"
                    >

                      Edit

                    </button>

                    {/* DELETE */}
                    <button
                      onClick={() =>
                        handleReject(
                          vendor._id
                        )
                      }
                      className="px-4 h-10 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-medium transition"
                    >

                      Delete

                    </button>

                  </div>

                </td>

              </tr>

            )
          )}

        </tbody>

      </table>

    </div>

  </div>

</div>
  );
}