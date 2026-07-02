// // "use client";

// // import Link from "next/link";
// // import { useEffect } from "react";
// // import {
// //   FaFacebookF,
// //   FaInstagram,
// //   FaTwitter,
// //   FaPhoneAlt,
// //   FaMapMarkerAlt,
// //   FaArrowRight,
// //   FaLeaf,
// // } from "react-icons/fa";
// // import { MdEmail } from "react-icons/md";
// // import { useCategory } from "../../../hooks/useCategories";

// // function Footer() {
// //   const { categories, fetchCategories } = useCategory();

// //   useEffect(() => {
// //     fetchCategories();
// //   }, [fetchCategories]);

// //   const toSlug = (name) => name?.toLowerCase().replace(/\s+/g, "-") ?? "";

// //   return (
// //     <footer className="relative overflow-hidden bg-white">

// //       {/* ───────── TOP CTA SECTION ───────── */}
// //       <div className="relative overflow-hidden bg-brand-green">

// //         {/* Background Grid */}
// //         <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>

// //         {/* Glow Effects */}
// //         <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>
// //         <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-black/10 blur-3xl"></div>

// //         <div className="relative z-10 max-w-[1450px] mx-auto px-5 sm:px-6 lg:px-10 py-14 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-10">

// //           {/* LEFT CONTENT */}
// //           <div>

// //             <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 border border-white/30 text-white text-sm font-bold tracking-wide">
// //               <FaLeaf size={12} />
// //               100% Pure Veg • A Brand That Serves Pure
// //             </span>

// //             <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
// //               Be O-Jain.{" "}
// //               <span className="text-brand-orange">Live O-Jain.</span>
// //             </h2>

// //             <p className="mt-5 text-white/80 text-[16px] md:text-[17px] leading-8 max-w-2xl">
// //               Pure Jain & Satvik instant premix products with multiple flavour
// //               range — restaurant style taste that is easy to make and pocket saving.
// //             </p>

// //             {/* Brand tagline quote */}
// //             <div className="mt-6 flex items-start gap-3 bg-white/10 border border-white/20 rounded-2xl px-5 py-4 max-w-xl">
// //               <span className="text-brand-orange text-4xl font-black leading-none mt-1">"</span>
// //               <div>
// //                 <p className="text-white font-black text-lg sm:text-xl leading-snug">
// //                   All Jain items you get under one brand
// //                 </p>
// //                 <p className="text-white/60 text-sm mt-1 font-medium">And many more yet to come...</p>
// //               </div>
// //             </div>

// //           </div>

// //           {/* CTA BUTTON */}
// //           <Link
// //             href="/categories"
// //             className="group relative overflow-hidden shrink-0 inline-flex h-[62px] px-9 rounded-2xl bg-brand-orange hover:bg-[#E65100] text-white font-bold shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-300 items-center"
// //           >
// //             <span className="relative z-10 flex items-center gap-3">
// //               Browse Products
// //               <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
// //             </span>

// //             <div className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-all duration-1000 bg-linear-to-r from-transparent via-white/25 to-transparent"></div>
// //           </Link>

// //         </div>
// //       </div>

// //       {/* ───────── FOOTER BODY ───────── */}
// //       <div className="bg-white border-t-4 border-brand-green-pale">

// //         <div className="max-w-[1450px] mx-auto px-5 sm:px-6 lg:px-10 pt-16 pb-8">

// //           {/* GRID */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

// //             {/* ───── BRAND SECTION ───── */}
// //             <div>

// //               <div className="flex items-center gap-3 mb-4">
// //                 <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center">
// //                   <FaLeaf className="text-white text-sm" />
// //                 </div>

// //                 <h2 className="text-[32px] font-black tracking-tight leading-none text-brand-green">
// //                   OJAIN
// //                 </h2>
// //               </div>

// //               <p className="text-[12px] font-bold text-brand-orange uppercase tracking-widest mb-4">
// //                 Pure Veg • A Brand That Serves Pure
// //               </p>

// //               <div className="w-20 h-[3px] rounded-full bg-brand-green mb-5"></div>

// //               <p className="text-slate-500 leading-8 text-[15px]">
// //                 Instant & quick Jain premix products with multiple flavour range.
// //                 Restaurant style taste — easy to make and pocket saving.

// //               </p>

// //               {/* SOCIAL ICONS */}
// //               <div className="flex items-center gap-3 mt-8">

