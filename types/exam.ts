export interface MCQ {
  question: string;
  codeBlock?: string;
  language?: string;
  options: string[];
  answer: string;
  explanation?: string;
}

export interface ExamSessionAnswer {
  sectionKey: string;
  questionIndex: number;
  selectedOption?: string;
  markedForReview?: boolean;
}

export interface SectionSummary {
  name: string;
  status: string;
  attempted: number;
  review: number;
  unattempted: number;
}

export interface ExamRunnerProps {
  onFinish?: () => void;
}

export interface ExamConfig {
  university: string;
  course: string;
  semester: string;
  subject: string;
  module: string;
  duration: number;
  sections: { sectionKey: string }[];
}