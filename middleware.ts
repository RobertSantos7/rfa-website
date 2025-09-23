// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locale: 'en',      // idioma por defecto
  locales: ['en','es'] // idiomas disponibles
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
