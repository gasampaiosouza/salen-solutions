import MainBanner from '@/app/sections/MainBanner';
import Contact from './sections/Contact';
import About from './sections/About';
import Solutions from './sections/Solutions';
import Clients from './sections/Clients';
import Mission from './sections/Mission';
import Faq from './sections/Faq';

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Home({ searchParams }: Props) {
  return (
    <>
      <MainBanner showOldBanners={!!searchParams.oldBanner} />
      <Contact />
      <About />
      <Solutions />
      <Clients />
      <Mission />
      <Faq />
    </>
  );
}
