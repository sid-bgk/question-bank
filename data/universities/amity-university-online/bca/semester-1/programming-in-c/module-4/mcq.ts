import { MCQ } from '../../../../../../types';

export const mcq: MCQ[] = [
  {
    "question": "What is an array?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A collection of various elements",
      "A grouping of items of the same type",
      "None of the mentioned",
      "C as well as A"
    ],
    "answer": "A grouping of items of the same type"
  },
  {
    "question": "How should an array be initialized correctly?",
    "codeBlock": "int a[6] = {12, 41, 12, 51, 45, 5};",
    "language": "c",
    "options": [
      "int a[6] = {12, 41, 12, 51, 45, 5};",
      "int a{} = {12, 14, 12, 15, 45, 5};",
      "int a{6} = {12, 14, 12};",
      "int a(6) = {12, 14, 122, 51, 45, 15};"
    ],
    "answer": "int a[6] = {12, 41, 12, 51, 45, 5};"
  },
  {
    "question": "Which statement about an array is most accurate?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Data structure with hierarchical behavior",
      "A container for objects of similar forms",
      "Once initialized, arrays are immutable",
      "An array is not a data structure"
    ],
    "answer": "A container for objects of similar forms"
  },
  {
    "question": "What will the following code output?",
    "codeBlock": "int arr[] = {1, 2, 3, 4, 5};\nprintf(\"%d\", arr[2]);",
    "language": "c",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "3"
  },
  {
    "question": "Which function is used to concatenate strings?",
    "codeBlock": "",
    "language": "",
    "options": [
      "strcat()",
      "strcopy()",
      "strmerge()",
      "strcombine()"
    ],
    "answer": "strcat()"
  },
  {
    "question": "What is the return type of the strlen() function?",
    "codeBlock": "",
    "language": "",
    "options": [
      "int",
      "char",
      "float",
      "double"
    ],
    "answer": "int"
  },
  {
    "question": "What does the following code print?",
    "codeBlock": "void func(int arr[]) {\n    arr[0] = 10;\n}\nint main() {\n    int arr[] = {1, 2, 3};\n    func(arr);\n    printf(\"%d\", arr[0]);\n}",
    "language": "c",
    "options": [
      "1",
      "10",
      "3",
      "Compilation error"
    ],
    "answer": "10"
  },
  {
    "question": "What function is used to compare strings?",
    "codeBlock": "",
    "language": "",
    "options": [
      "strcmp()",
      "strcpy()",
      "memcmp()",
      "strncmp()"
    ],
    "answer": "strcmp()"
  },
  {
    "question": "What is the correct syntax to declare a two-dimensional array?",
    "codeBlock": "",
    "language": "",
    "options": [
      "int arr[3,4];",
      "int arr[3][4];",
      "int arr{3,4};",
      "arr[3][4] int;"
    ],
    "answer": "int arr[3][4];"
  },
  {
    "question": "What will the following code output?",
    "codeBlock": "int main() {\n    int arr[] = {1, 2, 3, 4};\n    printf(\"%d\", *(arr + 3));\n}",
    "language": "c",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "4"
  },
  {
    "question": "What will happen if an array index goes out of bounds?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Segmentation fault",
      "Undefined behavior",
      "Compilation error",
      "Runtime error"
    ],
    "answer": "Undefined behavior"
  },
  {
    "question": "Which of the following is a valid string declaration?",
    "codeBlock": "",
    "language": "",
    "options": [
      "char str[] = \"Hello\";",
      "char str = \"Hello\";",
      "string str = \"Hello\";",
      "str = \"Hello\";"
    ],
    "answer": "char str[] = \"Hello\";"
  },
  {
    "question": "Which function is used to find the length of a string?",
    "codeBlock": "",
    "language": "",
    "options": [
      "strlen()",
      "strlength()",
      "len()",
      "string_length()"
    ],
    "answer": "strlen()"
  },
  {
    "question": "How are arrays stored in memory?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Random locations",
      "Contiguous memory locations",
      "Linked list structure",
      "Heap memory"
    ],
    "answer": "Contiguous memory locations"
  },
  {
    "question": "Which function is used to copy a string?",
    "codeBlock": "",
    "language": "",
    "options": [
      "strcpy()",
      "strcat()",
      "strcmp()",
      "strcopy()"
    ],
    "answer": "strcpy()"
  },
  {
    "question": "What is the default value of uninitialized array elements in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "0",
      "Garbage value",
      "-1",
      "Compiler dependent"
    ],
    "answer": "Garbage value"
  },
  {
    "question": "What will the following code output?",
    "codeBlock": "int arr[] = {1, 2, 3, 4, 5};\nprintf(\"%d\", arr[4]);",
    "language": "c",
    "options": [
      "1",
      "2",
      "5",
      "Undefined"
    ],
    "answer": "5"
  },
  {
    "question": "What is the size of the following array?",
    "codeBlock": "int arr[10];",
    "language": "c",
    "options": [
      "10 bytes",
      "20 bytes",
      "40 bytes",
      "4 bytes"
    ],
    "answer": "40 bytes (assuming int is 4 bytes)"
  },
  {
    "question": "Which of the following is correct about function declaration?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It defines the function body",
      "It provides function prototype",
      "It executes the function",
      "It does nothing"
    ],
    "answer": "It provides function prototype"
  },
  {
    "question": "What will the following code output?",
    "codeBlock": "int arr[5] = {1, 2, 3};\nprintf(\"%d\", arr[4]);",
    "language": "c",
    "options": [
      "0",
      "Undefined behavior",
      "3",
      "Compilation error"
    ],
    "answer": "Undefined behavior"
  },
  {
    "question": "What is the correct syntax for passing an array to a function?",
    "codeBlock": "",
    "language": "",
    "options": [
      "func(int arr[])",
      "func(int *arr)",
      "Both a and b",
      "None of the above"
    ],
    "answer": "Both a and b"
  },
  {
    "question": "What is the base case in recursion?",
    "codeBlock": "",
    "language": "",
    "options": [
      "The first function call",
      "The termination condition",
      "A recursive function without conditions",
      "None of the above"
    ],
    "answer": "The termination condition"
  },
  {
    "question": "What is the purpose of return statement in a function?",
    "codeBlock": "",
    "language": "",
    "options": [
      "To terminate the function and return a value",
      "To print output",
      "To define the function",
      "To call another function"
    ],
    "answer": "To terminate the function and return a value"
  },
  {
    "question": "What does void indicate in a function declaration?",
    "codeBlock": "",
    "language": "",
    "options": [
      "The function returns an integer value",
      "The function does not return any value",
      "The function is of unknown type",
      "None of the above"
    ],
    "answer": "The function does not return any value"
  },
  {
    "question": "Which header file is required for string handling functions?",
    "codeBlock": "",
    "language": "",
    "options": [
      "#include <stdio.h>",
      "#include <string.h>",
      "#include <stdlib.h>",
      "#include <strings>"
    ],
    "answer": "#include <string.h>"
  },
  {
    "question": "Which function is used to reverse a string in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "strrev()",
      "reverse()",
      "revstr()",
      "strflip()"
    ],
    "answer": "strrev()"
  },
  {
    "question": "Which function is used to compare two strings ignoring case?",
    "codeBlock": "",
    "language": "",
    "options": [
      "strcmp()",
      "strcmpi()",
      "stricmp()",
      "strcasecmp()"
    ],
    "answer": "strcasecmp()"
  },
  {
    "question": "What happens when an array index is accessed beyond its limit?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Program crashes",
      "Undefined behavior",
      "Compilation error",
      "Segmentation fault"
    ],
    "answer": "Undefined behavior"
  },
  {
    "question": "Which operator is used to access elements in an array?",
    "codeBlock": "",
    "language": "",
    "options": [
      ".",
      "->",
      "[]",
      "()"
    ],
    "answer": "[]"
  },
  {
    "question": "Which of the following is an example of a function with no return value and no parameters?",
    "codeBlock": "",
    "language": "",
    "options": [
      "void func(int a, int b);",
      "int func();",
      "void func();",
      "None of the above"
    ],
    "answer": "void func();"
  },
  {
    "question": "How can we determine the number of elements in an array?",
    "codeBlock": "",
    "language": "",
    "options": [
      "sizeof(arr)",
      "sizeof(arr) / sizeof(arr[0])",
      "length(arr)",
      "array_size(arr)"
    ],
    "answer": "sizeof(arr) / sizeof(arr[0])"
  },
  {
    "question": "What does the following code output?",
    "codeBlock": "char str[] = \"C programming\";\nprintf(\"%c\", str[2]);",
    "language": "c",
    "options": [
      "C",
      "p",
      "r",
      "o"
    ],
    "answer": "r"
  },
  {
    "question": "What will be the output of the following code?",
    "codeBlock": "int arr[] = {1, 2, 3, 4, 5};\nprintf(\"%d\", *(arr + 1));",
    "language": "c",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "2"
  },
  {
    "question": "Which of the following is a valid function declaration in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "void func;",
      "func void();",
      "void func();",
      "func();"
    ],
    "answer": "void func();"
  },
  {
    "question": "What will the following code print?",
    "codeBlock": "int arr[] = {1, 2, 3, 4, 5};\nprintf(\"%d\", arr[3]);",
    "language": "c",
    "options": [
      "3",
      "4",
      "5",
      "Undefined"
    ],
    "answer": "4"
  },
  {
    "question": "What will be the output of the following code?",
    "codeBlock": "int arr[] = {1, 2, 3, 4, 5};\nprintf(\"%d\", arr[2]);",
    "language": "c",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "3"
  },
  {
    "question": "What does the following code print?",
    "codeBlock": "void main() {\n    int arr[3] = {10, 20, 30};\n    printf(\"%d\", *(arr + 1));\n}",
    "language": "c",
    "options": [
      "10",
      "20",
      "30",
      "Compilation error"
    ],
    "answer": "20"
  },
  {
    "question": "What will the following code snippet output?",
    "codeBlock": "int a = 5, b = 10;\nvoid swap(int *x, int *y) {\n   int temp = *x;\n   *x = *y;\n   *y = temp;\n}\nswap(&a, &b);\nprintf(\"%d %d\", a, b);",
    "language": "c",
    "options": [
      "5 10",
      "10 5",
      "Compilation error",
      "Undefined behavior"
    ],
    "answer": "10 5"
  },
  {
    "question": "What will happen if an array index goes out of bounds?",
    "codeBlock": "int arr[5];\narr[10] = 50;",
    "language": "c",
    "options": [
      "Segmentation fault",
      "Undefined behavior",
      "Compilation error",
      "Runtime error"
    ],
    "answer": "Undefined behavior"
  },
  {
    "question": "What will be printed?",
    "codeBlock": "char str[] = \"abcdef\";\nprintf(\"%c\", str[3]);",
    "language": "c",
    "options": [
      "a",
      "b",
      "d",
      "c"
    ],
    "answer": "d"
  },
  {
    "question": "What does the following code snippet do?",
    "codeBlock": "char str[] = \"Hello\";\nprintf(\"%c\", str[5]);",
    "language": "c",
    "options": [
      "H",
      "o",
      "Null character",
      "Undefined behavior"
    ],
    "answer": "Null character"
  },
  {
    "question": "What will the following code output?",
    "codeBlock": "int main() {\n    int arr[] = {1, 2, 3, 4};\n    printf(\"%d\", *(arr + 3));\n}",
    "language": "c",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "4"
  },
  {
    "question": "What will the following program output?",
    "codeBlock": "int main() {\n    char str1[] = \"abc\", str2[] = \"abc\";\n    if (str1 == str2)\n        printf(\"Equal\");\n    else\n        printf(\"Not equal\");\n}",
    "language": "c",
    "options": [
      "Equal",
      "Not equal",
      "Compilation error",
      "Undefined"
    ],
    "answer": "Not equal"
  },
  {
    "question": "What is the output of this program?",
    "codeBlock": "int main() {\n    int arr[3] = {1, 2, 3};\n    printf(\"%d\", sizeof(arr)/sizeof(arr[0]));\n}",
    "language": "c",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "3"
  },
  {
    "question": "What will the following code output?",
    "codeBlock": "int main() {\n    int arr[5] = {0};\n    printf(\"%d\", arr[4]);\n}",
    "language": "c",
    "options": [
      "0",
      "4",
      "Undefined",
      "Compilation error"
    ],
    "answer": "0"
  }
];
