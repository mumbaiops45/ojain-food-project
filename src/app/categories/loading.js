"use client";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F9FFF6] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title skeleton */}
        <div className="h-10 bg-gray-200 rounded-xl w-64 mb-8 animate-pulse" />
        {/* Grid of category card skeletons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 flex flex-col items-center gap-3 animate-pulse">
              <div className="w-16 h-16 rounded-full bg-gray-200" />
              <div className="h-4 bg-gray-200 rounded w-3/4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
