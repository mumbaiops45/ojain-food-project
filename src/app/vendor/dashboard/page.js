"use client";

import {
  useEffect,
  useState,
} from "react";

import { getVendorDashboardService } from "../../../../services/vendor.service";
import toast from "react-hot-toast";

export default function VendorDashboardPage() {
  const [dashboard, setDashboard] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  // =========================================
  // FETCH DASHBOARD
  // =========================================
  const fetchDashboard =
    async () => {
      try {
        const res =
          await getVendorDashboardService();

        setDashboard(res);
      } catch (error) {
        console.log(error);

        toast.error("Failed to load dashboard");
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchDashboard();
  }, []);

  // =========================================
  // LOADING
  // =========================================
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading Dashboard...
      </div>
    );
  }

  const stats =
    dashboard?.stats || {};

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Vendor Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your store &
          orders easily.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        {/* PRODUCTS */}
        <div className="bg-white rounded-3xl shadow-md p-6 border border-gray-100">
          <h2 className="text-sm text-gray-500">
            Total Products
          </h2>

          <p className="text-4xl font-bold text-orange-500 mt-3">
            {
              stats.totalProducts
            }
          </p>
        </div>

        {/* ORDERS */}
        <div className="bg-white rounded-3xl shadow-md p-6 border border-gray-100">
          <h2 className="text-sm text-gray-500">
            Total Orders
          </h2>

          <p className="text-4xl font-bold text-blue-500 mt-3">
            {
              stats.totalOrders
            }
          </p>
        </div>

        {/* PENDING */}
        <div className="bg-white rounded-3xl shadow-md p-6 border border-gray-100">
          <h2 className="text-sm text-gray-500">
            Pending Orders
          </h2>

          <p className="text-4xl font-bold text-yellow-500 mt-3">
            {
              stats.pendingOrders
            }
          </p>
        </div>

        {/* SALES */}
        <div className="bg-white rounded-3xl shadow-md p-6 border border-gray-100">
          <h2 className="text-sm text-gray-500">
            Total Revenue
          </h2>

          <p className="text-4xl font-bold text-green-600 mt-3">
            ₹
            {
              stats.totalSales
            }
          </p>
        </div>
      </div>

      {/* RECENT ORDERS */}
      <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Recent Orders
        </h2>

        <div className="space-y-4">
          {dashboard?.recentOrders
            ?.length > 0 ? (
            dashboard.recentOrders.map(
              (order) => (
                <div
                  key={
                    order._id
                  }
                  className="flex items-center justify-between bg-gray-50 rounded-2xl p-4"
                >
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {
                        order
                          .user
                          ?.name
                      }
                    </h3>

                    <p className="text-sm text-gray-500">
                      ₹
                      {
                        order.totalAmount
                      }
                    </p>
                  </div>

                  <span
                    className={`px-4 py-1 rounded-full text-sm font-medium
                    ${
                      order.orderStatus ===
                      "Delivered"
                        ? "bg-green-100 text-green-600"
                        : order.orderStatus ===
                          "Cancelled"
                        ? "bg-red-100 text-red-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {
                      order.orderStatus
                    }
                  </span>
                </div>
              )
            )
          ) : (
            <p className="text-gray-500">
              No recent orders
            </p>
          )}
        </div>
      </div>

      {/* RECENT PRODUCTS */}
      <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Recent Products
        </h2>

        <div className="space-y-4">
          {dashboard?.recentProducts
            ?.length > 0 ? (
            dashboard.recentProducts.map(
              (product) => (
                <div
                  key={
                    product._id
                  }
                  className="flex items-center justify-between bg-gray-50 rounded-2xl p-4"
                >
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {
                        product.name
                      }
                    </h3>

                    <p className="text-sm text-gray-500">
                      ₹
                      {
                        product.price
                      }
                    </p>
                  </div>

                  <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium">
                    {
                      product.category
                    }
                  </span>
                </div>
              )
            )
          ) : (
            <p className="text-gray-500">
              No products found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}