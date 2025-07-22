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
- **🔧 ESLint & Prettier** - Linting y formateo automático de código
- **🪝 Husky** - Git hooks para calidad de código automática
- **📦 Pnpm** - Gestor de paquetes rápido y eficiente
- **🐳 Docker** - Contenedorización completa para desarrollo y producción

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
# Desarrollo
pnpm dev          # Inicia el servidor de desarrollo
pnpm preview      # Vista previa de la build de producción

# Build y Deploy
pnpm build        # Construye la aplicación para producción
pnpm astro        # Comandos CLI de Astro

# Calidad de Código
pnpm lint         # Ejecuta ESLint para encontrar problemas
pnpm lint:fix     # Ejecuta ESLint y corrige problemas automáticamente
pnpm format       # Formatea el código con Prettier
pnpm format:check # Verifica el formato del código sin cambios
pnpm type-check   # Verifica tipos TypeScript sin generar archivos
pnpm check        # Verificación completa de Astro
```

## �️ Desarrollo

### Herramientas de Calidad de Código

Este template viene preconfigurado con herramientas profesionales para mantener la calidad del código:

#### ESLint

- **Configuración**: `eslint.config.js`
- **Plugins incluidos**:
  - `@typescript-eslint` - Reglas para TypeScript
  - `eslint-plugin-react` - Reglas para React
  - `eslint-plugin-react-hooks` - Reglas para React Hooks
  - `eslint-plugin-jsx-a11y` - Reglas de accesibilidad
  - `eslint-plugin-astro` - Reglas específicas para Astro

#### Prettier

- **Configuración**: `.prettierrc`
- **Plugins incluidos**:
  - `prettier-plugin-astro` - Formato para archivos .astro
  - `prettier-plugin-tailwindcss` - Ordenamiento de clases Tailwind

#### Husky + lint-staged

- **Pre-commit hooks** automáticos que ejecutan:
  - ESLint con corrección automática
  - Prettier para formateo
  - Solo en archivos modificados (gracias a lint-staged)

### Flujo de Desarrollo Recomendado

1. **Clona y configura**:

   ```bash
   git clone <tu-repo>
   cd astro-template-docker
   pnpm install
   ```

2. **Desarrolla con calidad**:

   ```bash
   pnpm dev          # Servidor de desarrollo
   pnpm lint         # Revisa tu código
   pnpm format       # Formatea antes de commit
   ```

3. **Los hooks automáticos** se encargan del resto al hacer commit

### Extensiones Recomendadas de VS Code

El archivo `.vscode/extensions.json` incluye extensiones recomendadas:

- **Astro** - Soporte completo para archivos .astro
- **Prettier** - Formateo automático
- **ESLint** - Linting en tiempo real
- **Tailwind CSS IntelliSense** - Autocompletado de clases
- **TypeScript Hero** - Herramientas adicionales de TypeScript

## �🔧 Configuración

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

| Tecnología     | Versión | Propósito                |
| -------------- | ------- | ------------------------ |
| Astro          | 5.12.1  | Framework principal      |
| React          | 19.1.0  | Componentes interactivos |
| TypeScript     | Latest  | Tipado estático          |
| Tailwind CSS   | 4.1.11  | Estilos                  |
| clsx           | 2.1.1   | Manejo de clases CSS     |
| tailwind-merge | 3.3.1   | Combinación de clases    |

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
