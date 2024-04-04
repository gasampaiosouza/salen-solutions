'use client';

import { usePathname } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  const pathname = usePathname();
  return <main className={pathname.includes('/unisalen') ? 'dark' : ''}>{children}</main>;
};

export default Container;
