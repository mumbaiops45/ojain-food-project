"use client";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F9FFF6] py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="h-9 bg-gray-200 rounded-xl w-40 mb-8 animate-pulse" />
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 flex gap-4 animate-pulse">
              <div className="w-20 h-20 rounded-xl bg-gray-200 shrink-0" />
              <div className="flex-1 space-y-3">
                <div className="h-5 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/3" />
                <div className="h-8 bg-gray-200 rounded-xl w-28 mt-2" />
              </div>
            </div>
          ))}
        </div>
        {/* Summary skeleton */}
        <div className="mt-8 bg-white rounded-2xl p-6 space-y-3 animate-pulse">
          <div className="h-5 bg-gray-200 rounded w-1/2" />
          <div className="h-5 bg-gray-200 rounded w-1/3" />
          <div className="h-12 bg-gray-200 rounded-2xl mt-4" />
        </div>
      </div>
    </div>
  );
}
