// "use client";

// import { useEffect, useState } from "react";
// import { getPendingDealers, approveDealer, rejectDealer } from "../../../../api/dealerApi";
// import { FaCheckCircle, FaTimesCircle, FaUsers } from "react-icons/fa";
// import { toast } from "react-hot-toast";

// export default function PendingDealersPage() {
//   const [dealers, setDealers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [actionLoading, setActionLoading] = useState("");

//   const fetchDealers = async () => {
//     try {
//       setLoading(true);
//       const res = await getPendingDealers();
//       setDealers(res.data.dealers || res.data || []);
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to load pending dealers");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDealers();
//   }, []);

//   const handleApprove = async (id) => {
//     try {
//       setActionLoading(id);
//       await approveDealer(id);
//       toast.success("Dealer Approved Successfully");
//       fetchDealers();
//     } catch {
//       toast.error("Approval Failed");
//     } finally {
//       setActionLoading("");
//     }
//   };

//   const handleReject = async (id) => {
//     if (!window.confirm("Reject this dealer?")) return;
//     try {
//       setActionLoading(id);
//       await rejectDealer(id);
//       toast.success("Dealer Rejected");
//       fetchDealers();
//     } catch {
//       toast.error("Reject Failed");
//     } finally {
//       setActionLoading("");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-[70vh]">
//         <div className="text-xl font-semibold text-green-600">Loading Dealers...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-8">
//       {/* Header */}
//       <div className="flex items-center gap-3 mb-8">
//         <div className="p-3 rounded-2xl bg-green-100 text-green-700">
//           <FaUsers className="w-6 h-6" />
//         </div>
//         <h1 className="text-3xl font-bold text-green-800">Pending Dealers</h1>
//         <span className="ml-2 px-3 py-1 text-sm font-semibold bg-green-100 text-green-700 rounded-full">
//           {dealers.length} pending
//         </span>
//       </div>

