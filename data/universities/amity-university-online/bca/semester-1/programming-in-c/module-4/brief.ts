import { Brief } from '../../../../../../types';

export const brief: Brief[] = [
  {
    "question": "Write a program in C to find the cube of any number using a function.",
    "answer": "",
    "codeBlock": "#include <stdio.h>\n\nint cube(int num) {\n    return num * num * num;\n}\n\nint main() {\n    int number;\n    printf(\"Enter a number: \");\n    scanf(\"%d\", &number);\n    printf(\"Cube of %d is %d\\n\", number, cube(number));\n    return 0;\n}",
    "language": "c"
  },
  {
    "question": "Write a program in C to calculate the factorial of a number using a function.",
    "answer": "",
    "codeBlock": "#include <stdio.h>\n\nint factorial(int num) {\n    if (num == 0 || num == 1)\n        return 1;\n    return num * factorial(num - 1);\n}\n\nint main() {\n    int number;\n    printf(\"Enter a number: \");\n    scanf(\"%d\", &number);\n    printf(\"Factorial of %d is %d\\n\", number, factorial(number));\n    return 0;\n}",
    "language": "c"
  },
  {
    "question": "Write a program in C to check if a given number is prime or not using a function.",
    "answer": "",
    "codeBlock": "#include <stdio.h>\n\nint isPrime(int num) {\n    if (num <= 1) return 0;\n    for (int i = 2; i <= num / 2; i++) {\n        if (num % i == 0)\n            return 0;\n    }\n    return 1;\n}\n\nint main() {\n    int number;\n    printf(\"Enter a number: \");\n    scanf(\"%d\", &number);\n    if (isPrime(number))\n        printf(\"%d is a prime number\\n\", number);\n    else\n        printf(\"%d is not a prime number\\n\", number);\n    return 0;\n}",
    "language": "c"
  },
  {
    "question": "What is an array in C?",
    "answer": "An array is a collection of elements of the same data type stored in contiguous memory locations and accessed using an index.",
    "codeBlock": "",
    "language": ""
  },
  {
    "question": "What is recursion in C programming?",
    "answer": "Recursion is a technique where a function calls itself directly or indirectly to solve a problem by breaking it down into smaller subproblems.",
    "codeBlock": "",
    "language": ""
  }
];
