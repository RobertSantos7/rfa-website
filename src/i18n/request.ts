import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Si no hay idioma o es inválido, usamos inglés
  if (!locale || !['en', 'es'].includes(locale)) {
    locale = 'en';
  }

  return {
    locale,
    // LA SOLUCIÓN: Usar importación relativa simple.
    // Nada de 'path', nada de 'fs', nada de '__dirname'.
    // Esto funciona porque Next.js sabe resolver imports dinámicos.
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});