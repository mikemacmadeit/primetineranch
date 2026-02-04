/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    // Standard color utility classes
    'bg-bronze',
    'text-bronze',
    'hover:bg-bronze',
    'hover:text-bronze',
    'bg-olive',
    'text-olive',
    'text-tan',
    'bg-tan',
    'text-charcoal',
    'bg-charcoal',
    'border-bronze',
    'hover:border-tan',
    'hover:bg-tan',
    'border-tan',
    'bg-darktan',
    'bg-gunmetal',
    'text-blood',

    // Arbitrary custom utilities used in StatCard.tsx
    'bg-[#1C1C1C]',
    'shadow-[0_10px_40px_rgba(0,0,0,0.7)]',
    'hover:shadow-[0_0_20px_rgba(198,144,101,0.3)]',
  ],
  theme: {
    extend: {
      colors: {
        bronze: '#8C6239',
        olive: '#4B5335',
        tan: '#D6C8A2',
        darktan: '#8B6F4A',
        charcoal: '#1B1B1B',
        gunmetal: '#2A2A2A',
        blood: '#C72C1C',
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    // aspect-ratio and line-clamp are in Tailwind v3 core; typography not used
  ],
};
