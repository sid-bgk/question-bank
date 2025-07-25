import React, { useState, useEffect, useMemo } from "react";
import { questionBank } from "../../data/questionBank";
import Link from "next/link";

interface SectionInput {
  sectionKey: string;
  checked: boolean;
  questionCount: string;
  marks: string;
  maxQuestions: number;
}

interface ExamSetupScreenProps {
  onProceed?: () => void;
}

const ExamSetupScreen: React.FC<ExamSetupScreenProps> = ({ onProceed }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [university, setUniversity] = useState("");
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");
  const [module, setModule] = useState("");
  const [sectionInputs, setSectionInputs] = useState<SectionInput[]>([]);
  const [duration, setDuration] = useState("");
  const [durationError, setDurationError] = useState("");
  const [saveMessage, setSaveMessage] = useState("");

  // Dynamic dropdown data
  const universities = questionBank.universities || [];
  const selectedUniversity = universities.find((u) => u.id === university);
  const courses = selectedUniversity?.courses || [];
  const selectedCourse = courses.find((c) => c.id === course);
  const semesters = selectedCourse?.semesters || [];
  const selectedSemester = semesters.find((s) => s.id === semester);
  const subjects = selectedSemester?.subjects || [];
  const selectedSubject = subjects.find((sj) => sj.id === subject);
  const modules = selectedSubject?.modules || [];
  const selectedModule = modules.find((m) => m.id === module);

  // Get available sections for the selected module
  const dynamicSections = useMemo(() => {
    const sections: { key: string; label: string; maxQuestions: number }[] = [];
    if (selectedModule) {
      if (Array.isArray(selectedModule.mcq) && selectedModule.mcq.length > 0) {
        sections.push({ key: "mcq", label: "MCQ", maxQuestions: selectedModule.mcq.length });
      }
      if (Array.isArray(selectedModule.brief) && selectedModule.brief.length > 0) {
        sections.push({ key: "brief", label: "Briefs", maxQuestions: selectedModule.brief.length });
      }
      if (Array.isArray(selectedModule.case_study) && selectedModule.case_study.length > 0) {
        sections.push({ key: "case_study", label: "Case Study", maxQuestions: selectedModule.case_study.length });
      }
    }
    return sections;
  }, [selectedModule]);

  // Sync sectionInputs with dynamicSections (prefill with maxQuestions and marks=1, checked by default)
  useEffect(() => {
    setSectionInputs(
      dynamicSections.map(section => ({
        sectionKey: section.key,
        checked: true,
        questionCount: String(section.maxQuestions),
        marks: "1",
        maxQuestions: section.maxQuestions,
      }))
    );
  }, [module, dynamicSections]);

  // On mount, pre-fill from exam-config if exists
  useEffect(() => {
    const config = JSON.parse(localStorage.getItem("exam-config") || "null");
    if (config) {
      setUniversity(config.university || "");
      setCourse(config.course || "");
      setSemester(config.semester || "");
      setSubject(config.subject || "");
      setModule(config.module || "");
      setDuration(config.duration ? String(config.duration) : "");
      if (Array.isArray(config.sections)) {
        setSectionInputs(config.sections);
      }
    }
  }, []);

  // Update sectionInputs on input/checkbox change
  const handleSectionInputChange = (index: number, field: "questionCount" | "marks" | "checked", value: string | boolean) => {
    setSectionInputs(prev => {
      const updated = [...prev];
      if (field === "checked") {
        updated[index] = { ...updated[index], checked: Boolean(value) };
      } else {
        updated[index] = { ...updated[index], [field]: value };
      }
      return updated;
    });
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDuration(value);
    if (!/^\d+$/.test(value) || parseInt(value, 10) <= 0) {
      setDurationError("Duration must be a positive integer (minutes)");
    } else {
      setDurationError("");
    }
  };

  // Pure validation for render logic
  const isFormValid = () => {
    if (!university || !course || !semester || !subject || !module) return false;
    if (!duration || isNaN(Number(duration)) || Number(duration) < 1) return false;
    const checkedSections = sectionInputs.filter(s => s.checked);
    if (checkedSections.length === 0) return false;
    for (let i = 0; i < sectionInputs.length; i++) {
      const s = sectionInputs[i];
      if (!s.checked) continue;
      const qCount = Number(s.questionCount);
      const marks = Number(s.marks);
      if (!qCount || isNaN(qCount) || qCount < 1) return false;
      if (qCount > s.maxQuestions) return false;
      if (!marks || isNaN(marks) || marks < 1) return false;
    }
    return true;
  };

  // Validation for sectionInputs and duration (sets saveMessage)
  const validateForm = () => {
    if (!university || !course || !semester || !subject || !module) {
      setSaveMessage("Please fill all dropdowns.");
      return false;
    }
    if (!duration || isNaN(Number(duration)) || Number(duration) < 1) {
      setSaveMessage("Duration must be at least 1 minute.");
      return false;
    }
    const checkedSections = sectionInputs.filter(s => s.checked);
    if (checkedSections.length === 0) {
      setSaveMessage("Please select at least one section.");
      return false;
    }
    for (let i = 0; i < sectionInputs.length; i++) {
      const s = sectionInputs[i];
      if (!s.checked) continue;
      const qCount = Number(s.questionCount);
      const marks = Number(s.marks);
      if (!qCount || isNaN(qCount) || qCount < 1) {
        setSaveMessage(`Enter a valid question count for ${dynamicSections[i].label}.`);
        return false;
      }
      if (qCount > s.maxQuestions) {
        setSaveMessage(`Question count for ${dynamicSections[i].label} cannot exceed ${s.maxQuestions}.`);
        return false;
      }
      if (!marks || isNaN(marks) || marks < 1) {
        setSaveMessage(`Marks for ${dynamicSections[i].label} must be at least 1.`);
        return false;
      }
    }
    setSaveMessage("");
    return true;
  };

  // In the section setup step (step === 2), after successful validation and save, call onProceed if provided
  const handleProceed = () => {
    if (!validateForm()) return;
    const config = {
      university,
      course,
      semester,
      subject,
      module,
      sections: sectionInputs,
      duration: parseInt(duration, 10),
    };
    try {
      localStorage.setItem("exam-config", JSON.stringify(config));
      setSaveMessage("Exam setup saved successfully!");
      if (onProceed) onProceed();
    } catch {
      setSaveMessage("Failed to save exam setup.");
    }
  };

  // Step 1: Academic Selection
  const canProceedToSection = university && course && semester && subject && module;

  return (
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 font-sans p-4">
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
        <Link href="/" className="inline-block px-3 sm:px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base">
          ← Back to Home
        </Link>
      </div>
      {step === 1 && (
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl w-full max-w-[400px] flex flex-col text-gray-900">
          <h2 className="mt-0 mb-4 font-extrabold text-lg sm:text-xl tracking-tight text-blue-900">Exam Setup</h2>
          <label className="block font-semibold mb-1 text-xs sm:text-sm">University</label>
          <select value={university} onChange={e => setUniversity(e.target.value)} className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-200 rounded mb-3 bg-gray-50 focus:outline-none focus:border-blue-400">
            <option value="">Select University</option>
            {universities.map((u: { id: string; name: string }) => (
              <option key={u.id} value={u.id}>{u.name}</option>
            ))}
          </select>
          <label className="block font-semibold mb-1 text-xs sm:text-sm">Course</label>
          <select value={course} onChange={e => setCourse(e.target.value)} className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-200 rounded mb-3 bg-gray-50 focus:outline-none focus:border-blue-400" disabled={!university}>
            <option value="">Select Course</option>
            {courses.map((c: { id: string; name: string }) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
          <label className="block font-semibold mb-1 text-xs sm:text-sm">Semester</label>
          <select value={semester} onChange={e => setSemester(e.target.value)} className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-200 rounded mb-3 bg-gray-50 focus:outline-none focus:border-blue-400" disabled={!course}>
            <option value="">Select Semester</option>
            {semesters.map((s: { id: string; name: string }) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
          <label className="block font-semibold mb-1 text-xs sm:text-sm">Subject</label>
          <select value={subject} onChange={e => setSubject(e.target.value)} className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-200 rounded mb-3 bg-gray-50 focus:outline-none focus:border-blue-400" disabled={!semester}>
            <option value="">Select Subject</option>
            {subjects.map((sj: { id: string; name: string }) => (
              <option key={sj.id} value={sj.id}>{sj.name}</option>
            ))}
          </select>
          <label className="block font-semibold mb-1 text-xs sm:text-sm">Module</label>
          <select value={module} onChange={e => setModule(e.target.value)} className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-200 rounded mb-4 bg-gray-50 focus:outline-none focus:border-blue-400" disabled={!subject}>
            <option value="">Select Module</option>
            {modules.map((m: { id: string; name: string }) => (
              <option key={m.id} value={m.id}>{m.name}</option>
            ))}
          </select>
          <button
            className={`w-full py-2 font-bold text-sm sm:text-base rounded-lg transition-colors duration-200 shadow-md focus:outline-none ${canProceedToSection ? 'bg-blue-600 hover:bg-blue-800 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            onClick={() => canProceedToSection && setStep(2)}
            disabled={!canProceedToSection}
          >
            Next
          </button>
        </div>
      )}
      {step === 2 && (
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl w-full max-w-[400px] flex flex-col text-gray-900">
          <h3 className="mt-0 mb-4 font-extrabold text-lg sm:text-xl tracking-tight text-blue-900">Section Setup</h3>
          {dynamicSections.length === 0 && (
            <div className="mb-4 text-gray-500 text-xs sm:text-sm">No sections available for this module.</div>
          )}
          {dynamicSections.map((section, idx) => (
            <div key={section.key} className="mb-4 flex flex-col gap-1">
              <div className="flex items-center mb-1">
                <input
                  type="checkbox"
                  checked={Boolean(sectionInputs[idx]?.checked)}
                  onChange={e => handleSectionInputChange(idx, "checked", e.target.checked)}
                  className="mr-2 h-4 w-4 accent-blue-600"
                />
                <span className="font-bold text-sm sm:text-base text-gray-900">{section.label}</span>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 ml-6 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <label className="font-medium text-gray-900">Questions</label>
                  <input
                    type="number"
                    min={1}
                    max={section.maxQuestions}
                    value={sectionInputs[idx]?.questionCount}
                    onChange={e => handleSectionInputChange(idx, "questionCount", e.target.value)}
                    className="w-16 px-2 py-1 text-xs sm:text-sm border border-gray-200 rounded focus:outline-none focus:border-blue-400"
                    disabled={!sectionInputs[idx]?.checked}
                    placeholder={`Max ${section.maxQuestions}`}
                  />
                  <span className="text-gray-500 text-xs">/ {section.maxQuestions}</span>
                </div>
                <div className="flex items-center gap-2">
                  <label className="font-medium text-gray-900">Marks</label>
                  <input
                    type="number"
                    min={1}
                    value={sectionInputs[idx]?.marks}
                    onChange={e => handleSectionInputChange(idx, "marks", e.target.value)}
                    className="w-14 px-2 py-1 text-xs sm:text-sm border border-gray-200 rounded focus:outline-none focus:border-blue-400"
                    disabled={!sectionInputs[idx]?.checked}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4 mb-0 flex flex-col sm:flex-row items-start sm:items-center gap-2 text-xs sm:text-sm">
            <label className="font-medium text-gray-900">Duration (minutes)</label>
            <input
              type="number"
              min={1}
              value={duration}
              onChange={handleDurationChange}
              className="w-20 px-2 py-1 text-xs sm:text-sm border border-gray-200 rounded focus:outline-none focus:border-blue-400"
            />
            {durationError && (
              <div className="text-red-600 text-xs font-medium">{durationError}</div>
            )}
          </div>
          <div className="flex gap-2 mt-6">
            <button
              className="w-1/2 py-2 font-bold text-sm sm:text-base rounded-lg transition-colors duration-200 shadow-md focus:outline-none bg-gray-200 text-gray-700 hover:bg-gray-300"
              onClick={() => setStep(1)}
            >
              Back
            </button>
            <button
              className={`w-1/2 py-2 font-bold text-sm sm:text-base rounded-lg transition-colors duration-200 shadow-md focus:outline-none ${isFormValid() ? 'bg-green-600 hover:bg-green-800 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
              onClick={handleProceed}
              disabled={!isFormValid()}
            >
              Proceed to Instructions
            </button>
          </div>
          {saveMessage && (
            <div className={`mt-3 font-bold text-xs sm:text-sm ${saveMessage.includes('success') ? 'text-green-700' : 'text-red-600'}`}>{saveMessage}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default ExamSetupScreen; 