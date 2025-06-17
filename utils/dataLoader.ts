// utils/dataLoader.ts
// Dynamic data loading utilities to reduce initial bundle size

export interface QuestionData {
  mcq: any[];
  brief: any[];
  caseStudy: any[];
}

export interface Module {
  id: string;
  name: string;
  mcq?: any[];
  brief?: any[];
  caseStudy?: any[];
}

export interface Subject {
  id: string;
  name: string;
  modules: Module[];
}

export interface Semester {
  id: string;
  name: string;
  subjects: Subject[];
}

export interface Course {
  id: string;
  name: string;
  semesters: Semester[];
}

export interface University {
  id: string;
  name: string;
  courses: Course[];
}

export interface QuestionBank {
  universities: University[];
}

// Cache for loaded data
const dataCache = new Map<string, any>();

// Load data dynamically based on the path
export async function loadQuestionData(
  universityId: string,
  courseId?: string,
  semesterId?: string,
  subjectId?: string,
  moduleId?: string
): Promise<QuestionData | null> {
  const cacheKey = `${universityId}-${courseId}-${semesterId}-${subjectId}-${moduleId}`;

  if (dataCache.has(cacheKey)) {
    return dataCache.get(cacheKey);
  }

  try {
    // For now, we'll still import the full data but this sets up the structure
    // for future optimization where we can split data into separate files
    const { questionBank } = await import("../data/questionBank");

    const university = questionBank.universities.find(
      (u) => u.id === universityId
    );
    if (!university) return null;

    if (!courseId) return { mcq: [], brief: [], caseStudy: [] };

    const course = university.courses.find((c) => c.id === courseId);
    if (!course) return null;

    if (!semesterId) return { mcq: [], brief: [], caseStudy: [] };

    const semester = course.semesters.find((s) => s.id === semesterId);
    if (!semester) return null;

    if (!subjectId) return { mcq: [], brief: [], caseStudy: [] };

    const subject = semester.subjects.find((sub) => sub.id === subjectId);
    if (!subject) return null;

    if (!moduleId) return { mcq: [], brief: [], caseStudy: [] };

    const module = subject.modules.find((mod) => mod.id === moduleId);
    if (!module) return null;
    const data = {
      mcq: module.mcq || [],
      brief: module.brief || [],
      caseStudy: module.case_study || [],
    };

    dataCache.set(cacheKey, data);
    return data;
  } catch (error) {
    console.error("Error loading question data:", error);
    return null;
  }
}

// Load navigation data (lighter than full question data)
export async function loadNavigationData(): Promise<QuestionBank> {
  try {
    const { questionBank } = await import("../data/questionBank");

    // Return a lighter version for navigation - remove heavy question data
    const lightQuestionBank: QuestionBank = {
      universities: questionBank.universities.map((university) => ({
        ...university,
        courses: university.courses.map((course) => ({
          ...course,
          semesters: course.semesters.map((semester) => ({
            ...semester,
            subjects: semester.subjects.map((subject) => ({
              ...subject,
              modules: subject.modules.map((module) => ({
                id: module.id,
                name: module.name,
                // Remove heavy data for navigation
              })),
            })),
          })),
        })),
      })),
    };

    return lightQuestionBank;
  } catch (error) {
    console.error("Error loading navigation data:", error);
    throw error;
  }
}
