import { CaseStudy } from '../../../../../../types';

export const case_study: CaseStudy[] = [
  {
    "title": "Student Management System",
    "description": "A university wants to develop a student management system to store and process student data efficiently. They decide to use arrays to store students' scores and retrieve their performance efficiently. The system provides functionality to calculate the average score of a student by iterating through the stored scores.",
    "codeBlock": "#include <stdio.h>\nint main() {\n    int scores[5] = {90, 85, 78, 88, 92};\n    int sum = 0;\n    for (int i = 0; i < 5; i++) {\n        sum += scores[i];\n    }\n    float average = sum / 5.0;\n    printf(\"Average Score: %.2f\", average);\n    return 0;\n}",
    "language": "c",
    "mcq": [
      {
        "question": "What is the output of the above program?",
        "options": [
          "86.60",
          "87.00",
          "86.60f",
          "85.00"
        ],
        "answer": "86.60"
      },
      {
        "question": "Which data structure is used in the above example to store student scores?",
        "options": [
          "Linked List",
          "Stack",
          "Queue",
          "Array"
        ],
        "answer": "Array"
      }
    ]
  },
  {
    "title": "Library Book Tracking System",
    "description": "A library system is being designed to store book IDs and allow retrieval of book details by using function calls. The system maintains an array of book IDs and provides a function to check if a specific book ID exists within the library database.",
    "codeBlock": "#include <stdio.h>\nint checkBook(int bookIds[], int size, int searchId) {\n    for (int i = 0; i < size; i++) {\n        if (bookIds[i] == searchId) {\n            return 1;\n        }\n    }\n    return 0;\n}\nint main() {\n    int bookIds[5] = {101, 202, 303, 404, 505};\n    int searchId = 303;\n    if (checkBook(bookIds, 5, searchId)) {\n        printf(\"Book found.\\n\");\n    } else {\n        printf(\"Book not found.\\n\");\n    }\n    return 0;\n}",
    "language": "c",
    "mcq": [
      {
        "question": "What will be the output of the above program if the searchId is 303?",
        "options": [
          "Book not found.",
          "Book found.",
          "Compilation Error",
          "Runtime Error"
        ],
        "answer": "Book found."
      },
      {
        "question": "What parameter type is used to pass the book ID array to the function?",
        "options": [
          "By reference",
          "By pointer",
          "By value",
          "None of the above"
        ],
        "answer": "By pointer"
      }
    ]
  }
];
