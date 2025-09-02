import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

// ⬇️ Layout anidado: NO usa <html> ni <body>
export default async function LocaleLayout({ children, params: { locale } }: Props) {
  // Carga el messages/<locale>.json correcto
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}

