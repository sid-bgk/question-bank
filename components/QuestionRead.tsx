import ReactMarkdown from "react-markdown";

interface QuestionReadProps {
  content: string;
}

export default function QuestionRead({ content }: QuestionReadProps) {
  return (
    <div className="bg-gray-100 p-4 rounded-md mt-4">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
