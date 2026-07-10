// // "use client";

// // import { useEffect, useRef, useState } from "react";
// // import Link from "next/link";
// // import { useRouter } from "next/navigation";
// // import {
// //   FaSearch, FaShoppingCart, FaMapMarkerAlt, FaUserCircle,
// //   FaBars, FaTimes, FaSpinner, FaChevronDown, FaSignOutAlt,
// // } from "react-icons/fa";
// // import useCartStore from "../../../store/cartStore";
// // import { useCategoryStore } from "../../../store/categoryStore";
// // import { useAuth } from "../../contexts/AuthContext";
// // import getImageUrl from "../../../utils/getImageUrl";

// // const toSlug = (name) => name?.toLowerCase().replace(/\s+/g, "-") ?? "";

// // const fetchLocationSuggestions = async (query) => {
// //   if (!query.trim() || query.length < 2) return [];
// //   try {
// //     const res = await fetch(
// //       `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=8`
// //     );
// //     const data = await res.json();
// //     return data.map((item) => ({
// //       displayName: item.display_name.split(",")[0],
// //       fullName: item.display_name,
// //     }));
// //   } catch {
// //     return [];
// //   }
// // };

// // function Navbar() {
// //   const router = useRouter();
// //   const { user, logout } = useAuth();

// //   const [location, setLocation] = useState("Set location");
// //   const [locOpen, setLocOpen] = useState(false);
// //   const [locQuery, setLocQuery] = useState("");
// //   const [locSuggestions, setLocSuggestions] = useState([]);
// //   const [locSearching, setLocSearching] = useState(false);

// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [mobileOpen, setMobileOpen] = useState(false);
// //   const [userMenuOpen, setUserMenuOpen] = useState(false);
// //   const [mounted, setMounted] = useState(false);

// //   const handleSearch = (e) => {
// //     e.preventDefault();
// //     const q = searchQuery.trim();
// //     if (!q) return;
// //     router.push(`/search?q=${encodeURIComponent(q)}`);
// //     setMobileOpen(false);
// //   };
// //   // const [loginMenuOpen, setLoginMenuOpen] = useState(false);

// //   const locRef = useRef(null);
// //   const userRef = useRef(null);
// //   // const loginRef = useRef(null);

// //   const totalItems = useCartStore((s) =>
// //     s.cart.items.reduce((sum, i) => sum + i.quantity, 0)
// //   );
// //   const categories = useCategoryStore((s) => s.categories);
// //   const fetchCategories = useCategoryStore((s) => s.fetchCategories);

// //   useEffect(() => {
// //     if (categories.length === 0) fetchCategories();
// //   }, [categories.length, fetchCategories]);

// //   useEffect(() => {
// //     const saved = localStorage.getItem("userLocation");
// //     if (saved) setLocation(saved);
// //   }, []);
// //   useEffect(() => {
// //     setMounted(true);
// //   }, []);

// //   const detectLocation = () => {
// //     if (!navigator.geolocation) return;
// //     navigator.geolocation.getCurrentPosition(
// //       async ({ coords: { latitude, longitude } }) => {
// //         try {
// //           const res = await fetch(
// //             `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
// //           );
// //           const data = await res.json();
// //           const name =
// //             data.address.city || data.address.town || data.address.state || "Current Location";
// //           setLocation(name);
// //           localStorage.setItem("userLocation", name);
// //           setLocOpen(false);
// //         } catch { }
// //       },
// //       () => { }
// //     );
// //   };

// //   useEffect(() => {
// //     const id = setTimeout(async () => {
// //       if (locQuery.length >= 2) {
// //         setLocSearching(true);
// //         const results = await fetchLocationSuggestions(locQuery);
// //         setLocSuggestions(results);
// //         setLocSearching(false);
// //       } else {
// //         setLocSuggestions([]);
// //       }
// //     }, 400);
// //     return () => clearTimeout(id);
// //   }, [locQuery]);

// //   useEffect(() => {
// //     const handler = (e) => {
// //       if (locRef.current && !locRef.current.contains(e.target)) setLocOpen(false);
// //       if (userRef.current && !userRef.current.contains(e.target)) setUserMenuOpen(false);
// //       // if (loginRef.current && !loginRef.current.contains(e.target)) setLoginMenuOpen(false);
// //     };
// //     document.addEventListener("mousedown", handler);
// //     return () => document.removeEventListener("mousedown", handler);
// //   }, []);

// //   return (
// //     <>
// //       {/* ── ANNOUNCEMENT BAR ── */}
// //       <div className="bg-brand-green text-white text-[11px] py-2 text-center font-semibold tracking-widest uppercase">
// //         🌿 Be O-Jain. Live O-Jain. &nbsp;·&nbsp; Pure Jain &amp; Satvik Premix Products &nbsp;·&nbsp; A Brand That Serves Pure 👑
// //       </div>

// //       {/* ── MAIN NAVBAR ── */}
// //       <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
// //         <div className="w-full px-4 sm:px-6 lg:px-10">

// //           {/* ── TOP ROW ── */}
// //           <div className="flex items-center h-16 md:h-[72px] gap-3 md:gap-5">

// //             {/* LOGO */}
// //             <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
// //               <img
// //                 src="/logo.png"
// //                 alt="OJAIN"
// //                 className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover ring-2 ring-brand-green/25 group-hover:ring-brand-green/50 transition"
// //               />
// //               <div className="hidden sm:block leading-none">
// //                 <p className="text-[17px] font-black text-brand-green tracking-tight">OJAIN</p>
// //                 <p className="text-[9px] font-bold text-brand-orange tracking-[0.18em] uppercase mt-0.5">Pure Veg</p>
// //               </div>
// //             </Link>

// //             {/* LOCATION — desktop */}
// //             <div className="hidden lg:block relative shrink-0" ref={locRef}>
// //               <button
// //                 onClick={() => setLocOpen(!locOpen)}
// //                 className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-50 transition group"
// //               >
// //                 <FaMapMarkerAlt className="text-brand-orange shrink-0" size={14} />
// //                 <div className="text-left">
// //                   <p className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider leading-none mb-0.5">
// //                     Delivering to
// //                   </p>
// //                   <p className="text-[13px] font-bold text-gray-800 max-w-[110px] truncate group-hover:text-brand-green transition leading-none">
// //                     {location}
// //                   </p>
// //                 </div>
// //                 <FaChevronDown
// //                   size={9}
// //                   className={`text-gray-400 transition-transform ${locOpen ? "rotate-180" : ""}`}
// //                 />
// //               </button>

// //               {/* Location dropdown */}
// //               {locOpen && (
// //                 <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-100 rounded-2xl shadow-2xl z-[9999] overflow-hidden">
// //                   <div className="p-3 border-b border-gray-100">
// //                     <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
// //                       <FaSearch size={11} className="text-gray-400 shrink-0" />
// //                       <input
// //                         type="text"
// //                         value={locQuery}
// //                         onChange={(e) => setLocQuery(e.target.value)}
// //                         placeholder="Search city or area..."
// //                         className="bg-transparent outline-none text-sm flex-1 placeholder-gray-400"
// //                         autoFocus
// //                       />
// //                     </div>
// //                   </div>
// //                   <button
// //                     onClick={detectLocation}
// //                     className="w-full flex items-center gap-3 px-4 py-3 hover:bg-brand-green-pale transition border-b border-gray-100"
// //                   >
// //                     <div className="w-8 h-8 rounded-full bg-brand-green-pale flex items-center justify-center shrink-0">
// //                       <FaMapMarkerAlt className="text-brand-green" size={13} />
// //                     </div>
// //                     <div className="text-left">
// //                       <p className="text-sm font-bold text-brand-green">Use current location</p>
// //                       <p className="text-xs text-gray-400">Detect via GPS</p>
// //                     </div>
// //                   </button>
// //                   <div className="max-h-52 overflow-y-auto">
// //                     {locSearching ? (
// //                       <div className="px-4 py-4 flex items-center gap-2 text-sm text-gray-400">
// //                         <FaSpinner className="animate-spin text-brand-green" /> Searching...
// //                       </div>
// //                     ) : locSuggestions.length > 0 ? (
// //                       locSuggestions.map((s, i) => (
// //                         <button
// //                           key={i}
// //                           onClick={() => {
// //                             setLocation(s.displayName);
// //                             localStorage.setItem("userLocation", s.displayName);
// //                             setLocQuery("");
// //                             setLocOpen(false);
// //                           }}
// //                           className="w-full flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition text-left border-b border-gray-50 last:border-0"
// //                         >
// //                           <FaMapMarkerAlt className="text-gray-300 mt-0.5 shrink-0" size={12} />
// //                           <div>
// //                             <p className="text-sm font-semibold text-gray-800">{s.displayName}</p>
// //                             <p className="text-xs text-gray-400 truncate max-w-[220px]">{s.fullName}</p>
// //                           </div>
// //                         </button>
// //                       ))
// //                     ) : locQuery.length >= 2 ? (
// //                       <p className="px-4 py-4 text-sm text-gray-400">No locations found</p>
// //                     ) : null}
// //                   </div>
// //                 </div>
// //               )}
// //             </div>

// //             {/* SEARCH BAR — desktop */}
// //             <form onSubmit={handleSearch} className="hidden md:flex flex-1 items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden h-11 focus-within:border-brand-green focus-within:ring-2 focus-within:ring-brand-green/15 transition-all">
// //               <FaSearch className="ml-4 text-gray-400 shrink-0" size={13} />
// //               <input
// //                 type="text"
// //                 value={searchQuery}
// //                 onChange={(e) => setSearchQuery(e.target.value)}
// //                 placeholder="Search for premix, spices, sweets..."
// //                 className="flex-1 px-3 py-0 h-full outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
// //               />
// //               <button type="submit" className="h-full bg-brand-green hover:bg-[#1B5E20] text-white px-5 text-[13px] font-bold transition-colors whitespace-nowrap">
// //                 Search
// //               </button>
// //             </form>

// //             {/* RIGHT SECTION */}
// //             <div className="flex items-center gap-2 ml-auto lg:ml-0 shrink-0">

// //               {/* About — desktop */}
// //               <Link
// //                 href="/about"
// //                 className="hidden lg:flex items-center gap-2 bg-brand-green-pale hover:bg-brand-green text-brand-green hover:text-white px-4 py-2 rounded-xl text-[13px] font-bold transition-all duration-200 border border-brand-green/20 hover:border-brand-green group"
// //               >
// //                 <span className="text-base group-hover:scale-110 transition-transform">🍲</span>
// //                 About Us
// //               </Link>

// //               {/* USER / LOGIN */}
// //               <div className="hidden md:block relative" ref={userRef}>
// //                 {user ? (
// //                   <>
// //                     <button
// //                       onClick={() => setUserMenuOpen(!userMenuOpen)}
// //                       className="flex items-center gap-2 bg-brand-green-pale hover:bg-brand-green/15 text-brand-green px-3 py-2 rounded-xl transition"
// //                     >
// //                       <div className="w-7 h-7 rounded-full bg-brand-green text-white flex items-center justify-center text-[12px] font-black shrink-0">
// //                         {(user.name || "U")[0].toUpperCase()}
// //                       </div>
// //                       <span className="text-[13px] font-bold max-w-[80px] truncate">
// //                         {user.name?.split(" ")[0] || "Account"}
// //                       </span>
// //                       <FaChevronDown size={9} className={`text-brand-green transition-transform ${userMenuOpen ? "rotate-180" : ""}`} />
// //                     </button>

