export default function DashboardPage() {
  return (
    <div>

      <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2">
        Welcome Back 👋
      </h1>

      <p className="text-gray-500 mb-10">
        Explore healthy homemade meals near you.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">

        <div className="bg-white rounded-3xl shadow-md p-6 border border-gray-100">
          <h2 className="text-gray-500 text-sm mb-2">
            Total Orders
          </h2>

          <p className="text-4xl font-bold text-orange-500">
            12
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6 border border-gray-100">
          <h2 className="text-gray-500 text-sm mb-2">
            Cart Items
          </h2>

          <p className="text-4xl font-bold text-orange-500">
            4
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6 border border-gray-100">
          <h2 className="text-gray-500 text-sm mb-2">
            Favorite Meals
          </h2>

          <p className="text-4xl font-bold text-orange-500">
            8
          </p>
        </div>

      </div>

      {/* Recent Orders */}
      <div className="mt-10 bg-white rounded-3xl shadow-md p-6 border border-gray-100">

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Recent Orders
        </h2>

        <div className="space-y-4">

          <div className="flex items-center justify-between bg-orange-50 rounded-2xl p-4">

            <div>
              <h3 className="font-semibold text-gray-800">
                Veg Thali
              </h3>

              <p className="text-sm text-gray-500">
                Ordered Today
              </p>
            </div>

            <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium">
              Delivered
            </span>

          </div>

          <div className="flex items-center justify-between bg-orange-50 rounded-2xl p-4">

            <div>
              <h3 className="font-semibold text-gray-800">
                Paneer Curry
              </h3>

              <p className="text-sm text-gray-500">
                Ordered Yesterday
              </p>
            </div>

            <span className="bg-yellow-100 text-yellow-600 px-4 py-1 rounded-full text-sm font-medium">
              Cooking
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}