import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // 1. Lista de idiomas soportados (debe coincidir con tus archivos en /messages)
  locales: ['en', 'es'],
 
  // 2. Idioma por defecto si no detecta ninguno
  defaultLocale: 'en'
});
 
export const config = {
  // 3. Matcher: Importante para ignorar archivos internos de Next.js (_next, imágenes, api)
  // Si esto está mal, el middleware intenta traducir imágenes y truena con error 500.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};