//       {/* Table */}
//       <div className="bg-white rounded-2xl shadow-lg border border-green-100 overflow-hidden">
//         <table className="w-full">
//           <thead className="bg-gradient-to-r from-green-600 to-green-700 text-white">
//             <tr>
//               <th className="p-4 text-left font-semibold">Name</th>
//               <th className="p-4 text-left font-semibold">Email</th>
//               <th className="p-4 text-left font-semibold">Phone</th>
//               <th className="p-4 text-left font-semibold">City</th>
//               <th className="p-4 text-left font-semibold">Bank</th>
//               <th className="p-4 text-center font-semibold">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {dealers.length === 0 ? (
//               <tr>
//                 <td colSpan={6} className="text-center py-12 text-gray-500">
//                   No pending dealers found
//                 </td>
//               </tr>
//             ) : (
//               dealers.map((dealer) => (
//                 <tr
//                   key={dealer._id}
//                   className="border-b border-green-50 hover:bg-green-50/50 transition-colors"
//                 >
//                   <td className="p-4 font-semibold text-gray-800">{dealer.fullName}</td>
//                   <td className="p-4 text-gray-600">{dealer.email}</td>
//                   <td className="p-4 text-gray-600">{dealer.phone}</td>
//                   <td className="p-4 text-gray-600">{dealer.city}</td>
//                   <td className="p-4 text-gray-600">{dealer.bankName || "-"}</td>
//                   <td className="p-4">
//                     <div className="flex justify-center gap-3">
//                       <button
//                         disabled={actionLoading === dealer._id}
//                         onClick={() => handleApprove(dealer._id)}
//                         className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition disabled:opacity-50"
//                       >
//                         <FaCheckCircle size={16} />
//                         Approve
//                       </button>
//                       <button
//                         disabled={actionLoading === dealer._id}
//                         onClick={() => handleReject(dealer._id)}
//                         className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition disabled:opacity-50"
//                       >
//                         <FaTimesCircle size={16} />
//                         Reject
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import {
//   MdSearch,
//   MdDeleteOutline,
//   MdCheckCircle,
//   MdPendingActions,
//   MdRefresh,
// } from "react-icons/md";
// import { FaUsers } from "react-icons/fa";
// import { toast } from "react-hot-toast";

// // Import your dealer service functions (adjust path)
// import {
//   getAllDealers,
//   approveDealer,
//   unapproveDealer,
//   rejectDealer,
// } from "../../../../api/dealerApi";

// // ─── Helpers ────────────────────────────────────────────────
// const statusColor = (isApproved) => ({
//   bg: isApproved ? "#EBF5E9" : "#FFF8E1",
//   color: isApproved ? "#2E7D32" : "#E65100",
//   label: isApproved ? "Approved" : "Pending",
// });

// // ─── Skeleton ──────────────────────────────────────────────
// const SkeletonRow = () => (
//   <tr className="animate-pulse border-t" style={{ borderColor: "#E8F5E9" }}>
//     {[...Array(7)].map((_, i) => (
//       <td key={i} className="p-4">
//         <div className="h-4 rounded" style={{ background: "#E8F5E9" }} />
//       </td>
//     ))}
//   </tr>
// );

// // ─── Main Component ─────────────────────────────────────────
// export default function DealersListPage() {
//   const [dealers, setDealers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [filterStatus, setFilterStatus] = useState("All"); // All, Approved, Pending
//   const [actionLoading, setActionLoading] = useState(null);

//   // ── Fetch ALL dealers ─────────────────────────────────────
// const fetchDealers = async () => {
//   try {
//     setLoading(true);
//     const res = await getAllDealers();
//     const data = res?.data?.dealers || res?.data || res || [];
//     const dealersArray = Array.isArray(data) ? data : [];
//     // ✅ Sort by createdAt descending (newest first)
//     const sorted = dealersArray.sort(
//       (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//     );
//     setDealers(sorted);
//   } catch (error) {
//     console.error("Error fetching dealers:", error);
//     toast.error("Failed to load dealers");
//   } finally {
//     setLoading(false);
//   }
// };

//   useEffect(() => {
//     fetchDealers();
//   }, []);

//   // ── Actions ──────────────────────────────────────────────
//   const handleApprove = async (id) => {
//     if (!confirm("Approve this dealer?")) return;
//     setActionLoading(id);
//     try {
//       await approveDealer(id);
//       toast.success("Dealer approved");
//       fetchDealers(); // re‑fetch – dealer stays, status becomes "Approved"
//     } catch (err) {
//       toast.error("Failed to approve");
//     } finally {
//       setActionLoading(null);
//     }
//   };

//   const handleUnapprove = async (id) => {
//     if (!confirm("Unapprove this dealer? They will lose access.")) return;
//     setActionLoading(id);
//     try {
//       await unapproveDealer(id);
//       toast.success("Dealer unapproved");
//       fetchDealers(); // re‑fetch – dealer stays, status becomes "Pending"
//     } catch (err) {
//       toast.error("Failed to unapprove");
//     } finally {
//       setActionLoading(null);
//     }
//   };

//   const handleReject = async (id) => {
//     if (!confirm("Delete this dealer permanently? This cannot be undone.")) return;
//     setActionLoading(id);
//     try {
//       await rejectDealer(id);
//       toast.success("Dealer rejected");
//       fetchDealers(); // re‑fetch – dealer is removed from database
//     } catch (err) {
//       toast.error("Failed to reject");
//     } finally {
//       setActionLoading(null);
//     }
//   };

//   // ── Filtering ─────────────────────────────────────────────
//   const filtered = dealers.filter((d) => {
//     const matchSearch =
//       d.fullName?.toLowerCase().includes(search.toLowerCase()) ||
//       d.email?.toLowerCase().includes(search.toLowerCase()) ||
//       d.dealerCode?.toLowerCase().includes(search.toLowerCase()) ||
//       d.phone?.includes(search);
//     const matchStatus =
//       filterStatus === "All" ||
//       (filterStatus === "Approved" && d.isApproved) ||
//       (filterStatus === "Pending" && !d.isApproved);
//     return matchSearch && matchStatus;
//   });

//   // ── Render ──────────────────────────────────────────────
//   return (
//     <div className="space-y-6 p-4 md:p-6">

//       {/* Header */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//         <div>
//           <h1 className="text-2xl font-bold" style={{ color: "#1B5E20" }}>
//             Dealers Management
//           </h1>
//           <p className="text-sm mt-0.5" style={{ color: "#66BB6A" }}>
//             All registered dealers – approve, unapprove, or remove.
//           </p>
//         </div>
//         <button
//           onClick={fetchDealers}
//           className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-all"
//           style={{
//             background: "#FFFFFF",
//             borderColor: "#C8E6C9",
//             color: "#2E7D32",
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.background = "#EBF5E9";
//             e.currentTarget.style.borderColor = "#A5D6A7";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.background = "#FFFFFF";
//             e.currentTarget.style.borderColor = "#C8E6C9";
//           }}
//         >
//           <MdRefresh className="text-lg" /> Refresh
//         </button>
//       </div>

//       {/* Search + Filter */}
//       <div
//         className="rounded-2xl border p-4 flex flex-col sm:flex-row sm:items-center gap-4"
//         style={{ background: "#FFFFFF", borderColor: "#C8E6C9" }}
//       >
//         <div
//           className="flex items-center gap-2 flex-1 rounded-xl px-4 py-2.5 border"
//           style={{ background: "#F9FFF6", borderColor: "#C8E6C9" }}
//         >
//           <MdSearch className="text-xl shrink-0" style={{ color: "#66BB6A" }} />
//           <input
//             type="text"
//             placeholder="Search by name, email, code, phone…"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="bg-transparent outline-none w-full text-sm"
//             style={{ color: "#333" }}
//           />
//         </div>

//         <div
//           className="flex items-center gap-1 p-1 rounded-xl flex-wrap"
//           style={{ background: "#F0F7F0" }}
//         >
//           {["All", "Approved", "Pending"].map((s) => (
//             <button
//               key={s}
//               onClick={() => setFilterStatus(s)}
//               className="px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
//               style={
//                 filterStatus === s
//                   ? { background: "#2E7D32", color: "#fff", boxShadow: "0 2px 8px rgba(46,125,50,0.25)" }
//                   : { color: "#66BB6A" }
//               }
//             >
//               {s}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Table */}
//       <div
//         className="rounded-2xl border overflow-hidden"
//         style={{
//           background: "#FFFFFF",
//           borderColor: "#C8E6C9",
//           boxShadow: "0 1px 12px rgba(46,125,50,0.07)",
//         }}
//       >
//         <div className="overflow-x-auto">
//           <table className="w-full min-w-225">
//             <thead>
//               <tr style={{ background: "#F0F7F0", borderBottom: "2px solid #C8E6C9" }}>
//                 <th className="px-4 py-3.5 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#2E7D32" }}>
//                   #
//                 </th>
//                 <th className="px-4 py-3.5 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#2E7D32" }}>
//                   Dealer
//                 </th>
//                 <th className="px-4 py-3.5 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#2E7D32" }}>
//                   Code
//                 </th>
//                 <th className="px-4 py-3.5 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#2E7D32" }}>
//                   Phone
//                 </th>
//                 <th className="px-4 py-3.5 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#2E7D32" }}>
//                   City
//                 </th>
//                 <th className="px-4 py-3.5 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#2E7D32" }}>
//                   Status
//                 </th>
//                 <th className="px-4 py-3.5 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#2E7D32" }}>
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {loading ? (
//                 Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} />)
//               ) : filtered.length === 0 ? (
//                 <tr>
//                   <td colSpan={7}>
//                     <div className="flex flex-col items-center justify-center py-16 text-center">
//                       <div
//                         className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
//                         style={{ background: "#EBF5E9" }}
//                       >
//                         <FaUsers className="text-3xl" style={{ color: "#66BB6A" }} />
//                       </div>
//                       <h3 className="text-base font-bold mb-1" style={{ color: "#1B5E20" }}>
//                         No Dealers Found
//                       </h3>
//                       <p className="text-sm" style={{ color: "#81C784" }}>
//                         {search ? "Try adjusting your search." : "No dealers registered yet."}
//                       </p>
//                     </div>
//                   </td>
//                 </tr>
//               ) : (
//                 filtered.map((dealer, idx) => {
//                   const status = statusColor(dealer.isApproved);
//                   const isActionLoading = actionLoading === dealer._id;

//                   return (
//                     <tr
//                       key={dealer._id}
//                       className="transition-colors duration-150"
//                       style={{ borderTop: "1px solid #E8F5E9" }}
//                       onMouseEnter={(e) => (e.currentTarget.style.background = "#F9FFF6")}
//                       onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
//                     >
//                       <td className="px-4 py-4">
//                         <span
//                           className="text-xs font-bold px-2 py-1 rounded-lg"
//                           style={{ background: "#F0F7F0", color: "#2E7D32" }}
//                         >
//                           #{idx + 1}
//                         </span>
//                       </td>
//                       <td className="px-4 py-4">
//                         <div className="flex items-center gap-3">
//                           <div
//                             className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0"
//                             style={{
//                               background: "linear-gradient(135deg, #FF8F00, #FFB300)",
//                               color: "#fff",
//                             }}
//                           >
//                             {(dealer.fullName?.[0] || "?").toUpperCase()}
//                           </div>
//                           <div>
//                             <p className="font-semibold text-sm" style={{ color: "#1B5E20" }}>
//                               {dealer.fullName || "—"}
//                             </p>
//                             <p className="text-xs" style={{ color: "#81C784" }}>
//                               {dealer.email || "—"}
//                             </p>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-4 py-4 font-mono text-xs" style={{ color: "#555" }}>
//                         {dealer.dealerCode || "—"}
//                       </td>
//                       <td className="px-4 py-4 text-xs" style={{ color: "#555" }}>
//                         {dealer.phone || "—"}
//                       </td>
//                       <td className="px-4 py-4 text-xs" style={{ color: "#555" }}>
//                         {dealer.city || "—"}
//                       </td>
//                       <td className="px-4 py-4">
//                         <span
//                           className="px-3 py-1 rounded-full text-xs font-bold border"
//                           style={{
//                             background: status.bg,
//                             color: status.color,
//                             borderColor: status.color + "40",
//                           }}
//                         >
//                           {status.label}
//                         </span>
//                       </td>
//                       <td className="px-4 py-4">
//                         <div className="flex items-center gap-2 flex-wrap">
//                           {dealer.isApproved ? (
//                             // ✅ If APPROVED → show "Unapprove" + "Reject"
//                             <>
//                               <button
//                                 onClick={() => handleUnapprove(dealer._id)}
//                                 disabled={isActionLoading}
//                                 className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border"
//                                 style={{
//                                   background: "rgba(255,143,0,0.08)",
//                                   color: "#E65100",
//                                   borderColor: "rgba(255,143,0,0.2)",
//                                 }}
//                                 onMouseEnter={(e) => {
//                                   if (!isActionLoading) e.currentTarget.style.background = "rgba(255,143,0,0.18)";
//                                 }}
//                                 onMouseLeave={(e) => {
//                                   if (!isActionLoading) e.currentTarget.style.background = "rgba(255,143,0,0.08)";
//                                 }}
//                               >
//                                 <MdPendingActions className="text-sm" />
//                                 {isActionLoading ? "..." : "Unapprove"}
//                               </button>
//                               <button
//                                 onClick={() => handleReject(dealer._id)}
//                                 disabled={isActionLoading}
//                                 className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border"
//                                 style={{
//                                   background: "rgba(239,68,68,0.08)",
//                                   color: "#EF4444",
//                                   borderColor: "rgba(239,68,68,0.2)",
//                                 }}
//                                 onMouseEnter={(e) => {
//                                   if (!isActionLoading) e.currentTarget.style.background = "rgba(239,68,68,0.18)";
//                                 }}
//                                 onMouseLeave={(e) => {
//                                   if (!isActionLoading) e.currentTarget.style.background = "rgba(239,68,68,0.08)";
//                                 }}
//                               >
//                                 <MdDeleteOutline className="text-sm" />
//                                 {isActionLoading ? "..." : "Reject"}
//                               </button>
//                             </>
//                           ) : (
//                             // ❌ If PENDING → show "Approve" + "Reject"
//                             <>
//                               <button
//                                 onClick={() => handleApprove(dealer._id)}
//                                 disabled={isActionLoading}
//                                 className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border"
//                                 style={{
//                                   background: "rgba(46,125,50,0.08)",
//                                   color: "#2E7D32",
//                                   borderColor: "rgba(46,125,50,0.2)",
//                                 }}
//                                 onMouseEnter={(e) => {
//                                   if (!isActionLoading) e.currentTarget.style.background = "rgba(46,125,50,0.18)";
//                                 }}
//                                 onMouseLeave={(e) => {
//                                   if (!isActionLoading) e.currentTarget.style.background = "rgba(46,125,50,0.08)";
//                                 }}
//                               >
//                                 <MdCheckCircle className="text-sm" />
//                                 {isActionLoading ? "..." : "Approve"}
//                               </button>
//                               <button
//                                 onClick={() => handleReject(dealer._id)}
//                                 disabled={isActionLoading}
//                                 className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border"
//                                 style={{
//                                   background: "rgba(239,68,68,0.08)",
//                                   color: "#EF4444",
//                                   borderColor: "rgba(239,68,68,0.2)",
//                                 }}
//                                 onMouseEnter={(e) => {
//                                   if (!isActionLoading) e.currentTarget.style.background = "rgba(239,68,68,0.18)";
//                                 }}
//                                 onMouseLeave={(e) => {
//                                   if (!isActionLoading) e.currentTarget.style.background = "rgba(239,68,68,0.08)";
//                                 }}
//                               >
//                                 <MdDeleteOutline className="text-sm" />
//                                 {isActionLoading ? "..." : "Reject"}
//                               </button>
//                             </>
//                           )}
//                         </div>
//                       </td>
//                     </tr>
//                   );
//                 })
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Footer stats */}
//         {!loading && filtered.length > 0 && (
//           <div
//             className="px-5 py-3 flex items-center justify-between border-t text-xs"
//             style={{ borderColor: "#E8F5E9", color: "#81C784" }}
//           >
//             <span>
//               Showing <span className="font-bold" style={{ color: "#2E7D32" }}>{filtered.length}</span> of{" "}
//               <span className="font-bold" style={{ color: "#2E7D32" }}>{dealers.length}</span> dealers
//             </span>
//             <span className="flex items-center gap-2">
//               <span className="flex items-center gap-1">
//                 <MdCheckCircle className="text-sm" style={{ color: "#2E7D32" }} />
//                 {dealers.filter(d => d.isApproved).length} Approved
//               </span>
//               <span className="flex items-center gap-1">
//                 <MdPendingActions className="text-sm" style={{ color: "#E65100" }} />
//                 {dealers.filter(d => !d.isApproved).length} Pending
//               </span>
//             </span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import {
  MdSearch,
  MdDeleteOutline,
  MdCheckCircle,
  MdPendingActions,
  MdRefresh,
} from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast"; // <-- import Toaster

// Import your dealer service functions (adjust path)
import {
  getAllDealers,
  approveDealer,
  unapproveDealer,
  rejectDealer,
} from "../../../../api/dealerApi";

// ─── Helpers ────────────────────────────────────────────────
const statusColor = (isApproved) => ({
  bg: isApproved ? "#EBF5E9" : "#FFF8E1",
  color: isApproved ? "#2E7D32" : "#E65100",
  label: isApproved ? "Approved" : "Pending",
});

// ─── Skeleton ──────────────────────────────────────────────
const SkeletonRow = () => (
  <tr className="animate-pulse border-t" style={{ borderColor: "#E8F5E9" }}>
    {[...Array(7)].map((_, i) => (
      <td key={i} className="p-4">
        <div className="h-4 rounded" style={{ background: "#E8F5E9" }} />
      </td>
    ))}
  </tr>
);

// ─── Main Component ─────────────────────────────────────────
export default function DealersListPage() {
  const [dealers, setDealers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [actionLoading, setActionLoading] = useState(null);

  // ── Fetch ALL dealers ─────────────────────────────────────
  const fetchDealers = async () => {
    try {
      setLoading(true);
      const res = await getAllDealers();
      const data = res?.data?.dealers || res?.data || res || [];
      const dealersArray = Array.isArray(data) ? data : [];
      const sorted = dealersArray.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setDealers(sorted);
    } catch (error) {
      console.error("Error fetching dealers:", error);
      toast.error("Failed to load dealers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDealers();
  }, []);

  // ── Actions (without confirm dialogs) ─────────────────────
  const handleApprove = async (id) => {
    setActionLoading(id);
    try {
      await approveDealer(id);
      toast.success("Dealer approved ✅");
      fetchDealers();
    } catch (err) {
      toast.error("Failed to approve");
    } finally {
      setActionLoading(null);
    }
  };

  const handleUnapprove = async (id) => {
    setActionLoading(id);
    try {
      await unapproveDealer(id);
      toast.success("Dealer unapproved ⏳");
      fetchDealers();
    } catch (err) {
      toast.error("Failed to unapprove");
    } finally {
      setActionLoading(null);
    }
  };

  const handleReject = async (id) => {
    setActionLoading(id);
    try {
      await rejectDealer(id);
      toast.success("Dealer rejected 🗑️");
      fetchDealers();
    } catch (err) {
      toast.error("Failed to reject");
    } finally {
      setActionLoading(null);
    }
  };

  // ── Filtering ─────────────────────────────────────────────
  const filtered = dealers.filter((d) => {
    const matchSearch =
      d.fullName?.toLowerCase().includes(search.toLowerCase()) ||
      d.email?.toLowerCase().includes(search.toLowerCase()) ||
      d.dealerCode?.toLowerCase().includes(search.toLowerCase()) ||
      d.phone?.includes(search);
    const matchStatus =
      filterStatus === "All" ||
      (filterStatus === "Approved" && d.isApproved) ||
      (filterStatus === "Pending" && !d.isApproved);
    return matchSearch && matchStatus;
  });

  // ── Render ──────────────────────────────────────────────
  return (
    <>
      {/* ✅ Toaster – renders toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
            borderRadius: "12px",
          },
        }}
      />

      <div className="space-y-6 p-4 md:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: "#1B5E20" }}>
              Dealers Management
            </h1>
            <p className="text-sm mt-0.5" style={{ color: "#66BB6A" }}>
              All registered dealers – approve, unapprove, or remove.
            </p>
          </div>
          <button
            onClick={fetchDealers}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-all"
            style={{
              background: "#FFFFFF",
              borderColor: "#C8E6C9",
              color: "#2E7D32",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#EBF5E9";
              e.currentTarget.style.borderColor = "#A5D6A7";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FFFFFF";
              e.currentTarget.style.borderColor = "#C8E6C9";
            }}
          >
            <MdRefresh className="text-lg" /> Refresh
          </button>
        </div>

        {/* Search + Filter */}
        <div
          className="rounded-2xl border p-4 flex flex-col sm:flex-row sm:items-center gap-4"
          style={{ background: "#FFFFFF", borderColor: "#C8E6C9" }}
        >
          <div
            className="flex items-center gap-2 flex-1 rounded-xl px-4 py-2.5 border"
            style={{ background: "#F9FFF6", borderColor: "#C8E6C9" }}
          >
            <MdSearch className="text-xl shrink-0" style={{ color: "#66BB6A" }} />
            <input
              type="text"
              placeholder="Search by name, email, code, phone…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none w-full text-sm"
              style={{ color: "#333" }}
            />
          </div>

          <div
            className="flex items-center gap-1 p-1 rounded-xl flex-wrap"
            style={{ background: "#F0F7F0" }}
          >
            {["All", "Approved", "Pending"].map((s) => (
              <button
                key={s}
                onClick={() => setFilterStatus(s)}
                className="px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
                style={
                  filterStatus === s
                    ? { background: "#2E7D32", color: "#fff", boxShadow: "0 2px 8px rgba(46,125,50,0.25)" }
                    : { color: "#66BB6A" }
                }
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div
          className="rounded-2xl border overflow-hidden"
          style={{
            background: "#FFFFFF",
            borderColor: "#C8E6C9",
            boxShadow: "0 1px 12px rgba(46,125,50,0.07)",
          }}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-225">
              <thead>
                <tr style={{ background: "#F0F7F0", borderBottom: "2px solid #C8E6C9" }}>
                  <th className="px-4 py-3.5 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#2E7D32" }}>
                    #
                  </th>
                  <th className="px-4 py-3.5 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#2E7D32" }}>
                    Dealer
                  </th>
                  <th className="px-4 py-3.5 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#2E7D32" }}>
                    Code
                  </th>
                  <th className="px-4 py-3.5 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#2E7D32" }}>
                    Phone
                  </th>
                  <th className="px-4 py-3.5 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#2E7D32" }}>
                    City
                  </th>
                  {/* <th className="px-4 py-3.5 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#2E7D32" }}>
                    Status
                  </th> */}
                  <th className="px-4 py-3.5 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#2E7D32" }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} />)
                ) : filtered.length === 0 ? (
                  <tr>
                    <td colSpan={7}>
                      <div className="flex flex-col items-center justify-center py-16 text-center">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                          style={{ background: "#EBF5E9" }}
                        >
                          <FaUsers className="text-3xl" style={{ color: "#66BB6A" }} />
                        </div>
                        <h3 className="text-base font-bold mb-1" style={{ color: "#1B5E20" }}>
                          No Dealers Found
                        </h3>
                        <p className="text-sm" style={{ color: "#81C784" }}>
                          {search ? "Try adjusting your search." : "No dealers registered yet."}
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filtered.map((dealer, idx) => {
                    const status = statusColor(dealer.isApproved);
                    const isActionLoading = actionLoading === dealer._id;

                    return (
                      <tr
                        key={dealer._id}
                        className="transition-colors duration-150"
                        style={{ borderTop: "1px solid #E8F5E9" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#F9FFF6")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        <td className="px-4 py-4">
                          <span
                            className="text-xs font-bold px-2 py-1 rounded-lg"
                            style={{ background: "#F0F7F0", color: "#2E7D32" }}
                          >
                            #{idx + 1}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0"
                              style={{
                                background: "linear-gradient(135deg, #FF8F00, #FFB300)",
                                color: "#fff",
                              }}
                            >
                              {(dealer.fullName?.[0] || "?").toUpperCase()}
                            </div>
                            <div>
                              <p className="font-semibold text-sm" style={{ color: "#1B5E20" }}>
                                {dealer.fullName || "—"}
                              </p>
                              <p className="text-xs" style={{ color: "#81C784" }}>
                                {dealer.email || "—"}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 font-mono text-xs" style={{ color: "#555" }}>
                          {dealer.dealerCode || "—"}
                        </td>
                        <td className="px-4 py-4 text-xs" style={{ color: "#555" }}>
                          {dealer.phone || "—"}
                        </td>
                        <td className="px-4 py-4 text-xs" style={{ color: "#555" }}>
                          {dealer.city || "—"}
                        </td>
                        {/* <td className="px-4 py-4">
                          <span
                            className="px-3 py-1 rounded-full text-xs font-bold border"
                            style={{
                              background: status.bg,
                              color: status.color,
                              borderColor: status.color + "40",
                            }}
                          >
                            {status.label}
                          </span>
                        </td> */}
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2 flex-wrap">
                            {dealer.isApproved ? (
                              <>
                                <button
                                  onClick={() => handleUnapprove(dealer._id)}
                                  disabled={isActionLoading}
                                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border"
                                  style={{
                                    background: "rgba(255,143,0,0.08)",
                                    color: "#E65100",
                                    borderColor: "rgba(255,143,0,0.2)",
                                  }}
                                  onMouseEnter={(e) => {
                                    if (!isActionLoading) e.currentTarget.style.background = "rgba(255,143,0,0.18)";
                                  }}
                                  onMouseLeave={(e) => {
                                    if (!isActionLoading) e.currentTarget.style.background = "rgba(255,143,0,0.08)";
                                  }}
                                >
                                  <MdPendingActions className="text-sm" />
                                  {isActionLoading ? "..." : "Unapprove"}
                                </button>
                                <button
                                  onClick={() => handleReject(dealer._id)}
                                  disabled={isActionLoading}
                                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border"
                                  style={{
                                    background: "rgba(239,68,68,0.08)",
                                    color: "#EF4444",
                                    borderColor: "rgba(239,68,68,0.2)",
                                  }}
                                  onMouseEnter={(e) => {
                                    if (!isActionLoading) e.currentTarget.style.background = "rgba(239,68,68,0.18)";
                                  }}
                                  onMouseLeave={(e) => {
                                    if (!isActionLoading) e.currentTarget.style.background = "rgba(239,68,68,0.08)";
                                  }}
                                >
                                  <MdDeleteOutline className="text-sm" />
                                  {isActionLoading ? "..." : "Reject"}
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  onClick={() => handleApprove(dealer._id)}
                                  disabled={isActionLoading}
                                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border"
                                  style={{
                                    background: "rgba(46,125,50,0.08)",
                                    color: "#2E7D32",
                                    borderColor: "rgba(46,125,50,0.2)",
                                  }}
                                  onMouseEnter={(e) => {
                                    if (!isActionLoading) e.currentTarget.style.background = "rgba(46,125,50,0.18)";
                                  }}
                                  onMouseLeave={(e) => {
                                    if (!isActionLoading) e.currentTarget.style.background = "rgba(46,125,50,0.08)";
                                  }}
                                >
                                  <MdCheckCircle className="text-sm" />
                                  {isActionLoading ? "..." : "Approve"}
                                </button>
                                <button
                                  onClick={() => handleReject(dealer._id)}
                                  disabled={isActionLoading}
                                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border"
                                  style={{
                                    background: "rgba(239,68,68,0.08)",
                                    color: "#EF4444",
                                    borderColor: "rgba(239,68,68,0.2)",
                                  }}
                                  onMouseEnter={(e) => {
                                    if (!isActionLoading) e.currentTarget.style.background = "rgba(239,68,68,0.18)";
                                  }}
                                  onMouseLeave={(e) => {
                                    if (!isActionLoading) e.currentTarget.style.background = "rgba(239,68,68,0.08)";
                                  }}
                                >
                                  <MdDeleteOutline className="text-sm" />
                                  {isActionLoading ? "..." : "Reject"}
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Footer stats */}
          {!loading && filtered.length > 0 && (
            <div
              className="px-5 py-3 flex items-center justify-between border-t text-xs"
              style={{ borderColor: "#E8F5E9", color: "#81C784" }}
            >
              <span>
                Showing <span className="font-bold" style={{ color: "#2E7D32" }}>{filtered.length}</span> of{" "}
                <span className="font-bold" style={{ color: "#2E7D32" }}>{dealers.length}</span> dealers
              </span>
              <span className="flex items-center gap-2">
                <span className="flex items-center gap-1">
                  <MdCheckCircle className="text-sm" style={{ color: "#2E7D32" }} />
                  {dealers.filter(d => d.isApproved).length} Approved
                </span>
                <span className="flex items-center gap-1">
                  <MdPendingActions className="text-sm" style={{ color: "#E65100" }} />
                  {dealers.filter(d => !d.isApproved).length} Pending
                </span>
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}