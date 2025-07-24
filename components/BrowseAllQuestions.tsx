import React from "react";

interface BrowseQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
}

interface BrowseAnswer {
  sectionKey: string;
  questionIndex: number;
  selectedOption?: string;
}

interface BrowseAllQuestionsProps {
  questions: BrowseQuestion[];
  answers: BrowseAnswer[];
  onBack: () => void;
}

const BrowseAllQuestions: React.FC<BrowseAllQuestionsProps> = ({ questions, answers, onBack }) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-8">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl p-4 sm:p-6 lg:p-8 flex flex-col items-center">
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-700">Browse All Questions</h1>
          <button
            className="px-3 sm:px-4 py-2 bg-gray-200 text-gray-700 font-bold rounded hover:bg-gray-300 transition-colors text-sm sm:text-base"
            onClick={onBack}
          >
            Back to Results
          </button>
        </div>
        <div className="w-full">
          {questions.map((q, idx) => {
            const a = answers[idx] || {};
            const isCorrect = a.selectedOption === q.answer;
            const hasAnswer = typeof a.selectedOption === "string" && a.selectedOption.length > 0;
            return (
              <div key={idx} className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-200">
                <div className="flex items-start mb-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-2 sm:gap-0">
                    <div className="font-bold text-base sm:text-lg text-gray-900 flex-1">Q{idx + 1}: {q.question}</div>
                    <div className="flex-shrink-0">
                      {hasAnswer && (
                        isCorrect ? (
                          <span className="text-green-600 text-lg sm:text-xl font-bold">✔</span>
                        ) : (
                          <span className="text-red-600 text-lg sm:text-xl font-bold">✘</span>
                        )
                      )}
                      {!hasAnswer && (
                        <span className="text-red-600 text-lg sm:text-xl font-bold">✘</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mb-2">
                  {q.options.map((opt) => {
                    const isOptCorrect = opt === q.answer;
                    const isUser = opt === a.selectedOption;
                    let color = "bg-gray-100 border-gray-300 text-gray-800";
                    if (isOptCorrect && isUser) color = "bg-green-100 border-green-500 text-green-800 font-bold";
                    else if (isOptCorrect) color = "bg-green-50 border-green-400 text-green-700 font-semibold";
                    else if (isUser) color = "bg-red-100 border-red-500 text-red-800 font-bold";
                    return (
                      <div
                        key={opt}
                        className={`border rounded px-3 sm:px-4 py-2 text-sm sm:text-base ${color}`}
                      >
                        {opt}
                        {isOptCorrect && (
                          <span className="ml-2 text-green-700 font-bold text-xs sm:text-sm">(Correct)</span>
                        )}
                        {isUser && !isOptCorrect && (
                          <span className="ml-2 text-red-700 font-bold text-xs sm:text-sm">(Your Answer)</span>
                        )}
                      </div>
                    );
                  })}
                </div>
                {q.explanation && (
                  <div className="mt-2 text-xs sm:text-sm text-blue-800 bg-blue-50 rounded p-2 sm:p-3">
                    <span className="font-semibold">Explanation:</span> {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrowseAllQuestions; 