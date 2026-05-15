// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";

// import {
//   FaSearch,
//   FaShoppingCart,
//   FaMapMarkerAlt,
//   FaEdit,
//   FaUserCircle,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";

// const CATEGORIES = [
//   { name: "Home Meals", link: "/home-meals" },
//   { name: "Tiffins", link: "/tiffins" },
//   { name: "Pickles", link: "/pickles" },
//   { name: "Snacks", link: "/snacks" },
//   { name: "Sweets", link: "/sweets" },
//   { name: "Cakes", link: "/cakes" },
//   { name: "Healthy Food", link: "/healthy-food" },
//   { name: "Become Seller", link: "/vendor/login" },
// ];

// function Navbar() {
//   const [location, setLocation] = useState("Detecting...");
//   const [inputLocation, setInputLocation] = useState("");
//   const [editing, setEditing] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [loginOpen, setLoginOpen] = useState(false);
//   const loginRef = useRef(null);

//   useEffect(() => {
//     if (!navigator.geolocation) {
//       setLocation("Location unavailable");
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       async ({ coords: { latitude, longitude } }) => {
//         try {
//           const res = await fetch(
//             `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
//           );
//           const data = await res.json();
//           setLocation(
//             data.address.city ||
//             data.address.town ||
//             data.address.state ||
//             "Current Location"
//           );
//         } catch {
//           setLocation("Unable to fetch");
//         }
//       },
//       () => setLocation("Permission denied")
//     );
//   }, []);

//   useEffect(() => {
//     function handleClickOutside(e) {
//       if (loginRef.current && !loginRef.current.contains(e.target)) {
//         setLoginOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleSave = () => {
//     if (inputLocation.trim()) {
//       setLocation(inputLocation.trim());
//       setInputLocation("");
//       setEditing(false);
//     }
//   };

//   return (
//     <>
//       {/* Top Banner */}
//       <div className="bg-orange-500 text-white text-[11px] sm:text-[13px] py-2 text-center font-semibold tracking-wide">
//         Fresh Homemade Food Delivered Across India 🚚
//       </div>

//       {/* Navbar */}
//       <header className="bg-white shadow-sm sticky top-0 z-50 animate-slide-down">
//         <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">

//           {/* Top Row */}
//           <div className="flex items-center justify-between gap-3 py-4 lg:grid lg:grid-cols-[220px_1fr_320px] lg:gap-8 lg:py-5">

//             {/* Logo */}
//             <Link href="/" className="shrink-0">
//               <p className="text-[24px] sm:text-[30px] font-extrabold text-orange-500 leading-none tracking-tight">
//                 OJAIN
//               </p>
//               <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-400 mt-1">
//                 Homemade & Fresh
//               </p>
//             </Link>

//             {/* Search — desktop only */}
//             <div className="hidden lg:flex justify-center w-full">
//               <div className="flex items-center w-full max-w-[760px] rounded-full overflow-hidden bg-gray-100 border border-transparent focus-within:border-orange-300 focus-within:bg-white transition-all duration-200">
//                 <input
//                   type="text"
//                   placeholder="Search homemade food..."
//                   className="w-full bg-transparent px-6 py-4 text-[15px] text-gray-700 placeholder-gray-400 outline-none"
//                 />
//                 <button className="bg-orange-500 hover:bg-orange-600 transition-colors duration-200 text-white px-7 py-4 shrink-0">
//                   <FaSearch size={16} />
//                 </button>
//               </div>
//             </div>

//             {/* Right Side */}
//             <div className="flex items-center gap-3 sm:gap-5 lg:gap-7 shrink-0 justify-end">

//               {/* Location — md+ */}
//               <div className="hidden md:block">
//                 <div className="flex items-center gap-1 mb-1">
//                   <FaMapMarkerAlt className="text-orange-500" size={10} />
//                   <span className="text-[11px] text-gray-400 font-medium">Delivering To</span>
//                 </div>
//                 {editing ? (
//                   <div className="flex items-center gap-2">
//                     <input
//                       type="text"
//                       value={inputLocation}
//                       onChange={(e) => setInputLocation(e.target.value)}
//                       onKeyDown={(e) => e.key === "Enter" && handleSave()}
//                       placeholder="Enter city"
//                       className="border border-gray-200 focus:border-orange-400 rounded-full px-3 py-1 text-[12px] outline-none w-28 transition-colors"
//                     />
//                     <button
//                       onClick={handleSave}
//                       className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-full text-[12px] font-semibold transition-colors duration-200"
//                     >
//                       Save
//                     </button>
//                   </div>
//                 ) : (
//                   <div className="flex items-center gap-2">
//                     <span className="text-[13px] font-semibold text-gray-800">{location}</span>
//                     <button
//                       onClick={() => setEditing(true)}
//                       className="text-orange-400 hover:text-orange-600 transition-colors duration-200"
//                     >
//                       <FaEdit size={12} />
//                     </button>
//                   </div>
//                 )}
//               </div>

//               {/* Login Dropdown — md+ */}
//               <div ref={loginRef} className="relative hidden md:block">
//                 <p className="text-[11px] text-gray-400 font-medium text-right">Welcome</p>
//                 <button
//                   onClick={() => setLoginOpen(!loginOpen)}
//                   className="flex items-center gap-2 text-[14px] font-semibold text-gray-800 hover:text-orange-500 transition-colors duration-200"
//                 >
//                   <FaUserCircle size={18} />
//                   Login
//                   <span className="text-[10px]">{loginOpen ? "▲" : "▼"}</span>
//                 </button>

//                 {loginOpen && (
//                   <div className="absolute right-0 top-11 w-56 bg-white border border-gray-100 rounded-2xl shadow-2xl z-50 overflow-hidden">
//                     <Link
//                       href="/customerLogin/login"
//                       onClick={() => setLoginOpen(false)}
//                       className="block px-5 py-4 text-[14px] text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
//                     >
//                       👤 Customer Login
//                     </Link>
//                     <Link
//                       href="/vendorLogin/login"
//                       onClick={() => setLoginOpen(false)}
//                       className="block px-5 py-4 text-[14px] text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
//                     >
//                       🏪 Vendor Login
//                     </Link>
//                     <Link
//                       href="/adminlogin"
//                       onClick={() => setLoginOpen(false)}
//                       className="block px-5 py-4 text-[14px] text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
//                     >
//                       🛡 Admin Login
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               {/* Cart */}
//               <button className="relative hover:scale-110 transition-transform duration-200">
//                 <FaShoppingCart size={20} className="text-gray-700" />
//                 <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
//                   2
//                 </span>
//               </button>

//               {/* Hamburger — mobile/tablet */}
//               <button
//                 className="lg:hidden text-gray-700 hover:text-orange-500 transition-colors duration-200 p-1"
//                 onClick={() => setMobileOpen(!mobileOpen)}
//                 aria-label="Toggle menu"
//               >
//                 {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
//               </button>
//             </div>
//           </div>

//           {/* Categories — desktop */}
//           <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 border-t border-gray-100 py-4">
//             {CATEGORIES.map((cat) => (
//               <Link
//                 key={cat.name}
//                 href={cat.link}
//                 className="text-[14px] font-medium text-gray-600 hover:text-orange-500 transition-colors duration-200 pb-1 border-b-2 border-transparent hover:border-orange-400 whitespace-nowrap"
//               >
//                 {cat.name}
//               </Link>
//             ))}
//           </nav>
//         </div>

//         {/* Mobile Menu */}
//         {mobileOpen && (
//           <div className="lg:hidden border-t border-gray-100 bg-white px-4 pb-6 shadow-lg">

//             {/* Mobile Search */}
//             <div className="mt-4 flex items-center rounded-full overflow-hidden bg-gray-100 border border-transparent focus-within:border-orange-300 focus-within:bg-white transition-all duration-200">
//               <input
//                 type="text"
//                 placeholder="Search homemade food..."
//                 className="w-full bg-transparent px-5 py-3 text-[14px] text-gray-700 placeholder-gray-400 outline-none"
//               />
//               <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 transition-colors duration-200 shrink-0">
//                 <FaSearch size={14} />
//               </button>
//             </div>

//             {/* Mobile Categories */}
//             <div className="mt-4 grid grid-cols-2 gap-2">
//               {CATEGORIES.map((cat) => (
//                 <Link
//                   key={cat.name}
//                   href={cat.link}
//                   onClick={() => setMobileOpen(false)}
//                   className="block px-4 py-3 rounded-xl bg-gray-50 text-[13px] font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
//                 >
//                   {cat.name}
//                 </Link>
//               ))}
//             </div>

//             {/* Mobile Login Links */}
//             <div className="mt-4 border-t border-gray-100 pt-4 space-y-2">
//               <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-3">
//                 Account
//               </p>
//               <Link
//                 href="/customerLogin/login"
//                 onClick={() => setMobileOpen(false)}
//                 className="flex items-center gap-3 px-4 py-3 rounded-xl bg-orange-50 text-orange-600 font-semibold text-[14px] hover:bg-orange-100 transition-colors"
//               >
//                 👤 Customer Login
//               </Link>
//               <Link
//                 href="/vendorLogin"
//                 onClick={() => setMobileOpen(false)}
//                 className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 text-gray-700 font-semibold text-[14px] hover:bg-orange-50 hover:text-orange-500 transition-colors"
//               >
//                 🏪 Vendor Login
//               </Link>
//               <Link
//                 href="/adminlogin"
//                 onClick={() => setMobileOpen(false)}
//                 className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 text-gray-700 font-semibold text-[14px] hover:bg-orange-50 hover:text-orange-500 transition-colors"
//               >
//                 🛡 Admin Login
//               </Link>
//             </div>

//             {/* Mobile Location */}
//             <div className="mt-4 border-t border-gray-100 pt-4 flex items-center gap-2">
//               <FaMapMarkerAlt className="text-orange-500 shrink-0" size={14} />
//               <span className="text-[13px] text-gray-700 font-medium">
//                 Delivering to: {location}
//               </span>
//               <button
//                 onClick={() => setEditing(true)}
//                 className="text-orange-400 hover:text-orange-600 transition-colors ml-auto"
//               >
//                 <FaEdit size={12} />
//               </button>
//             </div>
//           </div>
//         )}
//       </header>
//     </>
//   );
// }

// export default Navbar;



"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  FaSearch,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaEdit,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaSpinner,
} from "react-icons/fa";

