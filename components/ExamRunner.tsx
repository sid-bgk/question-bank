import React, { useEffect, useState, memo } from "react";
import { ArrowLeftIcon, ArrowRightIcon, BookmarkIcon, TrashIcon } from "@heroicons/react/24/solid";
import { questionBank } from "../data/questionBank";
import { Pie } from 'react-chartjs-2';
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

// Utility: Deterministic shuffle using a seed
function seededShuffle<T>(array: T[], seed: number): T[] {
  let m = array.length, t: T, i: number;
  let s = seed;
  const seededRandom = () => {
    s = Math.sin(s) * 10000;
    return s - Math.floor(s);
  };
  const arr = [...array];
  while (m) {
    i = Math.floor(seededRandom() * m--);
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
  return arr;
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
    const universityObj = questionBank.universities.find((u: any) => u.id === university);
    if (!universityObj) return [];
    const courseObj = universityObj.courses.find((c: any) => c.id === course);
    if (!courseObj) return [];
    const semesterObj = courseObj.semesters.find((s: any) => s.id === semester);
    if (!semesterObj) return [];
    const subjectObj = semesterObj.subjects.find((su: any) => su.id === subject);
    if (!subjectObj) return [];
    const moduleObj = subjectObj.modules.find((m: any) => m.id === module);
    if (!moduleObj) return [];
    // Only allow valid keys
    if (!['mcq', 'brief', 'case_study'].includes(sectionKey)) sectionKey = 'mcq';
    return (moduleObj as any)[sectionKey] || [];
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
      session.answers.forEach((a: any) => {
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
  session.answers = (session.answers || []).filter((a: any) => a.sectionKey !== sectionKey);
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

  // Helper: get section duration from exam-config (in minutes)
  function getSectionDuration(): number {
    try {
      const config = JSON.parse(localStorage.getItem("exam-config") || "null");
      const sectionKey = localStorage.getItem("currentSection") || "mcq";
      console.log('[ExamRunner] exam-config:', config);
      console.log('[ExamRunner] currentSection:', sectionKey);
      if (!config) return 30;
      // Find the section config for the current section
      if (Array.isArray(config.sections)) {
        const section = config.sections.find((s: any) => s.sectionKey === sectionKey);
        console.log('[ExamRunner] section config:', section);
        if (section && section.duration) {
          console.log('[ExamRunner] section.duration:', section.duration);
          return section.duration;
        }
      }
      // Fallback to global duration
      if (config.duration) {
        console.log('[ExamRunner] global duration:', config.duration);
        return config.duration;
      }
    } catch (e) {
      console.log('[ExamRunner] getSectionDuration error:', e);
    }
    return 30;
  }

  // Helper: get all available sections for the current module from exam-config
  function getAvailableSections(): { sectionKey: string; label: string }[] {
    try {
      const config = JSON.parse(localStorage.getItem("exam-config") || "null");
      if (!config || !Array.isArray(config.sections)) return [
        { sectionKey: 'mcq', label: 'MCQ' },
        { sectionKey: 'brief', label: 'Briefs' },
        { sectionKey: 'case_study', label: 'Case Study' },
      ];
      return config.sections.map((s: any) => {
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

  // Helper: get questions for a given sectionKey
  function getQuestionsForSection(sectionKey: string): MCQ[] {
    try {
      const config = JSON.parse(localStorage.getItem("exam-config") || "null");
      if (!config) return [];
      const { university, course, semester, subject, module } = config;
      const universityObj = questionBank.universities.find((u: any) => u.id === university);
      if (!universityObj) return [];
      const courseObj = universityObj.courses.find((c: any) => c.id === course);
      if (!courseObj) return [];
      const semesterObj = courseObj.semesters.find((s: any) => s.id === semester);
      if (!semesterObj) return [];
      const subjectObj = semesterObj.subjects.find((su: any) => su.id === subject);
      if (!subjectObj) return [];
      const moduleObj = subjectObj.modules.find((m: any) => m.id === module);
      if (!moduleObj) return [];
      return (moduleObj as any)[sectionKey] || [];
    } catch {
      return [];
    }
  }
  // Helper: get answers for a given section (by index range)
  function getAnswersForSection(sectionIdx: number, sectionQuestionsLen: number): ExamSessionAnswer[] {
    // All answers for all sections are stored sequentially in examSession, so we need to compute the offset
    // We'll assume sections are always in the same order as getAvailableSections()
    let offset = 0;
    for (let i = 0; i < sectionIdx; i++) {
      const sec = getAvailableSections()[i];
      offset += getQuestionsForSection(sec.sectionKey).length;
    }
    return answers.slice(offset, offset + sectionQuestionsLen);
  }

  // Track sectionKey in state to force rerender on change
  const [sectionKey, setSectionKey] = useState(() => localStorage.getItem("currentSection") || "mcq");

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
      // setRemaining(rem > 0 ? rem : 0); // Removed
      // setExpired(rem <= 0); // Removed
      if (rem <= 0 && interval) {
        clearInterval(interval);
      }
    }
    updateTimer();
    interval = setInterval(updateTimer, 1000);
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  // --- Modal snapshot state ---
  const [modalStats, setModalStats] = useState<any>(null);

  // When opening modal, capture a snapshot of stats
  const openFinishModal = () => {
    // Calculate summary for modal (snapshot)
    const totalQuestions = questions.length;
    const attempted = answers.filter(ans => ans.selectedOption).length;
    const markedForReview = answers.filter(ans => ans.markedForReview).length;
    const unattempted = totalQuestions - attempted;
    const pieData = {
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
    const pieOptions = {
      plugins: {
        legend: { display: false },
      },
      cutout: '70%',
      responsive: true,
      maintainAspectRatio: false,
    };
    const sectionSummary = getAvailableSections().map((s, idx) => {
      const sectionQuestions = getQuestionsForSection(s.sectionKey);
      const sectionAnswers = getAnswersForSection(idx, sectionQuestions.length);
      const attempted = sectionAnswers.filter(ans => ans && ans.selectedOption).length;
      const review = sectionAnswers.filter(ans => ans && ans.markedForReview).length;
      const unattempted = sectionQuestions.length - attempted;
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

  // Format remaining time as HH:MM:SS
  function formatTime(sec: number) {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    return [h, m, s].map(n => n.toString().padStart(2, '0')).join(":");
  }

  const q = questions[current];
  const a = answers[current] || {};

  // Palette state helpers
  const getPaletteState = (idx: number) => {
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

  // Attempted count
  const attemptedCount = answers.filter(ans => ans.selectedOption).length;

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
          <div className="text-xl font-bold text-gray-800 mb-2">Select an option</div>
          <div className="flex flex-col gap-4 mb-4">
            {q.options && Array.isArray(q.options) ? q.options.map((opt: string, idx: number) => (
              <label key={opt} className={`flex items-center gap-3 cursor-pointer select-none border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 hover:bg-blue-50 transition-colors ${a.selectedOption === opt ? 'ring-2 ring-blue-600 border-blue-600' : ''}`}>
                <input type="radio" name="option" className="accent-blue-600 h-5 w-5" checked={a.selectedOption === opt} onChange={() => handleSelectOption(opt)} disabled={expired} />
                <span className="text-base text-gray-700">{opt}</span>
              </label>
            )) : <div className="text-gray-400">No options available.</div>}
          </div>
          <button className="text-blue-700 text-base font-semibold hover:underline flex items-center gap-1" onClick={handleClearResponse} disabled={expired}>
            <TrashIcon className="w-5 h-5" />
            Clear Response
          </button>
        </>
      );
    } else if (sectionKey === 'brief') {
      return (
        <div className="flex flex-col gap-4 mb-4">
          <div className="text-xl font-bold text-gray-800 mb-2">Your Answer</div>
          <textarea className="w-full border border-gray-300 rounded p-2 min-h-[100px] text-lg" placeholder="Type your answer here..." disabled={expired} />
        </div>
      );
    } else if (sectionKey === 'case_study') {
      // Type guard for case_study
      const title = typeof q === 'object' && 'title' in q ? (q as any).title : '';
      const description = typeof q === 'object' && 'description' in q ? (q as any).description : '';
      return (
        <div className="flex flex-col gap-4 mb-4">
          <div className="text-xl font-bold text-gray-800 mb-2">Case Study</div>
          <div className="font-semibold text-blue-900 mb-2 text-lg">{title}</div>
          <div className="text-gray-700 mb-2 whitespace-pre-line text-lg">{description}</div>
        </div>
      );
    } else {
      return <div className="text-gray-400">Unsupported section type.</div>;
    }
  }

  // Calculate summary for modal
  const totalQuestions = questions.length;
  const attempted = answers.filter(ans => ans.selectedOption).length;
  const markedForReview = answers.filter(ans => ans.markedForReview).length;
  const unattempted = totalQuestions - attempted;
  const pieData = {
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
  const pieOptions = {
    plugins: {
      legend: { display: false },
    },
    cutout: '70%',
    responsive: true,
    maintainAspectRatio: false,
  };

  // Section summary for modal (accurate per section)
  const sectionSummary = getAvailableSections().map((s, idx) => {
    const sectionQuestions = getQuestionsForSection(s.sectionKey);
    const sectionAnswers = getAnswersForSection(idx, sectionQuestions.length);
    const attempted = sectionAnswers.filter(ans => ans && ans.selectedOption).length;
    const review = sectionAnswers.filter(ans => ans && ans.markedForReview).length;
    const unattempted = sectionQuestions.length - attempted;
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

  // Memoized modal to prevent unnecessary re-renders
  const FinishTestModal = memo(function FinishTestModal({ totalQuestions, attempted, markedForReview, unattempted, pieData, pieOptions, sectionSummary, onClose }: any) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-8 relative">
          {/* Close Icon */}
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            onClick={onClose}
            aria-label="Close"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xl font-bold text-red-600 flex items-center gap-2"><span className="text-2xl">&#9888;</span>Finish Test</span>
          </div>
          <div className="flex gap-8 items-center mb-8">
            <div className="w-40 h-40">
              <Pie data={pieData} options={pieOptions} />
            </div>
            <div className="flex-1">
              <div className="text-lg font-semibold mb-2 text-gray-900">Your Test Summary</div>
              <div className="text-gray-900 text-base mb-1">Total Questions: <span className="font-bold">{totalQuestions}</span></div>
              <div className="flex gap-4 mt-2">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-600 inline-block"></span><span className="text-gray-900 font-semibold">Attempted:</span> <span className="font-bold text-gray-900">{attempted}</span></div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span><span className="text-gray-900 font-semibold">Revisit:</span> <span className="font-bold text-gray-900">{markedForReview}</span></div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-gray-300 border border-gray-400 inline-block"></span><span className="text-gray-900 font-semibold">Unattempted:</span> <span className="font-bold text-gray-900">{unattempted}</span></div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="text-base font-semibold mb-2 text-gray-900">Section Summary</div>
            <table className="w-full text-sm border rounded overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th className="py-2 px-3 text-left font-semibold">#</th>
                  <th className="py-2 px-3 text-left font-semibold">Section Name</th>
                  <th className="py-2 px-3 text-left font-semibold">Status</th>
                  <th className="py-2 px-3 text-left font-semibold">Attempted</th>
                  <th className="py-2 px-3 text-left font-semibold">Marked for Review</th>
                  <th className="py-2 px-3 text-left font-semibold">Unattempted</th>
                </tr>
              </thead>
              <tbody>
                {sectionSummary.map((s: any, idx: number) => (
                  <tr key={s.name} className="border-t text-gray-900">
                    <td className="py-2 px-3">{idx + 1}</td>
                    <td className="py-2 px-3">{s.name}</td>
                    <td className="py-2 px-3">{s.status}</td>
                    <td className="py-2 px-3">{s.attempted}</td>
                    <td className="py-2 px-3">{s.review}</td>
                    <td className="py-2 px-3">{s.unattempted}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end gap-4 mt-6">
            <button
              className="px-6 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors"
              onClick={() => {
                if (onFinish) onFinish();
              }}
            >Yes, End Test</button>
            <button
              className="px-6 py-2 bg-gray-200 text-gray-700 font-bold rounded hover:bg-gray-300 transition-colors"
              onClick={onClose}
            >No, Back to Test</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200 font-sans">
      {/* Top Bar */}
      <div className="relative flex items-center justify-between bg-white shadow px-6 py-3 border-b border-gray-200">
        {/* Left: Section Dropdown */}
        <div className="flex items-center gap-4 min-w-[180px]">
          <select
            className="px-2 py-1 border rounded text-sm font-semibold text-gray-700 bg-gray-50"
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
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-gray-50 rounded px-2 py-1 border border-gray-200 shadow-sm">
          {/* Left Arrow */}
          <button
            className="rounded bg-gray-200 p-1 text-gray-600 hover:bg-gray-300 flex items-center justify-center"
            onClick={() => setCurrent(c => Math.max(0, c - 1))}
            disabled={current === 0 || expired}
            aria-label="Previous question"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          {/* Previous button */}
          <button
            className={`w-8 h-8 rounded font-bold border mx-1 transition-colors duration-150 ${current === 0 ? 'bg-gray-200 text-gray-400 border-gray-300' : getPaletteState(current-1) === 'review' ? 'bg-yellow-400 text-white border-yellow-600' : getPaletteState(current-1) === 'attempted' ? 'bg-green-500 text-white border-green-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'}`}
            onClick={() => setCurrent(c => Math.max(0, c - 1))}
            disabled={current === 0 || expired}
          >
            {current > 0 ? current : ''}
          </button>
          {/* Active/current button */}
          <button
            className={`w-8 h-8 rounded font-bold border mx-1 transition-colors duration-150 bg-blue-600 text-white border-blue-700 ring-2 ring-blue-600 ${getPaletteState(current) === 'review' ? 'bg-yellow-400 text-white border-yellow-600 ring-yellow-600' : ''}`}
            disabled
          >
            {current + 1}
          </button>
          {/* Next button */}
          <button
            className={`w-8 h-8 rounded font-bold border mx-1 transition-colors duration-150 ${current === questions.length - 1 ? 'bg-gray-200 text-gray-400 border-gray-300' : getPaletteState(current+1) === 'review' ? 'bg-yellow-400 text-white border-yellow-600' : getPaletteState(current+1) === 'attempted' ? 'bg-green-500 text-white border-green-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'}`}
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
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
        {/* Right: Timer and Finish Test */}
        <div className="flex items-center gap-6 min-w-[260px] justify-end ml-auto">
          <span className="font-mono text-gray-700 text-base">
            Section Time: <span className="font-bold">
              <Timer durationSec={durationSec} startAt={startAt} onExpire={() => setExpired(true)} />
            </span>
          </span>
          <button className="ml-4 px-4 py-2 bg-gray-200 text-gray-700 font-bold rounded hover:bg-gray-300 transition-colors" onClick={openFinishModal}>Finish Test</button>
        </div>
      </div>
      {/* Attempted Count: Centered below header */}
      <div className="w-full flex justify-center mt-2 mb-2">
        <div className="text-sm text-gray-500 font-semibold bg-white bg-opacity-80 px-4 py-1 rounded shadow-sm">Attempted {attemptedCount}/{questions.length}</div>
      </div>
      {/* Main Content */}
      <div className="flex flex-1 items-stretch overflow-hidden min-h-0">
        {/* Left Arrow */}
        <div className="flex flex-col justify-center items-center w-16 bg-transparent">
          <button
            className="rounded-full bg-blue-700 hover:bg-blue-800 text-white w-10 h-10 flex items-center justify-center shadow transition-colors"
            onClick={() => setCurrent(c => Math.max(0, c - 1))}
            disabled={current === 0 || expired}
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
        </div>
        {/* Center Panel: Dynamic Question */}
        <div className="flex-1 flex flex-col justify-stretch py-6 px-0 min-h-0">
          <div className="flex w-full h-full min-h-0 bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Question Area */}
            <div className="flex-1 p-10 border-r border-gray-100 flex flex-col justify-start min-h-0">
              <div>
                <div className="text-lg font-bold text-gray-800 mb-2">Question {current + 1}</div>
                <div className="text-base text-gray-700 mb-6 whitespace-pre-line">{
                  sectionKey === 'case_study'
                    ? (typeof q === 'object' && 'title' in q ? (q as any).title : '')
                    : q.question
                }</div>
                <label className="inline-flex items-center gap-2 cursor-pointer select-none mb-4">
                  <input type="checkbox" className="accent-blue-600 h-4 w-4" checked={!!a.markedForReview} onChange={handleMarkForReview} disabled={expired} />
                  <span className="text-sm font-medium text-gray-700 flex items-center gap-1"><BookmarkIcon className="w-4 h-4 text-gray-400" />Revisit Later</span>
                </label>
              </div>
            </div>
            {/* Options/Answer/CaseStudy Area */}
            <div className="flex-1 p-10 flex flex-col justify-start min-h-0">
              {renderQuestion()}
            </div>
          </div>
        </div>
        {/* Right Arrow */}
        <div className="flex flex-col justify-center items-center w-16 bg-transparent">
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
      <div className="flex justify-end items-center px-12 py-4 bg-white border-t border-gray-200 gap-4">
        <button
          className="px-6 py-2 bg-gray-200 text-gray-700 font-bold rounded hover:bg-gray-300 transition-colors"
          onClick={() => setCurrent(c => Math.max(0, c - 1))}
          disabled={current === 0 || expired}
        >Previous</button>
        <button
          className="px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-800 transition-colors"
          onClick={() => setCurrent(c => Math.min(questions.length - 1, c + 1))}
          disabled={current === questions.length - 1 || expired}
        >Next</button>
      </div>
      {/* Render modal if open */}
      {showFinishModal && modalStats && <FinishTestModal {...modalStats} onClose={() => setShowFinishModal(false)} />}
    </div>
  );
};

export default ExamRunner;

(ExamRunner as any).hideHeader = true;
(ExamRunner as any).hideFooter = true; 