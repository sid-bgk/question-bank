import React from "react";

interface BriefQuestionProps {
  disabled?: boolean;
}

const BriefQuestion: React.FC<BriefQuestionProps> = ({ disabled = false }) => {
  return (
    <div className="flex flex-col gap-4 mb-4 sm:mb-6">
      <div className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Your Answer</div>
      <textarea 
        className="w-full border border-gray-300 rounded p-3 sm:p-4 text-sm sm:text-base min-h-[120px] sm:min-h-[150px] resize-none" 
        placeholder="Type your answer here..." 
        disabled={disabled} 
      />
    </div>
  );
};

export default BriefQuestion;