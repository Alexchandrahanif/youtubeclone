/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: '#191825',
        textDark2: '#D1D5DB',
        textDark: '#D1D5DB',
        bgLigth: '#E5E7EB',
        bgDark: '#001524',
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1024px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
}
