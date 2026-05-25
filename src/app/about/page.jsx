"use client";

import Link from "next/link";

import {
  FaUtensils,
  FaUsers,
  FaCity,
  FaHeart,
  FaStore,
  FaArrowRight,
  FaStar,
  FaLeaf,
  FaTruck,
} from "react-icons/fa";

export default function AboutPage() {

  return (

    <div className="bg-[#fffaf6] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-orange-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-yellow-400/20 blur-3xl rounded-full"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-3xl">

            {/* TAG */}
            <div className="inline-flex items-center gap-2 bg-brand-orange text-white px-5 py-2 rounded-full text-sm font-bold shadow-xl">

              🍲 About OJAIN

            </div>

            {/* TITLE */}
            <h1 className="mt-7 text-5xl md:text-7xl font-black leading-tight">

              <span className="text-brand-orange">

                Homemade

              </span>

              <br />

              <span className="text-white">

                Food Marketplace

              </span>

            </h1>

            {/* TEXT */}
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-8 max-w-2xl">

              OJAIN connects passionate home cooks and food lovers
              through authentic homemade meals, healthy dishes,
              tiffins and traditional recipes delivered fresh to
              your doorstep.

            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/vendor/login"
                className="h-14 px-8 rounded-2xl bg-brand-orange hover:bg-[#E65100] text-white font-bold flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105"
              >

                Become Seller

              </Link>

              <Link
                href="/"
                className="h-14 px-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
              >

                Explore Foods

                <FaArrowRight />

              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT CONTENT */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADING */}
          <div className="text-center mb-16">

            <div className="inline-flex items-center gap-2 bg-brand-green-pale text-brand-green px-5 py-2 rounded-full text-sm font-bold">

              ❤️ Our Story

            </div>

            <h2 className="mt-6 text-4xl md:text-6xl font-black leading-tight">

              <span className="text-brand-orange">

                Bringing

              </span>{" "}

              <span className="text-gray-900">

                Homemade

              </span>

              <br />

              <span className="text-gray-900">

                Food To

              </span>{" "}

              <span className="text-brand-orange">

                Everyone

              </span>

            </h2>

            <p className="mt-6 text-lg text-gray-500 max-w-3xl mx-auto leading-8">

              We believe everyone deserves healthy, authentic and
              affordable homemade food prepared with care and love.

            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>

              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="w-full h-[500px] object-cover rounded-[35px] shadow-2xl"
              />

            </div>

            {/* RIGHT */}
            <div className="space-y-8">

              <div className="bg-white p-8 rounded-[30px] shadow-lg border border-brand-green-pale">

                <div className="w-16 h-16 rounded-2xl bg-brand-green-pale text-brand-green flex items-center justify-center text-2xl mb-5">

                  <FaUtensils />

                </div>

                <h3 className="text-2xl font-black text-gray-900">

                  Authentic Homemade Taste

                </h3>

                <p className="mt-4 text-gray-500 leading-8">

                  Freshly prepared meals from trusted home chefs
                  using traditional recipes and quality ingredients.

                </p>

              </div>

              <div className="bg-white p-8 rounded-[30px] shadow-lg border border-brand-green-pale">

                <div className="w-16 h-16 rounded-2xl bg-brand-green-pale text-brand-green flex items-center justify-center text-2xl mb-5">

                  <FaHeart />

                </div>

                <h3 className="text-2xl font-black text-gray-900">

                  Made With Love

                </h3>

                <p className="mt-4 text-gray-500 leading-8">

                  Every meal is prepared with care just like home,
                  ensuring healthy and comforting food experiences.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="py-16 bg-brand-green">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {/* CARD */}
            <div className="bg-white/10 backdrop-blur-md rounded-[30px] p-8 text-center border border-white/10">

              <div className="text-5xl text-white mb-4 flex justify-center">

                <FaStore />

              </div>

              <h3 className="text-4xl font-black text-white">

                500+

              </h3>

              <p className="text-white/80 mt-2">

                Home Sellers

              </p>

            </div>

            {/* CARD */}
            <div className="bg-white/10 backdrop-blur-md rounded-[30px] p-8 text-center border border-white/10">

              <div className="text-5xl text-white mb-4 flex justify-center">

                <FaCity />

              </div>

              <h3 className="text-4xl font-black text-white">

                50+

              </h3>

              <p className="text-white/80 mt-2">

                Cities Served

              </p>

            </div>

            {/* CARD */}
            <div className="bg-white/10 backdrop-blur-md rounded-[30px] p-8 text-center border border-white/10">

              <div className="text-5xl text-white mb-4 flex justify-center">

                <FaUsers />

              </div>

              <h3 className="text-4xl font-black text-white">

                10K+

              </h3>

              <p className="text-white/80 mt-2">

                Happy Customers

              </p>

            </div>

            {/* CARD */}
            <div className="bg-white/10 backdrop-blur-md rounded-[30px] p-8 text-center border border-white/10">

              <div className="text-5xl text-white mb-4 flex justify-center">

                <FaStar />

              </div>

              <h3 className="text-4xl font-black text-white">

                4.9★

              </h3>

              <p className="text-white/80 mt-2">

                Customer Rating

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">

            <div className="inline-flex items-center gap-2 bg-brand-green-pale text-brand-green px-5 py-2 rounded-full text-sm font-bold">

              🚀 Why Choose Us

            </div>

            <h2 className="mt-6 text-4xl md:text-6xl font-black">

              <span className="text-gray-900">

                Healthy Food,

              </span>{" "}

              <span className="text-brand-orange">

                Better Life

              </span>

            </h2>

          </div>

          {/* FEATURES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* CARD */}
            <div className="bg-white rounded-[35px] p-10 shadow-lg border border-brand-green-pale hover:-translate-y-2 transition duration-500">

              <div className="w-20 h-20 rounded-3xl bg-brand-green-pale text-brand-green flex items-center justify-center text-4xl mb-6">

                <FaLeaf />

              </div>

              <h3 className="text-2xl font-black text-gray-900">

                Healthy Ingredients

              </h3>

              <p className="mt-4 text-gray-500 leading-8">

                Fresh vegetables, homemade spices and hygienic cooking methods.

              </p>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-[35px] p-10 shadow-lg border border-brand-green-pale hover:-translate-y-2 transition duration-500">

              <div className="w-20 h-20 rounded-3xl bg-brand-green-pale text-brand-green flex items-center justify-center text-4xl mb-6">

                <FaTruck />

              </div>

              <h3 className="text-2xl font-black text-gray-900">

                Fast Delivery

              </h3>

              <p className="mt-4 text-gray-500 leading-8">

                Quick doorstep delivery to ensure your food stays hot and fresh.

              </p>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-[35px] p-10 shadow-lg border border-brand-green-pale hover:-translate-y-2 transition duration-500">

              <div className="w-20 h-20 rounded-3xl bg-brand-green-pale text-brand-green flex items-center justify-center text-4xl mb-6">

                <FaUsers />

              </div>

              <h3 className="text-2xl font-black text-gray-900">

                Empowering Home Chefs

              </h3>

              <p className="mt-4 text-gray-500 leading-8">

                Helping talented home cooks grow their business and income.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[40px] bg-brand-green p-12 md:p-16">

            {/* GLOW */}
            <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-white/10 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-yellow-300/20 blur-3xl rounded-full"></div>

            <div className="relative z-10 text-center">

              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">

                Ready To Taste <br />

                Homemade Goodness?

              </h2>

              <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-8">

                Join OJAIN today and discover authentic homemade meals near you.

              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-5">

                <Link
                  href="/"
                  className="h-14 px-8 rounded-2xl bg-white text-brand-green font-bold flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300"
                >

                  Explore Foods

                </Link>

                <Link
                  href="/vendorLogin/login"
                  className="h-14 px-8 rounded-2xl bg-black/20 backdrop-blur-md border border-white/20 text-white font-bold flex items-center justify-center hover:bg-black/30 transition-all duration-300"
                >

                  Become Seller

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  );
}