// //                 {[
// //                   {
// //                     icon: <FaFacebookF size={14} />,
// //                     label: "Facebook",
// //                     href: "https://facebook.com",
// //                   },

// //                   {
// //                     icon: <FaInstagram size={16} />,
// //                     label: "Instagram",
// //                     href: "https://instagram.com",
// //                   },

// //                   {
// //                     icon: <FaTwitter size={14} />,
// //                     label: "Twitter",
// //                     href: "https://twitter.com",
// //                   },
// //                 ].map(({ icon, label, href }) => (

// //                   <a
// //                     key={label}
// //                     href={href}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     aria-label={label}
// //                     className="group w-11 h-11 rounded-xl bg-brand-green-pale border border-brand-green/20 flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-all duration-300 hover:-translate-y-1 shadow-sm"
// //                   >

// //                     <span className="text-brand-green group-hover:text-white transition-all duration-300">
// //                       {icon}
// //                     </span>

// //                   </a>
// //                 ))}

// //               </div>
// //             </div>

// //             {/* ───── QUICK LINKS ───── */}
// //             <div>

// //               <h3 className="text-[22px] font-black text-brand-green">
// //                 Quick Links
// //               </h3>

// //               <div className="w-12 h-[3px] rounded-full bg-brand-orange mt-3 mb-7"></div>

// //               <ul className="space-y-4">

// //                 {[
// //                   { label: "About Us", href: "/about" },
// //                   { label: "Contact Us", href: "mailto:support@ojain.com" },
// //                   { label: "Privacy Policy", href: "/privacy-policy" },
// //                   { label: "Terms & Conditions", href: "/terms" },

// //                   // NEW VENDOR OPTIONS
// //                   { label: "Vendor Login", href: "/vendorLogin/login" },

// //                 ].map(({ label, href }) => (

// //                   <li key={href} className="group flex items-center gap-3">

// //                     <span className="w-2 h-2 rounded-full bg-brand-green group-hover:scale-150 transition-all duration-300 shrink-0"></span>

// //                     <Link
// //                       href={href}
// //                       className="text-slate-500 hover:text-brand-green group-hover:translate-x-1 transition-all duration-300 font-medium"
// //                     >
// //                       {label}
// //                     </Link>

// //                   </li>
// //                 ))}

// //               </ul>
// //             </div>

// //             {/* ───── CATEGORIES ───── */}
// //             <div>

// //               <h3 className="text-[22px] font-black text-brand-green">
// //                 Our Categories
// //               </h3>

// //               <div className="w-12 h-[3px] rounded-full bg-brand-orange mt-3 mb-7"></div>

// //               <ul className="space-y-4">

// //                 {categories.length > 0
// //                   ? categories.slice(0, 6).map((cat) => (
// //                     <li key={cat._id} className="group flex items-center gap-3">
// //                       <span className="w-2 h-2 rounded-full bg-brand-green group-hover:scale-150 transition-all duration-300 shrink-0"></span>
// //                       <Link
// //                         href={`/category/${toSlug(cat.name)}`}
// //                         className="text-slate-500 hover:text-brand-green group-hover:translate-x-1 transition-all duration-300 font-medium"
// //                       >
// //                         {cat.name}
// //                       </Link>
// //                     </li>
// //                   ))
// //                   : [
// //                     { label: "Home", href: "/" },
// //                     { label: "All Categories", href: "/categories" },
// //                     { label: "Cart", href: "/cart" },
// //                     { label: "Customer Login", href: "/customerLogin/login" },
// //                   ].map(({ label, href }) => (
// //                     <li key={href} className="group flex items-center gap-3">
// //                       <span className="w-2 h-2 rounded-full bg-brand-green group-hover:scale-150 transition-all duration-300 shrink-0"></span>
// //                       <Link
// //                         href={href}
// //                         className="text-slate-500 hover:text-brand-green group-hover:translate-x-1 transition-all duration-300 font-medium"
// //                       >
// //                         {label}
// //                       </Link>
// //                     </li>
// //                   ))
// //                 }

// //               </ul>

// //               {categories.length > 0 && (
// //                 <Link
// //                   href="/categories"
// //                   className="inline-flex items-center gap-1.5 mt-5 text-brand-green font-bold text-sm hover:underline"
// //                 >
// //                   View All <FaArrowRight size={10} />
// //                 </Link>
// //               )}

