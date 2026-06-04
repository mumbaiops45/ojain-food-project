"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaLeaf, FaShieldAlt, FaUsers, FaStar, FaHandshake, FaCheckCircle } from "react-icons/fa";

function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("sr-in"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-sr]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const advantages = [
  { icon: "⚡", text: "Quick and instant premix" },
  { icon: "🌿", text: "No preservatives" },
  { icon: "🎒", text: "Small packing for travel use" },
  { icon: "🍽️", text: "Restaurant like taste" },
  { icon: "🌈", text: "Variety of trendy flavour options" },
  { icon: "💰", text: "Pocket saving" },
  { icon: "⏱️", text: "Time saving" },
  { icon: "✅", text: "Best quality ingredients" },
  { icon: "🤸", text: "Easy to use" },
];

const disadvantages = [
  "According to Jain religion we are unable to maintain the time limit manual (Kaal) in our O-Jain products.",
  "As this is on large scale production it is difficult to maintain Kaal from the manufacturing and supplying purpose.",
];

const values = [
  { icon: FaLeaf,        title: "100% Pure Veg",     desc: "Strictly pure vegetarian — crafted for Jain & Satvik families.",         grad: "from-green-500 to-emerald-600" },
  { icon: FaShieldAlt,   title: "No Preservatives",   desc: "Only natural ingredients — zero artificial preservatives, ever.",        grad: "from-teal-500 to-cyan-600"    },
  { icon: FaCheckCircle, title: "Best Quality",        desc: "Rigorous quality checks ensure every premix meets the highest standards.", grad: "from-amber-500 to-orange-500" },
  { icon: FaHandshake,   title: "Women Empowerment",  desc: "O-Jain helps ordinary women become independent entrepreneurs.",          grad: "from-rose-500 to-pink-600"    },
  { icon: FaUsers,       title: "Community First",    desc: "Built for families who believe in pure quality and Jain values.",        grad: "from-violet-500 to-purple-600"},
  { icon: FaStar,        title: "Restaurant Taste",   desc: "Enjoy restaurant-style flavour at home — easy, quick and affordable.",   grad: "from-green-400 to-teal-500"   },
];

const stats = [
  { value: "500+", label: "Products Sold",  emoji: "🛒", from: "from-orange-400", to: "to-rose-500"   },
  { value: "50+",  label: "Flavour Range",  emoji: "🌶️", from: "from-yellow-400", to: "to-orange-500" },
  { value: "25K+", label: "Happy Families", emoji: "👨‍👩‍👧", from: "from-violet-400", to: "to-purple-600" },
  { value: "4.9★", label: "Avg Rating",     emoji: "⭐", from: "from-green-400",  to: "to-emerald-600"},
];

