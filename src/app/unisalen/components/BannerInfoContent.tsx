'use client';

import renderButtonGroup from '@/app/components/DefaultButtonGroup';
import { getCarouselOptions } from '@/utils/default-variables';
// import AwesomeSlider from 'react-awesome-slider';

import Carousel from 'react-multi-carousel';
import { twMerge } from 'tailwind-merge';

const BANNER_INFO_CONTENT = [
  {
    title: 'Networking',
    description: 'Networking enriquecedor com profissionais do setor.',
  },
  {
    title: 'Público-Alvo',
    description: 'Desenvolva técnicas para alcançar seu público-alvo de forma eficaz.',
  },
  {
    title: 'Aprimore',
    description: 'Aprimore suas habilidades e mantenha-se à frente da concorrência.',
  },
  {
    title: 'Potencialize',
    description: 'Potencialize sua carreira com novas oportunidades e perspectivas.',
  },
];

const ButtonGroup = renderButtonGroup({ CONTENT: BANNER_INFO_CONTENT, renderArrows: false });

export default function BannerInfoContent() {
  return (
    <div className="w-[calc(100%-16px)] sm:w-[calc(100%-60px)] bg-[#303135] text-white sm:py-8 sm:px-10 rounded-md ml-auto relative -top-[57px] py-4 min-h-[108px] sm:min-h-auto">
      <div className="hidden sm:flex sm:gap-6 sm:w-full justify-between">
        {BANNER_INFO_CONTENT.map((content, index) => (
          <div className="text-center gap-2 max-w-[300px]" key={index}>
            <h3 className="text-base font-semibold mb-2">{content.title}</h3>
            <p className="text-sm">{content.description}</p>
          </div>
        ))}
      </div>

      <div className="banner-info-slider sm:hidden">
        <Carousel
          {...getCarouselOptions()}
          // infinite
          autoPlay
          autoPlaySpeed={5000}
          customButtonGroup={<ButtonGroup />}
        >
          {BANNER_INFO_CONTENT.map((content, index) => (
            <div className="text-center gap-2 max-w-[300px]" key={index}>
              <h3 className="text-base font-semibold mb-2">{content.title}</h3>
              <p className="text-xs">{content.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