// //             </div>

// //             {/* ───── CONTACT INFO ───── */}
// //             <div>

// //               <h3 className="text-[22px] font-black text-brand-green">
// //                 Contact Info
// //               </h3>

// //               <div className="w-12 h-[3px] rounded-full bg-brand-orange mt-3 mb-7"></div>

// //               <div className="space-y-4">

// //                 {/* PHONE */}
// //                 <div className="group flex items-center gap-4 p-4 rounded-2xl bg-brand-green-pale border border-brand-green/10 hover:border-brand-green/30 hover:bg-brand-green-pale transition-all duration-300">

// //                   <div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center shadow-md shrink-0">
// //                     <FaPhoneAlt size={14} className="text-white" />
// //                   </div>

// //                   <div>
// //                     <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
// //                       Phone Number
// //                     </p>

// //                     <h4 className="font-bold text-brand-text mt-0.5">
// //                       +91 7021833244
// //                     </h4>
// //                   </div>

// //                 </div>

// //                 {/* EMAIL */}
// //                 <div className="group flex items-center gap-4 p-4 rounded-2xl bg-brand-green-pale border border-brand-green/10 hover:border-brand-green/30 transition-all duration-300">

// //                   <div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center shadow-md shrink-0">
// //                     <MdEmail size={18} className="text-white" />
// //                   </div>

// //                   <div>
// //                     <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
// //                       Email Address
// //                     </p>

// //                     <h4 className="font-bold text-brand-text mt-0.5">
// //                       support@ojain.com
// //                     </h4>
// //                   </div>

// //                 </div>

// //                 {/* LOCATION */}
// //                 <div className="group flex items-start gap-4 p-4 rounded-2xl bg-brand-green-pale border border-brand-green/10 hover:border-brand-green/30 transition-all duration-300">

// //                   <div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center shadow-md shrink-0">
// //                     <FaMapMarkerAlt size={15} className="text-white" />
// //                   </div>

// //                   <div>
// //                     <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
// //                       Office Address
// //                     </p>

// //                     <h4 className="font-bold text-brand-text mt-0.5 leading-7">
// //                       Harihar Complex D-108,<br />
// //                       Mankoli, Bhiwandi 421311,<br />
// //                       Maharashtra, India
// //                     </h4>
// //                   </div>

// //                 </div>

// //               </div>
// //             </div>

// //           </div>

// //           {/* ───────── COPYRIGHT SECTION ───────── */}
// //           <div className="mt-14 pt-7 border-t border-brand-green-pale flex flex-col lg:flex-row items-center justify-between gap-4">

// //             <p className="text-slate-400 text-sm text-center lg:text-left">
// //               © 2026{" "}
// //               <span className="font-bold text-brand-green">
// //                 Ojain
// //               </span>.
// //               All Rights Reserved.
// //             </p>

// //             <p className="text-slate-400 text-sm text-center lg:text-right">
// //               Designed & Developed by{" "}

// //               <a
// //                 href="https://www.nakshatranamahacreations.com/"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="font-bold text-brand-green hover:underline"
// //               >
// //                 Nakshatra Namaha Creations
// //               </a>

// //             </p>

// //           </div>

// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }

// // export default Footer;






// "use client";

// import Link from "next/link";
// import { useEffect } from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaArrowRight,
//   FaLeaf,
// } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { useCategory } from "../../../hooks/useCategories";

// function Footer() {
//   const { categories, fetchCategories } = useCategory();

//   useEffect(() => {
//     fetchCategories();
//   }, [fetchCategories]);

//   const toSlug = (name) => name?.toLowerCase().replace(/\s+/g, "-") ?? "";

//   return (
//     <footer className="relative overflow-hidden bg-white">

//       {/* ───────── TOP CTA SECTION ───────── */}
//       <div className="relative overflow-hidden bg-brand-green">
//         {/* ... background effects (unchanged) ... */}
//         <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>
//         <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>
//         <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-black/10 blur-3xl"></div>

//         <div className="relative z-10 max-w-[1450px] mx-auto px-5 sm:px-6 lg:px-10 py-14 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
//           <div>
//             <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 border border-white/30 text-white text-sm font-bold tracking-wide">
//               <FaLeaf size={12} />
//               100% Pure Veg • A Brand That Serves Pure
//             </span>
//             <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
//               Be O-Jain.{" "}
//               <span className="text-brand-orange">Live O-Jain.</span>
//             </h2>
//             <p className="mt-5 text-white/80 text-[16px] md:text-[17px] leading-8 max-w-2xl">
//               Pure Jain & Satvik instant premix products with multiple flavour
//               range — restaurant style taste that is easy to make and pocket saving.
//             </p>

