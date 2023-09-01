/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#444444',
        'light-gray': '#868686',
      },
      screens: {
        desktop: '1200px',
      },
    },
  },
  plugins: [],
};
