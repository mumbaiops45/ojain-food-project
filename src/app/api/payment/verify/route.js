// src/app/api/payment/verify/route.js
// Verifies the HMAC-SHA256 signature Razorpay sends after a successful payment.
// If the signature doesn't match, the payment must NOT be treated as successful.

import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      await request.json();

    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keySecret) {
      return NextResponse.json({ error: "Razorpay key not configured" }, { status: 500 });
    }

    // Razorpay signature = HMAC-SHA256( order_id + "|" + payment_id, key_secret )
    const body     = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expected = crypto
      .createHmac("sha256", keySecret)
      .update(body)
      .digest("hex");

    if (expected !== razorpay_signature) {
      return NextResponse.json({ error: "Invalid payment signature" }, { status: 400 });
    }

    return NextResponse.json({ success: true, paymentId: razorpay_payment_id });
  } catch (err) {
    console.error("Razorpay verify error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
