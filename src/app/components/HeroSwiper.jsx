// // // // // // "use client";

// // // // // // import { useState, useEffect } from "react";
// // // // // // import Image from "next/image";

// // // // // // const images = [
// // // // // //   "/heroo8.png",
// // // // // //   "/cake2.jpg",
// // // // // //   "/heroo.jpg",
// // // // // // ];

// // // // // // export default function HeroSwiper() {
// // // // // //   const [idx, setIdx] = useState(0);
// // // // // //   const [prev, setPrev] = useState(null);
// // // // // //   const [animating, setAnimating] = useState(false);

// // // // // //   useEffect(() => {
// // // // // //     const timer = setInterval(() => advance(1), 4000);
// // // // // //     return () => clearInterval(timer);
// // // // // //   }, []);

// // // // // //   function advance(dir) {
// // // // // //     if (animating) return;
// // // // // //     setAnimating(true);
// // // // // //     setPrev(idx);
// // // // // //     setIdx((p) => (p + dir + images.length) % images.length);
// // // // // //     setTimeout(() => {
// // // // // //       setPrev(null);
// // // // // //       setAnimating(false);
// // // // // //     }, 600);
// // // // // //   }

// // // // // //   function goTo(i) {
// // // // // //     if (i === idx || animating) return;
// // // // // //     setAnimating(true);
// // // // // //     setPrev(idx);
// // // // // //     setIdx(i);
// // // // // //     setTimeout(() => {
// // // // // //       setPrev(null);
// // // // // //       setAnimating(false);
// // // // // //     }, 600);
// // // // // //   }

// // // // // //   return (
// // // // // //     <section className="w-full pt-3 pb-2">

// // // // // //       <style>{`
// // // // // //         @keyframes slideIn {
// // // // // //           from { opacity: 0; transform: translateX(60px); }
// // // // // //           to   { opacity: 1; transform: translateX(0); }
// // // // // //         }
// // // // // //         @keyframes slideOut {
// // // // // //           from { opacity: 1; transform: translateX(0); }
// // // // // //           to   { opacity: 0; transform: translateX(-60px); }
// // // // // //         }
// // // // // //         .slide-in  { animation: slideIn  0.6s cubic-bezier(0.22,1,0.36,1) both; }
// // // // // //         .slide-out { animation: slideOut 0.6s cubic-bezier(0.22,1,0.36,1) both; }
// // // // // //       `}</style>

// // // // // //       {/* ── SLIDER ── */}
// // // // // //       <div
// // // // // //         className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl"
// // // // // //         style={{ height: "clamp(220px, 60vw, 620px)" }}
// // // // // //       >
// // // // // //         {/* outgoing image */}
// // // // // //         {prev !== null && (
// // // // // //           <Image
// // // // // //             key={`out-${prev}`}
// // // // // //             src={images[prev]}
// // // // // //             alt=""
// // // // // //             fill
// // // // // //             className="object-cover object-center slide-out"
// // // // // //           />
// // // // // //         )}

// // // // // //         {/* current image */}
// // // // // //         <Image
// // // // // //           key={`in-${idx}`}
// // // // // //           src={images[idx]}
// // // // // //           alt="OJAIN hero"
// // // // // //           fill
// // // // // //           className="object-cover object-center slide-in"
// // // // // //           priority
// // // // // //         />

// // // // // //         {/* prev / next arrows */}
// // // // // //         <button
// // // // // //           onClick={() => advance(-1)}
// // // // // //           className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/75 backdrop-blur-sm flex items-center justify-center shadow text-gray-700 hover:bg-white transition text-lg sm:text-2xl"
// // // // // //           aria-label="Previous"
// // // // // //         >
// // // // // //           ‹
// // // // // //         </button>
// // // // // //         <button
// // // // // //           onClick={() => advance(1)}
// // // // // //           className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/75 backdrop-blur-sm flex items-center justify-center shadow text-gray-700 hover:bg-white transition text-lg sm:text-2xl"
// // // // // //           aria-label="Next"
// // // // // //         >
// // // // // //           ›
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {/* ── DOTS ── */}
// // // // // //       <div className="flex justify-center items-center gap-2 mt-2 sm:mt-3">
// // // // // //         {images.map((_, i) => (
// // // // // //           <button
// // // // // //             key={i}
// // // // // //             onClick={() => goTo(i)}
// // // // // //             className="transition-all duration-300"
// // // // // //             style={{
// // // // // //               width: i === idx ? 24 : 8,
// // // // // //               height: 8,
// // // // // //               borderRadius: 4,
// // // // // //               background: i === idx ? "#2E7D32" : "#D1D5DB",
// // // // // //             }}
// // // // // //           />
// // // // // //         ))}
// // // // // //       </div>

// // // // // //     </section>
// // // // // //   );
// // // // // // }


// // // // // "use client";

// // // // // import { useState, useEffect, useRef } from "react";
// // // // // import Image from "next/image";

// // // // // const images = [
// // // // //   "/heroo8.png",
// // // // //   "/cake2.jpg",
// // // // //   "/heroo.jpg",
// // // // // ];

// // // // // export default function HeroSwiper() {
// // // // //   const [idx, setIdx] = useState(0);
// // // // //   const [prev, setPrev] = useState(null);
// // // // //   const [animating, setAnimating] = useState(false);

// // // // //   const touchStartX = useRef(0);
// // // // //   const touchEndX = useRef(0);

