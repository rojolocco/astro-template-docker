/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Tres colores principales
        primary: '#FFFFFF', // Blanco
        secondary: '#2563EB', // Azul
        accent: '#000000', // Negro
        text: '#000000', // Texto negro
        background: '#FFFFFF', // Fondo blanco
      },
      fontFamily: {
        // Tres fuentes principales
        sans: ['Poppins', 'sans-serif'], // Para texto general
        heading: ['Montserrat', 'sans-serif'], // Para encabezados
        mono: ['Fira Code', 'monospace'], // Para código
      },
    },
  },
  plugins: [],
};
