import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

interface NavigationControlsProps {
  current: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
  getPaletteState: (idx: number) => 'review' | 'attempted' | 'unattempted';
  disabled?: boolean;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
  current,
  totalQuestions,
  onPrevious,
  onNext,
  getPaletteState,
  disabled = false
}) => {
  return (
    <>
      {/* Question Number Palette */}
      <div className="flex items-center gap-1 sm:gap-2 bg-gray-50 rounded px-2 py-1 border border-gray-200 shadow-sm">
        {/* Left Arrow */}
        <button
          className="rounded bg-gray-200 p-1 text-gray-600 hover:bg-gray-300 flex items-center justify-center"
          onClick={onPrevious}
          disabled={current === 0 || disabled}
          aria-label="Previous question"
        >
          <ArrowLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
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
          <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Side Navigation Arrows */}
      <div className="hidden sm:flex flex-col justify-center items-center w-16 bg-transparent">
        <button
          className="rounded-full bg-blue-700 hover:bg-blue-800 text-white w-10 h-10 flex items-center justify-center shadow transition-colors"
          onClick={onPrevious}
          disabled={current === 0 || disabled}
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="hidden sm:flex flex-col justify-center items-center w-16 bg-transparent">
        <button
          className="rounded-full bg-blue-700 hover:bg-blue-800 text-white w-10 h-10 flex items-center justify-center shadow transition-colors"
          onClick={onNext}
          disabled={current === totalQuestions - 1 || disabled}
        >
          <ArrowRightIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-between sm:justify-end items-center px-4 sm:px-12 py-3 sm:py-4 bg-white border-t border-gray-200 gap-2 sm:gap-4">
        <button
          className="px-4 sm:px-6 py-2 bg-gray-200 text-gray-700 font-bold rounded hover:bg-gray-300 transition-colors text-sm sm:text-base"
          onClick={onPrevious}
          disabled={current === 0 || disabled}
        >Previous</button>
        <button
          className="px-4 sm:px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-800 transition-colors text-sm sm:text-base"
          onClick={onNext}
          disabled={current === totalQuestions - 1 || disabled}
        >Next</button>
      </div>
    </>
  );
};

export default NavigationControls;