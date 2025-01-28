import ReactMarkdown from "react-markdown";
import { CodeBlock } from "./CodeBlock";
import MCQComponent from "./MCQComponent";

interface CaseStudyProps {
  caseStudies: {
    title: string;
    description: string;
    codeBlock?: string;
    language?: string;
    mcq: {
      question: string;
      questionRead?: string;
      options: string[];
      answer: string;
      codeBlock?: string;
      language?: string;
    }[];
  }[];
}

export default function CaseStudy({ caseStudies }: CaseStudyProps) {
  return (
    <div className="mb-8">
      {caseStudies.map((cs, caseIndex) => (
        <div key={caseIndex} className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800">{`${cs.title}`}</h3>
          <ReactMarkdown className="text-gray-700 leading-relaxed mt-2">
            {cs.description}
          </ReactMarkdown>

          {cs.codeBlock && (
            <div className="mt-4">
              <CodeBlock code={cs.codeBlock} language={cs.language} />
            </div>
          )}

          <div className="mt-6 pt-4 border-t">
            <MCQComponent mcqs={cs.mcq} />
          </div>
        </div>
      ))}
    </div>
  );
}
