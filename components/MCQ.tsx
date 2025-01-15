import { useState } from "react";

interface MCQProps {
  mcqs: {
    question: string;
    options: string[];
    answer: string;
  }[];
}

export default function MCQ({ mcqs }: MCQProps) {
  const [feedback, setFeedback] = useState<{ [key: number]: string }>({});
  const [autoSelect, setAutoSelect] = useState(false);

  const handleSelect = (index: number, selectedOption: string) => {
    const isCorrect = selectedOption === mcqs[index].answer;
    const message = isCorrect
      ? `Correct! The answer is ${mcqs[index].answer}.`
      : `Incorrect! The correct answer is ${mcqs[index].answer}.`;

    setFeedback((prev) => ({ ...prev, [index]: message }));
  };

  const handleToggle = () => {
    setAutoSelect((prev) => !prev);

    if (!autoSelect) {
      mcqs.forEach((q, index) => {
        setFeedback((prev) => ({
          ...prev,
          [index]: `Correct! The answer is ${q.answer}.`,
        }));
      });
    } else {
      setFeedback({});
    }
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">MCQs</h2>
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Auto-Select</span>
          <button
            onClick={handleToggle}
            className={`relative inline-flex items-center h-6 w-12 rounded-full transition-colors ${
              autoSelect ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                autoSelect ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>

      {mcqs.map((q, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-semibold">{`Q${index + 1}: ${q.question}`}</h3>
          <div className="pl-4 mt-2">
            {q.options.map((option, i) => (
              <label key={i} className="block mb-2">
                <input
                  type="radio"
                  name={`mcq-${index}`}
                  className="mr-2"
                  onClick={() => handleSelect(index, option)}
                  checked={autoSelect && option === q.answer}
                  readOnly={autoSelect}
                />
                {option}
              </label>
            ))}
          </div>
          <p
            className={`mt-2 h-6 ${
              feedback[index]?.startsWith("Correct")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {feedback[index] || "\u00A0"}
          </p>
        </div>
      ))}
    </div>
  );
}
