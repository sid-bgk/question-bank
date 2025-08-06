# Phase 3 Implementation Guide: Lazy Loading & Dynamic Imports

## Overview
This guide provides step-by-step instructions to implement lazy loading and dynamic imports to reduce bundle sizes from 3-5MB to ~150-640KB per page.

## Current State
- ✅ Phase 1: Helper functions created (`lib/questionBank.ts`)
- ✅ Phase 2: Files split into modular structure (`data/universities/...`)
- 🎯 Phase 3: Enable dynamic imports for performance optimization

---

## Phase 3A: Infrastructure Changes

### Step 3A.1: Create Structure-Only Helper Function

**File to modify:** `lib/questionBank.ts`

**Action:** Add new function that returns only metadata (no content)

```typescript
// Add this new function to lib/questionBank.ts
export const getQuestionBankStructure = () => {
  const questionBank = getQuestionBank();
  
  return {
    universities: questionBank.universities.map(u => ({
      id: u.id,
      name: u.name,
      courses: u.courses.map(c => ({
        id: c.id,
        name: c.name,
        semesters: c.semesters.map(s => ({
          id: s.id,
          name: s.name,
          subjects: s.subjects.map(sub => ({
            id: sub.id,
            name: sub.name,
            modules: sub.modules.map(m => ({ 
              id: m.id, 
              name: m.name 
            }))
          }))
        }))
      }))
    }))
  };
};
```

**Test:** Run `yarn build` to ensure no errors.

### Step 3A.2: Convert getModule to Dynamic Import

**File to modify:** `lib/questionBank.ts`

**Action:** Replace existing `getModule` function with dynamic import version

```typescript
// Helper function to convert kebab-case to valid identifier
function toValidIdentifier(str: string): string {
  return str.replace(/-/g, '_').replace(/[^a-zA-Z0-9_]/g, '_');
}

// Replace existing getModule function with this:
export const getModule = async (
  universityId: string,
  courseId: string,
  semesterId: string,
  subjectId: string,
  moduleId: string
) => {
  try {
    // Dynamic import of specific module
    const moduleData = await import(`../data/universities/${universityId}/${courseId}/${semesterId}/${subjectId}/${moduleId}`);
    const moduleIdentifier = toValidIdentifier(moduleId);
    return moduleData[moduleIdentifier];
  } catch (error) {
    console.error(`Failed to load module: ${universityId}/${courseId}/${semesterId}/${subjectId}/${moduleId}`, error);
    return null;
  }
};
```

**Test:** Run `yarn build` to ensure dynamic imports work.

---

## Phase 3B: Update Navigation Pages

### Step 3B.1: Update University List Page

**File to modify:** `pages/index.tsx`

**Action:** Replace `getQuestionBank()` with `getQuestionBankStructure()`

```typescript
// Change this import line:
import { getQuestionBankStructure } from "../lib/questionBank";

// Change getStaticProps:
export const getStaticProps: GetStaticProps<{ universities: University[] }> = async () => {
  const structure = getQuestionBankStructure();
  const universities = structure.universities.map(u => ({ id: u.id, name: u.name }));
  return {
    props: {
      universities,
    },
  };
};
```

**Test:** Visit `http://localhost:3000` - should load much faster.

### Step 3B.2: Update University Index Page

**File to modify:** `pages/[universityId]/index.tsx`

**Action:** Use structure instead of full data

```typescript
// Update imports:
import { getQuestionBankStructure } from "../../lib/questionBank";

// Update getStaticPaths:
export const getStaticPaths: GetStaticPaths = async () => {
  const structure = getQuestionBankStructure();
  const paths = structure.universities.map((university) => ({
    params: { universityId: university.id },
  }));
  return { paths, fallback: false };
};

// Update getStaticProps:
export const getStaticProps: GetStaticProps<{ university: University }> = async ({ params }) => {
  try {
    const structure = getQuestionBankStructure();
    const university = structure.universities.find((u) => u.id === params?.universityId);
    if (!university) {
      return { notFound: true };
    }
    
    // Only return essential data
    const universityData = {
      id: university.id,
      name: university.name,
      courses: university.courses.map(course => ({
        id: course.id,
        name: course.name
      }))
    };
    
    return { 
      props: { 
        university: universityData as University 
      },
      revalidate: 3600
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return { notFound: true };
  }
};
```

**Test:** Visit university pages - should load faster.

### Step 3B.3: Update Course Index Page

**File to modify:** `pages/[universityId]/[courseId]/index.tsx`

**Action:** Similar pattern - use structure only

```typescript
// Update imports:
import { getQuestionBankStructure } from "../../../lib/questionBank";

// Update both getStaticPaths and getStaticProps to use getQuestionBankStructure()
// Follow same pattern as Step 3B.2 but for courses

export const getStaticPaths: GetStaticPaths = async () => {
    const structure = getQuestionBankStructure();
    const paths = structure.universities.flatMap((university) =>
        university.courses.map((course) => ({
            params: { universityId: university.id, courseId: course.id },
        }))
    );
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ course: Course; university: University }> = async ({ params }) => {
    const structure = getQuestionBankStructure();
    const university = structure.universities.find((u) => u.id === params?.universityId);
    const course = university?.courses.find((c) => c.id === params?.courseId);
    if (!course || !university) {
        return { notFound: true };
    }
    return { props: { course, university } };
};
```

