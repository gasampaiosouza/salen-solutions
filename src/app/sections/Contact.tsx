'use client';

import Link from 'next/link';
import { WhatsappIcon, MailIcon, ArrowRight } from '../Icons';
import { useForm } from 'react-hook-form';
import Button from '../components/Button';
import { twMerge } from 'tailwind-merge';

import axios from 'axios';

import { toast } from 'sonner';

const STEPS = [
  'Preencha a formulário ao lado com as suas informações de contato.',
  'Aguarde um de nossos especialistas entrar em contato.',
];

const Contact = () => {
  return (
    <section className="flex gap-10 sm:gap-24 mt-10 px-4 sm:px-0 sm:mt-16 sm:pt-12 pb-16 sm:pb-36 justify-around flex-col md:flex-row max-w-default mx-auto relative">
      <div>
        <span className="text-subtitle mb-2 text-xs tracking-wider">CONTATO</span>

        <h2 className="text-default text-2xl font-bold mb-2">Fale Conosco</h2>

        <p className="text-sm text-paragraph max-w-2xl">
          Alguma dúvida? Deseja fechar com a gente? Entre em contato por um desses meios e
          fale com um de nossos especialistas.
        </p>

        {STEPS.map((step, index) => (
          <div className="flex gap-2 sm:gap-4 items-center mt-8" key={index}>
            <div className="min-w-12 min-h-12 max-w-12 max-h-12 text-3xl sm:text-4xl rounded-full bg-[--index-background] flex justify-center items-center text-[--index-color] [text-shadow:_-2px_2px_0_var(--index-shadow)]">
              {index + 1}
            </div>

            <p className="text-sm text-paragraph">{step}</p>
          </div>
        ))}

        <ContactOptions className="hidden sm:block" />
      </div>

      <ContactForm />

      <ContactOptions className="sm:hidden" />
    </section>
  );
};

function ContactOptions(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div {...props}>
      <p className="text-paragraph text-sm mt-0 sm:mt-16 mb-6">
        Se preferir, você pode nos contatar através desses outros meios:
      </p>

      <div className="flex gap-6 flex-col sm:flex-row">
        <div className="flex gap-4">
          <div className="min-w-10 min-h-10 max-w-10 max-h-10 bg-[--gray-icons] rounded-full flex items-center justify-center">
            <WhatsappIcon />
          </div>

          <div>
            <h3 className="text-default font-semibold text-base mb-2">WhatsApp</h3>

            <p className="text-paragraph text-xs mb-4 max-w-64">
              Envie sua mensagem para nosso WhatsApp pelo número{' '}
              <strong>(11) 96199-1011</strong>
            </p>

            <Link
              className="group flex items-center gap-2 text-[--contact-color] border-b border-b-[--contact-color] max-w-[148px] text-sm pb-2 hover:text-primary hover:border-primary transition"
              target="_blank"
              href="https://wa.me/11961991011"
            >
              Entrar em contato <ArrowRight />
            </Link>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="min-w-10 min-h-10 max-w-10 max-h-10 bg-[--gray-icons] rounded-full flex items-center justify-center">
            <MailIcon />
          </div>

          <div>
            <h3 className="text-default font-semibold text-base mb-2">E-mail</h3>

            <p className="text-paragraph text-xs mb-4 max-w-64">
              Envie sua mensagem para o nosso e-mail{' '}
              <strong>diretoria@salensolutions.com.br</strong>
            </p>

            <Link
              className="group flex items-center gap-2 text-[--contact-color] border-b border-b-[--contact-color] max-w-[148px] hover:border-primary hover:text-primary text-sm pb-2"
              target="_blank"
              href="mailto:diretoria@salensolutions.com.br"
            >
              Entrar em contato <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

type Inputs = {
  name: string;
  email: string;
  phone: string;
  company: string;
  segment: string;
};

const FIELDS = [
  { name: 'name', label: 'Nome completo', placeholder: 'Jane Doe' },
  { name: 'email', label: 'E-mail corporativo', placeholder: 'janedoe@email.com' },
  { name: 'phone', label: 'Número para contato', placeholder: '00 00000000' },
  { name: 'company', label: 'Empresa', placeholder: "Jane Doe's" },
];

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const sendFormData = async (inputs: Inputs) => {
    const PUBLIC_KEY = '23aoUoi7j2VWmWXde';

    const data = {
      service_id: 'default_service',
      template_id: 'template_ibevyxi',
      user_id: PUBLIC_KEY,
      template_params: inputs,
    };

    try {
      await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);

      toast.success('Formulário enviado com sucesso!');
    } catch (error) {
      toast.error('Houve um erro ao enviar o formulário. Tente novamente mais tarde.');
    }
  };

  return (
    <form
      className="bg-[--form-background] rounded-md px-6 py-8 min-w-full sm:min-w-[576px]"
      onSubmit={handleSubmit(sendFormData)}
    >
      {FIELDS.map((field) => (
        <div key={field.name}>
          <label className="block mb-2 text-xs text-white" htmlFor="name">
            {field.label}
          </label>
          <input
            {...register(field.name as keyof Inputs, { required: true })}
            placeholder={field.placeholder}
            className={twMerge(
              'px-4 py-2 w-full rounded-md text-[--input-color] bg-white text-sm outline-0 mb-6',
              errors[field.name as keyof Inputs] && 'border-2 border-red-500'
            )}
          />
        </div>
      ))}

      <div>
        <label className="block mb-2 text-xs text-white" htmlFor="name">
          Segmento
        </label>
        <select
          defaultValue="placeholder"
          className={twMerge(
            'px-4 py-2 w-full rounded-md text-[--input-color] bg-white text-sm outline-0 mb-6',
            errors.segment && 'border-2 border-red-500'
          )}
          {...register('segment', { required: true })}
        >
          <option value="placeholder" disabled>
            Qual o segmento da sua empresa?
          </option>
          <option value="Serviço">Serviço</option>
          <option value="Varejo">Varejo</option>
          <option value="Indústria">Indústria</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Food Service">Food Service</option>
          <option value="Educação">Educação</option>
          <option value="Imobiliária">Imobiliária</option>
          <option value="SAAS">SAAS</option>
          <option value="Finanças">Finanças</option>
          <option value="Franquia / Franchising">Franquia</option>
          <option value="Telecom">Telecom</option>
          <option value="Energia Solar">Energia Solar</option>
          <option value="Turismo">Turismo</option>
          <option value="Outro">Outro</option>
        </select>
      </div>

      <Button className="w-full mt-2">Entre em contato</Button>
    </form>
  );
}

export default Contact;
