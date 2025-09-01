"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What do I need to get started?",
    a: "Your sales/costs in Excel or CSV. We take care of cleaning and structuring the data.",
  },
  {
    q: "How long does it take to deliver the first report?",
    a: "Between 5 and 7 business days from when we receive the complete data.",
  },
  {
    q: "How do you protect my information?",
    a: "We sign NDAs upon request. we store it encrypted, and you can request complete deletion at any time.",
  },
  {
    q: "Can I cancel at any time?",
    a: "Yes, plans are monthly. You can cancel whenever you want and keep your reports.",
  },
];

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-16 px-6 bg-white">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-[#082A49] mb-8">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div key={i} className="border rounded-2xl bg-white">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-5 py-4 font-medium flex justify-between items-center"
                aria-expanded={open === i}
              >
                {item.q}
                <span className="text-gray-400">{open === i ? "—" : "+"}</span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-gray-600 text-sm">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
