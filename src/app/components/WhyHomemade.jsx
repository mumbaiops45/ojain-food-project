"use client";

import ScrollReveal from "./ScrollReveal";

const points = [
  {
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80",
    title: "No Preservatives",
    text: "Every O-Jain premix uses only the best natural ingredients — zero artificial preservatives.",
  },
  {
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80",
    title: "Quick & Easy Premix",
    text: "Restaurant style taste ready in minutes — just mix, cook and serve. Pocket saving too.",
  },
  {
    image: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=600&q=80",
    title: "Empowering Women",
    text: "O-Jain is a network for ordinary women to become independent entrepreneurs.",
  },
  {
    image:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
    title: "Authentic Jain Taste",
    text: "Pure Jain & Satvik recipes crafted for families who believe in healthy, graceful living.",
  },
];

function WhyHomemade() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-linear-to-br from-white via-brand-bg to-brand-green-pale">

      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-green-pale rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green-mid rounded-full blur-3xl opacity-15"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-brand-green-pale rounded-full blur-3xl opacity-20"></div>

      <div className="relative z-10 sec-container">

        {/* Heading */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-brand-orange/20 text-brand-orange px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
            Why Choose Ojain
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl leading-tight font-black tracking-tight text-slate-900">
            Pure O-Jain Products{" "}
            <span className="text-brand-green">You Can Trust</span>
          </h2>

          <p className="mt-5 text-[17px] leading-8 text-slate-600">
            Instant &amp; quick premix with authentic Jain taste, zero preservatives
            and multiple flavour range — easy to make, pocket saving.
          </p>
        </ScrollReveal>

        {/* Cards */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {points.map((point, index) => (
            <ScrollReveal key={index} animation="scale-up" delay={index * 100}>
            <div
              className="group relative overflow-hidden rounded-[30px] bg-white/80 backdrop-blur-xl border border-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-linear-to-b from-brand-green/0 via-brand-green/0 to-brand-green-pale/40"></div>

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={point.image}
                  alt={point.title}
                  className="w-full h-44 sm:h-52 md:h-56 object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"></div>

                {/* Badge — brand-orange */}
                <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-brand-orange text-white text-xs font-bold shadow-lg">
                  Premium Quality
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6">
                {/* Green Line */}
                <div className="w-16 h-1 rounded-full bg-brand-green mb-5"></div>

                {/* Title — brand-green */}
                <h3 className="text-[24px] font-black text-brand-green leading-tight">
                  {point.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  {point.text}
                </p>
              </div>

              {/* Bottom Glow */}
              <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-44 h-24 bg-brand-green-mid/30 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyHomemade;
