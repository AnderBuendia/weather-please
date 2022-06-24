/** @type {import('tailwindcss').Config} */

const colors = {
  300: 'var(--tw-bg-300)',
  DEFAULT: 'var(--tw-bg)',
  700: 'var(--tw-bg-700)',

  primary: {},
  white: {
    DEFAULT: 'var(--tw-white)',
  },
  black: {
    DEFAULT: 'var(--tw-black)',
  },
};

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors,
    fill: colors,
    stroke: colors,
  },
  darkMode: 'media',
  variants: {
    extend: {
      borderWidth: ['disabled'],
      borderColor: ['responsive', 'focus'],
      backgroundColor: ['responsive', 'hover', 'disabled'],
      cursor: ['disabled'],
      textColor: ['responsive', 'hover', 'disabled'],
      fill: ['dark'],
    },
  },
  plugins: [],
};
