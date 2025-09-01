"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [sending, setSending] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAF9F7] px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-[#082A49] mb-2">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          Tell us a bit about you and your business. We’ll get back to you shortly.
        </p>

        {/* FORM — envía a tu correo con FormSubmit */}
        <form
          action="https://formsubmit.co/robert@rfadatainsights.com"
          method="POST"
          className="bg-white rounded-2xl shadow p-6 space-y-4"
          onSubmit={() => setSending(true)}
        >
          {/* Anti-spam (honeypot) */}
          <input type="text" name="_honey" className="hidden" />
          {/* Redirección al terminar */}
          <input type="hidden" name="_next" value="/success" />
          <input type="hidden" name="_subject" value="New lead - RFA Data Insights" />
          <input type="hidden" name="_template" value="table" />
          {/* Respuesta automática opcional */}
          <input
            type="hidden"
            name="_autoresponse"
            value="Thanks for contacting RFA Data Insights. We’ll reply shortly."
          />

          <div>
            <label className="block text-sm mb-1">Full name</label>
            <input name="name" required className="w-full border rounded-xl px-3 py-2" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" name="email" required className="w-full border rounded-xl px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 213 578 6724"
                className="w-full border rounded-xl px-3 py-2"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm mb-1">Location (City/State)</label>
              <input name="location" className="w-full border rounded-xl px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Business name</label>
              <input name="business" className="w-full border rounded-xl px-3 py-2" />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">What do you need?</label>
            <textarea name="message" rows={4} className="w-full border rounded-xl px-3 py-2" />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full rounded-xl bg-[#2ED732] text-white py-3 font-medium hover:bg-[#1B5E20] disabled:opacity-60"
          >
            {sending ? "Sending..." : "Send message"}
          </button>
        </form>

        {/* Opciones secundarias */}
        <div className="mt-6 bg-white rounded-2xl shadow p-6">
          <p className="text-sm text-gray-600 mb-3">Prefer quick contact?</p>
          <div className="flex flex-wrap gap-3">
            {/* WhatsApp: usa E.164 sin guiones: +52 6461241104 -> 526461241104 */}
            <a
              href="https://wa.me/526461241104?text=Hi%20RFA%20Data%20Insights,%20I%27m%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border px-4 py-2 hover:bg-gray-50"
            >
              WhatsApp
            </a>
            <a
              href="mailto:robert@rfadatainsights.com?subject=Inquiry%20-%20RFA%20Data%20Insights&body=Hi%20RFA%20team,%0A%0AMy%20name%20is%20...%0ABusiness%3A%20...%0ALocation%3A%20...%0APhone%3A%20...%0A%0AI%27m%20interested%20in%3A%20..."
              className="rounded-xl border px-4 py-2 hover:bg-gray-50"
            >
              Email
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Tip: Use <strong>robert@rfadatainsights.com</strong> as a team inbox for a more professional look.
          </p>
        </div>
      </div>
    </main>
  );
}