// // // // //   const animationDuration = 600;

// // // // //   const advance = (dir) => {
// // // // //     if (animating) return;

// // // // //     setAnimating(true);
// // // // //     setPrev(idx);

// // // // //     setIdx((current) => (current + dir + images.length) % images.length);

// // // // //     setTimeout(() => {
// // // // //       setPrev(null);
// // // // //       setAnimating(false);
// // // // //     }, animationDuration);
// // // // //   };

// // // // //   const goTo = (i) => {
// // // // //     if (i === idx || animating) return;

// // // // //     setAnimating(true);
// // // // //     setPrev(idx);
// // // // //     setIdx(i);

// // // // //     setTimeout(() => {
// // // // //       setPrev(null);
// // // // //       setAnimating(false);
// // // // //     }, animationDuration);
// // // // //   };

// // // // //   // Auto Slide
// // // // //   useEffect(() => {
// // // // //     const timer = setInterval(() => {
// // // // //       advance(1);
// // // // //     }, 4000);

// // // // //     return () => clearInterval(timer);
// // // // //   }, [idx, animating]);

// // // // //   // Swipe Support
// // // // //   const handleTouchStart = (e) => {
// // // // //     touchStartX.current = e.changedTouches[0].clientX;
// // // // //   };

// // // // //   const handleTouchEnd = (e) => {
// // // // //     touchEndX.current = e.changedTouches[0].clientX;

// // // // //     const distance = touchStartX.current - touchEndX.current;

// // // // //     if (Math.abs(distance) < 50) return;

// // // // //     if (distance > 0) {
// // // // //       // Swipe Left
// // // // //       advance(1);
// // // // //     } else {
// // // // //       // Swipe Right
// // // // //       advance(-1);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <section className="w-full pt-3 pb-2">
// // // // //       <style>{`
// // // // //         @keyframes slideIn {
// // // // //           from {
// // // // //             opacity: 0;
// // // // //             transform: translateX(60px);
// // // // //           }
// // // // //           to {
// // // // //             opacity: 1;
// // // // //             transform: translateX(0);
// // // // //           }
// // // // //         }

// // // // //         @keyframes slideOut {
// // // // //           from {
// // // // //             opacity: 1;
// // // // //             transform: translateX(0);
// // // // //           }
// // // // //           to {
// // // // //             opacity: 0;
// // // // //             transform: translateX(-60px);
// // // // //           }
// // // // //         }

// // // // //         .slide-in {
// // // // //           animation: slideIn .6s cubic-bezier(.22,1,.36,1) both;
// // // // //         }

// // // // //         .slide-out {
// // // // //           animation: slideOut .6s cubic-bezier(.22,1,.36,1) both;
// // // // //         }
// // // // //       `}</style>

// // // // //       {/* Slider */}
// // // // //       <div
// // // // //         className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl select-none"
// // // // //         style={{ height: "clamp(220px, 60vw, 620px)" }}
// // // // //         onTouchStart={handleTouchStart}
// // // // //         onTouchEnd={handleTouchEnd}
// // // // //       >
// // // // //         {/* Previous Image */}
// // // // //         {prev !== null && (
// // // // //           <Image
// // // // //             key={`prev-${prev}`}
// // // // //             src={images[prev]}
// // // // //             alt=""
// // // // //             fill
// // // // //             className="object-cover object-center slide-out"
// // // // //           />
// // // // //         )}

// // // // //         {/* Current Image */}
// // // // //         <Image
// // // // //           key={`current-${idx}`}
// // // // //           src={images[idx]}
// // // // //           alt="OJAIN Hero Banner"
// // // // //           fill
// // // // //           priority
// // // // //           className="object-cover object-center slide-in"
// // // // //         />

// // // // //         {/* Previous Button - Desktop Only */}
// // // // //         {/* <button
// // // // //           onClick={() => advance(-1)}
// // // // //           aria-label="Previous"
// // // // //           className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/80 backdrop-blur items-center justify-center shadow-lg hover:bg-white transition"
// // // // //         >
// // // // //           <span className="text-2xl text-gray-700">‹</span>
// // // // //         </button> */}

// // // // //         {/* Next Button - Desktop Only */}
// // // // //         {/* <button
// // // // //           onClick={() => advance(1)}
// // // // //           aria-label="Next"
// // // // //           className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/80 backdrop-blur items-center justify-center shadow-lg hover:bg-white transition"
// // // // //         >
// // // // //           <span className="text-2xl text-gray-700">›</span>
// // // // //         </button> */}
// // // // //       </div>

// // // // //       {/* Dots */}
// // // // //       {/* <div className="flex justify-center items-center gap-2 mt-3">
// // // // //         {images.map((_, i) => (
// // // // //           <button
// // // // //             key={i}
// // // // //             onClick={() => goTo(i)}
// // // // //             aria-label={`Go to slide ${i + 1}`}
// // // // //             className="transition-all duration-300"
// // // // //             style={{
// // // // //               width: i === idx ? 24 : 8,
// // // // //               height: 8,
// // // // //               borderRadius: 9999,
// // // // //               backgroundColor: i === idx ? "#2E7D32" : "#D1D5DB",
// // // // //             }}
// // // // //           />
// // // // //         ))}
// // // // //       </div> */}
// // // // //     </section>
// // // // //   );
// // // // // }


// // // // "use client";

