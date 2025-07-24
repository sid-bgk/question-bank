import React, { useEffect, useState, memo } from "react";
import { ArrowLeftIcon, ArrowRightIcon, BookmarkIcon, TrashIcon } from "@heroicons/react/24/solid";
import { questionBank } from "../data/questionBank";
import { Pie } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';
import { XMarkIcon } from '@heroicons/react/24/solid';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
import Timer from "./Timer";

// MCQ type
interface MCQ {
  question: string;
  codeBlock?: string;
  language?: string;
  options: string[];
  answer: string;
  explanation?: string;
}

// Utility: Fetch MCQs for a given path (from localStorage)
function getMCQsFromConfig(): MCQ[] {
  try {
    const config = JSON.parse(localStorage.getItem("exam-config") || "null");
    let sectionKey = localStorage.getItem("currentSection") || "mcq";
    if (!config) return [];
    // Use only the selected questions from examQuestions
    const examQuestions = JSON.parse(localStorage.getItem("examQuestions") || "null");
    if (examQuestions && examQuestions[sectionKey]) {
      return examQuestions[sectionKey];
    }
    // fallback: fetch all questions for section (legacy)
    const { university, course, semester, subject, module } = config;
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
    // Only allow valid keys
    if (!['mcq', 'brief', 'case_study'].includes(sectionKey)) sectionKey = 'mcq';
    const sectionQuestions = (moduleObj as Record<string, unknown>)[sectionKey];
    return Array.isArray(sectionQuestions) ? (sectionQuestions as MCQ[]) : [];
  } catch {
    return [];
  }
}

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
      // Build array of length questionsLen, filling with answers for this section at correct indices (0-based)
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
  // Merge with existing answers for other sections
  let session: { answers: ExamSessionAnswer[] } = { answers: [] };
  try {
    session = JSON.parse(localStorage.getItem('examSession') || '{"answers":[]}');
    if (!Array.isArray(session.answers)) session.answers = [];
  } catch {}
  // Remove old answers for this section
  session.answers = (session.answers || []).filter((a: ExamSessionAnswer) => a.sectionKey !== sectionKey);
  // Add new answers for this section
  session.answers = [...session.answers, ...answers];
  localStorage.setItem('examSession', JSON.stringify(session));
}

interface ExamRunnerProps {
  onFinish?: () => void;
}

