import { useState } from "react";
import { CodeBlock } from "./CodeBlock";
import { AutoSelectToggle } from "./AuoSelectToggle";

interface MCQProps {
  mcqs: {
    question: string;
    codeBlock?: string; // Optional code block
    language?: string; // Optional programming language
    options: string[];
    answer: string;
  }[];
}

export default function MCQ({ mcqs }: MCQProps) {
  const [feedback, setFeedback] = useState<{ [key: number]: string }>({});
  const [autoSelect, setAutoSelect] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: string }>({});

  const handleSelect = (index: number, selectedOption: string) => {
    setSelectedOptions((prev) => ({ ...prev, [index]: selectedOption }));

    const isCorrect = selectedOption === mcqs[index].answer;
    const message = isCorrect
      ? `Correct! The answer is ${mcqs[index].answer}.`
      : `Incorrect! The correct answer is ${mcqs[index].answer}.`;

    setFeedback((prev) => ({ ...prev, [index]: message }));
  };

  const handleAutoSelectToggle = (isAutoSelect: boolean) => {
    setAutoSelect(isAutoSelect);

    if (isAutoSelect) {
      const newFeedback: { [key: number]: string } = {};
      const newSelectedOptions: { [key: number]: string } = {};
      mcqs.forEach((q, index) => {
        newFeedback[index] = `Correct! The answer is ${q.answer}.`;
        newSelectedOptions[index] = q.answer;
      });
      setFeedback(newFeedback);
      setSelectedOptions(newSelectedOptions);
    } else {
      setFeedback({});
      setSelectedOptions({});
    }
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">MCQs</h2>
        <AutoSelectToggle onToggle={handleAutoSelectToggle} />
      </div>

      {mcqs.map((q, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-semibold">{`Q${index + 1}: ${q.question}`}</h3>

          {/* Render the code block if it exists */}
          {q.codeBlock && <CodeBlock code={q.codeBlock} language={q.language} />}

          <div className="pl-4 mt-2">
            {q.options.map((option, i) => (
              <label
                key={i}
                className={`block mb-2 ${
                  feedback[index]?.startsWith("Correct") && option === q.answer
                    ? "font-bold"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name={`mcq-${index}`}
                  className="mr-2"
                  onChange={() => handleSelect(index, option)}
                  checked={selectedOptions[index] === option}
                  disabled={autoSelect}
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
