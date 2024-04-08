'use client';

import Button from '@/app/components/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { slide as Menu } from 'react-burger-menu';
import { CloseIcon } from '../Icons';
import { usePathname } from 'next/navigation';

const TRANSPARENT_HEADER_PAGES = ['/', '/unisalen'];

const Header = () => {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window == 'undefined') return;

    const handleScroll = () => {
      const mustBeTransparent = TRANSPARENT_HEADER_PAGES.includes(pathname);
      const THRESHOLD = 200;

      setActive(!mustBeTransparent || window.scrollY > THRESHOLD);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <header
      className={twMerge(
        'fixed top-0 z-50 md:pl-[80px] md:pr-[60px] md:py-5 flex justify-center md:justify-between items-center w-full transition',
        active && 'bg-white shadow-md',
        'h-[80px] md:h-auto'
      )}
    >
      <div className="md:hidden">
        <Menu className="px-4 py-6">
          <div className="w-full !flex justify-between mb-6">
            <h2 className="text-lg font-bold">Menu</h2>
            <CloseIcon />
          </div>

          <div className="divide-y !flex flex-col">
            <Link className="text-[--header-active-color] py-4" href="/">
              Home
            </Link>

            <Link className="text-[--header-active-color] py-4" href="/about-us">
              Sobre Nós
            </Link>

            <Link className="text-[--header-active-color] py-4" href="/unisalen">
              UniSalen
            </Link>

            <Link className="btn" href="/contact-us">
              <Button className="mt-4 min-w-[158px]">Contato</Button>
            </Link>
          </div>
        </Menu>

        <Link href="/" className="md:hidden">
          <Image
            className="max-h-[45px] w-auto"
            src={active ? '/logo-dark.png' : '/logo.png'}
            alt="Salen Solutions logo"
            width={207}
            height={67}
          />
        </Link>
      </div>

      <div className="hidden md:flex justify-between min-w-default mx-auto">
        <Link href="/" className="hidden md:block -ml-6">
          <Image
            className="max-h-[67px] w-auto"
            src={active ? '/logo-dark.png' : '/logo.png'}
            alt="Salen Solutions logo"
            width={207}
            height={67}
          />
        </Link>

        <div className="items-center gap-12 hidden md:flex">
          <Link
            className={twMerge('text-default transition', active && 'text-header-color-active')}
            href="/about-us"
          >
            Sobre Nós
          </Link>
          <Link className="text-primary" href="/unisalen">
            UniSalen
          </Link>

          <Link className="btn" href="/contact-us">
            <Button>Contato</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
