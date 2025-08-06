import { CaseStudy } from '../../../../../../types';

export const case_study: CaseStudy[] = [
  {
    "title": "Case Study 1: Employee Salary Analysis",
    "description": "A company conducted an analysis of the monthly salaries of 50 employees. The data collected revealed a mean salary of $50,000, with a standard deviation of $5,000. The company wants to understand the salary distribution and identify if the data is normally distributed or skewed. Additionally, they want to assess if there are any outliers based on the interquartile range (IQR).",
    "codeBlock": "",
    "language": "",
    "mcq": [
      {
        "question": "If the mean salary is $50,000 and the median salary is $48,000, what can be inferred about the salary distribution?",
        "questionExplanation": "",
        "options": [
          "Positively skewed",
          "Negatively skewed",
          "Symmetric",
          "Cannot be determined"
        ],
        "answer": "Positively skewed"
      },
      {
        "question": "Which measure would be most appropriate to detect potential salary outliers?",
        "questionExplanation": "",
        "options": [
          "Mean",
          "Mode",
          "Interquartile Range (IQR)",
          "Standard Deviation"
        ],
        "answer": "Interquartile Range (IQR)"
      }
    ]
  },
  {
    "title": "Case Study 2: Student Exam Performance",
    "description": "A school conducted an analysis of student scores in a mathematics test. The average score was found to be 72, with a mode of 75 and a median of 78. Teachers suspect the distribution may not be symmetric and need to determine if the data is skewed. They also want to calculate the spread of scores using variance.",
    "codeBlock": "",
    "language": "",
    "mcq": [
      {
        "question": "Based on the provided data (mean < median), what type of skewness is present in the score distribution?",
        "questionExplanation": "",
        "options": [
          "Positively skewed",
          "Negatively skewed",
          "Symmetric",
          "Uniform"
        ],
        "answer": "Negatively skewed"
      },
      {
        "question": "Which measure would best represent the spread of scores in the dataset?",
        "questionExplanation": "",
        "options": [
          "Mean",
          "Variance",
          "Mode",
          "Median"
        ],
        "answer": "Variance"
      }
    ]
  }
];
