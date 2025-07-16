
# 📘 Exam Mode – Developer Implementation Checklist

Fully local-first exam simulation flow inspired by Mettl.  
Supports customizable section configuration, persistent shuffling, and post-test analytics.  
No backend calls. No server state.

---

## 🔧 Shared Constants & Setup

- [ ] `SECTIONS = ['MCQ', 'Brief', 'Case Study']`
- [ ] Load available questions from local DB (e.g., `localQuestions[section]`)
- [ ] On test start, generate and persist a random seed:
  ```ts
  const seed = Date.now().toString();
  localStorage.setItem('exam-seed', seed);
  ```

---

## 🧾 Screen 1: Exam Setup

- [ ] Dropdowns: University, Course, Semester, Subject, Module
- [ ] Number of questions & marks per section (input fields)
- [ ] Live max count display (e.g., `12 available`)
- [ ] Duration picker (dropdown or numeric)
- [ ] "Use Last Config" toggle: loads from `localStorage.exam-config`
- [ ] On `Proceed`, save:
  ```ts
  localStorage.setItem('exam-config', JSON.stringify(config));
  ```

---

## 🧭 Screen 2: Exam Instructions

- [ ] Static slide/carousel of exam instructions:
  - No refresh
  - No tab switching
  - Keep full screen
- [ ] “Proceed” sets:
  ```ts
  localStorage.setItem('examStartAt', new Date().toISOString());
  ```

---

## 🧪 Screen 3: Section Selection

- [ ] Show all sections with:
  - Section Name
  - No. of Questions
  - Duration
- [ ] Radio selection per section
- [ ] “Start Test” saves:
  ```ts
  localStorage.setItem('currentSection', 'Brief');
  localStorage.setItem('examSession', JSON.stringify({ ... }));
  ```

---

## 🧠 Screen 4: Exam Interface

### Top Bar:
- [ ] Section tabs or dropdown
- [ ] Section timer (countdown using `examStartAt`)
- [ ] `Finish Test` (soft style)

### Question Panel:
- [ ] Render current question
- [ ] Shuffle questions and options with seed (persisted)
- [ ] Actions:
  - [ ] Select Option
  - [ ] Mark for Review
  - [ ] Clear Response
  - [ ] Prev / Next
- [ ] Track responses:
  ```ts
  {
    questionId: "q123",
    selectedOption: 1,
    markedForReview: false
  }
  ```

### Palette:
- [ ] Highlight:
  - Attempted
  - Not Attempted
  - Marked for Review

---

## 🚨 Screen 5: Test Summary View

- [ ] Attempted / Unattempted count
- [ ] Pie or bar chart summary
- [ ] Buttons:
  - `Yes, End Test` → lock and grade
  - `No, Back to Test` → resume

---

## 📊 Screen 6: Results View

- [ ] Final score: `correct × marks per section`
- [ ] Failed questions list:
  - Show question
  - User answer
  - Correct answer (if available)
- [ ] Buttons:
  - `Review All Questions`
  - `Retake Incorrect Only`
  - `Download Result`

---

## 💾 Persistence Layer (All LocalStorage)

| Key | Purpose |
| --- | ------- |
| `exam-config` | Stores exam setup selections |
| `examStartAt` | ISO timestamp when test starts |
| `exam-seed` | Seed for deterministic shuffling |
| `currentSection` | Current section identifier |
| `examSession` | Array of response objects |
| `lastResult` | Final result and breakdown |
| `badge` | Stores earned badge (e.g., `High Scorer`) |

---

## 🧠 Edge-Case Handling

- [ ] Time calculation on reload:  
  ```ts
  const elapsed = Date.now() - new Date(examStartAt).getTime();
  const remaining = durationInMs - elapsed;
  ```
- [ ] If time <= 0 → auto-submit test
- [ ] Warn on tab switch (`document.visibilitychange`)
- [ ] Blur screen on `visibilitychange` or focus loss
- [ ] Auto-save every 10s (optional)

---

## 🏅 Bonus Features

- [ ] Unlock badge on `score >= 90%`
- [ ] Soft warning UI for tab switches
- [ ] Keyboard nav: ← → for prev/next, R to mark for review
- [ ] Save test state in a blob for offline restore (future)
