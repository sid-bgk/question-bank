# Project Structure & Architecture Guide

## Project Overview

- **Purpose:**
  - This application is a university-focused question bank and study platform, providing practice questions (MCQs, briefs, case studies) and study materials for university courses.
- **Problem Solved:**
  - Helps students prepare for exams by offering organized, interactive, and categorized practice content.
- **Intended Users:**
  - University students, educators, and educational institutions.
- **Core Features:**
  - Hierarchical navigation by university, course, semester, subject, and module.
  - Interactive MCQs, brief answers, and case studies (with code block support).
  - Structured data for SEO and discoverability.
  - Static site generation for fast, scalable delivery.
- **Domain:**
  - EdTech / Higher Education

---

## Project Structure

- **Main Directories:**
  - `components/`: React components for UI (MCQ, Brief, CaseStudy, Layout, etc.).
  - `data/`: Contains `questionBank.ts` (the main data source for all questions/content).
  - `lib/`: Utility and logic files (e.g., structured data generation).
  - `pages/`: Next.js pages, organized by dynamic routes for universities/courses/etc.
  - `public/`: Static assets (icons, images, robots.txt, etc.).
  - `styles/`: Global CSS (Tailwind).
  - `docs/`: Documentation (this file).
  - `__tests__/` and `types/`: Present but currently empty.
- **Naming Conventions:**
  - Folders and files are named by feature or component (e.g., `MCQComponent.tsx`, `[universityId]/index.tsx`).
  - Dynamic routes use bracket notation as per Next.js conventions.
- **Organization:**
  - Code is organized by feature and page hierarchy, matching the educational structure (university → course → semester → subject → module).

---

## Technologies and Packages Used

- **Languages/Frameworks:**
  - TypeScript, React, Next.js
- **Styling:**
  - Tailwind CSS, PostCSS
- **Key Libraries:**
  - `highlight.js`: Syntax highlighting for code blocks.
  - `react-markdown`: Rendering markdown content.
  - `react-icons`: Iconography.
- **Dev Tools:**
  - ESLint (with Next.js and TypeScript configs), TypeScript strict mode, PostCSS, Tailwind.
- **Critical Versions:**
  - Next.js 15.x, React 19.x, Tailwind 3.4.x
- **Purpose of Major Packages:**
  - `next`: Framework for SSR/SSG and routing.
  - `highlight.js`: Code syntax highlighting in questions/case studies.
  - `react-markdown`: Markdown rendering for question/answer content.
  - `tailwindcss`: Utility-first CSS framework for styling.
  - `eslint`: Linting and code quality.

---

## Application Flow / Architecture

- **Component Interaction:**
  - Pages use a shared `PageLayout` for consistent meta, SEO, and structure. Content is rendered via components (MCQ, Brief, CaseStudy, etc.).
- **Data Flow:**
  - All educational content is sourced from `data/questionBank.ts`, imported statically into page components. Next.js `getStaticPaths` and `getStaticProps` are used for static generation.
- **Routing:**
  - Deeply nested dynamic routes reflect the educational hierarchy (e.g., `/[universityId]/[courseId]/[semesterId]/[subjectId]/[moduleId]`).
- **Structured Data:**
  - Centralized in `lib/structuredData.ts` and injected via the `StructuredData` component for SEO.
- **No microservices or external APIs**; all data is local/static.

---

## Development and Deployment

- **Build Tools:**
  - Next.js (with custom config), Tailwind CSS, PostCSS.
- **Setup:**
  - Install dependencies (`npm install` or `yarn`), then run `npm run dev` or `yarn dev`.
- **Linting:**
  - `npm run lint` for code quality.
- **Deployment:**
  - Designed for static hosting (e.g., Vercel), with static site generation for all routes.
- **No Docker/Kubernetes/serverless** by default, but can be deployed to any platform supporting Next.js static export.

---

## Data Model: `questionBank.ts`

The `data/questionBank.ts` file is the central data source for all educational content in the application. It is a deeply nested JavaScript object that models the academic hierarchy and all associated questions and study materials.

**Top-Level Structure:**

- `questionBank` (object)
  - `universities` (array)
    - Each university object contains:
      - `id`: Unique string identifier (e.g., "amity-university-online")
      - `name`: University name (e.g., "Amity University Online")
      - `courses` (array)
        - Each course object contains:
          - `id`: Unique string identifier (e.g., "bca")
          - `name`: Course name (e.g., "BCA")
          - `semesters` (array)
            - Each semester object contains:
              - `id`: Unique string identifier (e.g., "semester-2")
              - `name`: Semester name (e.g., "Semester 2")
              - `subjects` (array)
                - Each subject object contains:
                  - `id`: Unique string identifier (e.g., "data-structure-using-c")
                  - `name`: Subject name (e.g., "Data Structure Using C")
                  - `modules` (array)
                    - Each module object contains:
                      - `id`: Unique string identifier (e.g., "module-1-introduction-to-data-structures")
                      - `name`: Module name (e.g., "Module 1: Introduction to Data Structures")
                      - `mcq` (array): Multiple-choice questions for the module
                        - Each MCQ object contains:
                          - `question`: The question text
                          - `codeBlock` (optional): Code snippet (if applicable)
                          - `language` (optional): Programming language for code block
                          - `options`: Array of answer options
                          - `answer`: The correct answer
                          - `explanation`: Explanation for the answer
                      - `brief` (array): Brief answer questions for the module
                        - Each brief object contains:
                          - `question`: The question text
                          - `answer`: The answer text (may include markdown)
                          - `codeBlock` (optional): Code snippet (if applicable)
                          - `language` (optional): Programming language for code block
                      - `case_study` (array): Case studies for the module
                        - Each case study object contains:
                          - `title`: Title of the case study
                          - `description`: Markdown description
                          - `codeBlock` (optional): Code snippet (if applicable)
                          - `language` (optional): Programming language for code block
                          - `mcq` (array): MCQs related to the case study (same structure as above)
                          - `briefs` (array): Briefs related to the case study (same structure as above)

**Key Points:**

- The structure is strictly hierarchical: University → Course → Semester → Subject → Module → Content.
- All content (MCQs, briefs, case studies) is stored at the module level, making it easy to fetch all relevant material for a given module.
- Each content type (MCQ, brief, case study) supports optional code blocks and language fields for technical questions.
- This structure enables efficient static generation of all routes and pages in the application.

---

## Additional Notes

- **Testing:**
  - The `__tests__/` directory exists but is currently empty; testing strategy may be added in the future.
- **Type Definitions:**
  - The `types/` directory is present for custom TypeScript types but is currently empty.
- **Accessibility & SEO:**
  - The app includes accessibility improvements and rich structured data for SEO.

---

For further details, refer to the codebase and individual component/page documentation.
