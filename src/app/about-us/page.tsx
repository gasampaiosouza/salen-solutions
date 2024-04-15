import Image from 'next/image';
import Breadcrumb from '../components/Breadcrumb';
import Link from 'next/link';
import { ArrowRight } from '../Icons';
import Mission from '../sections/Mission';

const CONSULTANCY_ITEMS = [
  {
    title: 'Assessoria',
    description:
      'Conte com nossa orientação especializada para tomar decisões informadas e estratégicas. Através da assessoria, ajudamos você a definir metas e a planejar o crescimento de seu negócio óptico.',
  },
  {
    title: 'Consultoria',
    description:
      'Nossa equipe de consultores experientes está pronta para desenvolver estratégias sob medida que se adaptam às necessidades exclusivas de sua empresa. Trabalhamos lado a lado com você para otimizar processos e maximizar a eficiência.',
  },
  {
    title: 'Marketing Digital',
    description:
      'Nossa equipe de consultores experientes está pronta para desenvolver estratégias sob medida que se adaptam às necessidades exclusivas de sua empresa. Trabalhamos lado a lado com você para otimizar processos e maximizar a eficiência.',
  },
];

const AboutUs = () => {
  return (
    <div className="mt-28 sm:mt-36 px-4 sm:px-0 sm:max-w-default sm:mx-auto">
      <Breadcrumb
        path={[
          { label: 'Home', link: '/' },
          { label: 'Sobre nós', link: '/about-us' },
        ]}
      />

      <section className="pt-8 sm:pt-24 pb-14 sm:pb-40 flex justify-center items-center">
        <h1 className="text-2xl text-center sm:text-5xl text-default max-w-[800px] font-bold">
          <strong className="bg-secondary py-1 px-2 text-white rounded-lg">
            Salen Solutions,
          </strong>{' '}
          a sua parceira no domínio sobre o marketing.
        </h1>
      </section>

      <section className="flex flex-col sm:flex-row justify-center gap-12 sm:gap-14">
        <div className="flex flex-col-reverse sm:flex-col">
          <div className="mt-12 sm:mt-0">
            <span className="text-subtitle mb-2 text-xs tracking-wider">SOBRE NÓS</span>

            <h2 className="text-default text-2xl font-bold mb-2">
              Salen Solutions - O Domínio sobre o marketing
            </h2>

            <p className="text-sm text-paragraph max-w-2xl">
              A Salen Solutions foi criada para atender às necessidades de proprietários,
              sócios e investidores que buscam prosperar no mercado em constante
              crescimento. Sabemos que gerir um negócio pode ser complexo, e é aí que
              entramos.
            </p>

            <p className="text-sm text-paragraph max-w-2xl mt-5">
              O mercado nacional está em constante evolução, e nossa missão é colaborar
              com o crescimento, a estabilidade e a perenidade de seu empreendimento.
              Permita-nos apresentar: Salen Solutions, a sua parceira no marketing 360.
            </p>
          </div>

          <Image
            quality={100}
            className="rounded-md sm:mt-10"
            src="/about-image-1.jpg"
            alt="Mulher digitando em um teclado de laptop"
            width={624}
            height={249}
          />
        </div>

        <div className='flex'>
          <Image
            quality={100}
            className="rounded-md"
            src="/about-image-2.jpg"
            alt="Duas mulheres felizes cumprimentando um homem"
            width={640}
            height={600}
          />
        </div>
      </section>

      <section className="my-32 sm:my-36 flex flex-col items-center justify-center">
        <h2 className="text-default text-2xl font-bold mb-4">
          Consultoria especializada
        </h2>

        <p className="text-sm text-paragraph max-w-6xl text-center mb-12">
          O mercado óptico é altamente competitivo, exigindo expertise para impulsionar as
          vendas. Na Salen Solutions, oferecemos serviços que capacitam empresas ópticas a
          criar estratégias de alta qualidade, aumentando o reconhecimento da marca e
          gerando receita de forma consistente.
        </p>

        <div className="flex flex-col sm:flex-row gap-20">
          {CONSULTANCY_ITEMS.map((item, index) => (
            <div className="text-center" key={index}>
              <h3 className="text-default text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-paragraph max-w-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex justify-center gap-12 sm:gap-14 mb-36 flex-col-reverse sm:flex-row">
        <div>
          {/* desktop positioned image */}
          <Image
            quality={100}
            className="rounded-md hidden sm:block"
            src="/about-image-3.jpg"
            alt="Uma mulher palestrando para duas pessoas"
            width={624}
            height={481}
          />

          {/* mobile positioned image */}
          <Image
            quality={100}
            className="rounded-md sm:hidden"
            src="/about-image-4.jpg"
            alt="Um homem sorrindo e cumprimentando duas pessoas"
            width={640}
            height={237}
          />

          <p className="text-sm text-paragraph max-w-2xl mt-12">
            Participar de nossas palestras e workshops não apenas permite a atualização
            contínua sobre as tendências mais recentes, mas também oferece a chance de
            adquirir habilidades essenciais para se destacar no competitivo cenário da
            óptica. Este é um caminho valioso para alunos e profissionais que desejam se
            destacar entre os melhores do setor óptico. Junte-se a nós e impulsione sua
            carreira óptica!
          </p>

          <Link
            href="/unisalen"
            target="_blank"
            className="group flex items-center gap-2 text-secondary border-b border-b-secondary max-w-[295px] hover:border-primary hover:text-primary text-sm pb-2 mt-5"
          >
            Ver palestras e workshops da UniSalen <ArrowRight />
          </Link>
        </div>

        <div>
          {/* mobile positioned image */}
          <Image
            quality={100}
            className="rounded-md sm:hidden mb-12"
            src="/about-image-3.jpg"
            alt="Uma mulher palestrando para duas pessoas"
            width={624}
            height={481}
          />

          <h2 className="text-default text-2xl font-bold mb-4">UniSalen</h2>

          <p className="text-sm text-paragraph max-w-2xl">
            Unisalen, foi a primeira universidade optical, criada com o objetivo de formar
            pessoas no ramo óptico, trazendo qualidade de vendas, atendimento e
            credibilidade. A Unisalen é conhecida por sua dedicação em enriquecer o
            conhecimento dos alunos e profissionais do setor óptico ao longo do ano, por
            meio de uma série de palestras e workshops envolventes. Estes eventos têm como
            principal objetivo a exploração de tópicos cruciais para a indústria óptica,
            proporcionando valiosas perspectivas de crescimento para todos os alunos
            integrantes.
          </p>

          <p className="text-sm text-paragraph max-w-2xl">
            Nossas palestras são conduzidas por renomados especialistas do ramo óptico com
            uma vasta experiência no mercado óptico. Nossos palestrantes compartilham
            conhecimentos sobre uma ampla gama de temas, abrangendo desde as mais recentes
            tendências do mercado óptico até estratégias eficazes de marketing, vendas e
            gestão de óticas, além de apresentar inovações tecnológicas impactantes.
          </p>

          <p className="text-sm text-paragraph max-w-2xl mt-5 sm:mb-10">
            Os workshops são voltados para o desenvolvimento de habilidades específicas
            para o mercado óptico. Alguns dos temas abordados são: atualização em lentes
            oftálmicas, diagnóstico e prescrição de óculos, venda consultiva, gestão
            financeira de óticas.
          </p>

          {/* desktop positioned image */}
          <Image
            quality={100}
            className="rounded-md hidden sm:block"
            src="/about-image-4.jpg"
            alt="Um homem sorrindo e cumprimentando duas pessoas"
            width={640}
            height={237}
          />
        </div>
      </section>

      <Mission isHomePage={false} />
    </div>
  );
};

export default AboutUs;
