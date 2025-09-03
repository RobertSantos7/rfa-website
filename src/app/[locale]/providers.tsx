// src/app/[locale]/providers.tsx
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

export default async function Providers({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  // Resuelve en server y devuelve el provider listo
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
