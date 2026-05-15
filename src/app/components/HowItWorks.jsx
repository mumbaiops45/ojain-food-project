"use client";

import {
  FaStore,
  FaShoppingBag,
  FaMotorcycle,
  FaArrowRight,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaStore size={30} />,
    title: "Vendors List Food",
    text: "Home chefs upload freshly prepared homemade meals with quality ingredients and hygienic cooking.",
    color: "from-orange-500 to-amber-400",
  },
  {
    icon: <FaShoppingBag size={30} />,
    title: "Customers Order",
    text: "Browse authentic homemade dishes, explore categories, and place orders in seconds.",
    color: "from-pink-500 to-orange-400",
  },
  {
    icon: <FaMotorcycle size={30} />,
    title: "Fast Delivery",
    text: "Fresh meals are packed carefully and delivered quickly to your doorstep while still hot.",
    color: "from-orange-600 to-red-400",
  },
];

function HowItWorks() {
  return (
    <section className="relative py-14 md:py-24 bg-gradient-to-b from-[#fffdfb] to-[#fff7f0] overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-semibold shadow-sm">

            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>

            Fast & Simple Process

          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">

            How It Works

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500">

            Enjoy fresh homemade food from trusted local chefs in just a few simple steps.

          </p>

        </div>

        {/* Steps */}
        <div className="relative mt-10 md:mt-20 grid md:grid-cols-3 gap-6 md:gap-8">

          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-28 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[32px] p-6 md:p-10 border border-orange-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >

              {/* Gradient Glow */}
              <div className={`absolute -top-24 -right-24 w-52 h-52 rounded-full bg-gradient-to-br ${step.color} opacity-10 blur-3xl group-hover:opacity-20 transition-all duration-500`}></div>

              {/* Step Number */}
              <div className="absolute top-6 right-6 text-[72px] font-black text-orange-50 leading-none select-none">

                0{index + 1}

              </div>

              {/* Icon */}
              <div className={`relative z-10 w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500`}>

                {step.icon}

              </div>

              {/* Title */}
              <h3 className="relative z-10 mt-6 md:mt-8 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">

                {step.title}

              </h3>

              {/* Description */}
              <p className="relative z-10 mt-5 text-[15px] leading-8 text-slate-500">

                {step.text}

              </p>

              {/* Learn More */}
              <button className="relative z-10 mt-8 inline-flex items-center text-orange-500 font-semibold text-sm group-hover:text-orange-600 transition-all duration-300">

                Learn More

                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-all duration-300" />

              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;