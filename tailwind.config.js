/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'mint': '#b2f6e3',
        'grey-50': '#f7f7f7',
        'grey-100': '#efeeec',
        'grey-150': '#e9e9e9',
        'grey-200': '#bebebe',
        'grey-300': '#6a6a6a',
        'grey-400': '#282828',
        'grey-500': '#1f1f1f',
        'grey-600': '#1a1a1a',
        'grey-800': '#121212',
        'grey-900': '#111212',
      },
      fontFamily: {
        'sans-primary': ['"saans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      aspectRatio: {
        '20/9': '20 / 9',
        '4/3': '4 / 3',
      },
      height: {
        'screen-fix': '100vh',
      }
    },
  },
  plugins: [],
};