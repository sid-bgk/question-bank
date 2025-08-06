import { useState, useEffect } from "react";
import { getQuestionBank } from "../lib/questionBank";

interface MCQ {
  question: string;
  codeBlock?: string;
  language?: string;
  options: string[];
  answer: string;
  explanation?: string;
}

function getMCQsFromConfig(): MCQ[] {
  try {
    const config = JSON.parse(localStorage.getItem("exam-config") || "null");
    let sectionKey = localStorage.getItem("currentSection") || "mcq";
    if (!config) return [];
    
    const examQuestions = JSON.parse(localStorage.getItem("examQuestions") || "null");
    if (examQuestions && examQuestions[sectionKey]) {
      return examQuestions[sectionKey];
    }
    
    const { university, course, semester, subject, module } = config;
    const questionBank = getQuestionBank();
    const universityObj = questionBank.universities.find((u: { id: string }) => u.id === university);
    if (!universityObj) return [];
    const courseObj = universityObj.courses.find((c: { id: string }) => c.id === course);
    if (!courseObj) return [];
    const semesterObj = courseObj.semesters.find((s: { id: string }) => s.id === semester);
    if (!semesterObj) return [];
    const subjectObj = semesterObj.subjects.find((su: { id: string }) => su.id === subject);
    if (!subjectObj) return [];
    const moduleObj = subjectObj.modules.find((m: { id: string }) => m.id === module);
    if (!moduleObj) return [];
    
    if (!['mcq', 'brief', 'case_study'].includes(sectionKey)) sectionKey = 'mcq';
    const sectionQuestions = (moduleObj as any)[sectionKey];
    return Array.isArray(sectionQuestions) ? (sectionQuestions as MCQ[]) : [];
  } catch {
    return [];
  }
}

function getAvailableSections(): { sectionKey: string; label: string }[] {
  try {
    const config = JSON.parse(localStorage.getItem("exam-config") || "null");
    if (!config || !Array.isArray(config.sections)) return [
      { sectionKey: 'mcq', label: 'MCQ' },
      { sectionKey: 'brief', label: 'Briefs' },
      { sectionKey: 'case_study', label: 'Case Study' },
    ];
    return config.sections.map((s: { sectionKey: string }) => {
      let label = s.sectionKey;
      if (label === 'mcq') label = 'MCQ';
      if (label === 'brief') label = 'Briefs';
      if (label === 'case_study') label = 'Case Study';
      return { sectionKey: s.sectionKey, label };
    });
  } catch {
    return [
      { sectionKey: 'mcq', label: 'MCQ' },
      { sectionKey: 'brief', label: 'Briefs' },
      { sectionKey: 'case_study', label: 'Case Study' },
    ];
  }
}

export function useExamConfig() {
  const [sectionKey, setSectionKey] = useState<string>(() => 
    localStorage.getItem("currentSection") || "mcq"
  );
  const [questions, setQuestions] = useState<MCQ[]>([]);

  const config = JSON.parse(localStorage.getItem("exam-config") || "null");
  let durationMin = 30;
  if (config && typeof config.duration === 'number' && config.duration > 0) {
    durationMin = config.duration;
  }
  const durationSec = durationMin * 60;

  let startAt = localStorage.getItem("examStartAt");
  if (!startAt) {
    startAt = new Date().toISOString();
    localStorage.setItem("examStartAt", startAt);
  }

  useEffect(() => {
    let seed = localStorage.getItem("exam-seed");
    if (!seed) {
      seed = Date.now().toString();
      localStorage.setItem("exam-seed", seed);
    }
    
    const mcqs = getMCQsFromConfig();
    setQuestions(mcqs);
  }, [sectionKey]);

  const handleSectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSection = e.target.value;
    localStorage.setItem("currentSection", newSection);
    setSectionKey(newSection);
  };

  return {
    sectionKey,
    setSectionKey,
    questions,
    durationSec,
    startAt: startAt as string,
    availableSections: getAvailableSections(),
    handleSectionChange
  };
}

export type { MCQ };