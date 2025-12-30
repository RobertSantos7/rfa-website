// src/i18n.ts
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // Obtenemos el idioma solicitado
  let locale = await requestLocale;

  // Lista tus idiomas soportados aquí. Si el locale no es válido o es null, usa 'en'.
  if (!locale || !['en', 'es'].includes(locale)) {
    locale = 'en';
  }

  return {
    locale,
    // Importamos los mensajes desde la carpeta 'messages' que está en la raíz
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
