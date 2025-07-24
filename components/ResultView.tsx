import React from "react";

interface FailedQuestion {
  question: string;
  userAnswer: string;
  correctAnswer: string;
  originalIndex?: number; // Added for original question order
}

interface ResultViewProps {
  totalScore: number;
  maxScore: number;
  failedQuestions: FailedQuestion[];
  onBrowseAll: () => void;
  onRetakeExam: () => void;
}

const ResultView: React.FC<ResultViewProps> = ({
  totalScore,
  maxScore,
  failedQuestions,
  onBrowseAll,
  onRetakeExam,
}) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-8">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl p-4 sm:p-6 lg:p-10 flex flex-col items-center">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-700 mb-2">Exam Results</h1>
        <div className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
          Score: <span className="text-green-600">{totalScore}</span> / {maxScore}
        </div>
        {/* Optional: Add a pie/bar chart here in the future */}
        <div className="w-full mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-bold text-gray-700 mb-3">Failed Questions</h2>
          {failedQuestions.length === 0 ? (
            <div className="text-green-600 font-semibold text-sm sm:text-base">Great job! You answered all questions correctly.</div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {failedQuestions.map((fq, idx) => (
                <li key={idx} className="py-3 sm:py-4">
                  <div className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Q{fq.originalIndex !== undefined ? fq.originalIndex + 1 : idx + 1}: {fq.question}</div>
                  <div className="text-xs sm:text-sm text-gray-600 mb-1">Your Answer: <span className="text-red-600">{fq.userAnswer}</span></div>
                  <div className="text-xs sm:text-sm text-gray-600">Correct Answer: <span className="text-green-700">{fq.correctAnswer}</span></div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto">
          <button
            className="px-4 sm:px-6 py-2 bg-purple-600 text-white font-bold rounded hover:bg-purple-700 transition-colors text-sm sm:text-base"
            onClick={onBrowseAll}
          >
            Browse All Questions
          </button>
          <button
            className="px-4 sm:px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-800 transition-colors text-sm sm:text-base"
            onClick={onRetakeExam}
          >
            Retake Full Exam
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultView; 