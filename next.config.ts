import createNextIntlPlugin from 'next-intl/plugin';

// Al no poner argumentos, busca automáticamente './src/i18n.ts'
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Aquí puedes poner otras configs si tenías (images, etc.)
};

export default withNextIntl(nextConfig);
