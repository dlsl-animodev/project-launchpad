/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f3d58d', // buff
        secondary: '#e59d2c', // marigold
        accent: '#2e4365', // police-blue
        background: '#ebddc5',
        foreground: '#141212'
      }
      ,
      fontFamily: {
        'inter': ['var(--font-inter)', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
        'bebas': ['var(--font-bebas)', 'sans-serif'],
        'pacifico': ['var(--font-pacifico)', 'cursive'],
        'rubik': ['var(--font-rubik)', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto']
      }
    }
  },
  plugins: []
};
