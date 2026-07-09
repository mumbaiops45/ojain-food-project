// "use client";

// import { useRouter } from "next/navigation";

// function Hero() {
//   const router = useRouter();

//   return (
//     <section className="bg-brand-bg overflow-hidden">
//       <div className="sec-container pt-8 sm:pt-12 pb-14 md:pb-20">
//         <div className="grid lg:grid-cols-[45%_55%] gap-8 lg:gap-12 items-center">

//           {/* LEFT SIDE */}
//           <div>
//             {/* Brand tag */}
//             <div
//               className="inline-flex items-center gap-2 bg-brand-green-pale text-brand-green px-4 py-1.5 rounded-full text-xs font-bold mb-4 animate-fade-up"
//               style={{ animationDelay: "0.05s" }}
//             >
//               🌿 A Brand That Serves Pure · Est. 2020
//             </div>

//             {/* Heading */}
//             <h1
//               className="text-4xl sm:text-5xl lg:text-[58px] leading-[1.05] font-extrabold tracking-[-1.5px] lg:tracking-[-2px] text-[#0f172a] animate-fade-up"
//               style={{ animationDelay: "0.1s" }}
//             >
//               Pure Jain &amp;
//               <br />
//               Satvik{" "}
//               <span className="relative inline-block text-brand-green">
//                 Premix
//                 <span className="absolute -bottom-1 left-0 w-full h-[4px] bg-brand-green-pale rounded-full"></span>
//               </span>
//               <br />
//               <span className="text-3xl sm:text-4xl lg:text-[48px] text-brand-orange">Products</span>
//             </h1>

//             {/* Description */}
//             <p
//               className="mt-5 text-[15px] sm:text-[16px] leading-[1.85] text-slate-500 max-w-[480px] animate-fade-up"
//               style={{ animationDelay: "0.2s" }}
//             >
//               Instant &amp; quick premix with multiple flavour range.
//               Restaurant style taste that is easy to make and pocket saving —
//               crafted specially for Jain &amp; Satvik families.
//             </p>

//             {/* Buttons */}
//             <div
//               className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-up"
//               style={{ animationDelay: "0.3s" }}
//             >
//               <button
//                 onClick={() => router.push("/categories")}
//                 className="group w-full sm:w-auto bg-brand-orange hover:bg-[#E65100] active:scale-95 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-[14px] sm:text-[15px] font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
//               >
//                 Browse Products
//                 <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
//                 </svg>
//               </button>

//               <button
//                 onClick={() => router.push("/vendorLogin/login")}
//                 className="w-full sm:w-auto border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white active:scale-95 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-[14px] sm:text-[15px] font-semibold transition-all duration-300"
//               >
//                 Sell With Us
//               </button>
//             </div>

//             {/* Trust row */}
//             <div
//               className="mt-7 flex items-center gap-4 sm:gap-5 animate-fade-up"
//               style={{ animationDelay: "0.35s" }}
//             >
//               <div className="flex -space-x-2.5">
//                 {["#2E7D32", "#43A047", "#66BB6A", "#A5D6A7"].map((color, i) => (
//                   <div key={i} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white" style={{ backgroundColor: color }} />
//                 ))}
//               </div>
//               <div>
//                 <div className="flex items-center gap-1">
//                   {[1, 2, 3, 4, 5].map((s) => (
//                     <svg key={s} className="w-3.5 h-3.5 text-orange-400 fill-orange-400" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                   <span className="text-[13px] font-bold text-slate-700 ml-1">4.9</span>
//                 </div>
//                 <p className="text-[12px] text-slate-400 mt-0.5">Trusted by 25,000+ customers</p>
//               </div>
//             </div>

//             {/* Stats */}
//             <div
//               className="mt-6 flex gap-3 sm:gap-4 animate-fade-up"
//               style={{ animationDelay: "0.4s" }}
//             >
//               {[
//                 { value: "25K+", label: "Happy Customers" },
//                 { value: "50+", label: "Flavour Range" },
//                 { value: "4.9★", label: "Customer Rating" },
//               ].map((stat, i) => (
//                 <div key={i} className="bg-white rounded-2xl px-3 sm:px-5 py-3 sm:py-4 shadow-sm border border-gray-100 text-center flex-1">
//                   <p className="text-[22px] sm:text-[28px] font-extrabold text-brand-green leading-none">{stat.value}</p>
//                   <p className="mt-1.5 text-[10px] sm:text-[11px] text-slate-500 font-medium">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="relative">
//             <div className="absolute top-8 left-8 w-64 h-64 bg-brand-green-mid/20 blur-3xl rounded-full pointer-events-none"></div>
//             <div className="absolute bottom-12 right-8 w-40 h-40 bg-brand-green-pale/60 blur-2xl rounded-full pointer-events-none"></div>

