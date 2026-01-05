import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Geist, Geist_Mono } from "next/font/google"; // Importamos las fuentes
import Providers from './providers';
import "../../app/globals.css"; // Asegúrate de importar los estilos globales aquí si no lo has hecho

// Configuramos las fuentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadatos básicos
export const metadata = {
  title: "RFA Data Insights",
  description: "Understand your numbers. Improve your results.",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!['en', 'es'].includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    // Agregamos suppressHydrationWarning para evitar errores por extensiones del navegador
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers locale={locale}>
          {children}
        </Providers>
      </body>
    </html>
  );
}