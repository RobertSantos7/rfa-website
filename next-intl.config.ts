// next-intl.config.ts
import { IntlConfig } from 'next-intl';

const intlConfig: IntlConfig = {
  // This file is meant for client-side configuration.
  // The 'locale' and 'messages' properties are what's needed.
  // The 'defaultLocale' property belongs in middleware.ts.
  locale: 'en-US', // The current locale.
  messages: {} as any, // You would import your messages here
};

export default intlConfig;
