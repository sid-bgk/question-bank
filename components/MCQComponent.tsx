import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "./CodeBlock";
import { AutoSelectToggle } from "./AuoSelectToggle";
import QuestionRead from "./QuestionRead";

interface MCQComponentProps {
  mcqs: {
    question: string;
    questionRead?: string;
    codeBlock?: string;
    language?: string;
    options: string[];
    answer: string;
  }[];
}

export default function MCQComponent({ mcqs }: MCQComponentProps) {
  const [feedback, setFeedback] = useState<{ [key: number]: string }>({});
  const [autoSelect, setAutoSelect] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: string }>({});

  const handleSelect = (index: number, selectedOption: string) => {
    setSelectedOptions((prev) => ({ ...prev, [index]: selectedOption }));

    const isCorrect = selectedOption === mcqs[index].answer;
    const message = isCorrect
      ? `✅ Correct! The answer is ${mcqs[index].answer}.`
      : `❌ Incorrect! The correct answer is ${mcqs[index].answer}.`;

    setFeedback((prev) => ({ ...prev, [index]: message }));
  };

  const handleAutoSelectToggle = (isAutoSelect: boolean) => {
    setAutoSelect(isAutoSelect);

    if (isAutoSelect) {
      const newSelectedOptions: { [key: number]: string } = {};
      mcqs.forEach((q, index) => {
        newSelectedOptions[index] = q.answer;
      });
      setFeedback({});
      setSelectedOptions(newSelectedOptions);
    } else {
      setFeedback({});
      setSelectedOptions({});
    }
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">MCQs</h2>
        <AutoSelectToggle onToggle={handleAutoSelectToggle} />
      </div>

      {mcqs.map((q, index) => (
        <div key={index} className="mb-6 border rounded-lg p-6 shadow-md bg-white">
          <h3 className="text-lg font-semibold mb-4">
            <span className="text-primary font-bold block">Q{index + 1}:</span>
            <ReactMarkdown className="mt-2 text-gray-900">{q.question}</ReactMarkdown>
          </h3>

          {q.questionRead && (<QuestionRead content={q.questionRead} />)}

          {q.codeBlock && (
            <div className="mb-4">
              <CodeBlock code={q.codeBlock} language={q.language} />
            </div>
          )}

          <div className="mt-4">
            {q.options.map((option, i) => (
              <label
                key={i}
                className={`block mb-2 p-2 rounded-lg cursor-pointer border ${
                  autoSelect
                    ? option === q.answer
                      ? "bg-green-200 border-green-500 text-green-800"
                      : "bg-gray-200 border-gray-400 text-gray-500 cursor-not-allowed"
                    : selectedOptions[index] === option
                    ? option === q.answer
                      ? "bg-green-200 border-green-500 text-green-800"
                      : "bg-red-200 border-red-500 text-red-800"
                    : "bg-gray-100 border-gray-300 hover:bg-gray-200"
                }`}
              >
                <input
                  type="radio"
                  name={`mcq-${index}`}
                  className="mr-2 hidden"
                  onChange={() => handleSelect(index, option)}
                  checked={selectedOptions[index] === option}
                  disabled={autoSelect}
                />
                {option}
              </label>
            ))}
          </div>

          <p
            className={`mt-4 text-base font-semibold ${
              feedback[index]?.startsWith("❌") ? "text-red-800" : "text-green-800"
            }`}
          >
            {autoSelect ? "\u00A0" : feedback[index] || "\u00A0"}
          </p>
        </div>
      ))}
    </div>
  );
}
