import { IntlConfig } from 'next-intl';

const nextIntlConfig: IntlConfig = {
  locales: ['en', 'es'],
  defaultLocale: 'en',
  messagesDirectory: './messages'
};

export default nextIntlConfig;
