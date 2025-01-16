import { AutoSelectToggle } from "./AuoSelectToggle";
import { CodeBlock } from "./CodeBlock";
import { useState } from "react";

interface CaseStudyProps {
  caseStudies: {
    title: string;
    description: string;
    codeBlock?: string;
    language?: string;
    mcq: {
      question: string;
      options: string[];
      answer: string;
    }[];
  }[];
}

export default function CaseStudy({ caseStudies }: CaseStudyProps) {
  const [feedback, setFeedback] = useState<{ [key: string]: string }>({});
  const [autoSelect, setAutoSelect] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});

  const handleSelect = (
    caseIndex: number,
    mcqIndex: number,
    selectedOption: string
  ) => {
    const key = `${caseIndex}-${mcqIndex}`;
    setSelectedOptions((prev) => ({ ...prev, [key]: selectedOption }));

    const isCorrect =
      selectedOption === caseStudies[caseIndex].mcq[mcqIndex].answer;
    const message = isCorrect
      ? `Correct! The answer is ${caseStudies[caseIndex].mcq[mcqIndex].answer}.`
      : `Incorrect! The correct answer is ${caseStudies[caseIndex].mcq[mcqIndex].answer}.`;

    setFeedback((prev) => ({ ...prev, [key]: message }));
  };

  const handleAutoSelectToggle = (isAutoSelect: boolean) => {
    setAutoSelect(isAutoSelect);

    if (isAutoSelect) {
      const newFeedback: { [key: string]: string } = {};
      const newSelectedOptions: { [key: string]: string } = {};
      caseStudies.forEach((cs, caseIndex) =>
        cs.mcq.forEach((q, mcqIndex) => {
          const key = `${caseIndex}-${mcqIndex}`;
          newFeedback[key] = `Correct! The answer is ${q.answer}.`;
          newSelectedOptions[key] = q.answer;
        })
      );
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
        <h2 className="text-xl font-bold">Case Studies</h2>
        <AutoSelectToggle onToggle={handleAutoSelectToggle} />
      </div>

      {caseStudies.map((cs, caseIndex) => (
        <div key={caseIndex} className="mb-8">
          <h3 className="text-lg font-semibold">{`Case Study ${
            caseIndex + 1
          }: ${cs.title}`}</h3>
          <p className="mt-2 mb-4">{cs.description}</p>

          {cs.codeBlock && (
            <div className="mt-4 mb-4">
              <CodeBlock code={cs.codeBlock} language={cs.language} />
            </div>
          )}

          {cs.mcq.map((q, mcqIndex) => (
            <div key={mcqIndex} className="mb-6">
              <h4 className="text-lg font-semibold">{`Q${mcqIndex + 1}: ${
                q.question
              }`}</h4>
              <div className="pl-4 mt-2">
                {q.options.map((option, optionIndex) => {
                  const key = `${caseIndex}-${mcqIndex}`;
                  return (
                    <label
                      key={optionIndex}
                      className={`block mb-2 ${
                        feedback[key]?.startsWith("Correct") &&
                        option === q.answer
                          ? "font-bold"
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name={`case-${caseIndex}-${mcqIndex}`}
                        className="mr-2"
                        onChange={() =>
                          handleSelect(caseIndex, mcqIndex, option)
                        }
                        checked={selectedOptions[key] === option}
                        disabled={autoSelect}
                      />
                      {option}
                    </label>
                  );
                })}
              </div>
              <p
                className={`mt-2 h-6 ${
                  feedback[`${caseIndex}-${mcqIndex}`]?.startsWith("Correct")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {feedback[`${caseIndex}-${mcqIndex}`] || "\u00A0"}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
