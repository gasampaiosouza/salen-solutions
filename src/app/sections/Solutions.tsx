'use client';

import { getCarouselOptions } from '@/utils/default-variables';
import { CrisisIcon, LampIcon, AssessorIcon, SearchIcon, CapIcon } from '../Icons';

// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';

import Carousel from 'react-multi-carousel';
import renderButtonGroup from '../components/DefaultButtonGroup';

// @ts-ignore
// import withAutoplay from 'react-awesome-slider/dist/autoplay';

// const AutoplaySlider = withAutoplay(AwesomeSlider);

const SOLUTIONS = [
  { icon: CrisisIcon, title: 'Tráfego Pago' },
  { icon: LampIcon, title: 'Marketing Digital' },
  { icon: AssessorIcon, title: 'Assesoria' },
  { icon: SearchIcon, title: 'Consultoria' },
  { icon: CapIcon, title: 'UniSalen' },
];

const ButtonGroup = renderButtonGroup({ CONTENT: SOLUTIONS });

const Solutions = () => {
  return (
    <section className="sm:mt-[94px] px-4 mt-12 mb-24 sm:mb-32 max-w-default mx-auto">
      <span className="text-subtitle mb-2 text-xs tracking-wider">SERVIÇOS</span>

      <h2 className="text-default text-2xl font-bold mb-2">Soluções</h2>

      <p className="text-sm text-paragraph max-w-2xl mb-10">
        A Salen está presente em muitos lugares do Brasil, e está se expandindo cada vez mais.
        Confira alguns clientes que confiam na entrega de resultados da Salen Solutions
      </p>

      <div className="mt-16 sm:flex flex-wrap lg:flex-nowrap justify-around items-start gap-10 hidden">
        {SOLUTIONS.map((solution, index) => (
          <div
            key={index}
            className="group hover:shadow-lg px-8 py-6 transition-all duration-300 sm:flex-1 sm:hover:flex-[2] sm:h-[305px] sm:overflow-hidden"
          >
            <div className="w-12 h-12 bg-[#E8EBFB] rounded-full flex items-center justify-center mb-4">
              <solution.icon />
            </div>

            <h3 className="text-lg font-bold mb-4 text-nowrap">{solution.title}</h3>

            <p className="text-sm text-paragraph opacity-0 group-hover:opacity-100 transition-opacity sm:min-w-72">
              A primeira universidade optical, criada com o objetivo de formar pessoas no ramo
              óptico, trazendo qualidade de vendas, atendimento e credibilidade por meio de uma
              série de palestras e workshops envolventes.
            </p>
          </div>
        ))}
      </div>

      <div className="solutions-slider sm:hidden relative min-h-[290px]">
        <Carousel {...getCarouselOptions()} customButtonGroup={<ButtonGroup />}>
          {SOLUTIONS.map((solution, index) => (
            <div key={index} className="w-full h-full shadow-md border py-6 px-8 rounded-lg max-w-[calc(100%-5px)] sm:max-w-auto">
              <div className="w-12 h-12 bg-[#E8EBFB] rounded-full flex items-center justify-center mb-4">
                <solution.icon />
              </div>

              <h3 className="text-lg font-bold mb-4">{solution.title}</h3>

              <p className="text-sm text-paragraph transition-opacity">
                A primeira universidade optical, criada com o objetivo de formar pessoas no ramo
                óptico, trazendo qualidade de vendas, atendimento e credibilidade por meio de uma
                série de palestras e workshops envolventes.
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Solutions;
