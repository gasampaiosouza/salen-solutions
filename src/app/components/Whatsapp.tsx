import Link from 'next/link';
import { WhatsappFixedIcon } from '../Icons';

const Whatsapp = () => {
  return (
    <Link
      target="_blank"
      href="https://wa.me/11961991011"
      className="fixed w-16 h-16 bg-[#45C655] rounded-full bottom-6 right-6 flex items-center justify-center z-10"
    >
      <WhatsappFixedIcon />
    </Link>
  );
};

export default Whatsapp;
