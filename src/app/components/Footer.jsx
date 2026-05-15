"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="relative bg-[#0f172a] text-white overflow-hidden">

      {/* Top Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-[1450px] mx-auto px-6 lg:px-10 pt-20 pb-10 relative z-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <h2 className="text-[34px] font-extrabold tracking-[-1px] text-white">

              Ojain
              {/* <span className="text-orange-500"> Food</span> */}

            </h2>

            <p className="mt-5 text-slate-400 leading-8 text-[15px]">

              Bringing authentic homemade food, traditional recipes,
              and fresh meals from trusted home chefs directly to your doorstep.

            </p>

            {/* Social */}
            <div className="flex items-center gap-4 mt-7">

              <button className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-orange-500 hover:border-orange-500 flex items-center justify-center transition-all duration-300">

                <FaFacebookF size={15} />

              </button>

              <button className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-orange-500 hover:border-orange-500 flex items-center justify-center transition-all duration-300">

                <FaInstagram size={16} />

              </button>

              <button className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-orange-500 hover:border-orange-500 flex items-center justify-center transition-all duration-300">

                <FaTwitter size={15} />

              </button>

            </div>

          </div>

          {/* Links */}
          <div>

            <h3 className="text-[20px] font-bold mb-6">

              Quick Links

            </h3>

            <ul className="space-y-4 text-slate-400 text-[15px]">

              <li className="hover:text-orange-500 transition cursor-pointer">
                About Us
              </li>

              <li className="hover:text-orange-500 transition cursor-pointer">
                Contact Us
              </li>

              <li className="hover:text-orange-500 transition cursor-pointer">
                Privacy Policy
              </li>

              <li className="hover:text-orange-500 transition cursor-pointer">
                Terms & Conditions
              </li>

              <li className="hover:text-orange-500 transition cursor-pointer">
                Become Seller
              </li>

            </ul>

          </div>

          {/* Categories */}
          <div>

            <h3 className="text-[20px] font-bold mb-6">

              Popular Categories

            </h3>

            <ul className="space-y-4 text-slate-400 text-[15px]">

              <li className="hover:text-orange-500 transition cursor-pointer">
                Homemade Meals
              </li>

              <li className="hover:text-orange-500 transition cursor-pointer">
                Biryani
              </li>

              <li className="hover:text-orange-500 transition cursor-pointer">
                Sweets
              </li>

              <li className="hover:text-orange-500 transition cursor-pointer">
                Snacks
              </li>

              <li className="hover:text-orange-500 transition cursor-pointer">
                Healthy Food
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-[20px] font-bold mb-6">

              Contact Us

            </h3>

            <div className="space-y-5 text-slate-400 text-[15px]">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500">

                  <FaPhoneAlt size={14} />

                </div>

                <span>+91 xxxxxxxxxx</span>

              </div>

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500">

                  <MdEmail size={17} />

                </div>

                <span>support@orjianfood.com</span>

              </div>

              <div className="flex items-start gap-3">

                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500">

                  <FaMapMarkerAlt size={15} />

                </div>

                <span>
                  Hyderabad, Telangana,
                  <br />
                  India
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col lg:flex-row items-center justify-between gap-4">

          <p className="text-slate-500 text-sm text-center lg:text-left">

            © 2026 Ojain . All rights reserved.

          </p>

          <p className="text-slate-500 text-sm text-center lg:text-right">

            Designed & Developed by 
            <span className="text-orange-500 font-semibold">
              {"  "}Nakshatra Namaha Creations
            </span>

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;