// // // // import { useState, useEffect, useRef } from "react";
// // // // import Image from "next/image";
// // // // import Link from "next/link";

// // // // // ── STATIC FOOD PROMOTIONAL BANNERS ──
// // // // // Replace the image paths, links & text with your own
// // // // const banners = [
// // // //   {
// // // //     src: "/cake2.jpg", // you can replace with your own food banner
// // // //     alt: "New Dessert Collection",
// // // //     link: "/category/desserts",
// // // //     title: "Sweet Indulgence",
// // // //     subtitle: "Explore our new dessert range",
// // // //   },
// // // //   {
// // // //     src: "/heroo8.png",
// // // //     alt: "50% Off on First Order",
// // // //     link: "/offers",
// // // //     title: "Welcome Offer",
// // // //     subtitle: "Get 50% off your first order",
// // // //   },
// // // //   {
// // // //     src: "/heroo.jpg",
// // // //     alt: "Jain & Satvik Special",
// // // //     link: "/category/satvik",
// // // //     title: "Pure Jain Food",
// // // //     subtitle: "Specially curated for you",
// // // //   },
// // // //   // Add more banners as needed
// // // // ];

// // // // export default function HeroSwiper() {
// // // //   const [idx, setIdx] = useState(0);
// // // //   const [prev, setPrev] = useState(null);
// // // //   const [animating, setAnimating] = useState(false);
// // // //   const touchStartX = useRef(0);
// // // //   const touchEndX = useRef(0);
// // // //   const animationDuration = 600;

// // // //   const advance = (dir) => {
// // // //     if (animating || banners.length === 0) return;
// // // //     setAnimating(true);
// // // //     setPrev(idx);
// // // //     setIdx((current) => (current + dir + banners.length) % banners.length);
// // // //     setTimeout(() => {
// // // //       setPrev(null);
// // // //       setAnimating(false);
// // // //     }, animationDuration);
// // // //   };

// // // //   const goTo = (i) => {
// // // //     if (i === idx || animating || banners.length === 0) return;
// // // //     setAnimating(true);
// // // //     setPrev(idx);
// // // //     setIdx(i);
// // // //     setTimeout(() => {
// // // //       setPrev(null);
// // // //       setAnimating(false);
// // // //     }, animationDuration);
// // // //   };

// // // //   // Auto slide
// // // //   useEffect(() => {
// // // //     if (banners.length < 2) return;
// // // //     const timer = setInterval(() => advance(1), 4000);
// // // //     return () => clearInterval(timer);
// // // //   }, [idx, animating]);

// // // //   // Swipe support
// // // //   const handleTouchStart = (e) => {
// // // //     touchStartX.current = e.changedTouches[0].clientX;
// // // //   };
// // // //   const handleTouchEnd = (e) => {
// // // //     touchEndX.current = e.changedTouches[0].clientX;
// // // //     const distance = touchStartX.current - touchEndX.current;
// // // //     if (Math.abs(distance) < 50) return;
// // // //     advance(distance > 0 ? 1 : -1);
// // // //   };

// // // //   if (banners.length === 0) {
// // // //     return (
// // // //       <div className="w-full h-48 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
// // // //         No banners available
// // // //       </div>
// // // //     );
// // // //   }

// // // //   const current = banners[idx];
// // // //   const previous = prev !== null ? banners[prev] : null;

// // // //   return (
// // // //     <section className="w-full pt-3 pb-2">
// // // //       <style>{`
// // // //         @keyframes slideIn {
// // // //           from { opacity: 0; transform: translateX(60px); }
// // // //           to { opacity: 1; transform: translateX(0); }
// // // //         }
// // // //         @keyframes slideOut {
// // // //           from { opacity: 1; transform: translateX(0); }
// // // //           to { opacity: 0; transform: translateX(-60px); }
// // // //         }
// // // //         .slide-in { animation: slideIn .6s cubic-bezier(.22,1,.36,1) both; }
// // // //         .slide-out { animation: slideOut .6s cubic-bezier(.22,1,.36,1) both; }
// // // //       `}</style>

// // // //       <div
// // // //         className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl select-none"
// // // //         style={{ height: "clamp(220px, 60vw, 620px)" }}
// // // //         onTouchStart={handleTouchStart}
// // // //         onTouchEnd={handleTouchEnd}
// // // //       >
// // // //         {previous && (
// // // //           <Image
// // // //             key={`prev-${prev}`}
// // // //             src={previous.src}
// // // //             alt={previous.alt || "Banner"}
// // // //             fill
// // // //             className="object-cover object-center slide-out"
// // // //           />
// // // //         )}

// // // //         {current && (
// // // //           current.link ? (
// // // //             <Link href={current.link} className="block w-full h-full">
// // // //               <Image
// // // //                 key={`current-${idx}`}
// // // //                 src={current.src}
// // // //                 alt={current.alt || "OJAIN Banner"}
// // // //                 fill
// // // //                 priority
// // // //                 className="object-cover object-center slide-in"
// // // //               />
// // // //               {(current.title || current.subtitle) && (
// // // //                 <div className="absolute top-6 left-6 text-white drop-shadow">
// // // //                   {current.title && <h2 className="text-2xl sm:text-3xl font-black">{current.title}</h2>}
// // // //                   {current.subtitle && <p className="text-lg font-bold text-brand-orange">{current.subtitle}</p>}
// // // //                 </div>
// // // //               )}
// // // //             </Link>
// // // //           ) : (
// // // //             <Image
// // // //               key={`current-${idx}`}
// // // //               src={current.src}
// // // //               alt={current.alt || "OJAIN Banner"}
// // // //               fill
// // // //               priority
// // // //               className="object-cover object-center slide-in"
// // // //             />
// // // //           )
// // // //         )}
// // // //       </div>

