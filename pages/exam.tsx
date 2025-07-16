import React, { useState } from "react";
import ExamSetupScreen from "../components/ExamSetupScreen";
import SectionSelector from "../components/SectionSelector";
import ExamRunner from "../components/ExamRunner";

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
  const [step, setStep] = useState<"setup" | "section" | "exam">("setup");
  const [sections, setSections] = useState<any[]>([]);

  const handleSetupProceed = () => {
    // After setup, load sections from config and go to section selector
    const config = JSON.parse(localStorage.getItem("exam-config") || "null");
    const sectionList = getSectionsFromConfig(config);
    setSections(sectionList);
    setStep("section");
  };

  const handleSectionStart = (section: any) => {
    // After section selection, go to exam runner
    setStep("exam");
  };

  if (step === "setup") {
    return <ExamSetupScreen onProceed={handleSetupProceed} />;
  }
  if (step === "section") {
    return <SectionSelector sections={sections} onStart={handleSectionStart} />;
  }
  if (step === "exam") {
    return <ExamRunner />;
  }
  return null;
};

export default ExamPage;

// Forward hideHeader and hideFooter static properties for _app.tsx
(ExamPage as any).hideHeader = (ExamRunner as any).hideHeader;
(ExamPage as any).hideFooter = (ExamRunner as any).hideFooter; 