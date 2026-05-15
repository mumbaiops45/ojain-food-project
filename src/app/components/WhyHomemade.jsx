"use client";

const points = [
  {
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
    title: "No Preservatives",
    text: "Fresh homemade meals prepared using healthy natural ingredients only.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80",
    title: "Cooked Fresh Daily",
    text: "Every dish is freshly prepared with hygiene, care and homemade love.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=600&q=80",
    title: "Support Home Chefs",
    text: "Helping women entrepreneurs and local home kitchens grow daily.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    title: "Authentic Indian Taste",
    text: "Traditional recipes crafted with authentic homemade flavors.",
  },
];

function WhyHomemade() {
  return (
    <section className="py-10 md:py-14 bg-[#fffaf5] overflow-hidden">

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">

            <span className="w-2 h-2 rounded-full bg-orange-500"></span>

            Why Choose Orjian

          </span>

          <h2 className="mt-5 text-3xl sm:text-[38px] md:text-[44px] leading-[1.05] font-extrabold tracking-[-1.5px] md:tracking-[-2px] text-[#0f172a]">

            Homemade Food You Can Trust

          </h2>

          <p className="mt-4 text-[16px] leading-7 text-slate-500">

            Freshly prepared homemade meals with authentic taste,
            hygiene and love from trusted home chefs.

          </p>

        </div>

        {/* Cards */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

          {points.map((point, index) => (
            <div
              key={index}
              className="group bg-white rounded-[24px] overflow-hidden border border-orange-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={point.image}
                  alt={point.title}
                  className="w-full h-[180px] sm:h-[220px] object-cover group-hover:scale-105 transition-all duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="text-[22px] font-bold text-[#0f172a] leading-tight">

                  {point.title}

                </h3>

                <p className="mt-3 text-[14px] leading-7 text-slate-500">

                  {point.text}

                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyHomemade;