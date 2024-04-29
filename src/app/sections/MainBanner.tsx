'use client';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

// @ts-ignore
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);

type Props = {
  showOldBanners?: boolean;
};

export default function MainBanner({ showOldBanners }: Props) {
  const BANNERS = showOldBanners
    ? ['/main-banner.jpg', '/main-banner.jpg', '/main-banner.jpg', '/main-banner.jpg']
    : [
        '/main-banner/banner-1.jpg',
        '/main-banner/banner-2.jpg',
        '/main-banner/banner-3.jpg',
        '/main-banner/banner-4.jpg',
        '/main-banner/banner-5.jpg',
        '/main-banner/banner-6.jpg',
      ];

  return (
    <section className="container-lg mx-auto main-banner">
      <div className="hidden sm:block">
        <AutoplaySlider
          play
          cancelOnInteraction
          interval={6000}
          organicArrows={false}
          buttonContentLeft={SliderArrowLeft}
          buttonContentRight={SliderArrowRight}
        >
          {BANNERS.map((banner, index) => (
            <div key={index} data-src={banner} />
          ))}
        </AutoplaySlider>
      </div>

      <div className="block sm:hidden">
        <img src="/banner-mobile.jpg" alt="Banner mobile Salen Solutions" />
      </div>
    </section>
  );
}

// prettier-ignore
const SliderArrowLeft = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m7.825 13 4.9 4.9q.3.3.287.7-.012.4-.312.7-.3.276-.7.287a.92.92 0 0 1-.7-.287l-6.6-6.6a.9.9 0 0 1-.213-.325A1.1 1.1 0 0 1 4.425 12q0-.2.062-.375A.9.9 0 0 1 4.7 11.3l6.6-6.6a.93.93 0 0 1 .687-.275q.413 0 .713.275.3.3.3.712 0 .414-.3.713L7.825 11H19q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 19 13z" fill="#050a30"/></svg>

// prettier-ignore
const SliderArrowRight = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m16.175 13-4.9 4.9q-.3.3-.287.7.012.4.312.7.3.276.7.287.4.013.7-.287l6.6-6.6q.15-.15.213-.325.062-.175.062-.375t-.062-.375a.9.9 0 0 0-.213-.325l-6.6-6.6a.93.93 0 0 0-.687-.275q-.413 0-.713.275-.3.3-.3.712 0 .414.3.713L16.175 11H5a.97.97 0 0 0-.712.287A.97.97 0 0 0 4 12q0 .424.288.713Q4.575 13 5 13z" fill="#050a30"/></svg>
