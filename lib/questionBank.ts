import { questionBank } from "../data/questionBank";

export const getQuestionBank = () => {
  return questionBank;
};

export const getUniversity = (universityId: string) => {
  return questionBank.universities.find(u => u.id === universityId);
};

export const getModule = async (
  universityId: string, 
  courseId: string, 
  semesterId: string, 
  subjectId: string, 
  moduleId: string
) => {
  const university = questionBank.universities.find(u => u.id === universityId);
  const course = university?.courses.find(c => c.id === courseId);
  const semester = course?.semesters.find(s => s.id === semesterId);
  const subject = semester?.subjects.find(sub => sub.id === subjectId);
  const moduleData = subject?.modules.find(m => m.id === moduleId);
  return moduleData;
};