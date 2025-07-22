# 🚀 Astro Professional Template

A professional and modern template for web projects with **Astro**, **React**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features

- **⚡ Astro 5.x** - Modern static framework for fast websites
- **⚛️ React 19** - Interactive components with selective hydration
- **📝 TypeScript** - Full static typing for better development
- **🎨 Tailwind CSS 4** - Utility-first CSS framework
- **📱 Responsive Design** - Optimized for all devices
- **🔍 SEO Optimized** - Complete meta tags and semantic structure
- **♿ Accessible** - Components following accessibility best practices
- **🎯 Performance** - Fast and optimized loading
- **🔧 ESLint & Prettier** - Automatic code linting and formatting
- **🪝 Husky** - Git hooks for automatic code quality
- **📦 Pnpm** - Fast and efficient package manager
- **🐳 Docker** - Complete containerization for development and production

## 📁 Project Structure

```plain
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   ├── react/        # React components
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── constants/        # Configurations and constants
│   ├── layouts/          # Page layouts
│   ├── lib/             # Utilities and helpers
│   ├── pages/           # Site pages
│   ├── styles/          # Global styles
│   └── types/           # TypeScript definitions
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repository>
   cd astro-template-docker
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**

   ```plain
   http://localhost:3000
   ```

## 📜 Available Scripts

```bash
# Development
pnpm dev          # Start the development server
pnpm preview      # Preview the production build

# Build and Deploy
pnpm build        # Build the application for production
pnpm astro        # Astro CLI commands

# Code Quality
pnpm lint         # Run ESLint to find problems
pnpm lint:fix     # Run ESLint and fix issues automatically
pnpm format       # Format code with Prettier
pnpm format:check # Verify code formatting without changes
pnpm type-check   # Check TypeScript types without generating files
pnpm check        # Complete Astro check
```

## ⚙️ Development

### Code Quality Tools

This template comes preconfigured with professional tools to maintain code quality:

#### ESLint

- **Configuration**: `eslint.config.js`
- **Included plugins**:
  - `@typescript-eslint` - TypeScript rules
  - `eslint-plugin-react` - React rules
  - `eslint-plugin-react-hooks` - React Hooks rules
  - `eslint-plugin-jsx-a11y` - Accessibility rules
  - `eslint-plugin-astro` - Astro-specific rules

#### Prettier

- **Configuration**: `.prettierrc`
- **Included plugins**:
  - `prettier-plugin-astro` - Formatting for .astro files
  - `prettier-plugin-tailwindcss` - Tailwind class sorting

#### Husky + lint-staged

- **Automatic pre-commit hooks** that run:
  - ESLint with automatic fixing
  - Prettier for formatting
  - Only on modified files (thanks to lint-staged)

### Recommended Development Workflow

1. **Clone and configure**:

   ```bash
   git clone <your-repo>
   cd astro-template-docker
   pnpm install
   ```

2. **Develop with quality**:

   ```bash
   pnpm dev          # Development server
   pnpm lint         # Review your code
   pnpm format       # Format before commit
   ```

3. **Automatic hooks** take care of the rest when committing

### Recommended VS Code Extensions

The `.vscode/extensions.json` file includes recommended extensions:

- **Astro** - Complete support for .astro files
- **Prettier** - Automatic formatting
- **ESLint** - Real-time linting
- **Tailwind CSS IntelliSense** - Class autocompletion
- **TypeScript Hero** - Additional TypeScript tools

## 🔧 Configuration

### Customize the site

Edit the `src/constants/site.ts` file to configure:

- Site information (name, description, URL)
- Main navigation and footer
- Social media
- SEO configuration

### Included Components

#### UI Components (`src/components/ui/`)

- **Button** - Button with multiple variants
- **Card** - Flexible content card
- **Input** - Input field with validation

#### React Components (`src/components/react/`)

- **Hero** - Customizable hero section
- **Features** - Features grid
- **ContactForm** - Functional contact form

### Utilities

The `src/lib/utils.ts` file includes:

- `cn()` - Combines Tailwind CSS classes
- `formatDate()` - Date formatting
- `truncateText()` - Text truncation
- `slugify()` - Create slugs from text
- `debounce()` - Debounce function

## 🎨 Style Customization

### Tailwind CSS

This template uses **Tailwind CSS 4** with optimized configuration. Styles are in:

- `src/styles/global.css` - Global styles
- Configuration in `astro.config.mjs`

### Components

All components use Tailwind CSS classes and can be easily customized.

## 📱 Included Pages

- **Home** (`/`) - Main page with hero and features
- **About** (`/about`) - Project information
- **Contact** (`/contact`) - Contact form

## 🔍 SEO

The template includes:

- Open Graph meta tags
- Twitter Cards
- Structured data
- Automatic sitemap
- Canonical URLs

## 📦 Technologies Used

| Technology     | Version | Purpose                |
| -------------- | ------- | ---------------------- |
| Astro          | 5.12.1  | Main framework         |
| React          | 19.1.0  | Interactive components |
| TypeScript     | Latest  | Static typing          |
| Tailwind CSS   | 4.1.11  | Styles                 |
| clsx           | 2.1.1   | CSS class management   |
| tailwind-merge | 3.3.1   | Class combination      |

## 🚀 Deployment

### Netlify

```bash
pnpm build
# Upload the `dist` folder to Netlify
```

### Vercel

```bash
pnpm build
# Configure Vercel to use the `dist` folder
```

### Other providers

```bash
pnpm build
# Upload the generated `dist` folder
```

## 🤝 Contribution

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is under the MIT License. See the `LICENSE` file for more details.

## 💡 Inspiration

This template is inspired by modern web development best practices and popular frameworks like Next.js, but optimized for the Astro ecosystem.

---

⭐ If this template was useful to you, don't forget to give it a star on GitHub!
