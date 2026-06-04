"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { AuthProvider } from "@/contexts/AuthContext";
import useCartStore from "./store/cartStore";
import AuthPopup from "@/app/components/AuthPopup";

// Thin top progress bar that animates on every route change.
// Detects navigation start via click interception; completes when pathname updates.
function RouteProgressBar() {
  const pathname = usePathname();
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);
  const prevPathname = useRef(pathname);

  const clearTimers = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  // Step 1 — detect navigation start via anchor-click
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest("a[href]");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || /^https?:\/\//.test(href) || href.startsWith("mailto")) return;

      clearTimers();
      setVisible(true);
      setWidth(30);
      timerRef.current = setTimeout(() => setWidth(70), 250);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Step 2 — complete bar when pathname actually changes
  useEffect(() => {
    if (pathname === prevPathname.current) return;
    prevPathname.current = pathname;
    clearTimers();
    setWidth(100);
    timerRef.current = setTimeout(() => {
      setVisible(false);
      setWidth(0);
    }, 350);
  }, [pathname]);

  useEffect(() => () => clearTimers(), []);

  if (!visible) return null;
  return (
    <div
      className="fixed top-0 left-0 z-9999 h-0.75 bg-orange-500 pointer-events-none"
      style={{
        width: `${width}%`,
        transition: width === 100 ? "width 200ms ease-out" : "width 400ms ease-in-out",
        boxShadow: "0 0 8px rgba(249,115,22,0.7)",
      }}
    />
  );
}

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
      <RouteProgressBar />
      <Toaster position="top-right" />
      {!hideLayout && <Navbar />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
      {!hideLayout && <ViewCartBar />}
      {!hideLayout && <AuthPopup />}
    </AuthProvider>
  );
}
