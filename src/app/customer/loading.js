"use client";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F9FFF6] py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Profile card skeleton */}
        <div className="bg-white rounded-2xl p-6 flex items-center gap-5 animate-pulse">
          <div className="w-20 h-20 rounded-full bg-gray-200 shrink-0" />
          <div className="flex-1 space-y-3">
            <div className="h-6 bg-gray-200 rounded w-1/2" />
            <div className="h-4 bg-gray-200 rounded w-2/3" />
          </div>
        </div>
        {/* Content rows */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 space-y-3 animate-pulse">
            <div className="h-5 bg-gray-200 rounded w-1/3" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-4/5" />
          </div>
        ))}
      </div>
    </div>
  );
}
