import React from "react";

interface FailedQuestion {
  question: string;
  userAnswer: string;
  correctAnswer: string;
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
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl p-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">Exam Results</h1>
        <div className="text-xl font-semibold text-gray-800 mb-6">
          Score: <span className="text-green-600">{totalScore}</span> / {maxScore}
        </div>
        {/* Optional: Add a pie/bar chart here in the future */}
        <div className="w-full mb-8">
          <h2 className="text-lg font-bold text-gray-700 mb-3">Failed Questions</h2>
          {failedQuestions.length === 0 ? (
            <div className="text-green-600 font-semibold">Great job! You answered all questions correctly.</div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {failedQuestions.map((fq, idx) => (
                <li key={idx} className="py-4">
                  <div className="font-semibold text-gray-800 mb-1">Q{idx + 1}: {fq.question}</div>
                  <div className="text-sm text-gray-600 mb-1">Your Answer: <span className="text-red-600">{fq.userAnswer}</span></div>
                  <div className="text-sm text-gray-600">Correct Answer: <span className="text-green-700">{fq.correctAnswer}</span></div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex gap-4 mt-6">
          <button
            className="px-6 py-2 bg-purple-600 text-white font-bold rounded hover:bg-purple-700 transition-colors"
            onClick={onBrowseAll}
          >
            Browse All Questions
          </button>
          <button
            className="px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-800 transition-colors"
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