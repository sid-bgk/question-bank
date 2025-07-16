## 3. ⚙️ System Design Components

### A. **Data Model Extensions**

Extends the existing `questionBank.ts` format:

- `mcq[]`, `brief[]`, `case_study[]` already exist
- No backend fetch needed — everything is sourced from pre-bundled static files

### B. **State Persistence Layer** (localStorage keys)

| Key           | Purpose                            |
| ------------- | ---------------------------------- |
| `exam-config` | Configuration from screen 1        |
| `exam-seed`   | RNG seed for consistent shuffle    |
| `examStartAt` | Timestamp of exam start (ISO)      |
| `examSession` | User responses, marked flags, etc. |
| `lastResult`  | Result summary post-submission     |
| `badge`       | Optional gamification marker       |