const ExamRunner: React.FC<ExamRunnerProps> = ({ onFinish }) => {
  const [questions, setQuestions] = useState<MCQ[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<ExamSessionAnswer[]>([]);
  const [expired, setExpired] = useState(false);
  const [showFinishModal, setShowFinishModal] = useState(false);

  // Get global duration from config
  const config = JSON.parse(localStorage.getItem("exam-config") || "null");
  let durationMin = 30;
  if (config && typeof config.duration === 'number' && config.duration > 0) {
    durationMin = config.duration;
  }
  const durationSec = durationMin * 60;

  // Helper: get all available sections for the current module from exam-config
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

  // Track sectionKey in state to force rerender on change
  const [sectionKey, setSectionKey] = useState<string>(() => localStorage.getItem("currentSection") || "mcq");

  // Get or set exam start time
  let startAt = localStorage.getItem("examStartAt");
  if (!startAt) {
    startAt = new Date().toISOString();
    localStorage.setItem("examStartAt", startAt);
  }

  // Timer effect: always update timer every second, using global duration
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    function updateTimer() {
      const now = Date.now();
      const startTime = new Date(startAt as string).getTime();
      const elapsed = Math.floor((now - startTime) / 1000);
      const rem = durationSec - elapsed;
      if (rem <= 0 && interval) {
        clearInterval(interval);
      }
    }
    updateTimer();
    interval = setInterval(updateTimer, 1000);
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [durationSec, startAt]);

  // --- Modal snapshot state ---
  const [modalStats, setModalStats] = useState<null | Record<string, unknown>>(null);

  // When opening modal, capture a snapshot of stats
  const openFinishModal = () => {
    // Calculate summary for modal (snapshot)
    const totalQuestions = questions.length;
    const attempted = answers.filter(ans => ans.selectedOption).length;
    const markedForReview = answers.filter(ans => ans.markedForReview).length;
    const unattempted = totalQuestions - attempted;
    const pieData: ChartData<'pie', number[], unknown> = {
      labels: ['Attempted', 'Marked for Review', 'Unattempted'],
      datasets: [
        {
          data: [attempted, markedForReview, unattempted],
          backgroundColor: [
            '#2563eb', // blue-600
            '#f59e42', // yellow-400
            '#e5e7eb', // gray-200
          ],
          borderWidth: 1,
        },
      ],
    };
    const pieOptions: ChartOptions<'pie'> = {
      plugins: {
        legend: { display: false },
      },
      cutout: '70%',
      responsive: true,
      maintainAspectRatio: false,
    };
    // Section summary for modal (accurate per section)
    const sectionSummary: SectionSummary[] = getAvailableSections().map((s) => {
      // Use selected questions from examQuestions in localStorage
      const examQuestions = JSON.parse(localStorage.getItem("examQuestions") || "null");
      const sectionQuestions = Array.isArray(examQuestions?.[s.sectionKey]) ? examQuestions[s.sectionKey] : [];
      const sectionAnswers = loadExamSession(sectionQuestions.length, s.sectionKey);
      const attempted = sectionAnswers.filter(ans => ans && ans.selectedOption).length;
      const review = sectionAnswers.filter(ans => ans && ans.markedForReview).length;
      const unattempted = sectionAnswers.filter(ans => !ans.selectedOption && !ans.markedForReview).length;
      // Status: Completed if all attempted or unattempted is 0, else In Progress
      const status = unattempted === 0 ? 'Completed' : 'In Progress';
      return {
        name: s.label,
        status,
        attempted,
        review,
        unattempted,
      };
    });
    setModalStats({ totalQuestions, attempted, markedForReview, unattempted, pieData, pieOptions, sectionSummary });
    setShowFinishModal(true);
  };

  // When sectionKey changes, reload questions and answers, but do NOT reset timer
  useEffect(() => {
    // Get or generate exam-seed
    let seed = localStorage.getItem("exam-seed");
    if (!seed) {
      seed = Date.now().toString();
      localStorage.setItem("exam-seed", seed);
    }
    // Remove shuffling: use questions as-is from examQuestions
    const mcqs = getMCQsFromConfig();
    setQuestions(mcqs);
    setAnswers(loadExamSession(mcqs.length, sectionKey));
    setCurrent(0); // reset to first question
  }, [sectionKey]);

  useEffect(() => {
    if (answers.length === questions.length && questions.length > 0) {
      saveExamSession(sectionKey, answers);
    }
  }, [answers, questions.length, sectionKey]);

  if (!questions.length) {
    return <div className="p-8 text-center text-gray-500">No questions found for this section.</div>;
  }

  // Removed unused formatTime

  const q = questions[current];
  const a = answers[current] || {};

  // Palette state helpers
  const getPaletteState = (idx: number): 'review' | 'attempted' | 'unattempted' => {
    const ans = answers[idx];
    if (ans?.markedForReview) return 'review';
    if (ans?.selectedOption) return 'attempted';
    return 'unattempted';
  };

  // Handlers
  const handleSelectOption = (option: string) => {
    setAnswers(prev => {
      const next = [...prev];
      next[current] = { ...next[current], sectionKey, questionIndex: current, selectedOption: option };
      return next;
    });
  };
  const handleMarkForReview = () => {
    setAnswers(prev => {
      const next = [...prev];
      next[current] = { ...next[current], sectionKey, questionIndex: current, markedForReview: !next[current]?.markedForReview };
      return next;
    });
  };
  const handleClearResponse = () => {
    setAnswers(prev => {
      const next = [...prev];
      next[current] = { ...next[current], sectionKey, questionIndex: current };
      delete next[current].selectedOption;
      delete next[current].markedForReview;
      return next;
    });
  };

  // Attempted count (removed unused variable)

  // Section dropdown change handler
  function handleSectionChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newSection = e.target.value;
    localStorage.setItem("currentSection", newSection);
    setSectionKey(newSection);
    setCurrent(0); // reset to first question
  }

  // Section-specific question rendering
  function renderQuestion() {
    if (sectionKey === 'mcq') {
      return (
        <>
          <div className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Select an option</div>
          <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
            {q.options && Array.isArray(q.options) ? q.options.map((opt: string) => (
              <label key={opt} className={`exam-option cursor-pointer select-none border border-gray-200 rounded-lg px-3 sm:px-4 py-3 sm:py-4 bg-gray-50 hover:bg-blue-50 transition-colors gap-3 ${a.selectedOption === opt ? 'ring-2 ring-blue-600 border-blue-600' : ''}`}>
                <input type="radio" name="option" className="accent-blue-600 h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" checked={a.selectedOption === opt} onChange={() => handleSelectOption(opt)} disabled={expired} />
                <span className="text-sm sm:text-base text-gray-700 leading-relaxed flex-1">{opt}</span>
              </label>
            )) : <div className="text-gray-400">No options available.</div>}
          </div>
          <button className="text-blue-700 text-sm sm:text-base font-semibold hover:underline flex items-center gap-1" onClick={handleClearResponse} disabled={expired}>
            <TrashIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            Clear Response
          </button>
        </>
      );
    } else if (sectionKey === 'brief') {
      return (
        <div className="flex flex-col gap-4 mb-4 sm:mb-6">
          <div className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Your Answer</div>
          <textarea className="w-full border border-gray-300 rounded p-3 sm:p-4 text-sm sm:text-base min-h-[120px] sm:min-h-[150px] resize-none" placeholder="Type your answer here..." disabled={expired} />
        </div>
      );
    } else if (sectionKey === 'case_study') {
      // Type guard for case_study
      const title = typeof q === 'object' && 'title' in q ? (q as { title: string }).title : '';
      const description = typeof q === 'object' && 'description' in q ? (q as { description: string }).description : '';
      return (
        <div className="flex flex-col gap-4 mb-4 sm:mb-6">
          <div className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Case Study</div>
          <div className="font-semibold text-blue-900 mb-2 text-base sm:text-lg">{title}</div>
          <div className="text-gray-700 mb-2 whitespace-pre-line text-sm sm:text-lg leading-relaxed">{description}</div>
        </div>
      );
    } else {
      return <div className="text-gray-400">Unsupported section type.</div>;
    }
  }

  // Removed unused modal summary variables

  // Memoized modal to prevent unnecessary re-renders
  interface SectionSummary {
    name: string;
    status: string;
    attempted: number;
    review: number;
    unattempted: number;
  }
  interface FinishTestModalProps {
    totalQuestions: number;
    attempted: number;
    markedForReview: number;
    unattempted: number;
    pieData: ChartData<'pie', number[], unknown>;
    pieOptions: ChartOptions<'pie'>;
    sectionSummary: SectionSummary[];
    onClose: () => void;
  }
  const FinishTestModal = memo(function FinishTestModal({ totalQuestions, attempted, markedForReview, unattempted, pieData, pieOptions, sectionSummary, onClose }: FinishTestModalProps) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="p-4 sm:p-8 relative">
            {/* Close Icon */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={onClose}
              aria-label="Close"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-lg sm:text-xl font-bold text-red-600 flex items-center gap-2"><span className="text-xl sm:text-2xl">&#9888;</span>Finish Test</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center mb-6 sm:mb-8">
              <div className="w-32 h-32 sm:w-40 sm:h-40">
                <Pie data={pieData} options={pieOptions} />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div className="text-base sm:text-lg font-semibold mb-2 text-gray-900">Your Test Summary</div>
                <div className="text-gray-900 text-sm sm:text-base mb-1">Total Questions: <span className="font-bold">{totalQuestions}</span></div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2">
                  <div className="flex items-center justify-center sm:justify-start gap-2"><span className="w-3 h-3 rounded-full bg-blue-600 inline-block"></span><span className="text-gray-900 font-semibold text-sm">Attempted:</span> <span className="font-bold text-gray-900">{attempted}</span></div>
                  <div className="flex items-center justify-center sm:justify-start gap-2"><span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span><span className="text-gray-900 font-semibold text-sm">Revisit:</span> <span className="font-bold text-gray-900">{markedForReview}</span></div>
                  <div className="flex items-center justify-center sm:justify-start gap-2"><span className="w-3 h-3 rounded-full bg-gray-300 border border-gray-400 inline-block"></span><span className="text-gray-900 font-semibold text-sm">Unattempted:</span> <span className="font-bold text-gray-900">{unattempted}</span></div>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="text-sm sm:text-base font-semibold mb-2 text-gray-900">Section Summary</div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm border rounded overflow-hidden">
                  <thead>
                    <tr className="bg-gray-100 text-gray-800">
                      <th className="py-2 px-2 sm:px-3 text-left font-semibold">#</th>
                      <th className="py-2 px-2 sm:px-3 text-left font-semibold">Section</th>
                      <th className="py-2 px-2 sm:px-3 text-left font-semibold">Status</th>
                      <th className="py-2 px-2 sm:px-3 text-left font-semibold">Done</th>
                      <th className="py-2 px-2 sm:px-3 text-left font-semibold">Review</th>
                      <th className="py-2 px-2 sm:px-3 text-left font-semibold">Left</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sectionSummary.map((s: SectionSummary, idx: number) => (
                      <tr key={s.name} className="border-t text-gray-900">
                        <td className="py-2 px-2 sm:px-3">{idx + 1}</td>
                        <td className="py-2 px-2 sm:px-3">{s.name}</td>
                        <td className="py-2 px-2 sm:px-3">{s.status}</td>
                        <td className="py-2 px-2 sm:px-3">{s.attempted}</td>
                        <td className="py-2 px-2 sm:px-3">{s.review}</td>
                        <td className="py-2 px-2 sm:px-3">{s.unattempted}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-6">
              <button
                className="px-4 sm:px-6 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors text-sm sm:text-base"
                onClick={() => {
                  if (onFinish) onFinish();
                }}
              >Yes, End Test</button>
              <button
                className="px-4 sm:px-6 py-2 bg-gray-200 text-gray-700 font-bold rounded hover:bg-gray-300 transition-colors text-sm sm:text-base"
                onClick={onClose}
              >No, Back to Test</button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200 font-sans exam-container">
      {/* Top Bar */}
      <div className="relative flex flex-col sm:flex-row items-center justify-between bg-white shadow px-3 sm:px-6 py-3 border-b border-gray-200">
        {/* Left: Section Dropdown */}
        <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto mb-2 sm:mb-0">
          <select
            className="px-2 py-1 border rounded text-xs sm:text-sm font-semibold text-gray-700 bg-gray-50 flex-1 sm:flex-none"
            value={sectionKey}
            onChange={handleSectionChange}
            disabled={expired}
          >
            {getAvailableSections().map(s => (
              <option key={s.sectionKey} value={s.sectionKey}>{s.label}</option>
            ))}
          </select>
        </div>
        {/* Center: Question Number Palette */}
        <div className="flex items-center gap-1 sm:gap-2 bg-gray-50 rounded px-2 py-1 border border-gray-200 shadow-sm">
          {/* Left Arrow */}
          <button
            className="rounded bg-gray-200 p-1 text-gray-600 hover:bg-gray-300 flex items-center justify-center"
            onClick={() => setCurrent(c => Math.max(0, c - 1))}
            disabled={current === 0 || expired}
            aria-label="Previous question"
          >
            <ArrowLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          {/* Previous button */}
          <button
            className={`w-6 h-6 sm:w-8 sm:h-8 rounded font-bold border mx-0.5 sm:mx-1 transition-colors duration-150 text-xs sm:text-sm ${current === 0 ? 'bg-gray-200 text-gray-400 border-gray-300' : getPaletteState(current-1) === 'review' ? 'bg-yellow-400 text-white border-yellow-600' : getPaletteState(current-1) === 'attempted' ? 'bg-green-500 text-white border-green-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'}`}
            onClick={() => setCurrent(c => Math.max(0, c - 1))}
            disabled={current === 0 || expired}
          >
            {current > 0 ? current : ''}
          </button>
          {/* Active/current button */}
          <button
            className={`w-6 h-6 sm:w-8 sm:h-8 rounded font-bold border mx-0.5 sm:mx-1 transition-colors duration-150 bg-blue-600 text-white border-blue-700 ring-2 ring-blue-600 text-xs sm:text-sm ${getPaletteState(current) === 'review' ? 'bg-yellow-400 text-white border-yellow-600 ring-yellow-600' : ''}`}
            disabled
          >
            {current + 1}
          </button>
          {/* Next button */}
          <button
            className={`w-6 h-6 sm:w-8 sm:h-8 rounded font-bold border mx-0.5 sm:mx-1 transition-colors duration-150 text-xs sm:text-sm ${current === questions.length - 1 ? 'bg-gray-200 text-gray-400 border-gray-300' : getPaletteState(current+1) === 'review' ? 'bg-yellow-400 text-white border-yellow-600' : getPaletteState(current+1) === 'attempted' ? 'bg-green-500 text-white border-green-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'}`}
            onClick={() => setCurrent(c => Math.min(questions.length - 1, c + 1))}
            disabled={current === questions.length - 1 || expired}
          >
            {current < questions.length - 1 ? current + 2 : ''}
          </button>
          {/* Right Arrow */}
          <button
            className="rounded bg-gray-200 p-1 text-gray-600 hover:bg-gray-300 flex items-center justify-center"
            onClick={() => setCurrent(c => Math.min(questions.length - 1, c + 1))}
            disabled={current === questions.length - 1 || expired}
            aria-label="Next question"
          >
            <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
        {/* Right: Timer and Finish Test */}
        <div className="flex items-center gap-2 sm:gap-6 w-full sm:w-auto justify-center sm:justify-end mt-2 sm:mt-0">
          <span className="font-mono text-gray-700 text-xs sm:text-base">
            <span className="hidden sm:inline">Section Time: </span><span className="font-bold">
              <Timer durationSec={durationSec} startAt={startAt} onExpire={() => setExpired(true)} />
            </span>
          </span>
          <button className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-200 text-gray-700 font-bold rounded hover:bg-gray-300 transition-colors text-xs sm:text-sm" onClick={openFinishModal}>Finish Test</button>
        </div>
      </div>
      {/* Attempted Count: Centered below header */}
      <div className="w-full flex justify-center mt-2 mb-2">
        <div className="text-xs sm:text-sm text-gray-500 font-semibold bg-white bg-opacity-80 px-3 sm:px-4 py-1 rounded shadow-sm">Attempted {answers.filter(ans => ans.selectedOption).length}/{questions.length}</div>
      </div>
      {/* Main Content */}
      <div className="flex flex-1 items-stretch overflow-hidden min-h-0 exam-content">
        {/* Left Arrow */}
        <div className="hidden sm:flex flex-col justify-center items-center w-16 bg-transparent">
          <button
            className="rounded-full bg-blue-700 hover:bg-blue-800 text-white w-10 h-10 flex items-center justify-center shadow transition-colors"
            onClick={() => setCurrent(c => Math.max(0, c - 1))}
            disabled={current === 0 || expired}
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
        </div>
        {/* Center Panel: Dynamic Question */}
        <div className="flex-1 flex flex-col justify-stretch py-3 sm:py-6 px-0 min-h-0">
          <div className="flex flex-col lg:flex-row w-full h-full min-h-0 bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Question Area */}
            <div className="flex-1 p-4 sm:p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col justify-start min-h-0 exam-question-area">
              <div>
                <div className="text-base sm:text-lg font-bold text-gray-800 mb-2">Question {current + 1}</div>
                <div className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 whitespace-pre-line leading-relaxed">{
                  sectionKey === 'case_study'
                    ? (typeof q === 'object' && 'title' in q ? (q as { title: string }).title : '')
                    : q.question
                }</div>
                <label className="inline-flex items-center gap-2 cursor-pointer select-none mb-4">
                  <input type="checkbox" className="accent-blue-600 h-4 w-4" checked={!!a.markedForReview} onChange={handleMarkForReview} disabled={expired} />
                  <span className="text-xs sm:text-sm font-medium text-gray-700 flex items-center gap-1"><BookmarkIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />Revisit Later</span>
                </label>
              </div>
            </div>
            {/* Options/Answer/CaseStudy Area */}
            <div className="flex-1 p-4 sm:p-6 lg:p-10 flex flex-col justify-start min-h-0 exam-options-area">
              {renderQuestion()}
            </div>
          </div>
        </div>
        {/* Right Arrow */}
        <div className="hidden sm:flex flex-col justify-center items-center w-16 bg-transparent">
          <button
            className="rounded-full bg-blue-700 hover:bg-blue-800 text-white w-10 h-10 flex items-center justify-center shadow transition-colors"
            onClick={() => setCurrent(c => Math.min(questions.length - 1, c + 1))}
            disabled={current === questions.length - 1 || expired}
          >
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
      {/* Bottom Navigation */}
      <div className="flex justify-between sm:justify-end items-center px-4 sm:px-12 py-3 sm:py-4 bg-white border-t border-gray-200 gap-2 sm:gap-4">
        <button
          className="px-4 sm:px-6 py-2 bg-gray-200 text-gray-700 font-bold rounded hover:bg-gray-300 transition-colors text-sm sm:text-base"
          onClick={() => setCurrent(c => Math.max(0, c - 1))}
          disabled={current === 0 || expired}
        >Previous</button>
        <button
          className="px-4 sm:px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-800 transition-colors text-sm sm:text-base"
          onClick={() => setCurrent(c => Math.min(questions.length - 1, c + 1))}
          disabled={current === questions.length - 1 || expired}
        >Next</button>
      </div>
      {/* Render modal if open */}
      {showFinishModal && modalStats && <FinishTestModal {...(modalStats as unknown as FinishTestModalProps)} onClose={() => setShowFinishModal(false)} />}
    </div>
  );
};

export default ExamRunner;

(ExamRunner as unknown as { hideHeader?: boolean }).hideHeader = true;
(ExamRunner as unknown as { hideFooter?: boolean }).hideFooter = true; 