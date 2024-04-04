import Image from 'next/image';
import Button from '../components/Button';
import Link from 'next/link';

import Courses from '../sections/Courses';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';
import BannerInfoContent from './components/BannerInfoContent';

const Unisalen = () => {
  return (
    <>
      <MainBanner />
      <BannerInfoContent />
      <UnisalenFirstContent />
      <UnisalenSecondContent />
      <Courses />
      <Testimonials />
      <Contact />
    </>
  );
};

function MainBanner() {
  return (
    <>
      <Link href="/contact-us">
        <img
          className="hidden sm:block"
          src="/unisalen-banner.jpg"
          alt="Unisalen banner principal"
          width={1903}
          height={863}
        />

        <img
          className="sm:hidden"
          src="/unisalen-banner-mobile.jpg"
          alt="Unisalen banner principal"
          width={592}
          height={495}
        />
      </Link>
    </>
  );
}

function UnisalenFirstContent() {
  return (
    <section className="flex flex-col p-4 sm:p-0 sm:flex-row items-center justify-between mb-20 sm:mb-28 max-w-default mx-auto">
      <Image
        loading="lazy"
        quality={90}
        className="rounded-md"
        src="/unisalen-image-1.jpg"
        alt="Duas pessoas conversando sobre trabalho"
        width={640}
        height={445}
      />

      <div className="text-left mt-4 sm:mt-0">
        <h1 className="text-lg sm:text-2xl text-default font-bold mb-4">UniSalen</h1>

        <p className="text-xs sm:text-sm mb-4 text-default max-w-2xl">
          Unisalen, foi a primeira universidade optical, criada com o objetivo de formar pessoas no
          ramo óptico, trazendo qualidade de vendas, atendimento e credibilidade. A Unisalen é
          conhecida por sua dedicação em enriquecer o conhecimento dos alunos e profissionais do
          setor óptico ao longo do ano, por meio de uma série de palestras e workshops envolventes.
          Estes eventos têm como principal objetivo a exploração de tópicos cruciais para a
          indústria óptica, proporcionando valiosas perspectivas de crescimento para todos os alunos
          integrantes.
        </p>

        <p className="text-xs sm:text-sm text-default max-w-2xl">
          Nossas palestras são conduzidas por renomados especialistas do ramo óptico com uma vasta
          experiência no mercado óptico. Nossos palestrantes compartilham conhecimentos sobre uma
          ampla gama de temas, abrangendo desde as mais recentes tendências do mercado óptico até
          estratégias eficazes de marketing, vendas e gestão de óticas, além de apresentar inovações
          tecnológicas impactantes.
        </p>
      </div>
    </section>
  );
}

function UnisalenSecondContent() {
  return (
    <section className="flex flex-col-reverse p-4 sm:p-0 sm:flex-row max-w-default mx-auto items-center justify-between mb-20 sm:mb-36">
      <div className="text-left">
        <h1 className="text-lg sm:text-2xl text-default font-bold mb-4 mt-4 sm:mt-0">UniSalen</h1>

        <p className="text-xs sm:text-sm text-default mb-4 max-w-2xl">
          Os workshops são voltados para o desenvolvimento de habilidades específicas para o mercado
          óptico. Alguns dos temas abordados são: atualização em lentes oftálmicas, diagnóstico e
          prescrição de óculos, venda consultiva, gestão financeira de óticas.
        </p>

        <p className="text-xs sm:text-sm text-default max-w-2xl">
          Participar de nossas palestras e workshops não apenas permite a atualização contínua sobre
          as tendências mais recentes, mas também oferece a chance de adquirir habilidades
          essenciais para se destacar no competitivo cenário da óptica. Este é um caminho valioso
          para alunos e profissionais que desejam se destacar entre os melhores do setor óptico.
          Junte-se a nós e impulsione sua carreira óptica!
        </p>

        <Button secondary className="mt-4">
          <Link href="/contact-us">Quero fazer parte</Link>
        </Button>
      </div>

      <Image
        loading="lazy"
        quality={90}
        className="rounded-md"
        src="/unisalen-image-2.jpg"
        alt="Duas mulheres sorrindo e cumprimentando um homem"
        width={640}
        height={445}
      />
    </section>
  );
}

export default Unisalen;
