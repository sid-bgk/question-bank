import React, { useEffect, useState, useRef } from "react";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import type { ChartData, ChartOptions } from 'chart.js';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
import ExamHeader from "./ExamHeader";
import FinishTestModal, { SectionSummary, FinishTestModalProps } from "./FinishTestModal";
import MCQQuestion from "./MCQQuestion";
import BriefQuestion from "./BriefQuestion";
import CaseStudyQuestion from "./CaseStudyQuestion";
import { useExamConfig } from "../../hooks/useExamConfig";
import { useExamSession, ExamSessionAnswer } from "../../hooks/useExamSession";

interface ExamRunnerProps {
  onFinish?: () => void;
}

const ExamRunner: React.FC<ExamRunnerProps> = ({ onFinish }) => {
  const [current, setCurrent] = useState(0);
  const [expired, setExpired] = useState(false);
  const [showFinishModal, setShowFinishModal] = useState(false);
  const examContainerRef = useRef<HTMLDivElement>(null);

  // Use custom hooks for exam configuration and session management
  const {
    sectionKey,
    setSectionKey,
    questions,
    durationSec,
    startAt,
    availableSections
  } = useExamConfig();

  const { answers, updateAnswer, clearAnswer } = useExamSession(questions.length, sectionKey);

  // Timer logic is now handled by the Timer component

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
    const sectionSummary: SectionSummary[] = availableSections.map((s) => {
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

  // When sectionKey changes, reset current to first question
  useEffect(() => {
    setCurrent(0);
  }, [sectionKey]);

  // Scroll to top when question changes
  useEffect(() => {
    if (examContainerRef.current) {
      examContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [current]);

  if (!questions.length) {
    return <div className="p-8 text-center text-gray-500">No questions found for this section.</div>;
  }

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
    updateAnswer(current, { selectedOption: option });
  };

  const handleMarkForReview = () => {
    updateAnswer(current, { markedForReview: !a.markedForReview });
  };

  const handleClearResponse = () => {
    clearAnswer(current);
  };

  const handlePrevious = () => {
    setCurrent(c => Math.max(0, c - 1));
  };

  const handleNext = () => {
    setCurrent(c => Math.min(questions.length - 1, c + 1));
  };

  const handleTimerExpire = () => {
    setExpired(true);
  };

  const handleSectionChangeWrapper = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSection = e.target.value;
    localStorage.setItem("currentSection", newSection);
    setSectionKey(newSection);
  };

  // Section-specific question rendering
  function renderQuestion() {
    if (sectionKey === 'mcq') {
      return (
        <MCQQuestion
          question={q}
          selectedOption={a.selectedOption}
          onSelectOption={handleSelectOption}
          onClearResponse={handleClearResponse}
          disabled={expired}
        />
      );
    } else if (sectionKey === 'brief') {
      return <BriefQuestion disabled={expired} />;
    } else if (sectionKey === 'case_study') {
      return <CaseStudyQuestion question={q as { title?: string; description?: string }} />;
    } else {
      return <div className="text-gray-400">Unsupported section type.</div>;
    }
  }

  return (
    <div className="w-full h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200 font-sans exam-container">
      {/* Header */}
      <ExamHeader
        sectionKey={sectionKey}
        onSectionChange={handleSectionChangeWrapper}
        availableSections={availableSections}
        current={current}
        totalQuestions={questions.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        getPaletteState={getPaletteState}
        durationSec={durationSec}
        startAt={startAt}
        onTimerExpire={handleTimerExpire}
        onFinishTest={openFinishModal}
        attemptedCount={answers.filter(ans => ans.selectedOption).length}
        disabled={expired}
      />

      {/* Main Content */}
      <div className="flex flex-1 items-stretch overflow-hidden min-h-0 exam-content">
        {/* Left Arrow */}
        <div className="hidden sm:flex flex-col justify-center items-center w-16 bg-transparent">
          <button
            className="rounded-full bg-blue-700 hover:bg-blue-800 text-white w-10 h-10 flex items-center justify-center shadow transition-colors"
            onClick={handlePrevious}
            disabled={current === 0 || expired}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
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
            <div ref={examContainerRef} className="flex-1 p-4 sm:p-6 lg:p-10 flex flex-col justify-start min-h-0 exam-options-area">
              {renderQuestion()}
            </div>
          </div>
        </div>
        {/* Right Arrow */}
        <div className="hidden sm:flex flex-col justify-center items-center w-16 bg-transparent">
          <button
            className="rounded-full bg-blue-700 hover:bg-blue-800 text-white w-10 h-10 flex items-center justify-center shadow transition-colors"
            onClick={handleNext}
            disabled={current === questions.length - 1 || expired}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-between sm:justify-end items-center px-4 sm:px-12 py-3 sm:py-4 bg-white border-t border-gray-200 gap-2 sm:gap-4">
        <button
          className="px-4 sm:px-6 py-2 bg-gray-200 text-gray-700 font-bold rounded hover:bg-gray-300 transition-colors text-sm sm:text-base"
          onClick={handlePrevious}
          disabled={current === 0 || expired}
        >Previous</button>
        <button
          className="px-4 sm:px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-800 transition-colors text-sm sm:text-base"
          onClick={handleNext}
          disabled={current === questions.length - 1 || expired}
        >Next</button>
      </div>

      {/* Render modal if open */}
      {showFinishModal && modalStats && <FinishTestModal {...(modalStats as unknown as FinishTestModalProps)} onClose={() => setShowFinishModal(false)} onFinish={onFinish} />}
    </div>
  );
};

// Helper function for modal (moved from inline)
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

export default ExamRunner;

(ExamRunner as unknown as { hideHeader?: boolean }).hideHeader = true;
(ExamRunner as unknown as { hideFooter?: boolean }).hideFooter = true; 