// src/app/api/payment/create-order/route.js
// Server-side only — Razorpay secret never reaches the browser.

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { amount } = await request.json(); // amount in ₹ (rupees)

    const keyId     = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return NextResponse.json(
        { error: "Razorpay keys not configured. Add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET to .env.local" },
        { status: 500 }
      );
    }

    // Basic-auth header: base64(key_id:key_secret)
    const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");

    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: Math.round(amount * 100), // Razorpay needs paise (₹1 = 100 paise)
        currency: "INR",
        receipt: `ojain_${Date.now()}`,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error?.description || "Failed to create Razorpay order" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      orderId:  data.id,
      amount:   data.amount,   // in paise
      currency: data.currency,
    });
  } catch (err) {
    console.error("Razorpay create-order error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
