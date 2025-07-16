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

- [ ] Create `QuestionView.tsx` component
- [ ] Display question and options
- [ ] Shuffle options deterministically
- [ ] Implement answer selection, clear, and flag for review
- [ ] Show state indicators (Attempted, Marked for Review, Unanswered)
- [ ] Match UI to design reference

---

## Epic 3: Exam Review & Results

### 5. Test Summary Screen

- [ ] Create `TestSummary.tsx` component
- [ ] Show attempted, unattempted, marked-for-review counts
- [ ] Display section-wise breakdown
- [ ] Add CTAs: Submit Test, Review Answers
- [ ] Match UI to design reference

### 6. Result View Screen

- [ ] Create `ResultView.tsx` component
- [ ] Calculate and display total score
- [ ] List failed (incorrect) questions
- [ ] Add buttons: Retry Failed Questions, Retake Full Exam
- [ ] Match UI to design reference

---
