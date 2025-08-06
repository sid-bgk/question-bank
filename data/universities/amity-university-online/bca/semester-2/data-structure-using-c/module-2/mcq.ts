import { MCQ } from '../../../../../../types';

export const mcq: MCQ[] = [
  {
    "question": "Which of the following best describes a stack?",
    "codeBlock": "",
    "language": "",
    "options": [
      "First In, First Out",
      "Last In, First Out",
      "First In, Last Out",
      "None of the above"
    ],
    "answer": "Last In, First Out",
    "explanation": "A stack follows the LIFO principle, where the last element added is the first to be removed."
  },
  {
    "question": "What is the primary operation to remove the top element of a stack?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Peek",
      "Pop",
      "Push",
      "Top"
    ],
    "answer": "Pop",
    "explanation": "The 'pop' operation removes the top element from the stack."
  },
  {
    "question": "In infix notation, where is the operator placed?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Before operands",
      "After operands",
      "Between operands",
      "Not used"
    ],
    "answer": "Between operands",
    "explanation": "In infix notation, the operator is placed between two operands, e.g., a + b."
  },
  {
    "question": "In the array-based implementation of a stack, what indicates that the stack is empty?",
    "codeBlock": "",
    "language": "",
    "options": [
      "top == 0",
      "top == -1",
      "top == size",
      "top == size - 1"
    ],
    "answer": "top == -1",
    "explanation": "When the 'top' index is -1, it indicates that the stack is empty."
  },
  {
    "question": "Which of the following notations is also known as Polish Notation?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Infix",
      "Postfix",
      "Prefix",
      "Reverse Infix"
    ],
    "answer": "Prefix",
    "explanation": "Prefix notation places the operator before the operands and is also known as Polish Notation."
  },
  {
    "question": "What is the output of converting the infix expression (A/(B-C)*D+E) to postfix?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A B C - / D * E +",
      "A B - C / D * E +",
      "A B C - D * / E +",
      "A B / C - D * E +"
    ],
    "answer": "A B C - / D * E +",
    "explanation": "The correct postfix conversion is ABC-/D*E+ following the infix to postfix algorithm."
  },
  {
    "question": "Which principle does a queue data structure follow?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Last In, First Out",
      "First In, First Out",
      "First In, Last Out",
      "None of these"
    ],
    "answer": "First In, First Out",
    "explanation": "A queue follows FIFO, where the first element added is the first to be removed."
  },
  {
    "question": "What condition signifies that a circular queue is full?",
    "codeBlock": "",
    "language": "",
    "options": [
      "front == rear",
      "(rear + 1) % size == front",
      "rear == front - 1",
      "rear == size - 1"
    ],
    "answer": "(rear + 1) % size == front",
    "explanation": "In circular queues, this condition means the queue is full because the next rear index loops back to the front."
  },
  {
    "question": "What operation in a queue is used to insert an element at the end?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Pop",
      "Dequeue",
      "Enqueue",
      "Push"
    ],
    "answer": "Enqueue",
    "explanation": "Enqueue operation adds a new element at the rear of the queue."
  },
  {
    "question": "Which of the following is a correct definition of a priority queue?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Elements removed in LIFO order",
      "Elements with highest priority removed first",
      "Elements removed from both ends",
      "None of these"
    ],
    "answer": "Elements with highest priority removed first",
    "explanation": "A priority queue removes elements based on priority rather than order of insertion."
  },
  {
    "question": "What is the main difference between a stack and a queue?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Stack has two open ends, queue has one",
      "Stack allows random access",
      "Stack is LIFO, queue is FIFO",
      "Stack can only insert at rear"
    ],
    "answer": "Stack is LIFO, queue is FIFO",
    "explanation": "Stacks use LIFO principle; queues use FIFO principle."
  },
  {
    "question": "What is the main purpose of recursion in stack usage?",
    "codeBlock": "",
    "language": "",
    "options": [
      "To store local variables only",
      "To store and restore function states",
      "To make code slower",
      "To allocate more memory"
    ],
    "answer": "To store and restore function states",
    "explanation": "The stack stores function states and local variables during recursive calls."
  },
  {
    "question": "Which expression is in postfix form?",
    "codeBlock": "",
    "language": "",
    "options": [
      "* + a b c",
      "a b + c *",
      "+ a b c *",
      "a + b * c"
    ],
    "answer": "a b + c *",
    "explanation": "In postfix form, operators come after operands."
  },
  {
    "question": "In the infix to prefix conversion, what is the first step?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Scan from left to right",
      "Reverse the input string",
      "Pop stack elements",
      "Convert directly to postfix"
    ],
    "answer": "Reverse the input string",
    "explanation": "First, reverse the input string to convert infix to prefix."
  },
  {
    "question": "What happens when you try to 'pop' an element from an empty stack?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Stack Underflow",
      "Stack Overflow",
      "Error in push",
      "Element returned as 0"
    ],
    "answer": "Stack Underflow",
    "explanation": "Removing from an empty stack causes underflow."
  },
  {
    "question": "What is the primary purpose of a Deque data structure?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Insert at rear only",
      "Insert and delete at both ends",
      "Delete from front only",
      "Not used for data storage"
    ],
    "answer": "Insert and delete at both ends",
    "explanation": "Deque supports insertion and deletion from both ends."
  },
  {
    "question": "Which of the following best describes circular queue usage?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Fixed size linear queue",
      "Efficient space utilization by wrapping around",
      "Removes element from the middle",
      "Pushes to both ends"
    ],
    "answer": "Efficient space utilization by wrapping around",
    "explanation": "Circular queue reuses the empty slots created by dequeues."
  },
  {
    "question": "Which of the following operations retrieves the top element without removing it in a stack?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Peek",
      "Push",
      "Pop",
      "Insert"
    ],
    "answer": "Peek",
    "explanation": "Peek retrieves the top element but does not remove it."
  },
  {
    "question": "What is the base case in the Tower of Hanoi recursion?",
    "codeBlock": "",
    "language": "",
    "options": [
      "When there are 2 disks",
      "When there is only 1 disk",
      "When all disks are moved",
      "When peg C is empty"
    ],
    "answer": "When there is only 1 disk",
    "explanation": "The base case occurs when there is only one disk to move."
  },
  {
    "question": "What is the result of the below C code for the Tower of Hanoi when num = 2?",
    "codeBlock": "void towers(int num, char frompeg, char topeg, char auxpeg) {\n if (num == 1) {\n  printf(\"\\n Move disk 1 from peg %c to peg %c\", frompeg, topeg);\n  return;\n }\n towers(num - 1, frompeg, auxpeg, topeg);\n printf(\"\\n Move disk %d from peg %c to peg %c\", num, frompeg, topeg);\n towers(num - 1, auxpeg, topeg, frompeg);\n}",
    "language": "C",
    "options": [
      "Move disk 1 A to B, Move disk 2 A to C, Move disk 1 B to C",
      "Move disk 1 A to C, Move disk 2 A to B, Move disk 1 C to B",
      "Move disk 1 A to C, Move disk 2 A to B, Move disk 1 B to C",
      "Move disk 1 B to C, Move disk 2 A to B, Move disk 1 A to C"
    ],
    "answer": "Move disk 1 A to B, Move disk 2 A to C, Move disk 1 B to C",
    "explanation": "The recursive calls move the disks as per the Tower of Hanoi algorithm."
  },
  {
    "question": "Which of the following describes the operation of the 'peek' function in a queue?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Removes an element from the front",
      "Adds an element at the rear",
      "Retrieves the front element without removing",
      "Removes an element from the rear"
    ],
    "answer": "Retrieves the front element without removing",
    "explanation": "The 'peek' operation allows you to view the front element without deleting it from the queue."
  },
  {
    "question": "Which condition results in a queue overflow during enqueue operation?",
    "codeBlock": "",
    "language": "",
    "options": [
      "front == rear",
      "rear == max_size - 1",
      "front == max_size - 1",
      "front == rear + 1"
    ],
    "answer": "rear == max_size - 1",
    "explanation": "In a linear queue, if the rear reaches max_size - 1, no more elements can be added."
  },
  {
    "question": "What is the purpose of heapifying in a priority queue?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Sort elements in ascending order",
      "Maintain max-heap property",
      "Delete all elements",
      "Convert stack to queue"
    ],
    "answer": "Maintain max-heap property",
    "explanation": "Heapifying maintains the max-heap structure where the highest priority element is at the root."
  },
  {
    "question": "What happens if you try to insert into a full circular queue?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Element is inserted at index 0",
      "Circular queue resets",
      "Queue overflow",
      "Element is placed at rear"
    ],
    "answer": "Queue overflow",
    "explanation": "A full circular queue leads to overflow since there is no space to insert new elements."
  },
  {
    "question": "Which of these expressions is in prefix notation?",
    "codeBlock": "",
    "language": "",
    "options": [
      "a b + c *",
      "+ a b * c",
      "a + b * c",
      "a b c + *"
    ],
    "answer": "+ a b * c",
    "explanation": "Prefix notation (Polish notation) places the operator before operands."
  },
  {
    "question": "In an array-based queue, what is the initial value of 'front' and 'rear' for an empty queue?",
    "codeBlock": "",
    "language": "",
    "options": [
      "0 and 0",
      "-1 and -1",
      "0 and -1",
      "1 and 1"
    ],
    "answer": "-1 and -1",
    "explanation": "An empty queue is indicated by front = -1 and rear = -1."
  },
  {
    "question": "What will happen if you enqueue to a queue where front = 0 and rear = size - 1?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Element added at front",
      "Queue overflow",
      "Queue resets",
      "Element replaces front"
    ],
    "answer": "Queue overflow",
    "explanation": "If rear is at size - 1 and front is 0, the queue is full and overflow occurs."
  },
  {
    "question": "Which operation in a queue removes the front element?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Push",
      "Peek",
      "Dequeue",
      "Enqueue"
    ],
    "answer": "Dequeue",
    "explanation": "Dequeue removes the element at the front of the queue."
  },
  {
    "question": "Which data structure supports both stack and queue operations efficiently?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Priority Queue",
      "Circular Queue",
      "Deque",
      "Array"
    ],
    "answer": "Deque",
    "explanation": "A deque allows insertions and deletions at both ends, supporting both stack and queue operations."
  },
  {
    "question": "What is the maximum number of elements in a circular queue of size 5?",
    "codeBlock": "",
    "language": "",
    "options": [
      "4",
      "5",
      "6",
      "3"
    ],
    "answer": "4",
    "explanation": "One slot is left empty in a circular queue to differentiate full and empty states; maximum is size - 1."
  },
  {
    "question": "What does the 'isEmpty' function of a stack return if the stack is empty?",
    "codeBlock": "",
    "language": "",
    "options": [
      "false",
      "true",
      "1",
      "top element"
    ],
    "answer": "true",
    "explanation": "If the stack is empty, 'isEmpty' returns true."
  },
  {
    "question": "In the infix expression (A+B)*C, what is the postfix conversion?",
    "codeBlock": "",
    "language": "",
    "options": [
      "AB+C*",
      "A+B*C",
      "A+B*C*",
      "ABC*+"
    ],
    "answer": "AB+C*",
    "explanation": "The infix to postfix conversion for (A+B)*C is AB+C*."
  },
  {
    "question": "Which of the following operations is not supported by a standard queue? ",
    "codeBlock": "",
    "language": "",
    "options": [
      "Insert at rear",
      "Delete from front",
      "Insert at front",
      "Peek"
    ],
    "answer": "Insert at front",
    "explanation": "Standard queues do not support inserting at the front."
  },
  {
    "question": "In a priority queue, how is deletion of an element performed?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Randomly",
      "Based on position",
      "Based on highest priority",
      "Based on FIFO"
    ],
    "answer": "Based on highest priority",
    "explanation": "Priority queues remove the highest priority element first."
  },
  {
    "question": "Which principle is used in the recursive implementation of Tower of Hanoi?",
    "codeBlock": "",
    "language": "",
    "options": [
      "FIFO",
      "LIFO",
      "Divide and Conquer",
      "Greedy"
    ],
    "answer": "Divide and Conquer",
    "explanation": "Tower of Hanoi is solved by breaking it down recursively, using Divide and Conquer strategy."
  },
  {
    "question": "Which of the following statements about queues is correct?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Front and rear point to same position when empty",
      "Front is always ahead of rear",
      "Rear always points to index 0",
      "Front is always greater than rear"
    ],
    "answer": "Front and rear point to same position when empty",
    "explanation": "When both front and rear are at -1, the queue is empty."
  },
  {
    "question": "Which data structure efficiently handles CPU job scheduling?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Stack",
      "Queue",
      "Priority Queue",
      "Circular Queue"
    ],
    "answer": "Priority Queue",
    "explanation": "Priority queues schedule jobs by priority rather than order of arrival."
  },
  {
    "question": "What is the role of an auxiliary peg in Tower of Hanoi?",
    "codeBlock": "",
    "language": "",
    "options": [
      "To store disks permanently",
      "As a temporary placeholder",
      "As the final destination",
      "To skip a disk"
    ],
    "answer": "As a temporary placeholder",
    "explanation": "The auxiliary peg temporarily holds disks during recursive transfers."
  },
  {
    "question": "Which operation would you perform first in converting infix to prefix notation?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Scan left to right",
      "Reverse expression",
      "Output directly",
      "Remove parentheses"
    ],
    "answer": "Reverse expression",
    "explanation": "Reversing the expression is the first step in converting infix to prefix."
  },
  {
    "question": "What happens when you try to pop an element from an empty stack in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Program error",
      "Returns top element",
      "Returns -1",
      "Underflow error"
    ],
    "answer": "Underflow error",
    "explanation": "Popping from an empty stack causes an underflow error."
  },
  {
    "question": "What does the peek() function do in a stack?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Inserts an element at top",
      "Deletes top element",
      "Checks if stack is empty",
      "Returns top element without removing it"
    ],
    "answer": "Returns top element without removing it",
    "explanation": "Peek returns the top element of the stack without removing it."
  },
  {
    "question": "What is the time complexity of push() and pop() in a stack implemented by array?",
    "codeBlock": "",
    "language": "",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n^2)"
    ],
    "answer": "O(1)",
    "explanation": "Both push and pop are constant time operations."
  },
  {
    "question": "In the array-based implementation of stack, what is the default value of top?",
    "codeBlock": "",
    "language": "",
    "options": [
      "0",
      "1",
      "-1",
      "size"
    ],
    "answer": "-1",
    "explanation": "Top is initialized to -1 indicating the stack is empty."
  },
  {
    "question": "Which of the following best describes the push operation?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Removes an element",
      "Inserts an element",
      "Checks size",
      "Checks top"
    ],
    "answer": "Inserts an element",
    "explanation": "Push operation inserts an element into the stack."
  },
  {
    "question": "Which of the following is not a feature of a stack?",
    "codeBlock": "",
    "language": "",
    "options": [
      "LIFO",
      "One open end",
      "FIFO",
      "Last element is first to be removed"
    ],
    "answer": "FIFO",
    "explanation": "Stack follows LIFO, not FIFO."
  },
  {
    "question": "Which queue operation returns the element at front without removing it?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Enqueue",
      "Dequeue",
      "Peek",
      "Insert"
    ],
    "answer": "Peek",
    "explanation": "Peek retrieves the front element without removing it."
  },
  {
    "question": "What is the main feature of a priority queue?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Always FIFO",
      "All elements same priority",
      "Elements removed by priority",
      "Supports insert at both ends"
    ],
    "answer": "Elements removed by priority",
    "explanation": "Elements in a priority queue are removed based on their priority."
  },
  {
    "question": "What is the result of the expression (a+b)*(c-d) in postfix notation?",
    "codeBlock": "",
    "language": "",
    "options": [
      "ab+cd-*",
      "abcd+*-",
      "ab+cd*-",
      "abcd+*"
    ],
    "answer": "ab+cd-*",
    "explanation": "In postfix notation: (a+b)*(c-d) converts to ab+cd-*."
  },
  {
    "question": "What happens if the stack is full and a push operation is attempted?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Overflow",
      "Underflow",
      "No operation",
      "Element is added anyway"
    ],
    "answer": "Overflow",
    "explanation": "Pushing into a full stack causes an overflow error."
  },
  {
    "question": "Which type of queue is used to improve space utilization?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Linear queue",
      "Priority queue",
      "Circular queue",
      "Stack"
    ],
    "answer": "Circular queue",
    "explanation": "Circular queue reuses spaces freed by dequeue operations."
  },
  {
    "question": "What does the 'insertFront()' function do in a deque?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Inserts at rear",
      "Deletes from front",
      "Inserts at front",
      "Deletes from rear"
    ],
    "answer": "Inserts at front",
    "explanation": "insertFront() inserts an element at the front of the deque."
  },
  {
    "question": "Which data structure would you choose for expression evaluation using postfix notation?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Queue",
      "Stack",
      "Linked List",
      "Deque"
    ],
    "answer": "Stack",
    "explanation": "Stacks are used for evaluating expressions in postfix notation."
  },
  {
    "question": "Which condition indicates that the circular queue is empty?",
    "codeBlock": "",
    "language": "",
    "options": [
      "front == rear",
      "rear == size - 1",
      "rear == front - 1",
      "rear + 1 == size"
    ],
    "answer": "front == -1 and rear == -1",
    "explanation": "When both front and rear are -1, the circular queue is empty."
  },
  {
    "question": "What is the purpose of a circular queue’s modulo operation?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Check priority",
      "Wrap around the queue",
      "Delete elements",
      "Stack pop operation"
    ],
    "answer": "Wrap around the queue",
    "explanation": "Modulo is used to wrap around to the beginning when rear reaches end."
  },
  {
    "question": "Which of the following does not apply to postfix notation?",
    "codeBlock": "",
    "language": "",
    "options": [
      "No need for parentheses",
      "Operator comes after operands",
      "Operators are before operands",
      "Used in expression evaluation"
    ],
    "answer": "Operators are before operands",
    "explanation": "In postfix notation, operators come after operands, not before."
  },
  {
    "question": "What does the rear pointer in a queue indicate?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Element at front",
      "Element to be inserted",
      "Element to be deleted",
      "Element already deleted"
    ],
    "answer": "Element to be inserted",
    "explanation": "Rear points to the position for the next insertion."
  },
  {
    "question": "How many pointers are maintained in a queue implemented using arrays?",
    "codeBlock": "",
    "language": "",
    "options": [
      "One",
      "Two",
      "Three",
      "None"
    ],
    "answer": "Two",
    "explanation": "Queues require front and rear pointers."
  },
  {
    "question": "Which data structure uses FILO principle?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Queue",
      "Priority queue",
      "Stack",
      "Circular queue"
    ],
    "answer": "Stack",
    "explanation": "Stack uses Last In First Out (FILO) principle."
  },
  {
    "question": "What is the return value of isEmpty() if the queue is not empty?",
    "codeBlock": "",
    "language": "",
    "options": [
      "true",
      "false",
      "1",
      "top"
    ],
    "answer": "false",
    "explanation": "If the queue is not empty, isEmpty() returns false."
  },
  {
    "question": "In Tower of Hanoi, what does the function call towers(num-1, frompeg, auxpeg, topeg) do?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Moves the largest disk",
      "Moves smaller disks to auxiliary peg",
      "Deletes a disk",
      "Skips disks"
    ],
    "answer": "Moves smaller disks to auxiliary peg",
    "explanation": "This call moves the n-1 smaller disks to the auxiliary peg."
  },
  {
    "question": "Which operation removes an element from the top of the stack in a last-in, first-out (LIFO) data structure?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Peek",
      "Push",
      "Pop",
      "Size"
    ],
    "answer": "Pop",
    "explanation": "Pop operation removes the top element in a LIFO stack."
  },
  {
    "question": "Which notation precedes the two operands with the operator, making it also known as Polish Notation?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Infix form",
      "Prefix form",
      "Postfix form",
      "Polish form"
    ],
    "answer": "Prefix form",
    "explanation": "Prefix notation (Polish Notation) places the operator before the operands."
  },
  {
    "question": "What is the primary difference between a queue and a stack?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Queue operates on a FIFO basis, while stack operates on a LIFO basis.",
      "Queue has only one end for both insertion and deletion, while stack has separate ends.",
      "Queue removes the most recently added item, while stack removes the least recently added item.",
      "Queue allows insertion and deletion from both ends, while stack allows insertion and deletion from one end only."
    ],
    "answer": "Queue operates on a FIFO basis, while stack operates on a LIFO basis.",
    "explanation": "Queue follows FIFO, stack follows LIFO."
  },
  {
    "question": "What is a characteristic feature of a priority queue?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Items are removed based on the Last In First Out (LIFO) principle.",
      "Each item has a designated position in the queue.",
      "Items with high priority are removed before those with low priority.",
      "Insertion and deletion happen on different ends of the queue."
    ],
    "answer": "Items with high priority are removed before those with low priority.",
    "explanation": "Priority queues remove items based on their priority, not order of insertion."
  },
  {
    "question": "Which of the following statements about a circular queue is true?",
    "codeBlock": "",
    "language": "",
    "options": [
      "The head pointer always points to the end of the queue.",
      "In a circular queue, the tail pointer indicates the front of the queue.",
      "Data is added to the circular queue by consistently incrementing the head pointer.",
      "Circular increment in a circular queue is achieved using division by the queue size."
    ],
    "answer": "Circular increment in a circular queue is achieved using division by the queue size.",
    "explanation": "The modulo operation allows wrapping around in circular queues."
  },
  {
    "question": "What will be the output of the following stack push and pop operations in C?",
    "codeBlock": "int stack[3], top = -1;\nstack[++top] = 'A';\nstack[++top] = 'B';\nstack[++top] = 'C';\nprintf(\"%c\", stack[top--]);\nprintf(\"%c\", stack[top--]);\nprintf(\"%c\", stack[top--]);",
    "language": "C",
    "options": [
      "CBA",
      "ABC",
      "CAB",
      "BAC"
    ],
    "answer": "CBA",
    "explanation": "The stack follows LIFO, so elements are popped in reverse order of insertion."
  },
  {
    "question": "What will the following code print if the stack is empty initially?",
    "codeBlock": "int stack[3], top = -1;\nif(top == -1) printf(\"Stack is empty\");\nelse printf(\"Stack has elements\");",
    "language": "C",
    "options": [
      "Stack has elements",
      "Error",
      "Stack is empty",
      "top is undefined"
    ],
    "answer": "Stack is empty",
    "explanation": "Since top is -1 initially, the if condition evaluates true and prints 'Stack is empty'."
  },
  {
    "question": "In the following code, what will be printed when n=3 for Tower of Hanoi implementation?",
    "codeBlock": "void towers(int num, char frompeg, char topeg, char auxpeg) {\n if(num == 1) {\n  printf(\"\\n Move disk 1 from peg %c to peg %c\", frompeg, topeg);\n  return;\n }\n towers(num - 1, frompeg, auxpeg, topeg);\n printf(\"\\n Move disk %d from peg %c to peg %c\", num, frompeg, topeg);\n towers(num - 1, auxpeg, topeg, frompeg);\n}",
    "language": "C",
    "options": [
      "7 move instructions",
      "5 move instructions",
      "3 move instructions",
      "None"
    ],
    "answer": "7 move instructions",
    "explanation": "Tower of Hanoi for n=3 requires 2^3 -1 = 7 moves."
  },
  {
    "question": "What will be the output of the following snippet if initially front = rear = -1 and we insert 10 and 20 in a queue of size 3?",
    "codeBlock": "int queue[3], front=-1, rear=-1;\nrear++;\nqueue[rear]=10;\nrear++;\nqueue[rear]=20;\nfront=0;\nprintf(\"%d %d\", queue[front], queue[rear]);",
    "language": "C",
    "options": [
      "10 20",
      "20 10",
      "Error",
      "0 20"
    ],
    "answer": "10 20",
    "explanation": "Elements 10 and 20 are inserted at front=0 and rear=1; printed in insertion order."
  },
  {
    "question": "Identify the error in the following C code for priority queue insertion.",
    "codeBlock": "void insert_by_priority(int data) {\n if (rear >= MAX - 1) {\n  printf(\"\\nQueue overflow\");\n  return;\n }\n if ((front == -1) && (rear == -1)) {\n  front++;\n  rear++;\n  pri_que[rear] = data;\n  return;\n }\n else check(data);\n rear++;\n}",
    "language": "C",
    "options": [
      "Extra increment of rear",
      "Missing front initialization",
      "Priority check missing",
      "Infinite loop"
    ],
    "answer": "Extra increment of rear",
    "explanation": "rear is incremented twice unnecessarily in both the check() function and after it."
  },
  {
    "question": "What will be the output after inserting 5, 10, and 15 into a circular queue of size 3 and then dequeuing one element?",
    "codeBlock": "int queue[3], front=0, rear=2;\nqueue[0]=5; queue[1]=10; queue[2]=15;\nfront = (front + 1) % 3;\nprintf(\"%d\", queue[front]);",
    "language": "C",
    "options": [
      "10",
      "15",
      "5",
      "0"
    ],
    "answer": "10",
    "explanation": "After one dequeue, front points to index 1, containing 10."
  },
  {
    "question": "What will the following C code print?",
    "codeBlock": "int a=3, b=4, c;\nc = a + b * 2;\nprintf(\"%d\", c);",
    "language": "C",
    "options": [
      "10",
      "11",
      "8",
      "12"
    ],
    "answer": "11",
    "explanation": "b * 2 = 8; then a + 8 = 11."
  },
  {
    "question": "What does the following code snippet implement?",
    "codeBlock": "void insertq(int queue[], int item) {\n if ((front == 0 && rear == size-1) || (front == rear+1)) {\n  printf(\"queue is full\");\n  return;\n }\n if (rear == -1) {\n  rear++;\n  front++;\n } else if (rear == size-1 && front>0) {\n  rear=0;\n } else {\n  rear++;\n }\n queue[rear] = item;\n}",
    "language": "C",
    "options": [
      "Simple queue",
      "Priority queue",
      "Circular queue",
      "Deque"
    ],
    "answer": "Circular queue",
    "explanation": "The code uses modulo increment for rear, typical of a circular queue."
  },
  {
    "question": "In the below C snippet, what happens when you pop from an empty stack?",
    "codeBlock": "int stack[3], top=-1;\nif(top==-1) printf(\"Underflow\");\nelse stack[top--];",
    "language": "C",
    "options": [
      "Underflow",
      "Overflow",
      "0 printed",
      "top updated"
    ],
    "answer": "Underflow",
    "explanation": "Since top==-1, the condition prints 'Underflow'."
  },
  {
    "question": "What does the following C code do?",
    "codeBlock": "void display(int queue[]) {\n int i;\n if (front > rear) {\n  for (i = front; i < size; i++) printf(\"%d \", queue[i]);\n  for (i = 0; i <= rear; i++) printf(\"%d \", queue[i]);\n } else {\n  for (i = front; i <= rear; i++) printf(\"%d \", queue[i]);\n }\n}",
    "language": "C",
    "options": [
      "Displays linear queue",
      "Displays circular queue",
      "Deletes elements",
      "Sorts queue"
    ],
    "answer": "Displays circular queue",
    "explanation": "The loop handles wrapping around, typical of circular queues."
  },
  {
    "question": "What will be the output of the following snippet?",
    "codeBlock": "int a=5, b=10;\nprintf(\"%d\", (a > b) ? a : b);",
    "language": "C",
    "options": [
      "5",
      "10",
      "15",
      "0"
    ],
    "answer": "10",
    "explanation": "The conditional operator evaluates to b because b > a."
  },
  {
    "question": "What will the following code output if n=2 for Tower of Hanoi implementation?",
    "codeBlock": "void towers(int num, char frompeg, char topeg, char auxpeg) {\n if(num==1) {\n  printf(\"\\n Move disk 1 from peg %c to peg %c\", frompeg, topeg);\n  return;\n }\n towers(num-1, frompeg, auxpeg, topeg);\n printf(\"\\n Move disk %d from peg %c to peg %c\", num, frompeg, topeg);\n towers(num-1, auxpeg, topeg, frompeg);\n}",
    "language": "C",
    "options": [
      "3 moves",
      "5 moves",
      "4 moves",
      "2 moves"
    ],
    "answer": "3 moves",
    "explanation": "Tower of Hanoi requires 2^n - 1 moves for n disks. Here, 2^2 - 1 = 3."
  },
  {
    "question": "What does the following priority queue code do when inserting a new element?",
    "codeBlock": "void insert_by_priority(int data) {\n if ((front == -1) && (rear == -1)) {\n  front++;\n  rear++;\n  pri_que[rear] = data;\n  return;\n }\n else check(data);\n rear++;\n}",
    "language": "C",
    "options": [
      "Always inserts at front",
      "Inserts based on priority",
      "Does not check overflow",
      "Always inserts at rear"
    ],
    "answer": "Inserts based on priority",
    "explanation": "The code calls check(data) which places the new element based on priority."
  },
  {
    "question": "What will be the output of this snippet after enqueueing 1, 2, 3 and dequeuing twice?",
    "codeBlock": "int queue[3] = {1, 2, 3};\nint front = 0, rear = 2;\nfront++;\nfront++;\nprintf(\"%d\", queue[front]);",
    "language": "C",
    "options": [
      "3",
      "2",
      "1",
      "0"
    ],
    "answer": "3",
    "explanation": "After two dequeues, front points to index 2, which holds 3."
  },
  {
    "question": "What is the output of the following postfix evaluation snippet if a=2, b=3, c=4?",
    "codeBlock": "int result = a + b * c;\nprintf(\"%d\", result);",
    "language": "C",
    "options": [
      "14",
      "20",
      "10",
      "9"
    ],
    "answer": "14",
    "explanation": "b * c = 12, a + 12 = 14."
  },
  {
    "question": "What happens in the following code if rear is equal to size - 1 in a circular queue?",
    "codeBlock": "if (rear == size - 1 && front > 0) {\n rear = 0;\n}",
    "language": "C",
    "options": [
      "Queue is full",
      "rear wraps around to start",
      "front resets to 0",
      "Nothing happens"
    ],
    "answer": "rear wraps around to start",
    "explanation": "rear is set to 0 for circular wrapping."
  },
  {
    "question": "What does the following condition in a queue implementation check for?",
    "codeBlock": "if (front == -1 && rear == -1)",
    "language": "C",
    "options": [
      "Queue is full",
      "Queue is empty",
      "Stack underflow",
      "Stack overflow"
    ],
    "answer": "Queue is empty",
    "explanation": "Both pointers at -1 indicates an empty queue."
  },
  {
    "question": "Which data structure is used by the following snippet to check for operator precedence in infix to postfix conversion?",
    "codeBlock": "while (stack is not empty and precedence(stack[top]) >= precedence(token)) {\n output.push(stack.pop());\n}\nstack.push(token);",
    "language": "C",
    "options": [
      "Queue",
      "Deque",
      "Stack",
      "Linked list"
    ],
    "answer": "Stack",
    "explanation": "Stack is used to store operators and check precedence."
  },
  {
    "question": "What is printed by the following code if the queue is empty?",
    "codeBlock": "void deleteq(int queue[]) {\n if (front == -1) printf(\"Queue is empty \");\n else printf(\"Deleted %d\", queue[front]);\n}",
    "language": "C",
    "options": [
      "Queue is empty",
      "Deleted 0",
      "Error",
      "front = 0"
    ],
    "answer": "Queue is empty",
    "explanation": "front==-1 indicates empty queue, so prints 'Queue is empty'."
  },
  {
    "question": "What does the peek operation in stack implementation do in the following snippet?",
    "codeBlock": "if (top != -1) printf(\"Top element is %d\", stack[top]);",
    "language": "C",
    "options": [
      "Removes top",
      "Inserts new element",
      "Checks size",
      "Returns top element"
    ],
    "answer": "Returns top element",
    "explanation": "peek returns the top element without removing it."
  }
];
