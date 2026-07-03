"use client";

import Link from "next/link";
import { FaArrowRight, FaLeaf, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

export default function OurBrandsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-brand-green-pale/30 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-green text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">
            <FaLeaf size={14} />
            OJAIN Family
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight mt-4">
            Our <span className="text-brand-green">Brands</span>
          </h1>
          <p className="text-lg text-gray-600 mt-3 max-w-xl mx-auto leading-relaxed">
            Discover the sister concern that carries the OJAIN legacy forward with the same spirit of purity and excellence.
          </p>
        </div>

        {/* ── Featured Brand: GoodieGear ── */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
          {/* Top accent bar */}
          <div className="h-2 bg-gradient-to-r from-brand-green via-brand-orange to-brand-green" />

          <div className="p-8 md:p-12 relative">
            {/* Decorative circle */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-green/5 blur-3xl" />

            {/* Badge */}
            <div className="flex flex-wrap items-center justify-between mb-6 relative z-10">
              <div className="flex items-center gap-2 bg-brand-orange/10 text-brand-orange text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest border border-brand-orange/20">
                <MdVerified size={14} className="text-brand-orange" />
                Sister Concern
              </div>
              <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">
                Launching Soon
              </span>
            </div>

            {/* Brand info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 relative z-10">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange/80 flex items-center justify-center shadow-xl ring-4 ring-brand-orange/20 shrink-0">
                <span className="text-white text-5xl font-black">G</span>
              </div>
              <div>
                <h2 className="text-4xl font-black text-gray-900">
                  Goodie<span className="text-brand-orange">Gear</span>
                </h2>
                <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-brand-green" />
                  Premium Quality Accessories
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6 space-y-4 text-gray-700 leading-relaxed relative z-10">
              <p className="text-lg font-medium text-gray-800">
                GoodieGear is the <span className="text-brand-green font-bold">sister concern</span> of OJAIN – a brand dedicated to premium quality products and accessories that complement your lifestyle.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 text-sm bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                  <FaCheckCircle className="text-brand-green text-xs" /> Thoughtfully Curated
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                  <FaCheckCircle className="text-brand-green text-xs" /> Everyday Essentials
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                  <FaCheckCircle className="text-brand-green text-xs" /> Trusted Quality
                </span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-4 relative z-10">
              <a
                href="https://goodiegear.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-green to-brand-green/90 hover:from-brand-green/90 hover:to-brand-green text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
              >
                Visit GoodieGear <FaExternalLinkAlt size={14} />
              </a>
             
            </div>
          </div>
        </div>

        {/* ── Coming soon ── */}
        <div className="mt-16 text-center border-t-2 border-gray-200/60 pt-10">
          <p className="text-gray-400 text-sm font-medium tracking-wider">
            More exciting brands joining the family soon — stay tuned! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}