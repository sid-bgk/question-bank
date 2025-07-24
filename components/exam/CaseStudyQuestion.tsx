import React from "react";

interface CaseStudyQuestionProps {
  question: {
    title?: string;
    description?: string;
  };
}

const CaseStudyQuestion: React.FC<CaseStudyQuestionProps> = ({ question }) => {
  const title = typeof question === 'object' && 'title' in question ? (question as { title: string }).title : '';
  const description = typeof question === 'object' && 'description' in question ? (question as { description: string }).description : '';
  
  return (
    <div className="flex flex-col gap-4 mb-4 sm:mb-6">
      <div className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Case Study</div>
      <div className="font-semibold text-blue-900 mb-2 text-base sm:text-lg">{title}</div>
      <div className="text-gray-700 mb-2 whitespace-pre-line text-sm sm:text-lg leading-relaxed">{description}</div>
    </div>
  );
};

export default CaseStudyQuestion;