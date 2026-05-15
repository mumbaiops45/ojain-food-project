"use client";

import Link from "next/link";
import {
  FaStar,
  FaHeart,
  FaShoppingCart,
  FaArrowRight,
  FaFireAlt,
} from "react-icons/fa";

const products = [
  {
    name: "Homemade Gulab Jamun",
    price: "₹250",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Traditional Mango Pickle",
    price: "₹180",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Fresh Tiffin Combo",
    price: "₹120",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Chocolate Truffle Cake",
    price: "₹450",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Veg Biryani",
    price: "₹220",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Dal Rice Bowl",
    price: "₹140",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Paneer Curry",
    price: "₹260",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Chapati Meal",
    price: "₹99",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Masala Dosa",
    price: "₹130",
    rating: "4.8",
    image: "/dosa.jpg",
  },
  {
    name: "Samosa Plate",
    price: "₹90",
    rating: "4.7",
    image: "/smosa.jpg",
  },
];

function FeaturedProducts() {
  return (
    <section className="relative py-14 md:py-24 bg-gradient-to-b from-[#fffaf5] to-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">

          <div>

            <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">

              <FaFireAlt size={12} />

              Fresh Homemade Food

            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">

              Featured Products

            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-500 max-w-2xl">

              Explore authentic homemade dishes prepared with fresh
              ingredients, traditional recipes, and lots of love by
              trusted local home chefs.

            </p>

          </div>

          {/* View All Button */}
          <Link
            href="/products"
            className="group inline-flex items-center justify-center h-[56px] px-8 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all duration-300 shadow-xl shadow-orange-200"
          >

            View All Products

            <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-all duration-300" />

          </Link>

        </div>

        {/* Product Grid */}
        <div className="mt-10 md:mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-7">

          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[30px] overflow-hidden border border-orange-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >

              {/* Product Image */}
              <div className="relative overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-[180px] sm:h-[200px] md:h-[240px] object-cover group-hover:scale-110 transition-all duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                {/* Wishlist */}
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-700 hover:text-red-500 transition-all duration-300 shadow-lg">

                  <FaHeart size={14} />

                </button>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 text-[12px] font-bold text-slate-800 shadow-lg">

                  <FaStar className="text-yellow-400" size={12} />

                  {product.rating}

                </div>

              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="text-[18px] font-bold text-slate-900 leading-snug line-clamp-1">

                  {product.name}

                </h3>

                <div className="mt-4 flex items-center justify-between">

                  <p className="text-[24px] font-black text-orange-500">

                    {product.price}

                  </p>

                  <button className="w-11 h-11 rounded-2xl bg-orange-500 hover:bg-orange-600 flex items-center justify-center text-white transition-all duration-300 shadow-lg shadow-orange-100 hover:scale-110">

                    <FaShoppingCart size={14} />

                  </button>

                </div>

                {/* Add To Cart */}
                <button className="mt-5 w-full h-[48px] rounded-2xl border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-sm font-bold transition-all duration-300">

                  Add To Cart

                </button>

              </div>

              {/* Hover Glow */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-44 h-24 bg-orange-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProducts;