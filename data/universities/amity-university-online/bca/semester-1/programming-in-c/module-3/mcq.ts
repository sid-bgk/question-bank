import { MCQ } from '../../../../../../types';

export const mcq: MCQ[] = [
  {
    "question": "What are the four types of control statements in C?",
    "options": [
      "Sequential, Decision, Loop, Storage",
      "Sequential, Loop, Command-Line, Decision",
      "Decision, Loop, File, Sequential",
      "Loop, Decision, Recursion, Command-Line"
    ],
    "answer": "Sequential, Decision, Loop, Storage"
  },
  {
    "question": "What does the `break` keyword do in C?",
    "options": [
      "Exits the program",
      "Skips to the next iteration",
      "Exits the current loop or switch block",
      "Stops program compilation"
    ],
    "answer": "Exits the current loop or switch block"
  },
  {
    "question": "Which decision control statement is used to handle multi-way branching?",
    "options": [
      "If-Else",
      "Switch",
      "Nested If",
      "Ternary Operator"
    ],
    "answer": "Switch"
  },
  {
    "question": "Which keyword is used to check multiple conditions in a decision statement?",
    "options": [
      "case",
      "else",
      "elif",
      "if"
    ],
    "answer": "elif"
  },
  {
    "question": "What happens if a `default` case is not included in a `switch` statement?",
    "options": [
      "The program throws an error",
      "Nothing happens if no case matches",
      "The program crashes",
      "The first case is executed"
    ],
    "answer": "Nothing happens if no case matches"
  },
  {
    "question": "What happens when `continue` is used inside a loop?",
    "options": [
      "Exits the loop completely",
      "Skips to the next iteration",
      "Exits the current block",
      "None of the above"
    ],
    "answer": "Skips to the next iteration"
  },
  {
    "question": "What is the syntax for a `for` loop in C?",
    "options": [
      "for (initialization condition increment) {}",
      "for (initialization; condition; increment/decrement) {}",
      "for {initialization condition increment/decrement}",
      "for initialization condition increment/decrement"
    ],
    "answer": "for (initialization; condition; increment/decrement) {}"
  },
  {
    "question": "Which loop ensures at least one execution of the code block?",
    "options": [
      "For Loop",
      "While Loop",
      "Do-While Loop",
      "Infinite Loop"
    ],
    "answer": "Do-While Loop"
  },
  {
    "question": "What is required for a loop to run?",
    "options": [
      "Initialization",
      "Condition",
      "Increment/Decrement",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "question": "Which loop type is pre-tested in C?",
    "options": [
      "For Loop",
      "Do-While Loop",
      "Infinite Loop",
      "Post-Tested Loop"
    ],
    "answer": "For Loop"
  },
  {
    "question": "What happens if a loop condition always evaluates to true?",
    "options": [
      "The loop will run infinitely",
      "The loop will terminate after one iteration",
      "The program throws an error",
      "The loop skips execution"
    ],
    "answer": "The loop will run infinitely"
  },
  {
    "question": "What does the `nested loop` refer to?",
    "options": [
      "A loop within a loop",
      "A loop outside another loop",
      "Multiple switch statements",
      "None of the above"
    ],
    "answer": "A loop within a loop"
  },
  {
    "question": "Which is the correct syntax for a `while` loop?",
    "options": [
      "while (condition) { ... }",
      "while {condition} ...",
      "while (condition);",
      "while condition () {}"
    ],
    "answer": "while (condition) { ... }"
  },
  {
    "question": "What is the difference between `while` and `do-while` loops?",
    "options": [
      "`while` executes at least once; `do-while` does not",
      "`do-while` executes at least once; `while` may not",
      "Both are the same",
      "Neither executes more than once"
    ],
    "answer": "`do-while` executes at least once; `while` may not"
  },
  {
    "question": "Which type of loop is typically used when the number of iterations is known?",
    "options": [
      "While Loop",
      "For Loop",
      "Do-While Loop",
      "Nested Loop"
    ],
    "answer": "For Loop"
  },
  {
    "question": "What does `argc` stand for in command-line arguments?",
    "options": [
      "Argument Control",
      "Argument Count",
      "Array Count",
      "None of the above"
    ],
    "answer": "Argument Count"
  },
  {
    "question": "What type of data does `argv[]` hold?",
    "options": [
      "Integers",
      "Floating-point values",
      "Character pointers (strings)",
      "Boolean values"
    ],
    "answer": "Character pointers (strings)"
  },
  {
    "question": "What is stored in `argv[0]`?",
    "options": [
      "The first argument passed to the program",
      "The program name",
      "The last argument passed",
      "The number of arguments"
    ],
    "answer": "The program name"
  },
  {
    "question": "Which function is required to convert a string argument to an integer?",
    "options": [
      "atoi()",
      "itoa()",
      "strlen()",
      "scanf()"
    ],
    "answer": "atoi()"
  },
  {
    "question": "What happens if no arguments are passed to a program?",
    "options": [
      "argc is set to 1",
      "argc is set to 0",
      "The program crashes",
      "The argv[] array contains garbage values"
    ],
    "answer": "argc is set to 1"
  },
  {
    "question": "Which storage class is the default for local variables?",
    "options": [
      "static",
      "auto",
      "register",
      "extern"
    ],
    "answer": "auto"
  },
  {
    "question": "Which storage class retains its value between function calls?",
    "options": [
      "Auto",
      "Static",
      "Extern",
      "Register"
    ],
    "answer": "Static"
  },
  {
    "question": "Which keyword is used to declare a global variable accessible across files?",
    "options": [
      "extern",
      "auto",
      "static",
      "register"
    ],
    "answer": "extern"
  },
  {
    "question": "What is the lifetime of a static variable?",
    "options": [
      "Till the program ends",
      "Till the block ends",
      "Till the function executes",
      "Indefinite"
    ],
    "answer": "Till the program ends"
  },
  {
    "question": "Which storage class specifies that a variable is stored in a CPU register?",
    "options": [
      "auto",
      "register",
      "static",
      "extern"
    ],
    "answer": "register"
  },
  {
    "question": "What is the initial value of a static variable in C?",
    "options": [
      "0",
      "Undefined",
      "Garbage value",
      "Depends on the compiler"
    ],
    "answer": "0"
  },
  {
    "question": "Which storage class cannot have a memory address?",
    "options": [
      "Static",
      "Extern",
      "Register",
      "Auto"
    ],
    "answer": "Register"
  },
  {
    "question": "What will happen if the `break` statement is not used in a `switch` case?",
    "options": [
      "Only the matching case is executed",
      "All cases execute from the matching one",
      "The program throws an error",
      "None of the above"
    ],
    "answer": "All cases execute from the matching one"
  },
  {
    "question": "Which of the following statements about nested loops is true?",
    "options": [
      "Only one loop executes at a time",
      "Both inner and outer loops must use the same variable",
      "The inner loop executes completely before the outer loop continues",
      "The inner loop is optional"
    ],
    "answer": "The inner loop executes completely before the outer loop continues"
  },
  {
    "question": "What is the purpose of the `default` case in a `switch` statement?",
    "options": [
      "To handle all unmatched cases",
      "To exit the switch block",
      "To prevent errors",
      "None of the above"
    ],
    "answer": "To handle all unmatched cases"
  },
  {
    "question": "What is the output of the following code?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int x = 5, y = 10;\n    if (x > y)\n        printf(\"X is greater\");\n    else\n        printf(\"Y is greater\");\n    return 0;\n}",
    "language": "c",
    "options": [
      "X is greater",
      "Y is greater",
      "Compilation error",
      "No output"
    ],
    "answer": "Y is greater"
  },
  {
    "question": "What does this code print?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int i = 1;\n    while (i <= 3) {\n        printf(\"%d \", i);\n        i++;\n    }\n    return 0;\n}",
    "language": "c",
    "options": [
      "1 2 3",
      "1 2 3 4",
      "0 1 2",
      "Infinite loop"
    ],
    "answer": "1 2 3"
  },
  {
    "question": "What will happen when this code is executed?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    for (int i = 0; i < 5; i++) {\n        if (i == 3) break;\n        printf(\"%d \", i);\n    }\n    return 0;\n}",
    "language": "c",
    "options": [
      "0 1 2",
      "0 1 2 3",
      "0 1 2 3 4",
      "No output"
    ],
    "answer": "0 1 2"
  },
  {
    "question": "What is the output of the following code?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int x = 10;\n    do {\n        printf(\"%d \", x);\n        x--;\n    } while (x > 7);\n    return 0;\n}",
    "language": "c",
    "options": [
      "10 9 8",
      "10 9 8 7",
      "Infinite loop",
      "No output"
    ],
    "answer": "10 9 8"
  },
  {
    "question": "What does this program print?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int i = 1, j = 2;\n    if (i > j)\n        printf(\"i is greater\");\n    else if (i == j)\n        printf(\"i and j are equal\");\n    else\n        printf(\"j is greater\");\n    return 0;\n}",
    "language": "c",
    "options": [
      "i is greater",
      "j is greater",
      "i and j are equal",
      "Compilation error"
    ],
    "answer": "j is greater"
  },
  {
    "question": "What is the output of this program?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int num = 5;\n    switch (num) {\n        case 1: printf(\"One\");\n        case 5: printf(\"Five\");\n        case 10: printf(\"Ten\");\n        default: printf(\"Default\");\n    }\n    return 0;\n}",
    "language": "c",
    "options": [
      "Five Ten Default",
      "Five Default",
      "One Five Ten Default",
      "Compilation error"
    ],
    "answer": "Five Ten Default"
  },
  {
    "question": "What will this code output?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int x = 3;\n    for (int i = 0; i < x; i++) {\n        for (int j = 0; j < i; j++) {\n            printf(\"*\");\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
    "language": "c",
    "options": [
      "*",
      "*\n**",
      "*\n**\n***",
      "No output"
    ],
    "answer": "*\n**"
  },
  {
    "question": "What is the output of this code?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int x = 5, y = 10;\n    if (x < y)\n        if (y == 10)\n            printf(\"Condition Met\");\n        else\n            printf(\"Condition Not Met\");\n    return 0;\n}",
    "language": "c",
    "options": [
      "Condition Met",
      "Condition Not Met",
      "Compilation error",
      "No output"
    ],
    "answer": "Condition Met"
  },
  {
    "question": "What happens when this loop is executed?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int i = 0;\n    while (i < 5) {\n        if (i == 3) break;\n        printf(\"%d \", i);\n        i++;\n    }\n    return 0;\n}",
    "language": "c",
    "options": [
      "0 1 2",
      "0 1 2 3",
      "0 1 2 3 4",
      "Infinite loop"
    ],
    "answer": "0 1 2"
  },
  {
    "question": "What will this code print?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int x = 5;\n    switch (x) {\n        case 5:\n            printf(\"Five\");\n            break;\n        case 10:\n            printf(\"Ten\");\n            break;\n        default:\n            printf(\"Default\");\n    }\n    return 0;\n}",
    "language": "c",
    "options": [
      "Five",
      "Ten",
      "Default",
      "Compilation error"
    ],
    "answer": "Five"
  },
  {
    "question": "What is the output of this code?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int x = 5;\n    do {\n        printf(\"%d \", x);\n        x++;\n    } while (x < 5);\n    return 0;\n}",
    "language": "c",
    "options": [
      "5",
      "No output",
      "Infinite loop",
      "Compilation error"
    ],
    "answer": "5"
  },
  {
    "question": "What will happen when this code is executed?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    for (int i = 1; i <= 3; i++) {\n        for (int j = 1; j <= 3; j++) {\n            if (i == j) continue;\n            printf(\"%d %d\\n\", i, j);\n        }\n    }\n    return 0;\n}",
    "language": "c",
    "options": [
      "Prints all pairs except when i == j",
      "Prints all pairs",
      "Infinite loop",
      "Compilation error"
    ],
    "answer": "Prints all pairs except when i == j"
  },
  {
    "question": "What will this loop output?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int x = 1;\n    while (x < 4) {\n        printf(\"%d \", x);\n        x++;\n    }\n    return 0;\n}",
    "language": "c",
    "options": [
      "1 2 3",
      "1 2 3 4",
      "1 2",
      "1"
    ],
    "answer": "1 2 3"
  },
  {
    "question": "What is the output of this nested loop?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    for (int i = 1; i <= 2; i++) {\n        for (int j = 1; j <= 2; j++) {\n            printf(\"%d %d\\n\", i, j);\n        }\n    }\n    return 0;\n}",
    "language": "c",
    "options": [
      "1 1\n1 2\n2 1\n2 2",
      "1 1\n1 2",
      "2 1\n2 2",
      "No output"
    ],
    "answer": "1 1\n1 2\n2 1\n2 2"
  },
  {
    "question": "What will this program do?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int x = 5;\n    if (x > 0) printf(\"Positive\");\n    if (x < 10) printf(\" Small\");\n    return 0;\n}",
    "language": "c",
    "options": [
      "Positive Small",
      "Positive",
      "Small",
      "No output"
    ],
    "answer": "Positive Small"
  }
];
