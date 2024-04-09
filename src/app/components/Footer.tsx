import Link from 'next/link';
import { InstagramIcon, FacebookIcon, LinkedinIcon } from '../Icons';

import Image from 'next/image';
import GoToTopButton from '../sections/GoToTopButton';
import { twMerge } from 'tailwind-merge';

const SOCIALS = [
  { icon: InstagramIcon, link: 'https://www.instagram.com' },
  { icon: FacebookIcon, link: 'https://www.facebook.com' },
  { icon: LinkedinIcon, link: 'https://www.linkedin.com' },
];

const Footer = () => {
  return (
    <footer className="bg-[#050A30] py-8 sm:py-16 px-6 sm:px-24 relative">
      <GoToTopButton />

      <div className="max-w-default mx-auto flex gap-10 sm:gap-40 justify-between flex-col sm:flex-row">
        <div className="flex flex-col justify-center items-center">
          <Image src="/logo.png" width={180} height={180} alt="Logo salen solutions" />

          <div className="flex gap-6 my-8">
            {SOCIALS.map((social, index) => (
              <Link
                className="bg-[#122452] hover:bg-[#1A2D5A] transition w-8 h-8 rounded-full flex items-center justify-center"
                key={index}
                href={social.link}
                target="_blank"
              >
                <social.icon />
              </Link>
            ))}
          </div>

          <Copyright className="hidden sm:block" />
        </div>

        <div className="flex gap-10 md:gap-20 flex-col md:flex-row">
          <div className="flex flex-col items-start">
            <h3 className="text-base font-semibold text-white mb-6">Salen Solutions</h3>

            <div className="flex flex-col gap-3.5">
              <Link
                className="text-white text-xs hover:text-primary transition"
                href="/about-us"
              >
                Sobre nós
              </Link>
              <Link
                className="text-white text-xs hover:text-primary transition"
                href="/unisalen"
              >
                UniSalen
              </Link>
              <Link
                className="text-white text-xs hover:text-primary transition"
                href="/contact-us"
              >
                Contato
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="text-base font-semibold text-white mb-6">Contato</h3>

            <div className="flex flex-col gap-3.5">
              <Link
                className="text-white text-xs hover:text-primary transition"
                href="tel:11961991011"
              >
                (11) 96199-1011
              </Link>
              <Link
                className="text-white text-xs hover:text-primary transition"
                href="mailto:diretoria@salensolutions.com.br"
              >
                diretoria@salensolutions.com.br
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="text-base font-semibold text-white mb-6">Endereço</h3>

            <div className="flex flex-col gap-3.5">
              <Link
                className="text-white text-xs hover:text-primary transition"
                href="https://www.google.com/maps/place/Av.+Paulista,+2-610+-+Bela+Vista,+S%C3%A3o+Paulo+-+SP,+01310-000/@-23.5703746,-46.6477884,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce59be793630eb:0x83b32a2af60c8d5f!8m2!3d-23.5703193!4d-46.6452664!16s%2Fg%2F11b6bbmch8?entry=ttu"
              >
                Av. Paulista - Bela Vista <br className="hidden sm:block" /> São Paulo -
                SP, 01310-000
              </Link>
            </div>
          </div>

          <Copyright className="sm:hidden" />
        </div>
      </div>
    </footer>
  );
};

const Copyright = (props: React.HTMLProps<HTMLParagraphElement>) => (
  <p className={twMerge('text-xs text-[#F5F7FA]', props.className)}>
    © {new Date().getFullYear()} por SS. O domínio sobre o marketing
  </p>
);

export default Footer;
