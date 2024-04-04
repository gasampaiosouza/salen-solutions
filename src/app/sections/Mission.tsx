import { HalfCircle, LampIcon } from '../Icons';

const CARDS = [
  {
    icon: LampIcon,
    title: 'Missão',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non augue sed magna euismod bibendum. Praesent porttitor diam sit amet egestas placerat. Nulla quis eleifend odio. Sed ultricies libero sed diam interdum, a efficitur turpis pharetra. Fusce vehicula congue eros.',
  },
  {
    icon: LampIcon,
    title: 'Visão',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non augue sed magna euismod bibendum. Praesent porttitor diam sit amet egestas placerat. Nulla quis eleifend odio. Sed ultricies libero sed diam interdum, a efficitur turpis pharetra. Fusce vehicula congue eros.',
  },
  {
    icon: LampIcon,
    title: 'Valores',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non augue sed magna euismod bibendum. Praesent porttitor diam sit amet egestas placerat. Nulla quis eleifend odio. Sed ultricies libero sed diam interdum, a efficitur turpis pharetra. Fusce vehicula congue eros.',
  },
];

type Props = {
  isHomePage?: boolean;
};

const Mission = ({ isHomePage = true }: Props) => {
  return (
    <section className="my-32 sm:my-36 text-center relative">
      {isHomePage && <HalfCircle className="absolute left-0 top-28 sm:top-0" />}

      <h2 className="text-default text-2xl font-bold mb-2">
        Nossa missão, visão e valores
      </h2>

      <p className="text-sm text-paragraph max-w-2xl m-auto mb-12">
        A missão, visão e valores também são fundamentais na definição da cultura
        organizacional.
      </p>

      <div className="flex justify-center items-center gap-2 sm:justify-between flex-col sm:flex-row max-w-default mx-auto">
        {CARDS.map((card, index) => (
          <div
            key={index}
            className="px-8 py-6 shadow-md text-left bg-white z-10 rounded-md"
          >
            <div className="w-12 h-12 text-primary rounded-full bg-[#E8EBFB] flex items-center justify-center">
              <card.icon />
            </div>

            <h3 className="text-lg font-bold mt-4 text-default">{card.title}</h3>
            <p className="text-paragraph text-sm max-w-xs mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mission;
