/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#444444',
        'light-gray': '#636363',
      },
      screens: {
        desktop: '1000px',
      },
    },
  },
  plugins: [],
};
