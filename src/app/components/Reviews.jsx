"use client";

import {
  FaStar,
  FaQuoteRight,
  FaHeart,
} from "react-icons/fa";

const reviews = [
  {
    name: "Priya Sharma",
    city: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=400&q=80",
    review:
      "Absolutely loved the homemade sweets. It tasted exactly like food made at home.",
  },
  {
    name: "Rahul Verma",
    city: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&q=80",
    review:
      "Fresh food, fast delivery and amazing customer support. Highly recommended.",
  },
  {
    name: "Meena Kapoor",
    city: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=400&q=80",
    review:
      "Amazing platform supporting local home chefs and authentic homemade meals.",
  },
];

function Reviews() {
  return (
    <section className="relative py-14 md:py-24 bg-gradient-to-b from-[#fffaf5] to-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">

            <FaHeart size={12} />

            Customer Feedback

          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">

            Loved By Food Lovers

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">

            Thousands of happy customers trust Orjian
            for fresh homemade meals, authentic flavors,
            and quick delivery every single day.

          </p>

        </div>

        {/* Reviews Grid */}
        <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[32px] p-8 border border-orange-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >

              {/* Gradient Glow */}
              <div className="absolute -top-24 -right-24 w-56 h-56 bg-orange-200/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-orange-100 text-[70px] group-hover:scale-110 transition-all duration-500">

                <FaQuoteRight />

              </div>

              {/* Stars */}
              <div className="relative z-10 flex items-center gap-1">

                {[1, 2, 3, 4, 5].map((s) => (
                  <FaStar
                    key={s}
                    className="text-yellow-400"
                    size={15}
                  />
                ))}

              </div>

              {/* Review Text */}
              <p className="relative z-10 mt-6 text-[16px] leading-8 text-slate-500">

                “{review.review}”

              </p>

              {/* User Info */}
              <div className="relative z-10 mt-8 flex items-center gap-4">

                <div className="relative">

                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-orange-100 shadow-md"
                  />

                  {/* Online Dot */}
                  <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></span>

                </div>

                <div>

                  <h4 className="text-[18px] font-black tracking-tight text-slate-900">

                    {review.name}

                  </h4>

                  <p className="text-sm text-slate-500 mt-1">

                    {review.city}

                  </p>

                </div>

              </div>

              {/* Bottom Hover Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-orange-500 group-hover:w-full transition-all duration-500"></div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Reviews;