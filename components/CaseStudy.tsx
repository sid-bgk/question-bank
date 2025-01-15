interface CaseStudyProps {
    caseStudies: {
      title: string;
      description: string;
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
        {caseStudies.map((cs, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-lg font-semibold">{`Case Study ${
              index + 1
            }: ${cs.title}`}</h3>
            <p className="mt-2 mb-4">{cs.description}</p>
            {cs.mcq.map((q, i) => (
              <div key={i} className="mb-6">
                <h4 className="text-lg font-semibold">{`Q${i + 1}: ${q.question}`}</h4>
                <div className="pl-4 mt-2">
                  {q.options.map((option, j) => (
                    <label key={j} className="block mb-2">
                      <input type="radio" name={`case-${index}-${i}`} className="mr-2" />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  