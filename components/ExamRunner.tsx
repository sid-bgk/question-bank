import React from "react";
import { ArrowLeftIcon, ArrowRightIcon, BookmarkIcon, TrashIcon } from "@heroicons/react/24/solid";

const ExamRunner: React.FC = () => {
  // Placeholder state for current question, section, timer, etc.
  const sectionName = "Section #2";
  const sectionTime = "00:17:42";
  const questionNumber = 2;
  const totalQuestions = 3;
  const attempted = 2;
  const questionText = "x^y is defined by x^y = π / x. What is the simplified form of (π – x^y)?";
  const options = ["-1/π", "-1/2", "-π", "π"];
  const selectedOption = 0;

  return (
    <div className="w-full h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200 font-sans">
      {/* Top Bar */}
      <div className="relative flex items-center justify-between bg-white shadow px-6 py-3 border-b border-gray-200">
        {/* Left: Section Dropdown */}
        <div className="flex items-center gap-4 min-w-[180px]">
          <select className="px-2 py-1 border rounded text-sm font-semibold text-gray-700 bg-gray-50">
            <option>{sectionName}</option>
          </select>
        </div>
        {/* Center: Question Number Palette */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-gray-50 rounded px-2 py-1 border border-gray-200 shadow-sm">
          <button className="rounded bg-gray-200 p-1 text-gray-600 hover:bg-gray-300 flex items-center justify-center">
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          {[1,2,3].map(n => (
            <button
              key={n}
              className={`w-8 h-8 rounded font-bold border mx-1 transition-colors duration-150
                ${n === questionNumber ? 'bg-blue-600 text-white border-blue-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'}
              `}
            >
              {n}
            </button>
          ))}
          <button className="rounded bg-gray-200 p-1 text-gray-600 hover:bg-gray-300 flex items-center justify-center">
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
        {/* Right: Timer and Finish Test */}
        <div className="flex items-center gap-6 min-w-[260px] justify-end ml-auto">
          <span className="font-mono text-gray-700 text-base">Section Time: <span className="font-bold">{sectionTime}</span></span>
          <button className="ml-4 px-4 py-2 bg-gray-200 text-gray-700 font-bold rounded hover:bg-gray-300 transition-colors">Finish Test</button>
        </div>
      </div>
      {/* Attempted Count: Centered below header */}
      <div className="w-full flex justify-center mt-2 mb-2">
        <div className="text-sm text-gray-500 font-semibold bg-white bg-opacity-80 px-4 py-1 rounded shadow-sm">Attempted {attempted}/{totalQuestions}</div>
      </div>
      {/* Main Content */}
      <div className="flex flex-1 items-stretch overflow-hidden min-h-0">
        {/* Left Arrow */}
        <div className="flex flex-col justify-center items-center w-16 bg-transparent">
          <button className="rounded-full bg-blue-700 hover:bg-blue-800 text-white w-10 h-10 flex items-center justify-center shadow transition-colors">
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
        </div>
        {/* Center Panel: Full height, left-aligned */}
        <div className="flex-1 flex flex-col justify-stretch py-6 px-0 min-h-0">
          <div className="flex w-full h-full min-h-0 bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Question Area */}
            <div className="flex-1 p-10 border-r border-gray-100 flex flex-col justify-start min-h-0">
              <div>
                <div className="text-lg font-bold text-gray-800 mb-2">Question {questionNumber}</div>
                <div className="text-base text-gray-700 mb-6 whitespace-pre-line">{questionText}</div>
                <label className="inline-flex items-center gap-2 cursor-pointer select-none mb-4">
                  <input type="checkbox" className="accent-blue-600 h-4 w-4" />
                  <span className="text-sm font-medium text-gray-700 flex items-center gap-1"><BookmarkIcon className="w-4 h-4 text-gray-400" />Revisit Later</span>
                </label>
              </div>
            </div>
            {/* Options Area */}
            <div className="flex-1 p-10 flex flex-col justify-start min-h-0">
              <div>
                <div className="text-lg font-bold text-gray-800 mb-2">Select an option</div>
                <div className="flex flex-col gap-4 mb-4">
                  {options.map((opt, idx) => (
                    <label key={opt} className="flex items-center gap-3 cursor-pointer select-none border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 hover:bg-blue-50 transition-colors">
                      <input type="radio" name="option" checked={selectedOption === idx} readOnly className="accent-blue-600 h-5 w-5" />
                      <span className="text-base text-gray-700">{opt}</span>
                    </label>
                  ))}
                </div>
                <button className="text-blue-700 text-sm font-semibold hover:underline flex items-center gap-1">
                  <TrashIcon className="w-4 h-4" />
                  Clear Response
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Right Arrow */}
        <div className="flex flex-col justify-center items-center w-16 bg-transparent">
          <button className="rounded-full bg-blue-700 hover:bg-blue-800 text-white w-10 h-10 flex items-center justify-center shadow transition-colors">
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
      {/* Bottom Navigation */}
      <div className="flex justify-end items-center px-12 py-4 bg-white border-t border-gray-200 gap-4">
        <button className="px-6 py-2 bg-gray-200 text-gray-700 font-bold rounded hover:bg-gray-300 transition-colors">Previous</button>
        <button className="px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-800 transition-colors">Next</button>
      </div>
    </div>
  );
};

export default ExamRunner;

// Hide header and footer when this component is rendered as a page
(ExamRunner as any).hideHeader = true;
(ExamRunner as any).hideFooter = true; 