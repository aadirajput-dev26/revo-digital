# Workspace and Toolchain Survey Report

**Agent**: `explorer_survey_3`  
**Date**: 2026-11-05  
**Target Application**: RevoDigital Marketing Website (Design preview: https://app.banani.co/preview/f0cDVHCexB-k)  
**Root Path**: `c:\Users\Aadityaraj\PROJECTS\RevoDigital`

---

## Executive Summary

The workspace is an uninitialized greenfield repository containing solely the `.agents/` orchestration directory. The local host environment runs Node.js `v22.17.1` and `npm 10.9.2` on Windows 11 (win32 x64).

Crucially, empirical testing revealed that standard `npx create-next-app` commands abort with a fatal conflict if `.agents/` is present in the target directory, and by default attempt to emit an `AGENTS.md` file (which violates agent runtime isolation rules).

A direct-configuration Greenfield setup using **Next.js 16 (App Router + Turbopack)**, **React 19**, **Tailwind CSS v4 (`@tailwindcss/postcss`)**, and **`lucide-react`** was empirically benchmarked in a sandbox: it completed installation in 46 seconds (50 lightweight packages, 0 vulnerabilities) and built in 4.6 seconds with full static page generation. The extracted preview CSS confirms native Tailwind CSS v4 token compatibility.

---

## 1. Workspace Inventory

### Existing Files and Folders
Inspection via PowerShell `Get-ChildItem -Force -Path c:\Users\Aadityaraj\PROJECTS\RevoDigital` revealed:
- **Folders present**:
  - `.agents/` (contains multi-agent teamwork metadata: `orchestrator`, `sentinel`, `interviewer`, `spec_miner_survey_1`, `spec_miner_survey_2`, `explorer_survey_3`, `ORIGINAL_REQUEST.md`).
- **Files present**: None in root.
  - No `package.json`
  - No `tsconfig.json`
  - No `next.config.js` / `next.config.ts`
  - No `tailwind.config.*` / `postcss.config.*`
  - No `.env` / `.env.local`
  - No `.gitignore`
  - No `src/` or `app/` directories

---

## 2. Toolchain and Environment Analysis

| Tool | Version / Status | Notes |
|------|------------------|-------|
| **OS** | Windows 11 (`win32 x64`) | PowerShell 5.1 / Core runtime |
| **Node.js** | `v22.17.1` | Modern LTS / Current Node 22 |
| **npm** | `10.9.2` | Primary package manager |
| **npx** | `10.9.2` | Available |
| **pnpm** | `10.30.3` | Installed and available |
| **yarn** | Not Installed | Command `yarn` returns `CommandNotFoundException` |
| **Git** | Installed, but repo uninitialized | `git status` reports `fatal: not a git repository` |

---

## 3. Toolchain Quirks & Critical Hazards

### Hazard 1: `create-next-app` Rejects `.agents/`
When running `npx create-next-app@latest .` in a folder that contains `.agents/`:
```text
The directory RevoDigital contains files that could conflict:
  .agents/
Either try using a new directory name, or remove the files listed above.
```
Because `.agents/` contains all active teamwork state and cannot be removed, `create-next-app` cannot be executed directly in the project root.

### Hazard 2: `create-next-app` Emits `AGENTS.md` by Default
In recent versions of `create-next-app`, the option `--agents-md` is enabled by default. In our multi-agent architecture:
> **"NEVER name a file AGENTS.md or GEMINI.md — those filenames are loaded as always-on agent rules."**
If `AGENTS.md` is emitted in the root directory, it will immediately pollute all agent prompts and system instructions across the entire team.

### Hazard 3: Heavy Package Overhead in Default CNA Scaffolding
Running `create-next-app` installs 360+ packages taking 3+ minutes and introduces deprecated ESLint dependencies. In contrast, direct configuration installs only 50 packages in 46 seconds with **0 vulnerabilities**.

---

## 4. Design Preview Alignment (Extracted Spec)

Analysis of extracted assets from `spec_miner_survey_1` shows:
- **Tailwind Version in Preview**: `tailwindcss v4.3.3` (header: `/*! tailwindcss v4.3.3 | MIT License */`).
- **Design Tokens**: Defined in `@layer theme` / `@theme` with custom properties:
  - `--color-navy: #14213D;`
  - `--color-navy-light: #1E2F57;`
  - `--color-accent: #FF8A3D;`
  - `--color-accent-foreground: #FFFFFF;`
  - `--color-border: #E6EAF2;`
  - `--color-muted: #EEF2F9;`
  - `--color-soft: #F7F9FC;`
  - `--color-ice: #EAF1FE;`
  - `--color-skyline: #D8E6FF;`
  - `--color-success: #16A34A;`
  - `--color-slate-text: #526078;`
- **Typography**:
  - Headings: `Space Grotesk` (weights 500, 600, 700)
  - Body: `Inter` (weights 400, 500, 600)
- **Icons Extracted**:
  - `MessageCircle` (WhatsApp trigger)
  - `ArrowRight` (CTA buttons)
  - `ArrowDownRight` (Customization cards)
  - `Nfc` (Smart business card feature)
  - `Minus` (Accordion toggle)
  - `Presentation` (Digital showroom / showcase)
  All of these are available in `lucide-react`.

---

## 5. Recommended Greenfield Blueprint

### A. Recommended `package.json`
```json
{
  "name": "revodigital",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "lucide-react": "^1.69.0",
    "next": "16.4.5",
    "react": "19.3.0",
    "react-dom": "19.3.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "postcss": "^8.0.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.0.0"
  }
}
```

### B. Recommended `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
```

### C. Recommended `next.config.ts`
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
```

### D. Recommended `postcss.config.mjs`
```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

### E. Recommended `src/app/globals.css`
```css
@import "tailwindcss";

@theme {
  --color-background: #FFFFFF;
  --color-border: #E6EAF2;
  --color-primary: #2563EB;
  --color-primary-foreground: #FFFFFF;
  --color-muted: #EEF2F9;
  --color-navy: #14213D;
  --color-navy-light: #1E2F57;
  --color-accent: #FF8A3D;
  --color-accent-foreground: #FFFFFF;
  --color-soft: #F7F9FC;
  --color-ice: #EAF1FE;
  --color-skyline: #D8E6FF;
  --color-success: #16A34A;
  --color-slate-text: #526078;

  --font-headings: var(--font-space-grotesk), "Space Grotesk", sans-serif;
  --font-body: var(--font-inter), "Inter", sans-serif;
}
```

### F. Recommended `src/app/layout.tsx`
```tsx
import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RevoDigital — Make Every Connection Count",
  description: "Smart NFC cards and digital networking solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body bg-background text-navy antialiased">
        {children}
      </body>
    </html>
  );
}
```

### G. Recommended `.gitignore`
```gitignore
# Dependencies
/node_modules
/.pnp
.pnp.js

# Testing
/coverage

# Next.js build output
/.next/
/out/

# Production
/build

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env*.local

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts
```

---

## 6. Recommended Execution Strategy for Implementers

1. **Step 1 (Scaffolding)**:
   Create the configuration files (`package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `.gitignore`) and directories `src/app`, `src/components`, `public`.
   *Do NOT run `create-next-app` directly in the root directory.*
2. **Step 2 (Installation)**:
   Run `npm install`. This takes < 50 seconds on this machine and installs 50 packages with 0 vulnerabilities.
3. **Step 3 (Baseline Build Gate)**:
   Run `npm run build` to verify Next.js 16 + React 19 + Tailwind v4 + Google Fonts compiles cleanly.
4. **Step 4 (Component Construction)**:
   Assemble modular components (`Navbar`, `Hero`, `ProductsSection`, `HowAiWho`, `GalleryCustom`, `FaqFooter`) in `src/components/` using the verified design tokens.
