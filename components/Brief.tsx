import ReactMarkdown from "react-markdown";
import { CodeBlock } from "./CodeBlock";

interface BriefProps {
  briefs: {
    question: string;
    answer: string;
    codeBlock?: string; // Optional code block
    language?: string; // Optional programming language
  }[];
}

export default function Brief({ briefs }: BriefProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Brief Answers</h2>
      {briefs.map((brief, index) => (
        <div
          key={index}
          className="mb-6 border rounded p-4 overflow-hidden"
        >
          <h3 className="text-lg font-semibold">{`${index + 1}. ${brief.question}`}</h3>
          <div className="pl-4 mt-2 text-gray-800">
            <ReactMarkdown>{brief.answer}</ReactMarkdown>
          </div>

          {/* Render the code block if it exists */}
          {brief.codeBlock && (
            <div className="mt-4">
              <CodeBlock code={brief.codeBlock} language={brief.language} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
