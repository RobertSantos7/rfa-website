// src/app/api/checkout/route.ts

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const body = await req.json();

  // Inicializamos Stripe dentro del handler (solo se ejecuta en runtime, no en build)
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-08-27.basil", // Corregido según el error de tipo
  });

  try {
    // Define precios por plan (en centavos)
    let unitAmount = 9900; // valor por defecto

    if (body.planName === "Basic") {
      unitAmount = 24900;
    } else if (body.planName === "Standard") {
      unitAmount = 29900;
    } else if (body.planName === "Premium") {
      unitAmount = 34900;
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: body.planName || "Financial Service",
              description: "One-time payment for financial analysis",
            },
            unit_amount: unitAmount,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe session error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
