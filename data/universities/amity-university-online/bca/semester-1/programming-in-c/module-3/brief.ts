import { Brief } from '../../../../../../types';

export const brief: Brief[] = [
  {
    "question": "Write a program in C to enter a number and check if it is even or odd.",
    "answer": "",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int num;\n    printf(\"Enter a number: \");\n    scanf(\"%d\", &num);\n\n    if (num % 2 == 0)\n        printf(\"%d is even.\\n\", num);\n    else\n        printf(\"%d is odd.\\n\", num);\n\n    return 0;\n}",
    "language": "c"
  },
  {
    "question": "Write a program in C to enter a number and check if it is positive or negative.",
    "answer": "",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int num;\n    printf(\"Enter a number: \");\n    scanf(\"%d\", &num);\n\n    if (num > 0)\n        printf(\"%d is positive.\\n\", num);\n    else if (num < 0)\n        printf(\"%d is negative.\\n\", num);\n    else\n        printf(\"The number is zero.\\n\");\n\n    return 0;\n}",
    "language": "c"
  },
  {
    "question": "Write a program in C to enter a number and check if it is: even and positive, even and negative, odd and positive, odd and negative.",
    "answer": "",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int num;\n    printf(\"Enter a number: \");\n    scanf(\"%d\", &num);\n\n    if (num % 2 == 0) {\n        if (num > 0)\n            printf(\"%d is even and positive.\\n\", num);\n        else if (num < 0)\n            printf(\"%d is even and negative.\\n\", num);\n        else\n            printf(\"The number is zero.\\n\");\n    } else {\n        if (num > 0)\n            printf(\"%d is odd and positive.\\n\", num);\n        else\n            printf(\"%d is odd and negative.\\n\", num);\n    }\n\n    return 0;\n}",
    "language": "c"
  },
  {
    "question": "Write a program in C to enter a year and check if it is a leap year or not.",
    "answer": "",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int year;\n    printf(\"Enter a year: \");\n    scanf(\"%d\", &year);\n\n    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))\n        printf(\"%d is a leap year.\\n\", year);\n    else\n        printf(\"%d is not a leap year.\\n\", year);\n\n    return 0;\n}",
    "language": "c"
  }
];
