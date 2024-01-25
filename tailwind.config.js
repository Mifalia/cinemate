/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'primary-text': 'var(--primary-text)',
        'secondary-text': 'var(--secondary-text)',
        'primary-background': 'var(--primary-background)',
        'elevation-1': 'var(--elevation-1)',
        'elevation-2': 'var(--elevation-2)',
        'elevation-3': 'var(--elevation-3)',
        primary: 'var(--primary)',
      },
      fontFamily: {
        serif: 'CabinetGrotesk',
        sans: 'Outfit',
      },
    },
  },
  plugins: [],
};
