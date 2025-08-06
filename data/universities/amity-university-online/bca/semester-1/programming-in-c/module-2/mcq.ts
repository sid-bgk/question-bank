import { MCQ } from '../../../../../../types';

export const mcq: MCQ[] = [
  {
    "question": "What are C Tokens?",
    "codeBlock": "",
    "language": "",
    "options": [
      "The smallest individual units of a C program",
      "The basic element recognized by the compiler",
      "The largest individual units of a program",
      "Both a & b"
    ],
    "answer": "Both a & b"
  },
  {
    "question": "What is required in every C program?",
    "codeBlock": "",
    "language": "",
    "options": [
      "The program must have at least one function.",
      "The program does not require any function.",
      "Input data.",
      "Output data."
    ],
    "answer": "The program must have at least one function."
  },
  {
    "question": "Which of the following is not a keyword in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "int",
      "char",
      "for",
      "fun"
    ],
    "answer": "fun"
  },
  {
    "question": "What is the size of `int` data type in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "1 byte",
      "2 bytes",
      "4 bytes",
      "Depends on the compiler"
    ],
    "answer": "Depends on the compiler"
  },
  {
    "question": "Which loop is executed at least once?",
    "codeBlock": "",
    "language": "",
    "options": [
      "For loop",
      "While loop",
      "Do-while loop",
      "Infinite loop"
    ],
    "answer": "Do-while loop"
  },
  {
    "question": "What will be the output of this program?",
    "codeBlock": "#include <stdio.h>\nint main() {\n    int a = 10;\n    printf(\"%d\", a++);\n    return 0;\n}",
    "language": "c",
    "options": [
      "10",
      "11",
      "Undefined behavior",
      "Error"
    ],
    "answer": "10"
  },
  {
    "question": "What is the purpose of `break` in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Terminates a loop or switch-case",
      "Skips to the next iteration of a loop",
      "Ends program execution",
      "Exits the main function"
    ],
    "answer": "Terminates a loop or switch-case"
  },
  {
    "question": "What is the output of this program?",
    "codeBlock": "#include <stdio.h>\nint main() {\n    int a = 10, b = 5;\n    printf(\"%d\", a > b ? a : b);\n    return 0;\n}",
    "language": "c",
    "options": [
      "10",
      "5",
      "Undefined behavior",
      "Error"
    ],
    "answer": "10"
  },
  {
    "question": "What is the valid range of `unsigned char`?",
    "codeBlock": "",
    "language": "",
    "options": [
      "-128 to 127",
      "0 to 255",
      "-255 to 255",
      "0 to 128"
    ],
    "answer": "0 to 255"
  },
  {
    "question": "Which function is used to dynamically allocate memory in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "malloc()",
      "calloc()",
      "realloc()",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "question": "What will be the output of this program?",
    "codeBlock": "#include <stdio.h>\nint main() {\n    int x = 10, y = 0;\n    if (x && y)\n        printf(\"True\");\n    else\n        printf(\"False\");\n    return 0;\n}",
    "language": "c",
    "options": [
      "True",
      "False",
      "Compile Error",
      "Undefined"
    ],
    "answer": "False"
  },
  {
    "question": "What is the result of the following code?",
    "codeBlock": "#include <stdio.h>\n#define SQUARE(x) x*x\nint main() {\n    int result = SQUARE(3 + 1);\n    printf(\"%d\", result);\n    return 0;\n}",
    "language": "c",
    "options": [
      "16",
      "12",
      "7",
      "10"
    ],
    "answer": "12"
  },
  {
    "question": "Which operator is used for conditional expressions?",
    "codeBlock": "",
    "language": "",
    "options": [
      ":",
      "?",
      "::",
      "Both a & b"
    ],
    "answer": "Both a & b"
  },
  {
    "question": "Which header file is used for mathematical functions?",
    "codeBlock": "",
    "language": "",
    "options": [
      "math.h",
      "string.h",
      "stdio.h",
      "stdlib.h"
    ],
    "answer": "math.h"
  },
  {
    "question": "What will the following code print?",
    "codeBlock": "#include <stdio.h>\nint main() {\n    printf(\"%d\", sizeof('A'));\n    return 0;\n}",
    "language": "c",
    "options": [
      "1",
      "2",
      "4",
      "Undefined"
    ],
    "answer": "2"
  },
  {
    "question": "Which keyword is used to define constants in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "constant",
      "define",
      "const",
      "static"
    ],
    "answer": "const"
  },
  {
    "question": "What will the following loop do?",
    "codeBlock": "for(;;) {\n    printf(\"Infinite loop\");\n}",
    "language": "c",
    "options": [
      "Compile error",
      "Infinite loop",
      "No output",
      "None of the above"
    ],
    "answer": "Infinite loop"
  },
  {
    "question": "What does `sizeof()` operator do in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Determines the size of a data type or variable in bits",
      "Determines the size of a data type or variable in bytes",
      "Allocates memory dynamically",
      "Checks if a variable is null"
    ],
    "answer": "Determines the size of a data type or variable in bytes"
  },
  {
    "question": "What is the output of this program?",
    "codeBlock": "#include <stdio.h>\nint main() {\n    int i = 0;\n    for (i = 0; i < 5; i++) {\n        if (i == 3)\n            continue;\n        printf(\"%d \", i);\n    }\n    return 0;\n}",
    "language": "c",
    "options": [
      "0 1 2 3 4",
      "0 1 2 4",
      "0 1 2 3",
      "None"
    ],
    "answer": "0 1 2 4"
  },
  {
    "question": "Which function is used to convert a string to an integer in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "atof()",
      "atoi()",
      "atol()",
      "None of the above"
    ],
    "answer": "atoi()"
  },
  {
    "question": "Which operator is used to get the memory address of a variable?",
    "codeBlock": "",
    "language": "",
    "options": [
      "*",
      "&",
      "@",
      "%"
    ],
    "answer": "&"
  },
  {
    "question": "What is the valid range of `unsigned int` in a 32-bit system?",
    "codeBlock": "",
    "language": "",
    "options": [
      "0 to 65535",
      "0 to 4294967295",
      "-2147483648 to 2147483647",
      "-65536 to 65535"
    ],
    "answer": "0 to 4294967295"
  },
  {
    "question": "What is the default value of a `static` variable in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "0",
      "1",
      "Garbage value",
      "Undefined"
    ],
    "answer": "0"
  },
  {
    "question": "Which header file is needed for string manipulation functions like `strlen()`?",
    "codeBlock": "",
    "language": "",
    "options": [
      "stdio.h",
      "string.h",
      "stdlib.h",
      "math.h"
    ],
    "answer": "string.h"
  },
  {
    "question": "What will this code output?",
    "codeBlock": "#include <stdio.h>\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    printf(\"%d\", *(arr + 3));\n    return 0;\n}",
    "language": "c",
    "options": [
      "1",
      "3",
      "4",
      "5"
    ],
    "answer": "4"
  },
  {
    "question": "Which function is used to write formatted output to a file in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "fwrite()",
      "fprintf()",
      "fputc()",
      "fputs()"
    ],
    "answer": "fprintf()"
  },
  {
    "question": "Which of the following is not a valid C data type?",
    "codeBlock": "",
    "language": "",
    "options": [
      "char",
      "int",
      "string",
      "float"
    ],
    "answer": "string"
  },
  {
    "question": "What will be the output of this code?",
    "codeBlock": "#include <stdio.h>\nint main() {\n    int x = 1, y = 2, z = 3;\n    printf(\"%d\", x | y & z);\n    return 0;\n}",
    "language": "c",
    "options": [
      "1",
      "2",
      "3",
      "None"
    ],
    "answer": "3"
  },
  {
    "question": "What is the difference between `malloc()` and `calloc()`?",
    "codeBlock": "",
    "language": "",
    "options": [
      "malloc() initializes memory to 0, calloc() does not",
      "malloc() allocates a single block of memory, calloc() allocates multiple blocks",
      "malloc() is faster than calloc()",
      "malloc() and calloc() are identical"
    ],
    "answer": "malloc() allocates a single block of memory, calloc() allocates multiple blocks"
  },
  {
    "question": "What will this code output?",
    "codeBlock": "#include <stdio.h>\nint main() {\n    int a = 5, b = 10, c = 15;\n    printf(\"%d\", a > b ? a : (b > c ? b : c));\n    return 0;\n}",
    "language": "c",
    "options": [
      "5",
      "10",
      "15",
      "None of the above"
    ],
    "answer": "15"
  },
  {
    "question": "What will be the output of this code?",
    "codeBlock": "#include <stdio.h>\nint main() {\n    int x = 5;\n    printf(\"%d %d %d\", x, x++, ++x);\n    return 0;\n}",
    "language": "c",
    "options": [
      "5 5 5",
      "5 6 7",
      "7 6 5",
      "Undefined behavior"
    ],
    "answer": "Undefined behavior"
  },
  {
    "question": "What is the purpose of the `continue` statement in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Terminates the program",
      "Skips the rest of the code in the current iteration",
      "Ends the loop immediately",
      "Exits the function"
    ],
    "answer": "Skips the rest of the code in the current iteration"
  },
  {
    "question": "What is the size of a `double` on a 64-bit system?",
    "codeBlock": "",
    "language": "",
    "options": [
      "2 bytes",
      "4 bytes",
      "8 bytes",
      "16 bytes"
    ],
    "answer": "8 bytes"
  },
  {
    "question": "What does the `fgetc()` function do in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Reads a character from the console",
      "Reads a character from a file",
      "Writes a character to a file",
      "Writes a character to the console"
    ],
    "answer": "Reads a character from a file"
  },
  {
    "question": "Which of the following operators has the highest precedence?",
    "codeBlock": "",
    "language": "",
    "options": [
      "*",
      "&&",
      "+",
      "||"
    ],
    "answer": "*"
  },
  {
    "question": "What is the output of this program?",
    "codeBlock": "#include <stdio.h>\nint main() {\n    int a = 10, b = 20;\n    printf(\"%d\", a > b ? a : b);\n    return 0;\n}",
    "language": "c",
    "options": [
      "10",
      "20",
      "Error",
      "Undefined"
    ],
    "answer": "20"
  },
  {
    "question": "Which header file is required to use the `pow()` function?",
    "codeBlock": "",
    "language": "",
    "options": [
      "math.h",
      "stdio.h",
      "stdlib.h",
      "string.h"
    ],
    "answer": "math.h"
  },
  {
    "question": "What will be the output of this program?",
    "codeBlock": "#include <stdio.h>\nint main() {\n    char str[] = \"Hello, World!\";\n    printf(\"%c\", *(str + 7));\n    return 0;\n}",
    "language": "c",
    "options": [
      "H",
      "e",
      "W",
      "l"
    ],
    "answer": "W"
  },
  {
    "question": "What is the purpose of the `#define` directive in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "To declare a constant",
      "To include a library",
      "To define a macro",
      "To create a function"
    ],
    "answer": "To define a macro"
  },
  {
    "question": "What is the result of `5 & 3` in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "1",
      "2",
      "3",
      "5"
    ],
    "answer": "1"
  },
  {
    "question": "What will this code output?",
    "codeBlock": "#include <stdio.h>\nint main() {\n    int a = 10, b = 5;\n    printf(\"%d\", a + b * a / b);\n    return 0;\n}",
    "language": "c",
    "options": [
      "15",
      "20",
      "25",
      "30"
    ],
    "answer": "20"
  },
  {
    "question": "What is the result of `7 | 3` in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "3",
      "7",
      "5",
      "7"
    ],
    "answer": "7"
  },
  {
    "question": "Which function is used to compare two strings in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "strcmp()",
      "strcpy()",
      "strcat()",
      "strlen()"
    ],
    "answer": "strcmp()"
  },
  {
    "question": "What does the `feof()` function do in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Checks if a file is closed",
      "Checks if the end of a file is reached",
      "Flushes the file buffer",
      "Reads a character from the file"
    ],
    "answer": "Checks if the end of a file is reached"
  },
  {
    "question": "What is the output of this code?",
    "codeBlock": "#include <stdio.h>\nint main() {\n    int a = 10, b = 0;\n    printf(\"%d\", a && b);\n    return 0;\n}",
    "language": "c",
    "options": [
      "1",
      "0",
      "10",
      "Error"
    ],
    "answer": "0"
  },
  {
    "question": "Which of the following is a correct way to declare a pointer in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "int *p;",
      "int p*;",
      "*int p;",
      "int p&;"
    ],
    "answer": "int *p;"
  },
  {
    "question": "What will this code output?",
    "codeBlock": "#include <stdio.h>\nint main() {\n    int x = 5;\n    printf(\"%d\", sizeof(x++));\n    printf(\"%d\", x);\n    return 0;\n}",
    "language": "c",
    "options": [
      "4 5",
      "4 6",
      "5 5",
      "Undefined behavior"
    ],
    "answer": "4 5"
  },
  {
    "question": "Which operator is used to access a member of a structure in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      ".",
      "->",
      "::",
      "&"
    ],
    "answer": "."
  },
  {
    "question": "What will be the output of this program?",
    "codeBlock": "#include <stdio.h>\nint main() {\n    char ch = 'A';\n    printf(\"%d\", ch + 1);\n    return 0;\n}",
    "language": "c",
    "options": [
      "65",
      "66",
      "A",
      "B"
    ],
    "answer": "66"
  },
  {
    "question": "What is the output of this program?",
    "codeBlock": "#include <stdio.h>\nint main() {\n    int arr[3] = {10, 20, 30};\n    printf(\"%d\", *(arr + 1));\n    return 0;\n}",
    "language": "c",
    "options": [
      "10",
      "20",
      "30",
      "40"
    ],
    "answer": "20"
  }
];
