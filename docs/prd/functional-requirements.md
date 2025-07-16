## 6. 🛠 Functional Requirements

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
