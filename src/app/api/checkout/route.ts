
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-08-16" as Stripe.LatestApiVersion
});

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    // Define precios por plan (en centavos)
    let unitAmount = 9900; // valor por defecto (Basic = $99)

    if (body.planName === "Basic") {
      unitAmount = 24900; // $249.00
    } else if (body.planName === "Standard") {
      unitAmount = 29900; // $299.00
    } else if (body.planName === "Premium") {
      unitAmount = 34900; // $349.00
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
            unit_amount: unitAmount, // aquí se usa el monto según plan
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe session error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
