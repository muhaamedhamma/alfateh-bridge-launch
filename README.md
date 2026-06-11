# AL FATEH — Food Distribution Hub Website

![TypeScript](https://img.shields.io/badge/TypeScript-98%25-3178c6)
![Deployment](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Workers-F38020)
![React](https://img.shields.io/badge/React-19-61dafb)

AL FATEH is the strategic distribution engine for food brands in Côte d'Ivoire. This repository contains the official website built with modern web technologies.

**Live Site**: [alfateh-bridge-launch.lovable.app](https://alfateh-bridge-launch.lovable.app)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Development](#development)
- [Building](#building)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## 🎯 Overview

AL FATEH connects industrial brands, factories, and retailers across Côte d'Ivoire through a structured distribution network. This website serves as the digital hub for:

- **Distributors & Retailers**: Find reliable supply, competitive pricing, and 24/7 support
- **Industrial Brands**: Launch and scale on the Ivorian market with expert support
- **Partnerships**: Explore collaboration opportunities with 40+ years of market expertise

### Key Features

✅ Bilingual (French/English)  
✅ Full-stack reactive routing  
✅ Responsive design with Tailwind CSS  
✅ Contact forms with validation  
✅ SEO-optimized pages  
✅ Accessible UI components (Radix UI)  
✅ Cloudflare Workers deployment ready

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend Framework** | React 19 + TanStack Start |
| **Routing** | TanStack Router (file-based) |
| **Styling** | Tailwind CSS 4 + Framer Motion |
| **UI Components** | Radix UI (headless) |
| **Forms** | React Hook Form + Zod |
| **Build Tool** | Vite 7 |
| **Deployment** | Cloudflare Workers |
| **Package Manager** | Bun |
| **Language** | TypeScript 5.8 |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18 or **Bun** ≥ 1.0
- **Git**
- Cloudflare account (for deployment)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/muhaamedhamma/alfateh-bridge-launch.git
   cd alfateh-bridge-launch
   ```

2. **Install dependencies**

   ```bash
   bun install
   # or npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   cp .dev.vars .dev.vars  # For Cloudflare local dev
   ```

   Edit `.env.local` with your configuration.

4. **Start development server**

   ```bash
   bun dev
   # or npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
alfateh-bridge-launch/
├── src/
│   ├── routes/              # Page routes (file-based routing)
│   │   ├── __root.tsx       # Root layout
│   │   ├── index.tsx        # Home page
│   │   ├── about.tsx        # About us
│   │   ├── services.tsx     # Services
│   │   ├── partenaires.tsx  # Partners
│   │   ├── reseau.tsx       # Network coverage
│   │   ├── contact.tsx      # Contact form
│   │   └── sitemap.xml.ts   # SEO sitemap
│   │
│   ├── components/
│   │   ├── site/            # Page components
│   │   └── ui/              # Reusable UI components
│   │
│   ├── i18n/
│   │   ├── dictionary.ts    # i18n translations (FR/EN)
│   │   └── I18nProvider.tsx # i18n context
│   │
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   │
│   ├── styles.css           # Global styles + Tailwind
│   ├── router.tsx           # Router configuration
│   └── entry-server.tsx     # Server entry point
│
├── public/                  # Static assets
│   └── assets/              # Images (to be added)
│
├── vite.config.ts           # Vite configuration
├── wrangler.jsonc           # Cloudflare Workers config
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🔧 Environment Variables

### Required for Production

```env
# Application
VITE_APP_URL=https://alfateh.ci

# Email Service (for contact form submission)
VITE_SENDGRID_API_KEY=SG.your_api_key

# Cloudflare
CF_ACCOUNT_ID=your_account_id
CF_API_TOKEN=your_api_token
CF_ZONE_ID=your_zone_id
```

### Optional

```env
# Analytics
VITE_GOOGLE_ANALYTICS_ID=G_XXXXXXXXXXXX

# Monitoring
SENTRY_DSN=https://your_sentry_dsn
```

See `.env.example` for the full template.

---

## 💻 Development

### Available Scripts

```bash
# Development server with HMR
bun dev

# Type check
bun run type-check

# Lint code
bun run lint

# Format code
bun run format

# Build for production
bun run build

# Build development version
bun run build:dev

# Preview production build
bun run preview
```

### Code Quality

```bash
# Run ESLint
bun run lint

# Format with Prettier
bun run format
```

### Adding New Pages

Pages use file-based routing. Create a new file in `src/routes/`:

```typescript
// src/routes/my-page.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/my-page")({
  head: () => ({
    meta: [
      { title: "My Page — AL FATEH" },
      { name: "description", content: "Page description" },
    ],
  }),
  component: MyPage,
});

function MyPage() {
  return <div>My Page Content</div>;
}
```

### Adding Translations

All text is managed in `src/i18n/dictionary.ts`. Add your strings there:

```typescript
const fr = {
  myPage: {
    title: "Mon Titre",
    description: "Ma description",
  },
};

const en = {
  myPage: {
    title: "My Title",
    description: "My description",
  },
};
```

Access in components:

```typescript
import { useT } from "@/i18n/I18nProvider";

function MyComponent() {
  const t = useT();
  return <h1>{t.myPage.title}</h1>;
}
```

---

## 🏗️ Building

### Development Build

```bash
bun run build:dev
```

Output: `dist/` folder (not optimized)

### Production Build

```bash
bun run build
```

This:
- Bundles with Vite
- Optimizes for Cloudflare Workers
- Generates static assets
- Creates source maps

---

## 🚀 Deployment

### Prerequisites

1. **Cloudflare Account** with Workers enabled
2. **API Token** with Workers and Zones permissions
3. **Custom Domain** (optional but recommended)

### Deploy to Cloudflare Workers

#### Step 1: Authenticate with Cloudflare

```bash
bun wrangler login
# Approve in browser
```

#### Step 2: Configure `wrangler.jsonc`

Update with your account info:

```jsonc
{
  "name": "alfateh-app",
  "account_id": "your_account_id",
  "main": "@tanstack/react-start/server-entry",
  "compatibility_date": "2025-09-24",
  "compatibility_flags": ["nodejs_compat"],
  // Add custom domain:
  "routes": [
    { "pattern": "alfateh.ci/*", "zone_name": "alfateh.ci" }
  ]
}
```

#### Step 3: Deploy

```bash
bun wrangler deploy
```

Visit your domain to verify.

### Environment Variables on Cloudflare

Set variables via Wrangler:

```bash
bun wrangler secret put SENDGRID_API_KEY
# Paste your key when prompted
```

Or in Cloudflare Dashboard:
1. Workers → your-app → Settings
2. Add variable under "Environment"

### Continuous Deployment (GitHub Actions)

Add this workflow (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to Cloudflare

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: bun run build
      - name: Deploy
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CF_API_TOKEN }}
        run: bunx wrangler deploy
```

---

## 🤝 Contributing

### Fork & Clone

```bash
git clone https://github.com/YOUR_USERNAME/alfateh-bridge-launch.git
cd alfateh-bridge-launch
```

### Create Feature Branch

```bash
git checkout -b feature/my-feature
```

### Commit & Push

```bash
git add .
git commit -m "feat: add my feature"
git push origin feature/my-feature
```

### Submit Pull Request

Create a PR to `main` with:
- Clear description
- Screenshots if UI changes
- Tests if applicable

---

## 📞 Support & Contact

- **Website**: [alfateh.ci](https://alfateh.ci)
- **Email**: contact@alfateh.ci
- **Phone**: +225 27 00 00 00 00
- **Location**: Abidjan, Côte d'Ivoire

---

## 📄 License

This project is private and proprietary to AL FATEH.

---

## 🔗 Quick Links

- [TanStack Router Docs](https://tanstack.com/router/latest)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Cloudflare Workers](https://workers.cloudflare.com)
- [React Hook Form](https://react-hook-form.com)

---

**Last updated**: June 2026  
**Maintained by**: AL FATEH Development Team
