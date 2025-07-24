import { useState, useEffect } from "react";

interface ExamSessionAnswer {
  sectionKey: string;
  questionIndex: number;
  selectedOption?: string;
  markedForReview?: boolean;
}

function loadExamSession(questionsLen: number, sectionKey: string): ExamSessionAnswer[] {
  if (typeof window === 'undefined') return Array.from({length: questionsLen}, () => ({} as ExamSessionAnswer));
  try {
    const session = JSON.parse(localStorage.getItem('examSession') || 'null');
    if (session && Array.isArray(session.answers)) {
      const arr: ExamSessionAnswer[] = Array.from({length: questionsLen}, () => ({} as ExamSessionAnswer));
      session.answers.forEach((a: ExamSessionAnswer) => {
        if (a.sectionKey === sectionKey && typeof a.questionIndex === 'number' && a.questionIndex >= 0 && a.questionIndex < questionsLen) {
          arr[a.questionIndex] = a;
        }
      });
      return arr;
    }
  } catch {}
  return Array.from({length: questionsLen}, () => ({} as ExamSessionAnswer));
}

function saveExamSession(sectionKey: string, answers: ExamSessionAnswer[]) {
  let session: { answers: ExamSessionAnswer[] } = { answers: [] };
  try {
    session = JSON.parse(localStorage.getItem('examSession') || '{"answers":[]}');
    if (!Array.isArray(session.answers)) session.answers = [];
  } catch {}
  session.answers = (session.answers || []).filter((a: ExamSessionAnswer) => a.sectionKey !== sectionKey);
  session.answers = [...session.answers, ...answers];
  localStorage.setItem('examSession', JSON.stringify(session));
}

export function useExamSession(questionsLength: number, sectionKey: string) {
  const [answers, setAnswers] = useState<ExamSessionAnswer[]>([]);

  useEffect(() => {
    setAnswers(loadExamSession(questionsLength, sectionKey));
  }, [questionsLength, sectionKey]);

  useEffect(() => {
    if (answers.length === questionsLength && questionsLength > 0) {
      saveExamSession(sectionKey, answers);
    }
  }, [answers, questionsLength, sectionKey]);

  const updateAnswer = (current: number, update: Partial<ExamSessionAnswer>) => {
    setAnswers(prev => {
      const next = [...prev];
      next[current] = { ...next[current], sectionKey, questionIndex: current, ...update };
      return next;
    });
  };

  const clearAnswer = (current: number) => {
    setAnswers(prev => {
      const next = [...prev];
      next[current] = { ...next[current], sectionKey, questionIndex: current };
      delete next[current].selectedOption;
      delete next[current].markedForReview;
      return next;
    });
  };

  return {
    answers,
    updateAnswer,
    clearAnswer
  };
}

export type { ExamSessionAnswer };