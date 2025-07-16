
# 📘 PRD: Exam Mode (Mettl-Inspired Local Mock Exam)

## 1. 📌 Overview
**Feature Name:** Exam Mode  
**Goal:** Enable users to simulate timed mock exams locally, using a customizable, Mettl-like experience.  
**Inspiration:** Mettl assessment screens  
**Scope:** Local-only (offline-capable), no backend integration  

---

## 2. 🎯 Objectives
- Let users configure and take timed tests across multiple sections (MCQ, Briefs, Case Studies)
- Mimic real exam conditions: time pressure, shuffling, question palettes
- Deliver post-exam analytics and question review
- Store all session state on the client (localStorage)

---

## 3. 👩‍💻 User Personas
- **BCA/BTech students** using the app for exam preparation
- **Self-paced learners** who want to simulate time-bound exams
- **Offline users** with unreliable connectivity

---

## 4. 🧭 User Flow Summary
1. Setup test: academic context + question config + marks + duration  
2. View instructions (carousel-style)  
3. Select section to begin  
4. Take test: question by question (shuffled, timed)  
5. Submit & review attempt summary  
6. View score, failed questions, and retry options  

---

## 5. 🖥️ Key Screens

| Screen # | Name                  | Description                            |
|----------|-----------------------|----------------------------------------|
| 1        | Exam Setup            | Select university, course, module, section config |
| 2        | Exam Instructions     | Mettl-style rules (no refresh, no tabs) |
| 3        | Section Selection     | Begin test section-by-section           |
| 4        | Live Test UI          | Question, timer, review flag, navigation |
| 5        | Test Summary          | Attempted vs unattempted with CTA       |
| 6        | Results & Review      | Score, failed list, retake options      |

---

## 6. 🔧 Functional Requirements

### Configuration
- [ ] Academic field selection (5 dropdowns)
- [ ] Section-wise question count + marks (max based on availability)
- [ ] Duration input
- [ ] “Use Last Config” toggle

### Exam Session
- [ ] Generate & persist session seed for deterministic shuffle
- [ ] Start timestamp = `new Date().toISOString()`
- [ ] Timer persists across refresh using `startAt + duration`
- [ ] Store answers, marked for review, palette state in `localStorage`

### Test Taking UI
- [ ] Question → Option display (shuffled)
- [ ] Section navigation (tabs or dropdown)
- [ ] Question palette (attempted/reviewed/empty)
- [ ] Keyboard support (← → navigation, R to mark)

### Post-Test
- [ ] Score calculation: section × correct × marks
- [ ] Result summary: Pie/bar chart
- [ ] Failed questions list: answer vs correct
- [ ] Retry failed questions button

---

## 7. ⚠️ Non-Functional Requirements
- Works fully offline (no API/backend)
- Fully desktop-optimized
- Session-safe on reload/tab switch
- Local-only persistence (localStorage or in-memory)

---

## 8. 🚧 Constraints & Assumptions
- No authentication required
- No server validation for academic context
- Data (questions) assumed to exist locally and pre-loaded

---

## 9. 🧪 Test Strategy (QA/UAT Highlights)
- Reload mid-test: timer and answers resume correctly
- Attempted/unattempted tracking must be accurate
- Questions and options always shuffled
- Prevent over-selection beyond available question count

---

## 10. 🧮 Success Criteria
- Users can complete a full test across all 3 sections
- Users get reliable score with review & retry capabilities
- Exam flow mimics Mettl with low friction
- All interaction works without internet

---

## 11. 🧩 Out of Scope (V1)
- Question explanation feedback
- Export to PDF
- Result sharing
- Mobile optimization
