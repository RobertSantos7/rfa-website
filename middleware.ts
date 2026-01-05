import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // 1. Los idiomas que soporta tu app
  locales: ['en', 'es'],
 
  // 2. El idioma por defecto si el usuario no tiene preferencia
  defaultLocale: 'en'
});
 
export const config = {
  // 3. El Matcher: CRUCIAL. 
  // Esto le dice a Next.js: "Ejecuta el middleware en todo EXCEPTO en archivos internos".
  // Si esto falla, el middleware intenta traducir imágenes y explota con error 500.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};