// // // //       {banners.length > 1 && (
// // // //         <div className="flex justify-center items-center gap-2 mt-3">
// // // //           {banners.map((_, i) => (
// // // //             <button
// // // //               key={i}
// // // //               onClick={() => goTo(i)}
// // // //               aria-label={`Go to slide ${i + 1}`}
// // // //               className="transition-all duration-300"
// // // //               style={{
// // // //                 width: i === idx ? 24 : 8,
// // // //                 height: 8,
// // // //                 borderRadius: 9999,
// // // //                 backgroundColor: i === idx ? "#2E7D32" : "#D1D5DB",
// // // //               }}
// // // //             />
// // // //           ))}
// // // //         </div>
// // // //       )}
// // // //     </section>
// // // //   );
// // // // }

// // // "use client";

// // // import { useState, useEffect, useRef } from "react";
// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import { FaArrowRight, FaTag } from "react-icons/fa";

// // // // ── PROMOTIONAL BANNERS ──
// // // const banners = [
// // //   {
// // //     src: "/01.jpeg",
// // //     alt: "New Dessert Collection",
// // //     link: "/category/desserts",
// // //     // title: "Sweet Indulgence",
// // //     // subtitle: "Explore our new dessert range",
// // //     // tag: "NEW",
// // //     // discount: "20% OFF",
// // //     // buttonText: "Order Now",
// // //     // overlay: "from-black/70 via-black/30 to-transparent",
// // //   },
// // //   {
// // //     src: "/02.jpeg",
// // //     alt: "50% Off on First Order",
// // //     link: "/offers",
// // //     // title: "Welcome Offer",
// // //     // subtitle: "Get 50% off your first order",
// // //     // tag: "LIMITED",
// // //     // discount: "50% OFF",
// // //     // buttonText: "Claim Offer",
// // //     // overlay: "from-red-900/70 via-red-600/30 to-transparent",
// // //   },
// // //   {
// // //     src: "/03.jpeg",
// // //     alt: "Jain & Satvik Special",
// // //     link: "/category/satvik",
// // //     // title: "Pure Jain Food",
// // //     // subtitle: "Specially curated for you",
// // //     // tag: "PURE",
// // //     // discount: "SATVIK",
// // //     // buttonText: "Explore",
// // //     // overlay: "from-green-900/70 via-green-600/30 to-transparent",
// // //   },
// // //   {
// // //     src: "/04.jpeg",
// // //     alt: "Jain & Satvik Special",
// // //     link: "/category/satvik",
// // //     // title: "Pure Jain Food",
// // //     // subtitle: "Specially curated for you",
// // //     // tag: "PURE",
// // //     // discount: "SATVIK",
// // //     // buttonText: "Explore",
// // //     // overlay: "from-green-900/70 via-green-600/30 to-transparent",
// // //   },
// // //   {
// // //     src: "/05.jpeg",
// // //     alt: "Jain & Satvik Special",
// // //     link: "/category/satvik",
// // //     // title: "Pure Jain Food",
// // //     // subtitle: "Specially curated for you",
// // //     // tag: "PURE",
// // //     // discount: "SATVIK",
// // //     // buttonText: "Explore",
// // //     // overlay: "from-green-900/70 via-green-600/30 to-transparent",
// // //   },
// // //   {
// // //     src: "/06.jpeg",
// // //     alt: "Jain & Satvik Special",
// // //     link: "/category/satvik",
// // //     // title: "Pure Jain Food",
// // //     // subtitle: "Specially curated for you",
// // //     // tag: "PURE",
// // //     // discount: "SATVIK",
// // //     // buttonText: "Explore",
// // //     // overlay: "from-green-900/70 via-green-600/30 to-transparent",
// // //   },
// // // ];

// // // export default function HeroSwiper() {
// // //   const [idx, setIdx] = useState(0);
// // //   const [prev, setPrev] = useState(null);
// // //   const [animating, setAnimating] = useState(false);
// // //   const touchStartX = useRef(0);
// // //   const touchEndX = useRef(0);
// // //   const animationDuration = 600;

// // //   const advance = (dir) => {
// // //     if (animating || banners.length === 0) return;
// // //     setAnimating(true);
// // //     setPrev(idx);
// // //     setIdx((current) => (current + dir + banners.length) % banners.length);
// // //     setTimeout(() => {
// // //       setPrev(null);
// // //       setAnimating(false);
// // //     }, animationDuration);
// // //   };

// // //   const goTo = (i) => {
// // //     if (i === idx || animating || banners.length === 0) return;
// // //     setAnimating(true);
// // //     setPrev(idx);
// // //     setIdx(i);
// // //     setTimeout(() => {
// // //       setPrev(null);
// // //       setAnimating(false);
// // //     }, animationDuration);
// // //   };

// // //   // Auto slide
// // //   useEffect(() => {
// // //     if (banners.length < 2) return;
// // //     const timer = setInterval(() => advance(1), 4500);
// // //     return () => clearInterval(timer);
// // //   }, [idx, animating]);