//             <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10">
//               <img src="/heroimage1.jpeg" alt="O-Jain Premix" className="h-48 sm:h-60 md:h-72 lg:h-96 w-full object-cover object-center rounded-[28px] shadow-2xl animate-image" style={{ animationDelay: "0.1s" }} />
//               <img src="/masala4.jpg" alt="O-Jain Product" className="h-48 sm:h-60 md:h-72 lg:h-96 w-full object-cover object-center rounded-[28px] mt-6 lg:mt-10 shadow-2xl animate-image" style={{ animationDelay: "0.2s" }} />
//               <img src="/hero5.jpeg" alt="O-Jain Spice" className="h-48 sm:h-60 md:h-72 lg:h-96 w-full object-cover object-center rounded-[28px] -mt-6 lg:-mt-10 shadow-2xl animate-image" style={{ animationDelay: "0.3s" }} />
//               <img src="/heroimage4.jpeg" alt="O-Jain Satvik" className="h-48 sm:h-60 md:h-72 lg:h-96 w-full object-cover object-center rounded-[28px] shadow-2xl animate-image" style={{ animationDelay: "0.4s" }} />
//             </div>

//             {/* Floating card — no preservatives */}
//             <div className="hidden sm:flex absolute bottom-4 sm:bottom-10 -left-2 sm:-left-3 lg:-left-5 z-20 bg-white rounded-2xl px-3 py-2.5 shadow-2xl border border-gray-100 items-center gap-2 lg:gap-3 animate-fade-up" style={{ animationDelay: "0.55s" }}>
//               <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-brand-green-pale flex items-center justify-center shrink-0 text-lg">
//                 🌿
//               </div>
//               <div>
//                 <p className="text-[12px] lg:text-[13px] font-semibold text-slate-800">No Preservatives</p>
//                 <p className="text-[10px] lg:text-[11px] text-slate-400 mt-0.5">100% Pure Ingredients</p>
//               </div>
//               <div className="ml-1 w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0"></div>
//             </div>

//             {/* Floating card — quick premix */}
//             <div className="hidden sm:block absolute top-4 sm:top-6 -right-2 sm:-right-3 lg:-right-4 z-20 bg-white rounded-2xl px-3 py-2.5 shadow-2xl border border-gray-100 animate-fade-up" style={{ animationDelay: "0.6s" }}>
//               <div className="flex items-center gap-2 lg:gap-3">
//                 <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0 text-lg">
//                   ⚡
//                 </div>
//                 <div>
//                   <p className="text-[12px] lg:text-[13px] font-semibold text-slate-800">Quick Premix</p>
//                   <p className="text-[10px] lg:text-[11px] text-slate-400 mt-0.5">Ready in minutes</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


"use client";

import { useRouter } from "next/navigation";

