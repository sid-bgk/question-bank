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
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl p-8 flex flex-col items-center">
        <div className="w-full flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-700">Browse All Questions</h1>
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 font-bold rounded hover:bg-gray-300 transition-colors"
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
              <div key={idx} className="mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center mb-2">
                  <div className="flex justify-between items-center w-full">
                    <div className="font-bold text-lg text-gray-900">Q{idx + 1}: {q.question}</div>
                    <div>
                      {hasAnswer && (
                        isCorrect ? (
                          <span className="ml-2 text-green-600 text-xl font-bold">✔</span>
                        ) : (
                          <span className="ml-2 text-red-600 text-xl font-bold">✘</span>
                        )
                      )}
                      {!hasAnswer && (
                        <span className="ml-2 text-red-600 text-xl font-bold">✘</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mb-2">
                  {q.options.map((opt, i) => {
                    const isOptCorrect = opt === q.answer;
                    const isUser = opt === a.selectedOption;
                    let color = "bg-gray-100 border-gray-300 text-gray-800";
                    if (isOptCorrect && isUser) color = "bg-green-100 border-green-500 text-green-800 font-bold";
                    else if (isOptCorrect) color = "bg-green-50 border-green-400 text-green-700 font-semibold";
                    else if (isUser) color = "bg-red-100 border-red-500 text-red-800 font-bold";
                    return (
                      <div
                        key={opt}
                        className={`border rounded px-4 py-2 ${color}`}
                      >
                        {opt}
                        {isOptCorrect && (
                          <span className="ml-2 text-green-700 font-bold">(Correct)</span>
                        )}
                        {isUser && !isOptCorrect && (
                          <span className="ml-2 text-red-700 font-bold">(Your Answer)</span>
                        )}
                      </div>
                    );
                  })}
                </div>
                {q.explanation && (
                  <div className="mt-2 text-sm text-blue-800 bg-blue-50 rounded p-2">
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