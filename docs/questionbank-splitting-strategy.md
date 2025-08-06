# QuestionBank Splitting Strategy

## Problem
The current `data/questionBank.ts` file is massive (10k+ lines) and difficult to manage. It contains all educational content in a single file, making it hard to:
- Navigate and find specific content
- Collaborate (merge conflicts)
- Maintain and update
- Version control effectively

## Current Usage Analysis
- **11 files** import the entire `questionBank` object
- **Primary access pattern**: `questionBank.universities` (all files traverse this hierarchy)
- **Static site generation**: Used in `getStaticPaths` and `getStaticProps` for Next.js routing
- **Type inference**: Several files use `typeof questionBank.universities[0]...` for TypeScript types

## Splitting Options

### Option 1: Module-Level Split (Recommended)
```
data/
├── universities/
│   └── amity-university-online/
│       └── bca/
│           └── sem-1/
│               ├── subject-1/
│               │   ├── module-1.ts    # ~50-200 lines each
│               │   ├── module-2.ts
│               │   └── index.ts       # exports all modules
│               └── index.ts           # exports all subjects
├── types/
│   └── index.ts                       # shared TypeScript interfaces
└── questionBank.ts                    # main aggregator file
```

**Benefits:**
- Manageable file sizes (50-200 lines vs 10k+ lines)
- Logical grouping matches existing module structure
- Easy navigation mirrors URL structure
- Backward compatibility maintained
- Future-ready for lazy loading

### Option 2: Content-Type Split within Modules
```
data/
├── universities/
│   └── amity-university-online/bca/sem-1/subject-1/
│       ├── module-1/
│       │   ├── mcq.ts           # ~20-50 lines
│       │   ├── brief.ts         # ~10-20 lines  
│       │   ├── case-study.ts    # ~30-100 lines
│       │   └── index.ts         # combines all content types
│       └── index.ts
```

### Option 3: Hybrid Approach
```
data/
├── content/
│   ├── amity-university-online-bca-sem1-subject1-module1-mcq.ts
│   ├── amity-university-online-bca-sem1-subject1-module1-brief.ts
│   └── amity-university-online-bca-sem1-subject1-module1-cases.ts
├── structure/
│   └── hierarchy.ts             # just the navigation structure
├── builders/
│   └── questionBank.ts          # assembles content into structure
└── questionBank.ts              # final export
```

## Helper Function Approach (Minimal Code Changes)

### Drop-in Replacement Helper
```typescript
// lib/questionBank.ts
export const getQuestionBank = () => {
  // For now, return the full object (no breaking changes)
  return questionBank;
};

export const getUniversity = (universityId: string) => {
  return questionBank.universities.find(u => u.id === universityId);
};

export const getModule = async (universityId: string, courseId: string, semesterId: string, subjectId: string, moduleId: string) => {
  // Future: dynamic import
  // const module = await import(`../data/universities/${universityId}/${courseId}/${semesterId}/${subjectId}/${moduleId}.ts`);
  
  // For now: existing logic
  const university = questionBank.universities.find(u => u.id === universityId);
  const course = university?.courses.find(c => c.id === courseId);
  const semester = course?.semesters.find(s => s.id === semesterId);
  const subject = semester?.subjects.find(sub => sub.id === subjectId);
  const module = subject?.modules.find(m => m.id === moduleId);
  return module;
};
```

## Migration Strategy

### Phase 1: Add Helper Function (Zero Breaking Changes)
```typescript
// Before:
import { questionBank } from "../data/questionBank";
const universities = questionBank.universities;

// After:
import { getQuestionBank } from "../lib/questionBank";
const questionBank = getQuestionBank();
const universities = questionBank.universities;
```

**Files requiring import changes (11 total):**
- `hooks/useExamConfig.tsx`
- `pages/index.tsx`
- `pages/exam.tsx`
- `pages/sitemap.xml.tsx`
- `components/exam/ExamSetupScreen.tsx`
- All dynamic route pages in `pages/[universityId]/...`

### Phase 2: Split Files Behind the Scenes
- Move data to separate module files
- Helper function loads from new structure
- No import changes needed in components

### Phase 3: Enable Lazy Loading
```typescript
// lib/questionBank.ts
export const getModule = async (...params) => {
  // Dynamic import here
  const module = await import(`../data/universities/${params.join('/')}.ts`);
  return module.default;
};
```

## Lazy Loading Strategies

### Dynamic Imports in getStaticProps/getStaticPaths
```typescript
export const getStaticProps = async ({ params }) => {
  // Only load the specific module needed
  const moduleData = await import(
    `../../../data/universities/${params.universityId}/${params.courseId}/${params.semesterId}/${params.subjectId}/${params.moduleId}.ts`
  );
  
  return { props: { module: moduleData.default } };
};
```

### Benefits of Lazy Loading:
- **Reduce initial bundle**: From ~10MB to ~100KB
- **Faster page loads**: Only load current module
- **Better performance**: Especially on mobile
- **Scalable**: Easy to add new content without bundle bloat

## Recommendation

**Phase 1:** Implement helper function approach with minimal code changes
**Phase 2:** Split into module-level files (Option 1)
**Phase 3:** Add lazy loading capabilities

This provides the best balance of:
- Minimal refactoring effort
- Manageable file sizes
- Future scalability
- Backward compatibility