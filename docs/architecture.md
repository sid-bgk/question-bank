
# 🏗️ Architecture Document – Exam Mode (Local-First Mettl-Style Testing)

## 1. 📌 Purpose
Add a robust "Exam Mode" to the existing university-focused question bank platform. This feature allows students to simulate real exams with configurable settings, local state management, and Mettl-style UI.

---

## 2. 🧠 Architectural Goals
- **Local-only Execution** – No network or backend dependency.
- **Persistent Exam Session** – Recoverable state via localStorage.
- **Configurable Exams** – User-defined duration, marks, section type.
- **Deterministic Shuffling** – Using seeded RNG to preserve consistency.
- **Lightweight UI Stack** – Fast, Mettl-like desktop experience.

---

## 3. ⚙️ System Design Components

### A. **Data Model Extensions**
Extends the existing `questionBank.ts` format:
- `mcq[]`, `brief[]`, `case_study[]` already exist
- No backend fetch needed — everything is sourced from pre-bundled static files

### B. **State Persistence Layer** (localStorage keys)
| Key | Purpose |
|-----|---------|
| `exam-config` | Configuration from screen 1 |
| `exam-seed` | RNG seed for consistent shuffle |
| `examStartAt` | Timestamp of exam start (ISO) |
| `examSession` | User responses, marked flags, etc. |
| `lastResult` | Result summary post-submission |
| `badge` | Optional gamification marker |

---

## 4. 🛠️ Component Architecture

### a. `ExamSetupScreen.tsx`
- Dropdowns for university → module
- Section-wise input controls (question count, marks)
- Duration input
- Save config to `exam-config`

### b. `ExamInstructionScreen.tsx`
- Local-only carousel/slides
- Sets `examStartAt`

### c. `SectionSelector.tsx`
- Shows summary of section details
- Start button per section

### d. `ExamRunner.tsx`
- Loads shuffled question list using `exam-seed`
- Renders `QuestionView`
- Stores answers and palette state to `examSession`
- Timer computed from `examStartAt`

### e. `QuestionView.tsx`
- Renders current question
- Shuffled options (using deterministic seed)
- Flags: Attempted, Marked for Review

### f. `TestSummary.tsx`
- Pre-submission stats
- Attempt breakdown, CTA to submit or review

### g. `ResultView.tsx`
- Score calculated from correct × marks
- Failed question list
- Retry buttons (failed-only or full)

---

## 5. 🔄 Shuffling Strategy
- Use a seed generated via `Date.now()` and stored as `exam-seed`
- Apply a deterministic shuffling algorithm like `Fisher-Yates` seeded with `seedrandom`
- Ensures:
  - Shuffle consistency across refresh
  - Same question + option order for session

---

## 6. 🧪 Edge Cases & Recovery
- If tab is closed or page reloads, restore:
  - `examStartAt` to compute remaining time
  - `examSession` to restore palette & answers
  - `exam-config` and `exam-seed` to restore order and context
- If time expires, auto-submit and save result to `lastResult`

---

## 7. 📦 Deployment & Integration
- Fully static-compatible, deployable on Vercel/Netlify
- No changes to backend/api required
- Optionally gated behind feature flag or `?examMode=1`

---

## 8. 📈 Future Optimizations
- PDF export for result
- Explanation overlay per question (post-submission)
- Result share (with watermark, still local)
- Resume incomplete session logic
- Analytics (locally logged + optional consented upload in v2)

---

## 9. 🔚 Out of Scope
- Webcam surveillance
- Server-authenticated exams
- Question randomization from backend

---

## 10. 📁 File Structure Changes
```txt
/components/
  ExamSetupScreen.tsx
  ExamInstructionScreen.tsx
  SectionSelector.tsx
  ExamRunner.tsx
  QuestionView.tsx
  TestSummary.tsx
  ResultView.tsx
/lib/
  shuffle.ts       # Seeded Fisher-Yates
  examStorage.ts   # localStorage wrapper utils
/data/
  questionBank.ts  # Already used – no changes required
```

---

## ✅ Summary
Exam Mode fits seamlessly into the existing static-first architecture. By leveraging localStorage, deterministic shuffling, and component-driven state, it delivers a high-fidelity mock exam experience with zero backend dependency.
