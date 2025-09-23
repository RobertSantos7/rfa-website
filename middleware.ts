// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en-US'], // Un array de los idiomas soportados
  defaultLocale: 'en-US', // El idioma por defecto
});

export const config = {
  // Configuración de las rutas (matcher)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
