"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [showHint, setShowHint] = useState(false);
  const [showExtended, setShowExtended] = useState(false);

  // After 4 s, hint that the server might be starting up
  useEffect(() => {
    const t1 = setTimeout(() => setShowHint(true), 4000);
    // After 12 s, encourage a refresh
    const t2 = setTimeout(() => setShowExtended(true), 12000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-9999">
      <div className="flex flex-col items-center text-center px-6">

        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin" />

        <p className="mt-4 text-orange-500 font-bold text-lg">Loading…</p>

        {/* Delayed hint — shown after 4 s */}
        {showHint && !showExtended && (
          <p className="mt-3 text-gray-400 text-sm max-w-xs leading-relaxed animate-fadeIn">
            Our server is starting up. This may take a few seconds…
          </p>
        )}

        {/* Extended hint — shown after 12 s */}
        {showExtended && (
          <div className="mt-3 flex flex-col items-center gap-3 animate-fadeIn">
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Still loading… the server is waking up from sleep.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="text-orange-500 font-semibold text-sm underline underline-offset-2 hover:text-orange-600 transition"
            >
              Click here to retry
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
