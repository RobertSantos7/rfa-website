import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "es"],   // idiomas disponibles
  defaultLocale: "en",     // por defecto: inglés
  localeDetection: true    // detecta idioma del navegador y redirige a /es o /en
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"] // ignora assets y _next
};
