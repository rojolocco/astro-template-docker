/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Tres colores principales
        'primary': '#3B82F6',   // Azul
        'secondary': '#10B981', // Verde
        'accent': '#F59E0B',    // Ámbar
        'text': '#1F2937',      // Texto oscuro
        'background': '#FFFFFF' // Fondo blanco
      },
      fontFamily: {
        // Tres fuentes principales
        'sans': ['Poppins', 'sans-serif'],      // Para texto general
        'heading': ['Montserrat', 'sans-serif'], // Para encabezados
        'mono': ['Fira Code', 'monospace']      // Para código
      },
    },
  },
  plugins: [],
}
