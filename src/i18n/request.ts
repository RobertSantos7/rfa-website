import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !['en', 'es'].includes(locale)) {
    locale = 'en';
  }

  return {
    locale,
    // Nota el cambio aquí: subimos dos niveles (../../) para llegar a la raíz
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});