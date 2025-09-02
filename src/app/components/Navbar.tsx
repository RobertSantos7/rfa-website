"use client";

import Link from "next/link";
import {useState} from "react";
import {Menu} from "lucide-react";
import {usePathname} from "next/navigation";
import LocaleSwitcher from "../components/LocaleSwitcher"; // ← ahora sí lo usamos
import Image from "next/image";

// Lee el idioma actual de la URL: /en/... o /es/...
function useCurrentLocale() {
  const pathname = usePathname() || "/";
  const seg = pathname.split("/")[1];
  return seg === "es" ? "es" : "en";
}

// Helper para prefijar rutas con el locale actual
function l(locale: string, path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${p}`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const locale = useCurrentLocale();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        {/* Botón hamburguesa (mobile) */}
        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="p-2 rounded-md hover:bg-gray-100 md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Marca */}
       <Link href={l(locale, "/")} className="flex items-center gap-2">
  <Image
    src="/logo.png"                 // está en /public/logo.png, perfecto
    alt="RFA Data Insights"
    width={120}                     // pon valores reales aproximados
    height={32}
    priority
    className="h-7 w-auto"
  />
  <span className="sr-only">RFA Data Insights</span>
</Link>

        {/* Navegación desktop */}
        <nav className="hidden md:flex items-center gap-4 text-sm">
          <a href="#services" className="hover:text-green-700">Services</a>
          <a href="#pricing" className="hover:text-green-700">Pricing</a>
          <a href="#how-it-works" className="hover:text-green-700">How it works</a>
          <a href="#faqs" className="hover:text-green-700">FAQs</a>

          <Link href={l(locale, "/about")} className="hover:text-green-700">
            Our company
          </Link>

          {/* Switch EN/ES */}
          <LocaleSwitcher />

          <Link
            href={l(locale, "/contact")}
            className="rounded-xl bg-[#2ED732] text-white px-4 py-2 hover:bg-[#1B5E20]"
          >
            Schedule a call
          </Link>
        </nav>
      </div>

      {/* Drawer móvil */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            <a onClick={() => setOpen(false)} href="#services" className="py-1">Services</a>
            <a onClick={() => setOpen(false)} href="#pricing" className="py-1">Pricing</a>
            <a onClick={() => setOpen(false)} href="#how-it-works" className="py-1">How it works</a>
            <a onClick={() => setOpen(false)} href="#faqs" className="py-1">FAQs</a>
            <Link onClick={() => setOpen(false)} href={l(locale, "/about")} className="py-1">
              Our company
            </Link>

            <div className="py-2">
              <LocaleSwitcher />
            </div>

            <Link
              onClick={() => setOpen(false)}
              href={l(locale, "/contact")}
              className="rounded-xl bg-[#2ED732] text-white px-4 py-2 text-center hover:bg-[#1B5E20]"
            >
              Schedule a call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
