/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#000000',
        light: '#ffffff',
        // Escala oficial de CONRA FBA basada en #FF8D0F
        'brand-50': '#fff8f1',
        'brand-100': '#ffefd6',
        'brand-200': '#ffddaa',
        'brand-300': '#ffc577',
        'brand-400': '#ffa642',
        'brand-500': '#FF8D0F', // Naranja principal de la marca
        'brand-600': '#e67a00', // Hover para botones
        'brand-700': '#cc6400', 
        'brand-800': '#a65104',
        'brand-900': '#85430b',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}