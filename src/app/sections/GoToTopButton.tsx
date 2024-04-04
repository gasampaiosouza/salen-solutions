'use client';

import { CarouselLikeArrow } from '../Icons';

export default function GoToTopButton() {
  return (
    <button
      className="bg-[#404D77] text-white text-xs sm:text-sm flex items-center gap-2 py-2 px-6 rounded-lg absolute right-2/4 translate-x-2/4 -top-[19px]"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      Voltar para o topo <CarouselLikeArrow />
    </button>
  );
}
