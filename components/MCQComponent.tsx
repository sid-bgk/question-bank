import { useState } from "react";
import { CodeBlock } from "./CodeBlock";
import { AutoSelectToggle } from "./AuoSelectToggle";

interface MCQComponentProps {
  mcqs: {
    question: string;
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
      ? `Correct! The answer is ${mcqs[index].answer}.`
      : `Incorrect! The correct answer is ${mcqs[index].answer}.`;

    setFeedback((prev) => ({ ...prev, [index]: message }));
  };

  const handleAutoSelectToggle = (isAutoSelect: boolean) => {
    setAutoSelect(isAutoSelect);

    if (isAutoSelect) {
      const newSelectedOptions: { [key: number]: string } = {};
      mcqs.forEach((q, index) => {
        newSelectedOptions[index] = q.answer;
      });
      setFeedback({}); // Clear feedback when auto-select is on
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

          {q.codeBlock && <CodeBlock code={q.codeBlock} language={q.language} />}

          <div className="pl-4 mt-2">
            {q.options.map((option, i) => (
              <label
                key={i}
                className={`block mb-2 ${
                  (autoSelect || feedback[index]?.startsWith("Correct")) && option === q.answer
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
              feedback[index]?.startsWith("Incorrect")
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {autoSelect ? "\u00A0" : feedback[index] || "\u00A0"}
          </p>
        </div>
      ))}
    </div>
  );
}
