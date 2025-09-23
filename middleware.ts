// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware();

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // todas las rutas excepto /api y assets
};
