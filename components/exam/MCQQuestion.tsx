import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

interface MCQ {
  question: string;
  codeBlock?: string;
  language?: string;  
  options: string[];
  answer: string;
  explanation?: string;
}

interface MCQQuestionProps {
  question: MCQ;
  selectedOption?: string;
  onSelectOption: (option: string) => void;
  onClearResponse: () => void;
  disabled?: boolean;
}

const MCQQuestion: React.FC<MCQQuestionProps> = ({
  question,
  selectedOption,
  onSelectOption,
  onClearResponse,
  disabled = false
}) => {
  return (
    <>
      <div className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Select an option</div>
      <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
        {question.options && Array.isArray(question.options) ? question.options.map((opt: string) => (
          <label 
            key={opt} 
            className={`exam-option cursor-pointer select-none border border-gray-200 rounded-lg px-3 sm:px-4 py-3 sm:py-4 bg-gray-50 hover:bg-blue-50 transition-colors gap-3 ${selectedOption === opt ? 'ring-2 ring-blue-600 border-blue-600' : ''}`}
          >
            <input 
              type="radio" 
              name="option" 
              className="accent-blue-600 h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" 
              checked={selectedOption === opt} 
              onChange={() => onSelectOption(opt)} 
              disabled={disabled} 
            />
            <span className="text-sm sm:text-base text-gray-700 leading-relaxed flex-1">{opt}</span>
          </label>
        )) : <div className="text-gray-400">No options available.</div>}
      </div>
      <button 
        className="text-blue-700 text-sm sm:text-base font-semibold hover:underline flex items-center gap-1" 
        onClick={onClearResponse} 
        disabled={disabled}
      >
        <TrashIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        Clear Response
      </button>
    </>
  );
};

export default MCQQuestion;