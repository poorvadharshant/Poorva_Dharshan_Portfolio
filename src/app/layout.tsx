// app/layout.tsx
import './globals.css';
// import { NextIntlClientProvider } from 'next-intl';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import ThemeProvider from '@/app/components/ThemeProvider';
import Loader from '@/app/components/Loader';
// import Header from './components/Header';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/NavBar'
// import BottomMenu from '@/app/components/BottomMenu';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Poorva Dharshan | Front-End Web Developer',
  description: 'Professional developer portfolio using Next.js',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  // const messages = (await import(`./message/${locale}.json`)).default;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
        {/* <NextIntlClientProvider locale={locale} messages={messages}> */}
        <ThemeProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Loader />
          </Suspense>
          {/* <Header /> */}
          <Navbar />
          <main className="flex-1 px-4 pt-24 pb-8 max-w-5xl mx-auto w-full">
            {children}
          </main>
          {/* <BottomMenu /> */}
          <Footer />
        </ThemeProvider>
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}