//             {/* 👇 NEW: Sister Brand Badge */}
//             <div className="mt-6 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2">
//               <span className="text-white/70 text-sm font-medium">🌱 Sister Brand:</span>
//               <a
//                 href="https://goodiegear.netlify.app"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white font-black hover:text-brand-orange transition-colors flex items-center gap-1"
//               >
//                 GoodieGear <FaArrowRight size={12} className="text-brand-orange" />
//               </a>
//             </div>

//             <div className="mt-6 flex items-start gap-3 bg-white/10 border border-white/20 rounded-2xl px-5 py-4 max-w-xl">
//               <span className="text-brand-orange text-4xl font-black leading-none mt-1">"</span>
//               <div>
//                 <p className="text-white font-black text-lg sm:text-xl leading-snug">
//                   All Jain items you get under one brand
//                 </p>
//                 <p className="text-white/60 text-sm mt-1 font-medium">And many more yet to come...</p>
//               </div>
//             </div>
//           </div>

//           <Link
//             href="/categories"
//             className="group relative overflow-hidden shrink-0 inline-flex h-[62px] px-9 rounded-2xl bg-brand-orange hover:bg-[#E65100] text-white font-bold shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-300 items-center"
//           >
//             <span className="relative z-10 flex items-center gap-3">
//               Browse Products
//               <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
//             </span>
//             <div className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-all duration-1000 bg-linear-to-r from-transparent via-white/25 to-transparent"></div>
//           </Link>
//         </div>
//       </div>

//       {/* ───────── FOOTER BODY ───────── */}
//       <div className="bg-white border-t-4 border-brand-green-pale">
//         <div className="max-w-[1450px] mx-auto px-5 sm:px-6 lg:px-10 pt-16 pb-8">

//           {/* GRID - now 4 columns, with "Our Brands" instead of "Quick Links" */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

//             {/* ───── BRAND SECTION (unchanged) ───── */}
//             <div>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center">
//                   <FaLeaf className="text-white text-sm" />
//                 </div>
//                 <h2 className="text-[32px] font-black tracking-tight leading-none text-brand-green">
//                   OJAIN
//                 </h2>
//               </div>
//               <p className="text-[12px] font-bold text-brand-orange uppercase tracking-widest mb-4">
//                 Pure Veg • A Brand That Serves Pure
//               </p>
//               <div className="w-20 h-[3px] rounded-full bg-brand-green mb-5"></div>
//               <p className="text-slate-500 leading-8 text-[15px]">
//                 Instant & quick Jain premix products with multiple flavour range.
//                 Restaurant style taste — easy to make and pocket saving.
//               </p>

//               {/* Social icons (unchanged) */}
//               <div className="flex items-center gap-3 mt-8">
//                 {[
//                   { icon: <FaFacebookF size={14} />, label: "Facebook", href: "https://facebook.com" },
//                   { icon: <FaInstagram size={16} />, label: "Instagram", href: "https://instagram.com" },
//                   { icon: <FaTwitter size={14} />, label: "Twitter", href: "https://twitter.com" },
//                 ].map(({ icon, label, href }) => (
//                   <a
//                     key={label}
//                     href={href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={label}
//                     className="group w-11 h-11 rounded-xl bg-brand-green-pale border border-brand-green/20 flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-all duration-300 hover:-translate-y-1 shadow-sm"
//                   >
//                     <span className="text-brand-green group-hover:text-white transition-all duration-300">
//                       {icon}
//                     </span>
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* ───── OUR BRANDS ── with GoodieGear feature ───── */}
//             {/* ───── OUR BRANDS ──── with logos & spacing ───── */}
//             <div>
//               <h3 className="text-[22px] font-black text-brand-green">
//                 Our Brands
//               </h3>
//               <div className="w-12 h-[3px] rounded-full bg-brand-orange mt-3 mb-7"></div>

//               <div className="space-y-5">
//                 {/* ── OJAIN Card ── */}
//                 <a
//                   href="https://ojainwebsite.netlify.app"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block group p-4 rounded-2xl border-2 border-brand-green/20 hover:border-brand-green bg-gradient-to-br from-white to-brand-green-pale transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//                 >
//                   <div className="flex items-center gap-4">
//                     {/* Logo */}
//                     <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shrink-0 border border-brand-green/10 overflow-hidden">
//                       <img
//                         src="/logo.png"
//                         alt="OJAIN"
//                         className="w-full h-full object-contain"
//                       />
//                     </div>
//                     <div className="flex-1">
//                       <h4 className="text-xl font-black text-brand-green group-hover:text-brand-orange transition-colors">
//                         OJAIN
//                       </h4>
//                       <p className="text-sm text-slate-500 leading-relaxed">
//                         Pure Jain &amp; Satvik Premix Products
//                       </p>
//                       <span className="inline-flex items-center gap-1 mt-1 text-brand-green font-bold text-sm group-hover:gap-2 transition-all">
//                         Visit Store <FaArrowRight size={12} />
//                       </span>
//                     </div>
//                   </div>
//                 </a>

//                 {/* ── GoodieGear Card ── */}
//                 <a
//                   href="https://goodiegear.netlify.app"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block group p-4 rounded-2xl border-2 border-brand-orange/20 hover:border-brand-orange bg-gradient-to-br from-white to-brand-green-pale transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//                 >
//                   <div className="flex items-start gap-4">
//                     {/* Logo placeholder – replace with actual GoodieGear logo */}
//                     <div className="w-16 h-16 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0 border-2 border-brand-orange/20 group-hover:border-brand-orange/60 transition-colors">
//                       <span className="text-3xl font-black text-brand-orange">G</span>
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex items-center gap-2 flex-wrap">
//                         <h4 className="text-xl font-black text-brand-green group-hover:text-brand-orange transition-colors">
//                           GoodieGear
//                         </h4>
//                         <span className="text-[10px] font-bold bg-brand-orange/20 text-brand-orange px-2 py-0.5 rounded-full uppercase tracking-wider">
//                           Sister Concern
//                         </span>
//                       </div>
//                       <p className="text-sm text-slate-500 leading-relaxed mt-1">
//                         Premium quality products &amp; accessories — another offering from the OJAIN family.
//                       </p>
//                       <span className="inline-flex items-center gap-1 mt-2 text-brand-orange font-bold text-sm group-hover:gap-2 transition-all">
//                         Visit Store <FaArrowRight size={12} />
//                       </span>
//                     </div>
//                   </div>
//                 </a>
//               </div>
//             </div>

//             {/* ───── CATEGORIES (unchanged) ───── */}
//             <div>
//               <h3 className="text-[22px] font-black text-brand-green">
//                 Our Categories
//               </h3>
//               <div className="w-12 h-[3px] rounded-full bg-brand-orange mt-3 mb-7"></div>

//               <ul className="space-y-4">
//                 {categories.length > 0
//                   ? categories.slice(0, 6).map((cat) => (
//                     <li key={cat._id} className="group flex items-center gap-3">
//                       <span className="w-2 h-2 rounded-full bg-brand-green group-hover:scale-150 transition-all duration-300 shrink-0"></span>
//                       <Link
//                         href={`/category/${toSlug(cat.name)}`}
//                         className="text-slate-500 hover:text-brand-green group-hover:translate-x-1 transition-all duration-300 font-medium"
//                       >
//                         {cat.name}
//                       </Link>
//                     </li>
//                   ))
//                   : [
//                     { label: "Home", href: "/" },
//                     { label: "All Categories", href: "/categories" },
//                     { label: "Cart", href: "/cart" },
//                     { label: "Customer Login", href: "/customerLogin/login" },
//                   ].map(({ label, href }) => (
//                     <li key={href} className="group flex items-center gap-3">
//                       <span className="w-2 h-2 rounded-full bg-brand-green group-hover:scale-150 transition-all duration-300 shrink-0"></span>
//                       <Link
//                         href={href}
//                         className="text-slate-500 hover:text-brand-green group-hover:translate-x-1 transition-all duration-300 font-medium"
//                       >
//                         {label}
//                       </Link>
//                     </li>
//                   ))
//                 }
//               </ul>

//               {categories.length > 0 && (
//                 <Link
//                   href="/categories"
//                   className="inline-flex items-center gap-1.5 mt-5 text-brand-green font-bold text-sm hover:underline"
//                 >
//                   View All <FaArrowRight size={10} />
//                 </Link>
//               )}
//             </div>

