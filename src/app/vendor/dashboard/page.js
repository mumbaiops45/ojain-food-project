"use client";

import { useEffect, useState } from "react";
import {
  FaWallet,
  FaMoneyBillWave,
  FaShoppingBag,
  FaUsers,
  FaChartLine,
  FaLeaf,
  FaMotorcycle,
  FaArrowRight,
  FaClock,
} from "react-icons/fa";
import { MdAttachMoney, MdAccessTime } from "react-icons/md";
import toast from "react-hot-toast";
import { getDealerDashboardService } from "../../../../services/dealer.service";

// ─── Skeleton ────────────────────────────────────────
const SkeletonStat = () => (
  <div className="bg-white rounded-2xl border border-gray-100 p-6 animate-pulse space-y-3">
    <div className="h-4 bg-gray-200 rounded w-1/2" />
    <div className="h-10 bg-gray-200 rounded w-3/4" />
  </div>
);

const SkeletonRow = () => (
  <div className="flex items-center gap-4 py-3 animate-pulse">
    <div className="w-10 h-10 rounded-xl bg-gray-200" />
    <div className="flex-1 space-y-2">
      <div className="h-4 bg-gray-200 rounded w-1/3" />
      <div className="h-3 bg-gray-100 rounded w-1/4" />
    </div>
    <div className="w-20 h-6 bg-gray-200 rounded-full" />
  </div>
);

// ─── Main Component ──────────────────────────────────
export default function DealerDashboardPage() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDashboard = async () => {
    try {
      const res = await getDealerDashboardService();
      setDashboard(res);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load dashboard");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const stats = dashboard?.dashboard?.stats || {};
  const dealerInfo = dashboard?.dashboard?.dealerInfo || {};
  const recentOrders = dashboard?.dashboard?.recentOrders || [];

  return (
    <div className="min-h-screen bg-green-50/50 pb-16">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <FaLeaf className="text-green-600" />
              <h1 className="text-3xl font-black text-green-800">Dealer Dashboard</h1>
            </div>
            <p className="text-sm text-green-600 mt-1">
              Welcome back, {dealerInfo.fullName || "Dealer"} 👋
            </p>
          </div>
          <div className="bg-white rounded-2xl px-5 py-3 shadow-sm border border-green-100">
            <p className="text-xs font-semibold text-gray-400">Your Dealer Code</p>
            <p className="text-xl font-black text-green-700 tracking-wider">
              {dealerInfo.dealerCode || "—"}
            </p>
          </div>
        </div>

        {/* ── Stats Grid ── */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => <SkeletonStat key={i} />)}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              icon={FaWallet}
              label="Wallet Balance"
              value={`₹${stats.walletBalance?.toFixed(2) || 0}`}
              color="#2E7D32"
              bg="#EBF5E9"
            />
            <StatCard
              icon={FaMoneyBillWave}
              label="Total Commission"
              value={`₹${stats.totalCommission?.toFixed(2) || 0}`}
              color="#FF8F00"
              bg="#FFF8E1"
            />
            <StatCard
              icon={FaShoppingBag}
              label="Total Orders"
              value={stats.totalOrders || 0}
              color="#1565C0"
              bg="#E3F2FD"
            />
            <StatCard
              icon={FaUsers}
              label="Referral Count"
              value={stats.referralCount || 0}
              color="#6A1B9A"
              bg="#F3E5F5"
            />
          </div>
        )}

        {/* ── Commission Rate & Quick Info ── */}
        {!loading && (
          <div className="bg-white rounded-2xl p-5 border border-green-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div>
                <p className="text-xs text-gray-400">Commission Rate</p>
                <p className="text-2xl font-black text-green-700">{stats.commissionRate || 10}%</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div>
                <p className="text-xs text-gray-400">Total Earnings</p>
                <p className="text-2xl font-black text-orange-500">
                  ₹{((stats.walletBalance || 0) + (stats.totalCommission || 0)).toFixed(2)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 px-4 py-2 rounded-full">
              <FaChartLine />
              <span>Active since {new Date().getFullYear()}</span>
            </div>
          </div>
        )}

        {/* ── Recent Orders ── */}
        <div className="bg-white rounded-2xl border border-green-100 overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-green-50 flex items-center justify-between">
            <h2 className="text-lg font-bold text-green-800 flex items-center gap-2">
              <FaMotorcycle className="text-green-600" /> Recent Orders
            </h2>
            <span className="text-xs text-gray-400">Last 5 orders</span>
          </div>

          {loading ? (
            <div className="p-6 space-y-2">
              {Array.from({ length: 3 }).map((_, i) => <SkeletonRow key={i} />)}
            </div>
          ) : recentOrders.length === 0 ? (
            <div className="p-10 text-center text-gray-400">
              <FaShoppingBag className="mx-auto text-4xl mb-3 opacity-30" />
              <p>No orders yet</p>
            </div>
          ) : (
            <div className="divide-y divide-green-50">
              {recentOrders.map((order) => (
                <div key={order._id} className="px-6 py-4 flex items-center justify-between hover:bg-green-50/50 transition">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-700">
                      <MdAttachMoney size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">
                        ₹{order.totalAmount?.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-400 flex items-center gap-1">
                        <MdAccessTime size={12} />
                        {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      order.orderStatus === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.orderStatus === "Cancelled"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {order.orderStatus}
                  </span>
                </div>
              ))}
            </div>
          )}
          <div className="px-6 py-3 bg-green-50/50 text-right text-xs text-green-600">
            Showing recent orders from your referrals
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="text-center text-xs text-gray-400 pt-4 border-t border-green-100">
          <FaLeaf className="inline mr-1 text-green-500" /> Ojain Dealer Portal – v1.0
        </div>
      </div>
    </div>
  );
}

// ─── Stat Card ────────────────────────────────────────
function StatCard({ icon: Icon, label, value, color, bg }) {
  return (
    <div
      className="bg-white rounded-2xl p-5 border border-green-100 shadow-sm hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start justify-between">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center`} style={{ background: bg }}>
          <Icon className="text-xl" style={{ color }} />
        </div>
        <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-green-50 text-green-600">
          Today
        </span>
      </div>
      <p className="text-2xl font-extrabold text-gray-800 mt-3">{value}</p>
      <p className="text-xs font-medium text-gray-400 mt-0.5">{label}</p>
    </div>
  );
}