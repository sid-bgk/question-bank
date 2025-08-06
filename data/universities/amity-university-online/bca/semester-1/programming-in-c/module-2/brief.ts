import { Brief } from '../../../../../../types';

export const brief: Brief[] = [
  {
    "question": "Why is there a need for an algorithm before we start coding the C program?",
    "answer": "An algorithm ensures a step-by-step solution to a problem, providing clarity, minimizing errors, and improving efficiency. It acts as a blueprint, enabling structured and error-free coding.",
    "codeBlock": "",
    "language": ""
  },
  {
    "question": "Write an algorithm to find the square root of an integer number.",
    "answer": "1. **Start**  \n2. Input the number `n`.  \n3. If `n < 0`, print \"Invalid input\" and stop.  \n4. Initialize `guess = n / 2`.  \n5. While `|guess^2 - n| > epsilon`:  \n   - Update `guess = (guess + n / guess) / 2`.  \n6. Print `guess`.  \n7. **Stop**",
    "codeBlock": "",
    "language": ""
  },
  {
    "question": "Write a program in C to find the cube of any number using a function.",
    "answer": "",
    "codeBlock": "#include <stdio.h>\n\n// Function to calculate the cube of a number\nint cube(int num) {\n    return num * num * num;\n}\n\nint main() {\n    int number;\n    printf(\"Enter a number to find its cube: \");\n    scanf(\"%d\", &number);\n    printf(\"The cube of %d is: %d\\n\", number, cube(number));\n    return 0;\n}",
    "language": "c"
  },
  {
    "question": "Discuss, with examples, the different tokens in C programming.",
    "answer": "Tokens are the smallest elements of a C program:  \n- **Keywords**: Reserved words (e.g., `int`, `return`).  \n- **Identifiers**: Variable names (e.g., `sum`).  \n- **Constants**: Fixed values (e.g., `10`, `3.14`).  \n- **Operators**: Symbols for operations (e.g., `+`, `-`).  \n- **Special Characters**: `{`, `}`, `;`.  \n\n**Example**:  \n```c\nint sum = 0; // `int` (keyword), `sum` (identifier), `0` (constant).\n```",
    "codeBlock": "",
    "language": ""
  }
];