// //                     {/* Dropdown */}
// //                     {userMenuOpen && (
// //                       <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-gray-100 rounded-2xl shadow-2xl z-[9999] overflow-hidden">
// //                         <div className="px-4 py-3 border-b border-gray-100 bg-brand-green-pale">
// //                           <p className="text-sm font-bold text-gray-800 truncate">{user.name}</p>
// //                           <p className="text-xs text-gray-400 truncate">{user.email}</p>
// //                         </div>
// //                         <button
// //                           onClick={() => { logout(); setUserMenuOpen(false); }}
// //                           className="flex items-center gap-3 w-full px-4 py-3 text-[13px] font-semibold text-red-500 hover:bg-red-50 transition"
// //                         >
// //                           <FaSignOutAlt size={13} /> Sign Out
// //                         </button>
// //                       </div>
// //                     )}
// //                   </>
// //                 ) : (
// //                   <Link
// //                     href="/customerLogin/login"
// //                     className="flex items-center gap-2 bg-brand-green hover:bg-[#1B5E20] text-white px-4 py-2.5 rounded-xl text-[13px] font-bold transition shadow-sm"
// //                   >
// //                     <FaUserCircle size={14} />
// //                     Login
// //                   </Link>
// //                 )}
// //               </div>
// //               {/* CART */}
// //               <button
// //                 onClick={() => router.push("/cart")}
// //                 className="relative flex items-center gap-2 bg-brand-orange/10 hover:bg-brand-orange/20 text-brand-orange px-3 py-2.5 rounded-xl transition"
// //                 aria-label="View cart"
// //               >
// //                 <FaShoppingCart size={16} />
// //                 {mounted && totalItems > 0 && (
// //                   <span className="text-[12px] font-black leading-none">
// //                     {totalItems > 99 ? "99+" : totalItems}
// //                   </span>
// //                 )}
// //               </button>

// //               {/* MOBILE TOGGLE */}
// //               <button
// //                 className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition"
// //                 onClick={() => setMobileOpen(!mobileOpen)}
// //               >
// //                 {mobileOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
// //               </button>
// //             </div>
// //           </div>

// //           {/* ── DESKTOP CATEGORY STRIP ── */}
// //           <div className="hidden md:block border-t border-gray-100 py-1.5 overflow-hidden relative">

// //             {/* Skeleton while loading */}
// //             {categories.length === 0 && (
// //               <div className="flex items-center gap-4 px-2">
// //                 {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
// //                   <div key={i} className="h-7 w-20 rounded-full bg-gray-100 animate-pulse shrink-0" />
// //                 ))}
// //               </div>
// //             )}

// //             {/* Marquee — duplicated for seamless loop */}
// //             {categories.length > 0 && (
// //               <div className="animate-marquee flex items-center gap-2 w-max">
// //                 {[...categories, ...categories].map((cat, idx) => (
// //                   <Link
// //                     key={idx}
// //                     href={`/category/${toSlug(cat.name)}`}
// //                     tabIndex={idx >= categories.length ? -1 : 0}
// //                     aria-hidden={idx >= categories.length}
// //                     className="group flex items-center gap-3 px-4 py-2 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-brand-green transition-all duration-300 whitespace-nowrap shrink-0"
// //                   >
// //                     <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-green/20 bg-white shadow-md shrink-0 flex items-center justify-center">
// //                       <img
// //                         src={getImageUrl(cat.image) || "/category1.jpg"}
// //                         alt={cat.name}
// //                         className="w-[90%] h-[90%] object-contain transition-all duration-300 group-hover:scale-110"
// //                         onError={(e) => {
// //                           e.target.onerror = null;
// //                           e.target.src = "/category1.jpg";
// //                         }}
// //                       />  
// //                     </div>

// //                     <span className="text-[13px] font-semibold text-gray-700 group-hover:text-brand-green">
// //                       {cat.name}
// //                     </span>
// //                   </Link>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         {/* ── MOBILE SEARCH ── */}
// //         <div className="md:hidden px-4 pb-2 border-t border-gray-100 pt-2">
// //           <form onSubmit={handleSearch} className="flex items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden h-10">
// //             <FaSearch className="ml-3 text-gray-400 shrink-0" size={12} />
// //             <input
// //               type="text"
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //               placeholder="Search food..."
// //               className="flex-1 px-3 h-full outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
// //             />
// //             <button type="submit" className="h-full bg-brand-green text-white px-4 text-[12px] font-bold">
// //               Go
// //             </button>
// //           </form>
// //         </div>

// //         {/* ── MOBILE CATEGORY STRIP ── */}
// //         <div className="md:hidden overflow-hidden pb-3 border-t border-gray-100 pt-2">
// //           {/* Skeleton */}
// //           {categories.length === 0 && (
// //             <div className="flex items-center gap-4 px-4">
// //               {[1, 2, 3, 4, 5].map((i) => (
// //                 <div key={i} className="flex flex-col items-center gap-1 shrink-0 animate-pulse">
// //                   <div className="w-12 h-12 rounded-2xl bg-gray-100" />
// //                   <div className="h-2 w-10 bg-gray-100 rounded-full" />
// //                 </div>
// //               ))}
// //             </div>
// //           )}

// //           {/* Marquee — duplicated for seamless loop */}
// //           {categories.length > 0 && (
// //             <div className="animate-marquee-mobile flex items-center gap-4 w-max px-4">
// //               {[...categories, ...categories].map((cat, idx) => (
// //                 <Link
// //                   key={idx}
// //                   href={`/category/${toSlug(cat.name)}`}
// //                   tabIndex={idx >= categories.length ? -1 : 0}
// //                   aria-hidden={idx >= categories.length}
// //                   className="flex flex-col items-center gap-1 shrink-0"
// //                 >
// //                   <div className="w-20 h-20 rounded-2xl bg-white border border-gray-200 flex items-center justify-center p-2">
// //                     <img
// //                       src={getImageUrl(cat.image) || "/category1.jpg"}
// //                       alt={cat.name}
// //                       className="w-full h-full object-contain"
// //                     />
// //                   </div>
// //                   <span className="text-[9px] font-semibold text-gray-500 max-w-14 truncate text-center">
// //                     {cat.name}
// //                   </span>
// //                 </Link>
// //               ))}
// //             </div>
// //           )}
// //         </div>

// //         {/* ── MOBILE MENU PANEL ── */}
// //         {mobileOpen && (
// //           <div className="md:hidden border-t border-gray-100 bg-white shadow-xl animate-fade-up">
// //             <div className="px-4 py-4 space-y-0.5">
// //               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 mb-2">
// //                 Account
// //               </p>
// //               {user ? (
// //                 <>
// //                   <div className="flex items-center gap-3 px-3 py-3 mb-1 bg-brand-green-pale rounded-2xl">
// //                     <div className="w-9 h-9 rounded-full bg-brand-green text-white flex items-center justify-center font-black text-sm shrink-0">
// //                       {(user.name || "U")[0].toUpperCase()}
// //                     </div>
// //                     <div>
// //                       <p className="text-sm font-bold text-gray-800">{user.name}</p>
// //                       <p className="text-xs text-gray-400">{user.email}</p>
// //                     </div>
// //                   </div>
// //                   <button
// //                     onClick={() => { logout(); setMobileOpen(false); }}
// //                     className="flex items-center gap-3 w-full px-3 py-3 text-[14px] font-semibold text-red-500 hover:bg-red-50 rounded-xl transition"
// //                   >
// //                     <FaSignOutAlt size={14} /> Sign Out
// //                   </button>
// //                 </>
// //               ) : (
// //                 [
// //                   { href: "/customerLogin/login", label: "👤 Customer Login" },
// //                   { href: "/vendorLogin/login", label: "🏪 Vendor Login" },
// //                 ].map(({ href, label }) => (
// //                   <Link
// //                     key={href}
// //                     href={href}
// //                     onClick={() => setMobileOpen(false)}
// //                     className="block px-3 py-3 text-[14px] font-semibold text-gray-700 hover:text-brand-green hover:bg-brand-green-pale rounded-xl transition"
// //                   >
// //                     {label}
// //                   </Link>
// //                 ))
// //               )}

// //               <div className="pt-2 border-t border-gray-100 mt-2">
// //                 <Link
// //                   href="/about"
// //                   onClick={() => setMobileOpen(false)}
// //                   className="flex items-center gap-3 px-3 py-3 rounded-2xl bg-linear-to-r from-brand-green-pale to-white border border-brand-green/15 hover:border-brand-green/40 hover:bg-brand-green-pale transition group"
// //                 >
// //                   <div className="w-9 h-9 rounded-xl bg-brand-green flex items-center justify-center text-white text-base shrink-0 group-hover:scale-110 transition-transform">
// //                     🍲
// //                   </div>
// //                   <div>
// //                     <p className="text-[14px] font-bold text-gray-800 group-hover:text-brand-green transition">About OJAIN</p>
// //                     <p className="text-[10px] text-gray-400 font-medium">Our story, mission & values</p>
// //                   </div>
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </header>
// //     </>
// //   );
// // }

// // export default Navbar;



// // "use client";

// // import { useEffect, useRef, useState } from "react";
// // import Link from "next/link";
// // import { useRouter } from "next/navigation";
// // import {
// //   FaSearch, FaShoppingCart, FaMapMarkerAlt, FaUserCircle,
// //   FaBars, FaTimes, FaSpinner, FaChevronDown, FaSignOutAlt,
// // } from "react-icons/fa";
// // import useCartStore from "../../../store/cartStore";
// // import { useCategoryStore } from "../../../store/categoryStore";
// // import { useAuth } from "../../contexts/AuthContext";
// // import getImageUrl from "../../../utils/getImageUrl";

// // const toSlug = (name) => name?.toLowerCase().replace(/\s+/g, "-") ?? "";

// // const fetchLocationSuggestions = async (query) => {
// //   if (!query.trim() || query.length < 2) return [];
// //   try {
// //     const res = await fetch(
// //       `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=8`
// //     );
// //     const data = await res.json();
// //     return data.map((item) => ({
// //       displayName: item.display_name.split(",")[0],
// //       fullName: item.display_name,
// //     }));
// //   } catch {
// //     return [];
// //   }
// // };

// // function Navbar() {
// //   const router = useRouter();
// //   const { user, logout } = useAuth();

// //   const [location, setLocation] = useState("Set location");
// //   const [locOpen, setLocOpen] = useState(false);
// //   const [locQuery, setLocQuery] = useState("");
// //   const [locSuggestions, setLocSuggestions] = useState([]);
// //   const [locSearching, setLocSearching] = useState(false);

// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [mobileOpen, setMobileOpen] = useState(false);
// //   const [userMenuOpen, setUserMenuOpen] = useState(false);
// //   const [mounted, setMounted] = useState(false);

// //   const handleSearch = (e) => {
// //     e.preventDefault();
// //     const q = searchQuery.trim();
// //     if (!q) return;
// //     router.push(`/search?q=${encodeURIComponent(q)}`);
// //     setMobileOpen(false);
// //   };

// //   const locRef = useRef(null);
// //   const userRef = useRef(null);

// //   const totalItems = useCartStore((s) =>
// //     s.cart.items.reduce((sum, i) => sum + i.quantity, 0)
// //   );
// //   const categories = useCategoryStore((s) => s.categories);
// //   const fetchCategories = useCategoryStore((s) => s.fetchCategories);

// //   useEffect(() => {
// //     if (categories.length === 0) fetchCategories();
// //   }, [categories.length, fetchCategories]);

// //   useEffect(() => {
// //     const saved = localStorage.getItem("userLocation");
// //     if (saved) setLocation(saved);
// //   }, []);
// //   useEffect(() => {
// //     setMounted(true);
// //   }, []);

