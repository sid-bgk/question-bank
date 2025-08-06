import { CaseStudy } from '../../../../../../types';

export const case_study: CaseStudy[] = [
  {
    "title": "Managing Student Scores with Arrays",
    "description": "A school wants to automate the management of student scores for different subjects. They plan to store scores using arrays and calculate the average score for each student. The system should allow adding new scores dynamically and ensure data consistency.",
    "codeBlock": "",
    "language": "",
    "mcq": [
      {
        "question": "What is the correct way to declare an array of integers in C to store student scores?",
        "options": [
          "int scores[];",
          "int scores[10];",
          "array scores[10];",
          "scores[10] int;"
        ],
        "answer": "int scores[10];"
      },
      {
        "question": "How can you dynamically allocate memory for an array of student scores?",
        "codeBlock": "int *scores = malloc(10 * sizeof(int));",
        "language": "c",
        "options": [
          "int *scores = malloc(10 * sizeof(int));",
          "int scores = malloc(10);",
          "malloc(scores, 10 * int);",
          "int scores[10] = malloc(sizeof(int));"
        ],
        "answer": "int *scores = malloc(10 * sizeof(int));"
      }
    ]
  },
  {
    "title": "Implementing Functions for Employee Payroll System",
    "description": "A company is developing an employee payroll system where salaries need to be computed based on hours worked and hourly rates. Functions will be used to modularize the code for better maintainability.",
    "codeBlock": "",
    "language": "",
    "mcq": [
      {
        "question": "Which function prototype is correct for calculating employee salaries?",
        "options": [
          "int calc_salary(int, float);",
          "float calc_salary(int, int);",
          "void calc_salary(int, float);",
          "calc_salary(int, float);"
        ],
        "answer": "int calc_salary(int, float);"
      },
      {
        "question": "What is the correct way to return a value from a function in C?",
        "options": [
          "return value;",
          "value return;",
          "return(value);",
          "return;"
        ],
        "answer": "return value;"
      }
    ]
  }
];
