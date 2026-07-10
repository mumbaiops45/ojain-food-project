"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCategory } from "../../../hooks/useCategories";
import { FaArrowRight, FaUtensils, FaChevronRight } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const getImageUrl = (imagePath) => {
  if (!imagePath) return "/category1.jpg";
  if (imagePath.startsWith("blob:") || imagePath.startsWith("http")) return imagePath;
  let normalizedPath = imagePath.replace(/\\/g, "/");
  if (normalizedPath.startsWith("/")) normalizedPath = normalizedPath.slice(1);
  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://ojain-backend-2.onrender.com";
  return `${API_BASE}/${normalizedPath}`;
};

// Each card manages its own image-loaded state so we get a shimmer → fade-in
function CategoryCard({ cat, index }) {
  const [loaded, setLoaded] = useState(false);
  const [src, setSrc] = useState(getImageUrl(cat.image));

  return (
    <ScrollReveal animation="scale-up" delay={index * 70}>
      <Link
        href={`/category/${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
        className="group relative flex flex-col rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 hover:-translate-y-1.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-green/40"
        style={{ background: "#0b160d" }}
      >
        {/* Image */}
        <div className="relative w-full h-44 md:h-52 overflow-hidden">

          {!loaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 animate-pulse" />
          )}

          <img
            src={src}
            alt={cat.name}
            loading={index < 4 ? "eager" : "lazy"}
            className={`absolute inset-0 w-full h-full object-cover  ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setLoaded(true)}
            onError={() => { setSrc("/category1.jpg"); setLoaded(true); }}
          />

          {/* Hover ring */}
          <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-brand-green/60 transition-all duration-500 pointer-events-none" />
        </div>

        {/* Name footer — solid background, always readable */}
        <div className="flex items-center justify-between gap-2 px-4 py-3 bg-[#0f1f11]">
          {/* <h3 className="text-white font-black text-sm md:text-base leading-snug line-clamp-1 flex-1">
            {cat.name}
          </h3> */}
          <div className="flex items-center gap-1 text-[#FFA726] text-[11px] font-bold tracking-wide uppercase shrink-0">
            <span>Explore</span>
            <FaChevronRight size={8} className="group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}

export default function CategoryBar() {
  const { categories, fetchCategories, loading, error } = useCategory();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  if (loading) {
    return (
      <section className="py-24 bg-white">
        <div className="sec-container">
          <div className="text-center mb-12">
            <div className="h-6 w-40 bg-gray-100 rounded-full mx-auto mb-4 animate-pulse" />
            <div className="h-10 w-72 bg-gray-100 rounded-xl mx-auto mb-3 animate-pulse" />
            <div className="h-5 w-56 bg-gray-100 rounded-lg mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="rounded-3xl overflow-hidden animate-pulse bg-gray-200 aspect-4/3" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || categories.length === 0) {
    return (
      <section className="py-20 bg-gray-50 text-center">
        <p className="text-gray-500">{error ? `Error: ${error}` : "No categories yet"}</p>
      </section>
    );
  }

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">

      <div className="absolute top-0 left-0 w-125 h-125 rounded-full bg-brand-green-pale/30 blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-125 h-125 rounded-full bg-brand-green-pale/20 blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 sec-container">

        <ScrollReveal animation="fade-up" className="text-center mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 bg-brand-green-pale text-brand-green px-5 py-2 rounded-full text-sm font-bold shadow-sm mb-5">
            <FaUtensils size={12} />
            Browse Categories
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
            <span className="text-gray-900">Explore Our</span>{" "}
            <span className="text-brand-green">Food Categories</span>
          </h2>

          <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto leading-8">
            Discover handpicked delights — from authentic curries to exotic desserts.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {categories.map((cat, i) => (
            <CategoryCard key={cat._id} cat={cat} index={i} />
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={100} className="mt-12 flex justify-center">
          <Link
            href="/categories"
            className="group inline-flex items-center gap-3 bg-brand-green hover:bg-[#1a5c23] text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl hover:shadow-brand-green/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <FaUtensils size={14} />
            View All Categories
            <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </ScrollReveal>

      </div>
    </section>
  );
}
















// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useCategory } from "../../../hooks/useCategories";
// import { FaArrowRight, FaUtensils } from "react-icons/fa";
// import ScrollReveal from "./ScrollReveal";

// // ---------- Helper to build image URL ----------
// const getImageUrl = (imagePath) => {
//   if (!imagePath) return "/category1.jpg";
//   if (imagePath.startsWith("blob:") || imagePath.startsWith("http"))
//     return imagePath;

//   let normalizedPath = imagePath.replace(/\\/g, "/");
//   if (normalizedPath.startsWith("/"))
//     normalizedPath = normalizedPath.slice(1);

//   const API_BASE =
//     process.env.NEXT_PUBLIC_API_URL ||
//     "https://ojain-backend-2.onrender.com";

//   return `${API_BASE}/${normalizedPath}`;
// };

// // ---------- Enhanced Category Card ----------
// function CategoryCard({ cat, index }) {
//   const [loaded, setLoaded] = useState(false);
//   const [src, setSrc] = useState(getImageUrl(cat.image));

//   return (
//     <ScrollReveal animation="scale-up" delay={index * 70}>
//       <Link
//         href={`/category/${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
//         className="group block overflow-hidden rounded-3xl bg-white border border-gray-100/80 shadow-sm hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2 transition-all duration-500 ease-out"
//       >
//         {/* Image wrapper */}
//         <div className="relative w-full h-48 bg-white overflow-hidden">
//           {!loaded && (
//             <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 animate-pulse" />
//           )}

//           <img
//             src={src}
//             alt={cat.name}
//             loading={index < 4 ? "eager" : "lazy"}
//             className={`absolute inset-0 w-full h-full object-contain p-4 transition-all duration-700 group-hover:scale-110 ${
//               loaded ? "opacity-100" : "opacity-0"
//             }`}
//             onLoad={() => setLoaded(true)}
//             onError={() => {
//               setSrc("/category1.jpg");
//               setLoaded(true);
//             }}
//           />

//           {/* Hover overlay with action cue */}
//           {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
//             <span className="bg-white/90 text-gray-900 text-sm font-bold px-5 py-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg backdrop-blur-sm">
//               View {cat.name}
//             </span>
//           </div> */}
//         </div>

//         {/* Category name footer – refined dark green */}
//         <div className="px-5 py-4 bg-[#0f1f11] border-t border-white/5 text-center">
        
//           <p className="text-[#FFA726]/70 text-[10px] font-medium tracking-widest mt-0.5">
//             EXPLORE
//           </p>
//         </div>
//       </Link>
//     </ScrollReveal>
//   );
// }

// // ---------- Main Component ----------
// export default function CategoryBar() {
//   const { categories, fetchCategories, loading, error } = useCategory();

//   useEffect(() => {
//     fetchCategories();
//   }, [fetchCategories]);

//   // ----- Loading state -----
//   if (loading) {
//     return (
//       <section className="py-24 bg-white">
//         <div className="sec-container">
//           <div className="text-center mb-12">
//             <div className="h-6 w-40 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse" />
//             <div className="h-10 w-72 bg-gray-200 rounded-xl mx-auto mb-3 animate-pulse" />
//             <div className="h-5 w-56 bg-gray-200 rounded-lg mx-auto animate-pulse" />
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//             {[...Array(8)].map((_, i) => (
//               <div
//                 key={i}
//                 className="rounded-3xl h-64 bg-gray-100 animate-pulse"
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   // ----- Error or empty state -----
//   if (error || categories.length === 0) {
//     return (
//       <section className="py-20 bg-gray-50 text-center">
//         <p className="text-gray-500">
//           {error ? `Error: ${error}` : "No categories available."}
//         </p>
//       </section>
//     );
//   }

//   // ----- Main render -----
//   return (
//     <section className="relative py-24 bg-white overflow-hidden">
//       {/* Background blobs */}
//       <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-brand-green-pale/20 blur-[120px]" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-green-pale/20 blur-[120px]" />

//       <div className="relative z-10 sec-container">
//         {/* Header */}
//         <ScrollReveal animation="fade-up" className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-brand-green-pale text-brand-green px-5 py-2 rounded-full text-sm font-bold shadow-sm mb-5">
//             <FaUtensils size={12} />
//             Browse Categories
//           </div>

//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
//             <span className="text-gray-900">Explore Our </span>
//             <span className="text-brand-green">Food Categories</span>
//           </h2>

//           <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
//             Discover premium ingredients and food products crafted with quality
//             and excellence.
//           </p>
//         </ScrollReveal>

//         {/* Category grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//           {categories.map((cat, i) => (
//             <CategoryCard key={cat._id} cat={cat} index={i} />
//           ))}
//         </div>

//         {/* View all button */}
//         <ScrollReveal
//           animation="fade-up"
//           delay={100}
//           className="mt-14 flex justify-center"
//         >
//           <Link
//             href="/categories"
//             className="group inline-flex items-center gap-3 bg-brand-green hover:bg-[#1c6d28] text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:-translate-y-1 shadow-lg"
//           >
//             <FaUtensils />
//             View All Categories
//             <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//           </Link>
//         </ScrollReveal>
//       </div>
//     </section>
//   );
// }