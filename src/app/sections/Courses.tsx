'use client';

// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';

import Carousel from 'react-multi-carousel';

import Image from 'next/image';
import Button from '../components/Button';
import Link from 'next/link';

import { getCarouselOptions } from '@/utils/default-variables';
import { COURSES_CONTENT } from '@/utils/content';
import renderButtonGroup from '../components/DefaultButtonGroup';

type Props = {
  currentCourseID?: number;
};

// prettier-ignore
const SliderArrowLeft = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m7.825 13 4.9 4.9q.3.3.287.7-.012.4-.312.7-.3.276-.7.287a.92.92 0 0 1-.7-.287l-6.6-6.6a.9.9 0 0 1-.213-.325A1.1 1.1 0 0 1 4.425 12q0-.2.062-.375A.9.9 0 0 1 4.7 11.3l6.6-6.6a.93.93 0 0 1 .687-.275q.413 0 .713.275.3.3.3.712 0 .414-.3.713L7.825 11H19q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 19 13z" fill="#fff"/></svg>

// prettier-ignore
const SliderArrowRight = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m16.175 13-4.9 4.9q-.3.3-.287.7.012.4.312.7.3.276.7.287.4.013.7-.287l6.6-6.6q.15-.15.213-.325.062-.175.062-.375t-.062-.375a.9.9 0 0 0-.213-.325l-6.6-6.6a.93.93 0 0 0-.687-.275q-.413 0-.713.275-.3.3-.3.712 0 .414.3.713L16.175 11H5a.97.97 0 0 0-.712.287A.97.97 0 0 0 4 12q0 .424.288.713Q4.575 13 5 13z" fill="#fff"/></svg>

const ButtonGroup = renderButtonGroup({
  CONTENT: COURSES_CONTENT,
  CustomArrowLeft: SliderArrowLeft,
  CustomArrowRight: SliderArrowRight,
  customClassName: 'md:left-auto md:right-0',
});

const Courses = ({ currentCourseID }: Props) => {
  function filterRelatedItems(items: typeof COURSES_CONTENT) {
    if (!currentCourseID) return items;

    return items;

    // return items.filter((item) => item.id !== currentCourseID);
  }

  return (
    <section className="unisalen max-w-default m-auto mb-32 sm:mb-36 p-4 sm:p-0">
      <span className="text-[#F6F6F6] mb-2 text-xs tracking-wider">WORKSHOPS E PALESTRAS</span>

      <h2 className="text-[#F6F6F6] text-2xl font-bold mb-2">
        {currentCourseID ? 'Workshops e palestras relacionados' : 'Próximos eventos'}
      </h2>

      <p className="text-sm text-default max-w-2xl mb-5">
        Confira os próximos workshops e palestras ministrados pela UniSalen
      </p>

      <div className="relative sm:min-h-[389px]">
        <Carousel {...getCarouselOptions(4)} customButtonGroup={<ButtonGroup />}>
          {filterRelatedItems(COURSES_CONTENT).map((course, index) => (
            <div className="flex gap-14 justify-center sm:justify-start" key={index}>
              <Course key={index} course={course} />
            </div>
          ))}
        </Carousel>
        {/* <AwesomeSlider
          organicArrows={false}
          buttonContentLeft={SliderArrowLeft}
          buttonContentRight={SliderArrowRight}
        >
          {filterRelatedItems(COURSES_CONTENT).map((courseList, index) => (
            <div className="flex gap-14" key={index}>
              {courseList.map((course) => (
                <Course key={index} course={course} />
              ))}
            </div>
          ))}
        </AwesomeSlider> */}
      </div>

      {/*<div className="relative sm:hidden min-h-[290px]">
        <AwesomeSlider
          organicArrows={false}
          buttonContentLeft={SliderArrowLeft}
          buttonContentRight={SliderArrowRight}
        >
          {filterRelatedItems(COURSES_CONTENT)
            .flat()
            .map((course, index) => (
              <div key={index}>
                <Course key={index} course={course} />
              </div>
            ))}
        </AwesomeSlider> 
      </div>*/}
    </section>
  );
};

function Course({ course }: { course: (typeof COURSES_CONTENT)[0] }) {
  return (
    <div className="w-[300px] sm:w-72 rounded-md p-4 bg-[#303135]">
      <Image
        quality={100}
        className="rounded-sm"
        src={course.image}
        alt={`Foto do curso ${course.title}`}
        width={256}
        height={165}
      />

      <h3 className="text-base font-semibold mb-1 mt-4 text-default min-h-[52px]">
        {course.title}
      </h3>

      <div className="flex gap-2 items-center mb-1">
        {course.tags.map((tag, index) => (
          <div key={index} className="flex items-center gap-1 text-xs text-default">
            <span className="block w-1 h-1 bg-primary rounded-full" />

            {tag}
          </div>
        ))}
      </div>

      <p className="text-xs text-paragraph line-clamp-2	min-h-10">{course.description}</p>

      <Link href={`/unisalen/course/${course.id}`}>
        <Button secondary className="mt-4 py-2 w-full sm:w-auto">
          Participar
        </Button>
      </Link>
    </div>
  );
}

export default Courses;
