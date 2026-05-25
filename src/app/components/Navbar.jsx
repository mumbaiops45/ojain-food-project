"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaSearch, FaShoppingCart, FaMapMarkerAlt, FaEdit,
  FaUserCircle, FaBars, FaTimes, FaSpinner, FaLeaf,
} from "react-icons/fa";
import useCartStore       from "../../../store/cartStore";
import { useCategoryStore } from "../../../store/categoryStore";
import getImageUrl          from "../../../utils/getImageUrl";

// Convert category name → URL slug  (same logic as category page)
const toSlug = (name) => name?.toLowerCase().replace(/\s+/g, "-") ?? "";

const fetchLocationSuggestions = async (query) => {
  if (!query.trim() || query.length < 2) return [];
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=10`
    );
    const data = await res.json();
    return data.map((item) => ({
      displayName: item.display_name.split(",")[0],
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
  const [location, setLocation]               = useState("");
  const [editing, setEditing]                 = useState(false);
  const [mobileOpen, setMobileOpen]           = useState(false);
  const [loginOpen, setLoginOpen]             = useState(false);
  const [searchQuery, setSearchQuery]         = useState("");
  const [suggestions, setSuggestions]         = useState([]);
  const [isSearching, setIsSearching]         = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const loginRef       = useRef(null);
  const searchInputRef = useRef(null);
  const router         = useRouter();

  // Dynamic cart count
  const totalItems = useCartStore((s) => s.totalItems());

  // Dynamic categories from backend
  const categories      = useCategoryStore((s) => s.categories);
  const fetchCategories = useCategoryStore((s) => s.fetchCategories);

  useEffect(() => {
    if (categories.length === 0) fetchCategories();
  }, [categories.length, fetchCategories]);

  const detectCurrentLocation = () => {
    if (!navigator.geolocation) { alert("Geolocation not supported"); return; }
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        try {
          const res  = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
          const data = await res.json();
          const detected = data.address.city || data.address.town || data.address.state || "Current Location";
          setLocation(detected);
          localStorage.setItem("userLocation", detected);
          setEditing(false);
          setSearchQuery("");
          setShowSuggestions(false);
        } catch { alert("Unable to fetch current location"); }
      },
      () => alert("Location permission denied")
    );
  };

  useEffect(() => {
    const saved = localStorage.getItem("userLocation");
    if (saved) setLocation(saved);
    else detectCurrentLocation();
  }, []);

  useEffect(() => {
    const id = setTimeout(async () => {
      if (searchQuery.length >= 2) {
        setIsSearching(true);
        const results = await fetchLocationSuggestions(searchQuery);
        setSuggestions(results);
        setIsSearching(false);
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
      }
    }, 400);
    return () => clearTimeout(id);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchInputRef.current && !searchInputRef.current.contains(e.target)) setShowSuggestions(false);
      if (loginRef.current && !loginRef.current.contains(e.target)) setLoginOpen(false);
    };
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
      {/* ── ANNOUNCEMENT BAR ── */}
      <div className="bg-brand-green text-white text-[11px] sm:text-[13px] py-2 text-center font-semibold tracking-widest uppercase">
        🍛 Fresh Homemade Food Delivered Across India &nbsp;🚚
      </div>

      {/* ── MAIN NAVBAR ── */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-brand-green-pale">
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">

          {/* TOP ROW */}
          <div className="flex items-center justify-between gap-4 py-3 lg:grid lg:grid-cols-[240px_1fr_340px] lg:gap-8">

            {/* ── LOGO ── */}
            <Link href="/" className="shrink-0 flex items-center gap-3 group">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="OJAIN Logo"
                  className="w-14 h-14 md:w-16 md:h-16 object-cover rounded-full ring-2 ring-brand-green/20 group-hover:ring-brand-orange/40 transition"
                />
                <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-brand-green rounded-full flex items-center justify-center">
                  <FaLeaf className="text-white text-[8px]" />
                </span>
              </div>
              <div className="hidden sm:block">
                <p className="text-[20px] font-extrabold text-brand-green leading-none tracking-tight">OJAIN</p>
                <p className="text-[11px] font-semibold text-brand-orange tracking-widest uppercase mt-0.5">Pure Veg</p>
              </div>
            </Link>

            {/* ── SEARCH ── */}
            <div className="hidden lg:flex justify-center">
              <div className="flex items-center w-full max-w-[560px] bg-brand-bg rounded-full overflow-hidden shadow-md border border-brand-green-pale focus-within:border-brand-green focus-within:shadow-[0_0_0_3px_rgba(46,125,50,0.12)] transition-all">
                <input
                  type="text"
                  placeholder="Search homemade food..."
                  className="w-full px-6 py-3.5 outline-none text-[14px] text-brand-text placeholder-gray-400 bg-transparent"
                />
                <button className="bg-brand-green hover:bg-[#1B5E20] active:bg-brand-orange text-white px-7 py-3.5 transition-colors flex items-center gap-2 text-[14px] font-semibold">
                  <FaSearch size={14} />
                  <span className="hidden xl:inline">Search</span>
                </button>
              </div>
            </div>

            {/* ── RIGHT CONTROLS ── */}
            <div className="flex items-center gap-4 justify-end">

              {/* LOCATION */}
              <div className="hidden md:block relative" ref={searchInputRef}>
                <div className="flex items-center gap-1 mb-0.5">
                  <FaMapMarkerAlt className="text-brand-green" size={9} />
                  <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Delivering To</span>
                </div>

                {editing ? (
                  <div className="relative">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search city..."
                        className="border border-brand-green-pale focus:border-brand-green rounded-full px-4 py-2 text-[13px] outline-none w-52 shadow-sm bg-brand-bg"
                        autoFocus
                      />
                      <button onClick={cancelEdit} className="text-[11px] text-brand-orange font-semibold hover:text-[#E65100]">
                        Cancel
                      </button>
                    </div>

                    {showSuggestions && (
                      <div className="absolute left-0 top-14 w-72 bg-white border border-gray-100 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] z-[9999] overflow-hidden">
                        <button
                          onClick={detectCurrentLocation}
                          className="w-full flex items-start gap-4 px-5 py-4 hover:bg-brand-green-pale transition border-b border-gray-100"
                        >
                          <div className="w-10 h-10 rounded-full bg-brand-green-pale text-brand-green flex items-center justify-center shrink-0 text-lg">
                            📍
                          </div>
                          <div className="text-left">
                            <p className="font-bold text-brand-text text-sm">Use Current Location</p>
                            <p className="text-xs text-gray-400 mt-0.5">Detect your live location instantly</p>
                          </div>
                        </button>

                        <div className="max-h-64 overflow-y-auto">
                          {isSearching ? (
                            <div className="px-5 py-5 flex items-center gap-3 text-sm text-gray-500">
                              <FaSpinner className="animate-spin text-brand-green" />
                              Searching locations...
                            </div>
                          ) : suggestions.length > 0 ? (
                            suggestions.map((sug, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleSelectSuggestion(sug)}
                                className="w-full text-left px-5 py-3.5 hover:bg-brand-green-pale transition border-b border-gray-50"
                              >
                                <div className="flex gap-3 items-start">
                                  <FaMapMarkerAlt className="text-brand-green mt-1 shrink-0" size={12} />
                                  <div>
                                    <p className="font-semibold text-sm text-brand-text">{sug.displayName}</p>
                                    <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{sug.fullName}</p>
                                  </div>
                                </div>
                              </button>
                            ))
                          ) : (
                            <div className="px-5 py-5 text-sm text-gray-400">No locations found</div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5">
                    <span className="text-[13px] font-bold text-brand-text">
                      {location || "Set location"}
                    </span>
                    <button
                      onClick={() => { setEditing(true); setShowSuggestions(true); }}
                      className="text-brand-green-mid hover:text-brand-green transition"
                    >
                      <FaEdit size={11} />
                    </button>
                  </div>
                )}
              </div>

              {/* LOGIN */}
              <div ref={loginRef} className="relative hidden md:block">
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider text-right mb-0.5">Account</p>
                <button
                  onClick={() => setLoginOpen(!loginOpen)}
                  className="flex items-center gap-1.5 text-[13px] font-bold text-brand-text hover:text-brand-green transition"
                >
                  <FaUserCircle size={17} className="text-brand-green" />
                  Login
                  <span className="text-[9px] text-gray-400">{loginOpen ? "▲" : "▼"}</span>
                </button>

                {loginOpen && (
                  <div className="absolute right-0 top-14 w-64 bg-white border border-gray-100 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] z-[9999] overflow-hidden animate-slide-down">
                    <div className="py-2">
                      {[
                        { href: "/customerLogin/login", label: "👤 Customer Login" },
                        { href: "/vendorLogin/login",   label: "🏪 Vendor Login" },
                        { href: "/adminlogin",          label: "🛡 Admin Login" },
                      ].map(({ href, label }) => (
                        <Link
                          key={href}
                          href={href}
                          className="block px-6 py-3.5 text-[14px] font-semibold text-brand-text hover:bg-brand-green-pale hover:text-brand-green transition"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ORDER NOW CTA — desktop */}
              {/* <Link
                href="/menu"
                className="hidden md:inline-flex items-center gap-2 bg-brand-orange hover:bg-[#E65100] text-white text-[13px] font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Order Now
              </Link> */}

              {/* CART */}
              <button
                onClick={() => router.push("/cart")}
                className="relative hover:scale-110 transition"
                aria-label="View cart"
              >
                <FaShoppingCart size={20} className="text-brand-text" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow">
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </button>

              {/* MOBILE MENU TOGGLE */}
              <button
                className="lg:hidden text-brand-text hover:text-brand-green transition"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>
          </div>

          {/* ── DESKTOP CATEGORY MARQUEE ── */}
          <div className="hidden lg:block border-t border-brand-green-pale py-2.5 overflow-hidden relative">

            {/* Fade edges so scroll feels seamless */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Skeleton while loading */}
            {categories.length === 0 && (
              <div className="flex items-center gap-7 px-4">
                {[1,2,3,4,5,6,7,8].map((i) => (
                  <div key={i} className="flex items-center gap-1.5 animate-pulse shrink-0">
                    <div className="w-5 h-5 rounded-full bg-gray-200" />
                    <div className="h-3 w-16 bg-gray-200 rounded-full" />
                  </div>
                ))}
              </div>
            )}

            {/* Marquee — items duplicated for seamless infinite loop */}
            {categories.length > 0 && (
              <div className="animate-marquee flex items-center gap-8 w-max">
                {/* First copy */}
                {[{ _id: "about", name: "About", image: null, _href: "/about" }, ...categories].map((cat) => (
                  <Link
                    key={"a-" + cat._id}
                    href={cat._href ?? `/category/${toSlug(cat.name)}`}
                    className="group flex items-center gap-1.5 text-[13px] font-semibold text-brand-text hover:text-brand-green transition whitespace-nowrap shrink-0"
                  >
                    {cat._href ? (
                      <span className="text-[15px]">📖</span>
                    ) : cat.image ? (
                      <img src={getImageUrl(cat.image)} alt={cat.name} className="w-5 h-5 rounded-full object-cover ring-1 ring-brand-green/20 group-hover:ring-brand-green/60 transition shrink-0" />
                    ) : (
                      <span className="w-5 h-5 rounded-full bg-brand-green-pale flex items-center justify-center text-[10px] shrink-0">🍽</span>
                    )}
                    <span className="relative">
                      {cat.name}
                      <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full rounded-full" />
                    </span>
                  </Link>
                ))}
                {/* Second copy — makes loop seamless */}
                {[{ _id: "about", name: "About", image: null, _href: "/about" }, ...categories].map((cat) => (
                  <Link
                    key={"b-" + cat._id}
                    href={cat._href ?? `/category/${toSlug(cat.name)}`}
                    className="group flex items-center gap-1.5 text-[13px] font-semibold text-brand-text hover:text-brand-green transition whitespace-nowrap shrink-0"
                    tabIndex={-1}
                    aria-hidden
                  >
                    {cat._href ? (
                      <span className="text-[15px]">📖</span>
                    ) : cat.image ? (
                      <img src={getImageUrl(cat.image)} alt={cat.name} className="w-5 h-5 rounded-full object-cover ring-1 ring-brand-green/20 transition shrink-0" />
                    ) : (
                      <span className="w-5 h-5 rounded-full bg-brand-green-pale flex items-center justify-center text-[10px] shrink-0">🍽</span>
                    )}
                    <span>{cat.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── MOBILE CATEGORY STRIP (always visible, no sidebar needed) ── */}
        <div className="lg:hidden border-t border-brand-green-pale bg-white">
          <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide px-4 py-2">

            {/* About */}
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="flex flex-col items-center gap-1 shrink-0"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-green-pale flex items-center justify-center text-xl border border-brand-green/10">
                📖
              </div>
              <span className="text-[10px] font-semibold text-brand-text whitespace-nowrap">About</span>
            </Link>

            {/* Dynamic categories */}
            {categories.map((cat) => (
              <Link
                key={cat._id}
                href={`/category/${toSlug(cat.name)}`}
                onClick={() => setMobileOpen(false)}
                className="flex flex-col items-center gap-1 shrink-0"
              >
                <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                  {cat.image ? (
                    <img src={getImageUrl(cat.image)} alt={cat.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-brand-green-pale flex items-center justify-center text-xl">🍽</div>
                  )}
                </div>
                <span className="text-[10px] font-semibold text-brand-text whitespace-nowrap max-w-14 truncate text-center">{cat.name}</span>
              </Link>
            ))}

            {/* Skeleton */}
            {categories.length === 0 && [1,2,3,4,5,6].map((i) => (
              <div key={i} className="flex flex-col items-center gap-1 shrink-0 animate-pulse">
                <div className="w-12 h-12 rounded-2xl bg-gray-200" />
                <div className="h-2 w-10 bg-gray-200 rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* ── MOBILE MENU PANEL ── */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-brand-green-pale bg-white shadow-xl animate-slide-down">
            {/* Mobile search */}
            <div className="px-4 pt-4 pb-3">
              <div className="flex items-center bg-brand-bg rounded-full overflow-hidden border border-brand-green-pale">
                <input
                  type="text"
                  placeholder="Search homemade food..."
                  className="w-full px-5 py-3 outline-none text-[14px] text-brand-text placeholder-gray-400 bg-transparent"
                />
                <button className="bg-brand-green text-white px-5 py-3">
                  <FaSearch size={14} />
                </button>
              </div>
            </div>

            {/* Mobile login links */}
            <div className="px-4 pb-3 flex flex-col gap-1">
              {[
                { href: "/customerLogin/login", label: "👤 Customer Login" },
                { href: "/vendorLogin/login",   label: "🏪 Vendor Login" },
                { href: "/adminlogin",          label: "🛡 Admin Login" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-[14px] font-semibold text-brand-text hover:text-brand-green hover:bg-brand-green-pale rounded-xl transition"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Mobile categories (dynamic) */}
            <div className="px-4 pb-4 border-t border-brand-green-pale pt-3">
              <p className="text-[11px] font-bold text-brand-green uppercase tracking-widest mb-3 px-1">Categories</p>

              {/* Skeleton while loading */}
              {categories.length === 0 && (
                <div className="grid grid-cols-3 gap-2">
                  {[1,2,3,4,5,6].map((i) => (
                    <div key={i} className="h-20 rounded-2xl bg-gray-100 animate-pulse" />
                  ))}
                </div>
              )}

              <div className="grid grid-cols-3 gap-2">
                {/* Fixed About tile */}
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-2xl bg-brand-bg border border-brand-green-pale hover:border-brand-green hover:bg-brand-green-pale transition text-center"
                >
                  <span className="text-2xl">📖</span>
                  <span className="text-[11px] font-semibold text-brand-text">About</span>
                </Link>

                {/* Dynamic category tiles */}
                {categories.map((cat) => (
                  <Link
                    key={cat._id}
                    href={`/category/${toSlug(cat.name)}`}
                    onClick={() => setMobileOpen(false)}
                    className="relative flex flex-col items-end justify-end overflow-hidden rounded-2xl border border-brand-green-pale hover:border-brand-green transition text-center h-20"
                  >
                    {/* Category image background */}
                    {cat.image && (
                      <img
                        src={getImageUrl(cat.image)}
                        alt={cat.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40" />
                    {/* Name */}
                    <span className="relative z-10 w-full text-center text-[11px] font-bold text-white pb-2 px-1 leading-tight drop-shadow">
                      {cat.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="px-4 pb-5">
              <Link
                href="/menu"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-[#E65100] text-white text-[15px] font-bold py-3.5 rounded-full shadow-md transition-all w-full"
              >
                🍽️ Order Now
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