const CATEGORIES = [
  { name: "Home Meals", link: "/home-meals" },
  { name: "Tiffins", link: "/tiffins" },
  { name: "Pickles", link: "/pickles" },
  { name: "Snacks", link: "/snacks" },
  { name: "Sweets", link: "/sweets" },
  { name: "Cakes", link: "/cakes" },
  { name: "Healthy Food", link: "/healthy-food" },
  { name: "Become Seller", link: "/vendor/login" },
];

// Fetch location suggestions (increased limit to 15, no country filter)
const fetchLocationSuggestions = async (query) => {
  if (!query.trim() || query.length < 2) return [];
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        query
      )}&addressdetails=1&limit=15`,
      {
        headers: {
          "User-Agent": "OjainFoodApp/1.0 (contact@ojain.com)",
        },
      }
    );
    const data = await res.json();
    return data.map((item) => ({
      displayName: item.display_name.split(",")[0], // short name
      fullName: item.display_name,
      lat: item.lat,
      lon: item.lon,
    }));
  } catch (error) {
    console.error("Location search error:", error);
    return [];
  }
};

function Navbar() {
  const [location, setLocation] = useState("");
  const [editing, setEditing] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const loginRef = useRef(null);
  const searchInputRef = useRef(null);

  // States for location search
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Load saved location from localStorage on mount + geolocation fallback
  useEffect(() => {
    const saved = localStorage.getItem("userLocation");
    if (saved) {
      setLocation(saved);
    } else {
      if (!navigator.geolocation) {
        setLocation("Location unavailable");
        return;
      }
      navigator.geolocation.getCurrentPosition(
        async ({ coords: { latitude, longitude } }) => {
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
              {
                headers: { "User-Agent": "OjainFoodApp/1.0" },
              }
            );
            const data = await res.json();
            const detected =
              data.address.city ||
              data.address.town ||
              data.address.state ||
              "Current Location";
            setLocation(detected);
            localStorage.setItem("userLocation", detected);
          } catch {
            setLocation("Unable to fetch");
          }
        },
        () => setLocation("Permission denied")
      );
    }
  }, []);

  // Debounced search for location suggestions
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.length >= 2) {
        setIsSearching(true);
        const results = await fetchLocationSuggestions(searchQuery);
        setSuggestions(results);
        setIsSearching(false);
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 400); // slight delay for better UX
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchInputRef.current && !searchInputRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close login dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (loginRef.current && !loginRef.current.contains(e.target)) {
        setLoginOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectSuggestion = (suggestion) => {
    setLocation(suggestion.displayName);
    localStorage.setItem("userLocation", suggestion.displayName);
    setSearchQuery("");
    setEditing(false);
    setShowSuggestions(false);
  };

  const cancelEdit = () => {
    setEditing(false);
    setSearchQuery("");
    setShowSuggestions(false);
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-orange-500 text-white text-[11px] sm:text-[13px] py-2 text-center font-semibold tracking-wide">
        Fresh Homemade Food Delivered Across India 🚚
      </div>

      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50 animate-slide-down">
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">
          {/* Top Row */}
          <div className="flex items-center justify-between gap-3 py-4 lg:grid lg:grid-cols-[220px_1fr_320px] lg:gap-8 lg:py-5">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <p className="text-[24px] sm:text-[30px] font-extrabold text-orange-500 leading-none tracking-tight">
                OJAIN
              </p>
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-400 mt-1">
                Homemade & Fresh
              </p>
            </Link>

            {/* Search — desktop only */}
            <div className="hidden lg:flex justify-center w-full">
              <div className="flex items-center w-full max-w-[760px] rounded-full overflow-hidden bg-gray-100 border border-transparent focus-within:border-orange-300 focus-within:bg-white transition-all duration-200">
                <input
                  type="text"
                  placeholder="Search homemade food..."
                  className="w-full bg-transparent px-6 py-4 text-[15px] text-gray-700 placeholder-gray-400 outline-none"
                />
                <button className="bg-orange-500 hover:bg-orange-600 transition-colors duration-200 text-white px-7 py-4 shrink-0">
                  <FaSearch size={16} />
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3 sm:gap-5 lg:gap-7 shrink-0 justify-end">
              {/* Location with Search — md+ */}
              <div className="hidden md:block relative" ref={searchInputRef}>
                <div className="flex items-center gap-1 mb-1">
                  <FaMapMarkerAlt className="text-orange-500" size={10} />
                  <span className="text-[11px] text-gray-400 font-medium">
                    Delivering To
                  </span>
                </div>
                {editing ? (
                  <div className="relative">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search city or area..."
                        className="border border-gray-200 focus:border-orange-400 rounded-full px-3 py-1 text-[12px] outline-none w-40 transition-colors"
                        autoFocus
                      />
                      <button
                        onClick={cancelEdit}
                        className="text-gray-400 hover:text-gray-600 text-[12px]"
                      >
                        Cancel
                      </button>
                    </div>
                    {/* Suggestions Dropdown */}
                    {showSuggestions && (
                      <ul className="absolute left-0 top-8 w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
                        {isSearching ? (
                          <li className="px-3 py-2 text-[12px] text-gray-400 flex items-center gap-1">
                            <FaSpinner className="animate-spin" /> Searching...
                          </li>
                        ) : suggestions.length > 0 ? (
                          suggestions.map((sug, idx) => (
                            <li
                              key={idx}
                              onClick={() => handleSelectSuggestion(sug)}
                              className="px-3 py-2 text-[12px] text-gray-700 hover:bg-orange-50 hover:text-orange-500 cursor-pointer transition-colors"
                            >
                              {sug.displayName}
                            </li>
                          ))
                        ) : (
                          <li className="px-3 py-2 text-[12px] text-gray-400">
                            No locations found. Try a different name.
                          </li>
                        )}
                      </ul>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-semibold text-gray-800">
                      {location || "Set location"}
                    </span>
                    <button
                      onClick={() => setEditing(true)}
                      className="text-orange-400 hover:text-orange-600 transition-colors duration-200"
                    >
                      <FaEdit size={12} />
                    </button>
                  </div>
                )}
              </div>

              {/* Login Dropdown — md+ */}
              <div ref={loginRef} className="relative hidden md:block">
                <p className="text-[11px] text-gray-400 font-medium text-right">
                  Welcome
                </p>
                <button
                  onClick={() => setLoginOpen(!loginOpen)}
                  className="flex items-center gap-2 text-[14px] font-semibold text-gray-800 hover:text-orange-500 transition-colors duration-200"
                >
                  <FaUserCircle size={18} />
                  Login
                  <span className="text-[10px]">{loginOpen ? "▲" : "▼"}</span>
                </button>

                {loginOpen && (
                  <div className="absolute right-0 top-11 w-56 bg-white border border-gray-100 rounded-2xl shadow-2xl z-50 overflow-hidden">
                    <Link
                      href="/customerLogin/login"
                      onClick={() => setLoginOpen(false)}
                      className="block px-5 py-4 text-[14px] text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                    >
                      👤 Customer Login
                    </Link>
                    <Link
                      href="/vendorLogin/login"
                      onClick={() => setLoginOpen(false)}
                      className="block px-5 py-4 text-[14px] text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                    >
                      🏪 Vendor Login
                    </Link>
                    <Link
                      href="/adminlogin"
                      onClick={() => setLoginOpen(false)}
                      className="block px-5 py-4 text-[14px] text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                    >
                      🛡 Admin Login
                    </Link>
                  </div>
                )}
              </div>

              {/* Cart */}
              <button className="relative hover:scale-110 transition-transform duration-200">
                <FaShoppingCart size={20} className="text-gray-700" />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  2
                </span>
              </button>

              {/* Hamburger — mobile/tablet */}
              <button
                className="lg:hidden text-gray-700 hover:text-orange-500 transition-colors duration-200 p-1"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>
          </div>

          {/* Categories — desktop */}
          <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 border-t border-gray-100 py-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.name}
                href={cat.link}
                className="text-[14px] font-medium text-gray-600 hover:text-orange-500 transition-colors duration-200 pb-1 border-b-2 border-transparent hover:border-orange-400 whitespace-nowrap"
              >
                {cat.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 pb-6 shadow-lg">
            {/* Mobile Search */}
            <div className="mt-4 flex items-center rounded-full overflow-hidden bg-gray-100 border border-transparent focus-within:border-orange-300 focus-within:bg-white transition-all duration-200">
              <input
                type="text"
                placeholder="Search homemade food..."
                className="w-full bg-transparent px-5 py-3 text-[14px] text-gray-700 placeholder-gray-400 outline-none"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 transition-colors duration-200 shrink-0">
                <FaSearch size={14} />
              </button>
            </div>

            {/* Mobile Categories */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.link}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl bg-gray-50 text-[13px] font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>

            {/* Mobile Login Links */}
            <div className="mt-4 border-t border-gray-100 pt-4 space-y-2">
              <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-3">
                Account
              </p>
              <Link
                href="/customerLogin/login"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-orange-50 text-orange-600 font-semibold text-[14px] hover:bg-orange-100 transition-colors"
              >
                👤 Customer Login
              </Link>
              <Link
                href="/vendorLogin"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 text-gray-700 font-semibold text-[14px] hover:bg-orange-50 hover:text-orange-500 transition-colors"
              >
                🏪 Vendor Login
              </Link>
              <Link
                href="/adminlogin"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 text-gray-700 font-semibold text-[14px] hover:bg-orange-50 hover:text-orange-500 transition-colors"
              >
                🛡 Admin Login
              </Link>
            </div>

            {/* Mobile Location with Search */}
            <div className="mt-4 border-t border-gray-100 pt-4">
              <div className="flex items-center gap-2 mb-2">
                <FaMapMarkerAlt className="text-orange-500 shrink-0" size={14} />
                <span className="text-[13px] text-gray-700 font-medium">
                  Delivering to:
                </span>
                {!editing && (
                  <button
                    onClick={() => setEditing(true)}
                    className="text-orange-400 hover:text-orange-600 transition-colors ml-auto"
                  >
                    <FaEdit size={12} />
                  </button>
                )}
              </div>
              {editing ? (
                <div className="relative" ref={searchInputRef}>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search city or area..."
                    className="w-full border border-gray-200 focus:border-orange-400 rounded-xl px-4 py-2 text-[14px] outline-none transition-colors"
                    autoFocus
                  />
                  {showSuggestions && (
                    <ul className="absolute left-0 top-10 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-48 overflow-y-auto">
                      {isSearching ? (
                        <li className="px-4 py-2 text-[13px] text-gray-400 flex items-center gap-1">
                          <FaSpinner className="animate-spin" /> Searching...
                        </li>
                      ) : suggestions.length > 0 ? (
                        suggestions.map((sug, idx) => (
                          <li
                            key={idx}
                            onClick={() => handleSelectSuggestion(sug)}
                            className="px-4 py-2 text-[13px] text-gray-700 hover:bg-orange-50 hover:text-orange-500 cursor-pointer"
                          >
                            {sug.displayName}
                          </li>
                        ))
                      ) : (
                        <li className="px-4 py-2 text-[13px] text-gray-400">
                          No locations found. Try a different name.
                        </li>
                      )}
                    </ul>
                  )}
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={cancelEdit}
                      className="text-gray-500 text-[13px] underline"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <span className="text-[14px] font-semibold text-gray-800 block">
                  {location || "Set your location"}
                </span>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;