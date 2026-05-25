// components/Toast.js
"use client";
import { useEffect } from "react";

export default function Toast({ message, onClose, onViewCart }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900 text-white px-5 py-3 rounded-full flex gap-4 items-center shadow-lg">
      <span>{message}</span>
      <button onClick={onViewCart} className="text-orange-400 font-semibold">
        View Cart →
      </button>
    </div>
  );
}