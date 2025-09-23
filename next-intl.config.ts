// next-intl.config.ts
import { IntlConfig } from 'next-intl';

const intlConfig: IntlConfig = {
  locale: 'en-US',                // idioma por defecto
  messagesDirectory: './messages' // carpeta donde están los JSON
};

export default intlConfig;
