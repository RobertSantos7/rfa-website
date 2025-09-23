// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locale: 'en-US' // idioma por defecto
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'] // aplica a todas las rutas excepto /api y assets
};
