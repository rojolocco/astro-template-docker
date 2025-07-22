# 🚀 Astro Professional Template

Un template profesional y moderno para proyectos web con **Astro**, **React**, **TypeScript** y **Tailwind CSS**.

## ✨ Características

- **⚡ Astro 5.x** - Framework estático moderno para sitios web rápidos
- **⚛️ React 19** - Componentes interactivos con hidratación selectiva
- **📝 TypeScript** - Tipado estático completo para mejor desarrollo
- **🎨 Tailwind CSS 4** - Framework CSS utility-first
- **📱 Responsive Design** - Optimizado para todos los dispositivos
- **🔍 SEO Optimizado** - Meta tags completos y estructura semántica
- **♿ Accesible** - Componentes siguiendo las mejores prácticas de accesibilidad
- **🎯 Performance** - Carga rápida y optimizada

## 📁 Estructura del Proyecto

```plain
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/           # Componentes UI reutilizables
│   │   ├── react/        # Componentes React
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── constants/        # Configuraciones y constantes
│   ├── layouts/          # Layouts de páginas
│   ├── lib/             # Utilidades y helpers
│   ├── pages/           # Páginas del sitio
│   ├── styles/          # Estilos globales
│   └── types/           # Definiciones de TypeScript
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+
- pnpm (recomendado) o npm

### Instalación

1. **Clona el repositorio**

   ```bash
   git clone <tu-repositorio>
   cd astro-template-docker
   ```

2. **Instala las dependencias**

   ```bash
   pnpm install
   ```

3. **Inicia el servidor de desarrollo**

   ```bash
   pnpm dev
   ```

4. **Abre tu navegador**

   ```plain
   http://localhost:3000
   ```

## 📜 Scripts Disponibles

```bash
pnpm dev          # Inicia el servidor de desarrollo
pnpm build        # Construye la aplicación para producción
pnpm preview      # Vista previa de la build de producción
pnpm astro        # Comandos CLI de Astro
```

## 🔧 Configuración

### Personalizar el sitio

Edita el archivo `src/constants/site.ts` para configurar:

- Información del sitio (nombre, descripción, URL)
- Navegación principal y footer
- Redes sociales
- Configuración SEO

### Componentes incluidos

#### Componentes UI (`src/components/ui/`)

- **Button** - Botón con múltiples variantes
- **Card** - Tarjeta flexible para contenido
- **Input** - Campo de entrada con validación

#### Componentes React (`src/components/react/`)

- **Hero** - Sección hero personalizable
- **Features** - Grid de características
- **ContactForm** - Formulario de contacto funcional

### Utilidades

El archivo `src/lib/utils.ts` incluye:

- `cn()` - Combina clases de Tailwind CSS
- `formatDate()` - Formato de fechas
- `truncateText()` - Truncar texto
- `slugify()` - Crear slugs desde texto
- `debounce()` - Función debounce

## 🎨 Personalización de Estilos

### Tailwind CSS

Este template usa **Tailwind CSS 4** con configuración optimizada. Los estilos están en:

- `src/styles/global.css` - Estilos globales
- Configuración en `astro.config.mjs`

### Componentes

Todos los componentes usan clases de Tailwind CSS y pueden ser fácilmente personalizados.

## 📱 Páginas Incluidas

- **Inicio** (`/`) - Página principal con hero y características
- **Acerca** (`/about`) - Información sobre el proyecto
- **Contacto** (`/contact`) - Formulario de contacto

## 🔍 SEO

El template incluye:

- Meta tags Open Graph
- Twitter Cards
- Structured data
- Sitemap automático
- URLs canónicas

## 📦 Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Astro | 5.12.1 | Framework principal |
| React | 19.1.0 | Componentes interactivos |
| TypeScript | Latest | Tipado estático |
| Tailwind CSS | 4.1.11 | Estilos |
| clsx | 2.1.1 | Manejo de clases CSS |
| tailwind-merge | 3.3.1 | Combinación de clases |

## 🚀 Despliegue

### Netlify

```bash
pnpm build
# Subir la carpeta `dist` a Netlify
```

### Vercel

```bash
pnpm build
# Configurar Vercel para usar la carpeta `dist`
```

### Otros proveedores

```bash
pnpm build
# Subir la carpeta `dist` generada
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add some amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 💡 Inspiración

Este template está inspirado en las mejores prácticas de desarrollo web moderno y frameworks populares como Next.js, pero optimizado para el ecosistema de Astro.

---

⭐ Si este template te fue útil, no olvides darle una estrella en GitHub!
