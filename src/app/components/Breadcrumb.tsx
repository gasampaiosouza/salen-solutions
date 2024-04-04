import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type Props = {
  path: { label: string; link: string }[];
  className?: string;
};

const Breadcrumb = ({ path, className }: Props) => {
  return (
    <div className={twMerge("flex items-center gap-2 max-w-default m-auto", className)}>
      {path.map((item, index) => {
        const isLast = index === path.length - 1;

        return (
          <div key={index} className="flex items-center">
            <Link
              href={item.link}
              className={twMerge(
                'text-paragraph text-sm font-light hover:text-primary transition',
                isLast && 'font-bold'
              )}
            >
              {item.label}
            </Link>

            {!isLast && <div className="ml-2 inline select-none text-paragraph">&gt;</div>}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