// //   const detectLocation = () => {
// //     if (!navigator.geolocation) return;
// //     navigator.geolocation.getCurrentPosition(
// //       async ({ coords: { latitude, longitude } }) => {
// //         try {
// //           const res = await fetch(
// //             `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
// //           );
// //           const data = await res.json();
// //           const name =
// //             data.address.city || data.address.town || data.address.state || "Current Location";
// //           setLocation(name);
// //           localStorage.setItem("userLocation", name);
// //           setLocOpen(false);
// //         } catch { }
// //       },
// //       () => { }
// //     );
// //   };

// //   useEffect(() => {
// //     const id = setTimeout(async () => {
// //       if (locQuery.length >= 2) {
// //         setLocSearching(true);
// //         const results = await fetchLocationSuggestions(locQuery);
// //         setLocSuggestions(results);
// //         setLocSearching(false);
// //       } else {
// //         setLocSuggestions([]);
// //       }
// //     }, 400);
// //     return () => clearTimeout(id);
// //   }, [locQuery]);

// //   useEffect(() => {
// //     const handler = (e) => {
// //       if (locRef.current && !locRef.current.contains(e.target)) setLocOpen(false);
// //       if (userRef.current && !userRef.current.contains(e.target)) setUserMenuOpen(false);
// //     };
// //     document.addEventListener("mousedown", handler);
// //     return () => document.removeEventListener("mousedown", handler);
// //   }, []);

// //   return (
// //     <>
// //       {/* ── ANNOUNCEMENT BAR ── */}
// //       <div className="bg-brand-green text-white text-[11px] py-2 text-center font-semibold tracking-widest uppercase">
// //         🌿 Be O-Jain. Live O-Jain. &nbsp;·&nbsp; Pure Jain &amp; Satvik Premix Products &nbsp;·&nbsp; A Brand That Serves Pure 👑
// //       </div>

// //       {/* ── MAIN NAVBAR ── */}
// //       <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
// //         <div className="w-full px-4 sm:px-6 lg:px-10">

// //           {/* ── TOP ROW ── */}
// //           <div className="flex items-center h-16 md:h-[72px] gap-3 md:gap-5">

// //             {/* LOGO */}
// //             <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
// //               <img
// //                 src="/logo.png"
// //                 alt="OJAIN"
// //                 className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover ring-2 ring-brand-green/25 group-hover:ring-brand-green/50 transition"
// //               />
// //               <div className="hidden sm:block leading-none">
// //                 <p className="text-[17px] font-black text-brand-green tracking-tight">OJAIN</p>
// //                 <p className="text-[9px] font-bold text-brand-orange tracking-[0.18em] uppercase mt-0.5">Pure Veg</p>
// //               </div>
// //             </Link>

// //             {/* LOCATION — desktop */}
// //             <div className="hidden lg:block relative shrink-0" ref={locRef}>
// //               <button
// //                 onClick={() => setLocOpen(!locOpen)}
// //                 className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-50 transition group"
// //               >
// //                 <FaMapMarkerAlt className="text-brand-orange shrink-0" size={14} />
// //                 <div className="text-left">
// //                   <p className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider leading-none mb-0.5">
// //                     Delivering to
// //                   </p>
// //                   <p className="text-[13px] font-bold text-gray-800 max-w-[110px] truncate group-hover:text-brand-green transition leading-none">
// //                     {location}
// //                   </p>
// //                 </div>
// //                 <FaChevronDown
// //                   size={9}
// //                   className={`text-gray-400 transition-transform ${locOpen ? "rotate-180" : ""}`}
// //                 />
// //               </button>

// //               {/* Location dropdown */}
// //               {locOpen && (
// //                 <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-100 rounded-2xl shadow-2xl z-[9999] overflow-hidden">
// //                   <div className="p-3 border-b border-gray-100">
// //                     <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
// //                       <FaSearch size={11} className="text-gray-400 shrink-0" />
// //                       <input
// //                         type="text"
// //                         value={locQuery}
// //                         onChange={(e) => setLocQuery(e.target.value)}
// //                         placeholder="Search city or area..."
// //                         className="bg-transparent outline-none text-sm flex-1 placeholder-gray-400"
// //                         autoFocus
// //                       />
// //                     </div>
// //                   </div>
// //                   <button
// //                     onClick={detectLocation}
// //                     className="w-full flex items-center gap-3 px-4 py-3 hover:bg-brand-green-pale transition border-b border-gray-100"
// //                   >
// //                     <div className="w-8 h-8 rounded-full bg-brand-green-pale flex items-center justify-center shrink-0">
// //                       <FaMapMarkerAlt className="text-brand-green" size={13} />
// //                     </div>
// //                     <div className="text-left">
// //                       <p className="text-sm font-bold text-brand-green">Use current location</p>
// //                       <p className="text-xs text-gray-400">Detect via GPS</p>
// //                     </div>
// //                   </button>
// //                   <div className="max-h-52 overflow-y-auto">
// //                     {locSearching ? (
// //                       <div className="px-4 py-4 flex items-center gap-2 text-sm text-gray-400">
// //                         <FaSpinner className="animate-spin text-brand-green" /> Searching...
// //                       </div>
// //                     ) : locSuggestions.length > 0 ? (
// //                       locSuggestions.map((s, i) => (
// //                         <button
// //                           key={i}
// //                           onClick={() => {
// //                             setLocation(s.displayName);
// //                             localStorage.setItem("userLocation", s.displayName);
// //                             setLocQuery("");
// //                             setLocOpen(false);
// //                           }}
// //                           className="w-full flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition text-left border-b border-gray-50 last:border-0"
// //                         >
// //                           <FaMapMarkerAlt className="text-gray-300 mt-0.5 shrink-0" size={12} />
// //                           <div>
// //                             <p className="text-sm font-semibold text-gray-800">{s.displayName}</p>
// //                             <p className="text-xs text-gray-400 truncate max-w-[220px]">{s.fullName}</p>
// //                           </div>
// //                         </button>
// //                       ))
// //                     ) : locQuery.length >= 2 ? (
// //                       <p className="px-4 py-4 text-sm text-gray-400">No locations found</p>
// //                     ) : null}
// //                   </div>
// //                 </div>
// //               )}
// //             </div>

// //             {/* SEARCH BAR — desktop */}
// //             <form onSubmit={handleSearch} className="hidden md:flex flex-1 items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden h-11 focus-within:border-brand-green focus-within:ring-2 focus-within:ring-brand-green/15 transition-all">
// //               <FaSearch className="ml-4 text-gray-400 shrink-0" size={13} />
// //               <input
// //                 type="text"
// //                 value={searchQuery}
// //                 onChange={(e) => setSearchQuery(e.target.value)}
// //                 placeholder="Search for premix, spices, sweets..."
// //                 className="flex-1 px-3 py-0 h-full outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
// //               />
// //               <button type="submit" className="h-full bg-brand-green hover:bg-[#1B5E20] text-white px-5 text-[13px] font-bold transition-colors whitespace-nowrap">
// //                 Search
// //               </button>
// //             </form>

// //             {/* RIGHT SECTION */}
// //             <div className="flex items-center gap-2 ml-auto lg:ml-0 shrink-0">

// //               {/* About — desktop */}
// //               <Link
// //                 href="/about"
// //                 className="hidden lg:flex items-center gap-2 bg-brand-green-pale hover:bg-brand-green text-brand-green hover:text-white px-4 py-2 rounded-xl text-[13px] font-bold transition-all duration-200 border border-brand-green/20 hover:border-brand-green group"
// //               >
// //                 <span className="text-base group-hover:scale-110 transition-transform">🍲</span>
// //                 About Us
// //               </Link>

// //               {/* USER / LOGIN */}
// //               <div className="hidden md:block relative" ref={userRef}>
// //                 {user ? (
// //                   <>
// //                     <button
// //                       onClick={() => setUserMenuOpen(!userMenuOpen)}
// //                       className="flex items-center gap-2 bg-brand-green-pale hover:bg-brand-green/15 text-brand-green px-3 py-2 rounded-xl transition"
// //                     >
// //                       <div className="w-7 h-7 rounded-full bg-brand-green text-white flex items-center justify-center text-[12px] font-black shrink-0">
// //                         {(user.name || "U")[0].toUpperCase()}
// //                       </div>
// //                       <span className="text-[13px] font-bold max-w-[80px] truncate">
// //                         {user.name?.split(" ")[0] || "Account"}
// //                       </span>
// //                       <FaChevronDown size={9} className={`text-brand-green transition-transform ${userMenuOpen ? "rotate-180" : ""}`} />
// //                     </button>

// //                     {/* Dropdown */}
// //                     {userMenuOpen && (
// //                       <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-gray-100 rounded-2xl shadow-2xl z-[9999] overflow-hidden">
// //                         <div className="px-4 py-3 border-b border-gray-100 bg-brand-green-pale">
// //                           <p className="text-sm font-bold text-gray-800 truncate">{user.name}</p>
// //                           <p className="text-xs text-gray-400 truncate">{user.email}</p>
// //                         </div>
// //                         <button
// //                           onClick={() => { logout(); setUserMenuOpen(false); }}
// //                           className="flex items-center gap-3 w-full px-4 py-3 text-[13px] font-semibold text-red-500 hover:bg-red-50 transition"
// //                         >
// //                           <FaSignOutAlt size={13} /> Sign Out
// //                         </button>
// //                       </div>
// //                     )}
// //                   </>
// //                 ) : (
// //                   <Link
// //                     href="/customerLogin/login"
// //                     className="flex items-center gap-2 bg-brand-green hover:bg-[#1B5E20] text-white px-4 py-2.5 rounded-xl text-[13px] font-bold transition shadow-sm"
// //                   >
// //                     <FaUserCircle size={14} />
// //                     Login
// //                   </Link>
// //                 )}
// //               </div>
// //               {/* CART */}
// //               <button
// //                 onClick={() => router.push("/cart")}
// //                 className="relative flex items-center gap-2 bg-brand-orange/10 hover:bg-brand-orange/20 text-brand-orange px-3 py-2.5 rounded-xl transition"
// //                 aria-label="View cart"
// //               >
// //                 <FaShoppingCart size={16} />
// //                 {mounted && totalItems > 0 && (
// //                   <span className="text-[12px] font-black leading-none">
// //                     {totalItems > 99 ? "99+" : totalItems}
// //                   </span>
// //                 )}
// //               </button>

// //               {/* MOBILE TOGGLE */}
// //               <button
// //                 className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition"
// //                 onClick={() => setMobileOpen(!mobileOpen)}
// //               >
// //                 {mobileOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
// //               </button>
// //             </div>
// //           </div>

// //           {/* ── DESKTOP CATEGORY STRIP (UPDATED CARDS) ── */}
// //           <div className="hidden md:block border-t border-gray-100 py-3 overflow-hidden relative">

// //             {/* Skeleton while loading */}
// //             {categories.length === 0 && (
// //               <div className="flex items-center gap-4 px-2">
// //                 {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
// //                   <div key={i} className="w-28 h-28 rounded-2xl bg-gray-100 animate-pulse shrink-0" />
// //                 ))}
// //               </div>
// //             )}

