import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "RFA Data Insights",
  description: "Actionable financial analysis: cash flow, profitability and inventory."
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages(); // carga messages/en.json o messages/es.json
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
