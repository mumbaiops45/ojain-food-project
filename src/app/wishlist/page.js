"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaHeart, FaTrash, FaShoppingCart } from "react-icons/fa";

import useWishlistStore from "../../../store/wishlistStore";
import useCartStore from "../../../store/cartStore";
import getImageUrl from "../../../utils/getImageUrl";

export default function WishlistPage() {
    const {
        wishlist,
        fetchWishlist,
        removeFromWishlist,
        loading,
    } = useWishlistStore();

    const { addItem  } = useCartStore();

    const [moving, setMoving] = useState(null);

    useEffect(() => {
        fetchWishlist();
    }, []);

    const handleRemove = async (id) => {
        const res = await removeFromWishlist(id);

        if (res?.success) {
            toast.success("Removed from wishlist");
        }
    };

    const handleMoveToCart = async (product) => {
        try {
            setMoving(product._id);

            await addItem(product._id, 1);

            await removeFromWishlist(product._id);

            toast.success("Moved to cart");
        }
        catch (err) {
            console.log(err);
            console.log(err.response?.data);

            toast.error(
                err.response?.data?.message || err.message || "Failed to move product"
            );
        }
        finally {
            setMoving(null);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10">

            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}

                <div className="flex items-center gap-3 mb-8">

                    <FaHeart className="text-red-500 text-3xl" />

                    <div>
                        <h1 className="text-3xl font-bold">
                            My Wishlist
                        </h1>

                        <p className="text-gray-500">
                            {wishlist.length} Product(s)
                        </p>
                    </div>

                </div>

                {/* Empty */}

                {!loading && wishlist.length === 0 && (
                    <div className="bg-white rounded-xl shadow p-16 text-center">

                        <FaHeart className="mx-auto text-6xl text-gray-300 mb-6" />

                        <h2 className="text-2xl font-bold mb-3">
                            Your Wishlist is Empty
                        </h2>

                        <p className="text-gray-500 mb-8">
                            Save products that you love.
                        </p>

                        <Link
                            href="/"
                            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg"
                        >
                            Continue Shopping
                        </Link>

                    </div>
                )}

                {/* Products */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {wishlist.map((item) => {

                        const product = item.product || item;

                        return (

                            <div
                                key={product._id}
                                className="bg-white rounded-xl shadow hover:shadow-lg transition"
                            >

                                <Link href={`/product/${product.slug || product._id}`}>

                                    <div className="relative h-60">

                                        <Image
                                            src={getImageUrl(product.images?.[0])}
                                            alt={product.name}
                                            fill
                                            className="object-contain p-5"
                                        />

                                    </div>

                                </Link>

                                <div className="p-5">

                                    <h2 className="font-bold text-lg line-clamp-2">
                                        {product.name}
                                    </h2>

                                    <p className="text-green-700 font-bold text-xl mt-2">
                                        ₹{product.price}
                                    </p>

                                    <div className="flex gap-3 mt-6">

                                        <button
                                            onClick={() => handleMoveToCart(product)}
                                            disabled={moving === product._id}
                                            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg flex items-center justify-center gap-2"
                                        >
                                            <FaShoppingCart />

                                            {moving === product._id
                                                ? "Moving..."
                                                : "Move To Cart"}
                                        </button>

                                        <button
                                            onClick={() => handleRemove(product._id)}
                                            className="w-12 rounded-lg bg-red-100 hover:bg-red-200 text-red-600 flex justify-center items-center"
                                        >
                                            <FaTrash />
                                        </button>

                                    </div>

                                </div>

                            </div>

                        );
                    })}

                </div>

            </div>

        </div>
    );
}