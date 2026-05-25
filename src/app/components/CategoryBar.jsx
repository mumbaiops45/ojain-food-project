// "use client";

// import Link from "next/link";
// import { useEffect } from "react";
// import { useCategory } from "../../../hooks/useCategories"; // adjust path as needed
// import {
//   FaArrowRight,
//   FaFireAlt,
//   FaStar,
// } from "react-icons/fa";

// // Helper to convert backend image path to a valid URL (same as in CategoryManager)
// const getImageUrl = (imagePath) => {
//   if (!imagePath) return null;
//   if (imagePath.startsWith('blob:') || imagePath.startsWith('http')) {
//     return imagePath;
//   }
//   let normalizedPath = imagePath.replace(/\\/g, '/');
//   if (normalizedPath.startsWith('/')) {
//     normalizedPath = normalizedPath.slice(1);
//   }
//   const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
//   return `${API_BASE}/${normalizedPath}`;
// };

// export default function CategoryBar() {
//   const { categories, fetchCategories, loading, error } = useCategory();

//   useEffect(() => {
//     fetchCategories();
//   }, [fetchCategories]);

//   // Create a slug from category name for the URL
//   const getCategorySlug = (name, id) => {
//     if (name) {
//       return `/category/${name.toLowerCase().replace(/\s+/g, '-')}`;
//     }
//     return `/category/${id}`;
//   };

//   // Loading state
//   if (loading) {
//     return (
//       <section className="relative bg-[#f8f8f8] py-14 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-7">
//             {[...Array(5)].map((_, i) => (
//               <div key={i} className="bg-white rounded-[30px] overflow-hidden shadow-sm animate-pulse">
//                 <div className="h-[230px] bg-gray-200"></div>
//                 <div className="p-5">
//                   <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
//                   <div className="h-4 bg-gray-200 rounded w-1/2"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   // Error or empty state
//   if (error || categories.length === 0) {
//     return (
//       <section className="relative bg-[#f8f8f8] py-14 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <p className="text-gray-500">
//             {error ? `Error: ${error}` : "No categories available right now."}
//           </p>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="relative bg-[#f8f8f8] py-14 overflow-hidden">
//       {/* BACKGROUND IMAGE */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-30"
//         style={{ backgroundImage: "url('/masala3.jpg')" }}
//       />

//       {/* ORANGE GLOW */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-orange-400/20 blur-3xl rounded-full"></div>
//       <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-red-400/10 blur-3xl rounded-full"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* HERO HEADER - same as before */}
//         <div className="relative rounded-[40px] overflow-hidden mb-14 shadow-xl">
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: "url('/masala4.jpg')" }}
//           />
//           <div className="absolute inset-0 bg-black/70"></div>
//           <div className="absolute top-0 left-0 w-72 h-72 bg-brand-green-pale rounded-full blur-3xl opacity-60"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green-pale rounded-full blur-3xl opacity-40"></div>

//           <div className="relative z-10 px-8 py-16 md:px-16 md:py-24">
//             <div className="inline-flex items-center gap-2 bg-brand-green-pale text-brand-green px-5 py-2 rounded-full text-sm font-semibold shadow-sm border border-brand-green-pale">
//               <FaFireAlt />
//               Trending Categories
//             </div>
//             <h2 className="mt-8 text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight text-white">
//               <span className="text-brand-green">Explore</span> Delicious
//               <br />
//               Homemade{" "}
//               <span className="text-brand-green">Foods</span>
//             </h2>
//             <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-8">
//               Discover authentic homemade meals, premium biryani,
//               healthy dishes, sweets, desserts and snacks made
//               fresh by local home chefs near you.
//             </p>
//           </div>
//         </div>

