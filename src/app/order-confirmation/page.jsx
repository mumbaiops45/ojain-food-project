// app/order-confirmation/page.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaCheckCircle, FaShoppingBag, FaHome, FaClock } from "react-icons/fa";

export default function OrderConfirmation() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Animate in after mount
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-brand-green-pale to-white flex items-center justify-center px-4 py-16">
      <div
        className={`w-full max-w-md bg-white rounded-[36px] shadow-2xl overflow-hidden transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Green top banner */}
        <div className="bg-brand-green px-8 pt-10 pb-14 text-center relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full" />
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white/10 rounded-full" />

          <div className="relative z-10">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
              <FaCheckCircle size={40} className="text-brand-green" />
            </div>
            <h1 className="mt-5 text-2xl sm:text-3xl font-black text-white">
              Order Placed! 🎉
            </h1>
            <p className="mt-2 text-green-100 text-sm">
              Your homemade food is being prepared with love!
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-8 -mt-6 relative z-10">
          {/* Order details card */}
          <div className="bg-brand-green-pale rounded-2xl p-5 mb-6 space-y-3">
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <FaShoppingBag className="text-brand-green shrink-0" />
              <span>Your order has been <strong>confirmed</strong> and sent to the vendor.</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <FaClock className="text-brand-orange shrink-0" />
              <span>Estimated delivery: <strong>30 – 45 minutes</strong></span>
            </div>
          </div>

          {/* Steps */}
          <div className="flex justify-between mb-8 relative">
            <div className="absolute top-3 left-6 right-6 h-0.5 bg-brand-green-pale" />
            {[
              { icon: "✅", label: "Confirmed" },
              { icon: "👨‍🍳", label: "Preparing" },
              { icon: "🚚", label: "On the way" },
              { icon: "🏠", label: "Delivered" },
            ].map(({ icon, label }, i) => (
              <div key={label} className="flex flex-col items-center gap-1 relative z-10">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm ${
                  i === 0 ? "bg-brand-green text-white shadow" : "bg-gray-100"
                }`}>
                  {icon}
                </div>
                <span className={`text-[10px] font-semibold ${i === 0 ? "text-brand-green" : "text-gray-400"}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="space-y-3">
            <Link
              href="/orders"
              className="flex items-center justify-center gap-2 w-full bg-brand-orange hover:bg-[#E65100] text-white py-4 rounded-2xl font-bold shadow-md transition"
            >
              <FaShoppingBag /> Track My Order
            </Link>
            <Link
              href="/"
              className="flex items-center justify-center gap-2 w-full bg-brand-green-pale hover:bg-green-100 text-brand-green py-4 rounded-2xl font-bold transition"
            >
              <FaHome /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
