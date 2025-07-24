import React from "react";
import Timer from "./Timer";

interface ExamHeaderProps {
  sectionKey: string;
  onSectionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  availableSections: { sectionKey: string; label: string }[];
  current: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
  getPaletteState: (idx: number) => 'review' | 'attempted' | 'unattempted';
  durationSec: number;
  startAt: string;
  onTimerExpire: () => void;
  onFinishTest: () => void;
  attemptedCount: number;
  disabled?: boolean;
}

const ExamHeader: React.FC<ExamHeaderProps> = ({
  sectionKey,
  onSectionChange,
  availableSections,
  current,
  totalQuestions,
  onPrevious,
  onNext,
  getPaletteState,
  durationSec,
  startAt,
  onTimerExpire,
  onFinishTest,
  attemptedCount,
  disabled = false
}) => {
  return (
    <>
      {/* Top Bar */}
      <div className="relative flex flex-col sm:flex-row items-center justify-between bg-white shadow px-3 sm:px-6 py-3 border-b border-gray-200">
        {/* Left: Section Dropdown */}
        <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto mb-2 sm:mb-0">
          <select
            className="px-2 py-1 border rounded text-xs sm:text-sm font-semibold text-gray-700 bg-gray-50 flex-1 sm:flex-none"
            value={sectionKey}
            onChange={onSectionChange}
            disabled={disabled}
          >
            {availableSections.map(s => (
              <option key={s.sectionKey} value={s.sectionKey}>{s.label}</option>
            ))}
          </select>
        </div>
        {/* Center: Question Number Palette */}
        <div className="flex items-center gap-1 sm:gap-2 bg-gray-50 rounded px-2 py-1 border border-gray-200 shadow-sm">
          {/* Left Arrow */}
          <button
            className="rounded bg-gray-200 p-1 text-gray-600 hover:bg-gray-300 flex items-center justify-center"
            onClick={onPrevious}
            disabled={current === 0 || disabled}
            aria-label="Previous question"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {/* Previous button */}
          <button
            className={`w-6 h-6 sm:w-8 sm:h-8 rounded font-bold border mx-0.5 sm:mx-1 transition-colors duration-150 text-xs sm:text-sm ${current === 0 ? 'bg-gray-200 text-gray-400 border-gray-300' : getPaletteState(current-1) === 'review' ? 'bg-yellow-400 text-white border-yellow-600' : getPaletteState(current-1) === 'attempted' ? 'bg-green-500 text-white border-green-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'}`}
            onClick={onPrevious}
            disabled={current === 0 || disabled}
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
            className={`w-6 h-6 sm:w-8 sm:h-8 rounded font-bold border mx-0.5 sm:mx-1 transition-colors duration-150 text-xs sm:text-sm ${current === totalQuestions - 1 ? 'bg-gray-200 text-gray-400 border-gray-300' : getPaletteState(current+1) === 'review' ? 'bg-yellow-400 text-white border-yellow-600' : getPaletteState(current+1) === 'attempted' ? 'bg-green-500 text-white border-green-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'}`}
            onClick={onNext}
            disabled={current === totalQuestions - 1 || disabled}
          >
            {current < totalQuestions - 1 ? current + 2 : ''}
          </button>
          {/* Right Arrow */}
          <button
            className="rounded bg-gray-200 p-1 text-gray-600 hover:bg-gray-300 flex items-center justify-center"
            onClick={onNext}
            disabled={current === totalQuestions - 1 || disabled}
            aria-label="Next question"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        {/* Right: Timer and Finish Test */}
        <div className="flex items-center gap-2 sm:gap-6 w-full sm:w-auto justify-center sm:justify-end mt-2 sm:mt-0">
          <span className="font-mono text-gray-700 text-xs sm:text-base">
            <span className="hidden sm:inline">Section Time: </span><span className="font-bold">
              <Timer durationSec={durationSec} startAt={startAt} onExpire={onTimerExpire} />
            </span>
          </span>
          <button 
            className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-200 text-gray-700 font-bold rounded hover:bg-gray-300 transition-colors text-xs sm:text-sm" 
            onClick={onFinishTest}
          >
            Finish Test
          </button>
        </div>
      </div>
      {/* Attempted Count: Centered below header */}
      <div className="w-full flex justify-center mt-2 mb-2">
        <div className="text-xs sm:text-sm text-gray-500 font-semibold bg-white bg-opacity-80 px-3 sm:px-4 py-1 rounded shadow-sm">
          Attempted {attemptedCount}/{totalQuestions}
        </div>
      </div>
    </>
  );
};

export default ExamHeader;