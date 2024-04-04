'use client';

import { useState } from 'react';
import { SingleArrowIcon } from '../Icons';
import { twMerge } from 'tailwind-merge';

const ITEMS = [
  {
    question: 'O que é a Salen Solutions?',
    answer:
      'O mercado óptico nacional está em constante evolução, e nossa missão é colaborar com o crescimento, a estabilidade e a perenidade de seu empreendimento. Permita-nos apresentar: Salen Solutions, a sua parceira no domínio das óticas.',
  },
  {
    question: 'Como posso entrar em contato?',
    answer:
      'O mercado óptico nacional está em constante evolução, e nossa missão é colaborar com o crescimento, a estabilidade e a perenidade de seu empreendimento. Permita-nos apresentar: Salen Solutions, a sua parceira no domínio das óticas.',
  },
  {
    question: 'Como faço para participar das palestras e workshops?',
    answer:
      'O mercado óptico nacional está em constante evolução, e nossa missão é colaborar com o crescimento, a estabilidade e a perenidade de seu empreendimento. Permita-nos apresentar: Salen Solutions, a sua parceira no domínio das óticas.',
  },
  {
    question: 'Como funciona a gestão de tráfego pago da Salen Solutions?',
    answer:
      'O mercado óptico nacional está em constante evolução, e nossa missão é colaborar com o crescimento, a estabilidade e a perenidade de seu empreendimento. Permita-nos apresentar: Salen Solutions, a sua parceira no domínio das óticas.',
  },
];

const Faq = () => {
  return (
    <section className="flex gap-10 sm:justify-between px-4 sm:px-0 mb-36 justify-center flex-col sm:flex-row max-w-default mx-auto">
      <div className="max-w-2xl">
        <h2 className="text-default text-2xl font-bold mb-2">Dúvidas frequentes</h2>

        <p className="text-sm text-paragraph m-auto sm:mb-4">
          Ainda ficou alguma dúvidas? Dê uma olhada nas perguntas frequentes sobre a Salen
          Solutions
        </p>
      </div>

      <div className="divide-y w-full max-w-2xl">
        {ITEMS.map((item, index) => {
          return <FAQItem item={item} key={index} />;
        })}
      </div>
    </section>
  );
};

function FAQItem({ item }: { item: (typeof ITEMS)[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-4 first:border-t last:!border-b">
      <div
        onClick={() => setIsOpen((open) => !open)}
        className="flex justify-between items-center select-none"
      >
        <h3 className="text-sm font-medium mr-2">{item.question}</h3>

        <SingleArrowIcon className={twMerge('rotate-180', isOpen && 'rotate-0')} />
      </div>

      <p className={twMerge('text-xs text-paragraph mt-2 hidden', isOpen && 'block')}>
        {item.answer}
      </p>
    </div>
  );
}

export default Faq;