// //             {/* Marquee — duplicated for seamless loop */}
// //             {categories.length > 0 && (
// //               <div className="animate-marquee flex items-center gap-4 w-max px-2">
// //                 {[...categories, ...categories].map((cat, idx) => (
// //                   <Link
// //                     key={idx}
// //                     href={`/category/${toSlug(cat.name)}`}
// //                     tabIndex={idx >= categories.length ? -1 : 0}
// //                     aria-hidden={idx >= categories.length}
// //                     // className="group flex flex-col items-center gap-2 p-3 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-28"
// //                     className="group flex flex-col items-center gap-2 transition-all duration-300"
// //                   >
// //                     {/* <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white flex items-center justify-center"> */}
// //                     <div className="w-20 h-20 rounded-full overflow-hidden bg-white border-2 border-brand-green/20 shadow-md flex items-center justify-center group-hover:border-brand-green group-hover:scale-105 transition-all duration-300">
// //                       <img
// //                         src={getImageUrl(cat.image) || "/category1.jpg"}
// //                         alt={cat.name}
// //                         className="w-full h-full object-cover object-right transition-all duration-300 group-hover:scale-110"
// //                         onError={(e) => {
// //                           e.target.onerror = null;
// //                           e.target.src = "/category1.jpg";
// //                         }}
// //                       />
// //                     </div>
// //                     <span className="text-[13px] font-semibold text-gray-700 group-hover:text-brand-green text-center line-clamp-1">
// //                       {cat.name}
// //                     </span>
// //                   </Link>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         {/* ── MOBILE SEARCH ── */}
// //         <div className="md:hidden px-4 pb-2 border-t border-gray-100 pt-2">
// //           <form onSubmit={handleSearch} className="flex items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden h-10">
// //             <FaSearch className="ml-3 text-gray-400 shrink-0" size={12} />
// //             <input
// //               type="text"
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //               placeholder="Search food..."
// //               className="flex-1 px-3 h-full outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
// //             />
// //             <button type="submit" className="h-full bg-brand-green text-white px-4 text-[12px] font-bold">
// //               Go
// //             </button>
// //           </form>
// //         </div>

// //         {/* ── MOBILE CATEGORY STRIP (UPDATED CARDS) ── */}
// //         <div className="md:hidden overflow-hidden pb-3 border-t border-gray-100 pt-2">
// //           {/* Skeleton */}
// //           {categories.length === 0 && (
// //             <div className="flex items-center gap-4 px-4">
// //               {[1, 2, 3, 4, 5].map((i) => (
// //                 <div key={i} className="flex flex-col items-center gap-1 shrink-0 animate-pulse">
// //                   <div className="w-16 h-16 rounded-2xl bg-gray-100" />
// //                   <div className="h-3 w-12 bg-gray-100 rounded-full" />
// //                 </div>
// //               ))}
// //             </div>
// //           )}

// //           {/* Marquee — duplicated for seamless loop */}
// //           {categories.length > 0 && (
// //             <div className="animate-marquee-mobile flex items-center gap-3 w-max px-8">

// //               {[...categories, ...categories].map((cat, idx) => (
// //                 <Link
// //                   key={idx}
// //                   href={`/category/${toSlug(cat.name)}`}
// //                   tabIndex={idx >= categories.length ? -1 : 0}
// //                   aria-hidden={idx >= categories.length}
// //                   className="flex flex-col items-center gap-1 shrink-0 transition"
// //                 // className="flex flex-col items-center gap-1 shrink-0 p-2 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
// //                 >
// //                   {/* <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center p-1"> */}
// //                   <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-green/20 shadow-md flex items-center justify-center overflow-hidden group-hover:border-brand-green transition-all">
// //                     <img
// //                       src={getImageUrl(cat.image) || "/category1.jpg"}
// //                       alt={cat.name}
// //                       className="w-full h-full object-cover object-right"
// //                     />
// //                   </div>
// //                   <span className="mt-2 text-[11px] font-medium text-center leading-4 line-clamp-2 text-gray-700">
// //                     {cat.name}
// //                   </span>

// //                 </Link>
// //               ))}
// //             </div>
// //           )}
// //         </div>

// //         {/* ── MOBILE MENU PANEL ── */}
// //         {mobileOpen && (
// //           <div className="md:hidden border-t border-gray-100 bg-white shadow-xl animate-fade-up">
// //             <div className="px-4 py-4 space-y-0.5">
// //               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 mb-2">
// //                 Account
// //               </p>
// //               {user ? (
// //                 <>
// //                   <div className="flex items-center gap-3 px-3 py-3 mb-1 bg-brand-green-pale rounded-2xl">
// //                     <div className="w-9 h-9 rounded-full bg-brand-green text-white flex items-center justify-center font-black text-sm shrink-0">
// //                       {(user.name || "U")[0].toUpperCase()}
// //                     </div>
// //                     <div>
// //                       <p className="text-sm font-bold text-gray-800">{user.name}</p>
// //                       <p className="text-xs text-gray-400">{user.email}</p>
// //                     </div>
// //                   </div>
// //                   <button
// //                     onClick={() => { logout(); setMobileOpen(false); }}
// //                     className="flex items-center gap-3 w-full px-3 py-3 text-[14px] font-semibold text-red-500 hover:bg-red-50 rounded-xl transition"
// //                   >
// //                     <FaSignOutAlt size={14} /> Sign Out
// //                   </button>
// //                 </>
// //               ) : (
// //                 [
// //                   { href: "/customerLogin/login", label: "👤 Customer Login" },
// //                   { href: "/vendorLogin/login", label: "🏪 Vendor Login" },
// //                 ].map(({ href, label }) => (
// //                   <Link
// //                     key={href}
// //                     href={href}
// //                     onClick={() => setMobileOpen(false)}
// //                     className="block px-3 py-3 text-[14px] font-semibold text-gray-700 hover:text-brand-green hover:bg-brand-green-pale rounded-xl transition"
// //                   >
// //                     {label}
// //                   </Link>
// //                 ))
// //               )}

// //               <div className="pt-2 border-t border-gray-100 mt-2">
// //                 <Link
// //                   href="/about"
// //                   onClick={() => setMobileOpen(false)}
// //                   className="flex items-center gap-3 px-3 py-3 rounded-2xl bg-linear-to-r from-brand-green-pale to-white border border-brand-green/15 hover:border-brand-green/40 hover:bg-brand-green-pale transition group"
// //                 >
// //                   <div className="w-9 h-9 rounded-xl bg-brand-green flex items-center justify-center text-white text-base shrink-0 group-hover:scale-110 transition-transform">
// //                     🍲
// //                   </div>
// //                   <div>
// //                     <p className="text-[14px] font-bold text-gray-800 group-hover:text-brand-green transition">About OJAIN</p>
// //                     <p className="text-[10px] text-gray-400 font-medium">Our story, mission & values</p>
// //                   </div>
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </header>
// //     </>
// //   );
// // }

// // export default Navbar;


// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import {
//   FaSearch, FaShoppingCart, FaMapMarkerAlt, FaUserCircle,
//   FaBars, FaTimes, FaSpinner, FaChevronDown, FaSignOutAlt,
//   FaStore, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaLeaf
// } from "react-icons/fa";
// import toast from "react-hot-toast";
// import useCartStore from "../../../store/cartStore";
// import { useCategoryStore } from "../../../store/categoryStore";
// import { useAuth } from "../../contexts/AuthContext";
// import { useDealer } from "../../../hooks/useDealer";        // ← dealer hook
// import { validateEmail, validatePassword } from "../../../shared/validation";
// import getImageUrl from "../../../utils/getImageUrl";

// const toSlug = (name) => name?.toLowerCase().replace(/\s+/g, "-") ?? "";

// const fetchLocationSuggestions = async (query) => {
//   if (!query.trim() || query.length < 2) return [];
//   try {
//     const res = await fetch(
//       `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=8`
//     );
//     const data = await res.json();
//     return data.map((item) => ({
//       displayName: item.display_name.split(",")[0],
//       fullName: item.display_name,
//     }));
//   } catch {
//     return [];
//   }
// };

// // ---------- Reusable Input Field (same as DealerLogin) ----------
// const InputField = ({ icon, type, name, placeholder, value, error, onChange, rightSlot }) => (
//   <div>
//     <div className={`flex items-center h-14 rounded-2xl border px-4 bg-white transition-all duration-300
//       ${error ? "border-red-400" : "border-gray-300 focus-within:border-brand-green focus-within:ring-4 focus-within:ring-brand-green-pale"}`}>
//       <div className="text-brand-green text-lg">{icon}</div>
//       <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}
//         className="w-full h-full bg-transparent outline-none px-3 text-gray-800 placeholder:text-gray-400" />
//       {rightSlot && <div className="ml-2">{rightSlot}</div>}
//     </div>
//     {error && <p className="text-red-500 text-sm mt-1 ml-1">{error}</p>}
//   </div>
// );

// function Navbar() {
//   const router = useRouter();
//   const { user, logout } = useAuth();
//   const { login, isLoading } = useDealer();                // dealer login hook

//   const [location, setLocation] = useState("Set location");
//   const [locOpen, setLocOpen] = useState(false);
//   const [locQuery, setLocQuery] = useState("");
//   const [locSuggestions, setLocSuggestions] = useState([]);
//   const [locSearching, setLocSearching] = useState(false);

//   const [searchQuery, setSearchQuery] = useState("");
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   // Modal state
//   const [showDealerModal, setShowDealerModal] = useState(false);

//   // Dealer form state
//   const [dealerForm, setDealerForm] = useState({ email: "", password: "" });
//   const [dealerErrors, setDealerErrors] = useState({});
//   const [showDealerPassword, setShowDealerPassword] = useState(false);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const q = searchQuery.trim();
//     if (!q) return;
//     router.push(`/search?q=${encodeURIComponent(q)}`);
//     setMobileOpen(false);
//   };

//   const locRef = useRef(null);
//   const userRef = useRef(null);
//   const modalRef = useRef(null);

//   const totalItems = useCartStore((s) =>
//     s.cart.items.reduce((sum, i) => sum + i.quantity, 0)
//   );
//   const categories = useCategoryStore((s) => s.categories);
//   const fetchCategories = useCategoryStore((s) => s.fetchCategories);

//   useEffect(() => {
//     if (categories.length === 0) fetchCategories();
//   }, [categories.length, fetchCategories]);

//   useEffect(() => {
//     const saved = localStorage.getItem("userLocation");
//     if (saved) setLocation(saved);
//   }, []);
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // Detect location
//   const detectLocation = () => {
//     if (!navigator.geolocation) return;
//     navigator.geolocation.getCurrentPosition(
//       async ({ coords: { latitude, longitude } }) => {
//         try {
//           const res = await fetch(
//             `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
//           );
//           const data = await res.json();
//           const name =
//             data.address.city || data.address.town || data.address.state || "Current Location";
//           setLocation(name);
//           localStorage.setItem("userLocation", name);
//           setLocOpen(false);
//         } catch { }
//       },
//       () => { }
//     );
//   };

//   // Location suggestions
//   useEffect(() => {
//     const id = setTimeout(async () => {
//       if (locQuery.length >= 2) {
//         setLocSearching(true);
//         const results = await fetchLocationSuggestions(locQuery);
//         setLocSuggestions(results);
//         setLocSearching(false);
//       } else {
//         setLocSuggestions([]);
//       }
//     }, 400);
//     return () => clearTimeout(id);
//   }, [locQuery]);

//   // Click outside handlers
//   useEffect(() => {
//     const handler = (e) => {
//       if (locRef.current && !locRef.current.contains(e.target)) setLocOpen(false);
//       if (userRef.current && !userRef.current.contains(e.target)) setUserMenuOpen(false);
//       if (modalRef.current && !modalRef.current.contains(e.target) && showDealerModal) {
//         setShowDealerModal(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, [showDealerModal]);

//   // Dealer form validation
//   const validateDealerField = (name, value) => {
//     if (name === "email") return validateEmail(value);
//     if (name === "password") return validatePassword(value);
//     return "";
//   };

//   const validateDealerForm = () => {
//     const newErrors = {};
//     Object.keys(dealerForm).forEach((key) => {
//       const err = validateDealerField(key, dealerForm[key]);
//       if (err) newErrors[key] = err;
//     });
//     setDealerErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleDealerChange = (e) => {
//     const { name, value } = e.target;
//     setDealerForm((prev) => ({ ...prev, [name]: value }));
//     setDealerErrors((prev) => ({ ...prev, [name]: validateDealerField(name, value) }));
//   };

