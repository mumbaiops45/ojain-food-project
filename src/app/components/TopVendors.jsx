"use client";

import Link from "next/link";
import { FaMapMarkerAlt, FaStar, FaArrowRight, FaStore, FaFireAlt } from "react-icons/fa";

const vendors = [
  { name: "Annapurna Kitchen", city: "Hyderabad",   products: 42, rating: "4.9", image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=600&q=80&auto=format&fit=crop" },
  { name: "Grandma Foods",     city: "Bangalore",   products: 28, rating: "4.8", image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&q=80&auto=format&fit=crop" },
  { name: "Village Spices",    city: "Chennai",     products: 35, rating: "4.7", image: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=600&q=80&auto=format&fit=crop" },
  { name: "Homely Treats",     city: "Mumbai",      products: 31, rating: "4.9", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80&auto=format&fit=crop" },
  { name: "Spicy Meals",       city: "Delhi",       products: 26, rating: "4.8", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80&auto=format&fit=crop" },
  { name: "Royal Foods",       city: "Pune",        products: 39, rating: "4.9", image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=600&q=80&auto=format&fit=crop" },
  { name: "Taste Of Home",     city: "Kolkata",     products: 30, rating: "4.7", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80&auto=format&fit=crop" },
  { name: "South Spice",       city: "Coimbatore",  products: 44, rating: "4.9", image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600&q=80&auto=format&fit=crop" },
];

function TopVendors() {
  return (
    <section className="relative py-16 md:py-24 bg-linear-to-b from-brand-bg to-white overflow-hidden">

      {/* Background Glow — green */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-green-pale rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green-pale rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-brand-green-pale text-brand-green px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
            <FaFireAlt size={12} />
            Trusted Home Chefs
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-tight">
            <span className="text-slate-900">Meet Our</span>{" "}
            <span className="text-brand-green">Top Vendors</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            Passionate Indian chefs serving fresh meals prepared
            with hygiene, authentic recipes, and traditional flavors.
          </p>
        </div>

        {/* Vendor Grid */}
        <div className="mt-10 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7">
          {vendors.map((vendor, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[30px] overflow-hidden border border-brand-green-pale hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  loading="lazy"
                  className="w-full h-65 object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent"></div>

                {/* Rating */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 text-[12px] font-bold text-slate-800 shadow-lg">
                  <FaStar className="text-yellow-400" size={12} />
                  {vendor.rating}
                </div>

                {/* Verified Badge — brand-orange */}
                <div className="absolute top-4 right-4 bg-brand-orange text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg">
                  Verified
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[22px] font-black tracking-tight text-slate-900 line-clamp-1">
                  {vendor.name}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-slate-500 text-sm">
                  <FaMapMarkerAlt className="text-brand-green" size={12} />
                  {vendor.city}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    {/* Products count — brand-green */}
                    <p className="text-[28px] font-black text-brand-green leading-none">{vendor.products}</p>
                    <p className="text-[12px] text-slate-500 mt-1">Products Available</p>
                  </div>

                  {/* Arrow Button — black */}
                  <button className="w-12 h-12 rounded-2xl bg-black hover:bg-gray-800 flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:scale-110">
                    <FaArrowRight size={14} />
                  </button>
                </div>

                {/* Visit Shop Button — black outline */}
                <Link
                  href="/vendor/shop"
                  className="mt-6 w-full h-12 rounded-2xl border-2 border-black text-black hover:bg-black hover:text-white text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaStore size={13} />
                  Visit Shop
                </Link>
              </div>

              {/* Hover Glow */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-44 h-24 bg-brand-green/10 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TopVendors;
