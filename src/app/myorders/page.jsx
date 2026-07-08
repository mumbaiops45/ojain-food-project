"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    FaBox,
    FaShoppingBag,
    FaTruck,
    FaCheckCircle,
    FaClock,
    FaTimesCircle,
    FaEye,
    FaChevronRight,
    FaSpinner,
    FaWallet,
} from "react-icons/fa";
import toast from "react-hot-toast";
// import { getMyOrders } from "../../../services/orders.service";
import { getMyOrders } from "../../../services/orders.service";
// import { useAuth } from "../../../../contexts/AuthContext";
import { useAuth } from "../../contexts/AuthContext";



// ── Helper ──
const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });

// ── Status styles ──
const statusStyles = {
    Placed: { bg: "bg-blue-100", text: "text-blue-700", icon: FaClock },
    Processing: { bg: "bg-indigo-100", text: "text-indigo-700", icon: FaClock },
    Packed: { bg: "bg-purple-100", text: "text-purple-700", icon: FaWallet },
    Shipped: { bg: "bg-cyan-100", text: "text-cyan-700", icon: FaTruck },
    "Out for Delivery": { bg: "bg-orange-100", text: "text-orange-700", icon: FaTruck },
    Delivered: { bg: "bg-green-100", text: "text-green-700", icon: FaCheckCircle },
    Cancelled: { bg: "bg-red-100", text: "text-red-700", icon: FaTimesCircle },
    Returned: { bg: "bg-gray-100", text: "text-gray-700", icon: FaTimesCircle },
};

// ── Helper: get user from localStorage ──
// const getUserFromStorage = () => {
//   try {
//     const raw = localStorage.getItem("auth-storage");
//     if (!raw) return null;
//     const parsed = JSON.parse(raw);
//     return parsed?.state?.user || null;
//   } catch {
//     return null;
//   }
// };

export default function MyOrdersPage() {
    const router = useRouter();
    const { user, loading } = useAuth();
    const [orders, setOrders] = useState([]);
    //   const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check login status from localStorage
        if (loading) return;

        if (!user) {
            toast.error("Please login to view order details");
            router.push("/customerLogin/login");
            return;
        }
        const fetchOrders = async () => {
            try {
                const res = await getMyOrders();
                setOrders(res.data || []);
            } catch (err) {
                toast.error(err?.response?.data?.message || "Failed to fetch orders");
            } 
        };
        fetchOrders();
    }, [router, user, loading]);

    const totalOrders = orders.length;
    const totalSpent = orders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);
    const pendingOrders = orders.filter((o) =>
        ["Placed", "Processing", "Packed"].includes(o.orderStatus)
    ).length;
    const deliveredOrders = orders.filter((o) => o.orderStatus === "Delivered").length;

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <FaSpinner className="animate-spin text-brand-green text-4xl mx-auto" />
                    <p className="mt-4 text-gray-500">Loading your orders…</p>
                </div>
            </div>
        );
    }

    if (!loading && orders.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
                <FaBox size={64} className="text-gray-300 mb-4" />
                <h2 className="text-2xl font-bold text-gray-700">No orders yet</h2>
                <p className="text-gray-400 mt-2">Looks like you haven’t placed any orders.</p>
                <Link
                    href="/"
                    className="mt-6 inline-flex items-center gap-2 bg-brand-green text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1B5E20] transition"
                >
                    Start Shopping <FaChevronRight />
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900">My Orders</h1>
                        <p className="text-sm text-gray-500 mt-1">
                            {totalOrders} order{totalOrders > 1 ? "s" : ""} placed
                        </p>
                    </div>
                    <Link
                        href="/"
                        className="text-brand-green hover:underline text-sm font-semibold flex items-center gap-1"
                    >
                        Continue Shopping <FaChevronRight size={14} />
                    </Link>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <StatCard
                        label="Total Orders"
                        value={totalOrders}
                        icon={FaShoppingBag}
                        color="text-brand-green"
                        bg="bg-brand-green-pale"
                    />
                    <StatCard
                        label="Total Spent"
                        value={`₹${totalSpent.toLocaleString("en-IN")}`}
                        icon={FaWallet}
                        color="text-amber-600"
                        bg="bg-amber-50"
                    />
                    <StatCard
                        label="Pending"
                        value={pendingOrders}
                        icon={FaClock}
                        color="text-orange-600"
                        bg="bg-orange-50"
                    />
                    <StatCard
                        label="Delivered"
                        value={deliveredOrders}
                        icon={FaCheckCircle}
                        color="text-green-600"
                        bg="bg-green-50"
                    />
                </div>

                {/* Orders Table */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 border-b border-gray-100">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold text-gray-600">Order ID</th>
                                    <th className="px-6 py-4 text-left font-semibold text-gray-600">Date</th>
                                    <th className="px-6 py-4 text-left font-semibold text-gray-600">Items</th>
                                    <th className="px-6 py-4 text-left font-semibold text-gray-600">Total</th>
                                    <th className="px-6 py-4 text-left font-semibold text-gray-600">Status</th>
                                    <th className="px-6 py-4 text-right font-semibold text-gray-600">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {orders.map((order) => {
                                    const StatusIcon = statusStyles[order.orderStatus]?.icon || FaBox;
                                    const statusClass = statusStyles[order.orderStatus] || { bg: "bg-gray-100", text: "text-gray-700" };
                                    return (
                                        <tr key={order._id} className="hover:bg-gray-50 transition">
                                            <td className="px-6 py-4 font-mono text-xs text-gray-500">
                                                #{order._id.slice(-8)}
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">
                                                {formatDate(order.createdAt)}
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">
                                                {order.items?.length || 0} item{order.items?.length > 1 ? "s" : ""}
                                            </td>
                                            <td className="px-6 py-4 font-bold text-gray-900">
                                                ₹{order.totalAmount?.toLocaleString("en-IN") || 0}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${statusClass.bg} ${statusClass.text}`}
                                                >
                                                    <StatusIcon size={13} />
                                                    {order.orderStatus}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <Link
                                                    href={`/orders/${order._id}`}
                                                    className="inline-flex items-center gap-1 text-brand-green hover:text-[#1B5E20] font-semibold text-sm"
                                                >
                                                    View <FaEye size={14} />
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ── Stat Card ──
function StatCard({ label, value, icon: Icon, color, bg }) {
    return (
        <div className={`${bg} rounded-2xl p-5 flex items-center gap-4 border border-gray-100`}>
            <div className={`p-3 rounded-xl ${bg} bg-opacity-80`}>
                <Icon className={`w-6 h-6 ${color}`} />
            </div>
            <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{label}</p>
                <p className={`text-2xl font-bold ${color} mt-0.5`}>{value}</p>
            </div>
        </div>
    );
}