import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
  secondary?: boolean;
};

const Button = ({ children, className = '', secondary = false }: Props) => {
  return (
    <button
      className={twMerge(
        'px-4 sm:px-6 py-[11px] text-sm bg-primary text-white font-semibold rounded-md hover:bg-primary-hover transition',
        secondary && 'bg-secondary hover:bg-secondary-hover',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
