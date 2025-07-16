import React, { useState } from "react";
import ExamSetupScreen from "../components/ExamSetupScreen";
import SectionSelector from "../components/SectionSelector";
import ExamRunner from "../components/ExamRunner";
import ResultView from "../components/ResultView";
import BrowseAllQuestions from "../components/BrowseAllQuestions";

const getSectionsFromConfig = (config: any) => {
  if (!config || !config.sections) return [];
  return config.sections.filter((s: any) => s.checked).map((s: any) => ({
    id: s.sectionKey,
    name: s.sectionKey.charAt(0).toUpperCase() + s.sectionKey.slice(1),
    questionCount: Number(s.questionCount),
    marks: Number(s.marks),
    duration: config.duration,
  }));
};

const ExamPage: React.FC = () => {
  const [step, setStep] = useState<"setup" | "section" | "exam" | "result" | "browse">("setup");
  const [sections, setSections] = useState<any[]>([]);

  const handleSetupProceed = () => {
    // Reset exam start time for a new exam
    localStorage.removeItem('examStartAt');
    // After setup, load sections from config and go to section selector
    const config = JSON.parse(localStorage.getItem("exam-config") || "null");
    const sectionList = getSectionsFromConfig(config);
    setSections(sectionList);

    // Select only the first N questions for each checked section and store in localStorage
    if (config && config.sections && config.module) {
      const { university, course, semester, subject, module } = config;
      const questionBank = require("../data/questionBank").questionBank;
      const universityObj = questionBank.universities.find((u: any) => u.id === university);
      const courseObj = universityObj?.courses.find((c: any) => c.id === course);
      const semesterObj = courseObj?.semesters.find((s: any) => s.id === semester);
      const subjectObj = semesterObj?.subjects.find((su: any) => su.id === subject);
      const moduleObj = subjectObj?.modules.find((m: any) => m.id === module);
      const examQuestions: Record<string, any[]> = {};
      if (moduleObj) {
        config.sections.forEach((section: any) => {
          if (!section.checked) return;
          const allQuestions = moduleObj[section.sectionKey] || [];
          const count = Number(section.questionCount) || 0;
          examQuestions[section.sectionKey] = allQuestions.slice(0, count);
        });
      }
      localStorage.setItem("examQuestions", JSON.stringify(examQuestions));
    }

    setStep("section");
  };

  const handleSectionStart = (section: any) => {
    // After section selection, go to exam runner
    setStep("exam");
  };

  // Handler to go to result view (to be passed to ExamRunner)
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
    // Load config, answers, and questions from localStorage
    const config = JSON.parse(localStorage.getItem("exam-config") || "null");
    const session = JSON.parse(localStorage.getItem("examSession") || "null");
    const answers = session && Array.isArray(session.answers) ? session.answers : [];
    const examQuestions = JSON.parse(localStorage.getItem("examQuestions") || "null");

    // Helper to get all questions for all checked sections (from examQuestions)
    function getAllQuestionsAndMarks() {
      if (!config || !Array.isArray(config.sections) || !examQuestions) return { questions: [], marks: [] };
      let questions: any[] = [];
      let marks: any[] = [];
      config.sections.forEach((section: any) => {
        if (!section.checked) return;
        const sectionQuestions = examQuestions[section.sectionKey] || [];
        questions = questions.concat(sectionQuestions);
        marks = marks.concat(Array(sectionQuestions.length).fill(Number(section.marks)));
      });
      return { questions, marks };
    }

    const { questions, marks } = getAllQuestionsAndMarks();
    const sessionAnswers = Array.isArray(session?.answers) ? session.answers : [];
    let totalScore = 0;
    let maxScore = 0;
    const failedQuestions: any[] = [];
    let questionIdx = 0;
    config.sections.forEach((section: any) => {
      if (!section.checked) return;
      const sectionQuestions = examQuestions[section.sectionKey] || [];
      for (let i = 0; i < sectionQuestions.length; i++) {
        const q = sectionQuestions[i];
        const mark = Number(section.marks) || 1;
        maxScore += mark;
        // Find the answer for this sectionKey and questionIndex
        const a = sessionAnswers.find((ans: any) => ans.sectionKey === section.sectionKey && ans.questionIndex === i) || {};
        if (a.selectedOption === q.answer) {
          totalScore += mark;
        } else {
          failedQuestions.push({
            question: q.question,
            userAnswer: a.selectedOption || "No answer",
            correctAnswer: q.answer,
            originalIndex: questionIdx,
          });
        }
        questionIdx++;
      }
    });

    console.log('DEBUG: config', config);
    console.log('DEBUG: questions', questions);
    console.log('DEBUG: marks', marks);
    console.log('DEBUG: answers', answers);
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
    // Reconstruct the full questions and answers arrays in the same order as the exam/result
    const config = JSON.parse(localStorage.getItem("exam-config") || "null");
    const examQuestions = JSON.parse(localStorage.getItem("examQuestions") || "null");
    const session = JSON.parse(localStorage.getItem("examSession") || "null");
    const sessionAnswers = Array.isArray(session?.answers) ? session.answers : [];
    let allQuestions: any[] = [];
    let allAnswers: any[] = [];
    if (config && Array.isArray(config.sections) && examQuestions) {
      config.sections.forEach((section: any) => {
        if (!section.checked) return;
        const sectionQuestions = examQuestions[section.sectionKey] || [];
        allQuestions = allQuestions.concat(sectionQuestions);
        for (let i = 0; i < sectionQuestions.length; i++) {
          // Find the answer for this sectionKey and questionIndex
          const a = sessionAnswers.find((ans: any) => ans.sectionKey === section.sectionKey && ans.questionIndex === i) || {};
          allAnswers.push(a);
        }
      });
    }
    return <BrowseAllQuestions questions={allQuestions} answers={allAnswers} onBack={() => setStep("result")} />;
  }
  return null;
};

export default ExamPage;

// Forward hideHeader and hideFooter static properties for _app.tsx
(ExamPage as any).hideHeader = (ExamRunner as any).hideHeader;
(ExamPage as any).hideFooter = (ExamRunner as any).hideFooter; 