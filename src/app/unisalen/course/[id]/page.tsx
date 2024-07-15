import { ArrowRight, CalendarIcon, ClockIcon, LocationPinIcon, WhatsappIcon } from '@/app/Icons';
import Button from '@/app/components/Button';
import CourseGoogleMap from '@/app/sections/CourseGoogleMap';
import Courses from '@/app/sections/Courses';
import { COURSES_CONTENT } from '@/utils/content';
import { parsePrice } from '@/utils/parse-price';
import Link from 'next/link';

export async function generateStaticParams() {
  const ids = COURSES_CONTENT.map((course) => String(course.id));

  return ids.map(id => ({ id }));
}

const UnisalenCourse = ({ params }: { params: { id: string } }) => {
  const courseId = Number(params.id);

  const currentCourse = COURSES_CONTENT.find((course) => course.id === courseId);
  const courseMessage = `Eu me interessei pelo curso: ${currentCourse?.title || ''}`;

  return (
    <section className="relative">
      {/* one */}
      <div className="w-full h-auto relative -mb-52 sm:mb-0">
        <img
          className="hidden sm:block"
          src="/unisalen-course-banner.jpg"
          alt="Foto de um curso da unisalen"
          width={1903}
          height={792}
        />
        <img
          className="sm:hidden"
          src="/unisalen-course-banner-mobile.jpg"
          alt="Foto de um curso da unisalen"
          width={638}
          height={988}
        />

        <div className="md:absolute relative left-4 -top-[300px] sm:left-2/4 sm:top-2/4 sm:-translate-x-2/4 max-w-[90vw] sm:max-w-default sm:m-auto w-full">
          <span className="text-[#F6F6F6] mb-2 text-xs tracking-wider">WORKSHOP</span>

          <h1 className="text-[#F6F6F6] text-lg sm:text-2xl font-bold mb-2">
            {currentCourse?.title}
          </h1>

          <p className="text-xs sm:text-sm text-default max-w-lg mb-5">
            {currentCourse?.description}
          </p>
        </div>

        {/* block */}
        <div className="relative md:absolute -top-72 md:top-auto md:right-52 md:-bottom-24 rounded-lg bg-[#303135] p-4 sm:p-8 mx-4 sm:mx-0">
          <div className="mb-6">
            <h3 className="mb-4 sm:mb-2 text-default text-sm sm:text-base font-bold">
              Mais detalhes
            </h3>

            <div className="flex items-center gap-2 mb-4">
              <CalendarIcon />
              <span className="text-default text-xs sm:text-sm">DD/MM/AAAA</span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <ClockIcon />
              <span className="text-default text-xs sm:text-sm">40 horas</span>
            </div>

            <div className="flex items-center gap-2">
              <LocationPinIcon />
              <span className="text-default text-xs sm:text-sm">
                Presencial- Av. Paulista - Bela Vista, SP
              </span>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-default text-sm sm:text-base font-bold">Investimento</h3>

            <div className="flex flex-wrap sm:flex-nowrap items-center sm:gap-2">
              <h2 className="font-semibold text-primary text-3xl mr-2 sm:mr-0">
                {parsePrice(999.99)}
              </h2>
              <p className="text-xs text-default">
                ou em até <strong>5x</strong> sem juros
              </p>
            </div>
          </div>

          <div className="flex gap-6 justify-between items-center">
            <Link className="w-full sm:w-auto" href="/contact-us">
              <Button className="mt-4 py-2 text-secondary w-full sm:w-auto border border-primary">
                Quero participar
              </Button>
            </Link>

            <Link
              className="w-full sm:w-auto"
              target="_blank"
              href={`https://wa.me/11961991011?text=${courseMessage}`}
            >
              <Button className="mt-4 py-2 bg-transparent border border-primary flex gap-2 items-center w-full sm:w-auto">
                <WhatsappIcon className="w-[18px]" /> Saiba mais
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* two */}
      <section className="sm:mt-10 mx-4 sm:mx-auto mb-32 max-w-default">
        <h1 className="text-[#F6F6F6] text-2xl font-bold mb-4">Sobre o workshop</h1>

        <p className="text-sm text-default max-w-2xl mb-4">
          Sobre o workshop Uma oportunidade valiosa para indivíduos interessados em desenvolver
          habilidades essenciais para ajudar empresas a alcançarem seus objetivos e superarem
          desafios. Este tipo de evento oferece uma imersão prática e interativa em conceitos
          fundamentais de consultoria empresarial, combinando teoria e aplicação prática.
        </p>

        <p className="text-sm text-default max-w-2xl">
          Durante o workshop, os participantes geralmente têm a oportunidade de aprender sobre uma
          variedade de tópicos relevantes para consultoria de negócios, incluindo análise de
          mercado, estratégias de crescimento, gestão de mudanças, resolução de problemas e
          comunicação eficaz. Os instrutores, frequentemente especialistas experientes no campo da
          consultoria, compartilham conhecimentos, insights e melhores práticas com os
          participantes, proporcionando-lhes uma base sólida para iniciar ou aprimorar suas
          carreiras como consultores.
        </p>

        <Link href="/contact-us">
          <Button secondary className="mt-4 py-2">
            Inscreva-se
          </Button>
        </Link>
      </section>

      {/* three block */}
      {/* <section className="relative flex justify-center items-center mb-32 sm:mb-36 max-w-[calc(100%-32px)] sm:max-w-default m-auto">
        <div className="absolute top-7 left-2 w-[calc(100%-16px)] sm:w-auto sm:top-10 sm:left-10 rounded-lg bg-[#303135] p-6 z-10">
          <h3 className="mb-4 text-default text-sm sm:text-base font-bold">Local do evento</h3>

          <div className="flex gap-2 mb-1">
            <LocationPinIcon />
            <p className="text-default text-xs sm:text-sm font-semibold">
              Escritório Salen Solutions
            </p>
          </div>

          <span className="text-default text-xs leading-tight">
            Av. Paulista - Bela Vista São Paulo -{' '}
            <span className="block sm:inline">SP, 01310-000</span>
          </span>

          <Link
            target="_blank"
            href="https://www.google.com/maps/place/Av.+Paulista,+S%C3%A3o+Paulo+-+SP/@-23.5613545,-46.6564943,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce59c8da0aa315:0xd59f9431f2c9776a!8m2!3d-23.5613545!4d-46.6564943!16zL20vMDNiNzU4?entry=ttu"
            className="group flex items-center gap-2 text-[--contact-color] border-b border-b-[--contact-color] max-w-[100px] text-xs pb-1.5 hover:text-primary hover:border-primary transition mt-4"
          >
            Ver no mapa <ArrowRight />
          </Link>
        </div>

        <CourseGoogleMap />
      </section> */}

      <section className="unisalen-course">
        <Courses currentCourseID={courseId} />
      </section>
    </section>
  );
};

export default UnisalenCourse;
