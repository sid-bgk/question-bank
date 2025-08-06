import { MCQ } from '../../../../../../types';

export const mcq: MCQ[] = [
  {
    "question": "What does a pointer variable store?",
    "options": [
      "Value of a variable",
      "Address of a variable",
      "Data type of a variable",
      "None of the above"
    ],
    "answer": "Address of a variable"
  },
  {
    "question": "Which of the following operators is used to get the address of a variable?",
    "options": [
      "*",
      "&",
      "->",
      "%"
    ],
    "answer": "&"
  },
  {
    "question": "What will be the output of the following code?",
    "codeBlock": "int num = 10;\nint *ptr = &num;\nprintf(\"%d\", *ptr);",
    "language": "c",
    "options": [
      "10",
      "Address of num",
      "Garbage value",
      "Compiler error"
    ],
    "answer": "10"
  },
  {
    "question": "What is a structure in C?",
    "options": [
      "A collection of similar data types",
      "A collection of different data types",
      "A function",
      "A pointer"
    ],
    "answer": "A collection of different data types"
  },
  {
    "question": "What is the size of a union equal to?",
    "options": [
      "Sum of all members",
      "Size of the largest member",
      "Size of the smallest member",
      "None of the above"
    ],
    "answer": "Size of the largest member"
  },
  {
    "question": "What is the correct way to declare a pointer to an integer in C?",
    "options": [
      "int ptr;",
      "int *ptr;",
      "pointer int ptr;",
      "int ptr*;"
    ],
    "answer": "int *ptr;"
  },
  {
    "question": "Which function is used to allocate memory dynamically in C?",
    "options": [
      "malloc()",
      "memalloc()",
      "allocmem()",
      "calloc()"
    ],
    "answer": "malloc()"
  },
  {
    "question": "What will happen if memory allocation fails in C?",
    "options": [
      "The program continues",
      "A null pointer is returned",
      "A runtime error occurs",
      "The system restarts"
    ],
    "answer": "A null pointer is returned"
  },
  {
    "question": "How do you access a member of a structure using a pointer?",
    "options": [
      "ptr.member",
      "ptr->member",
      "ptr*member",
      "ptr.member*"
    ],
    "answer": "ptr->member"
  },
  {
    "question": "Which function is used to close a file in C?",
    "options": [
      "closefile()",
      "fclose()",
      "endfile()",
      "fileclose()"
    ],
    "answer": "fclose()"
  },
  {
    "question": "What will the following code output?",
    "codeBlock": "char str[] = \"Hello\";\nprintf(\"%c\", *(str+1));",
    "language": "c",
    "options": [
      "H",
      "e",
      "l",
      "o"
    ],
    "answer": "e"
  },
  {
    "question": "What is the size of a pointer in a 64-bit system?",
    "options": [
      "2 bytes",
      "4 bytes",
      "8 bytes",
      "16 bytes"
    ],
    "answer": "8 bytes"
  },
  {
    "question": "Which function is used to read a line of text from a file?",
    "options": [
      "fgets()",
      "fscanf()",
      "fputs()",
      "fwrite()"
    ],
    "answer": "fgets()"
  },
  {
    "question": "What does the free() function do in C?",
    "options": [
      "Allocates memory",
      "Deallocates previously allocated memory",
      "Initializes memory",
      "None of the above"
    ],
    "answer": "Deallocates previously allocated memory"
  },
  {
    "question": "What happens if you try to dereference a null pointer?",
    "options": [
      "Undefined behavior",
      "Program termination",
      "Compiler warning",
      "Memory overflow"
    ],
    "answer": "Undefined behavior"
  },
  {
    "question": "Which statement is correct about an array of pointers?",
    "options": [
      "It stores values directly",
      "It stores addresses of other variables",
      "It cannot be used with dynamic memory",
      "It does not support pointer arithmetic"
    ],
    "answer": "It stores addresses of other variables"
  },
  {
    "question": "Which function is used to open a file in C?",
    "options": [
      "fileopen()",
      "open()",
      "fopen()",
      "startfile()"
    ],
    "answer": "fopen()"
  },
  {
    "question": "What is the correct syntax to dynamically allocate memory for an integer array of size 10?",
    "options": [
      "int *arr = malloc(10 * sizeof(int));",
      "int arr = malloc(10);",
      "malloc(arr, 10 * int);",
      "int arr[10] = malloc(sizeof(int));"
    ],
    "answer": "int *arr = malloc(10 * sizeof(int));"
  },
  {
    "question": "Which of the following is an example of pointer arithmetic?",
    "options": [
      "ptr++",
      "ptr = ptr + 1",
      "ptr--",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "question": "What is the output of the following code snippet?",
    "codeBlock": "int arr[] = {1, 2, 3, 4};\nprintf(\"%d\", *(arr + 2));",
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
    "question": "What is a dangling pointer?",
    "options": [
      "A pointer that points to a valid memory location",
      "A pointer that does not point to a valid memory location",
      "A pointer that stores the value of another variable",
      "A pointer that stores the address of another pointer"
    ],
    "answer": "A pointer that does not point to a valid memory location"
  },
  {
    "question": "How can you dynamically allocate memory in C?",
    "options": [
      "Using malloc, calloc, and realloc",
      "Using new and delete",
      "Using file pointers",
      "Using system memory functions"
    ],
    "answer": "Using malloc, calloc, and realloc"
  },
  {
    "question": "What is the difference between a structure and a union?",
    "options": [
      "Structure allocates memory for all members, while union allocates memory for the largest member only",
      "Both allocate memory for all members",
      "Union allocates memory for all members, while structure allocates memory for the largest member only",
      "They have the same memory allocation behavior"
    ],
    "answer": "Structure allocates memory for all members, while union allocates memory for the largest member only"
  },
  {
    "question": "What is the purpose of the fopen() function in C?",
    "options": [
      "To close an open file",
      "To read data from a file",
      "To open a file and associate it with a stream",
      "To delete a file from the system"
    ],
    "answer": "To open a file and associate it with a stream"
  },
  {
    "question": "How do you pass a structure to a function in C?",
    "options": [
      "By value",
      "By reference using pointers",
      "Both a and b",
      "Structures cannot be passed to functions"
    ],
    "answer": "Both a and b"
  },
  {
    "question": "What does a pointer variable store?",
    "options": [
      "Value of a variable",
      "Address of a variable",
      "Data type of a variable",
      "None of the above"
    ],
    "answer": "Address of a variable"
  },
  {
    "question": "Which of the following operators is used to get the address of a variable?",
    "options": [
      "*",
      "&",
      "->",
      "%"
    ],
    "answer": "&"
  },
  {
    "question": "What will be the output of the following code?",
    "codeBlock": "int num = 10;\nint *ptr = &num;\nprintf(\"%d\", *ptr);",
    "language": "c",
    "options": [
      "10",
      "Address of num",
      "Garbage value",
      "Compiler error"
    ],
    "answer": "10"
  },
  {
    "question": "What is a structure in C?",
    "options": [
      "A collection of similar data types",
      "A collection of different data types",
      "A function",
      "A pointer"
    ],
    "answer": "A collection of different data types"
  },
  {
    "question": "What is the size of a union equal to?",
    "options": [
      "Sum of all members",
      "Size of the largest member",
      "Size of the smallest member",
      "None of the above"
    ],
    "answer": "Size of the largest member"
  }
];
