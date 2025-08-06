import React, { useState } from "react";
import { ExamSetupScreen, SectionSelector, ExamRunner, ResultView, BrowseAllQuestions } from "../components/exam";
import { getQuestionBank } from "../lib/questionBank";

interface SectionConfig {
  sectionKey: string;
  checked: boolean;
  questionCount: number | string;
  marks: number | string;
  duration?: number;
}

interface Section {
  id: string;
  name: string;
  questionCount: number;
  marks: number;
  duration: number;
}

// MCQ type for type safety
interface MCQ {
  question: string;
  codeBlock?: string;
  language?: string;
  options: string[];
  answer: string;
  explanation?: string;
}

const getSectionsFromConfig = (config: { sections?: SectionConfig[]; duration?: number } | null): Section[] => {
  if (!config || !config.sections) return [];
  return config.sections.filter((s) => s.checked).map((s) => ({
    id: s.sectionKey,
    name: s.sectionKey.charAt(0).toUpperCase() + s.sectionKey.slice(1),
    questionCount: Number(s.questionCount),
    marks: Number(s.marks),
    duration: typeof config.duration === 'number' ? config.duration : 0,
  }));
};

const ExamPage: React.FC = () => {
  const [step, setStep] = useState<"setup" | "section" | "exam" | "result" | "browse">("setup");
  const [sections, setSections] = useState<Array<Section>>([]);

  const handleSetupProceed = () => {
    localStorage.removeItem('examStartAt');
    const config = JSON.parse(localStorage.getItem("exam-config") || "null") as { sections?: SectionConfig[]; module?: string; university?: string; course?: string; semester?: string; subject?: string } | null;
    const sectionList = getSectionsFromConfig(config);
    setSections(sectionList);

    if (config && config.sections && config.module) {
      const { university, course, semester, subject, module } = config;
      const questionBank = getQuestionBank();
      const universityObj = questionBank.universities.find((u) => u.id === university);
      const courseObj = universityObj?.courses.find((c) => c.id === course);
      const semesterObj = courseObj?.semesters.find((s) => s.id === semester);
      const subjectObj = semesterObj?.subjects.find((su) => su.id === subject);
      const moduleObj = subjectObj?.modules.find((m) => m.id === module);
      const examQuestions: Record<string, unknown[]> = {};
      if (moduleObj) {
        config.sections.forEach((section: SectionConfig) => {
          if (!section.checked) return;
          const allQuestions = ((moduleObj as unknown) as Record<string, unknown[]>)[section.sectionKey] || [];
          const count = Number(section.questionCount) || 0;
          examQuestions[section.sectionKey] = allQuestions.slice(0, count);
        });
      }
      localStorage.setItem("examQuestions", JSON.stringify(examQuestions));
    }
    setStep("section");
  };

  const handleSectionStart = () => {
    setStep("exam");
  };

  const handleExamFinish = () => {
    setStep("result");
  };

  if (step === "setup") {
    return <ExamSetupScreen onProceed={handleSetupProceed} />;
  }
  if (step === "section") {
    return <SectionSelector sections={sections} onStart={handleSectionStart} />;
  }
  if (step === "exam") {
    return <ExamRunner onFinish={handleExamFinish} />;
  }
  if (step === "result") {
    const config = JSON.parse(localStorage.getItem("exam-config") || "null") as { sections?: SectionConfig[] } | null;
    const session = JSON.parse(localStorage.getItem("examSession") || "null") as { answers?: { sectionKey: string; questionIndex: number; selectedOption?: string }[] } | null;
    const examQuestions = JSON.parse(localStorage.getItem("examQuestions") || "null") as Record<string, { question: string; answer: string }[]> | null;

    const sessionAnswers = Array.isArray(session?.answers) ? session.answers : [];
    let totalScore = 0;
    let maxScore = 0;
    const failedQuestions: { question: string; userAnswer: string; correctAnswer: string; originalIndex: number }[] = [];
    let questionIdx = 0;
    config?.sections?.forEach((section) => {
      if (!section.checked) return;
      const sectionQuestions = examQuestions?.[section.sectionKey] || [];
      for (let i = 0; i < sectionQuestions.length; i++) {
        const q = sectionQuestions[i];
        const mark = Number(section.marks) || 1;
        maxScore += mark;
        const a = sessionAnswers.find((ans: { sectionKey: string; questionIndex: number; selectedOption?: string }) => ans.sectionKey === section.sectionKey && ans.questionIndex === i);
        if (a && typeof a.selectedOption !== 'undefined' && a.selectedOption === q.answer) {
          totalScore += mark;
        } else {
          failedQuestions.push({
            question: q.question,
            userAnswer: a && typeof a.selectedOption !== 'undefined' ? a.selectedOption! : "No answer",
            correctAnswer: q.answer,
            originalIndex: questionIdx,
          });
        }
        questionIdx++;
      }
    });

    return (
      <ResultView
        totalScore={totalScore}
        maxScore={maxScore}
        failedQuestions={failedQuestions}
        onBrowseAll={() => setStep("browse")}
        onRetakeExam={() => {
          localStorage.removeItem('examSession');
          localStorage.removeItem('examQuestions');
          localStorage.removeItem('examStartAt');
          setStep('setup');
        }}
      />
    );
  }
  if (step === "browse") {
    const config = JSON.parse(localStorage.getItem("exam-config") || "null") as { sections?: SectionConfig[] } | null;
    const examQuestions = JSON.parse(localStorage.getItem("examQuestions") || "null") as Record<string, { question: string; answer: string }[]> | null;
    const session = JSON.parse(localStorage.getItem("examSession") || "null") as { answers?: { sectionKey: string; questionIndex: number; selectedOption?: string }[] } | null;
    const sessionAnswers = Array.isArray(session?.answers) ? session.answers : [];
    let allQuestions: MCQ[] = [];
    const allAnswers: { sectionKey: string; questionIndex: number; selectedOption?: string }[] = [];
    if (config && Array.isArray(config.sections) && examQuestions) {
      config.sections.forEach((section) => {
        if (!section.checked) return;
        // Ensure each question has the MCQ structure
        const sectionQuestions = (examQuestions[section.sectionKey] || []) as MCQ[];
        allQuestions = allQuestions.concat(sectionQuestions);
        for (let i = 0; i < sectionQuestions.length; i++) {
          const a = sessionAnswers.find((ans) => ans.sectionKey === section.sectionKey && ans.questionIndex === i);
          allAnswers.push(a && typeof a.selectedOption !== 'undefined' ? a : { sectionKey: section.sectionKey, questionIndex: i });
        }
      });
    }
    return <BrowseAllQuestions questions={allQuestions} answers={allAnswers} onBack={() => setStep("result")} />;
  }
  return null;
};

export default ExamPage;

// Forward hideHeader and hideFooter static properties for _app.tsx
(ExamPage as unknown as { hideHeader?: boolean }).hideHeader = (ExamRunner as unknown as { hideHeader?: boolean }).hideHeader;
(ExamPage as unknown as { hideFooter?: boolean }).hideFooter = (ExamRunner as unknown as { hideFooter?: boolean }).hideFooter; 