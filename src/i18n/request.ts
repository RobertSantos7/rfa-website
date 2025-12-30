// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
// 1. No importamos 'path' ni 'fs' para evitar líos con el runtime si es posible, 
// pero si usabas __dirname, usa imports dinámicos directos:

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !['en', 'es'].includes(locale)) {
    locale = 'en';
  }

  return {
    locale,
    // 2. Aquí está el truco: NO uses __dirname.
    // Usa la ruta relativa pura con import() dinámico.
    // Al estar en src/i18n/request.ts, subimos dos niveles (../../) para llegar a messages/
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});