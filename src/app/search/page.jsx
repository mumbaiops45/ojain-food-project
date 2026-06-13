"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
import { FaSearch, FaLeaf, FaShoppingCart, FaMinus, FaPlus, FaSpinner } from "react-icons/fa";
import { useProduct } from "../../../hooks/useProduct";
import { useCart } from "../../../hooks/useCart";
import { useAuth } from "../../contexts/AuthContext";
import getImageUrl from "../../../utils/getImageUrl";

function ProductImage({ src, alt }) {
  const [imgSrc, setImgSrc] = useState(src || "/category1.jpg");
  useEffect(() => { setImgSrc(src || "/category1.jpg"); }, [src]);
  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className="object-cover"
      unoptimized
      onError={() => setImgSrc("/category1.jpg")}
    />
  );
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 animate-pulse">
      <div className="h-48 bg-gray-200" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
        <div className="h-9 bg-gray-200 rounded-xl mt-3" />
      </div>
    </div>
  );
}

function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";

  const { user } = useAuth();
  const { products, loading, fetchProducts } = useProduct();
  const { cart, addItem, updateItem, removeItem } = useCart();
  const [addingId, setAddingId] = useState(null);

  useEffect(() => { fetchProducts(); }, [fetchProducts]);

  const filtered = products.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.name?.toLowerCase().includes(q) ||
      p.description?.toLowerCase().includes(q) ||
      p.category?.name?.toLowerCase().includes(q)
    );
  });

  const cartQty = (productId) => {
    const item = cart?.items?.find((i) => i.product?._id === productId);
    return item?.quantity ?? 0;
  };

  const handleAdd = async (product) => {
    if (!user) {
      toast.error("Please login to add items to cart");
      router.push("/customerLogin/login");
      return;
    }
    setAddingId(product._id);
    try {
      await addItem(product._id, 1);
      toast.success(`${product.name} added to cart!`);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to add item");
    } finally {
      setAddingId(null);
    }
  };

  const handleIncrease = async (product) => {
    try { await updateItem(product._id, cartQty(product._id) + 1); }
    catch { toast.error("Failed to update cart"); }
  };

  const handleDecrease = async (product) => {
    const qty = cartQty(product._id);
    try {
      if (qty <= 1) await removeItem(product._id);
      else await updateItem(product._id, qty - 1);
    } catch { toast.error("Failed to update cart"); }
  };

  return (
    <div className="min-h-screen bg-brand-bg py-12 sec-container">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-brand-green mb-2">
          <FaSearch size={14} />
          <span className="text-sm font-semibold uppercase tracking-wider">Search Results</span>
        </div>
        <h1 className="text-3xl font-black text-gray-900">
          {query ? (
            <>Results for <span className="text-brand-green">"{query}"</span></>
          ) : (
            "Search Products"
          )}
        </h1>
        {!loading && query && (
          <p className="text-gray-500 mt-1 text-sm">
            {filtered.length > 0
              ? `${filtered.length} product${filtered.length > 1 ? "s" : ""} found`
              : "No products found"}
          </p>
        )}
      </div>

      {/* Loading skeletons */}
      {loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}
        </div>
      )}

      {/* No query */}
      {!loading && !query && (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-20 h-20 rounded-full bg-brand-green-pale flex items-center justify-center mb-4">
            <FaSearch size={28} className="text-brand-green" />
          </div>
          <h2 className="text-xl font-bold text-gray-700 mb-2">What are you looking for?</h2>
          <p className="text-gray-400 text-sm">Type something in the search bar above to find products.</p>
        </div>
      )}

      {/* No results */}
      {!loading && query && filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mb-4">
            <FaSearch size={28} className="text-red-300" />
          </div>
          <h2 className="text-xl font-bold text-gray-700 mb-2">
            No products found for "{query}"
          </h2>
          <p className="text-gray-400 text-sm max-w-xs">
            Try a different keyword, check the spelling, or browse our categories.
          </p>
          <button
            onClick={() => router.push("/")}
            className="mt-6 bg-brand-green hover:bg-[#1B5E20] text-white px-6 py-3 rounded-2xl font-bold text-sm transition"
          >
            Browse All Products
          </button>
        </div>
      )}

      {/* Results grid */}
      {!loading && filtered.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((product) => {
            const qty = cartQty(product._id);
            const isAdding = addingId === product._id;

            return (
              <div
                key={product._id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-40 sm:h-48 w-full bg-gray-100">
                  <ProductImage
                    src={getImageUrl(product.images?.[0])}
                    alt={product.name}
                  />
                  {product.isVeg && (
                    <span className="absolute top-2 left-2 bg-brand-green text-white text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                      <FaLeaf size={8} /> Veg
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-800 text-sm leading-snug line-clamp-2 mb-1">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="text-xs text-gray-400 line-clamp-2 mb-2">{product.description}</p>
                  )}
                  <p className="text-brand-green font-black text-lg mt-auto mb-3">₹{product.price}</p>

                  {/* Cart controls */}
                  {qty > 0 ? (
                    <div className="flex items-center justify-between bg-brand-green-pale rounded-2xl px-3 py-2">
                      <button
                        onClick={() => handleDecrease(product)}
                        className="w-7 h-7 rounded-full bg-brand-green text-white flex items-center justify-center"
                      >
                        <FaMinus size={10} />
                      </button>
                      <span className="font-black text-brand-green text-sm">{qty}</span>
                      <button
                        onClick={() => handleIncrease(product)}
                        className="w-7 h-7 rounded-full bg-brand-green text-white flex items-center justify-center"
                      >
                        <FaPlus size={10} />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleAdd(product)}
                      disabled={isAdding}
                      className="w-full h-10 rounded-2xl bg-brand-orange hover:bg-[#E65100] text-white font-bold text-sm transition flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isAdding
                        ? <FaSpinner className="animate-spin" />
                        : <><FaShoppingCart size={12} /> Add to Cart</>}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <FaSpinner className="animate-spin text-brand-green text-3xl" />
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}
