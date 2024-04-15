import Link from 'next/link';
import Button from '../components/Button';
import { MegafoneIcon, ChatIcon, IdeaIcon, PhoneIcon } from '../Icons';
import { twMerge } from 'tailwind-merge';

const CARDS = [
  {
    icon: MegafoneIcon,
    title: 'Mentores profissionais',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: ChatIcon,
    title: 'Métodos comprovados',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: IdeaIcon,
    title: 'Estratégias de alta qualidade',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: PhoneIcon,
    title: 'Dedicação ao seu negócio',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const About = () => {
  return (
    <section className="bg-[#F6F6F6] py-8 px-4">
      <div className="max-w-default mx-auto flex gap-14 sm:gap-24 items-center justify-around flex-col sm:flex-row">
        <div>
          <span className="text-subtitle mb-2 text-xs tracking-wider">SOBRE NÓS</span>

          <h2 className="text-default text-2xl font-bold mb-4 sm:mb-2">
            Salen Solutions - O Domínio sobre o marketing
          </h2>

          <p className="text-sm text-paragraph max-w-2xl">
            A Salen Solutions foi criada para atender às necessidades de proprietários,
            sócios e investidores que buscam prosperar no mercado em constante
            crescimento. Sabemos que gerir um negócio pode ser complexo, e é aí que
            entramos.
          </p>

          <p className="text-sm text-paragraph max-w-2xl mt-5 mb-6">
            O mercado nacional está em constante evolução, e nossa missão é colaborar com
            o crescimento, a estabilidade e a perenidade de seu empreendimento.
            Permita-nos apresentar: Salen Solutions, a sua parceira no marketing 360.
          </p>

          <Button className="bg-secondary">
            <Link
              target="_blank"
              className="flex items-center gap-2 text-white max-w-[148px] text-sm"
              href="/contact-us"
            >
              Entre em contato
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-16 w-full sm:w-auto">
          {CARDS.map((card, index) => (
            <div
              className={twMerge(
                'relative py-6 px-8 shadow-md bg-white max-w-full sm:max-w-72 rounded-md',
                index == 0 || index == 1 ? 'right-0 sm:right-10' : ''
              )}
              key={index}
            >
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <card.icon />
              </div>

              <h2 className="text-sm sm:text-base font-bold mt-4 mb-2 sm:my-4">
                {card.title}
              </h2>

              <p className="text-xs text-paragraph">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