### Step 3B.4: Update Semester Index Page

**File to modify:** `pages/[universityId]/[courseId]/[semesterId]/index.tsx`

**Action:** Same pattern for semesters

```typescript
import { getQuestionBankStructure } from "../../../../lib/questionBank";

// Update getStaticPaths and getStaticProps following same pattern
// Use structure.universities navigation to find semester data
```

### Step 3B.5: Update Subject Index Page

**File to modify:** `pages/[universityId]/[courseId]/[semesterId]/[subjectId]/index.tsx`

**Action:** Same pattern for subjects

```typescript
import { getQuestionBankStructure } from "../../../../../lib/questionBank";

// Update getStaticPaths and getStaticProps following same pattern
// Use structure.universities navigation to find subject data
```

**Test after each step:** Run `yarn build` and verify pages load correctly.

---

## Phase 3C: Update Content Pages (Most Important)

### Step 3C.1: Update Module Page with Dynamic Loading

**File to modify:** `pages/[universityId]/[courseId]/[semesterId]/[subjectId]/[moduleId]/index.tsx`

**Action:** This is the key change - load only specific module content

```typescript
// Update imports:
import { getQuestionBankStructure, getModule } from "../../../../../../lib/questionBank";

// Update getStaticPaths:
export const getStaticPaths: GetStaticPaths = async () => {
    const structure = getQuestionBankStructure();
    const paths = structure.universities.flatMap((university) =>
        university.courses.flatMap((course) =>
            course.semesters.flatMap((semester) =>
                semester.subjects.flatMap((subject) =>
                    subject.modules.map((module) => ({
                        params: {
                            universityId: university.id,
                            courseId: course.id,
                            semesterId: semester.id,
                            subjectId: subject.id,
                            moduleId: module.id,
                        },
                    }))
                )
            )
        )
    );
    return { paths, fallback: false };
};

// Update getStaticProps with dynamic loading:
export const getStaticProps: GetStaticProps<{ 
    currentModule: Module; 
    subject: Subject; 
    semester: Semester;
    course: Course;
    university: University;
}> = async ({ params }) => {
    const structure = getQuestionBankStructure();
    
    // Get metadata for navigation (lightweight)
    const university = structure.universities.find((u) => u.id === params?.universityId);
    const course = university?.courses.find((c) => c.id === params?.courseId);
    const semester = course?.semesters.find((s) => s.id === params?.semesterId);
    const subject = semester?.subjects.find((sub) => sub.id === params?.subjectId);
    const moduleMetadata = subject?.modules.find((mod) => mod.id === params?.moduleId);

    if (!moduleMetadata || !subject || !semester || !course || !university) {
        return { notFound: true };
    }

    // Dynamic import of actual content (THIS IS THE KEY CHANGE)
    const currentModule = await getModule(
        params?.universityId as string,
        params?.courseId as string,
        params?.semesterId as string,
        params?.subjectId as string,
        params?.moduleId as string
    );

    if (!currentModule) {
        return { notFound: true };
    }

    return { 
        props: { 
            currentModule,
            // Pass lightweight metadata for navigation
            subject: { id: subject.id, name: subject.name, modules: subject.modules },
            semester: { id: semester.id, name: semester.name },
            course: { id: course.id, name: course.name },
            university: { id: university.id, name: university.name }
        } 
    };
};
```

**Test:** Build and verify module pages load with correct content but much faster.

---

## Phase 3D: Update Exam System

### Step 3D.1: Update ExamSetupScreen

**File to modify:** `components/exam/ExamSetupScreen.tsx`

**Action:** Use structure for dropdowns instead of full data

```typescript
// Update import:
import { getQuestionBankStructure } from "../../lib/questionBank";

// In the component, replace:
const structure = getQuestionBankStructure();
const universities = structure.universities || [];

// Rest of the dropdown logic remains the same but uses structure instead of questionBank
```

### Step 3D.2: Update useExamConfig Hook

**File to modify:** `hooks/useExamConfig.tsx`

**Action:** Make getMCQsFromConfig async and use dynamic loading

```typescript
// Update import:
import { getModule } from "../lib/questionBank";

// Replace getMCQsFromConfig function:
async function getMCQsFromConfig(): Promise<MCQ[]> {
  try {
    const config = JSON.parse(localStorage.getItem("exam-config") || "null");
    let sectionKey = localStorage.getItem("currentSection") || "mcq";
    if (!config) return [];
    
    const examQuestions = JSON.parse(localStorage.getItem("examQuestions") || "null");
    if (examQuestions && examQuestions[sectionKey]) {
      return examQuestions[sectionKey];
    }
    
    const { university, course, semester, subject, module } = config;
    
    // Dynamic import of module data
    const moduleData = await getModule(university, course, semester, subject, module);
    if (!moduleData) return [];
    
    if (!['mcq', 'brief', 'case_study'].includes(sectionKey)) sectionKey = 'mcq';
    const sectionQuestions = (moduleData as any)[sectionKey];
    return Array.isArray(sectionQuestions) ? (sectionQuestions as MCQ[]) : [];
  } catch {
    return [];
  }
}

// Update useExamConfig hook to handle async:
export function useExamConfig() {
  // ... existing state ...
  
  useEffect(() => {
    let seed = localStorage.getItem("exam-seed");
    if (!seed) {
      seed = Date.now().toString();
      localStorage.setItem("exam-seed", seed);
    }
    
    // Make this async
    getMCQsFromConfig().then(mcqs => {
      setQuestions(mcqs);
    });
  }, [sectionKey]);
  
  // ... rest remains the same
}
```

