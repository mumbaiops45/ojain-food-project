"use client";

import { FaStar, FaQuoteRight, FaHeart } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const reviews = [
  {
    name: "Priya Sharma",
    city: "Hyderabad",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    review: "O-Jain premix is amazing! Restaurant style taste at home in minutes. No preservatives and 100% pure — perfect for our Jain family.",
  },
  {
    name: "Rahul Verma",
    city: "Bangalore",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    review: "Best pocket saving premix I have ever used. Multiple flavour range, easy to make, and the quality is outstanding. Highly recommended.",
  },
  {
    name: "Meena Kapoor",
    city: "Mumbai",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    review: "O-Jain truly serves pure. The Satvik premix products are a blessing for our family. Be O-Jain, Live O-Jain — we believe in this brand.",
  },
];

function Reviews() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-white via-brand-bg to-brand-green-pale">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-green-pale rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-brand-green-mid/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-green-pale rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl border border-brand-green/20 text-brand-green px-5 py-2 rounded-full text-sm font-bold shadow-lg">
            <FaHeart size={12} />
            Customer Feedback
          </span>

          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-slate-900">
            Loved By{" "}
            <span className="text-brand-green">Our Customers</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Thousands of happy customers trust O-Jain for pure, healthy and
            authentic Jain &amp; Satvik premix products every single day.
          </p>
        </ScrollReveal>

        {/* Reviews Grid */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-7">
          {reviews.map((review, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
            <div
              className="group relative overflow-hidden rounded-[35px] border border-white/60 bg-white/70 backdrop-blur-2xl shadow-[0_10px_40px_rgba(46,125,50,0.08)] hover:shadow-[0_20px_70px_rgba(46,125,50,0.15)] transition-all duration-500 hover:-translate-y-3 h-full"
            >
              {/* Top Gradient — brand green */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-green via-brand-green-mid to-brand-green"></div>

              {/* Hover Glow */}
              <div className="absolute -top-20 -right-20 w-52 h-52 bg-brand-green/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="flex items-center justify-between">
                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <FaStar key={s} className="text-yellow-400 drop-shadow-sm" size={16} />
                    ))}
                  </div>

                  {/* Quote — brand-orange */}
                  <div className="w-14 h-14 rounded-2xl bg-brand-orange flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-all duration-500">
                    <FaQuoteRight size={18} />
                  </div>
                </div>

                <p className="mt-7 text-[16px] leading-8 text-slate-600 font-medium">
                  "{review.review}"
                </p>

                <div className="mt-8 pt-6 border-t border-brand-green-pale flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-brand-green blur-md opacity-20"></div>
                    <img
                      src={review.image}
                      alt={review.name}
                      className="relative w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                    />
                    <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></span>
                  </div>

                  <div>
                    <h4 className="text-[20px] font-black text-slate-900 tracking-tight">{review.name}</h4>
                    <p className="text-sm text-brand-orange font-semibold mt-1">{review.city}</p>
                  </div>
                </div>
              </div>

              {/* Bottom Glow */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 h-24 bg-brand-green/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Reviews;
