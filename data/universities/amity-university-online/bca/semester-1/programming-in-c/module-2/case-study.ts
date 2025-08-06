import { CaseStudy } from '../../../../../../types';

export const case_study: CaseStudy[] = [
  {
    "title": "Working with Decision Control Statements",
    "description": "Determine grades based on marks entered by the user using nested if-else statements.",
    "codeBlock": "#include <stdio.h>\nint main() {\n    int marks;\n    printf(\"Enter your marks: \");\n    scanf(\"%d\", &marks);\n\n    if (marks > 90) {\n        printf(\"Grade: A\\n\");\n    } else if (marks >= 75) {\n        printf(\"Grade: B\\n\");\n    } else if (marks >= 50) {\n        printf(\"Grade: C\\n\");\n    } else {\n        printf(\"Grade: Fail\\n\");\n    }\n    return 0;\n}",
    "language": "c",
    "mcq": [
      {
        "question": "What is the output when the user enters 85 as marks?",
        "options": [
          "Grade: A",
          "Grade: B",
          "Grade: C",
          "Grade: Fail"
        ],
        "answer": "Grade: B"
      },
      {
        "question": "Which statement is used to handle multiple conditions in this program?",
        "options": [
          "switch",
          "do-while",
          "if-else if-else",
          "for loop"
        ],
        "answer": "if-else if-else"
      }
    ]
  },
  {
    "title": "Understanding Arithmetic Operations",
    "description": "Perform arithmetic operations (+, -, *, /) using a switch statement based on user input.",
    "codeBlock": "#include <stdio.h>\nint main() {\n    int num1, num2, result;\n    char op;\n    printf(\"Enter two numbers: \");\n    scanf(\"%d %d\", &num1, &num2);\n    printf(\"Enter an operator (+, -, *, /): \");\n    scanf(\" %c\", &op);\n\n    switch (op) {\n        case '+':\n            result = num1 + num2;\n            break;\n        case '-':\n            result = num1 - num2;\n            break;\n        case '*':\n            result = num1 * num2;\n            break;\n        case '/':\n            if (num2 != 0)\n                result = num1 / num2;\n            else {\n                printf(\"Error: Division by zero.\\n\");\n                return 1;\n            }\n            break;\n        default:\n            printf(\"Invalid operator.\\n\");\n            return 1;\n    }\n    printf(\"Result: %d\\n\", result);\n    return 0;\n}",
    "language": "c",
    "mcq": [
      {
        "question": "What will be the output if the user enters `10`, `5`, and `/` as inputs?",
        "options": [
          "50",
          "5",
          "2",
          "Error: Division by zero"
        ],
        "answer": "2"
      },
      {
        "question": "Which control structure is used to handle the arithmetic operations?",
        "options": [
          "if-else",
          "switch",
          "while",
          "for loop"
        ],
        "answer": "switch"
      }
    ]
  }
];
