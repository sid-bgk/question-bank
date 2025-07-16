## 5. 🔄 Shuffling Strategy

- Use a seed generated via `Date.now()` and stored as `exam-seed`
- Apply a deterministic shuffling algorithm like `Fisher-Yates` seeded with `seedrandom`
- Ensures:
  - Shuffle consistency across refresh
  - Same question + option order for session
