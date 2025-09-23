// next-intl.config.ts
import { IntlConfig } from 'next-intl';

const nextIntlConfig: IntlConfig = {
  locales: ['en', 'es'],          // Idiomas soportados
  defaultLocale: 'en',             // Idioma por defecto
  messagesDirectory: './messages'  // Carpeta de traducciones
};

export default nextIntlConfig;
