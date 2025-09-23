// middleware.ts
import createMiddleware from 'next-intl/middleware';

export createMiddleware({
  locales: ['en-US'], // An array of supported locales
  defaultLocale: 'en-US', // The default locale
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // todas las rutas excepto /api y assets
};
