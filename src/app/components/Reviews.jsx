"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FaStar, FaQuoteRight, FaHeart, FaTimes, FaArrowRight } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import api from "../../../utils/axios";

const STATIC_REVIEWS = [
  {
    name: "Priya Sharma",
    city: "Hyderabad",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    review: "O-Jain premix is amazing! Restaurant style taste at home in minutes. No preservatives and 100% pure — perfect for our Jain family.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    city: "Bangalore",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    review: "Best pocket saving premix I have ever used. Multiple flavour range, easy to make, and the quality is outstanding. Highly recommended.",
    rating: 5,
  },
  {
    name: "Meena Kapoor",
    city: "Mumbai",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    review: "O-Jain truly serves pure. The Satvik premix products are a blessing for our family. Be O-Jain, Live O-Jain — we believe in this brand.",
    rating: 5,
  },
];

const PREVIEW_COUNT = 3;

function getAvatar(name, avatarUrl) {
  if (avatarUrl) return avatarUrl;
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name || "User")}&background=2E7D32&color=fff&size=128&bold=true`;
}

function mapReview(r) {
  const customer = r.customerId || r.customer || r.userId || {};
  const customerName =
    (typeof customer === "object" && customer !== null ? customer.name : null) ||
    r.userName ||
    "O-Jain Customer";
  const customerAvatar =
    (typeof customer === "object" && customer !== null ? customer.avatar : null) ||
    r.userAvatar ||
    null;
  const product = r.productId || r.product || {};
  const productName =
    typeof product === "object" && product !== null ? product.name : null;
  return {
    name: customerName,
    city: productName ? `Reviewed: ${productName}` : "Verified Customer",
    image: getAvatar(customerName, customerAvatar),
    review: r.comment || r.review || "",
    rating: r.rating || 5,
  };
}

function ReviewCard({ name, city, image, review, rating, index, plain }) {
  const inner = (
    // <div className="group relative overflow-hidden rounded-[35px] border border-white/60 bg-white/70 backdrop-blur-2xl shadow-[0_10px_40px_rgba(46,125,50,0.08)] hover:shadow-[0_20px_70px_rgba(46,125,50,0.15)] transition-all duration-500 hover:-translate-y-3 h-full">
    <div className="relative overflow-hidden rounded-[35px] border border-white/60 bg-white/70 backdrop-blur-2xl shadow-[0_10px_40px_rgba(46,125,50,0.08)] h-full">
      <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-brand-green via-brand-green-mid to-brand-green" />
      <div className="absolute -top-20 -right-20 w-52 h-52 bg-brand-green/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

      <div className="relative z-10 p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <FaStar key={s} className={s <= rating ? "text-yellow-400 drop-shadow-sm" : "text-gray-200"} size={16} />
            ))}
          </div>
          <div className="w-14 h-14 rounded-2xl bg-brand-orange flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-all duration-500">
            <FaQuoteRight size={18} />
          </div>
        </div>

        <p className="mt-7 text-[16px] leading-8 text-slate-600 font-medium">
          &ldquo;{review}&rdquo;
        </p>

        <div className="mt-8 pt-6 border-t border-brand-green-pale flex items-center gap-4">
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-full bg-brand-green blur-md opacity-20" />
            <img
              src={image}
              alt={name}
              className="relative w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
              onError={(e) => { e.target.src = getAvatar(name, null); }}
            />
            <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white" />
          </div>
          <div>
            <h4 className="text-[20px] font-black text-slate-900 tracking-tight">{name}</h4>
            {city && <p className="text-sm text-brand-orange font-semibold mt-1">{city}</p>}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 h-24 bg-brand-green/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
    </div>
  );

  if (plain) return inner;

  return (
    <ScrollReveal animation="fade-up" delay={index * 150}>
      {inner}
    </ScrollReveal>
  );
}

function AllReviewsModal({ reviews, onClose }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-999 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-linear-to-br from-white via-brand-bg to-brand-green-pale rounded-[40px] shadow-2xl flex flex-col overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-brand-green-pale shrink-0">
          <div>
            <span className="inline-flex items-center gap-2 bg-brand-green-pale text-brand-green px-4 py-1.5 rounded-full text-sm font-bold">
              <FaHeart size={11} />
              All Customer Reviews
            </span>
            <p className="mt-1 text-slate-500 text-sm">{reviews.length} review{reviews.length !== 1 ? "s" : ""}</p>
          </div>
          <button
            onClick={onClose}
            className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-500 hover:text-brand-green hover:border-brand-green transition-all duration-200 shadow-sm"
          >
            <FaTimes size={16} />
          </button>
        </div>

        {/* Scrollable grid */}
        <div className="overflow-y-auto p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} index={index} plain />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function Reviews() {
  const [displayReviews, setDisplayReviews] = useState(STATIC_REVIEWS);
  const [allReviews, setAllReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchReviews = useCallback(async () => {
    try {
      const res = await api.get("/api/reviews");
      const raw = res.data;
      const apiReviews =
        (Array.isArray(raw?.reviews) && raw.reviews) ||
        (Array.isArray(raw?.data) && raw.data) ||
        (Array.isArray(raw) && raw) ||
        [];

      if (apiReviews.length > 0) {
        const mapped = apiReviews.map(mapReview);
        setAllReviews(mapped);
        setDisplayReviews(mapped.slice(0, PREVIEW_COUNT));
      }
    } catch {
      // API not available — keep static reviews
    }
  }, []);

  // Keep a stable ref so the event listener always calls the latest fetch
  const fetchRef = useRef(fetchReviews);
  useEffect(() => { fetchRef.current = fetchReviews; }, [fetchReviews]);

  useEffect(() => {
    fetchRef.current();
    const handler = () => fetchRef.current();
    window.addEventListener("reviewSubmitted", handler);
    return () => window.removeEventListener("reviewSubmitted", handler);
  }, []);

  const hasMore = allReviews.length > PREVIEW_COUNT;

  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden bg-linear-to-br from-white via-brand-bg to-brand-green-pale">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-brand-green-pale rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-105 h-105 bg-brand-green-mid/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-brand-green-pale rounded-full blur-3xl opacity-20" />

        <div className="sec-container relative z-10">

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

          <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
            {displayReviews.map((review, index) => (
              <ReviewCard key={index} {...review} index={index} />
            ))}
          </div>

          {hasMore && (
            <ScrollReveal animation="fade-up" delay={300} className="mt-14 flex justify-center">
              <button
                onClick={() => setShowModal(true)}
                className="group inline-flex items-center gap-3 bg-brand-green hover:bg-[#1B5E20] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                View All Reviews
                <FaArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </ScrollReveal>
          )}

        </div>
      </section>

      {showModal && (
        <AllReviewsModal reviews={allReviews} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

export default Reviews;