//   const handleDealerSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateDealerForm()) {
//       toast.error("Please fix form errors");
//       return;
//     }
//     try {
//       const result = await login(dealerForm);
//       if (result.success) {
//         toast.success("Login successful");
//         setShowDealerModal(false);
//         setTimeout(() => router.push("/dealer/dashboard"), 1000);
//       } else {
//         toast.error(result.error || "Login failed");
//       }
//     } catch (err) {
//       const msg = err?.response?.data?.message || err?.message || "";
//       const notFound = /not found|not registered|no user|does not exist|invalid credentials/i.test(msg);
//       if (notFound) {
//         toast.error("Account not found. Please register first!", { duration: 4000 });
//       } else {
//         toast.error(msg || "Login failed");
//       }
//     }
//   };

//   return (
//     <>
//       {/* ── ANNOUNCEMENT BAR ── */}
//       <div className="bg-brand-green text-white text-[11px] py-2 text-center font-semibold tracking-widest uppercase">
//         🌿 Be O-Jain. Live O-Jain. &nbsp;·&nbsp; Pure Jain &amp; Satvik Premix Products &nbsp;·&nbsp; A Brand That Serves Pure 👑
//       </div>

//       {/* ── MAIN NAVBAR ── */}
//       <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
//         <div className="w-full px-4 sm:px-6 lg:px-10">

//           {/* ── TOP ROW ── */}
//           <div className="flex items-center h-16 md:h-[72px] gap-3 md:gap-5">

//             {/* LOGO */}
//             <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
//               <img
//                 src="/logo.png"
//                 alt="OJAIN"
//                 className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover ring-2 ring-brand-green/25 group-hover:ring-brand-green/50 transition"
//               />
//               <div className="hidden sm:block leading-none">
//                 <p className="text-[17px] font-black text-brand-green tracking-tight">OJAIN</p>
//                 <p className="text-[9px] font-bold text-brand-orange tracking-[0.18em] uppercase mt-0.5">Pure Veg</p>
//               </div>
//             </Link>

//             {/* LOCATION — desktop */}
//             <div className="hidden lg:block relative shrink-0" ref={locRef}>
//               <button
//                 onClick={() => setLocOpen(!locOpen)}
//                 className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-50 transition group"
//               >
//                 <FaMapMarkerAlt className="text-brand-orange shrink-0" size={14} />
//                 <div className="text-left">
//                   <p className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider leading-none mb-0.5">
//                     Delivering to
//                   </p>
//                   <p className="text-[13px] font-bold text-gray-800 max-w-[110px] truncate group-hover:text-brand-green transition leading-none">
//                     {location}
//                   </p>
//                 </div>
//                 <FaChevronDown
//                   size={9}
//                   className={`text-gray-400 transition-transform ${locOpen ? "rotate-180" : ""}`}
//                 />
//               </button>

//               {/* Location dropdown (unchanged) */}
//               {locOpen && (
//                 <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-100 rounded-2xl shadow-2xl z-[9999] overflow-hidden">
//                   <div className="p-3 border-b border-gray-100">
//                     <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
//                       <FaSearch size={11} className="text-gray-400 shrink-0" />
//                       <input
//                         type="text"
//                         value={locQuery}
//                         onChange={(e) => setLocQuery(e.target.value)}
//                         placeholder="Search city or area..."
//                         className="bg-transparent outline-none text-sm flex-1 placeholder-gray-400"
//                         autoFocus
//                       />
//                     </div>
//                   </div>
//                   <button
//                     onClick={detectLocation}
//                     className="w-full flex items-center gap-3 px-4 py-3 hover:bg-brand-green-pale transition border-b border-gray-100"
//                   >
//                     <div className="w-8 h-8 rounded-full bg-brand-green-pale flex items-center justify-center shrink-0">
//                       <FaMapMarkerAlt className="text-brand-green" size={13} />
//                     </div>
//                     <div className="text-left">
//                       <p className="text-sm font-bold text-brand-green">Use current location</p>
//                       <p className="text-xs text-gray-400">Detect via GPS</p>
//                     </div>
//                   </button>
//                   <div className="max-h-52 overflow-y-auto">
//                     {locSearching ? (
//                       <div className="px-4 py-4 flex items-center gap-2 text-sm text-gray-400">
//                         <FaSpinner className="animate-spin text-brand-green" /> Searching...
//                       </div>
//                     ) : locSuggestions.length > 0 ? (
//                       locSuggestions.map((s, i) => (
//                         <button
//                           key={i}
//                           onClick={() => {
//                             setLocation(s.displayName);
//                             localStorage.setItem("userLocation", s.displayName);
//                             setLocQuery("");
//                             setLocOpen(false);
//                           }}
//                           className="w-full flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition text-left border-b border-gray-50 last:border-0"
//                         >
//                           <FaMapMarkerAlt className="text-gray-300 mt-0.5 shrink-0" size={12} />
//                           <div>
//                             <p className="text-sm font-semibold text-gray-800">{s.displayName}</p>
//                             <p className="text-xs text-gray-400 truncate max-w-[220px]">{s.fullName}</p>
//                           </div>
//                         </button>
//                       ))
//                     ) : locQuery.length >= 2 ? (
//                       <p className="px-4 py-4 text-sm text-gray-400">No locations found</p>
//                     ) : null}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* SEARCH BAR — desktop */}
//             <form onSubmit={handleSearch} className="hidden md:flex flex-1 items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden h-11 focus-within:border-brand-green focus-within:ring-2 focus-within:ring-brand-green/15 transition-all">
//               <FaSearch className="ml-4 text-gray-400 shrink-0" size={13} />
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search for premix, spices, sweets..."
//                 className="flex-1 px-3 py-0 h-full outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
//               />
//               <button type="submit" className="h-full bg-brand-green hover:bg-[#1B5E20] text-white px-5 text-[13px] font-bold transition-colors whitespace-nowrap">
//                 Search
//               </button>
//             </form>

//             {/* RIGHT SECTION */}
//             <div className="flex items-center gap-2 ml-auto lg:ml-0 shrink-0">

//               {/* Dealer Login – desktop (opens modal) */}
//               <button
//                 onClick={() => setShowDealerModal(true)}
//                 className="hidden lg:flex items-center gap-2 bg-amber-50 hover:bg-amber-100 text-amber-700 px-4 py-2 rounded-xl text-[13px] font-bold transition border border-amber-200/60 hover:border-amber-300"
//               >
//                 <FaStore size={14} />
//                 Dealer Login
//               </button>

//               {/* About — desktop */}
//               <Link
//                 href="/about"
//                 className="hidden lg:flex items-center gap-2 bg-brand-green-pale hover:bg-brand-green text-brand-green hover:text-white px-4 py-2 rounded-xl text-[13px] font-bold transition-all duration-200 border border-brand-green/20 hover:border-brand-green group"
//               >
//                 <span className="text-base group-hover:scale-110 transition-transform">🍲</span>
//                 About Us
//               </Link>

//               {/* USER / LOGIN */}
//               <div className="hidden md:block relative" ref={userRef}>
//                 {user ? (
//                   <>
//                     <button
//                       onClick={() => setUserMenuOpen(!userMenuOpen)}
//                       className="flex items-center gap-2 bg-brand-green-pale hover:bg-brand-green/15 text-brand-green px-3 py-2 rounded-xl transition"
//                     >
//                       <div className="w-7 h-7 rounded-full bg-brand-green text-white flex items-center justify-center text-[12px] font-black shrink-0">
//                         {(user.name || "U")[0].toUpperCase()}
//                       </div>
//                       <span className="text-[13px] font-bold max-w-[80px] truncate">
//                         {user.name?.split(" ")[0] || "Account"}
//                       </span>
//                       <FaChevronDown size={9} className={`text-brand-green transition-transform ${userMenuOpen ? "rotate-180" : ""}`} />
//                     </button>

//                     {/* Dropdown */}
//                     {userMenuOpen && (
//                       <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-gray-100 rounded-2xl shadow-2xl z-[9999] overflow-hidden">
//                         <div className="px-4 py-3 border-b border-gray-100 bg-brand-green-pale">
//                           <p className="text-sm font-bold text-gray-800 truncate">{user.name}</p>
//                           <p className="text-xs text-gray-400 truncate">{user.email}</p>
//                         </div>
//                         <button
//                           onClick={() => { logout(); setUserMenuOpen(false); }}
//                           className="flex items-center gap-3 w-full px-4 py-3 text-[13px] font-semibold text-red-500 hover:bg-red-50 transition"
//                         >
//                           <FaSignOutAlt size={13} /> Sign Out
//                         </button>
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <Link
//                     href="/customerLogin/login"
//                     className="flex items-center gap-2 bg-brand-green hover:bg-[#1B5E20] text-white px-4 py-2.5 rounded-xl text-[13px] font-bold transition shadow-sm"
//                   >
//                     <FaUserCircle size={14} />
//                     Login
//                   </Link>
//                 )}
//               </div>
//               {/* CART */}
//               <button
//                 onClick={() => router.push("/cart")}
//                 className="relative flex items-center gap-2 bg-brand-orange/10 hover:bg-brand-orange/20 text-brand-orange px-3 py-2.5 rounded-xl transition"
//                 aria-label="View cart"
//               >
//                 <FaShoppingCart size={16} />
//                 {mounted && totalItems > 0 && (
//                   <span className="text-[12px] font-black leading-none">
//                     {totalItems > 99 ? "99+" : totalItems}
//                   </span>
//                 )}
//               </button>

//               {/* MOBILE TOGGLE */}
//               <button
//                 className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition"
//                 onClick={() => setMobileOpen(!mobileOpen)}
//               >
//                 {mobileOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
//               </button>
//             </div>
//           </div>

//           {/* ── DESKTOP CATEGORY STRIP ── */}
//           <div className="hidden md:block border-t border-gray-100 py-3 overflow-hidden relative">
//             {categories.length === 0 && (
//               <div className="flex items-center gap-4 px-2">
//                 {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
//                   <div key={i} className="w-28 h-28 rounded-2xl bg-gray-100 animate-pulse shrink-0" />
//                 ))}
//               </div>
//             )}
//             {categories.length > 0 && (
//               <div className="animate-marquee flex items-center gap-4 w-max px-2">
//                 {[...categories, ...categories].map((cat, idx) => (
//                   <Link
//                     key={idx}
//                     href={`/category/${toSlug(cat.name)}`}
//                     tabIndex={idx >= categories.length ? -1 : 0}
//                     aria-hidden={idx >= categories.length}
//                     className="group flex flex-col items-center gap-2 transition-all duration-300"
//                   >
//                     <div className="w-20 h-20 rounded-full overflow-hidden bg-white border-2 border-brand-green/20 shadow-md flex items-center justify-center group-hover:border-brand-green group-hover:scale-105 transition-all duration-300">
//                       <img
//                         src={getImageUrl(cat.image) || "/category1.jpg"}
//                         alt={cat.name}
//                         className="w-full h-full object-cover object-right transition-all duration-300 group-hover:scale-110"
//                         onError={(e) => {
//                           e.target.onerror = null;
//                           e.target.src = "/category1.jpg";
//                         }}
//                       />
//                     </div>
//                     <span className="text-[13px] font-semibold text-gray-700 group-hover:text-brand-green text-center line-clamp-1">
//                       {cat.name}
//                     </span>
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* ── MOBILE SEARCH ── */}
//         <div className="md:hidden px-4 pb-2 border-t border-gray-100 pt-2">
//           <form onSubmit={handleSearch} className="flex items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden h-10">
//             <FaSearch className="ml-3 text-gray-400 shrink-0" size={12} />
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search food..."
//               className="flex-1 px-3 h-full outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
//             />
//             <button type="submit" className="h-full bg-brand-green text-white px-4 text-[12px] font-bold">
//               Go
//             </button>
//           </form>
//         </div>

