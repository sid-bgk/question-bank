## 6. 🤪 Edge Cases & Recovery

- If tab is closed or page reloads, restore:
  - `examStartAt` to compute remaining time
  - `examSession` to restore palette & answers
  - `exam-config` and `exam-seed` to restore order and context
- If time expires, auto-submit and save result to `lastResult`
