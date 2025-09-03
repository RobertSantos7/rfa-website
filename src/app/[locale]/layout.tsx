// src/app/[locale]/layout.tsx
import type {Metadata} from 'next';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'RFA Data Insights',
  description:
    'Actionable financial analysis: cash flow, profitability and inventory.',
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function LocaleLayout({children, params}: Props) {
  const {locale} = params;

  return (
    <html lang={locale}>
      <body>
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}