//             {/* ───── CONTACT INFO (unchanged) ───── */}
//             <div>
//               <h3 className="text-[22px] font-black text-brand-green">
//                 Contact Info
//               </h3>
//               <div className="w-12 h-[3px] rounded-full bg-brand-orange mt-3 mb-7"></div>

//               <div className="space-y-4">
//                 <div className="group flex items-center gap-4 p-4 rounded-2xl bg-brand-green-pale border border-brand-green/10 hover:border-brand-green/30 hover:bg-brand-green-pale transition-all duration-300">
//                   <div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center shadow-md shrink-0">
//                     <FaPhoneAlt size={14} className="text-white" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
//                       Phone Number
//                     </p>
//                     <h4 className="font-bold text-brand-text mt-0.5">
//                       +91 7021833244
//                     </h4>
//                   </div>
//                 </div>

//                 <div className="group flex items-center gap-4 p-4 rounded-2xl bg-brand-green-pale border border-brand-green/10 hover:border-brand-green/30 transition-all duration-300">
//                   <div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center shadow-md shrink-0">
//                     <MdEmail size={18} className="text-white" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
//                       Email Address
//                     </p>
//                     <h4 className="font-bold text-brand-text mt-0.5">
//                       support@ojain.com
//                     </h4>
//                   </div>
//                 </div>

//                 <div className="group flex items-start gap-4 p-4 rounded-2xl bg-brand-green-pale border border-brand-green/10 hover:border-brand-green/30 transition-all duration-300">
//                   <div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center shadow-md shrink-0">
//                     <FaMapMarkerAlt size={15} className="text-white" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
//                       Office Address
//                     </p>
//                     <h4 className="font-bold text-brand-text mt-0.5 leading-7">
//                       Harihar Complex D-108,<br />
//                       Mankoli, Bhiwandi 421311,<br />
//                       Maharashtra, India
//                     </h4>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ───────── COPYRIGHT ───────── */}
//           <div className="mt-14 pt-7 border-t border-brand-green-pale flex flex-col lg:flex-row items-center justify-between gap-4">
//             <p className="text-slate-400 text-sm text-center lg:text-left">
//               © 2026{" "}
//               <span className="font-bold text-brand-green">
//                 Ojain
//               </span>.
//               All Rights Reserved.
//             </p>
//             <p className="text-slate-400 text-sm text-center lg:text-right">
//               Designed & Developed by{" "}
//               <a
//                 href="https://www.nakshatranamahacreations.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="font-bold text-brand-green hover:underline"
//               >
//                 Nakshatra Namaha Creations
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


"use client";

import Link from "next/link";
import { useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaLeaf,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useCategory } from "../../../hooks/useCategories";

