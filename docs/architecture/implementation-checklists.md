# Implementation Checklists

## Epic 1: Exam Setup & Start

### 1. Exam Setup Screen

- [x] Create `ExamSetupScreen.tsx` component
- [x] Implement dropdowns for university, course, semester, subject, module
- [x] Add section-wise input controls for question count and marks
- [x] Add duration input with validation
- [x] Implement local save to `exam-config`
- [x] Match UI to design reference
- [x] Write unit/component tests

### 2. Section Selector Screen

- [x] Create `SectionSelector.tsx` component
- [x] Display section summary (name, question count, duration)
- [x] Add “Start” button for each section
- [x] Initiate section flow on start
- [x] Match UI to design reference

---

## Epic 2: Exam Taking

### 3. Exam Runner Screen

- [x] Create `ExamRunner.tsx` component
- [x] Load shuffled questions using deterministic `exam-seed`
- [x] Render questions with `QuestionView`
- [x] Implement navigation (next, previous, direct jump)
- [x] Store answers and palette state in `examSession`
- [x] Implement timer based on `examStartAt`
- [x] Add controls: Mark for Review, Clear Response, Submit Section
- [ ] Match UI to design reference

### 4. Question View Component

- [x] Create `QuestionView.tsx` component
- [x] Display question and options
- [x] Shuffle options deterministically
- [x] Implement answer selection, clear, and flag for review
- [x] Show state indicators (Attempted, Marked for Review, Unanswered)
- [x] Match UI to design reference

---

## Epic 3: Exam Review & Results

### 5. Test Summary Screen

- [x] Create `TestSummary.tsx` component
- [x] Show attempted, unattempted, marked-for-review counts
- [x] Display section-wise breakdown
- [x] Add CTAs: Submit Test, Review Answers
- [x] Match UI to design reference

### 6. Result View Screen

- [ ] Create `ResultView.tsx` component
- [ ] Calculate and display total score
- [ ] List failed (incorrect) questions
- [ ] Add buttons: Retry Failed Questions, Retake Full Exam
- [ ] Match UI to design reference

---
