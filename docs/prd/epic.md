# Epic: Exam Mode MVP – Local, Mettl-Style Mock Exam Experience

---

## Epic Goal

Deliver a robust, offline-capable Exam Mode that enables users to simulate timed mock exams in a Mettl-inspired interface, with full local persistence and analytics, requiring no backend integration.

---

## Why

- Students and self-paced learners need to practice under real exam conditions.
- Offline and unreliable connectivity is common; all features must work locally.
- No backend dependency ensures privacy, speed, and reliability.

---

## Scope

- All core screens: Setup, Instructions, Section Selection, Live Test, Summary, Results & Review.
- Deterministic shuffling, persistent session state, and analytics.
- Full desktop optimization and session safety.
- No authentication, server validation, or backend fetches.

---

## Key Features

- Academic context and section configuration
- Timed, sectioned exam flow with palette and review
- Persistent localStorage state for all session data
- Deterministic shuffling of questions/options
- Post-exam analytics and retry options

---

## Success Criteria

- Users can complete a full test across all sections, review results, and retry failed questions.
- All flows work offline, with no backend/API calls.
- Exam experience closely mimics Mettl, with low friction and high reliability.

---

## Out of Scope

- PDF export, result sharing, mobile optimization, webcam surveillance, server-authenticated exams, backend-driven question randomization.

---

## Architecture/Tech Notes

- All state in localStorage (`exam-config`, `exam-seed`, `examStartAt`, `examSession`, `lastResult`, `badge`)
- Components: `ExamSetupScreen.tsx`, `ExamInstructionScreen.tsx`, `SectionSelector.tsx`, `ExamRunner.tsx`, `QuestionView.tsx`, `TestSummary.tsx`, `ResultView.tsx`
- Utility modules: `/lib/shuffle.ts`, `/lib/examStorage.ts`
- Data: `/data/questionBank.ts` (static, pre-bundled)