function Footer() {
  const { categories, fetchCategories } = useCategory();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const toSlug = (name) => name?.toLowerCase().replace(/\s+/g, "-") ?? "";

  return (
    <footer className="relative overflow-hidden bg-white">

      {/* ───────── TOP CTA SECTION ───────── */}
      <div className="relative overflow-hidden bg-brand-green">
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-black/10 blur-3xl"></div>

        <div className="relative z-10 max-w-[1450px] mx-auto px-5 sm:px-6 lg:px-10 py-14 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 border border-white/30 text-white text-sm font-bold tracking-wide">
              <FaLeaf size={12} />
              100% Pure Veg • A Brand That Serves Pure
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              Be O-Jain.{" "}
              <span className="text-brand-orange">Live O-Jain.</span>
            </h2>
            <p className="mt-5 text-white/80 text-[16px] md:text-[17px] leading-8 max-w-2xl">
              Pure Jain & Satvik instant premix products with multiple flavour
              range — restaurant style taste that is easy to make and pocket saving.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2">
              <span className="text-white/70 text-sm font-medium">🌱 Sister Brand:</span>
              <a
                href="https://goodiegear.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-black hover:text-brand-orange transition-colors flex items-center gap-1"
              >
                GoodieGear <FaArrowRight size={12} className="text-brand-orange" />
              </a>
            </div>

            <div className="mt-6 flex items-start gap-3 bg-white/10 border border-white/20 rounded-2xl px-5 py-4 max-w-xl">
              <span className="text-brand-orange text-4xl font-black leading-none mt-1">"</span>
              <div>
                <p className="text-white font-black text-lg sm:text-xl leading-snug">
                  All Jain items you get under one brand
                </p>
                <p className="text-white/60 text-sm mt-1 font-medium">And many more yet to come...</p>
              </div>
            </div>
          </div>

          <Link
            href="/categories"
            className="group relative overflow-hidden shrink-0 inline-flex h-[62px] px-9 rounded-2xl bg-brand-orange hover:bg-[#E65100] text-white font-bold shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-300 items-center"
          >
            <span className="relative z-10 flex items-center gap-3">
              Browse Products
              <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
            </span>
            <div className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-all duration-1000 bg-linear-to-r from-transparent via-white/25 to-transparent"></div>
          </Link>
        </div>
      </div>

      {/* ───────── FOOTER BODY ───────── */}
      <div className="bg-white border-t-4 border-brand-green-pale">
        <div className="max-w-[1450px] mx-auto px-5 sm:px-6 lg:px-10 pt-16 pb-8">

          {/* GRID - now 5 columns on large screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">

            {/* ───── BRAND SECTION ───── */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center">
                  <FaLeaf className="text-white text-sm" />
                </div>
                <h2 className="text-[32px] font-black tracking-tight leading-none text-brand-green">
                  OJAIN
                </h2>
              </div>
              <p className="text-[12px] font-bold text-brand-orange uppercase tracking-widest mb-4">
                Pure Veg • A Brand That Serves Pure
              </p>
              <div className="w-20 h-[3px] rounded-full bg-brand-green mb-5"></div>
              <p className="text-slate-500 leading-8 text-[15px]">
                Instant & quick Jain premix products with multiple flavour range.
                Restaurant style taste — easy to make and pocket saving.
              </p>

              <div className="flex items-center gap-3 mt-8">
                {[
                  { icon: <FaFacebookF size={14} />, label: "Facebook", href: "https://facebook.com" },
                  { icon: <FaInstagram size={16} />, label: "Instagram", href: "https://instagram.com" },
                  { icon: <FaTwitter size={14} />, label: "Twitter", href: "https://twitter.com" },
                ].map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group w-11 h-11 rounded-xl bg-brand-green-pale border border-brand-green/20 flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-all duration-300 hover:-translate-y-1 shadow-sm"
                  >
                    <span className="text-brand-green group-hover:text-white transition-all duration-300">
                      {icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* ───── OUR BRANDS ───── */}
            <div>
              <h3 className="text-[22px] font-black text-brand-green">
                Our Brands
              </h3>
              <div className="w-12 h-[3px] rounded-full bg-brand-orange mt-3 mb-7"></div>

              <div className="space-y-5">
                <a
                  href="https://ojainwebsite.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group p-4 rounded-2xl border-2 border-brand-green/20 hover:border-brand-green bg-gradient-to-br from-white to-brand-green-pale transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shrink-0 border border-brand-green/10 overflow-hidden">
                      <img
                        src="/logo.png"
                        alt="OJAIN"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-black text-brand-green group-hover:text-brand-orange transition-colors">
                        OJAIN
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        Pure Jain &amp; Satvik Premix Products
                      </p>
                      <span className="inline-flex items-center gap-1 mt-1 text-brand-green font-bold text-sm group-hover:gap-2 transition-all">
                        Visit Store <FaArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </a>

                <a
                  href="https://goodiegear.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group p-4 rounded-2xl border-2 border-brand-orange/20 hover:border-brand-orange bg-gradient-to-br from-white to-brand-green-pale transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0 border-2 border-brand-orange/20 group-hover:border-brand-orange/60 transition-colors">
                      <span className="text-3xl font-black text-brand-orange">G</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-xl font-black text-brand-green group-hover:text-brand-orange transition-colors">
                          GoodieGear
                        </h4>
                        <span className="text-[10px] font-bold bg-brand-orange/20 text-brand-orange px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Sister Concern
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed mt-1">
                        Premium quality products &amp; accessories — another offering from the OJAIN family.
                      </p>
                      <span className="inline-flex items-center gap-1 mt-2 text-brand-orange font-bold text-sm group-hover:gap-2 transition-all">
                        Visit Store <FaArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* ───── QUICK LINKS (NEW) ───── */}
            <div>
              <h3 className="text-[22px] font-black text-brand-green">
                Quick Links
              </h3>
              <div className="w-12 h-[3px] rounded-full bg-brand-orange mt-3 mb-7"></div>

              <ul className="space-y-4">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Contact Us", href: "mailto:support@ojain.com" },
                  { label: "Privacy Policy", href: "/privacy-policy" },
                  { label: "Terms & Conditions", href: "/terms" },
                  // { label: "Customer Login", href: "/customerLogin/login" },
                  { label: "Dealer Login", href: "/vendorLogin/login" },  
                ].map(({ label, href }) => (
                  <li key={href} className="group flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-brand-green group-hover:scale-150 transition-all duration-300 shrink-0"></span>
                    <Link
                      href={href}
                      className="text-slate-500 hover:text-brand-green group-hover:translate-x-1 transition-all duration-300 font-medium"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ───── CATEGORIES ───── */}
            <div>
              <h3 className="text-[22px] font-black text-brand-green">
                Our Categories
              </h3>
              <div className="w-12 h-[3px] rounded-full bg-brand-orange mt-3 mb-7"></div>

              <ul className="space-y-4">
                {categories.length > 0
                  ? categories.slice(0, 6).map((cat) => (
                    <li key={cat._id} className="group flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-brand-green group-hover:scale-150 transition-all duration-300 shrink-0"></span>
                      <Link
                        href={`/category/${toSlug(cat.name)}`}
                        className="text-slate-500 hover:text-brand-green group-hover:translate-x-1 transition-all duration-300 font-medium"
                      >
                        {cat.name}
                      </Link>
                    </li>
                  ))
                  : [
                    { label: "Home", href: "/" },
                    { label: "All Categories", href: "/categories" },
                    { label: "Cart", href: "/cart" },
                    { label: "Customer Login", href: "/customerLogin/login" },
                  ].map(({ label, href }) => (
                    <li key={href} className="group flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-brand-green group-hover:scale-150 transition-all duration-300 shrink-0"></span>
                      <Link
                        href={href}
                        className="text-slate-500 hover:text-brand-green group-hover:translate-x-1 transition-all duration-300 font-medium"
                      >
                        {label}
                      </Link>
                    </li>
                  ))
                }
              </ul>

              {categories.length > 0 && (
                <Link
                  href="/categories"
                  className="inline-flex items-center gap-1.5 mt-5 text-brand-green font-bold text-sm hover:underline"
                >
                  View All <FaArrowRight size={10} />
                </Link>
              )}
            </div>

            {/* ───── CONTACT INFO ───── */}
            <div>
              <h3 className="text-[22px] font-black text-brand-green">
                Contact Info
              </h3>
              <div className="w-12 h-[3px] rounded-full bg-brand-orange mt-3 mb-7"></div>

              <div className="space-y-4">
                <div className="group flex items-center gap-4 p-4 rounded-2xl bg-brand-green-pale border border-brand-green/10 hover:border-brand-green/30 hover:bg-brand-green-pale transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center shadow-md shrink-0">
                    <FaPhoneAlt size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Phone Number
                    </p>
                    <h4 className="font-bold text-brand-text mt-0.5">
                      +91 7021833244
                    </h4>
                  </div>
                </div>

                <div className="group flex items-center gap-4 p-4 rounded-2xl bg-brand-green-pale border border-brand-green/10 hover:border-brand-green/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center shadow-md shrink-0">
                    <MdEmail size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Email Address
                    </p>
                    <h4 className="font-bold text-brand-text mt-0.5">
                      support@ojain.com
                    </h4>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-4 rounded-2xl bg-brand-green-pale border border-brand-green/10 hover:border-brand-green/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center shadow-md shrink-0">
                    <FaMapMarkerAlt size={15} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Office Address
                    </p>
                    <h4 className="font-bold text-brand-text mt-0.5 leading-7">
                      Harihar Complex D-108,<br />
                      Mankoli, Bhiwandi 421311,<br />
                      Maharashtra, India
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ───────── COPYRIGHT ───────── */}
          <div className="mt-14 pt-7 border-t border-brand-green-pale flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm text-center lg:text-left">
              © 2026{" "}
              <span className="font-bold text-brand-green">
                Ojain
              </span>.
              All Rights Reserved.
            </p>
            <p className="text-slate-400 text-sm text-center lg:text-right">
              Designed & Developed by{" "}
              <a
                href="https://www.nakshatranamahacreations.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-brand-green hover:underline"
              >
                Nakshatra Namaha Creations
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;