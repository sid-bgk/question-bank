// Generated type definitions
export interface MCQ {
    question: string;
    questionRead?: string;
    codeBlock?: string;
    language?: string;
    options: string[];
    answer: string;
    explanation?: string;
    showExplanation?: boolean;
}

export interface Brief {
    question: string;
    questionRead?: string;
    codeBlock?: string;
    language?: string;
    answer: string;
    explanation?: string;
}

export interface CaseStudy {
    title: string;
    description: string;
    codeBlock?: string;
    language?: string;
    mcq: MCQ[];
    brief?: Brief[];
    briefs?: Brief[];
}

export interface Module {
    id: string;
    name: string;
    mcq: MCQ[];
    brief: Brief[];
    case_study: CaseStudy[];
}

export interface Subject {
    id: string;
    name: string;
    modules: Module[];
}

export interface Semester {
    id: string;
    name: string;
    subjects: Subject[];
}

export interface Course {
    id: string;
    name: string;
    semesters: Semester[];
}

export interface University {
    id: string;
    name: string;
    courses: Course[];
}

export interface QuestionBank {
    universities: University[];
}
