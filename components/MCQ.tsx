import MCQComponent from "./MCQComponent";

interface MCQProps {
  mcqs: {
    question: string;
    codeBlock?: string;
    language?: string;
    options: string[];
    answer: string;
  }[];
}

export default function MCQ({ mcqs }: MCQProps) {
  return (
    <div className="mb-8">
      <MCQComponent mcqs={mcqs} />
    </div>
  );
}
