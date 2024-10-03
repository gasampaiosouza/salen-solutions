import Breadcrumb from '../components/Breadcrumb';
import Contact from '../sections/Contact';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Entre em Contato',
};

const AboutUs = () => {
  return (
    <div className="mt-28 sm:mt-36 sm:px-16">
      <Breadcrumb
        className="px-4 sm:px-0"
        path={[
          { label: 'Home', link: '/' },
          { label: 'Contato', link: '/contact-us' },
        ]}
      />

      <Contact />
    </div>
  );
};

export default AboutUs;
