import ReactMarkdown from "react-markdown";

interface BriefProps {
    briefs: {
      question: string;
      answer: string;
    }[];
  }
  
  export default function Brief({ briefs }: BriefProps) {
    return (
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Brief Answers</h2>
        {briefs.map((brief, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{`${index + 1}. ${brief.question}`}</h3>
            <div className="pl-4 mt-2 text-gray-800">
            <ReactMarkdown>{brief.answer}</ReactMarkdown>
          </div>
          </div>
        ))}
      </div>
    );
  }
  