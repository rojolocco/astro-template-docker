/**
 * Theme.js
 * Definición central del tema de la aplicación
 * Este archivo sirve como fuente de verdad para colores y fuentes
 */

export const COLORS = {
  primary: '#3B82F6', // Azul - Color principal de la marca
  secondary: '#10B981', // Verde - Color complementario
  accent: '#F59E0B', // Ámbar - Color de acento para llamadas a la acción
  text: '#1F2937', // Gris oscuro - Texto principal
  textLight: '#6B7280', // Gris medio - Texto secundario
  background: '#FFFFFF', // Blanco - Fondo principal
  backgroundAlt: '#F9FAFB', // Gris muy claro - Fondo alternativo
};

export const FONTS = {
  sans: 'Poppins, sans-serif', // Fuente principal para textos
  heading: 'Montserrat, sans-serif', // Fuente para encabezados
  mono: 'Fira Code, monospace', // Fuente para código
};

export const FONT_SIZES = {
  xs: '0.75rem', // 12px
  sm: '0.875rem', // 14px
  base: '1rem', // 16px
  lg: '1.125rem', // 18px
  xl: '1.25rem', // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem', // 48px
};

// Exportamos un objeto de tema unificado para facilitar su uso
export const THEME = {
  colors: COLORS,
  fonts: FONTS,
  fontSizes: FONT_SIZES,
};
