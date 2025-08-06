import { Brief } from '../../../../../../types';

export const brief: Brief[] = [
  {
    "question": "What is a pointer, and what are the types of pointers?",
    "answer": "A **pointer** is a variable that stores the memory address of another variable.\n\n**Types of pointers:**\n- Null pointer\n- Void pointer\n- Wild pointer\n- Dangling pointer\n- Function pointer\n- Near, Far, and Huge pointers",
    "codeBlock": "",
    "language": ""
  },
  {
    "question": "Write a program (WAP) to calculate the factorial of a number using call by reference without return.",
    "answer": "```c\n#include <stdio.h>\nvoid factorial(int *n, int *fact) {\n    *fact = 1;\n    for (int i = 1; i <= *n; i++) {\n        *fact *= i;\n    }\n}\nint main() {\n    int num = 5, result;\n    factorial(&num, &result);\n    printf(\"Factorial: %d\", result);\n    return 0;\n}\n```",
    "codeBlock": "factorial(&num, &result);",
    "language": "c"
  },
  {
    "question": "Write a program (WAP) to calculate the factorial of a number using call by value with return.",
    "answer": "```c\n#include <stdio.h>\nint factorial(int n) {\n    if (n == 0 || n == 1) return 1;\n    return n * factorial(n - 1);\n}\nint main() {\n    int num = 5;\n    printf(\"Factorial: %d\", factorial(num));\n    return 0;\n}\n```",
    "codeBlock": "factorial(num);",
    "language": "c"
  },
  {
    "question": "Write a program (WAP) to input a string and reverse it using a pointer to function.",
    "answer": "```c\n#include <stdio.h>\n#include <string.h>\nvoid reverse(char *str) {\n    int len = strlen(str);\n    for (int i = 0; i < len / 2; i++) {\n        char temp = str[i];\n        str[i] = str[len - i - 1];\n        str[len - i - 1] = temp;\n    }\n}\nint main() {\n    char str[] = \"Hello\";\n    reverse(str);\n    printf(\"Reversed: %s\", str);\n    return 0;\n}\n```",
    "codeBlock": "reverse(str);",
    "language": "c"
  },
  {
    "question": "Distinguish between structure and union.",
    "answer": "A **structure** allocates memory for all members separately, whereas a **union** allocates memory equal to the largest member only.\n\n**Structure Example:**\n```c\nstruct Employee {\n    int id;\n    float salary;\n};\n```\n**Union Example:**\n```c\nunion Data {\n    int id;\n    float salary;\n};\n```",
    "codeBlock": "",
    "language": ""
  }
];
