import ReactMarkdown from "react-markdown";
import { CodeBlock } from "./CodeBlock";
import QuestionRead from "./QuestionRead";

interface BriefProps {
  briefs: {
    question: string;
    questionRead?: string; // Optional additional explanation
    answer: string;
    codeBlock?: string; // Optional code block
    language?: string; // Optional programming language
  }[];
}

export default function Brief({ briefs }: BriefProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Brief Answers</h2>
      {briefs.map((brief, index) => (
        <div
          key={index}
          className="mb-6 border rounded-lg p-6 shadow-md bg-white"
        >
          <h3 className="text-lg font-semibold mb-4">
            <span className="text-primary font-bold block">
              Q{index + 1}:
            </span>
            <ReactMarkdown className="mt-2 text-gray-900">
              {brief.question}
            </ReactMarkdown>
          </h3>

          {brief.questionRead && (<QuestionRead content={brief.questionRead} />)}

          <div className="mb-4">
            <h4 className="text-md font-medium text-gray-700 mb-2">Answer:</h4>
            <ReactMarkdown className="text-gray-900 leading-relaxed font-medium">
              {brief.answer}
            </ReactMarkdown>
          </div>

          {brief.codeBlock && (
            <div className="mt-4">
              <h4 className="text-md font-medium text-gray-700 mb-2">
                Code Example:
              </h4>
              <CodeBlock code={brief.codeBlock} language={brief.language} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
