"use client";

import Link from "next/link";
import {
  FaArrowRight,
  FaFireAlt,
} from "react-icons/fa";

const categories = [
  { name: "Tiffin", image: "/dosa.jpg" },
  { name: "Dal Rice", image: "/dalrice.jpg" },
  { name: "Sabji Roti", image: "/sabji.jpg" },
  { name: "Paneer Curry", image: "/paneer.jpg" },
  { name: "Sandwich", image: "/Sandwich.jpg" },
  { name: "Snacks", image: "/snaks.jpg" },
  { name: "Biryani", image: "/biryani.jpg" },
  { name: "Special Biryani", image: "/biryani 2.jpg" },
  { name: "Healthy Meals", image: "/healtyfood.jpg" },
  { name: "Sweets", image: "/sweet.jpg" },
  { name: "Desserts", image: "/desserts.jpg" },
  { name: "South Indian", image: "/dosa.jpg" },
];

function CategoryBar() {
  return (
    <section className="relative py-14 md:py-24 bg-gradient-to-b from-white to-[#fff8f3] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">

            <FaFireAlt size={12} />

            Homemade Categories

          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">

            Explore Delicious Foods

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">

            Discover fresh homemade meals, authentic biryani,
            healthy dishes, sweets, desserts, and snacks prepared
            with love by local home chefs.

          </p>

        </div>

        {/* Categories Grid */}
        <div className="mt-10 md:mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-7">

          {categories.map((cat, index) => (
            <Link
              key={index}
              href={`/category/${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group"
            >

              <div className="relative overflow-hidden rounded-[30px] bg-white border border-orange-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

                {/* Image */}
                <div className="relative overflow-hidden">

                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="h-[180px] sm:h-[220px] lg:h-[240px] w-full object-cover group-hover:scale-110 transition-all duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-orange-500 shadow-sm">

                    Fresh

                  </div>

                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">

                  <h3 className="text-white text-[20px] font-bold tracking-tight">

                    {cat.name}

                  </h3>

                  <p className="text-white/80 text-sm mt-1">

                    Homemade Special

                  </p>

                  {/* Hover Button */}
                  <div className="mt-4 flex items-center text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">

                    Explore Now

                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-all duration-300" />

                  </div>

                </div>

                {/* Hover Glow */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-20 bg-orange-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}

export default CategoryBar;