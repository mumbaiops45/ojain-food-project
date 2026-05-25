"use client";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    image: "/pasta.jpg",
    title1: "Italian",
    title2: "Pasta",
    subtitle:
      "Creamy and flavorful pasta tossed with fresh herbs and rich sauces.",
    button: "Explore Menu",
  },

  {
    id: 2,
    image: "/cake.jpg",
    title1: "Delicious",
    title2: "Cake",
    subtitle:
      "Freshly baked cakes layered with rich cream and delightful flavors.",
    button: "Order Now",
  },

  {
    id: 3,
    image: "/mangojuice.jpg",
    title1: "Refreshing",
    title2: "Mango Juice",
    subtitle:
      "Sweet and chilled mango juice made from fresh ripe mangoes.",
    button: "View Drink",
  },

  {
    id: 4,
    image: "/masala5.jpg",
    title1: "Spicy",
    title2: "Pav Bhaji Masala",
    subtitle:
      "Authentic Indian spice blend packed with rich aroma and taste.",
    button: "Try Masala",
  },

  {
    id: 5,
    image: "/coconut.jpg",
    title1: "Fresh",
    title2: "Coconut Chutney",
    subtitle:
      "Smooth and flavorful coconut chutney served with South Indian dishes.",
    button: "Explore Chutney",
  },

  {
    id: 6,
    image: "/paneer2.jpg",
    title1: "Classic",
    title2: "Matar Paneer",
    subtitle:
      "Soft paneer cubes cooked with green peas in rich Indian gravy.",
    button: "Explore Curry",
  },
];

function HeroSwiper() {
  return (
    <section className="relative">

      <Swiper
        modules={[
          Autoplay,
          Pagination,
          Navigation,
        ]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        loop
        className="h-[85vh] rounded-b-[40px] overflow-hidden"
      >

        {slides.map((slide) => (

          <SwiperSlide key={slide.id}>

            <div className="relative w-full h-[85vh] overflow-hidden">

              {/* BG IMAGE */}
              <img
                src={slide.image}
                alt={slide.title2}
                className="w-full h-full object-cover"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/25"></div>

              {/* GREEN GLOW */}
              <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/20 blur-3xl rounded-full"></div>

              {/* CONTENT */}
              <div className="absolute inset-0 flex items-center">

                <div className="max-w-7xl mx-auto px-6 w-full">

                  <div className="max-w-3xl">

                    {/* TOP TAG */}
                    <div className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-xl">

                      🌿 Pure Jain & Satvik Foods

                    </div>

                    {/* HEADING */}
                    <h1 className="mt-7 text-5xl md:text-7xl font-black leading-tight">

                      <span className="text-green-500">
                        {slide.title1}
                      </span>

                      <br />

                      <span className="text-white">
                        {slide.title2}
                      </span>

                    </h1>

                    {/* SUBTITLE */}
                    <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-8">

                      {slide.subtitle}

                    </p>

                    {/* BUTTON */}
                    <div className="mt-10 flex flex-wrap gap-5">

                      <Link
                        href="/menu"
                        className="h-14 px-8 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105"
                      >

                        {slide.button}

                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}

export default HeroSwiper;
