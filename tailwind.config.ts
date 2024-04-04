import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-hover': 'var(--primary-hover)',

        secondary: 'var(--secondary)',
        'secondary-hover': 'var(--secondary-hover)',

        subtitle: 'var(--subtitle)',
        default: 'var(--default)',
        paragraph: 'var(--paragraph)',

        background: 'var(--background)',
        'header-active-color': 'var(--header-active-color)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: { default: 'var(--default-container-size)' },
      minWidth: { default: 'var(--default-container-size)' },
    },
  },
  plugins: [],
};
export default config;
