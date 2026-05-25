"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { AuthProvider } from "@/contexts/AuthContext";
import useCartStore from "./store/cartStore";

// Global "View Cart" sticky bar.
// Shows for 4 seconds after any cart action, then auto-hides.
// Hides immediately when the user navigates to a different page.
function ViewCartBar() {
  const router         = useRouter();
  const pathname       = usePathname();
  const totalItems     = useCartStore((s) => s.totalItems());
  const totalPrice     = useCartStore((s) => s.totalPrice());
  const cartUpdatedAt  = useCartStore((s) => s.cartUpdatedAt);

  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);

  // Show bar for 4 s every time a cart action fires.
  useEffect(() => {
    if (!cartUpdatedAt) return;
    setVisible(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setVisible(false);
      timerRef.current = null;
    }, 4000);
  }, [cartUpdatedAt]);

  // Hide immediately when the user navigates away.
  useEffect(() => {
    setVisible(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, [pathname]);

  // Cleanup on unmount.
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (!visible || totalItems === 0 || pathname === "/cart") return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pointer-events-none">
      <button
        onClick={() => router.push("/cart")}
        className="pointer-events-auto w-full max-w-lg mx-auto flex items-center justify-between bg-brand-green text-white px-6 py-4 rounded-2xl shadow-2xl hover:bg-[#1B5E20] transition-all duration-300"
        style={{ display: "flex" }}
      >
        <div className="flex items-center gap-3">
          <span className="bg-white text-brand-green font-black text-sm w-7 h-7 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
          <span className="font-bold text-[15px]">
            {totalItems} item{totalItems > 1 ? "s" : ""} added
          </span>
        </div>
        <div className="flex items-center gap-2 font-black text-[15px]">
          <span>View Cart • ₹{totalPrice}</span>
          <span>→</span>
        </div>
      </button>
    </div>
  );
}

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const hideLayout =
    pathname.startsWith("/dashboard") ||
    (pathname.startsWith("/admin") && !pathname.startsWith("/adminlogin")) ||
    (pathname.startsWith("/vendor") && !pathname.startsWith("/vendorLogin"));

  return (
    <AuthProvider>
      <Toaster position="top-right" />
      {!hideLayout && <Navbar />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
      {!hideLayout && <ViewCartBar />}
    </AuthProvider>
  );
}
