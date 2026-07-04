"use client";

import { useEffect, useState } from "react";
import { getPendingDealers, approveDealer, rejectDealer } from "../../../../api/dealerApi";
import { FaCheckCircle, FaTimesCircle, FaUsers } from "react-icons/fa";
import { toast } from "react-hot-toast";

export default function PendingDealersPage() {
  const [dealers, setDealers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState("");

  const fetchDealers = async () => {
    try {
      setLoading(true);
      const res = await getPendingDealers();
      setDealers(res.data.dealers || res.data || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load pending dealers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDealers();
  }, []);

  const handleApprove = async (id) => {
    try {
      setActionLoading(id);
      await approveDealer(id);
      toast.success("Dealer Approved Successfully");
      fetchDealers();
    } catch {
      toast.error("Approval Failed");
    } finally {
      setActionLoading("");
    }
  };

  const handleReject = async (id) => {
    if (!window.confirm("Reject this dealer?")) return;
    try {
      setActionLoading(id);
      await rejectDealer(id);
      toast.success("Dealer Rejected");
      fetchDealers();
    } catch {
      toast.error("Reject Failed");
    } finally {
      setActionLoading("");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="text-xl font-semibold text-green-600">Loading Dealers...</div>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-2xl bg-green-100 text-green-700">
          <FaUsers className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-bold text-green-800">Pending Dealers</h1>
        <span className="ml-2 px-3 py-1 text-sm font-semibold bg-green-100 text-green-700 rounded-full">
          {dealers.length} pending
        </span>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-lg border border-green-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-green-600 to-green-700 text-white">
            <tr>
              <th className="p-4 text-left font-semibold">Name</th>
              <th className="p-4 text-left font-semibold">Email</th>
              <th className="p-4 text-left font-semibold">Phone</th>
              <th className="p-4 text-left font-semibold">City</th>
              <th className="p-4 text-left font-semibold">Bank</th>
              <th className="p-4 text-center font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dealers.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-12 text-gray-500">
                  No pending dealers found
                </td>
              </tr>
            ) : (
              dealers.map((dealer) => (
                <tr
                  key={dealer._id}
                  className="border-b border-green-50 hover:bg-green-50/50 transition-colors"
                >
                  <td className="p-4 font-semibold text-gray-800">{dealer.fullName}</td>
                  <td className="p-4 text-gray-600">{dealer.email}</td>
                  <td className="p-4 text-gray-600">{dealer.phone}</td>
                  <td className="p-4 text-gray-600">{dealer.city}</td>
                  <td className="p-4 text-gray-600">{dealer.bankName || "-"}</td>
                  <td className="p-4">
                    <div className="flex justify-center gap-3">
                      <button
                        disabled={actionLoading === dealer._id}
                        onClick={() => handleApprove(dealer._id)}
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition disabled:opacity-50"
                      >
                        <FaCheckCircle size={16} />
                        Approve
                      </button>
                      <button
                        disabled={actionLoading === dealer._id}
                        onClick={() => handleReject(dealer._id)}
                        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition disabled:opacity-50"
                      >
                        <FaTimesCircle size={16} />
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}