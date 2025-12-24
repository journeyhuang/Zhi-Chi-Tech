# Repository Guidelines

## Project Structure & Module Organization
- `index.html` hosts the Tailwind CDN setup, global styles, and font declarations.
- `index.tsx` bootstraps React; `App.tsx` composes the page sections.
- `components/` contains UI sections (e.g., `Hero.tsx`, `ValueSection.tsx`, `DemoSection.tsx`).
- `services/` holds external integrations such as `geminiService.ts`.
- `types.ts` defines shared enums and interfaces (e.g., `SectionId`, `Message`).
- There is no dedicated `assets/` or `tests/` directory in this repo.

## Build, Test, and Development Commands
- `npm install`: install dependencies.
- `npm run dev`: start the Vite dev server for local development.
- `npm run build`: create a production build.
- `npm run preview`: serve the production build locally for verification.

## Coding Style & Naming Conventions
- TypeScript + React with functional components.
- Indentation: 2 spaces; keep JSX props one per line when long.
- File naming: `PascalCase.tsx` for components; `camelCase.ts` for utilities.
- Use `SectionId` enums for in-page anchors instead of hard-coded strings.
- No lint/format scripts are configured; keep style consistent with existing files.

## Testing Guidelines
- No automated test framework is configured yet.
- If you add tests, place them under `tests/` or alongside components (e.g., `Hero.test.tsx`) and document how to run them in `package.json`.

## Commit & Pull Request Guidelines
- Existing commits use short, imperative messages; one uses a conventional prefix (e.g., `feat:`).
- Follow that pattern: concise summary, optional conventional prefix if appropriate.
- PRs should describe the change, list affected sections, and include screenshots for UI updates.

## Security & Configuration Tips
- Gemini requires an API key: set `VITE_GEMINI_API_KEY` in `.env.local`.
- Avoid committing real contact data; use placeholders or examples for demos.
## Habbit
- Think in English,answer in Chinese.