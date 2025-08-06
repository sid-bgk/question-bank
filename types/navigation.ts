// Lightweight navigation types (metadata only)
export interface University {
  id: string;
  name: string;
  courses?: Course[];
}

export interface Course {
  id: string;
  name: string;
  semesters?: Semester[];
}

export interface Semester {
  id: string;
  name: string;
  subjects?: Subject[];
}

export interface Subject {
  id: string;
  name: string;
  modules?: Module[];
}

export interface Module {
  id: string;
  name: string;
}

// Full content types (for actual content)
export interface FullModule {
  id: string;
  name: string;
  mcq: Array<{
    question: string;
    questionExplanation?: string;
    codeBlock?: string;
    language?: string;
    options: string[];
    answer: string;
    explanation?: string;
    showExplanation?: boolean;
  }>;
  brief: Array<{
    question: string;
    questionExplanation?: string;
    codeBlock?: string;
    language?: string;
    answer: string;
    explanation?: string;
  }>;
  case_study: Array<{
    title: string;
    description: string;
    codeBlock?: string;
    language?: string;
    mcq: Array<{
      question: string;
      questionExplanation?: string;
      codeBlock?: string;
      language?: string;
      options: string[];
      answer: string;
      explanation?: string;
      showExplanation?: boolean;
    }>;
    brief?: Array<{
      question: string;
      questionExplanation?: string;
      codeBlock?: string;
      language?: string;
      answer: string;
      explanation?: string;
    }>;
    briefs?: Array<{
      question: string;
      questionExplanation?: string;
      codeBlock?: string;
      language?: string;
      answer: string;
      explanation?: string;
    }>;
  }>;
};