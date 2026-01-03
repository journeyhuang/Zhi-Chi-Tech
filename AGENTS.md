# Repository Guidelines & Project Context: Spirit Cabin (灵境舱)

## 1. Project Overview & Role
**Goal:** Build a high-converting product landing page for "Spirit Cabin" (灵境舱), a university innovation project.
**Product:** A desktop holographic "digital figure" device combining POV (Persistence of Vision) display hardware with NFC-based character interaction.
**Target Audience:** Gen Z, ACG enthusiasts, University Students.
**Role:** Act as a Senior Frontend Engineer & UI Designer. The design must be "Cyberpunk yet Minimalist," highlighting the hardware's premium feel (Aluminum & Glass) and the software's immersion.

## 2. Project Structure & Module Organization
- `index.html`: Hosts global styles (Tailwind directives), font declarations (Inter/Roboto), and meta tags.
- `src/main.tsx` (or `index.tsx`): Bootstraps React.
- `src/App.tsx`: Composes the main landing page sections.
- `src/components/`: UI sections specific to Spirit Cabin:
  - `Hero.tsx`: Main visual, slogan, and 3D rotation effect placeholder.
  - [cite_start]`TechSpecs.tsx`: Hardware details (STM32, Motor, Slip Ring)[cite: 10, 24].
  - [cite_start]`FeatureShowcase.tsx`: POV principle, NFC interaction, and AI features[cite: 14, 26].
  - [cite_start]`BusinessModel.tsx`: Visual breakdown of the "Hardware + Content" model (Canvas)[cite: 64].
  - [cite_start]`Roadmap.tsx`: Marketing & Crowdfunding plans[cite: 98].
- `src/services/`: External integrations.
  - `geminiService.ts`: **Optional**. Can be used to simulate the "AI Character Chat" feature on the web interface.
- `src/types.ts`: Shared enums/interfaces (e.g., `SectionId`, `ProductTier`).
- **Note:** No dedicated `assets/` folder; use public URL placeholders or inline SVGs for the prototype.

## 3. Design Language & Visual Identity
- **Color Palette:**
  - **Background:** Dark Grey (`#121212`) / Deep Space Black (to enhance holographic contrast).
  - **Primary:** Neon Cyan (`#00f3ff`) for Tech/Hardware vibes.
  - [cite_start]**Secondary:** Sakura Pink (`#ff007f`) for Interaction/ACG vibes.
  - [cite_start]**Accent:** Metallic Silver (simulating the 6061 Aluminum base).
- **Typography:** Modern Sans-serif. Bold, large headings.
- [cite_start]**Visuals:** Use glassmorphism effects to simulate the transparent cover[cite: 61].

## 4. Coding Style & Naming Conventions
- **Stack:** TypeScript + React + Tailwind CSS.
- **Components:** Functional components, named `PascalCase.tsx`.
- **Utilities:** `camelCase.ts`.
- **Indentation:** 2 spaces; maintain readability.
- **Routing:** Use `SectionId` enums for smooth scrolling anchors (e.g., `#features`, `#specs`, `#business`).
- **Content:** Hardcode the specific product copy provided below in the "Content Context" section.

## 5. Content Context (Strictly use these details)
* [cite_start]**Hero Slogan:** "Spirit Cabin: The First Desktop Holographic Digital Figure for Young People" (灵境舱：打造年轻人的第一台桌面级全息“数字手办”)[cite: 1].
* **Hardware Specs:**
    * [cite_start]STM32F407 Master Control (168MHz, FPU)[cite: 11, 12].
    * [cite_start]Silent BLDC Motor + Slip Ring Technology[cite: 22, 24].
    * [cite_start]128x128 Equivalent Resolution, 144 LEDs/m[cite: 17, 19].
* **Interaction:**
    * [cite_start]NFC "Spirit Card" to unlock characters[cite: 80].
    * [cite_start]Touch Interaction via transparent capacitive film[cite: 29].
    * [cite_start]Offline Voice Control ("Dance", "Switch Role")[cite: 32].
* **Business Model (Crucial for Course):**
    * [cite_start]**Hardware (N.E.O. Core):** ¥299 (Entry level).
    * [cite_start]**Content (Spirit Cards):** ¥39/Blind Box (High margin recurring revenue)[cite: 81].
    * [cite_start]**Strategy:** "Hardware makes friends, Content earns love"[cite: 65].

## 6. Build & Test Commands
- `npm install`: Install dependencies.
- `npm run dev`: Start Vite server.
- `npm run build`: Production build.
- `npm run preview`: Preview build.

## 7. Commit & Pull Request Guidelines
- Use conventional commits (e.g., `feat: add TechSpecs component`, `fix: mobile padding`).
- PRs must describe the change and include screenshots if UI is affected.
- **Security:** Do not commit real API keys; use `VITE_GEMINI_API_KEY` in `.env.local` if AI features are enabled.

## 8. Habit
- **Think in English, answer in Chinese.**