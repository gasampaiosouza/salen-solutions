import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Header from '@/app/components/Header';
import Whatsapp from './components/Whatsapp';
import Footer from './components/Footer';
import { twMerge } from 'tailwind-merge';

import { Toaster } from 'sonner';

import 'react-multi-carousel/lib/styles.css';
import './globals.scss';
import Container from './components/Container';

import NextTopLoader from 'nextjs-toploader';
import { Suspense } from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const MDTitle = {
  template: 'Salen Solutions - %s',
  default: 'Salen Solutions',
};

const MDDescription =
  'Nasce uma gigante no segmento óptico! A Salen Solutions, foi desenvolvida para atender as necessidades de todos os proprietários, também e investidores.';

export const metadata: Metadata = {
  title: MDTitle,
  description: MDDescription,
  openGraph: {
    title: MDTitle,
    description: MDDescription,
    images: '/opengraph-image.png'
  },

  metadataBase: new URL('https://salensolutions.com.br'),
  alternates: { canonical: '/' },
};

function HeaderFallback() {
  return <>Carregando...</>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(poppins.className)}>
        <Container>
          <Suspense fallback={<HeaderFallback />}>
            <Header />
          </Suspense>
          <NextTopLoader color="#d8a31e" shadow={false} showSpinner={false} initialPosition={0.3} />

          {children}
          <Whatsapp />
          <Toaster position="top-right" richColors />

          <Footer />
        </Container>
      </body>
    </html>
  );
}
