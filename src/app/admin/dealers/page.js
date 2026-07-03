"use client";

import { useEffect, useState } from "react";

import { getPendingDealers, approveDealer,rejectDealer} from "../../../../api/dealerApi";
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
    } catch (error) {
      console.error(error);
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
    } catch (error) {
      console.error(error);
      toast.error("Reject Failed");
    } finally {
      setActionLoading("");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="text-xl font-semibold">
          Loading Dealers...
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">

      <div className="flex items-center gap-3 mb-8">
        <FaUsers className="w-8 h-8 text-orange-500" />
        <h1 className="text-3xl font-bold">
          Pending Dealers
        </h1>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-orange-500 text-white">

            <tr>

              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                Phone
              </th>

              <th className="p-4 text-left">
                City
              </th>

              <th className="p-4 text-left">
                Bank
              </th>

              <th className="p-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {dealers.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-12 text-gray-500"
                >
                  No Pending Dealers
                </td>
              </tr>
            ) : (
              dealers.map((dealer) => (
                <tr
                  key={dealer._id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4 font-semibold">
                    {dealer.fullName}
                  </td>

                  <td className="p-4">
                    {dealer.email}
                  </td>

                  <td className="p-4">
                    {dealer.phone}
                  </td>

                  <td className="p-4">
                    {dealer.city}
                  </td>

                  <td className="p-4">
                    {dealer.bankName || "-"}
                  </td>

                  <td className="p-4">

                    <div className="flex justify-center gap-3">

                      <button
                        disabled={
                          actionLoading === dealer._id
                        }
                        onClick={() =>
                          handleApprove(dealer._id)
                        }
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                      >
                        <FaCheckCircle size={18} />
                        Approve
                      </button>

                      <button
                        disabled={
                          actionLoading === dealer._id
                        }
                        onClick={() =>
                          handleReject(dealer._id)
                        }
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                      >
                        <FaTimesCircle size={18} />
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