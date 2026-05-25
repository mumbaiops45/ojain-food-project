"use client";

function Hero() {
  return (
    <section className="bg-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* LEFT SIDE */}
          <div>
            {/* Heading */}
            <h1
              className="mt-3 text-4xl sm:text-5xl lg:text-[60px] leading-[1.05] lg:leading-[1.02] font-extrabold tracking-[-1.5px] lg:tracking-[-2.5px] text-[#0f172a] animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Homemade
              <br />
              Food{" "}
              <span className="relative inline-block text-brand-green">
                Delivered
                <span className="absolute -bottom-1 left-0 w-full h-[4px] bg-brand-green-pale rounded-full"></span>
              </span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-[52px]">With Love</span>
            </h1>

            {/* Description */}
            <p
              className="mt-5 text-[15px] sm:text-[16px] leading-[1.85] text-slate-500 max-w-[460px] animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Freshly prepared meals, snacks, sweets, and traditional
              dishes made by trusted home chefs near you.
            </p>

            {/* Buttons */}
            <div
              className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <button className="group bg-brand-orange hover:bg-[#E65100] active:scale-95 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-[14px] sm:text-[15px] font-semibold shadow-lg transition-all duration-300 flex items-center gap-2">
                Browse Products
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>

              <button className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white active:scale-95 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-[14px] sm:text-[15px] font-semibold transition-all duration-300">
                Sell With Us
              </button>
            </div>

            {/* Trust row */}
            <div
              className="mt-7 flex items-center gap-4 sm:gap-5 animate-fade-up"
              style={{ animationDelay: "0.35s" }}
            >
              <div className="flex -space-x-2.5">
                {["#2E7D32", "#43A047", "#66BB6A", "#A5D6A7"].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white"
                    style={{ backgroundColor: color }}
                  />
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

            {/* Stats */}
            <div
              className="mt-6 flex gap-3 sm:gap-4 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              {[
                { value: "25K+", label: "Happy Customers" },
                { value: "500+", label: "Home Chefs" },
                { value: "4.9★", label: "Customer Rating" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl px-3 sm:px-5 py-3 sm:py-4 shadow-sm border border-gray-100 text-center flex-1 hover-lift"
                >
                  <p className="text-[22px] sm:text-[28px] font-extrabold text-brand-green leading-none">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[10px] sm:text-[11px] text-slate-500 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE — images now visible on all screens */}
          <div className="relative">
            {/* Blur blobs */}
            <div className="absolute top-8 left-8 w-64 h-64 bg-brand-green-mid/20 blur-3xl rounded-full pointer-events-none"></div>
            <div className="absolute bottom-12 right-8 w-40 h-40 bg-brand-green-pale/60 blur-2xl rounded-full pointer-events-none"></div>

            {/* Images grid — responsive for mobile */}
            {/* Images grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 relative z-10">

              <img
                src="/hero4.jpg"
                alt="Fresh Jain Food"
                className="h-44 sm:h-56 md:h-64 lg:h-80 w-full object-cover object-center rounded-[28px] shadow-2xl animate-image"
                style={{ animationDelay: "0.1s" }}
              />

              <img
                src="/hero8.jpg"
                alt="Healthy Jain Meal"
                className="h-44 sm:h-56 md:h-64 lg:h-80 w-full object-cover object-center rounded-[28px] mt-6 lg:mt-10 shadow-2xl animate-image"
                style={{ animationDelay: "0.2s" }}
              />

              <img
                src="/hero9.jpg"
                alt="Vegetable Jain Dish"
                className="h-44 sm:h-56 md:h-64 lg:h-80 w-full object-cover object-center rounded-[28px] -mt-6 lg:-mt-10 shadow-2xl animate-image"
                style={{ animationDelay: "0.3s" }}
              />

              <img
                src="/hero10.jpg"
                alt="Homemade Satvik Food"
                className="h-44 sm:h-56 md:h-64 lg:h-80 w-full object-cover object-center rounded-[28px] shadow-2xl animate-image"
                style={{ animationDelay: "0.4s" }}
              />

            </div>

            {/* Floating card — delivery */}
            <div
              className="absolute bottom-4 sm:bottom-10 -left-2 sm:-left-3 lg:-left-5 z-20 bg-white rounded-2xl px-2 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-3 shadow-2xl border border-gray-100 flex items-center gap-2 lg:gap-3 animate-fade-up"
              style={{ animationDelay: "0.55s" }}
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-xl bg-brand-green-pale flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] sm:text-[12px] lg:text-[13px] font-semibold text-slate-800">Order on the way</p>
                <p className="text-[9px] sm:text-[10px] lg:text-[11px] text-slate-400 mt-0.5">Arrives in ~30 mins</p>
              </div>
              <div className="ml-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse shrink-0"></div>
            </div>

            {/* Floating card — chef badge */}
            <div
              className="absolute top-4 sm:top-6 -right-2 sm:-right-3 lg:-right-4 z-20 bg-white rounded-2xl px-2 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-3 shadow-2xl border border-gray-100 animate-fade-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-xl bg-brand-green-pale flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] sm:text-[12px] lg:text-[13px] font-semibold text-slate-800">Verified Chef</p>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-orange-400 fill-orange-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
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