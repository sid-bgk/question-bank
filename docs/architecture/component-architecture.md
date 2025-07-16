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
