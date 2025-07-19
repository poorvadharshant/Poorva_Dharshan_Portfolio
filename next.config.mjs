// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

const locales = ['en', 'ta'];
const defaultLocale = 'en';

// 👇 Point to your actual request config location
const withNextIntl = createNextIntlPlugin('./src/app/i18n/request.ts', {
  locales,
  defaultLocale
});

export default withNextIntl({
  experimental: {
    serverActions: {}
  },
  images: {
    domains: ['example.com']
  }
});
