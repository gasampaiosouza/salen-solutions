'use client';

// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';

import Carousel from 'react-multi-carousel';

import Image from 'next/image';
import { UnisalenBubble } from '../Icons';
import { TESTIMONIALS_CONTENT } from '@/utils/content';
import { getCarouselOptions } from '@/utils/default-variables';
import renderButtonGroup from '../components/DefaultButtonGroup';

// prettier-ignore
const SliderArrowLeft = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m7.825 13 4.9 4.9q.3.3.287.7-.012.4-.312.7-.3.276-.7.287a.92.92 0 0 1-.7-.287l-6.6-6.6a.9.9 0 0 1-.213-.325A1.1 1.1 0 0 1 4.425 12q0-.2.062-.375A.9.9 0 0 1 4.7 11.3l6.6-6.6a.93.93 0 0 1 .687-.275q.413 0 .713.275.3.3.3.712 0 .414-.3.713L7.825 11H19q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 19 13z" fill="#fff"/></svg>

// prettier-ignore
const SliderArrowRight = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m16.175 13-4.9 4.9q-.3.3-.287.7.012.4.312.7.3.276.7.287.4.013.7-.287l6.6-6.6q.15-.15.213-.325.062-.175.062-.375t-.062-.375a.9.9 0 0 0-.213-.325l-6.6-6.6a.93.93 0 0 0-.687-.275q-.413 0-.713.275-.3.3-.3.712 0 .414.3.713L16.175 11H5a.97.97 0 0 0-.712.287A.97.97 0 0 0 4 12q0 .424.288.713Q4.575 13 5 13z" fill="#fff"/></svg>

const ButtonGroup = renderButtonGroup({
  CONTENT: TESTIMONIALS_CONTENT,
  CustomArrowLeft: SliderArrowLeft,
  CustomArrowRight: SliderArrowRight,
  customClassName: 'md:left-auto md:-right-[10px]'
});

const Testimonials = () => {
  return (
    <section className="unisalen testimonials p-4 sm:p-0 max-w-default m-auto mb-32 sm:mb-36">
      <UnisalenBubble className="absolute right-0 -z-10" />

      <span className="text-[#F6F6F6] mb-2 text-xs tracking-wider">DEPOIMENTOS</span>

      <h2 className="text-[#F6F6F6] text-2xl font-bold mb-4">
        O que estão falando sobre a UniSalen
      </h2>

      <div className="relative sm:min-h-[243px]">
        <Carousel {...getCarouselOptions(3)} customButtonGroup={<ButtonGroup />}>
          {TESTIMONIALS_CONTENT.map((testimonial, index) => (
            <div className="flex gap-12" key={index}>
              <TestimonialItem key={index} testimonial={testimonial} />
            </div>
          ))}
        </Carousel>
      </div>

      {/* <div className="sm:hidden">
        <AwesomeSlider
          organicArrows={false}
        >
          {TESTIMONIALS_CONTENT.flat().map((testimonial, index) => (
            <div key={index}>
              <TestimonialItem key={index} testimonial={testimonial} />
            </div>
          ))}
        </AwesomeSlider>
      </div> */}
    </section>
  );
};

function TestimonialItem({ testimonial }: { testimonial: (typeof TESTIMONIALS_CONTENT)[0] }) {
  return (
    <div className="sm:w-[408px] rounded-md p-6 bg-[#303135] max-w-[calc(100%-10px)] sm:max-w-auto">
      <p className="text-sm mb-6 text-default min-h-[123px]">{testimonial.description}</p>

      <div className="flex gap-2 items-center">
        <Image
          quality={80}
          className="rounded-full"
          src={testimonial.image}
          alt={`Foto do usuário: ${testimonial.name}`}
          width={42}
          height={42}
        />

        <div>
          <h3 className="text-sm font-semibold text-default">{testimonial.name}</h3>

          <span className="text-xs text-default">{testimonial.date}</span>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
