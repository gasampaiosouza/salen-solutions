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

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Salen Solutions',
  description:
    'Nasce uma gigante no segmento óptico! A Salen Solutions, foi desenvolvida para atender as necessidades de todos os proprietários, sócios e investidores.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(poppins.className)}>
        <Container>
          <Header />
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
