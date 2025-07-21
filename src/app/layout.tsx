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

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
        <ThemeProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Loader />
          </Suspense>
          <Navbar />
          <main className="flex-1 px-4 pt-24 pb-8 max-w-5xl mx-auto w-full">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