function Hero() {
  const router = useRouter();

  return (
    <section className="bg-brand-bg py-8 sm:py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[45%_55%] gap-8 lg:gap-12 items-start">

          {/* LEFT SIDE */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-green-pale text-brand-green px-4 py-1.5 rounded-full text-xs font-bold mb-4 animate-[fade-up_0.6s_ease]">
              🌿 A Brand That Serves Pure · Est. 2020
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[58px] leading-[1.05] font-extrabold tracking-[-1.5px] lg:tracking-[-2px] text-[#0f172a] animate-[fade-up_0.6s_ease_0.1s]">
              Pure Jain &amp;
              <br />
              Satvik{" "}
              <span className="relative inline-block text-brand-green">
                Premix
                <span className="absolute -bottom-1 left-0 w-full h-[4px] bg-brand-green-pale rounded-full"></span>
              </span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-[48px] text-brand-orange">Products</span>
            </h1>

            <p className="mt-5 text-[15px] sm:text-[16px] leading-[1.85] text-slate-500 max-w-[480px] animate-[fade-up_0.6s_ease_0.2s]">
              Instant &amp; quick premix with multiple flavour range.
              Restaurant style taste that is easy to make and pocket saving —
              crafted specially for Jain &amp; Satvik families.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 animate-[fade-up_0.6s_ease_0.3s]">
              <button
                onClick={() => router.push("/categories")}
                className="group w-full sm:w-auto bg-brand-orange hover:bg-[#E65100] active:scale-95 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-[14px] sm:text-[15px] font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                Browse Products
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>

              <button
                onClick={() => router.push("/vendorLogin/login")}
                className="w-full sm:w-auto border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white active:scale-95 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-[14px] sm:text-[15px] font-semibold transition-all duration-300"
              >
                Sell With Us
              </button>
            </div>

            <div className="mt-7 flex items-center gap-4 sm:gap-5 animate-[fade-up_0.6s_ease_0.35s]">
              <div className="flex -space-x-2.5">
                {["#2E7D32", "#43A047", "#66BB6A", "#A5D6A7"].map((color, i) => (
                  <div key={i} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white" style={{ backgroundColor: color }} />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-3.5 h-3.5 text-orange-400 fill-orange-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-[13px] font-bold text-slate-700 ml-1">4.9</span>
                </div>
                <p className="text-[12px] text-slate-400 mt-0.5">Trusted by 25,000+ customers</p>
              </div>
            </div>

            {/* Stats - One line */}
            <div className="mt-6 flex flex-nowrap gap-3 sm:gap-4 animate-[fade-up_0.6s_ease_0.4s] overflow-x-auto">
              {[
                { value: "25K+", label: "Happy Customers" },
                { value: "50+", label: "Flavour Range" },
                { value: "4.9★", label: "Customer Rating" },
              ].map((stat, i) => (
                <div key={i} className="flex-1 min-w-[80px] bg-white rounded-2xl px-3 sm:px-5 py-3 sm:py-4 shadow-sm border border-gray-100 text-center whitespace-nowrap">
                  <p className="text-[22px] sm:text-[28px] font-extrabold text-brand-green leading-none">{stat.value}</p>
                  <p className="mt-1.5 text-[10px] sm:text-[11px] text-slate-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - IMAGES */}
          <div className="relative">
            {/* Background blur ornaments */}
            <div className="absolute top-8 left-8 w-64 h-64 bg-brand-green-mid/20 blur-3xl rounded-full pointer-events-none"></div>
            <div className="absolute bottom-12 right-8 w-40 h-40 bg-brand-green-pale/60 blur-2xl rounded-full pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="col-span-1">
                <img
                  src="/heroimage1.jpeg"
                  alt="O-Jain Premix"
                  className="w-full h-48 sm:h-60 md:h-72 lg:h-96 object-cover rounded-[28px] shadow-2xl animate-[fade-up_0.6s_ease_0.1s]"
                />
              </div>
              <div className="col-span-1 mt-6 lg:mt-10">
                <img
                  src="/masala4.jpg"
                  alt="O-Jain Product"
                  className="w-full h-48 sm:h-60 md:h-72 lg:h-96 object-cover rounded-[28px] shadow-2xl animate-[fade-up_0.6s_ease_0.2s]"
                />
              </div>
              <div className="col-span-1 -mt-6 lg:-mt-10">
                <img
                  src="/hero5.jpeg"
                  alt="O-Jain Spice"
                  className="w-full h-48 sm:h-60 md:h-72 lg:h-96 object-cover rounded-[28px] shadow-2xl animate-[fade-up_0.6s_ease_0.3s]"
                />
              </div>
              <div className="col-span-1">
                <img
                  src="/heroimage4.jpeg"
                  alt="O-Jain Satvik"
                  className="w-full h-48 sm:h-60 md:h-72 lg:h-96 object-cover rounded-[28px] shadow-2xl animate-[fade-up_0.6s_ease_0.4s]"
                />
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute bottom-4 sm:bottom-10 left-0 z-20 bg-white rounded-2xl px-3 py-2.5 shadow-2xl border border-gray-100 flex items-center gap-2 lg:gap-3 animate-[fade-up_0.6s_ease_0.55s]">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-brand-green-pale flex items-center justify-center shrink-0 text-lg">
                🌿
              </div>
              <div>
                <p className="text-[12px] lg:text-[13px] font-semibold text-slate-800">No Preservatives</p>
                <p className="text-[10px] lg:text-[11px] text-slate-400 mt-0.5">100% Pure Ingredients</p>
              </div>
              <div className="ml-1 w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0"></div>
            </div>

            <div className="absolute top-4 sm:top-6 right-0 z-20 bg-white rounded-2xl px-3 py-2.5 shadow-2xl border border-gray-100 animate-[fade-up_0.6s_ease_0.6s]">
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0 text-lg">
                  ⚡
                </div>
                <div>
                  <p className="text-[12px] lg:text-[13px] font-semibold text-slate-800">Quick Premix</p>
                  <p className="text-[10px] lg:text-[11px] text-slate-400 mt-0.5">Ready in minutes</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;