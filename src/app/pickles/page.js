
"use client";

import {
  FaStar,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";

const pickles = [
  {
    name: "Andhra Mango Pickle",
    price: "₹220",
    rating: "4.9",
    image: "/pickle12.png",
    type: "Spicy",
  },
  {
    name: "Lemon Pickle",
    price: "₹180",
    rating: "4.8",
    image: "/pickle2.png",
    type: "Traditional",
  },
  {
    name: "Mixed Vegetable Pickle",
    price: "₹250",
    rating: "4.7",
    image: "/pickle3.jpg",
    type: "Traditional",
  },
  {
    name: "Garlic Pickle",
    price: "₹210",
    rating: "4.9",
    image: "/pickle4.jpg",
    type: "Spicy",
  },
  {
    name: "Gongura Pickle",
    price: "₹260",
    rating: "4.8",
    image: "/pickle5.jpg",
    type: "Andhra Style",
  },
  {
    name: "Tomato Pickle",
    price: "₹190",
    rating: "4.7",
    image: "/pickle6.jpg",
    type: "Fresh",
  },
  {
    name: "Amla Pickle",
    price: "₹170",
    rating: "4.8",
    image: "/pickle7.jpg",
    type: "Healthy",
  },
  {
    name: "Green Chilli Pickle",
    price: "₹230",
    rating: "4.9",
    image: "/pickle8.jpg",
    type: "Hot & Spicy",
  },
];

function PicklesSection() {
  return (
    <section className="py-20 bg-[#fffaf5] overflow-hidden">

      <div className="max-w-[1450px] mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">

            <span className="w-2 h-2 rounded-full bg-orange-500"></span>

            Traditional Pickles

          </span>

          <h2 className="mt-5 text-[46px] leading-[1.05] font-extrabold tracking-[-2px] text-[#0f172a]">

            Pickles

          </h2>

          <p className="mt-4 text-[16px] leading-7 text-slate-500">

            Explore authentic Indian pickles prepared
            with traditional recipes and natural ingredients.

          </p>

        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {pickles.map((pickle, index) => (
            <div
              key={index}
              className="group bg-white rounded-[24px] overflow-hidden border border-orange-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={pickle.image}
                  alt={pickle.name}
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition-all duration-700"
                />

                {/* Type */}
                <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-[11px] font-semibold text-orange-500 shadow-sm">

                  {pickle.type}

                </div>

                {/* Wishlist */}
                <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white flex items-center justify-center text-slate-700 hover:text-red-500 transition-all duration-300 shadow-sm">

                  <FaHeart size={12} />

                </button>

                {/* Rating */}
                <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded-full flex items-center gap-1 text-[11px] font-semibold text-slate-800 shadow-sm">

                  <FaStar
                    className="text-yellow-400"
                    size={10}
                  />

                  {pickle.rating}

                </div>

              </div>

              {/* Content */}
              <div className="p-4">

                <h3 className="text-[17px] font-bold text-[#0f172a] line-clamp-1">

                  {pickle.name}

                </h3>

                {/* Price */}
                <div className="mt-4 flex items-center justify-between">

                  <p className="text-[22px] font-extrabold text-orange-500">

                    {pickle.price}

                  </p>

                  <button className="w-10 h-10 rounded-xl bg-orange-500 hover:bg-orange-600 flex items-center justify-center text-white transition-all duration-300">

                    <FaShoppingCart size={12} />

                  </button>

                </div>

                {/* Button */}
                <button className="mt-4 w-full h-[42px] rounded-xl border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-sm font-semibold transition-all duration-300">

                  Add To Cart

                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default PicklesSection;
