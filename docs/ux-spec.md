
# 🎨 Exam Mode UX Specification (Inspired by Mettl)

A local-first mock exam experience, with a clean Mettl-style UI and multi-screen exam flow.  
This spec outlines layout, interaction, and logic per screen.

---

## 🧭 User Flow Summary

1. Screen 1 – Exam Setup
2. Screen 2 – Exam Instructions (optional)
3. Screen 3 – Section Selection
4. Screen 4 – Live Exam Interface
5. Screen 5 – Submission Summary
6. Screen 6 – Results + Review

---

## 🧾 Screen 1: Exam Setup Form

### Layout
- **Left Panel**: Academic selection (University, Course, Semester, Subject, Module)
- **Right Panel**: Section Setup (MCQ, Briefs, Case Study)
  - Question Count input (max shown)
  - Marks per section input
  - Exam duration picker

### Features
- Toggle: “Use last config”
- Real-time validation (e.g., “12 questions available”)

---

## 📜 Screen 2: Exam Instructions

### Layout
- Full-width carousel/slideshow with 2–3 slides

### Content Examples
- Don’t refresh or close tab
- Timer cannot be paused
- Answers are auto-saved

### CTA
- Button: `Proceed to Section Selection`

---

## 🧪 Screen 3: Section Selection

### Layout
- Table or card list of available sections
  - Name, Count, Marks, Duration

### Actions
- Radio button or “Start” per section
- Button: `Start Test`

---

## 🧠 Screen 4: Live Exam Interface

### Top Bar
- Tabs or dropdown: Switch sections
- Timer: Section countdown
- Button: Finish Test (de-emphasized)

### Left Panel
- Question text
- Options (shuffled, radio or checkbox)
- Mark for Review
- Navigation: Previous / Next

### Right Panel (Optional)
- Palette of all question numbers:
  - Color-coded: attempted, unattempted, review

---

## 🚨 Screen 5: Submission Summary

### Layout
- Pie/Bar chart: Attempted vs Not Attempted
- Section breakdown: total marks, questions, review flagged

### CTA Buttons
- `Yes, End Test`
- `No, Back to Test`

---

## 📊 Screen 6: Results View

### Layout
- Marks scored / Total
- Optional chart (bar/pie)

### Sections
- Failed Questions list (with user's answer and correct answer)
- “Review Full Attempt” button
- “Retake Incorrect Only” button

---

## 💡 Interaction Notes

- Timer continues on reload (based on timestamp)
- Shuffle logic uses session seed
- Visibility loss triggers soft warning
- All state stored in `localStorage`

---

## 📦 UX Enhancements

- Keyboard shortcuts: ← → for nav, R to review
- Gamification: Badge for scoring >90%
- Warn user on tab switch or page blur
- Optional: download result as text/PDF

---

## 🎯 Design Targets

- Full-screen layout (like Mettl)
- Emphasis on speed, clarity, and minimalism
- No animations, no distractions
- Desktop-optimized, not responsive
