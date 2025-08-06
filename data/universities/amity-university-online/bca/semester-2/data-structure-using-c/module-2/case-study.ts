import { CaseStudy } from '../../../../../../types';

export const case_study: CaseStudy[] = [
  {
    "title": "Case Study on Expression Conversion: From Infix to Postfix and Prefix Notation",
    "description": "In the field of data structures, converting arithmetic expressions from infix to postfix and prefix notation is a classic and crucial operation. This case study focuses on understanding these conversions by implementing algorithms in C and analyzing the process. The expression used for demonstration is `(A+B)*(C-D)`.\n\nWe begin by identifying the operators and operands and applying the rules of precedence. In infix notation, operators are written between operands, which is easy for humans to understand but not efficient for computer evaluation. Converting to postfix or prefix notation removes the need for parentheses and operator precedence management during evaluation.\n\nThe **infix to postfix conversion** uses a stack to temporarily store operators and manage precedence. It scans the expression from left to right, outputs operands directly, and pushes operators onto the stack based on their precedence. At the end, the stack’s contents are popped and added to the output.\n\nThe **infix to prefix conversion** requires reversing the expression and then applying similar stack-based logic as postfix conversion, but accounting for right-to-left scanning.\n\nThis case study explores the detailed step-by-step algorithm, implements it in C, and also discusses edge cases such as handling parentheses and multiple operators with different precedence levels.\n\nLet’s delve into the implementation and analyze key aspects like operator precedence, stack operations, and expression scanning logic.",
    "codeBlock": "char stack[SIZE]; int top = -1;\nvoid push(char c) { stack[++top] = c; }\nchar pop() { return stack[top--]; }\n\n// Conversion logic for infix to postfix and prefix implemented using these stack operations.",
    "language": "C",
    "mcq": [
      {
        "question": "Which data structure is essential in the conversion of infix to postfix notation?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Queue",
          "Stack",
          "Array",
          "Linked List"
        ],
        "answer": "Stack"
      },
      {
        "question": "What is the postfix form of the infix expression (A+B)*(C-D)?",
        "codeBlock": "",
        "language": "",
        "options": [
          "AB+CD-*",
          "AB+CD-",
          "A+B*C-D",
          "AB+*CD-"
        ],
        "answer": "AB+CD-*"
      },
      {
        "question": "What is the first step in converting an infix expression to prefix notation?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Reverse the infix expression",
          "Pop all operators",
          "Push all operands",
          "Scan from left to right"
        ],
        "answer": "Reverse the infix expression"
      },
      {
        "question": "What happens if an operator of lower precedence is scanned in postfix conversion?",
        "codeBlock": "",
        "language": "",
        "options": [
          "It is ignored",
          "It is pushed to output directly",
          "Operators from the stack are popped until a lower precedence is found",
          "It replaces the top of the stack"
        ],
        "answer": "Operators from the stack are popped until a lower precedence is found"
      }
    ],
    "briefs": [
      {
        "question": "Discuss the importance of converting infix expressions to postfix and prefix forms in computer applications. Provide real-world examples and how stacks facilitate this process.",
        "answer": "In computer applications, converting infix expressions to postfix and prefix forms is crucial for simplifying expression evaluation and eliminating the complexities of operator precedence and parentheses management. Infix notation, while human-readable, requires careful handling of operator precedence and associativity during evaluation, which adds computational overhead and potential for errors.\n\nPostfix and prefix notations, also known as Reverse Polish Notation (RPN) and Polish Notation respectively, place operators in positions that inherently reflect their precedence, eliminating the need for parentheses. This makes evaluation straightforward and suitable for computers that process instructions sequentially.\n\nFor example, the expression `(A+B)*(C-D)` in infix form requires parsing to determine that `A+B` should be evaluated first, followed by multiplication with `C-D`. In postfix form, it becomes `AB+CD-*`, directly reflecting the evaluation order without ambiguity. Similarly, prefix form `*+AB-CD` also removes ambiguity.\n\nReal-world applications include:\n- **Compilers and Interpreters**: Converting expressions to postfix or prefix forms for intermediate code generation and efficient expression evaluation.\n- **Calculators**: Many calculators use RPN for quick evaluations, especially in scientific and financial domains.\n- **Expression Parsing**: In natural language processing or mathematical parsing, postfix expressions simplify syntax tree generation and traversal.\n\nStacks are central to this conversion because they provide a Last In, First Out (LIFO) structure for temporarily storing operators and handling precedence. When an operator is scanned, the stack ensures that higher or equal precedence operators are output before it, maintaining correct evaluation order.\n\nBy leveraging stacks in these conversions, computers can evaluate expressions efficiently, avoid syntax errors, and simplify the parsing process, leading to faster and more reliable computations.",
        "codeBlock": "",
        "language": ""
      },
      {
        "question": "Explain in detail how the infix to postfix conversion algorithm works using a stack, with an example of (A+B)*(C-D).",
        "answer": "The **infix to postfix conversion algorithm** uses a stack to handle operators while ensuring that operands are output in the order they appear. Let’s break down the algorithm step by step using the example `(A+B)*(C-D)`.\n\n1️⃣ **Initialization**: Create an empty stack and an empty output string.\n\n2️⃣ **Scan Left to Right**: Iterate through each character:\n- If the character is an operand (like A, B, C, D), append it directly to the output.\n- If it’s an operator (+, -, *, /), compare its precedence with the top of the stack:\n  - While the stack is not empty and the top has higher or equal precedence, pop the stack and add to output.\n  - Push the current operator onto the stack.\n- If it’s a left parenthesis `(`, push it onto the stack.\n- If it’s a right parenthesis `)`, pop and output until a left parenthesis `(` is found.\n\n3️⃣ **End of Expression**: Pop remaining operators from the stack and append to output.\n\n✅ **Example with (A+B)*(C-D)**:\n- Read `(`, push to stack.\n- Read `A`, output `A`.\n- Read `+`, push to stack.\n- Read `B`, output `B`.\n- Read `)`, pop and output `+` (until `(`).\n- Read `*`, push to stack.\n- Read `(`, push to stack.\n- Read `C`, output `C`.\n- Read `-`, push to stack.\n- Read `D`, output `D`.\n- Read `)`, pop and output `-` (until `(`).\n- End of expression, pop and output `*`.\n\n✅ **Final Postfix**: `A B + C D - *`\n\nThis algorithm ensures operators are placed according to their precedence while operands maintain their order. The stack’s LIFO property is essential, as it guarantees the correct order of operators. This process is foundational in expression evaluation, compiler design, and many other applications.",
        "codeBlock": "",
        "language": ""
      }
    ]
  },
  {
    "title": "Case Study on Priority Queues and Their Implementation in C",
    "description": "Priority queues are an advanced form of queues that assign a priority to each element. In this case study, we focus on how priority queues function, their implementation in C, and their real-world applications. Unlike a standard queue that follows First In First Out (FIFO), a priority queue removes elements based on their priority, not their insertion order.\n\nThe priority queue implemented in the document uses an array. The insertion function places elements in the array according to their priority, ensuring the highest priority element is at the front. The deletion function removes the element at the front (the highest priority).\n\nFor example, consider inserting 25, 10, and 5 into the queue. They are inserted in decreasing priority order: 25 at front, followed by 10 and then 5. Deletion always removes the front element.\n\nThis implementation uses a simple linear approach to maintain order. However, real-world applications like CPU scheduling and graph algorithms often use heaps for more efficient performance.\n\nLet’s explore the code and key operations in this case study.",
    "codeBlock": "void insert_by_priority(int data) {\n    if(rear >= MAX - 1) printf(\"Overflow\\n\");\n    else if((front == -1) && (rear == -1)) { front++; rear++; pri_que[rear] = data; }\n    else {\n        int i;\n        for(i = 0; i <= rear; i++) {\n            if(data >= pri_que[i]) {\n                for(int j = rear + 1; j > i; j--) pri_que[j] = pri_que[j - 1];\n                pri_que[i] = data;\n                rear++;\n                return;\n            }\n        }\n        pri_que[++rear] = data;\n    }\n}",
    "language": "C",
    "mcq": [
      {
        "question": "What is the main difference between a standard queue and a priority queue?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Priority queue removes based on FIFO",
          "Priority queue removes based on priority",
          "Priority queue uses LIFO",
          "Priority queue uses circular logic"
        ],
        "answer": "Priority queue removes based on priority"
      },
      {
        "question": "Which of these is true about priority queues implemented in C in the document?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Elements are inserted at rear only",
          "Elements are removed at random",
          "Elements are inserted in priority order",
          "Elements are removed from the middle"
        ],
        "answer": "Elements are inserted in priority order"
      },
      {
        "question": "What happens if an attempt is made to insert in a full priority queue?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Underflow",
          "Overflow",
          "Normal insert",
          "Queue wraps around"
        ],
        "answer": "Overflow"
      },
      {
        "question": "Which operation ensures that the highest priority element is always at the front in a priority queue?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Insertion with priority check",
          "Direct pop",
          "Random access",
          "Queue reset"
        ],
        "answer": "Insertion with priority check"
      }
    ],
    "briefs": [
      {
        "question": "Discuss how the priority queue implementation in the document handles insertion of new elements and ensures they are placed based on priority.",
        "answer": "The priority queue implementation in the document manages insertion by ensuring that newly inserted elements are placed based on their priority, not their order of arrival. This is different from standard queues where elements are always added at the rear.\n\nThe function `insert_by_priority()` is responsible for inserting a new element while maintaining the order of priority. When the function is called, it first checks if the queue is full by comparing `rear` with `MAX - 1`. If the queue is full, an overflow message is printed, and no insertion occurs.\n\nIf the queue is empty (both `front` and `rear` are -1), it initializes `front` and `rear` to 0 and inserts the new element.\n\nFor other cases, it scans through the queue to find the correct position for the new element based on its priority. The function uses a `for` loop to compare the new element’s priority with existing elements. If the new element has a higher or equal priority than an existing element, the queue elements are shifted one position to the right to make space, and the new element is inserted at the correct index.\n\nThis ensures that the element with the highest priority is always at the front, maintaining the priority order for future deletions. After insertion, `rear` is incremented to reflect the addition.\n\nThis linear approach is suitable for small datasets but can become inefficient for larger datasets because of the shifting operation. However, it clearly illustrates the basic principle of priority queues: elements are always stored in an order that allows the highest priority element to be dequeued first. Such an approach forms the basis for more advanced implementations using heaps or balanced trees in large-scale systems.",
        "codeBlock": "",
        "language": ""
      },
      {
        "question": "Explain real-world applications of priority queues and why their ability to prioritize elements is essential in these scenarios.",
        "answer": "Priority queues are vital in various real-world scenarios where tasks or data elements have different levels of importance or urgency. Their key advantage lies in their ability to always retrieve the highest-priority element first, ensuring critical tasks are handled promptly.\n\n✅ **CPU Scheduling**: In operating systems, processes often have different priorities. A priority queue ensures that high-priority processes (e.g., real-time or system-critical tasks) are executed before lower-priority tasks, improving system responsiveness and performance.\n\n✅ **Network Traffic Management**: Routers and switches use priority queues to handle network packets. Urgent or real-time data like voice or video streams are prioritized to reduce latency, while less critical data waits.\n\n✅ **Dijkstra’s Algorithm**: In shortest-path algorithms for graphs, a priority queue is used to always select the next vertex with the smallest distance, optimizing route calculation in navigation systems and logistics.\n\n✅ **Emergency Response**: Systems that handle alerts and emergencies (e.g., hospitals or 911 dispatch) rely on priority queues to address the most critical situations first, potentially saving lives.\n\nIn all these scenarios, the ability of a priority queue to dynamically manage and reorder elements based on their priority is crucial. Unlike simple FIFO queues, priority queues ensure that resources are allocated in the most efficient way possible. This can significantly impact performance, resource utilization, and overall user satisfaction in applications ranging from computer systems to real-time decision-making environments.",
        "codeBlock": "",
        "language": ""
      }
    ]
  },
  {
    "title": "Case Study on Circular Queue Implementation and Its Applications",
    "description": "Circular queues are a type of linear data structure that solves the problem of unused space in simple linear queues. This case study explores the implementation of circular queues in C, their key operations, and the practical problems they solve.\n\nA linear queue allows elements to be added at the rear and removed from the front. However, when elements are dequeued, their spaces are left unused. Circular queues resolve this by treating the queue’s end and front as connected in a circular manner, allowing for efficient utilization of storage space.\n\nIn a circular queue, both `front` and `rear` pointers are incremented using modulo arithmetic, allowing them to wrap around when reaching the end of the array. The condition `(rear + 1) % size == front` indicates that the queue is full, and when `front == -1`, the queue is empty.\n\nThis case study includes the C code for inserting and deleting elements in a circular queue, along with examples to demonstrate how data elements are handled when the rear and front pointers wrap around.",
    "codeBlock": "void insertq(int queue[], int item) {\n    if ((front == 0 && rear == size - 1) || (front == rear + 1)) {\n        printf(\"queue is full\\n\");\n        return;\n    }\n    if (rear == -1) {\n        rear = 0; front = 0;\n    } else if (rear == size - 1 && front > 0) {\n        rear = 0;\n    } else {\n        rear++;\n    }\n    queue[rear] = item;\n}\n\nvoid deleteq(int queue[]) {\n    if (front == -1) printf(\"Queue is empty\\n\");\n    else if (front == rear) {\n        printf(\"Deleted: %d\\n\", queue[front]);\n        front = rear = -1;\n    } else {\n        printf(\"Deleted: %d\\n\", queue[front]);\n        front++;\n    }\n}",
    "language": "C",
    "mcq": [
      {
        "question": "Which of the following describes a circular queue’s wrap-around behavior?",
        "codeBlock": "",
        "language": "",
        "options": [
          "It uses LIFO principle",
          "It wraps using modulo division",
          "It replaces oldest elements",
          "It doubles size automatically"
        ],
        "answer": "It wraps using modulo division"
      },
      {
        "question": "What condition checks for a full circular queue?",
        "codeBlock": "",
        "language": "",
        "options": [
          "front == rear",
          "rear == size - 1",
          "(rear + 1) % size == front",
          "front == size"
        ],
        "answer": "(rear + 1) % size == front"
      },
      {
        "question": "What is the output if a circular queue of size 5 is filled and then 2 elements are dequeued?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Queue is empty",
          "2 elements are removed, queue has 3 left",
          "Queue resets",
          "Queue overflows"
        ],
        "answer": "2 elements are removed, queue has 3 left"
      },
      {
        "question": "What is the advantage of using circular queues over simple linear queues?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Uses less memory",
          "Supports random access",
          "Reuses empty slots after dequeues",
          "Always full"
        ],
        "answer": "Reuses empty slots after dequeues"
      }
    ],
    "briefs": [
      {
        "question": "Discuss how circular queues resolve the issue of wasted space in linear queues. Provide examples and explain how modulo operations are used to implement circular behavior.",
        "answer": "Circular queues are an improvement over simple linear queues in that they resolve the issue of wasted space when elements are removed from the front. In a linear queue, once the `rear` pointer reaches the maximum size of the array, no further insertions can be made even if there are empty slots at the front due to dequeues. This leads to inefficient memory usage.\n\nIn a circular queue, the end of the queue wraps around to the beginning, forming a circle. This wrapping is managed using modulo arithmetic. When the `rear` pointer reaches the end (`size - 1`), it doesn’t stop; instead, it moves to index 0 by using `(rear + 1) % size`. Similarly, the `front` pointer uses modulo arithmetic to loop back to the beginning when needed.\n\nFor example, in a queue of size 5, after inserting 5 elements, the queue is full. If two elements are dequeued from the front, their slots at the start of the array become free. In a circular queue, new elements can be inserted into these slots, preventing wasted space.\n\nThis circular behavior is implemented in C by checking the condition `(rear + 1) % size == front` to detect a full queue and using modulo arithmetic in insertion and deletion to manage the pointers. This ensures that the queue can use all available slots efficiently without needing to move or resize the underlying array.\n\nBy reusing empty slots, circular queues are well-suited for buffering data streams (like in I/O buffers), scheduling tasks (like CPU round-robin scheduling), and any application where continuous, efficient use of limited buffer space is essential. They strike a balance between memory efficiency and operational simplicity, making them a core data structure in many systems.",
        "codeBlock": "",
        "language": ""
      },
      {
        "question": "Explain real-world applications of circular queues and how their efficient space utilization benefits these scenarios.",
        "answer": "Circular queues are used in various real-world scenarios where efficient buffer management and constant memory usage are critical. One prominent example is **CPU scheduling** in operating systems. The round-robin scheduling algorithm uses a circular queue to cycle through processes, ensuring that each process gets a fair share of CPU time while reusing queue slots as processes are completed.\n\nAnother application is in **I/O buffers**, such as keyboard buffers or network data buffers. When data packets arrive in a network router or when keyboard inputs are read, circular queues ensure that input data is stored efficiently in limited memory and that old data is removed as new data arrives.\n\n**Multimedia streaming** also benefits from circular queues. Audio or video streams are buffered in circular queues to prevent interruptions and reduce latency. As data is played back, new data can be added seamlessly to the buffer.\n\nIn these scenarios, the main advantage of circular queues is their ability to continuously reuse memory slots freed by dequeues. This efficient memory reuse is particularly important in real-time systems where low latency and high throughput are essential.\n\nBy using circular queues, these systems avoid the overhead of shifting data (as in linear queues) or dynamic memory allocation, which can introduce delays. Instead, they maintain consistent performance by simply incrementing pointers and wrapping around with modulo arithmetic.\n\nOverall, circular queues combine space efficiency and simplicity, making them ideal for many critical systems that rely on reliable, continuous data flow.",
        "codeBlock": "",
        "language": ""
      }
    ]
  },
  {
    "title": "Case Study: Implementing and Evaluating Deque (Double-Ended Queue) in C",
    "description": "Deques (Double-Ended Queues) are a versatile linear data structure that allow insertion and deletion at both ends. Unlike standard queues and stacks, deques support operations at the front and rear, making them adaptable for various applications. This case study explores deque implementation in C, including its core functions, real-world applications, and challenges faced.\n\nIn a static array-based implementation, two pointers—`front` and `rear`—are used to manage the ends of the deque. Functions include `insertFront()`, `insertLast()`, `deleteFront()`, and `deleteLast()`, each handling respective end operations. Edge cases include managing overflow when the deque is full and underflow when the deque is empty.\n\nDeques can function as both stacks and queues, making them valuable in scenarios like task scheduling, undo operations in text editors, and palindrome checking. This case study also covers the wrap-around behavior of deques when implemented in a circular manner, similar to circular queues, to maximize space efficiency.\n\nWe provide code snippets for these operations and practical demonstrations of how the pointers adjust dynamically during operations. Understanding deques equips programmers with a powerful tool for designing flexible, efficient data management solutions.",
    "codeBlock": "void insertFront(int deque[], int item) {\n    if ((front == 0 && rear == size - 1) || (front == rear + 1)) {\n        printf(\"Deque is full\\n\");\n        return;\n    }\n    if (front == -1) {\n        front = rear = 0;\n    } else if (front == 0) {\n        front = size - 1;\n    } else {\n        front--;\n    }\n    deque[front] = item;\n}",
    "language": "C",
    "mcq": [
      {
        "question": "What is the main advantage of a deque over a standard queue?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Supports only rear insertions",
          "Supports insertion and deletion at both ends",
          "Uses more memory",
          "Only supports FIFO"
        ],
        "answer": "Supports insertion and deletion at both ends",
        "explanation": "Deques allow operations at both front and rear ends."
      },
      {
        "question": "In the deque implementation, what condition indicates that the deque is full?",
        "codeBlock": "",
        "language": "",
        "options": [
          "front == rear",
          "(front == 0 && rear == size - 1) || (front == rear + 1)",
          "front == rear + 2",
          "rear == size"
        ],
        "answer": "(front == 0 && rear == size - 1) || (front == rear + 1)",
        "explanation": "This condition checks for the wrap-around full state of the deque."
      },
      {
        "question": "What operation is used to insert an element at the rear end of a deque?",
        "codeBlock": "",
        "language": "",
        "options": [
          "insertFront()",
          "deleteFront()",
          "insertLast()",
          "deleteLast()"
        ],
        "answer": "insertLast()",
        "explanation": "insertLast() adds an element at the rear."
      },
      {
        "question": "What happens when you try to delete from an empty deque?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Overflow",
          "Underflow",
          "Wrap-around",
          "Element inserted instead"
        ],
        "answer": "Underflow",
        "explanation": "Deleting from an empty deque triggers underflow."
      }
    ],
    "briefs": [
      {
        "question": "Explain in detail how the insertFront() and insertLast() functions work in a circular deque implementation. What challenges arise when managing wrap-around behavior?",
        "answer": "The `insertFront()` and `insertLast()` functions allow inserting elements at both ends of a deque. In a circular implementation, these operations must carefully manage the `front` and `rear` pointers to handle wrap-around behavior and prevent overflow.\n\n✅ **insertFront()**:\n- If the deque is empty (`front == -1`), both `front` and `rear` are set to 0.\n- If `front == 0`, it wraps around to `size - 1` to use the available space.\n- Otherwise, `front` is simply decremented.\n- The new element is placed at `deque[front]`.\n\n✅ **insertLast()**:\n- If the deque is empty, both pointers are set to 0.\n- If `rear == size - 1`, it wraps around to 0.\n- Otherwise, `rear` is incremented.\n- The new element is placed at `deque[rear]`.\n\nThe main challenge arises in managing wrap-around conditions correctly:\n- When `rear` reaches the end (`size - 1`) and there’s free space at the start (`front > 0`), `rear` should be reset to 0.\n- Similarly, if `front` is at 0 and elements have been dequeued from the rear, `front` should be reset to `size - 1`.\n\nOverflow conditions are checked by verifying if `(front == 0 && rear == size - 1)` or `(front == rear + 1)`, indicating the deque is full. Underflow conditions occur when `front == -1`, meaning the deque is empty.\n\nThis circular handling ensures that no space is wasted in the deque and all array slots are utilized efficiently. It requires careful pointer updates to maintain the correct state of the deque.",
        "codeBlock": "",
        "language": ""
      },
      {
        "question": "Problem-Solving Brief: Implement a C function to delete an element from the rear of the deque and print the updated front and rear positions. Explain how it works and how wrap-around is handled.",
        "answer": "To solve this problem, we will write a function `deleteLast()` that removes an element from the rear of a circular deque and prints the updated `front` and `rear` values.\n\nHere’s how the function works:\n✅ First, check if the deque is empty (`front == -1`). If so, print 'Underflow'.\n✅ If there’s only one element (`front == rear`), after deletion, reset both pointers to -1.\n✅ If `rear == 0`, wrap it around to `size - 1`.\n✅ Otherwise, decrement `rear` normally.\n\n### C Implementation:\n```c\nvoid deleteLast(int deque[], int size) {\n    if (front == -1) {\n        printf(\"Underflow\\n\");\n        return;\n    }\n    printf(\"Deleted: %d\\n\", deque[rear]);\n    if (front == rear) {\n        front = rear = -1;\n    } else if (rear == 0) {\n        rear = size - 1;\n    } else {\n        rear--;\n    }\n    printf(\"Updated front: %d, rear: %d\\n\", front, rear);\n}\n```\n\nThis function efficiently handles the wrap-around by resetting `rear` to the last index when it reaches the start. If only one element exists, both pointers are reset to denote an empty deque. This ensures that after each deletion, the deque pointers are updated correctly for subsequent operations.\n\nBy using this approach, the circular deque can handle dynamic insertions and deletions at both ends while maximizing space utilization. It’s a practical demonstration of how circular data structures maintain performance and reliability in real-world systems.",
        "codeBlock": "void deleteLast(int deque[], int size) {\n    if (front == -1) {\n        printf(\"Underflow\\n\");\n        return;\n    }\n    printf(\"Deleted: %d\\n\", deque[rear]);\n    if (front == rear) {\n        front = rear = -1;\n    } else if (rear == 0) {\n        rear = size - 1;\n    } else {\n        rear--;\n    }\n    printf(\"Updated front: %d, rear: %d\\n\", front, rear);\n}",
        "language": "C"
      }
    ]
  }
];
