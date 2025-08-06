import { questionBank } from "../data/questionBank";

export const getQuestionBank = () => {
  return questionBank;
};

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

export const getUniversity = (universityId: string) => {
  return questionBank.universities.find(u => u.id === universityId);
};

// Helper function to convert kebab-case to valid identifier
function toValidIdentifier(str: string): string {
  return str.replace(/-/g, '_').replace(/[^a-zA-Z0-9_]/g, '_');
}

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