// // //   // Swipe support
// // //   const handleTouchStart = (e) => {
// // //     touchStartX.current = e.changedTouches[0].clientX;
// // //   };
// // //   const handleTouchEnd = (e) => {
// // //     touchEndX.current = e.changedTouches[0].clientX;
// // //     const distance = touchStartX.current - touchEndX.current;
// // //     if (Math.abs(distance) < 50) return;
// // //     advance(distance > 0 ? 1 : -1);
// // //   };

// // //   if (banners.length === 0) {
// // //     return (
// // //       <div className="w-full h-48 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
// // //         No banners available
// // //       </div>
// // //     );
// // //   }

// // //   const current = banners[idx];
// // //   const previous = prev !== null ? banners[prev] : null;

// // //   return (
// // //     // <section className="w-full pt-3 pb-2">
// // //     <section className="w-full py-0">
// // //       <style>{`
// // //         @keyframes slideIn {
// // //           from { opacity: 0; transform: scale(1.02) translateX(30px); }
// // //           to { opacity: 1; transform: scale(1) translateX(0); }
// // //         }
// // //         @keyframes slideOut {
// // //           from { opacity: 1; transform: scale(1) translateX(0); }
// // //           to { opacity: 0; transform: scale(0.98) translateX(-30px); }
// // //         }
// // //         .slide-in { animation: slideIn .6s cubic-bezier(.22,1,.36,1) both; }
// // //         .slide-out { animation: slideOut .6s cubic-bezier(.22,1,.36,1) both; }
// // //       `}</style>

// // //       <div
// // //         className="relative w-full overflow-hidden bg-white"
// // //         style={{ height: "clamp(550px, 60vw, 750px)" }}


// // //         onTouchStart={handleTouchStart}
// // //         onTouchEnd={handleTouchEnd}
// // //       >
// // //         {/* Previous slide (outgoing) */}
// // //         {previous && (
// // //           <Image
// // //             key={`prev-${prev}`}
// // //             src={previous.src}
// // //             alt={previous.alt || "Banner"}
// // //             fill
// // //             className="object-contain object-center slide-in"
// // //           />
// // //         )}
        

// // //         {/* Current slide (incoming) */}
// // //         {current && (
// // //           // <Link href={current.link} className="block w-full h-full relative">
// // //           <Link
// // //             href={current.link}
// // //             className="relative block w-full h-full"
// // //           >
// // //             <Image
// // //               src={current.src}
// // //               alt={current.alt}
// // //               fill
// // //               priority
// // //               className="object-contain object-top slide-in"
// // //             />

// // //             {/* Gradient overlay for better text visibility */}
// // //             {/* <div
// // //               className={`absolute inset-0 bg-gradient-to-r ${current.overlay || "from-black/60 via-black/20 to-transparent"}`}
// // //             /> */}

// // //             {/* Content */}
// // //             <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-14 text-white">
// // //               {/* Tag + Discount */}
// // //               <div className="flex items-center gap-3 mb-2">
// // //                 {current.tag && (
// // //                   <span className="inline-flex items-center gap-1 bg-amber-400 text-black text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
// // //                     <FaTag size={10} />
// // //                     {current.tag}
// // //                   </span>
// // //                 )}
// // //                 {current.discount && (
// // //                   <span className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
// // //                     {current.discount}
// // //                   </span>
// // //                 )}
// // //               </div>

// // //               {/* Title */}
// // //               {current.title && (
// // //                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight drop-shadow-lg">
// // //                   {current.title}
// // //                 </h2>
// // //               )}

// // //               {/* Subtitle */}
// // //               {current.subtitle && (
// // //                 <p className="text-base sm:text-lg font-semibold mt-1 text-white/90 drop-shadow">
// // //                   {current.subtitle}
// // //                 </p>
// // //               )}

// // //               {/* CTA Button */}
// // //               {current.buttonText && (
// // //                 <div className="mt-4">
// // //                   <span className="inline-flex items-center gap-2 bg-brand-green hover:bg-[#1B5E20] text-white text-sm sm:text-base font-bold px-6 py-3 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl">
// // //                     {current.buttonText}
// // //                     <FaArrowRight size={14} />
// // //                   </span>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </Link>
// // //         )}
// // //       </div>
// // //     </section>
// // //   );
// // // }


// //   "use client";

// // import { useState, useEffect, useRef } from "react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { FaArrowRight, FaTag } from "react-icons/fa";

