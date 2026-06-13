"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/heroo8.png",
  "/cake2.jpg",
  "/heroo.jpg",
];

export default function HeroSwiper() {
  const [idx, setIdx] = useState(0);
  const [prev, setPrev] = useState(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => advance(1), 4000);
    return () => clearInterval(timer);
  }, []);

  function advance(dir) {
    if (animating) return;
    setAnimating(true);
    setPrev(idx);
    setIdx((p) => (p + dir + images.length) % images.length);
    setTimeout(() => {
      setPrev(null);
      setAnimating(false);
    }, 600);
  }

  function goTo(i) {
    if (i === idx || animating) return;
    setAnimating(true);
    setPrev(idx);
    setIdx(i);
    setTimeout(() => {
      setPrev(null);
      setAnimating(false);
    }, 600);
  }

  return (
    <section className="w-full pt-3 pb-2">

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOut {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-60px); }
        }
        .slide-in  { animation: slideIn  0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .slide-out { animation: slideOut 0.6s cubic-bezier(0.22,1,0.36,1) both; }
      `}</style>

      {/* ── SLIDER ── */}
      <div
        className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl"
        style={{ height: "clamp(220px, 60vw, 620px)" }}
      >
        {/* outgoing image */}
        {prev !== null && (
          <Image
            key={`out-${prev}`}
            src={images[prev]}
            alt=""
            fill
            className="object-cover object-center slide-out"
          />
        )}

        {/* current image */}
        <Image
          key={`in-${idx}`}
          src={images[idx]}
          alt="OJAIN hero"
          fill
          className="object-cover object-center slide-in"
          priority
        />

        {/* prev / next arrows */}
        <button
          onClick={() => advance(-1)}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/75 backdrop-blur-sm flex items-center justify-center shadow text-gray-700 hover:bg-white transition text-lg sm:text-2xl"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          onClick={() => advance(1)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/75 backdrop-blur-sm flex items-center justify-center shadow text-gray-700 hover:bg-white transition text-lg sm:text-2xl"
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* ── DOTS ── */}
      <div className="flex justify-center items-center gap-2 mt-2 sm:mt-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="transition-all duration-300"
            style={{
              width: i === idx ? 24 : 8,
              height: 8,
              borderRadius: 4,
              background: i === idx ? "#2E7D32" : "#D1D5DB",
            }}
          />
        ))}
      </div>

    </section>
  );
}