//         {/* ── MOBILE CATEGORY STRIP ── */}
//         <div className="md:hidden overflow-hidden pb-3 border-t border-gray-100 pt-2">
//           {categories.length === 0 && (
//             <div className="flex items-center gap-4 px-4">
//               {[1, 2, 3, 4, 5].map((i) => (
//                 <div key={i} className="flex flex-col items-center gap-1 shrink-0 animate-pulse">
//                   <div className="w-16 h-16 rounded-2xl bg-gray-100" />
//                   <div className="h-3 w-12 bg-gray-100 rounded-full" />
//                 </div>
//               ))}
//             </div>
//           )}
//           {categories.length > 0 && (
//             <div className="animate-marquee-mobile flex items-center gap-3 w-max px-8">
//               {[...categories, ...categories].map((cat, idx) => (
//                 <Link
//                   key={idx}
//                   href={`/category/${toSlug(cat.name)}`}
//                   tabIndex={idx >= categories.length ? -1 : 0}
//                   aria-hidden={idx >= categories.length}
//                   className="flex flex-col items-center gap-1 shrink-0 transition"
//                 >
//                   <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-green/20 shadow-md flex items-center justify-center overflow-hidden group-hover:border-brand-green transition-all">
//                     <img
//                       src={getImageUrl(cat.image) || "/category1.jpg"}
//                       alt={cat.name}
//                       className="w-full h-full object-cover object-right"
//                     />
//                   </div>
//                   <span className="mt-2 text-[11px] font-medium text-center leading-4 line-clamp-2 text-gray-700">
//                     {cat.name}
//                   </span>
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* ── MOBILE MENU PANEL ── */}
//         {mobileOpen && (
//           <div className="md:hidden border-t border-gray-100 bg-white shadow-xl animate-fade-up">
//             <div className="px-4 py-4 space-y-0.5">
//               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 mb-2">
//                 Account
//               </p>
//               {user ? (
//                 <>
//                   <div className="flex items-center gap-3 px-3 py-3 mb-1 bg-brand-green-pale rounded-2xl">
//                     <div className="w-9 h-9 rounded-full bg-brand-green text-white flex items-center justify-center font-black text-sm shrink-0">
//                       {(user.name || "U")[0].toUpperCase()}
//                     </div>
//                     <div>
//                       <p className="text-sm font-bold text-gray-800">{user.name}</p>
//                       <p className="text-xs text-gray-400">{user.email}</p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => { logout(); setMobileOpen(false); }}
//                     className="flex items-center gap-3 w-full px-3 py-3 text-[14px] font-semibold text-red-500 hover:bg-red-50 rounded-xl transition"
//                   >
//                     <FaSignOutAlt size={14} /> Sign Out
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <Link
//                     href="/customerLogin/login"
//                     onClick={() => setMobileOpen(false)}
//                     className="block px-3 py-3 text-[14px] font-semibold text-gray-700 hover:text-brand-green hover:bg-brand-green-pale rounded-xl transition"
//                   >
//                     👤 Customer Login
//                   </Link>
//                   <button
//                     onClick={() => { setShowDealerModal(true); setMobileOpen(false); }}
//                     className="block w-full text-left px-3 py-3 text-[14px] font-semibold text-gray-700 hover:text-brand-green hover:bg-brand-green-pale rounded-xl transition"
//                   >
//                     🏪 Dealer Login
//                   </button>
//                 </>
//               )}
//               <div className="pt-2 border-t border-gray-100 mt-2">
//                 <Link
//                   href="/about"
//                   onClick={() => setMobileOpen(false)}
//                   className="flex items-center gap-3 px-3 py-3 rounded-2xl bg-linear-to-r from-brand-green-pale to-white border border-brand-green/15 hover:border-brand-green/40 hover:bg-brand-green-pale transition group"
//                 >
//                   <div className="w-9 h-9 rounded-xl bg-brand-green flex items-center justify-center text-white text-base shrink-0 group-hover:scale-110 transition-transform">
//                     🍲
//                   </div>
//                   <div>
//                     <p className="text-[14px] font-bold text-gray-800 group-hover:text-brand-green transition">About OJAIN</p>
//                     <p className="text-[10px] text-gray-400 font-medium">Our story, mission & values</p>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}
//       </header>

//       {/* ── DEALER LOGIN MODAL ── */}
//       {showDealerModal && (
//         <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
//           <div
//             ref={modalRef}
//             className="bg-white rounded-3xl shadow-2xl w-full max-w-md mx-auto overflow-hidden relative"
//           >
//             {/* Close button */}
//             <button
//               onClick={() => setShowDealerModal(false)}
//               className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition z-10"
//             >
//               <FaTimes size={20} />
//             </button>

//             <div className="p-8 md:p-10">
//               <div className="flex justify-center mb-6">
//                 <div className="h-16 w-16 rounded-2xl bg-brand-green-pale flex items-center justify-center shadow-lg">
//                   <FaStore size={28} className="text-brand-green" />
//                 </div>
//               </div>
//               <div className="mb-6">
//                 <div className="inline-flex items-center gap-2 bg-brand-green-pale text-brand-green px-4 py-1.5 rounded-full text-xs font-bold mb-4">
//                   <FaLeaf size={10} /> Dealer Access
//                 </div>
//                 <h2 className="text-3xl font-black text-gray-900">
//                   <span className="text-brand-green">Dealer</span> Login
//                 </h2>
//                 <p className="text-gray-500 mt-2 text-sm">Enter your credentials to continue</p>
//               </div>

//               <form onSubmit={handleDealerSubmit} className="space-y-5">
//                 <InputField
//                   icon={<FaEnvelope />}
//                   type="email"
//                   name="email"
//                   placeholder="Enter Email Address"
//                   value={dealerForm.email}
//                   error={dealerErrors.email}
//                   onChange={handleDealerChange}
//                 />
//                 <InputField
//                   icon={<FaLock />}
//                   type={showDealerPassword ? "text" : "password"}
//                   name="password"
//                   placeholder="Enter Password"
//                   value={dealerForm.password}
//                   error={dealerErrors.password}
//                   onChange={handleDealerChange}
//                   rightSlot={
//                     <button
//                       type="button"
//                       onClick={() => setShowDealerPassword(!showDealerPassword)}
//                       className="text-gray-400 hover:text-brand-green transition"
//                     >
//                       {showDealerPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
//                     </button>
//                   }
//                 />

//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className="w-full h-14 rounded-2xl bg-brand-green hover:bg-[#1B5E20] text-white text-lg font-bold shadow-lg transition-all duration-300 disabled:opacity-70"
//                 >
//                   {isLoading ? "Logging In..." : "Login Now"}
//                 </button>
//               </form>

//               <p className="text-center text-sm text-gray-500 mt-6">
//                 Don&apos;t have an account?{" "}
//                 <Link
//                   href="/dealer/register"
//                   onClick={() => setShowDealerModal(false)}
//                   className="text-brand-green font-bold hover:underline"
//                 >
//                   Create Account
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Navbar;



"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  FaSearch,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaSpinner,
  FaChevronDown,
  FaSignOutAlt,
  FaStore,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaLeaf,
  FaUser,
  FaPhone,
  FaCity,
  FaUniversity,
  FaHeart,
} from "react-icons/fa";
import useCartStore from "../../../store/cartStore";
import { useCategoryStore } from "../../../store/categoryStore";
import { useAuth } from "../../contexts/AuthContext";
import { useDealer } from "../../../hooks/useDealer";
import {
  validateName,
  validateEmail,
  validateMobile,
  validatePassword,
  validateBankAccount,
  validateIfsc,
} from "../../../shared/validation";
import getImageUrl from "../../../utils/getImageUrl";
import useWishlistStore from "../../../store/wishlistStore";

// ─── Helpers ─────────────────────────────────────────────
const toSlug = (name) => name?.toLowerCase().replace(/\s+/g, "-") ?? "";


