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
      <h2 className="text-xl font-bold mb-4">MCQs</h2>
      <MCQComponent mcqs={mcqs} />
    </div>
  );
}
