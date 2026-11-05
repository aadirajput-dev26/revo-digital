# Dispatch: worker_m1_1 (Milestone 1: Foundation & Design System Setup)

## MANDATORY INTEGRITY WARNING
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Objective
Implement Milestone 1 (Foundation & Design System Setup) for RevoDigital:
1. Scaffold clean Greenfield Next.js (App Router) + TypeScript + Tailwind CSS in workspace root `c:\Users\Aadityaraj\PROJECTS\RevoDigital`.
   - Use direct file creation for `package.json`, `tsconfig.json`, `postcss.config.mjs`, `next.config.ts` (DO NOT run `create-next-app` as `.agents` already exists in root).
   - Use `next@latest`, `react@latest`, `react-dom@latest`, `@tailwindcss/postcss`, `tailwindcss`, `lucide-react`, `clsx`, `tailwind-merge`.
2. Configure Tailwind CSS v4 in `src/app/globals.css` with `@theme` block matching all exact extracted color tokens:
   - `--color-background`: `#FFFFFF`
   - `--color-foreground`: `#14213D`
   - `--color-navy`: `#14213D`
   - `--color-navy-light`: `#1E2F57`
   - `--color-primary`: `#2563EB`
   - `--color-accent`: `#FF8A3D`
   - `--color-soft`: `#F7F9FC`
   - `--color-ice`: `#EAF1FE`
   - `--color-skyline`: `#D8E6FF`
   - `--color-border`: `#E6EAF2`
   - `--color-input`: `#F7F9FC`
   - `--color-slate-text`: `#526078`
   - `--color-success`: `#16A34A`
   - `--color-whatsapp`: `#25D366`
3. Configure `src/app/layout.tsx` with Google Fonts `Space Grotesk` (`--font-headings`) and `Inter` (`--font-body`), with proper metadata and viewport.
4. Implement `src/types/index.ts` with all types from `spec_miner_survey_2/component_architecture.md`.
5. Implement `src/data/content.ts` with all text copy, product items, gallery items, FAQ items, and sectors from `spec_miner_survey_1/design_tokens_and_content.md`.
6. Implement `src/context/EnquiryContext.tsx` with provider and hook for selected product variant and category.
7. Create baseline `src/app/page.tsx` rendering a placeholder with the design system tokens.
8. Run `npm install` and verify `npm run build` succeeds cleanly with exit code 0.

## Inputs
- `c:\Users\Aadityaraj\PROJECTS\RevoDigital\.agents\teamwork\ORIGINAL_REQUEST.md`
- `c:\Users\Aadityaraj\PROJECTS\RevoDigital\.agents\teamwork\PROJECT.md`
- `c:\Users\Aadityaraj\PROJECTS\RevoDigital\.agents\teamwork\spec_miner_survey_1\design_tokens_and_content.md`
- `c:\Users\Aadityaraj\PROJECTS\RevoDigital\.agents\teamwork\spec_miner_survey_2\component_architecture.md`
- `c:\Users\Aadityaraj\PROJECTS\RevoDigital\.agents\teamwork\explorer_survey_3\workspace_and_toolchain.md`

## Ownership
You exclusively own:
- `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`
- `src/app/globals.css`, `src/app/layout.tsx`, `src/app/page.tsx`
- `src/types/index.ts`, `src/data/content.ts`, `src/context/EnquiryContext.tsx`

## Output Requirements
- Write your progress to `c:\Users\Aadityaraj\PROJECTS\RevoDigital\.agents\teamwork\worker_m1_1\progress.md`
- Write your handoff to `c:\Users\Aadityaraj\PROJECTS\RevoDigital\.agents\teamwork\worker_m1_1\handoff.md` with verified build/test commands and output.
- Send completion message to parent when done.

## 2026-11-05T07:29:40Z
[Message] timestamp=2026-11-05T07:29:40Z sender=e802f7b0-c666-45ed-9bd2-8698cca44093 priority=MESSAGE_PRIORITY_HIGH content=You are worker_m1_1.
Task: Implement Milestone 1 (Foundation & Design System Setup)

