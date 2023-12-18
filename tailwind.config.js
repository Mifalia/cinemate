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
        primary: 'var(--primary)',
      },
    },
  },
  plugins: [],
};