### Step 3D.3: Update Exam Page

**File to modify:** `pages/exam.tsx`

**Action:** Use dynamic loading for exam question preparation

```typescript
// Update import:
import { getModule } from "../lib/questionBank";

// In handleSetupProceed function, replace the section that loads exam questions:
if (config && config.sections && config.module) {
  const { university, course, semester, subject, module } = config;
  
  // Dynamic loading instead of accessing questionBank directly
  const moduleData = await getModule(university, course, semester, subject, module);
  
  const examQuestions: Record<string, unknown[]> = {};
  if (moduleData) {
    config.sections.forEach((section: SectionConfig) => {
      if (!section.checked) return;
      const allQuestions = (moduleData as any)[section.sectionKey] || [];
      const count = Number(section.questionCount) || 0;
      examQuestions[section.sectionKey] = allQuestions.slice(0, count);
    });
  }
  localStorage.setItem("examQuestions", JSON.stringify(examQuestions));
}
```

**Test:** Complete exam flow should work with dynamic loading.

---

## Phase 3E: Final Updates

### Step 3E.1: Update Sitemap Generation

**File to modify:** `pages/sitemap.xml.tsx`

**Action:** Use structure for fast sitemap generation

```typescript
// Update import:
import { getQuestionBankStructure } from '../lib/questionBank';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://practice.orbipath.com';
  const currentDate = new Date().toISOString();
  
  const urls = [
    {
      loc: baseUrl,
      priority: '1.0',
      changefreq: 'weekly'
    }
  ];

  // Use structure instead of full questionBank
  const structure = getQuestionBankStructure();
  structure.universities.forEach(university => {
    // ... rest of URL generation logic remains the same
    // but uses structure.universities instead of questionBank.universities
  });

  // ... rest remains the same
};
```

### Step 3E.2: Performance Validation

**Actions:**
1. Run `yarn build` - should complete successfully
2. Check build output - look for reduced bundle sizes
3. Start dev server: `yarn dev`
4. Test key pages:
   - Homepage (should load ~150KB vs 5MB)
   - University page (should load ~130KB vs 3.8MB) 
   - Module page (should load ~640KB vs 4.6MB)
5. Test exam functionality end-to-end
6. Verify all 77 pages still generate correctly

### Step 3E.3: Bundle Size Analysis

**Command to run:**
```bash
yarn build
```

**Expected improvements:**
- Homepage: 5.1MB → ~150KB (97% reduction)
- Course pages: 3.8MB → ~130KB (97% reduction)  
- Module pages: 4.6MB → ~640KB (86% reduction)

**Success criteria:**
- ✅ All pages build without errors
- ✅ No "large page data" warnings  
- ✅ Bundle sizes under 1MB per page
- ✅ All functionality preserved

---

## Troubleshooting Guide

### Common Issues:

1. **Dynamic import fails:**
   - Check file paths in import statements
   - Verify module identifier conversion (kebab-case to camelCase)
   - Ensure all generated files exist

2. **TypeScript errors:**
   - Update type imports to use structure types
   - Handle async/await properly in all functions
   - Check for null/undefined in dynamic loading

3. **Build failures:**
   - Run `yarn build` after each step
   - Fix TypeScript errors immediately
   - Check console for missing imports

4. **Performance not improved:**
   - Verify `getQuestionBankStructure()` is used in navigation
   - Check that `getModule()` is used for content loading
   - Monitor Network tab in browser dev tools

5. **Functionality broken:**
   - Test exam flow thoroughly
   - Verify all navigation links work
   - Check that content displays correctly

### Testing Checklist:

- [ ] Homepage loads quickly
- [ ] University navigation works
- [ ] Course navigation works  
- [ ] Subject navigation works
- [ ] Module pages display content correctly
- [ ] Exam setup works
- [ ] Exam flow completes successfully
- [ ] Sitemap generates correctly
- [ ] Build completes without warnings
- [ ] Bundle sizes significantly reduced

## Completion Criteria

Phase 3 is complete when:
- ✅ All 77 pages build successfully
- ✅ Bundle sizes reduced by 85%+ 
- ✅ No large page data warnings
- ✅ All functionality preserved
- ✅ Performance dramatically improved
- ✅ Development experience maintained

This implementation will transform the application from loading 3-5MB per page to loading only the specific content needed, making it scalable for much larger content sets.