// // const banners = [
// //   {
// //     src: "/01.jpeg",
// //     alt: "New Dessert Collection",
// //     link: "/category/desserts",
// //     // title: "Sweet Indulgence",
// //     // subtitle: "Explore our new dessert range",
// //     // tag: "NEW",
// //     // discount: "20% OFF",
// //     // buttonText: "Order Now",
// //   },
// //   {
// //     src: "/02.jpeg",
// //     alt: "50% Off on First Order",
// //     link: "/offers",
// //     // title: "Welcome Offer",
// //     // subtitle: "Get 50% off your first order",
// //     // tag: "LIMITED",
// //     // discount: "50% OFF",
// //     // buttonText: "Claim Offer",
// //   },
// //   {
// //     src: "/03.jpeg",
// //     alt: "Jain & Satvik Special",
// //     link: "/category/satvik",
// //     // title: "Pure Jain Food",
// //     // subtitle: "Specially curated for you",
// //     // tag: "PURE",
// //     // discount: "SATVIK",
// //     // buttonText: "Explore",
// //   },
// //   {
// //     src: "/04.jpeg",
// //     alt: "Jain & Satvik Special",
// //     link: "/category/satvik",
// //     // title: "Pure Jain Food",
// //     // subtitle: "Specially curated for you",
// //     // tag: "PURE",
// //     // discount: "SATVIK",
// //     // buttonText: "Explore",
// //   },
// //   {
// //     src: "/05.jpeg",
// //     alt: "Jain & Satvik Special",
// //     link: "/category/satvik",
// //     // title: "Pure Jain Food",
// //     // subtitle: "Specially curated for you",
// //     // tag: "PURE",
// //     // discount: "SATVIK",
// //     // buttonText: "Explore",
// //   },
// //   {
// //     src: "/06.jpeg",
// //     alt: "Jain & Satvik Special",
// //     link: "/category/satvik",
// //     // title: "Pure Jain Food",
// //     // subtitle: "Specially curated for you",
// //     // tag: "PURE",
// //     // discount: "SATVIK",
// //     // buttonText: "Explore",
// //   },
// // ];

// // export default function HeroSwiper() {
// //   const [idx, setIdx] = useState(0);
// //   const [prevIdx, setPrevIdx] = useState(null);
// //   const [animating, setAnimating] = useState(false);
// //   const touchStartX = useRef(0);
// //   const touchEndX = useRef(0);
// //   const animationDuration = 600;

// //   const advance = (dir) => {
// //     if (animating || banners.length === 0) return;
// //     setAnimating(true);
// //     setPrevIdx(idx);
// //     setIdx((current) => (current + dir + banners.length) % banners.length);
// //     setTimeout(() => {
// //       setPrevIdx(null);
// //       setAnimating(false);
// //     }, animationDuration);
// //   };

// //   useEffect(() => {
// //     if (banners.length < 2) return;
// //     const timer = setInterval(() => advance(1), 4500);
// //     return () => clearInterval(timer);
// //   }, [idx, animating]);

// //   const handleTouchStart = (e) => {
// //     touchStartX.current = e.changedTouches[0].clientX;
// //   };
// //   const handleTouchEnd = (e) => {
// //     touchEndX.current = e.changedTouches[0].clientX;
// //     const distance = touchStartX.current - touchEndX.current;
// //     if (Math.abs(distance) < 50) return;
// //     advance(distance > 0 ? 1 : -1);
// //   };

// //   if (banners.length === 0) {
// //     return (
// //       <div className="w-full h-48 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
// //         No banners available
// //       </div>
// //     );
// //   }

// //   const current = banners[idx];
// //   const previous = prevIdx !== null ? banners[prevIdx] : null;

// //   return (
// //     <section className="w-full py-0">
// //       <style>{`
// //         @keyframes slideIn {
// //           from { opacity: 0; transform: scale(1.02) translateX(30px); }
// //           to { opacity: 1; transform: scale(1) translateX(0); }
// //         }
// //         @keyframes slideOut {
// //           from { opacity: 1; transform: scale(1) translateX(0); }
// //           to { opacity: 0; transform: scale(0.98) translateX(-30px); }
// //         }
// //         .slide-in {
// //           animation: slideIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
// //           z-index: 10;
// //         }
// //         .slide-out {
// //           animation: slideOut 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
// //           z-index: 5;
// //         }
// //       `}</style>

// //       <div
// //         className="relative w-full overflow-hidden bg-gray-100"  // background colour – visible only if image fails to load
// //         style={{
// //           // 👇 Adjust height to your liking – no space because image covers it
// //           height: "clamp(200px, 30vw, 400px)",
// //         }}
// //         onTouchStart={handleTouchStart}
// //         onTouchEnd={handleTouchEnd}
// //       >
// //         {previous && (
// //           <div key={`prev-${prevIdx}`} className="absolute inset-0 slide-out">
// //             <Image
// //               src={previous.src}
// //               alt={previous.alt || "Banner"}
// //               fill
// //               className="object-cover"   // ⬅️ fills container, no blank space
// //               priority={false}
// //             />
// //           </div>
// //         )}

// //         {current && (
// //           <Link
// //             key={`current-${idx}`}
// //             href={current.link}
// //             className="absolute inset-0 slide-in"
// //           >
// //             <Image
// //               src={current.src}
// //               alt={current.alt}
// //               fill
// //               priority
// //               className="object-cover"   // ⬅️ fills container, no blank space
// //             />

// //             {/* No overlay */}

// //             <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-14 text-white">
// //               <div className="flex items-center gap-3 mb-2">
// //                 {current.tag && (
// //                   <span className="inline-flex items-center gap-1 bg-amber-400 text-black text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
// //                     <FaTag size={10} />
// //                     {current.tag}
// //                   </span>
// //                 )}
// //                 {current.discount && (
// //                   <span className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
// //                     {current.discount}
// //                   </span>
// //                 )}
// //               </div>

// //               {current.title && (
// //                 <h2 className="text-xl sm:text-2xl md:text-3xl font-black leading-tight drop-shadow-lg">
// //                   {current.title}
// //                 </h2>
// //               )}

// //               {current.subtitle && (
// //                 <p className="text-xs sm:text-sm font-semibold mt-1 text-white/90 drop-shadow">
// //                   {current.subtitle}
// //                 </p>
// //               )}

