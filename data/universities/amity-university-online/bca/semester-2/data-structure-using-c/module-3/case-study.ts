import { CaseStudy } from '../../../../../../types';

export const case_study: CaseStudy[] = [
  {
    "title": "Implementation and Traversal of a Circular Linked List",
    "description": "Circular linked lists (CLLs) are a variation of linked lists where the last node points back to the first node, forming a continuous loop. In this case study, we explore the creation and traversal of a CLL. The CLL is useful in applications like round-robin scheduling, where cyclic iteration is required.\n\nWe start by defining a simple `struct node` in C, which has an integer data field and a pointer to the next node. For demonstration, we'll create a CLL with three nodes containing data: 10, 20, and 30.\n\nThe traversal of a CLL differs from a singly linked list because we need to stop traversal when we reach the head again (not NULL). We must ensure that the last node's next pointer correctly points to the head node to maintain the circular structure.\n\nThe creation of the CLL involves dynamically allocating memory for each node, assigning data, linking them sequentially, and finally linking the last node back to the head. Traversal requires a do-while loop to visit each node at least once (since head is revisited at the end).\n\nThis case study demonstrates key concepts of CLLs: dynamic memory allocation, pointer manipulation, and traversal logic for cyclic structures.",
    "codeBlock": "#include<stdio.h>\n#include<stdlib.h>\nstruct node {\n  int data;\n  struct node *next;\n};\nvoid traverse(struct node *head) {\n  struct node *ptr = head;\n  if(head != NULL) {\n    do {\n      printf(\"%d \", ptr->data);\n      ptr = ptr->next;\n    } while(ptr != head);\n  }\n}\nint main() {\n  struct node *head, *second, *third;\n  head = (struct node*) malloc(sizeof(struct node));\n  second = (struct node*) malloc(sizeof(struct node));\n  third = (struct node*) malloc(sizeof(struct node));\n  head->data = 10; head->next = second;\n  second->data = 20; second->next = third;\n  third->data = 30; third->next = head;\n  traverse(head);\n  return 0;\n}",
    "language": "C",
    "mcq": [
      {
        "question": "Which pointer of the last node in a circular linked list points back to the head node?",
        "codeBlock": "",
        "language": "",
        "options": [
          "next",
          "prev",
          "data",
          "head"
        ],
        "answer": "next"
      },
      {
        "question": "What is the output of the given code snippet?",
        "codeBlock": "#include<stdio.h>\n#include<stdlib.h>\nstruct node {\n  int data;\n  struct node *next;\n};\nint main() {\n  struct node *head = (struct node*) malloc(sizeof(struct node));\n  struct node *second = (struct node*) malloc(sizeof(struct node));\n  struct node *third = (struct node*) malloc(sizeof(struct node));\n  head->data = 1; head->next = second;\n  second->data = 2; second->next = third;\n  third->data = 3; third->next = head;\n  struct node *ptr = head;\n  do {\n    printf(\"%d \", ptr->data);\n    ptr = ptr->next;\n  } while(ptr != head);\n  return 0;\n}",
        "language": "C",
        "options": [
          "1 2 3",
          "1 2 3 1",
          "1 3 2",
          "1 2 3 2"
        ],
        "answer": "1 2 3"
      },
      {
        "question": "Which loop structure is suitable for traversing a circular linked list to ensure each node is visited at least once?",
        "codeBlock": "",
        "language": "",
        "options": [
          "do-while",
          "for",
          "while",
          "switch"
        ],
        "answer": "do-while"
      },
      {
        "question": "What happens if you do not connect the last node's next pointer to the head in a circular linked list?",
        "codeBlock": "",
        "language": "",
        "options": [
          "The list is no longer circular",
          "The last node points to itself",
          "It creates an infinite loop",
          "The program crashes"
        ],
        "answer": "The list is no longer circular"
      }
    ],
    "briefs": [
      {
        "question": "Explain the benefits and potential pitfalls of using circular linked lists, highlighting scenarios where they are most useful.",
        "answer": "Circular linked lists (CLLs) are a powerful extension of singly linked lists, offering unique benefits in scenarios requiring continuous iteration. A key benefit of CLLs is their **cyclic nature**: since the last node points back to the head, traversals can seamlessly loop back to the start, making them ideal for applications like **round-robin scheduling** in operating systems or multi-player games where each participant gets a turn in cycles.\n\nCLLs also eliminate the need to reset traversal pointers manually because the loop structure naturally cycles. This simplifies certain algorithms, such as implementing queues or buffer management in hardware simulations where elements rotate repeatedly.\n\nAnother advantage is **memory reuse**: by continuously rotating pointers, CLLs can reduce the need for additional memory to track loop boundaries.\n\nHowever, CLLs also pose challenges. One pitfall is the risk of **infinite loops** during traversal if the stopping condition isn’t carefully managed. Since the end is no longer signified by `NULL`, programmers must use a pointer equality check (like returning to the head) to avoid unintended infinite cycles.\n\nAdditionally, **insertion and deletion** become more complex compared to singly linked lists because maintaining the circular connection is essential. For instance, inserting a new node at the end requires not only adjusting the last node’s next pointer but also ensuring the new node’s next points to head. Similarly, deleting nodes requires careful pointer updates to maintain circular integrity.\n\nLastly, **debugging** CLLs can be more difficult than linear lists because cyclic pointers make visualizing node connections more challenging.\n\nOverall, CLLs are invaluable in cyclic or repetitive processes but require careful implementation to avoid infinite loops and maintain correct pointer structures. Their ability to naturally model cyclic phenomena makes them a versatile choice for specific applications where continuous, repeated traversal is desired.",
        "codeBlock": "",
        "language": ""
      },
      {
        "question": "Provide a detailed explanation of how the do-while loop ensures traversal in a circular linked list and why it is preferred over a while loop in this context.",
        "answer": "In the context of **circular linked lists (CLLs)**, traversal logic must ensure that **every node is visited at least once**, including the head node. This is critical because, unlike a linear singly linked list, the last node in a CLL does not point to `NULL` but loops back to the head. The `do-while` loop structure is particularly well-suited for this.\n\nThe key advantage of the `do-while` loop is that the **body of the loop executes at least once**, regardless of the loop’s condition. In a typical traversal, we start at the head node and need to process it before moving to subsequent nodes. The condition for ending the loop is usually `ptr != head`, meaning we stop when we return to the head after having traversed the entire list.\n\nHere’s a typical `do-while` traversal in C:\n```c\nvoid traverse(struct node *head) {\n  struct node *ptr = head;\n  if(head != NULL) {\n    do {\n      printf(\"%d \", ptr->data);\n      ptr = ptr->next;\n    } while(ptr != head);\n  }\n}\n```\n\nIn contrast, a `while` loop checks its condition before executing the body. If the head pointer is `NULL`, the loop body never executes, potentially skipping the first node in the traversal. This is particularly problematic in CLLs, where we must process the head node even if it’s the only node.\n\nThus, the `do-while` loop ensures that **the head node is always processed** first, and subsequent nodes are handled in a cyclic fashion until traversal returns to the head. This structure mirrors the cyclic nature of the CLL, naturally supporting repeated traversal and guaranteeing no node is missed.\n\nIn summary, the `do-while` loop’s **post-condition evaluation** aligns perfectly with the cyclic structure of a CLL, ensuring complete, accurate traversal and avoiding common pitfalls such as missing the head node or prematurely exiting the loop.",
        "codeBlock": "void traverse(struct node *head) {\n  struct node *ptr = head;\n  if(head != NULL) {\n    do {\n      printf(\"%d \", ptr->data);\n      ptr = ptr->next;\n    } while(ptr != head);\n  }\n}",
        "language": "C"
      }
    ]
  },
  {
    "title": "Polynomial Representation Using Linked Lists",
    "description": "Polynomials can be efficiently represented using linked lists, especially when the polynomial is sparse. In this case study, we explore the use of singly linked lists to represent and manage polynomials dynamically. Each node in the linked list represents a term in the polynomial, containing the coefficient and exponent, along with a pointer to the next term.\n\nFor example, the polynomial 5x^3 + 4x^2 + 2 can be represented as a linked list where each node contains the coefficient and exponent of a term. The last node's next pointer is set to NULL, indicating the end of the polynomial.\n\nThe advantage of this representation lies in its flexibility. Unlike arrays, which require storage for all possible exponents (including those with zero coefficients), linked lists store only the non-zero terms, saving memory and making them ideal for sparse polynomials.\n\nThe creation process involves dynamically allocating nodes and linking them based on the exponent's order (usually in descending order for easier operations like addition). Traversal is similar to standard linked lists, where we start from the head and iterate through all nodes until the end.\n\nLinked list representation also simplifies polynomial operations such as addition, subtraction, and multiplication. For example, adding two polynomials involves merging two linked lists by comparing exponents and summing coefficients of like terms, which is straightforward because nodes can be easily added or removed without shifting elements, as would be necessary in arrays.\n\nThis case study provides insights into dynamic memory allocation, linked list manipulation, and practical applications of data structures for mathematical operations.",
    "codeBlock": "struct node {\n  int coef; // Coefficient\n  int exp;  // Exponent\n  struct node *next;\n};\n\nvoid traverse(struct node *poly) {\n  while(poly != NULL) {\n    printf(\"%dx^%d \", poly->coef, poly->exp);\n    poly = poly->next;\n  }\n}",
    "language": "C",
    "mcq": [
      {
        "question": "What does each node in the linked list representation of a polynomial contain?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Only coefficient",
          "Exponent only",
          "Coefficient and exponent",
          "Data and next of previous node"
        ],
        "answer": "Coefficient and exponent"
      },
      {
        "question": "What is the advantage of using linked lists for polynomial representation over arrays?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Requires more memory",
          "Only stores non-zero terms",
          "Difficult to add new terms",
          "Needs fixed size allocation"
        ],
        "answer": "Only stores non-zero terms"
      },
      {
        "question": "What is the last node's next pointer set to in a polynomial linked list?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Exponent",
          "Head",
          "NULL",
          "Previous node"
        ],
        "answer": "NULL"
      },
      {
        "question": "What operation is made easier by using linked lists for polynomial representation?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Storing only zero coefficients",
          "Polynomial addition",
          "Sorting arrays",
          "Converting to arrays"
        ],
        "answer": "Polynomial addition"
      }
    ],
    "briefs": [
      {
        "question": "Explain in detail how polynomial addition is performed using linked lists and why it is more efficient than array-based approaches.",
        "answer": "Polynomial addition using linked lists involves merging two linked lists that represent the input polynomials. Each node contains the coefficient and exponent of a term, and the linked lists are typically sorted by descending exponents for easier comparison.\n\nThe process begins by initializing pointers for both polynomials and a new linked list to store the result. We traverse both input lists simultaneously. At each step:\n\n- If the exponents of the current nodes match, we add their coefficients and create a new node in the result list.\n- If one exponent is larger, we add that term to the result list and move the pointer for that polynomial forward.\n- We continue this process until both lists are exhausted.\n\nThis approach is significantly more efficient than using arrays because linked lists can be dynamically modified. There’s no need to allocate space for every possible exponent, which is especially useful for sparse polynomials where many coefficients are zero. In arrays, we would still need to allocate memory for each exponent position, leading to memory wastage.\n\nLinked lists also simplify the addition of new terms, as nodes can be inserted anywhere in the list without shifting other elements, unlike arrays that require shifting to accommodate new elements.\n\nIn summary, linked lists allow polynomial addition to be performed dynamically and efficiently, with minimal memory overhead and simplified pointer manipulation compared to the rigid structure of arrays.",
        "codeBlock": "",
        "language": ""
      },
      {
        "question": "Discuss how linked list representation of polynomials enhances flexibility in polynomial operations like addition, subtraction, and multiplication.",
        "answer": "Linked lists offer significant flexibility in performing polynomial operations compared to arrays. In polynomial addition and subtraction, linked lists enable efficient merging of terms. Nodes can be easily added or removed without the need to shift other elements, which is common in array-based representations.\n\nFor addition, linked lists allow traversal of two polynomials simultaneously, merging like terms by adding coefficients or simply appending terms when exponents differ. This dynamic handling of terms is far more memory efficient for sparse polynomials.\n\nSubtraction follows a similar pattern, where coefficients are subtracted directly when exponents match, again leveraging the dynamic nature of linked lists to handle differences efficiently.\n\nIn polynomial multiplication, each term of one polynomial is multiplied by each term of the other, and the results are accumulated in a new linked list. This can involve adding new terms or updating existing ones, which is easier with linked lists since nodes can be directly manipulated without reorganizing other elements.\n\nOverall, linked lists support these operations seamlessly by providing dynamic memory allocation, eliminating the need for fixed-size memory blocks, and avoiding unnecessary shifting of data. This flexibility ensures efficient computation even with polynomials having large exponents or many zero coefficients.",
        "codeBlock": "",
        "language": ""
      }
    ]
  },
  {
    "title": "Stack Implementation Using Linked Lists",
    "description": "Stacks are an essential data structure that follows the Last In, First Out (LIFO) principle. When implemented using linked lists, they offer dynamic sizing and flexibility over array-based stacks.\n\nIn this case study, we examine how a stack can be efficiently implemented using a singly linked list in the C programming language. Each node in the stack contains data and a pointer to the next node. The top of the stack points to the most recently added node.\n\nThe key stack operations are:\n- **Push**: This operation adds a new node to the top of the stack. It involves allocating memory for a new node, setting its data field, linking it to the current top, and updating the top pointer to point to this new node.\n- **Pop**: This operation removes the top element from the stack. It updates the top pointer to the next node and frees the memory of the removed node.\n\nUsing linked lists for stack implementation provides several advantages:\n1. **No fixed size**: The stack can grow or shrink as needed, with memory allocated dynamically.\n2. **Efficient memory use**: There is no need to pre-allocate memory, reducing waste.\n3. **No overflow (except memory limits)**: Unlike array-based stacks with size constraints, linked list-based stacks only face memory limitations.\n\nThe main challenges involve careful memory management and avoiding memory leaks by ensuring that removed nodes are properly deallocated.\n\nIn this case study, we demonstrate stack creation, push and pop operations, and traversal to display the stack's contents. This highlights dynamic memory allocation, pointer manipulation, and practical applications of linked lists for efficient data structure implementation.",
    "codeBlock": "#include<stdio.h>\n#include<stdlib.h>\nstruct node {\n  int data;\n  struct node *next;\n};\nstruct node *top = NULL;\nvoid push(int data) {\n  struct node *newNode = (struct node*) malloc(sizeof(struct node));\n  newNode->data = data;\n  newNode->next = top;\n  top = newNode;\n}\nint pop() {\n  if(top == NULL) return -1;\n  int val = top->data;\n  struct node *temp = top;\n  top = top->next;\n  free(temp);\n  return val;\n}\nvoid display() {\n  struct node *temp = top;\n  while(temp != NULL) {\n    printf(\"%d \", temp->data);\n    temp = temp->next;\n  }\n}",
    "language": "C",
    "mcq": [
      {
        "question": "Which operation adds a new element to the top of the stack?",
        "codeBlock": "",
        "language": "",
        "options": [
          "pop",
          "push",
          "insert",
          "delete"
        ],
        "answer": "push"
      },
      {
        "question": "What does the pop operation do in a linked list-based stack?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Adds a node at the top",
          "Deletes all nodes",
          "Removes the top node",
          "Prints the top node"
        ],
        "answer": "Removes the top node"
      },
      {
        "question": "What is a major advantage of using linked lists to implement stacks?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Fixed size",
          "Dynamic sizing",
          "No need for memory allocation",
          "Better for arrays"
        ],
        "answer": "Dynamic sizing"
      },
      {
        "question": "Which pointer always points to the top of the stack in linked list implementation?",
        "codeBlock": "",
        "language": "",
        "options": [
          "head",
          "tail",
          "top",
          "NULL"
        ],
        "answer": "top"
      }
    ],
    "briefs": [
      {
        "question": "Explain in detail how push and pop operations work in a stack implemented using linked lists, including the steps and potential issues.",
        "answer": "In a stack implemented using linked lists, the **push** and **pop** operations are fundamental for managing data according to the Last In, First Out (LIFO) principle.\n\n**Push Operation**:\n1. **Allocate memory**: Dynamically allocate a new node using `malloc`.\n2. **Set data**: Assign the data field of the new node.\n3. **Link to top**: Set the new node's next pointer to the current top node.\n4. **Update top**: Update the top pointer to point to the new node.\n\n**Potential issues**: If memory allocation fails, push cannot proceed. Additionally, if pointers are mismanaged, it can lead to broken links or memory leaks.\n\n**Pop Operation**:\n1. **Check for underflow**: If the top is NULL, it indicates an empty stack, and the operation returns an error (commonly -1).\n2. **Store data**: Store the data from the top node to return after removal.\n3. **Move top pointer**: Update the top pointer to the next node.\n4. **Free memory**: Deallocate the memory of the removed node to avoid memory leaks.\n\n**Potential issues**: If the pop operation is attempted on an empty stack (underflow), it can lead to errors or unexpected behavior if not properly handled. Always checking for NULL before dereferencing the top pointer is crucial.\n\nOverall, these operations ensure that stacks implemented using linked lists can grow and shrink dynamically. Memory management and pointer handling are key to preventing leaks and maintaining correct stack behavior.",
        "codeBlock": "",
        "language": ""
      },
      {
        "question": "Discuss the benefits of using linked lists to implement stacks compared to arrays and highlight scenarios where linked list-based stacks are preferred.",
        "answer": "Linked list-based stacks offer several advantages over array-based stacks, making them highly suitable for certain scenarios.\n\n**Advantages**:\n1. **Dynamic sizing**: Unlike arrays, which have a fixed size, linked lists can grow or shrink at runtime without requiring a pre-defined capacity. This is especially useful when the maximum number of elements is unknown.\n2. **No overflow**: In arrays, pushing beyond the capacity results in overflow. In linked lists, the only limitation is system memory, offering more flexibility.\n3. **Memory efficiency**: Linked lists only use as much memory as needed for the actual elements, whereas arrays may allocate more space than necessary.\n\n**Scenarios for preference**:\n- **Dynamic environments**: Applications that require stacks with variable sizes, such as parsing algorithms or recursive function calls in compilers, benefit from linked list stacks.\n- **Large, unpredictable data**: When the maximum size of the stack cannot be accurately predicted, linked list-based stacks are ideal to avoid the limitations of arrays.\n- **Frequent push/pop operations**: Linked list stacks excel in scenarios with frequent insertions and deletions, as nodes can be dynamically allocated and deallocated without shifting elements like arrays.\n\nIn summary, linked list-based stacks are more flexible and efficient for dynamic and memory-sensitive applications, though they do involve additional overhead in memory management compared to fixed-size arrays.",
        "codeBlock": "",
        "language": ""
      }
    ]
  },
  {
    "title": "Doubly Linked List: Implementation and Applications",
    "description": "Doubly linked lists (DLLs) are advanced linear data structures where each node has two pointers: one pointing to the next node and another to the previous node. This bi-directional structure offers flexibility over singly linked lists, allowing traversal in both directions and easier node manipulation.\n\nIn this case study, we’ll examine the implementation of a basic doubly linked list in C. We will explore how to create a DLL, insert a new node at the beginning, and traverse the list in both directions.\n\nThe **node structure** includes data, a pointer to the next node, and a pointer to the previous node. Insertion at the beginning involves:\n1. Allocating a new node.\n2. Assigning data and setting the new node’s next to the current head.\n3. Updating the current head’s previous pointer (if the list is not empty) to point to the new node.\n4. Updating the head to point to the new node.\n\nTraversing the list in the forward direction involves moving from head to NULL using the next pointers, while backward traversal starts from the last node and moves backward using the previous pointers.\n\nThis structure’s flexibility makes DLLs ideal for applications requiring frequent insertions and deletions, such as navigation systems (forward and backward browsing) and memory management systems (where blocks can be allocated and deallocated dynamically).\n\nThe following code snippet demonstrates DLL creation, insertion at the beginning, and traversal.",
    "codeBlock": "#include<stdio.h>\n#include<stdlib.h>\nstruct node {\n  int data;\n  struct node *next;\n  struct node *prev;\n};\nvoid insertAtBeginning(struct node **head, int data) {\n  struct node *newNode = (struct node*) malloc(sizeof(struct node));\n  newNode->data = data;\n  newNode->next = *head;\n  newNode->prev = NULL;\n  if(*head != NULL) {\n    (*head)->prev = newNode;\n  }\n  *head = newNode;\n}\nvoid display(struct node *node) {\n  while(node != NULL) {\n    printf(\"%d \", node->data);\n    node = node->next;\n  }\n}",
    "language": "C",
    "mcq": [
      {
        "question": "Which pointer in a doubly linked list node allows traversal backward?",
        "codeBlock": "",
        "language": "",
        "options": [
          "next",
          "prev",
          "head",
          "tail"
        ],
        "answer": "prev",
        "explanation": "The `prev` pointer points to the previous node, enabling backward traversal."
      },
      {
        "question": "What happens to the previous pointer of the first node in a DLL?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Points to itself",
          "Points to NULL",
          "Points to last node",
          "Points to random memory"
        ],
        "answer": "Points to NULL",
        "explanation": "The first node’s previous pointer is always NULL in a properly implemented DLL."
      },
      {
        "question": "Which operation is more efficient in DLLs compared to singly linked lists?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Insertion at the beginning",
          "Insertion after a given node",
          "Deletion of a given node",
          "Traversal forward only"
        ],
        "answer": "Deletion of a given node",
        "explanation": "DLLs can delete a known node efficiently without traversal due to the `prev` pointer."
      },
      {
        "question": "How does the insertion at the beginning of a DLL differ from that in a singly linked list?",
        "codeBlock": "",
        "language": "",
        "options": [
          "DLLs don’t allow insertion at beginning",
          "DLLs update previous pointers as well",
          "DLLs require traversing to the end",
          "DLLs update tail pointer only"
        ],
        "answer": "DLLs update previous pointers as well",
        "explanation": "Insertion at beginning in DLLs also updates the `prev` pointer of the old head."
      }
    ],
    "briefs": [
      {
        "question": "Discuss in detail the advantages of using doubly linked lists in data structure implementations, highlighting scenarios where they are preferred.",
        "answer": "**Doubly linked lists (DLLs)** offer several advantages over singly linked lists (SLLs), making them valuable for many applications requiring dynamic and flexible data storage. DLLs contain two pointers in each node: one pointing to the next node and another to the previous node, enabling **bidirectional traversal**.\n\nOne key advantage is **ease of deletion and insertion** at any position. In SLLs, deletion requires knowing the previous node to adjust its next pointer, which necessitates traversal. In DLLs, each node has a `prev` pointer, eliminating the need for backward traversal and allowing direct deletion or insertion before or after a known node. This makes operations like undo-redo mechanisms or back/forward navigation in browsers faster and more efficient.\n\nAdditionally, **traversal flexibility** is enhanced: one can move forwards and backwards, which is especially useful in scenarios like music playlists or image galleries where users can navigate in both directions.\n\n**Memory management applications** also benefit from DLLs. In dynamic memory allocation systems (like the buddy system), DLLs can efficiently track and merge adjacent free memory blocks in either direction.\n\nHowever, DLLs require **more memory** per node due to the extra pointer, and pointer manipulations become more complex, increasing the risk of memory errors like segmentation faults if not handled carefully.\n\nIn summary, DLLs are preferred when bidirectional navigation, efficient in-place deletions, or dynamic memory operations are needed. Their enhanced flexibility comes at the cost of increased memory usage and slightly more complex implementation compared to SLLs.",
        "codeBlock": "",
        "language": ""
      },
      {
        "question": "Solve the following coding problem: Write a function to reverse a doubly linked list and explain your approach and solution in detail.",
        "answer": "Reversing a **doubly linked list (DLL)** involves reversing the direction of its `next` and `prev` pointers. Here’s a step-by-step approach:\n\n1. Initialize a temporary pointer `temp` to NULL and a current pointer `curr` to the head of the list.\n2. Traverse the list. For each node:\n   - Swap the `next` and `prev` pointers.\n   - Move to the previous node (which is now the next node due to the swap).\n3. After traversal, update the head pointer to the last processed node, which is the new head.\n\n**Detailed Explanation:**\n- We loop through each node, swapping `next` and `prev` pointers.\n- Moving `curr` to `prev` ensures we’re moving forward in the reversed list.\n- The last non-NULL `temp` is assigned as the new head.\n\n**Example C Code:**\n```c\nvoid reverse(struct node **head) {\n  struct node *temp = NULL;\n  struct node *curr = *head;\n  while(curr != NULL) {\n    temp = curr->prev;\n    curr->prev = curr->next;\n    curr->next = temp;\n    curr = curr->prev;\n  }\n  if(temp != NULL) {\n    *head = temp->prev;\n  }\n}\n```\n\n**Why it works:**\n- Swapping pointers reverses the list direction.\n- We ensure each node’s links are correctly updated.\n\nThis method ensures an in-place reversal with **O(n)** time complexity and **O(1)** space complexity.\n\n**Benefits:**\n- No extra memory allocation.\n- Efficient for large lists.\n\nReversing DLLs is a powerful tool in applications needing to change the list direction dynamically, such as implementing backtracking features in navigation systems.",
        "codeBlock": "void reverse(struct node **head) {\n  struct node *temp = NULL;\n  struct node *curr = *head;\n  while(curr != NULL) {\n    temp = curr->prev;\n    curr->prev = curr->next;\n    curr->next = temp;\n    curr = curr->prev;\n  }\n  if(temp != NULL) {\n    *head = temp->prev;\n  }\n}",
        "language": "C",
        "explanation": "This function efficiently reverses a DLL by swapping next and prev pointers in place."
      }
    ]
  }
];
