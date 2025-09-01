"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function LocaleSwitcher() {
  const pathname = usePathname() || "/";
  const seg = pathname.split("/")[1];
  const current = seg === "es" ? "es" : "en";
  const other = current === "en" ? "es" : "en";

  return (
    <Link href={`/${other}${pathname === "/" ? "" : pathname.replace(/^\/(en|es)/, "")}`}
          className="text-sm rounded-md border px-2 py-1 hover:bg-gray-50"
          aria-label={`Switch language to ${other.toUpperCase()}`}>
      {other.toUpperCase()}
    </Link>
  );
}

