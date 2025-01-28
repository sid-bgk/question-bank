import ReactMarkdown from "react-markdown";

interface QuestionReadProps {
  content: string;
}

export default function QuestionRead({ content }: QuestionReadProps) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-lg mt-4">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
