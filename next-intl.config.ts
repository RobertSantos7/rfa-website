// next-intl.config.ts
import { IntlConfig } from 'next-intl';

const intlConfig: IntlConfig = {
  defaultLocale: 'en-US', // Usa 'defaultLocale' en lugar de 'locale'
  messagesDirectory: './messages' // La carpeta donde están los JSON
};

export default intlConfig;
