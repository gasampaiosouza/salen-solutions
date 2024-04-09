'use client';

import Button from '@/app/components/Button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { slide as Menu } from 'react-burger-menu';
import { CloseIcon } from '../Icons';
import { usePathname } from 'next/navigation';

const TRANSPARENT_HEADER_PAGES = ['/', '/unisalen', '/unisalen/course'];

const HeaderMenuItems = [
  { label: 'Home', href: '/', isButton: false, mobileOnly: true },
  { label: 'Sobre Nós', href: '/about-us', isButton: false },
  { label: 'UniSalen', href: '/unisalen', isButton: false },
  { label: 'Contato', href: '/contact-us', isButton: true },
];

const Header = () => {
  const pathname = usePathname();

  const isUnisalen = pathname.includes('unisalen');

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePathname, setActivePathname] = useState('');

  const [isHeaderFilled, setIsHeaderFilled] = useState(false);

  const handleScroll = useCallback((path: string) => {
    const mustBeTransparent = TRANSPARENT_HEADER_PAGES.includes(path);
    const THRESHOLD = 200;

    setIsHeaderFilled(!mustBeTransparent || window.scrollY > THRESHOLD);
  }, []);

  const handlePathnameChange = useCallback((path: string) => {
    setActivePathname(path);
    setIsHeaderFilled(false);
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    if (typeof window == 'undefined') return;

    handleScroll(pathname);
    handlePathnameChange(pathname);

    window.addEventListener('scroll', () => handleScroll(pathname));

    return () => window.removeEventListener('scroll', () => handleScroll(pathname));
  }, [pathname, handleScroll, handlePathnameChange]);

  return (
    <header
      className={twMerge(
        'fixed top-0 z-50 md:pl-[80px] md:pr-[60px] md:py-5 flex justify-center md:justify-between items-center w-full transition',
        isHeaderFilled ? (isUnisalen ? 'bg-[#303135] shadow-md' : 'bg-white shadow-md') : '',
        'h-[80px] md:h-auto'
      )}
    >
      <div className="md:hidden">
        <Menu
          className="px-4 py-6"
          isOpen={isMenuOpen}
          onOpen={() => setIsMenuOpen(true)}
          onClose={() => setIsMenuOpen(false)}
        >
          <div className="w-full !flex justify-between mb-6">
            <h2 className="text-lg font-bold">Menu</h2>
            <CloseIcon />
          </div>

          <div className="divide-y !flex flex-col">
            {HeaderMenuItems.map(({ label, href, isButton, mobileOnly }) => {
              const ButtonComponent = isButton ? Button : 'span';

              return (
                <Link
                  key={label}
                  href={href}
                  className={twMerge(
                    'py-4',
                    activePathname === href && 'text-primary',
                    mobileOnly && 'md:hidden'
                  )}
                >
                  <ButtonComponent className="min-w-[158px]">{label}</ButtonComponent>
                </Link>
              );
            })}
          </div>
        </Menu>

        <Link href="/" className="md:hidden">
          <Image
            className="max-h-[45px] w-auto"
            src={isHeaderFilled ? '/logo-dark.png' : '/logo.png'}
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
            src={isHeaderFilled ? (isUnisalen ? '/logo.png' : '/logo-dark.png') : '/logo.png'}
            alt="Salen Solutions logo"
            width={207}
            height={67}
          />
        </Link>

        <div className="items-center gap-12 hidden md:flex">
          <Link
            className={twMerge(
              'text-default transition',
              isUnisalen
                ? 'text-white'
                : isHeaderFilled
                ? 'text-header-active-color'
                : 'text-header-active-color'
            )}
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
