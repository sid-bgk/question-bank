# Screen User Stories

## 1. Exam Setup Screen

**As a** student  
**I want to** configure my exam by selecting the university, course, module, and inputting section-wise details  
**So that** I can set up the exam parameters before starting

### Description

Implement the `ExamSetupScreen.tsx` as per the architecture documentation and attached design. This screen should allow the student to:

- Select university, course, semester, subject, and module via dropdowns.
- Input section-wise controls for question count and marks.
- Set the exam duration.
- Save the configuration to `exam-config`.

### Acceptance Criteria

- [ ] All dropdowns (university → module) are present and functional.
- [ ] Section-wise input controls for question count and marks are available.
- [ ] Duration input is present and accepts only valid values.
- [ ] “Save” action persists the configuration to `exam-config`.
- [ ] UI matches the attached design reference.
- [ ] No backend API calls are required; all data is handled locally.

---

## 2. Exam Instruction Screen

**As a** student  
**I want to** view exam instructions in a carousel/slide format before starting the test  
**So that** I am aware of the rules and guidelines

### Description

Implement the `ExamInstructionScreen.tsx` as described in the architecture documentation and based on the attached design. This screen should:

- Display exam instructions in a local-only carousel or slide format.
- Allow the student to navigate through the instruction slides.
- Set the `examStartAt` timestamp when the student proceeds to start the exam.

### Acceptance Criteria

- [ ] Instructions are presented in a carousel/slide format.
- [ ] Student can navigate forward and backward through the slides.
- [ ] “Proceed” button sets the `examStartAt` timestamp.
- [ ] UI matches the attached design reference.
- [ ] All logic is handled locally; no backend API calls.

---

## 3. Section Selector Screen

**As a** student  
**I want to** view a summary of all exam sections and start any section when ready  
**So that** I can control the order and timing of my section attempts

### Description

Implement the `SectionSelector.tsx` component as described in the architecture documentation and based on the attached design. This screen should:

- Display a summary of each exam section, including section name, number of questions, and duration.
- Provide a “Start” button for each section, allowing the student to begin any section in any order.

### Acceptance Criteria

- [ ] All exam sections are listed with their details (name, question count, duration).
- [ ] Each section has a clearly visible “Start” button.
- [ ] Clicking “Start” for a section initiates that section’s exam flow.
- [ ] UI matches the attached design reference.
- [ ] All logic is handled locally; no backend API calls.

---

## 4. Exam Runner Screen

**As a** student  
**I want to** answer questions in a timed, section-based exam interface  
**So that** I can complete my exam efficiently and track my progress

### Description

Implement the `ExamRunner.tsx` component as described in the architecture documentation and based on the attached design. This screen should:

- Load a shuffled list of questions for the selected section using a deterministic `exam-seed`.
- Render each question using the `QuestionView` component.
- Allow navigation between questions (next, previous, direct jump).
- Store answers and palette state locally in `examSession`.
- Display and update a timer based on `examStartAt`.
- Provide controls for marking questions for review, clearing responses, and submitting the section.

### Acceptance Criteria

- [ ] Loads and displays shuffled questions for the current section using `exam-seed`.
- [ ] Renders each question via the `QuestionView` component.
- [ ] Allows navigation between questions (next, previous, direct jump).
- [ ] Stores answers and palette state in `examSession` (local only).
- [ ] Timer is visible and counts down from section duration, based on `examStartAt`.
- [ ] Controls for “Mark for Review,” “Clear Response,” and “Submit Section” are present and functional.
- [ ] UI matches the attached design reference.
- [ ] All logic is handled locally; no backend API calls.

---

## 5. Question View Component

**As a** student  
**I want to** view and interact with individual exam questions  
**So that** I can select answers, flag questions, and manage my responses

### Description

Implement the `QuestionView.tsx` component as described in the architecture documentation and based on the attached design. This component should:

- Display the current question and its options.
- Shuffle options deterministically using the provided seed.
- Allow the student to select an answer, clear their response, and flag the question as “Attempted” or “Marked for Review.”
- Visually indicate the current state (attempted, marked for review, unanswered).

### Acceptance Criteria

- [ ] Displays the question text and all answer options.
- [ ] Options are shuffled using a deterministic seed.
- [ ] Student can select an answer, clear their response, and flag for review.
- [ ] Visual indicators for “Attempted,” “Marked for Review,” and “Unanswered” states.
- [ ] UI matches the attached design reference.
- [ ] All logic is handled locally; no backend API calls.

---

## 6. Test Summary Screen

**As a** student  
**I want to** review a summary of my exam attempts before final submission  
**So that** I can check my progress and decide whether to submit or review answers

### Description

Implement the `TestSummary.tsx` component as described in the architecture documentation and based on the attached design. This screen should:

- Display pre-submission statistics, including the number of attempted, unattempted, and marked-for-review questions.
- Show a breakdown of attempts per section.
- Provide clear calls-to-action (CTAs) to submit the test or review specific questions/sections.

### Acceptance Criteria

- [ ] Shows total attempted, unattempted, and marked-for-review questions.
- [ ] Displays a section-wise breakdown of attempts.
- [ ] Provides CTAs for “Submit Test” and “Review Answers.”
- [ ] UI matches the attached design reference.
- [ ] All logic is handled locally; no backend API calls.

---

## 7. Result View Screen

**As a** student  
**I want to** see my exam results, including my score and a breakdown of my performance  
**So that** I can understand my strengths and areas for improvement

### Description

Implement the `ResultView.tsx` component as described in the architecture documentation and based on the attached design. This screen should:

- Calculate and display the total score based on the number of correct answers and marks per question.
- Show a list of failed (incorrect) questions.
- Provide buttons to retry only the failed questions or to retake the full exam.

### Acceptance Criteria

- [ ] Displays the total score, calculated as correct answers × marks.
- [ ] Lists all failed (incorrect) questions for review.
- [ ] Provides “Retry Failed Questions” and “Retake Full Exam” buttons.
- [ ] UI matches the attached design reference.
- [ ] All logic is handled locally; no backend API calls.

---