// //               {current.buttonText && (
// //                 <div className="mt-3">
// //                   <span className="inline-flex items-center gap-2 bg-brand-green hover:bg-[#1B5E20] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl">
// //                     {current.buttonText}
// //                     <FaArrowRight size={12} />
// //                   </span>
// //                 </div>
// //               )}
// //             </div>
// //           </Link>
// //         )}
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaArrowRight, FaTag } from "react-icons/fa";

// const banners = [
//   {
//     src: "/01.jpeg",
//     alt: "New Dessert Collection",
//     link: "/category/desserts",
//     // title: "Sweet Indulgence",
//     // subtitle: "Explore our new dessert range",
//     // tag: "NEW",
//     // discount: "20% OFF",
//     // buttonText: "Order Now",
//   },
//   {
//     src: "/02.jpeg",
//     alt: "50% Off on First Order",
//     link: "/offers",
//     // title: "Welcome Offer",
//     // subtitle: "Get 50% off your first order",
//     // tag: "LIMITED",
//     // discount: "50% OFF",
//     // buttonText: "Claim Offer",
//   },
//   {
//     src: "/03.jpeg",
//     alt: "Jain & Satvik Special",
//     link: "/category/satvik",
//     // title: "Pure Jain Food",
//     // subtitle: "Specially curated for you",
//     // tag: "PURE",
//     // discount: "SATVIK",
//     // buttonText: "Explore",
//   },
//   {
//     src: "/04.jpeg",
//     alt: "Jain & Satvik Special",
//     link: "/category/satvik",
//     // title: "Pure Jain Food",
//     // subtitle: "Specially curated for you",
//     // tag: "PURE",
//     // discount: "SATVIK",
//     // buttonText: "Explore",
//   },
//   {
//     src: "/05.jpeg",
//     alt: "Jain & Satvik Special",
//     link: "/category/satvik",
//     // title: "Pure Jain Food",
//     // subtitle: "Specially curated for you",
//     // tag: "PURE",
//     // discount: "SATVIK",
//     // buttonText: "Explore",
//   },
//   {
//     src: "/06.jpeg",
//     alt: "Jain & Satvik Special",
//     link: "/category/satvik",
//     // title: "Pure Jain Food",
//     // subtitle: "Specially curated for you",
//     // tag: "PURE",
//     // discount: "SATVIK",
//     // buttonText: "Explore",
//   },
// ];

// export default function HeroSwiper() {
//   const [idx, setIdx] = useState(0);
//   const [prevIdx, setPrevIdx] = useState(null);
//   const [animating, setAnimating] = useState(false);
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);
//   const animationDuration = 600;

//   const advance = (dir) => {
//     if (animating || banners.length === 0) return;
//     setAnimating(true);
//     setPrevIdx(idx);
//     setIdx((current) => (current + dir + banners.length) % banners.length);
//     setTimeout(() => {
//       setPrevIdx(null);
//       setAnimating(false);
//     }, animationDuration);
//   };

//   useEffect(() => {
//     if (banners.length < 2) return;
//     const timer = setInterval(() => advance(1), 4500);
//     return () => clearInterval(timer);
//   }, [idx, animating]);

//   const handleTouchStart = (e) => {
//     touchStartX.current = e.changedTouches[0].clientX;
//   };
//   const handleTouchEnd = (e) => {
//     touchEndX.current = e.changedTouches[0].clientX;
//     const distance = touchStartX.current - touchEndX.current;
//     if (Math.abs(distance) < 50) return;
//     advance(distance > 0 ? 1 : -1);
//   };

//   if (banners.length === 0) {
//     return (
//       <div className="w-full h-48 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
//         No banners available
//       </div>
//     );
//   }

//   const current = banners[idx];
//   const previous = prevIdx !== null ? banners[prevIdx] : null;

//   return (
//     <section className="w-full py-0">
//       <style>{`
//         @keyframes slideIn {
//           from { opacity: 0; transform: scale(1.02) translateX(30px); }
//           to { opacity: 1; transform: scale(1) translateX(0); }
//         }
//         @keyframes slideOut {
//           from { opacity: 1; transform: scale(1) translateX(0); }
//           to { opacity: 0; transform: scale(0.98) translateX(-30px); }
//         }
//         .slide-in {
//           animation: slideIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
//           z-index: 10;
//         }
//         .slide-out {
//           animation: slideOut 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
//           z-index: 5;
//         }
//         .swiper-container {
//           touch-action: pan-y; /* improves swipe on mobile */
//         }
//       `}</style>

//       <div
//         className="relative w-full overflow-hidden bg-gray-100 swiper-container"
//         style={{
//           // Responsive height: small on mobile, larger on desktop
//           height: "clamp(180px, 25vw, 400px)",
//         }}
//         onTouchStart={handleTouchStart}
//         onTouchEnd={handleTouchEnd}
//       >
//         {previous && (
//           <div key={`prev-${prevIdx}`} className="absolute inset-0 slide-out">
//             <Image
//               src={previous.src}
//               alt={previous.alt || "Banner"}
//               fill
//               className="object-cover object-center"
//               priority={false}
//             />
//           </div>
//         )}

//         {current && (
//           <Link
//             key={`current-${idx}`}
//             href={current.link}
//             className="absolute inset-0 slide-in"
//           >
//             <Image
//               src={current.src}
//               alt={current.alt}
//               fill
//               priority
//               className="object-cover object-center"
//             />