//         {/* DYNAMIC CATEGORY GRID */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-7">
//           {categories.map((cat) => (
//             <Link
//               key={cat._id}
//               href={getCategorySlug(cat.name, cat._id)}
//               className="group"
//             >
//               <div className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
//                 <div className="relative h-[230px] overflow-hidden">
//                   <img
//                     src={getImageUrl(cat.image)}
//                     alt={cat.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
//                     onError={(e) => { e.target.src = "/fallback-category.jpg"; }} // optional fallback
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
//                   <div className="absolute top-4 left-4 bg-white text-orange-500 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
//                     50% OFF
//                   </div>
//                   <div className="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-lg">
//                     <FaStar size={10} />
//                     4.5 {/* You could add a rating field to your category model later */}
//                   </div>
//                   <div className="absolute bottom-4 left-4 right-4">
//                     <h3 className="text-white text-2xl font-bold leading-tight">
//                       {cat.name}
//                     </h3>
//                     <p className="text-white/70 text-sm mt-1">
//                       {cat.description || `${Math.floor(Math.random() * 100) + 20}+ Items`}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="p-5 flex items-center justify-between">
//                   <div>
//                     <p className="text-sm text-gray-400">Starting from</p>
//                     <h4 className="text-2xl font-black text-gray-900">₹99</h4>
//                   </div>
//                   <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
//                     <FaArrowRight />
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCategory } from "../../../hooks/useCategories";
import { FaArrowRight, FaUtensils } from "react-icons/fa";

const getImageUrl = (imagePath) => {
  if (!imagePath) return null;
  if (imagePath.startsWith("blob:") || imagePath.startsWith("http")) return imagePath;
  let normalizedPath = imagePath.replace(/\\/g, "/");
  if (normalizedPath.startsWith("/")) normalizedPath = normalizedPath.slice(1);
  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  return `${API_BASE}/${normalizedPath}`;
};

export default function CategoryBar() {
  const { categories, fetchCategories, loading, error } = useCategory();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  if (loading) {
    return (
      <section className="py-16 md:py-20 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse bg-white rounded-[28px] shadow-lg overflow-hidden">
                <div className="h-56 bg-gray-200"></div>
                <div className="p-5 space-y-3">
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || categories.length === 0) {
    return (
      <section className="py-16 bg-gray-50 text-center">
        <p className="text-gray-500">{error ? `Error: ${error}` : "No categories yet"}</p>
      </section>
    );
  }

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-[#f8f8f8]">
      {/* Background glows — green */}
      <div className="absolute top-0 left-0 w-100 h-100 bg-brand-green-pale/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-brand-green-pale/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12 md:mb-14">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-green-pale text-brand-green px-5 py-2 rounded-full text-sm font-bold shadow-sm">
              <FaUtensils />
              Browse Categories
            </div>

            {/* Heading — brand-green for highlighted words */}
            <h2 className="mt-6 text-4xl md:text-6xl font-black leading-tight tracking-tight">
              <span className="text-brand-green">Explore</span>{" "}
              <span className="text-gray-900">Our</span>
              <br />
              <span className="text-gray-900">Food</span>{" "}
              <span className="text-brand-green">Categories</span>
            </h2>

            <p className="mt-5 text-lg text-gray-500 max-w-2xl leading-8">
              Discover handpicked homemade delights, from authentic curries to exotic desserts.
            </p>
          </div>

          {/* CTA — black */}
          <Link
            href="/categories"
            className="hidden lg:flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-7 py-4 rounded-2xl font-bold shadow-xl transition-all duration-300"
          >
            <FaUtensils />
            View All Categories
          </Link>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat._id}
              href={`/category/${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative block bg-white rounded-[28px] shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-brand-green-pale"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={getImageUrl(cat.image)}
                  alt={cat.name}
                  className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-110"
                  onError={(e) => (e.target.src = "/fallback-category.jpg")}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition"></div>
              </div>

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="text-2xl font-bold tracking-tight">{cat.name}</h3>
                <div className="mt-3 flex items-center text-brand-orange font-semibold text-sm group-hover:text-brand-orange/80 transition">
                  <span>Explore now</span>
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile "View All" — black */}
        <div className="mt-10 flex justify-center lg:hidden">
          <Link
            href="/categories"
            className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-7 py-4 rounded-2xl font-bold shadow-xl transition-all duration-300"
          >
            <FaUtensils />
            View All Categories
          </Link>
        </div>

      </div>
    </section>
  );
}
