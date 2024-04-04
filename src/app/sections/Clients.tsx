import Link from 'next/link';
import Button from '../components/Button';
import { PinIcon } from '../Icons';
import { ClientsMap } from '../ClientsMap';

const Clients = () => {
  return (
    <section className="bg-[#F6F6F6] py-8">
      <div className="flex sm:gap-24 items-center justify-around flex-col sm:flex-row max-w-default mx-auto">
        <div className="px-4 sm:px-0">
          <span className="text-subtitle mb-2 text-xs tracking-wider">
            RELAÇÃO DE CONFIANÇA
          </span>

          <h2 className="text-default text-2xl font-bold mb-2">Clientes atendidos</h2>

          <p className="text-sm text-paragraph max-w-2xl">
            A Salen está presente em muitos lugares do Brasil, e está se expandindo cada
            vez mais. Confira alguns clientes que confiam na entrega de resultados da
            Salen Solutions
          </p>

          <div className="text-sm text-default max-w-2xl mt-5 mb-6 flex items-center gap-1">
            <PinIcon className="min-w-6 sm:min-w-fit" />{' '}
            <p>
              Nossa sede está localizada na{' '}
              <strong>Av. Paulista - Bela Vista, São Paulo - SP, 01310-000</strong>
            </p>
          </div>

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

        <div className='w-full sm:w-auto mt-12 sm:mt-0'>
          <ClientsMap />
        </div>
      </div>
    </section>
  );
};

export default Clients;
