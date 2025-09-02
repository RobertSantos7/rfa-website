"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Detecta el idioma actual desde la URL (/en/... o /es/...)
function useCurrentLocale() {
  const pathname = usePathname() || "/";
  const seg = pathname.split("/")[1];
  return seg === "es" ? "es" : "en";
}

// Helper para prefijar rutas con el locale actual
function withLocale(locale: string, path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${p}`;
}

export default function Footer() {
  const locale = useCurrentLocale();

  return (
    <footer className="mt-20 border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Marca */}
        <div>
          <Link href={withLocale(locale, "/")} className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="RFA Data Insights logo"
              width={112}
              height={28}
              className="h-8 w-auto"
              priority
            />
            <span className="sr-only">RFA Data Insights</span>
          </Link>
          <p className="text-sm text-gray-600 mt-2">
            Understand your numbers. Improve your results.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:underline" href={withLocale(locale, "/#services")}>
                Services
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={withLocale(locale, "/#pricing")}>
                Price
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={withLocale(locale, "/how-it-works")}>
                How it works
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={withLocale(locale, "/about")}>
                Us
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={withLocale(locale, "/contact")}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:underline" href={withLocale(locale, "/privacy")}>
                Privacy Notice
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={withLocale(locale, "/terms")}>
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:underline" href="mailto:hello@rfadatainsights.com">
                hello@rfadatainsights.com
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://wa.me/526461241104"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: +52 646 124 1104
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} RFA Data Insights. All rights reserved.
      </div>
    </footer>
  );
}

