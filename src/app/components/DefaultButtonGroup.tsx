import { twMerge } from 'tailwind-merge';

type Props = {
  CONTENT: Array<unknown>;
  CustomArrowLeft?: JSX.Element;
  CustomArrowRight?: JSX.Element;
  renderArrows?: boolean;
  customClassName?: string;
};

const renderButtonGroup = ({
  CONTENT,
  CustomArrowLeft,
  CustomArrowRight,
  renderArrows = true,
  customClassName = '',
}: Props) => {
  return function ButtonGroup({ next, previous, goToSlide, ...rest }: any) {
    const {
      carouselState: { currentSlide, slidesToShow },
    } = rest;

    console.log({ currentSlide, slidesToShow });

    return (
      <div
        className={twMerge(
          'absolute -bottom-11 flex gap-3 left-2/4 -translate-x-2/4',
          customClassName
        )}
      >
        {renderArrows ? (
          <div
            className={twMerge('cursor-pointer', currentSlide === 0 && 'disable')}
            onClick={() => previous()}
          >
            {CustomArrowLeft ?? <SliderArrowLeft />}
          </div>
        ) : null}

        <ul className="react-multi-carousel-dot-list relative">
          {CONTENT.slice(0, Math.ceil(CONTENT.length / slidesToShow)).map((_, index) => (
            <li
              key={index}
              onClick={() => goToSlide(index)}
              data-index={index * slidesToShow}
              className={twMerge(
                'react-multi-carousel-dot',
                currentSlide == index * slidesToShow && 'react-multi-carousel-dot--active'
              )}
            >
              <button aria-label={`Go to slide ${index + 1}`}></button>
            </li>
          ))}
        </ul>

        {renderArrows ? (
          <div
            className={twMerge('cursor-pointer', currentSlide === 0 && 'disable')}
            onClick={() => next()}
          >
            {CustomArrowRight ?? <SliderArrowRight />}
          </div>
        ) : null}
      </div>
    );
  };
};

// prettier-ignore
export const SliderArrowLeft = () => (
  <button className='' aria-label="Go to previous slide" type="button">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m7.825 13 4.9 4.9q.3.3.287.7-.012.4-.312.7-.3.276-.7.287a.92.92 0 0 1-.7-.287l-6.6-6.6a.9.9 0 0 1-.213-.325A1.1 1.1 0 0 1 4.425 12q0-.2.062-.375A.9.9 0 0 1 4.7 11.3l6.6-6.6a.93.93 0 0 1 .687-.275q.413 0 .713.275.3.3.3.712 0 .414-.3.713L7.825 11H19q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 19 13z" fill="#050a30"/></svg>
  </button>
)

// prettier-ignore
export const SliderArrowRight = () => (
  <button className='' aria-label="Go to next slide" type="button">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m16.175 13-4.9 4.9q-.3.3-.287.7.012.4.312.7.3.276.7.287.4.013.7-.287l6.6-6.6q.15-.15.213-.325.062-.175.062-.375t-.062-.375a.9.9 0 0 0-.213-.325l-6.6-6.6a.93.93 0 0 0-.687-.275q-.413 0-.713.275-.3.3-.3.712 0 .414.3.713L16.175 11H5a.97.97 0 0 0-.712.287A.97.97 0 0 0 4 12q0 .424.288.713Q4.575 13 5 13z" fill="#050a30"/></svg>
  </button>
)

export default renderButtonGroup;
