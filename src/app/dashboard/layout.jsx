"use client";

import Sidebar from "@/app/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}) {

  return (

    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <div className="bg-white border-b px-8 py-5 flex items-center justify-between shadow-sm">

          <div>

            <h1 className="text-3xl font-bold text-gray-800">
              Dashboard
            </h1>

            <p className="text-gray-500 mt-1">
              Welcome back 👋
            </p>

          </div>

          {/* PROFILE */}
          <div className="flex items-center gap-4">

            <div className="text-right">

              <h3 className="font-semibold text-gray-800">
                Rahul
              </h3>

              <p className="text-sm text-gray-500">
                Customer
              </p>

            </div>

            <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold">
              R
            </div>

          </div>

        </div>

        {/* PAGE */}
        <div className="p-8">
          {children}
        </div>

      </div>

    </div>
  );
}