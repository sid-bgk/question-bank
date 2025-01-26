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
      options: string[];
      answer: string;
    }[];
  }[];
}

export default function CaseStudy({ caseStudies }: CaseStudyProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Case Studies</h2>

      {caseStudies.map((cs, caseIndex) => (
        <div key={caseIndex} className="mb-8">
          <h3 className="text-lg font-semibold">{`Case Study ${caseIndex + 1}: ${cs.title}`}</h3>
          <p className="mt-2 mb-4">{cs.description}</p>

          {cs.codeBlock && (
            <div className="mt-4 mb-4">
              <CodeBlock code={cs.codeBlock} language={cs.language} />
            </div>
          )}

          <MCQComponent mcqs={cs.mcq} />
        </div>
      ))}
    </div>
  );
}
