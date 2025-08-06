import { CaseStudy } from '../../../../../../types';

export const case_study: CaseStudy[] = [
  {
    "title": "Decision Control Statements",
    "description": "A company is developing an application that evaluates user-input data to decide on eligibility for a reward program. The application accepts a user's purchase amount and determines eligibility based on the input.",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int amount;\n    printf(\"Enter purchase amount: \");\n    scanf(\"%d\", &amount);\n\n    if (amount > 500)\n        printf(\"Eligible for a reward\");\n    else if (amount >= 200 && amount <= 500)\n        printf(\"Eligible for a discount voucher\");\n    else\n        printf(\"No reward\");\n    return 0;\n}",
    "language": "c",
    "mcq": [
      {
        "question": "What type of decision control structure is most appropriate for the given scenario?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Simple if",
          "if-else if-else",
          "Switch-case",
          "Nested if"
        ],
        "answer": "if-else if-else"
      },
      {
        "question": "What is the output if a user enters a purchase amount of $350?",
        "codeBlock": "#include<stdio.h>\nint main() {\n    int amount;\n    printf(\"Enter purchase amount: \");\n    scanf(\"%d\", &amount);\n\n    if (amount > 500)\n        printf(\"Eligible for a reward\");\n    else if (amount >= 200 && amount <= 500)\n        printf(\"Eligible for a discount voucher\");\n    else\n        printf(\"No reward\");\n    return 0;\n}",
        "language": "c",
        "options": [
          "Eligible for a reward",
          "Eligible for a discount voucher",
          "No reward",
          "Compilation error"
        ],
        "answer": "Eligible for a discount voucher"
      }
    ]
  },
  {
    "title": "Loops and Iteration",
    "description": "A school is developing a program to calculate the average marks of students in a class. The program uses a loop to input marks for n students and calculates the average.",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int n = 3, sum = 0, marks;\n    for (int i = 0; i < n; i++) {\n        printf(\"Enter marks: \");\n        scanf(\"%d\", &marks);\n        sum += marks;\n    }\n    printf(\"Average marks = %d\", sum / n);\n    return 0;\n}",
    "language": "c",
    "mcq": [
      {
        "question": "Which loop structure is best suited to iterate over a known number of students?",
        "codeBlock": "",
        "language": "",
        "options": [
          "while loop",
          "do-while loop",
          "for loop",
          "Nested if"
        ],
        "answer": "for loop"
      },
      {
        "question": "What will be the output of this program for input marks: 80, 90, 70?",
        "codeBlock": "#include<stdio.h>\nint main() {\n    int n = 3, sum = 0, marks;\n    for (int i = 0; i < n; i++) {\n        printf(\"Enter marks: \");\n        scanf(\"%d\", &marks);\n        sum += marks;\n    }\n    printf(\"Average marks = %d\", sum / n);\n    return 0;\n}",
        "language": "c",
        "options": [
          "Average marks = 80",
          "Average marks = 70",
          "Average marks = 240",
          "Compilation error"
        ],
        "answer": "Average marks = 80"
      }
    ]
  }
];
