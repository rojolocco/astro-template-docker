// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:3000',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
    define: {
      global: 'globalThis',
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },

  // Configuración de desarrollo
  server: {
    port: 3000,
    host: true,
  },

  // Configuración de build
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto',
  },
});
