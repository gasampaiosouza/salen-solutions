import MainBanner from '@/app/sections/MainBanner';
import Contact from './sections/Contact';
import About from './sections/About';
import Solutions from './sections/Solutions';
import Clients from './sections/Clients';
import Mission from './sections/Mission';
import Faq from './sections/Faq';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Salen Solutions - O Domínio Sobre o Marketing',
};

export default function Home() {
  return (
    <>
      <MainBanner />
      <Contact />
      <About />
      <Solutions />
      <Clients />
      <Mission />
      <Faq />
    </>
  );
}
