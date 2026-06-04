"use client";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar skeleton */}
      <div className="w-64 bg-white border-r border-gray-100 p-5 space-y-4 animate-pulse shrink-0">
        <div className="h-8 bg-gray-200 rounded w-3/4" />
        <div className="space-y-2 mt-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-10 bg-gray-100 rounded-xl" />
          ))}
        </div>
      </div>
      {/* Main content skeleton */}
      <div className="flex-1 p-8 space-y-6 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-48" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 space-y-2">
              <div className="h-10 bg-gray-200 rounded w-1/2" />
              <div className="h-4 bg-gray-100 rounded w-3/4" />
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl p-6 space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-12 bg-gray-100 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