export default function AboutPage() {
  useScrollReveal();

  return (
    <div className="overflow-hidden bg-white">
      <style>{`
        [data-sr]            { opacity:0; transition:opacity .7s ease,transform .7s cubic-bezier(.22,1,.36,1); }
        [data-sr="up"]       { transform:translateY(48px); }
        [data-sr="left"]     { transform:translateX(-56px); }
        [data-sr="right"]    { transform:translateX(56px); }
        [data-sr="scale"]    { transform:scale(.88); }
        [data-sr].sr-in      { opacity:1; transform:none; }
        .d1{transition-delay:.08s!important} .d2{transition-delay:.16s!important}
        .d3{transition-delay:.24s!important} .d4{transition-delay:.32s!important}
        .d5{transition-delay:.40s!important} .d6{transition-delay:.48s!important}

        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        .float { animation: float 5s ease-in-out infinite; }

        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .marquee { display:flex; width:max-content; animation:marquee 20s linear infinite; }

        @keyframes spin-slow { to{transform:rotate(360deg)} }
        .spin-slow { animation:spin-slow 18s linear infinite; }
      `}</style>

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#f8fdf9]">
        {/* bg blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT — text */}
          <div>
         

            <h1 data-sr="up" className="d1 text-5xl sm:text-6xl md:text-7xl font-black leading-none text-gray-900 mb-4">
              Pure Jain<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">&amp; Satvik</span>
            </h1>
            <h2 data-sr="up" className="d2 text-2xl sm:text-3xl font-black text-gray-400 mb-6">Premix Brand</h2>

            <div data-sr="up" className="d3 space-y-1 mb-8 pl-4 border-l-4 border-green-500">
              {["Be Indian. Live Indian.", "Be Veg. Live Veg.", "Be O-Jain. Live O-Jain."].map((t, i) => (
                <p key={t} className={`font-black italic ${i === 2 ? "text-xl text-green-600" : i === 1 ? "text-lg text-gray-600" : "text-base text-gray-400"}`}>{t}</p>
              ))}
            </div>

            <p data-sr="up" className="d4 text-gray-500 text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
              Instant &amp; quick premix with 50+ flavours — restaurant-style taste that&apos;s easy to make,
              pocket-saving, and crafted for families who believe in pure, healthy living.
            </p>

            <div data-sr="up" className="d5 flex flex-wrap gap-3">
              <Link href="/categories" className="group inline-flex items-center gap-2 h-12 sm:h-14 px-7 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold shadow-lg shadow-green-200 hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                Browse Products <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={12} />
              </Link>
              <Link href="/vendorLogin/login" className="inline-flex items-center gap-2 h-12 sm:h-14 px-7 rounded-2xl border-2 border-green-200 text-green-700 font-bold hover:bg-green-50 transition-all duration-300 text-sm sm:text-base">
                Sell With Us
              </Link>
            </div>
          </div>

          {/* RIGHT — masala images collage */}
          <div data-sr="right" className="relative h-[480px] sm:h-[560px] hidden sm:block">

            {/* Large main — masala5 */}
            <div className="absolute left-0 top-0 w-[58%] h-[62%] rounded-3xl overflow-hidden shadow-2xl float">
              <Image src="/masala5.jpg" alt="O-Jain Masala" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute bottom-3 left-3 bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full">Best Seller</span>
            </div>

            {/* Top right — masala1 */}
            <div className="absolute right-0 top-0 w-[38%] h-[38%] rounded-3xl overflow-hidden shadow-xl" style={{ animationDelay: "1s" }}>
              <Image src="/masala1.png" alt="O-Jain Masala" fill className="object-cover" />
            </div>

            {/* Mid right — masala2 */}
            <div className="absolute right-0 top-[42%] w-[38%] h-[32%] rounded-3xl overflow-hidden shadow-xl float" style={{ animationDelay: "2s" }}>
              <Image src="/masala2.png" alt="O-Jain Masala" fill className="object-cover" />
            </div>

            {/* Bottom left — masala3 */}
            <div className="absolute left-0 bottom-0 w-[36%] h-[34%] rounded-3xl overflow-hidden shadow-xl float" style={{ animationDelay: "1.5s" }}>
              <Image src="/masala3.jpg" alt="O-Jain Masala" fill className="object-cover" />
            </div>

            {/* Bottom center — masala4 */}
            <div className="absolute left-[38%] bottom-0 w-[24%] h-[28%] rounded-2xl overflow-hidden shadow-lg float" style={{ animationDelay: ".7s" }}>
              <Image src="/masala4.jpg" alt="O-Jain Masala" fill className="object-cover" />
            </div>

            {/* Floating badge */}
            <div className="absolute right-2 bottom-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-green-100 float" style={{ animationDelay: "2.5s" }}>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-base shadow">🌿</div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Since</p>
                <p className="text-xs font-black text-gray-900">June 2020</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══ MARQUEE ═══════════════════════════════════════════ */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-500 py-3 overflow-hidden">
        <div className="marquee text-white font-black text-xs uppercase tracking-[.2em] select-none">
          {Array(12).fill(null).map((_, i) => (
            <span key={i} className="px-6">🌿 Pure Jain &amp; Satvik &nbsp;•&nbsp; Restaurant Taste &nbsp;•&nbsp; No Preservatives &nbsp;•&nbsp; Women Empowerment &nbsp;•&nbsp; Est. 2020 &nbsp;•&nbsp;</span>
          ))}
        </div>
      </div>

      {/* ══ MISSION QUOTE ═════════════════════════════════════ */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/5 rounded-full" />
        <div className="absolute top-8 right-8 text-white/5 text-[200px] font-black leading-none select-none">&ldquo;</div>

        <div className="relative max-w-4xl mx-auto text-center">
          <p data-sr="scale" className="text-white/20 text-8xl sm:text-9xl font-black leading-none -mb-6 select-none">&ldquo;</p>
          <p data-sr="up" className="d1 text-white text-2xl sm:text-4xl md:text-5xl font-black italic leading-snug">
            Our mission is to encourage women to serve{" "}
            <span className="text-yellow-300">pure, healthy</span> and{" "}
            <span className="text-yellow-300">tasty food</span> —
            while making them <span className="text-yellow-300">financially independent</span>.
          </p>
          <div data-sr="up" className="d2 mt-10 inline-flex items-center gap-3 bg-white/10 backdrop-blur border border-white/20 px-6 py-3 rounded-full">
            <span className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-sm">🌿</span>
            <span className="text-white/80 text-sm font-semibold uppercase tracking-widest">O-Jain — Est. 2nd June 2020</span>
          </div>
        </div>
      </section>

      {/* ══ STORY ═════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-16 bg-[#f8fdf9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          <div data-sr="left" className="relative order-2 lg:order-1">
            <div className="absolute -inset-3 bg-gradient-to-br from-green-200 to-emerald-100 rounded-[38px] -z-10" />
            <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] shadow-2xl">
              <Image src="/cake2.jpg" alt="O-Jain products" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 border border-green-100">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-xl shadow">🌿</div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Registered Since</p>
                <p className="text-sm font-black text-gray-900">June 2, 2020 🎉</p>
              </div>
            </div>
          </div>

          <div data-sr="right" className="order-1 lg:order-2 space-y-5">
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 border border-green-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              ❓ What Is O-Jain?
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight">
              Instant &amp; Quick{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Premix</span>{" "}
              For Every Taste
            </h2>
            <blockquote className="border-l-4 border-green-500 pl-5 py-1 bg-green-50 rounded-r-2xl pr-4">
              <p className="text-gray-700 leading-8 text-sm sm:text-base italic">
                &ldquo;O-Jain brings <strong className="text-green-700">instant and quick premix</strong> products with a wide range of{" "}
                <strong className="text-green-700">multiple flavours</strong> — delivering restaurant-style taste that is{" "}
                <strong className="text-green-700">easy to make</strong> and <strong className="text-green-700">pocket saving</strong>.&rdquo;
              </p>
            </blockquote>
            <p className="text-gray-500 leading-8 text-sm sm:text-base">
              O-Jain is also a network designed for ordinary women to become independent —
              giving them a platform to introduce themselves in the market under the O-Jain brand.
            </p>
            <p className="text-gray-500 leading-8 text-sm sm:text-base">
              A registered brand built for families who love quality and believe in raising their
              hand for a life that is{" "}
              <span className="text-green-700 font-semibold">less sinful</span> and{" "}
              <span className="text-green-700 font-semibold">more graceful</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ══ STATS ═════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 px-6 sm:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span data-sr="up" className="inline-flex items-center gap-2 bg-green-100 text-green-700 border border-green-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              📊 O-Jain By Numbers
            </span>
            <h2 data-sr="up" className="d1 text-3xl sm:text-5xl font-black text-gray-900">
              Growing <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Every Day</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map(({ value, label, emoji, from, to }, i) => (
              <div key={label} data-sr="scale" className={`d${i + 1} group relative bg-white rounded-3xl p-6 sm:p-8 text-center border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden`}>
                <div className={`absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br ${from} ${to} opacity-10 rounded-full group-hover:opacity-20 transition`} />
                <div className="text-3xl mb-3">{emoji}</div>
                <p className={`text-3xl sm:text-5xl font-black bg-gradient-to-br ${from} ${to} text-transparent bg-clip-text`}>{value}</p>
                <p className="text-gray-400 text-xs uppercase tracking-widest mt-2 font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ADVANTAGES ════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-16 bg-[#f8fdf9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div>
            <span data-sr="left" className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 border border-orange-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              ✅ Why Choose Us
            </span>
            <h2 data-sr="left" className="d1 text-3xl sm:text-5xl font-black text-gray-900 mb-8">
              The O-Jain{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Advantage</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {advantages.map(({ icon, text }, i) => (
                <div key={text} data-sr="up" className={`d${Math.min(i % 3 + 1, 4)} flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 border border-gray-100 shadow-sm hover:border-green-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}>
                  <span className="text-xl w-8 text-center shrink-0">{icon}</span>
                  <span className="text-gray-700 font-medium text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 lg:pt-10">
            {/* Beware card */}
            <div data-sr="right" className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-7 border border-orange-200 overflow-hidden">
              <div className="absolute top-4 right-5 text-5xl opacity-20">⚠️</div>
              <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-3">Beware</p>
              <p className="text-gray-800 font-semibold leading-7 text-sm sm:text-base">
                Beware of local products launched in the name of O-Jain.
                Please <span className="text-orange-600 font-black">verify before you buy</span>.
              </p>
              <div className="mt-4 pt-4 border-t border-orange-200">
                <p className="text-xs font-black text-orange-600 uppercase tracking-wider">Customer Health Is Our Top Priority</p>
              </div>
            </div>

            {/* Promise card */}
            <div data-sr="right" className="d1 relative overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 rounded-3xl p-8 text-white">
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-300/20 rounded-full" />
              <p className="relative text-white/50 text-xs font-black uppercase tracking-widest mb-2">Our Promise</p>
              <p className="relative text-3xl sm:text-4xl font-black leading-tight">
                Pure. Healthy.<br />Tasty. <span className="text-yellow-300">Always.</span>
              </p>
              <p className="relative mt-4 text-white/50 text-xs italic">— O-Jain, A Brand That Serves Pure</p>
            </div>

            {/* Disadvantages card */}
            <div data-sr="right" className="d2 bg-white rounded-3xl p-7 border border-gray-100 shadow-sm">
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Transparency</p>
              <ul className="space-y-4">
                {disadvantages.map((d, i) => (
                  <li key={i} className="flex gap-3 text-gray-600 text-sm leading-6">
                    <span className="text-gray-300 shrink-0 mt-0.5">○</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ VALUES ════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span data-sr="up" className="inline-flex items-center gap-2 bg-green-100 text-green-700 border border-green-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              💡 Our Values
            </span>
            <h2 data-sr="up" className="d1 text-3xl sm:text-5xl font-black text-gray-900">
              What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Stand For</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ icon: Icon, title, desc, grad }, i) => (
              <div key={title} data-sr="scale" className={`d${(i % 3) + 1} group bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden relative`}>
                <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${grad} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500`} />
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${grad} text-white flex items-center justify-center text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon />
                </div>
                <h3 className="text-base sm:text-lg font-black text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 leading-7 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MANIFESTO ═════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-[#f8fdf9] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
          <p className="text-[22vw] font-black text-green-600 whitespace-nowrap">O-JAIN</p>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div data-sr="scale" className="space-y-2 mb-12">
            {[
              { text: "Be Indian. Live Indian.", cls: "text-2xl sm:text-3xl text-gray-400" },
              { text: "Be Veg. Live Veg.",       cls: "text-3xl sm:text-4xl text-gray-700" },
              { text: "Be O-Jain. Live O-Jain.", cls: "text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400" },
            ].map(({ text, cls }) => (
              <p key={text} className={`font-black italic leading-tight ${cls}`}>{text}</p>
            ))}
          </div>
          <p data-sr="up" className="d1 text-gray-400 text-base sm:text-xl italic">and many more to come...</p>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 p-10 sm:p-16 md:p-20 text-center">
            <div className="absolute top-0 left-0 w-80 h-80 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300/10 rounded-full translate-x-1/3 translate-y-1/3" />
            <div className="absolute top-1/2 right-24 w-40 h-40 border border-white/10 rounded-full -translate-y-1/2 hidden lg:block" />
            <div className="relative z-10">
              <span data-sr="up" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-5 py-2 rounded-full text-white/70 text-xs font-bold uppercase tracking-widest mb-8">
                🌿 Join the O-Jain Family
              </span>
              <h2 data-sr="up" className="d1 text-4xl sm:text-6xl md:text-7xl font-black text-white leading-none mb-3">
                Be O-Jain.
              </h2>
              <h2 data-sr="up" className="d2 text-4xl sm:text-6xl md:text-7xl font-black text-yellow-300 leading-none mb-8">
                Live O-Jain.
              </h2>
              <p data-sr="up" className="d3 text-white/60 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
                Explore our range of pure Jain &amp; Satvik premix products — or become a seller and grow with us.
              </p>
              <div data-sr="up" className="d4 flex flex-wrap justify-center gap-4">
                <Link href="/categories" className="group inline-flex items-center gap-2 h-12 sm:h-14 px-8 sm:px-10 rounded-2xl bg-white text-green-800 font-black shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                  Browse Products <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={13} />
                </Link>
                <Link href="/vendorLogin/login" className="inline-flex items-center gap-2 h-12 sm:h-14 px-8 sm:px-10 rounded-2xl bg-white/10 border border-white/25 text-white font-bold hover:bg-white/20 transition-all duration-300 text-sm sm:text-base">
                  Become a Seller
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
