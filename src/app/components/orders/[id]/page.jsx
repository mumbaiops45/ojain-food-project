"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  FaArrowLeft,
  FaBox,
  FaTruck,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaSpinner,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { getOrderById } from "../../../../services/orders.service";
import { useAuth } from "../../../../contexts/AuthContext";

const statusStyles = {
  Placed: { bg: "bg-blue-100", text: "text-blue-700", icon: FaClock },
  Processing: { bg: "bg-indigo-100", text: "text-indigo-700", icon: FaClock },
  Packed: { bg: "bg-purple-100", text: "text-purple-700", icon: FaBox },
  Shipped: { bg: "bg-cyan-100", text: "text-cyan-700", icon: FaTruck },
  "Out for Delivery": { bg: "bg-orange-100", text: "text-orange-700", icon: FaTruck },
  Delivered: { bg: "bg-green-100", text: "text-green-700", icon: FaCheckCircle },
  Cancelled: { bg: "bg-red-100", text: "text-red-700", icon: FaTimesCircle },
  Returned: { bg: "bg-gray-100", text: "text-gray-700", icon: FaTimesCircle },
};

export default function OrderDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { user } = useAuth(); // ✅ using Context auth
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      toast.error("Please login to view order details");
      router.push("/customerLogin/login");
      return;
    }

    const fetchOrder = async () => {
      try {
        const res = await getOrderById(id);
        setOrder(res.data);
      } catch (err) {
        toast.error(err?.response?.data?.message || "Order not found");
        router.push("/orders");
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [id, user, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <FaSpinner className="animate-spin text-brand-green text-4xl" />
      </div>
    );
  }

  if (!order) return null;

  const StatusIcon = statusStyles[order.orderStatus]?.icon || FaBox;
  const statusClass = statusStyles[order.orderStatus] || { bg: "bg-gray-100", text: "text-gray-700" };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/orders"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-800 text-sm font-semibold mb-6"
        >
          <FaArrowLeft /> Back to Orders
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-gray-100">
            <div>
              <h1 className="text-2xl font-black text-gray-900">
                Order #{order._id.slice(-8)}
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Placed on {new Date(order.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <span
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold ${statusClass.bg} ${statusClass.text}`}
            >
              <StatusIcon size={16} />
              {order.orderStatus}
            </span>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-b border-gray-100">
            <div>
              <p className="text-xs text-gray-400 uppercase font-semibold">Payment</p>
              <p className="text-sm font-medium text-gray-800 mt-1">{order.paymentMethod}</p>
              <p className={`text-sm font-semibold mt-0.5 ${order.paymentStatus === "Paid" ? "text-green-600" : "text-orange-600"}`}>
                {order.paymentStatus}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-semibold">Delivery Address</p>
              {order.address && (
                <p className="text-sm text-gray-700 mt-1">
                  {order.address.street}, {order.address.city}, {order.address.state} - {order.address.pincode}
                </p>
              )}
            </div>
            {order.dealerCode && (
              <div>
                <p className="text-xs text-gray-400 uppercase font-semibold">Dealer</p>
                <p className="text-sm text-gray-700 mt-1">Code: {order.dealerCode}</p>
              </div>
            )}
            {order.trackingId && (
              <div>
                <p className="text-xs text-gray-400 uppercase font-semibold">Tracking ID</p>
                <p className="text-sm text-gray-700 mt-1">{order.trackingId}</p>
              </div>
            )}
          </div>

          {/* Order items */}
          <div className="py-6 border-b border-gray-100">
            <h3 className="text-sm font-bold text-gray-700 mb-4">Order Items</h3>
            <div className="divide-y divide-gray-100">
              {order.items.map((item, idx) => (
                <div key={idx} className="py-3 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-bold text-gray-900">₹{item.price * item.quantity}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-sm text-gray-500">Total Amount</p>
              <p className="text-3xl font-black text-brand-green">
                ₹{order.totalAmount?.toLocaleString("en-IN") || 0}
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-brand-green text-white px-6 py-3 rounded-xl font-bold hover:bg-[#1B5E20] transition"
            >
              Shop Again <FaArrowLeft className="rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}