//             {/* Optional: subtle gradient overlay for better text readability (uncomment if you add text) */}
//             {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" /> */}

//             <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-10 text-white">
//               <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
//                 {current.tag && (
//                   <span className="inline-flex items-center gap-1 bg-amber-400 text-black text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg">
//                     <FaTag size={8} className="sm:size-10" />
//                     {current.tag}
//                   </span>
//                 )}
//                 {current.discount && (
//                   <span className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/30">
//                     {current.discount}
//                   </span>
//                 )}
//               </div>

//               {current.title && (
//                 <h2 className="text-lg sm:text-xl md:text-3xl font-black leading-tight drop-shadow-lg">
//                   {current.title}
//                 </h2>
//               )}

//               {current.subtitle && (
//                 <p className="text-xs sm:text-sm font-semibold mt-0.5 sm:mt-1 text-white/90 drop-shadow">
//                   {current.subtitle}
//                 </p>
//               )}

//               {current.buttonText && (
//                 <div className="mt-2 sm:mt-3">
//                   <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-brand-green hover:bg-[#1B5E20] text-white text-[10px] sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl">
//                     {current.buttonText}
//                     <FaArrowRight size={10} className="sm:size-12" />
//                   </span>
//                 </div>
//               )}
//             </div>
//           </Link>
//         )}
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaTag } from "react-icons/fa";

const banners = [
  {
    src: "/01.jpeg",
    alt: "New Dessert Collection",
    link: "/category/desserts",
  },
  {
    src: "/02.jpeg",
    alt: "50% Off on First Order",
    link: "/",
  },
  {
    src: "/03.jpeg",
    alt: "Jain & Satvik Special",
    link: "/category/satvik",
  },
  {
    src: "/04.jpeg",
    alt: "Jain & Satvik Special",
    link: "/category/satvik",
  },
  {
    src: "/05.jpeg",
    alt: "Jain & Satvik Special",
    link: "/category/satvik",
  },
  {
    src: "/06.jpeg",
    alt: "Jain & Satvik Special",
    link: "/category/satvik",
  },
];

export default function HeroSwiper() {
  const [idx, setIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(null);
  const [animating, setAnimating] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const animationDuration = 600;

  const advance = (dir) => {
    if (animating || banners.length === 0) return;
    setAnimating(true);
    setPrevIdx(idx);
    setIdx((current) => (current + dir + banners.length) % banners.length);
    setTimeout(() => {
      setPrevIdx(null);
      setAnimating(false);
    }, animationDuration);
  };

  useEffect(() => {
    if (banners.length < 2) return;
    const timer = setInterval(() => advance(1), 4500);
    return () => clearInterval(timer);
  }, [idx, animating]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) < 50) return;
    advance(distance > 0 ? 1 : -1);
  };

  if (banners.length === 0) {
    return (
      <div className="w-full h-48 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
        No banners available
      </div>
    );
  }

  const current = banners[idx];
  const previous = prevIdx !== null ? banners[prevIdx] : null;

  return (
    <section className="w-full py-0">
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: scale(1.02) translateX(30px); }
          to { opacity: 1; transform: scale(1) translateX(0); }
        }
        @keyframes slideOut {
          from { opacity: 1; transform: scale(1) translateX(0); }
          to { opacity: 0; transform: scale(0.98) translateX(-30px); }
        }
        .slide-in {
          animation: slideIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
          z-index: 10;
        }
        .slide-out {
          animation: slideOut 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
          z-index: 5;
        }
        .swiper-container {
          touch-action: pan-y;
        }
      `}</style>

      <div
        className="relative w-full overflow-hidden bg-gray-100 swiper-container"
        style={{
          height: "clamp(280px, 25vw, 400px)",
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {previous && (
          <div key={`prev-${prevIdx}`} className="absolute inset-0 slide-out">
            <Image
              src={previous.src}
              alt={previous.alt || "Banner"}
              fill
                className="object-cover sm:object-contain object-center"
              priority={false}
            />
          </div>
        )}

        {current && (
          <Link
            key={`current-${idx}`}
            href={current.link}
            className="absolute inset-0 slide-in"
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              priority
                className="object-cover sm:object-contain object-center"
            />

            <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-10 text-white">
              <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                {current.tag && (
                  <span className="inline-flex items-center gap-1 bg-amber-400 text-black text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg">
                    <FaTag size={8} className="sm:size-10" />
                    {current.tag}
                  </span>
                )}
                {current.discount && (
                  <span className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/30">
                    {current.discount}
                  </span>
                )}
              </div>

              {current.title && (
                <h2 className="text-lg sm:text-xl md:text-3xl font-black leading-tight drop-shadow-lg">
                  {current.title}
                </h2>
              )}

              {current.subtitle && (
                <p className="text-xs sm:text-sm font-semibold mt-0.5 sm:mt-1 text-white/90 drop-shadow">
                  {current.subtitle}
                </p>
              )}

              {current.buttonText && (
                <div className="mt-2 sm:mt-3">
                  <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-brand-green hover:bg-[#1B5E20] text-white text-[10px] sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                    {current.buttonText}
                    <FaArrowRight size={10} className="sm:size-12" />
                  </span>
                </div>
              )}
            </div>
          </Link>
        )}
      </div>
    </section>
  );
}