const fetchLocationSuggestions = async (query) => {
  if (!query.trim() || query.length < 2) return [];
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        query
      )}&addressdetails=1&limit=8`
    );
    const data = await res.json();
    return data.map((item) => ({
      displayName: item.display_name.split(",")[0],
      fullName: item.display_name,
    }));
  } catch {
    return [];
  }
};

// ─── Reusable Input Field ──────────────────────────────
const InputField = ({
  icon,
  type,
  name,
  placeholder,
  value,
  error,
  onChange,
  rightSlot,
}) => (
  <div>
    <div
      className={`flex items-center h-14 rounded-2xl border px-4 bg-white transition-all duration-300 ${error
        ? "border-red-400"
        : "border-gray-300 focus-within:border-brand-green focus-within:ring-4 focus-within:ring-brand-green-pale"
        }`}
    >
      <div className="text-brand-green text-lg">{icon}</div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-full bg-transparent outline-none px-3 text-gray-800 placeholder:text-gray-400"
      />
      {rightSlot && <div className="ml-2">{rightSlot}</div>}
    </div>
    {error && <p className="text-red-500 text-sm mt-1 ml-1">{error}</p>}
  </div>
);

// ─── Main Component ─────────────────────────────────────
function Navbar() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const { login, register, isLoading } = useDealer();
  const { wishlist, fetchWishlist, resetWishlist } = useWishlistStore();
  const wishlistCount = wishlist.length;




  // ─── Location / Search / Mobile state ──────────────
  const [location, setLocation] = useState("Set location");
  const [locOpen, setLocOpen] = useState(false);
  const [locQuery, setLocQuery] = useState("");
  const [locSuggestions, setLocSuggestions] = useState([]);
  const [locSearching, setLocSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // ─── Dealer Modal state ─────────────────────────────
  const [showDealerModal, setShowDealerModal] = useState(false);
  const [dealerModalMode, setDealerModalMode] = useState("login"); // 'login' | 'register'

  // ─── Dealer Login form ──────────────────────────────
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [loginErrors, setLoginErrors] = useState({});
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // ─── Dealer Register form ───────────────────────────
  const [registerForm, setRegisterForm] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
  });
  const [registerErrors, setRegisterErrors] = useState({});
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  // ─── Refs ─────────────────────────────────────────────
  const locRef = useRef(null);
  const userRef = useRef(null);
  const modalRef = useRef(null);

  // ─── Store data ──────────────────────────────────────
  const totalItems = useCartStore((s) =>
    s.cart.items.reduce((sum, i) => sum + i.quantity, 0)
  );
  const categories = useCategoryStore((s) => s.categories);
  const fetchCategories = useCategoryStore((s) => s.fetchCategories);

  useEffect(() => {
    if (user) {
      fetchWishlist();
    } else {
      resetWishlist();
    }
  }, [user]);

  // ─── Effects ──────────────────────────────────────────
  useEffect(() => {
    if (categories.length === 0) fetchCategories();
  }, [categories.length, fetchCategories]);

  useEffect(() => {
    const saved = localStorage.getItem("userLocation");
    if (saved) setLocation(saved);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Location detection
  const detectLocation = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          const name =
            data.address.city || data.address.town || data.address.state || "Current Location";
          setLocation(name);
          localStorage.setItem("userLocation", name);
          setLocOpen(false);
        } catch { }
      },
      () => { }
    );
  };

  // Location suggestions with debounce
  useEffect(() => {
    const id = setTimeout(async () => {
      if (locQuery.length >= 2) {
        setLocSearching(true);
        const results = await fetchLocationSuggestions(locQuery);
        setLocSuggestions(results);
        setLocSearching(false);
      } else {
        setLocSuggestions([]);
      }
    }, 400);
    return () => clearTimeout(id);
  }, [locQuery]);

  // ─── Click outside (does NOT close modal) ──────────
  useEffect(() => {
    const handler = (e) => {
      if (locRef.current && !locRef.current.contains(e.target)) setLocOpen(false);
      if (userRef.current && !userRef.current.contains(e.target)) setUserMenuOpen(false);
      // We deliberately do NOT close the dealer modal here
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ─── Escape key closes modal ─────────────────────────
  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === "Escape" && showDealerModal) {
        closeModal();
      }
    };
    document.addEventListener("keydown", escHandler);
    return () => document.removeEventListener("keydown", escHandler);
  }, [showDealerModal]);

  // ─── Search handler ──────────────────────────────────
  const handleSearch = (e) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
    setMobileOpen(false);
  };

  // ─── Dealer Login validation & submit ──────────────
  const validateLoginField = (name, value) => {
    if (name === "email") return validateEmail(value);
    if (name === "password") return validatePassword(value);
    return "";
  };

  const validateLoginForm = () => {
    const newErrors = {};
    Object.keys(loginForm).forEach((key) => {
      const err = validateLoginField(key, loginForm[key]);
      if (err) newErrors[key] = err;
    });
    setLoginErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
    setLoginErrors((prev) => ({ ...prev, [name]: validateLoginField(name, value) }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!validateLoginForm()) {
      toast.error("Please fix form errors");
      return;
    }
    try {
      const result = await login(loginForm);
      if (result.success) {
        toast.success("Login successful");
        closeModal();
        setTimeout(() => router.push("/vendor/dashboard"), 1000);
      } else {
        toast.error(result.error || "Login failed");
      }
    } catch (err) {
      const msg = err?.response?.data?.message || err?.message || "";
      const notFound = /not found|not registered|no user|does not exist|invalid credentials/i.test(
        msg
      );
      if (notFound) {
        toast.error("Account not found. Please register first!", { duration: 4000 });
      } else {
        toast.error(msg || "Login failed");
      }
    }
  };

  // ─── Dealer Register validation & submit ────────────
  const validateRegisterField = (name, value) => {
    switch (name) {
      case "fullName":
      case "city":
      case "accountHolderName":
      case "bankName":
        return validateName(value);
      case "email":
        return validateEmail(value);
      case "password":
        return validatePassword(value);
      case "phone":
        return validateMobile(value);
      case "accountNumber":
        return validateBankAccount(value);
      case "ifscCode":
        return validateIfsc(value);
      default:
        return "";
    }
  };

  const validateRegisterForm = () => {
    const newErrors = {};
    Object.keys(registerForm).forEach((key) => {
      const err = validateRegisterField(key, registerForm[key]);
      if (err) newErrors[key] = err;
    });
    setRegisterErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
    setRegisterErrors((prev) => ({
      ...prev,
      [name]: validateRegisterField(name, value),
    }));
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!validateRegisterForm()) {
      toast.error("Please fix all form errors");
      return;
    }
    try {
      const result = await register(registerForm);
      if (result.success) {
        toast.success(
          "Dealer account registered successfully. Waiting for admin approval."
        );
        closeModal();
        setTimeout(() => router.push("/"), 1200);
      } else {
        toast.error(result.error || "Registration failed");
      }
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.message || "Registration failed"
      );
    }
  };

  // ─── Close modal helper (clears forms) ──────────────
  const closeModal = () => {
    setShowDealerModal(false);
    setDealerModalMode("login");
    setLoginForm({ email: "", password: "" });
    setLoginErrors({});
    setRegisterForm({
      fullName: "",
      email: "",
      password: "",
      phone: "",
      city: "",
      bankName: "",
      accountHolderName: "",
      accountNumber: "",
      ifscCode: "",
    });
    setRegisterErrors({});
  };

  // ─── Render ───────────────────────────────────────────
  return (
    <>
      {/* ── ANNOUNCEMENT BAR ── */}
      <div className="bg-brand-green text-white text-[11px] py-2 text-center font-semibold tracking-widest uppercase">
        🌿 Be O-Jain. Live O-Jain. &nbsp;·&nbsp; Pure Jain &amp; Satvik Premix
        Products &nbsp;·&nbsp; A Brand That Serves Pure 👑
      </div>

      {/* ── MAIN NAVBAR ── */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
        {/* <div className="w-full px-4 sm:px-6 lg:px-10"> */}
        <div className="w-full px-0">
          {/* ── TOP ROW ── */}
          {/* <div className="flex items-center h-16 md:h-[72px] gap-2 md:gap-5"> */}
          {/* <div className="flex items-center h-16 md:h-[72px] gap-3 md:gap-5 px-16"> */}
          <div className="flex items-center h-16 md:h-[72px] gap-3 md:gap-5 px-3 sm:px-6 lg:px-10">
            {/* <div className="flex items-center h-16 md:h-[72px] gap-3 md:gap-5 pl-0 pr-3 sm:pr-4 lg:pr-6"> */}
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
              <img
                src="/logo.png"
                alt="OJAIN"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover ring-2 ring-brand-green/25 group-hover:ring-brand-green/50 transition"
              />
              <div className="hidden sm:block leading-none">
                <p className="text-[17px] font-black text-brand-green tracking-tight">
                  OJAIN
                </p>
                <p className="text-[9px] font-bold text-brand-orange tracking-[0.18em] uppercase mt-0.5">
                  Pure Veg
                </p>
              </div>
            </Link>

            {/* LOCATION — desktop */}
            <div className="hidden lg:block relative shrink-0" ref={locRef}>
              <button
                onClick={() => setLocOpen(!locOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-50 transition group"
              >
                <FaMapMarkerAlt className="text-brand-orange shrink-0" size={14} />
                <div className="text-left">
                  <p className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider leading-none mb-0.5">
                    Delivering to
                  </p>
                  <p className="text-[13px] font-bold text-gray-800 max-w-[110px] truncate group-hover:text-brand-green transition leading-none">
                    {location}
                  </p>
                </div>
                <FaChevronDown
                  size={9}
                  className={`text-gray-400 transition-transform ${locOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Location dropdown */}
              {locOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-100 rounded-2xl shadow-2xl z-[9999] overflow-hidden">
                  <div className="p-3 border-b border-gray-100">
                    <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
                      <FaSearch size={11} className="text-gray-400 shrink-0" />
                      <input
                        type="text"
                        value={locQuery}
                        onChange={(e) => setLocQuery(e.target.value)}
                        placeholder="Search city or area..."
                        className="bg-transparent outline-none text-sm flex-1 placeholder-gray-400"
                        autoFocus
                      />
                    </div>
                  </div>
                  <button
                    onClick={detectLocation}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-brand-green-pale transition border-b border-gray-100"
                  >
                    <div className="w-8 h-8 rounded-full bg-brand-green-pale flex items-center justify-center shrink-0">
                      <FaMapMarkerAlt className="text-brand-green" size={13} />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-brand-green">
                        Use current location
                      </p>
                      <p className="text-xs text-gray-400">Detect via GPS</p>
                    </div>
                  </button>
                  <div className="max-h-16 overflow-y-auto">
                    {locSearching ? (
                      <div className="px-4 py-4 flex items-center gap-2 text-sm text-gray-400">
                        <FaSpinner className="animate-spin text-brand-green" />{" "}
                        Searching...
                      </div>
                    ) : locSuggestions.length > 0 ? (
                      locSuggestions.map((s, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setLocation(s.displayName);
                            localStorage.setItem("userLocation", s.displayName);
                            setLocQuery("");
                            setLocOpen(false);
                          }}
                          className="w-full flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition text-left border-b border-gray-50 last:border-0"
                        >
                          <FaMapMarkerAlt
                            className="text-gray-300 mt-0.5 shrink-0"
                            size={12}
                          />
                          <div>
                            <p className="text-sm font-semibold text-gray-800">
                              {s.displayName}
                            </p>
                            <p className="text-xs text-gray-400 truncate max-w-[220px]">
                              {s.fullName}
                            </p>
                          </div>
                        </button>
                      ))
                    ) : locQuery.length >= 2 ? (
                      <p className="px-4 py-4 text-sm text-gray-400">
                        No locations found
                      </p>
                    ) : null}
                  </div>
                </div>
              )}
            </div>

            {/* SEARCH BAR — desktop */}
            <div className="flex-1 flex justify-center min-w-0">
              <form
                onSubmit={handleSearch}
                className="hidden md:flex w-[360px] items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden h-11 focus-within:border-brand-green focus-within:ring-2 focus-within:ring-brand-green/15 transition-all"
              >
                <FaSearch className="ml-4 text-gray-400 shrink-0" size={13} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for premix, spices, sweets..."
                  className="flex-1 px-3 py-0 h-full outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
                />
                <button
                  type="submit"
                  className="h-full bg-brand-green hover:bg-[#1B5E20] text-white px-5 text-[13px] font-bold transition-colors whitespace-nowrap"
                >
                  Search
                </button>
              </form>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-right gap-4 ml-auto lg:ml-0 shrink-0">

              {/* Dealer Login — desktop (opens modal) */}
              <button
                onClick={() => setShowDealerModal(true)}
                className="hidden lg:flex items-center gap-2 bg-amber-50 hover:bg-amber-100 text-amber-700 px-4 py-2 rounded-xl text-[13px] font-bold transition border border-amber-200/60 hover:border-amber-300"
              >
                <FaStore size={14} />
                Dealer Login
              </button>

              {/* About — desktop */}
              <Link
                href="/about"
                className="hidden lg:flex items-center gap-2 bg-brand-green-pale hover:bg-brand-green text-brand-green hover:text-white px-4 py-2 rounded-xl text-[13px] font-bold transition-all duration-200 border border-brand-green/20 hover:border-brand-green group"
              >
                <span className="text-base group-hover:scale-110 transition-transform">
                  🍲
                </span>
                About Us
              </Link>

              {/* USER / LOGIN */}
              <div className="hidden md:block relative" ref={userRef}>
                {user ? (
                  <>
                    <button
                      onClick={() => setUserMenuOpen(!userMenuOpen)}
                      className="flex items-center gap-2 bg-brand-green-pale hover:bg-brand-green/15 text-brand-green px-3 py-2 rounded-xl transition"
                    >
                      <div className="w-7 h-7 rounded-full bg-brand-green text-white flex items-center justify-center text-[12px] font-black shrink-0">
                        {(user.name || "U")[0].toUpperCase()}
                      </div>
                      <span className="text-[13px] font-bold max-w-[80px] truncate">
                        {user.name?.split(" ")[0] || "Account"}
                      </span>
                      <FaChevronDown
                        size={9}
                        className={`text-brand-green transition-transform ${userMenuOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {/* Dropdown */}
                    {userMenuOpen && (
                      <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-gray-100 rounded-2xl shadow-2xl z-[9999] overflow-hidden">
                        <div className="px-4 py-3 border-b border-gray-100 bg-brand-green-pale">
                          <p className="text-sm font-bold text-gray-800 truncate">
                            {user.name}
                          </p>
                          <p className="text-xs text-gray-400 truncate">
                            {user.email}
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            logout();
                            resetWishlist();
                            setUserMenuOpen(false);
                          }}
                          className="flex items-center gap-3 w-full px-4 py-3 text-[13px] font-semibold text-red-500 hover:bg-red-50 transition"
                        >
                          <FaSignOutAlt size={13} /> Sign Out
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href="/customerLogin/login"
                    className="flex items-center gap-2 bg-brand-green hover:bg-[#1B5E20] text-white px-4 py-2.5 rounded-xl text-[13px] font-bold transition shadow-sm"
                  >
                    <FaUserCircle size={14} />
                    Login
                  </Link>
                )}
              </div>
              <button
                onClick={() => router.push("/wishlist")}
                className="relative hidden lg:flex items-center gap-2 bg-pink-50 hover:bg-pink-100 text-pink-600 px-3 py-2 rounded-xl border border-pink-200"
              >
                <FaHeart size={15} />
                Wishlist

                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-bold">
                    {wishlistCount}
                  </span>
                )}
              </button>
              {/* CART */}
              <button
                onClick={() => router.push("/cart")}
                className="relative flex items-center gap-2 bg-brand-orange/10 hover:bg-brand-orange/20 text-brand-orange px-3 py-2.5 rounded-xl transition"
                aria-label="View cart"
              >
                <FaShoppingCart size={16} />
                {mounted && totalItems > 0 && (
                  <span className="text-[12px] font-black leading-none">
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </button>

              {/* MOBILE TOGGLE */}
              <button
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
              </button>
            </div>
          </div>

          {/* ── DESKTOP CATEGORY STRIP ── */}
          {/* ── DESKTOP CATEGORY STRIP ── */}
          {/* <div className="hidden md:block border-t border-gray-100 py-4 overflow-hidden relative">
            {categories.length === 0 && (
              <div className="flex items-center gap-6 px-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div
                    key={i}
                    className="w-24 h-24 rounded-2xl bg-gray-100 animate-pulse shrink-0"
                  />
                ))}
              </div>
            )}
            {categories.length > 0 && (
              <div className="animate-marquee flex items-center gap-6 w-max px-4">
                {[...categories, ...categories].map((cat, idx) => (
                  <Link
                    key={`${cat._id || cat.name}-${idx}`}
                    href={`/category/${toSlug(cat.name)}`}
                    tabIndex={idx >= categories.length ? -1 : 0}
                    aria-hidden={idx >= categories.length}
                    className="group flex-shrink-0"
                  >
                    <div className="w-28 h-28 rounded-full overflow-hidden bg-black border-4 border-brand-green/80 shadow-md flex items-center justify-center transition-all duration-300 group-hover:border-brand-green group-hover:scale-105">
                      <img
                        src={getImageUrl(cat.image) || "/category1.jpg"}
                        alt={cat.name}
                        className="w-full h-full object-contain object-center"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div> */}
        </div>

        {/* ── MOBILE SEARCH ── */}
        <div className="md:hidden px-4 pb-2 border-t border-gray-100 pt-2">
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden h-10"
          >
            <FaSearch className="ml-3 text-gray-400 shrink-0" size={12} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search food..."
              className="flex-1 px-3 h-full outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
            />
            <button
              type="submit"
              className="h-full bg-brand-green text-white px-4 text-[12px] font-bold"
            >
              Go
            </button>
          </form>
        </div>

        {/* ── MOBILE CATEGORY STRIP ── */}
        {/* <div className="md:hidden overflow-hidden pb-3 border-t border-gray-100 pt-2">
          {categories.length === 0 && (
            <div className="flex items-center gap-4 px-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-1 shrink-0 animate-pulse"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gray-100" />
                  <div className="h-3 w-12 bg-gray-100 rounded-full" />
                </div>
              ))}
            </div>
          )}
          {categories.length > 0 && (
            <div className="animate-marquee-mobile flex items-center gap-3 w-max px-8">
              {[...categories, ...categories].map((cat, idx) => (
                <Link
                  key={idx}
                  href={`/category/${toSlug(cat.name)}`}
                  tabIndex={idx >= categories.length ? -1 : 0}
                  aria-hidden={idx >= categories.length}
                  className="flex flex-col items-center gap-1 shrink-0 transition"
                >
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-green/20 shadow-md flex items-center justify-center overflow-hidden group-hover:border-brand-green transition-all">
                    <img
                      src={getImageUrl(cat.image) || "/category1.jpg"}
                      alt={cat.name}
                      // className="w-full h-full object-cover object-right"
                      className="w-full h-full object-contain object-center p-1"
                    />
                  </div>
                  <span className="mt-2 text-[11px] font-medium text-center leading-4 line-clamp-2 text-gray-700">
                    {cat.name}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div> */}

        {/* ── MOBILE MENU PANEL ── */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white shadow-xl animate-fade-up">
            <div className="px-4 py-4 space-y-0.5">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 mb-2">
                Account
              </p>
              {user ? (
                <>
                  <div className="flex items-center gap-3 px-3 py-3 mb-1 bg-brand-green-pale rounded-2xl">
                    <div className="w-9 h-9 rounded-full bg-brand-green text-white flex items-center justify-center font-black text-sm shrink-0">
                      {(user.name || "U")[0].toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-400">{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      resetWishlist();
                      setMobileOpen(false);
                    }}
                    className="flex items-center gap-3 w-full px-3 py-3 text-[14px] font-semibold text-red-500 hover:bg-red-50 rounded-xl transition"
                  >
                    <FaSignOutAlt size={14} /> Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/customerLogin/login"
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-3 text-[14px] font-semibold text-gray-700 hover:text-brand-green hover:bg-brand-green-pale rounded-xl transition"
                  >
                    👤 Customer Login
                  </Link>
                  <button
                    onClick={() => {
                      setShowDealerModal(true);
                      setMobileOpen(false);
                    }}
                    className="block w-full text-left px-3 py-3 text-[14px] font-semibold text-gray-700 hover:text-brand-green hover:bg-brand-green-pale rounded-xl transition"
                  >
                    🏪 Dealer Login
                  </button>

                </>
              )}
              <div className="pt-2 border-t border-gray-100 mt-2">
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 rounded-2xl bg-linear-to-r from-brand-green-pale to-white border border-brand-green/15 hover:border-brand-green/40 hover:bg-brand-green-pale transition group"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-green flex items-center justify-center text-white text-base shrink-0 group-hover:scale-110 transition-transform">
                    🍲
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-gray-800 group-hover:text-brand-green transition">
                      About OJAIN
                    </p>
                    <p className="text-[10px] text-gray-400 font-medium">
                      Our story, mission & values
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ── DEALER LOGIN / REGISTER MODAL ── */}
      {showDealerModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div
            ref={modalRef}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg mx-auto overflow-hidden relative max-h-[90vh] overflow-y-auto"
          >
            {/* Close button (X) */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition z-10"
            >
              <FaTimes size={20} />
            </button>

            <div className="p-8 md:p-10">
              {/* Modal header */}
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-2xl bg-brand-green-pale flex items-center justify-center shadow-lg">
                  <FaStore size={28} className="text-brand-green" />
                </div>
              </div>
              <div className="mb-6 text-center">
                <div className="inline-flex items-center gap-2 bg-brand-green-pale text-brand-green px-4 py-1.5 rounded-full text-xs font-bold mb-4">
                  <FaLeaf size={10} /> Dealer{" "}
                  {dealerModalMode === "login" ? "Login" : "Registration"}
                </div>
                <h2 className="text-3xl font-black text-gray-900">
                  <span className="text-brand-green">Dealer</span>{" "}
                  {dealerModalMode === "login" ? "Login" : "Register"}
                </h2>
                <p className="text-gray-500 mt-2 text-sm">
                  {dealerModalMode === "login"
                    ? "Enter your credentials to continue"
                    : "Fill all details to create dealer account"}
                </p>
              </div>

              {/* ── LOGIN FORM ── */}
              {dealerModalMode === "login" && (
                <>
                  <form onSubmit={handleLoginSubmit} className="space-y-5">
                    <InputField
                      icon={<FaEnvelope />}
                      type="email"
                      name="email"
                      placeholder="Enter Email Address"
                      value={loginForm.email}
                      error={loginErrors.email}
                      onChange={handleLoginChange}
                    />
                    <InputField
                      icon={<FaLock />}
                      type={showLoginPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter Password"
                      value={loginForm.password}
                      error={loginErrors.password}
                      onChange={handleLoginChange}
                      rightSlot={
                        <button
                          type="button"
                          onClick={() =>
                            setShowLoginPassword(!showLoginPassword)
                          }
                          className="text-gray-400 hover:text-brand-green transition"
                        >
                          {showLoginPassword ? (
                            <FaEyeSlash size={16} />
                          ) : (
                            <FaEye size={16} />
                          )}
                        </button>
                      }
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-14 rounded-2xl bg-brand-green hover:bg-[#1B5E20] text-white text-lg font-bold shadow-lg transition-all duration-300 disabled:opacity-70"
                    >
                      {isLoading ? "Logging In..." : "Login Now"}
                    </button>
                  </form>
                  <p className="text-center text-sm text-gray-500 mt-6">
                    Don&apos;t have an account?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setDealerModalMode("register");
                        setLoginErrors({});
                      }}
                      className="text-brand-green font-bold hover:underline"
                    >
                      Create Account
                    </button>
                  </p>
                </>
              )}

              {/* ── REGISTER FORM ── */}
              {dealerModalMode === "register" && (
                <>
                  <form onSubmit={handleRegisterSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <InputField
                        icon={<FaUser />}
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={registerForm.fullName}
                        error={registerErrors.fullName}
                        onChange={handleRegisterChange}
                      />
                      <InputField
                        icon={<FaEnvelope />}
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={registerForm.email}
                        error={registerErrors.email}
                        onChange={handleRegisterChange}
                      />
                      <InputField
                        icon={<FaLock />}
                        type={showRegisterPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={registerForm.password}
                        error={registerErrors.password}
                        onChange={handleRegisterChange}
                        rightSlot={
                          <button
                            type="button"
                            onClick={() =>
                              setShowRegisterPassword(!showRegisterPassword)
                            }
                            className="text-gray-400 hover:text-brand-green transition"
                          >
                            {showRegisterPassword ? (
                              <FaEyeSlash size={16} />
                            ) : (
                              <FaEye size={16} />
                            )}
                          </button>
                        }
                      />
                      <InputField
                        icon={<FaPhone />}
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={registerForm.phone}
                        error={registerErrors.phone}
                        onChange={handleRegisterChange}
                      />
                      <InputField
                        icon={<FaCity />}
                        type="text"
                        name="city"
                        placeholder="City"
                        value={registerForm.city}
                        error={registerErrors.city}
                        onChange={handleRegisterChange}
                      />
                      <InputField
                        icon={<FaUniversity />}
                        type="text"
                        name="bankName"
                        placeholder="Bank Name (optional)"
                        value={registerForm.bankName}
                        error={registerErrors.bankName}
                        onChange={handleRegisterChange}
                      />
                      <InputField
                        icon={<FaUser />}
                        type="text"
                        name="accountHolderName"
                        placeholder="Account Holder Name"
                        value={registerForm.accountHolderName}
                        error={registerErrors.accountHolderName}
                        onChange={handleRegisterChange}
                      />
                      <InputField
                        icon={<FaUniversity />}
                        type="text"
                        name="accountNumber"
                        placeholder="Bank Account Number"
                        value={registerForm.accountNumber}
                        error={registerErrors.accountNumber}
                        onChange={handleRegisterChange}
                      />
                      <InputField
                        icon={<FaUniversity />}
                        type="text"
                        name="ifscCode"
                        placeholder="IFSC Code"
                        value={registerForm.ifscCode}
                        error={registerErrors.ifscCode}
                        onChange={handleRegisterChange}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-14 rounded-2xl bg-brand-green hover:bg-[#1B5E20] text-white text-lg font-bold shadow-lg transition-all duration-300 disabled:opacity-70"
                    >
                      {isLoading ? "Creating Account..." : "Create Dealer Account"}
                    </button>
                  </form>
                  <p className="text-center text-sm text-gray-500 mt-6">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setDealerModalMode("login");
                        setRegisterErrors({});
                      }}
                      className="text-brand-green font-bold hover:underline"
                    >
                      Login Here
                    </button>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;