import { MCQ } from '../../../../../../types';

export const mcq: MCQ[] = [
  {
    "question": "What is the main characteristic of a singly linked list?",
    "options": [
      "Each node stores only data",
      "Nodes point to both next and previous nodes",
      "Each node has a data and a next pointer",
      "Each node has data, next and prev pointers"
    ],
    "answer": "Each node has a data and a next pointer",
    "explanation": "A singly linked list has nodes with data and a pointer to the next node."
  },
  {
    "question": "Which of the following operations is NOT possible in singly linked lists?",
    "options": [
      "Reverse traversal",
      "Insertion",
      "Deletion",
      "Traversal"
    ],
    "answer": "Reverse traversal",
    "explanation": "Singly linked lists cannot be traversed backward because each node only points to the next node."
  },
  {
    "question": "In a singly linked list, what does the 'head' pointer store?",
    "options": [
      "Address of the first node",
      "Data of the first node",
      "Address of the last node",
      "Number of nodes"
    ],
    "answer": "Address of the first node",
    "explanation": "The head pointer points to the first node of the linked list."
  },
  {
    "question": "What happens during 'garbage collection' in linked lists?",
    "options": [
      "Unreachable memory blocks are marked as free",
      "New nodes are created",
      "Memory blocks are merged",
      "Head pointer is updated"
    ],
    "answer": "Unreachable memory blocks are marked as free",
    "explanation": "Garbage collection identifies and reclaims unused memory blocks."
  },
  {
    "question": "In the following code snippet, what does `ptr = (struct node *)malloc(sizeof(struct node));` do?",
    "codeBlock": "struct node *ptr;\nptr = (struct node *)malloc(sizeof(struct node));",
    "language": "C",
    "options": [
      "Inserts a new node at the beginning",
      "Deletes the last node of the list",
      "Allocates memory for the head pointer",
      "Creates a new node and allocates memory for it"
    ],
    "answer": "Creates a new node and allocates memory for it",
    "explanation": "The malloc function dynamically allocates memory for a new node."
  },
  {
    "question": "What is a distinguishing feature of a circular linked list?",
    "options": [
      "Last node is always NULL",
      "First node points to NULL",
      "Each node points to previous and next node",
      "Last node points to first node"
    ],
    "answer": "Last node points to first node",
    "explanation": "In a circular linked list, the last node's next pointer points to the head."
  },
  {
    "question": "Which of the following is an advantage of doubly linked lists over singly linked lists?",
    "options": [
      "No need to store previous pointers",
      "Less memory used",
      "Backward traversal is possible",
      "All nodes point to NULL"
    ],
    "answer": "Backward traversal is possible",
    "explanation": "The previous pointer allows backward traversal in a doubly linked list."
  },
  {
    "question": "Which operation in a stack implemented using a linked list removes the top element?",
    "options": [
      "Push",
      "Peek",
      "Pop",
      "Insert"
    ],
    "answer": "Pop",
    "explanation": "Pop operation removes the top element in a stack."
  },
  {
    "question": "In a linked queue, where does insertion occur?",
    "options": [
      "At the rear",
      "At the front",
      "At both ends",
      "At the middle"
    ],
    "answer": "At the rear",
    "explanation": "Insertion (enqueue) happens at the rear of a linked queue."
  },
  {
    "question": "In a polynomial representation using linked lists, what does each node store?",
    "options": [
      "Variable and next pointer",
      "Coefficient and exponent",
      "Only the variable name",
      "Memory address and data"
    ],
    "answer": "Coefficient and exponent",
    "explanation": "Each node in a polynomial linked list stores a term’s coefficient and exponent."
  },
  {
    "question": "Which of these statements is TRUE about deletion at the beginning in a singly linked list?",
    "options": [
      "Head is updated to second node",
      "Only data of first node is deleted",
      "Head pointer is set to NULL",
      "Last node’s next points to NULL"
    ],
    "answer": "Head is updated to second node",
    "explanation": "When deleting at the beginning, head is updated to the second node."
  },
  {
    "question": "What is the advantage of using a linked list for a stack instead of an array?",
    "options": [
      "Stack overflow occurs",
      "Fixed size",
      "Easier access to middle elements",
      "Better memory allocation"
    ],
    "answer": "Better memory allocation",
    "explanation": "Linked lists allow dynamic resizing and avoid fixed-size issues of arrays."
  },
  {
    "question": "Which field of a node in a doubly linked list points to the previous node?",
    "options": [
      "head",
      "next",
      "prev",
      "data"
    ],
    "answer": "prev",
    "explanation": "The 'prev' field in a doubly linked list points to the previous node."
  },
  {
    "question": "What is a real-world application of a circular linked list?",
    "options": [
      "Finding min/max in arrays",
      "Polynomial addition",
      "Binary tree representation",
      "CPU scheduling"
    ],
    "answer": "CPU scheduling",
    "explanation": "Circular linked lists are used in CPU scheduling to cycle through processes."
  },
  {
    "question": "Which of the following is a disadvantage of doubly linked lists?",
    "options": [
      "Only allows forward traversal",
      "Cannot delete nodes",
      "All nodes are at fixed positions",
      "Requires more memory"
    ],
    "answer": "Requires more memory",
    "explanation": "Storing an extra 'prev' pointer in each node uses more memory."
  },
  {
    "question": "What does the 'mutator' component do in garbage collection?",
    "options": [
      "Allocates and de-allocates objects",
      "Traverses linked lists backward",
      "Compacts memory blocks",
      "Reclaims unreachable memory"
    ],
    "answer": "Allocates and de-allocates objects",
    "explanation": "The mutator executes application code and manages object allocation."
  },
  {
    "question": "Which of these is true for the 'collector' in garbage collection?",
    "options": [
      "Deletes linked list nodes manually",
      "Executes application code",
      "Creates new linked list nodes",
      "Reclaims unreachable memory"
    ],
    "answer": "Reclaims unreachable memory",
    "explanation": "The collector reclaims memory occupied by unreachable objects."
  },
  {
    "question": "What happens if the linked queue is empty during deletion?",
    "options": [
      "List is traversed",
      "Overflow occurs",
      "Underflow condition",
      "Element is deleted anyway"
    ],
    "answer": "Underflow condition",
    "explanation": "Underflow occurs when deletion is attempted on an empty queue."
  },
  {
    "question": "In a circular linked list, how is traversal different from singly linked lists?",
    "options": [
      "Last node points to NULL",
      "Traversal continues until first node is visited again",
      "Traversal stops at last node",
      "Traversal is not possible"
    ],
    "answer": "Traversal continues until first node is visited again",
    "explanation": "Traversal in circular linked lists loops back to the first node."
  },
  {
    "question": "Which of the following is NOT a valid type of insertion in a singly linked list?",
    "options": [
      "Insertion after the last node",
      "Insertion at end",
      "Insertion in the middle",
      "Insertion at beginning"
    ],
    "answer": "Insertion in the middle",
    "explanation": "Singly linked list allows insertion at the beginning, end, and after a specific node but no explicit 'in the middle' insertion."
  },
  {
    "question": "How is a doubly linked list different from a singly linked list?",
    "options": [
      "It uses arrays instead of pointers",
      "Each node has only a next pointer",
      "It cannot be traversed backward",
      "Each node has a next and a previous pointer"
    ],
    "answer": "Each node has a next and a previous pointer",
    "explanation": "Doubly linked lists have both next and previous pointers for each node."
  },
  {
    "question": "What does the 'head' pointer point to in a circular linked list?",
    "options": [
      "Middle node",
      "Last node",
      "NULL",
      "First node"
    ],
    "answer": "First node",
    "explanation": "In a circular linked list, head points to the first node, which is also connected to the last node."
  },
  {
    "question": "What is the purpose of the 'prev' pointer in a doubly linked list?",
    "options": [
      "To point to the next node",
      "To store the address of the previous node",
      "To maintain the head pointer",
      "To store data"
    ],
    "answer": "To store the address of the previous node",
    "explanation": "The 'prev' pointer stores the address of the previous node."
  },
  {
    "question": "Which function in a stack implemented with linked lists retrieves the top element without removing it?",
    "options": [
      "peek()",
      "push()",
      "insert()",
      "pop()"
    ],
    "answer": "peek()",
    "explanation": "The peek() function returns the top element without removing it."
  },
  {
    "question": "In a linked queue, what condition indicates an empty queue?",
    "options": [
      "Both front and rear point to the same node",
      "front == rear",
      "rear == NULL",
      "front == NULL"
    ],
    "answer": "front == NULL",
    "explanation": "When front is NULL, it means the queue is empty."
  },
  {
    "question": "What is the first step in garbage collection?",
    "options": [
      "Free all nodes",
      "Tag all used memory blocks",
      "Insert new nodes",
      "Delete the head pointer"
    ],
    "answer": "Tag all used memory blocks",
    "explanation": "The first step is to tag the used (reachable) memory blocks."
  },
  {
    "question": "How is polynomial addition easier in linked lists?",
    "options": [
      "No need to maintain exponent order",
      "Linked lists use arrays internally",
      "Each term is stored in a node, simplifying operations",
      "Polynomials can be stored as a single array"
    ],
    "answer": "Each term is stored in a node, simplifying operations",
    "explanation": "Nodes store coefficient and exponent separately, making polynomial addition easier."
  },
  {
    "question": "What condition must be met for deletion at the end in a singly linked list?",
    "options": [
      "Only head pointer exists",
      "List is empty",
      "There are exactly two nodes",
      "List has at least one node"
    ],
    "answer": "List has at least one node",
    "explanation": "Deletion at the end requires traversing to the second last node if list has at least one node."
  },
  {
    "question": "In polynomial representation, how do we store terms in a linked list?",
    "options": [
      "Using separate nodes for coefficients and exponents",
      "Using an array for exponents only",
      "Using a single field",
      "Using one node for all terms"
    ],
    "answer": "Using separate nodes for coefficients and exponents",
    "explanation": "Each term (coefficient and exponent) is stored in a single node."
  },
  {
    "question": "Which of these describes 'compaction' in garbage collection?",
    "options": [
      "Deletes only the head node",
      "Deletes all nodes",
      "Moves reachable memory blocks together",
      "Collects all used memory blocks"
    ],
    "answer": "Moves reachable memory blocks together",
    "explanation": "Compaction reorganizes memory to remove gaps."
  },
  {
    "question": "What happens when you insert at the end of a doubly linked list?",
    "options": [
      "prev pointer of new node is set to NULL",
      "No changes in next pointers",
      "next of new node points to head",
      "next of last node is set to new node and prev of new node points to last node"
    ],
    "answer": "next of last node is set to new node and prev of new node points to last node",
    "explanation": "Inserting at the end involves updating next and prev pointers."
  },
  {
    "question": "What kind of pointer is needed in a circular linked list to represent the end of the list?",
    "options": [
      "NULL pointer",
      "Pointer to the head node",
      "Pointer to middle node",
      "Pointer to last node only"
    ],
    "answer": "Pointer to the head node",
    "explanation": "The last node's next pointer points to the head node."
  },
  {
    "question": "How does a linked stack avoid overflow issues faced by arrays?",
    "options": [
      "By using arrays as backup",
      "By dynamic memory allocation",
      "By limiting the number of nodes",
      "By restricting to a single element"
    ],
    "answer": "By dynamic memory allocation",
    "explanation": "Linked stacks use dynamic memory allocation to grow as needed."
  },
  {
    "question": "Which operation is used to add a node at the beginning of a linked list?",
    "options": [
      "reverse()",
      "search()",
      "push()",
      "append()"
    ],
    "answer": "push()",
    "explanation": "The push() operation inserts a new node at the beginning."
  },
  {
    "question": "What happens during traversal in a singly linked list?",
    "options": [
      "Only the head node is visited",
      "Traversal is not possible",
      "Each node is visited only once",
      "Each node is visited twice"
    ],
    "answer": "Each node is visited only once",
    "explanation": "Traversal means visiting each node once."
  },
  {
    "question": "What is the condition for 'underflow' in a stack implemented by a linked list?",
    "options": [
      "Top pointer is not updated",
      "New element is pushed before pop()",
      "Memory overflow occurs",
      "Top pointer is NULL"
    ],
    "answer": "Top pointer is NULL",
    "explanation": "Underflow occurs when there are no elements left (top pointer is NULL)."
  },
  {
    "question": "How do you identify an empty linked queue?",
    "options": [
      "Only rear is NULL",
      "Both front and rear are NULL",
      "Both front and rear are not NULL",
      "Only front is NULL"
    ],
    "answer": "Both front and rear are NULL",
    "explanation": "An empty linked queue has both front and rear as NULL."
  },
  {
    "question": "In circular linked lists, how do you recognize completion of traversal?",
    "options": [
      "When only first and last nodes are left",
      "When all nodes are deleted",
      "When next pointer is NULL",
      "When head pointer is visited again"
    ],
    "answer": "When head pointer is visited again",
    "explanation": "Traversal completes when the head node is visited again."
  },
  {
    "question": "What data structure is used in polynomial representation using linked lists?",
    "options": [
      "A linked list storing coefficients and exponents",
      "A doubly linked list with coefficients only",
      "A single array with exponents only",
      "A stack structure for coefficients"
    ],
    "answer": "A linked list storing coefficients and exponents",
    "explanation": "Polynomial terms are represented using linked lists that store both coefficients and exponents."
  },
  {
    "question": "What is the benefit of using a linked list for polynomial representation?",
    "options": [
      "Faster insertion than arrays",
      "Only stores data for zero-exponent terms",
      "Uses arrays internally for faster access",
      "Easier manipulation of terms like addition and subtraction"
    ],
    "answer": "Easier manipulation of terms like addition and subtraction",
    "explanation": "Linked lists allow dynamic management of polynomial terms, making operations like addition easier."
  },
  {
    "question": "Which of the following is true about deletion at the end of a doubly linked list?",
    "options": [
      "It sets next of second last node to NULL",
      "It updates only the prev pointer",
      "It can delete only the head node",
      "It does not change any pointer"
    ],
    "answer": "It sets next of second last node to NULL",
    "explanation": "After deleting the last node, next of second last node is set to NULL."
  },
  {
    "question": "In a circular linked list, which node's next pointer points to head?",
    "options": [
      "Last node",
      "Second node",
      "Middle node",
      "First node"
    ],
    "answer": "Last node",
    "explanation": "In circular linked lists, the last node's next pointer points to head."
  },
  {
    "question": "What is the primary advantage of using linked lists for implementing queues?",
    "options": [
      "Dynamic resizing without overflow",
      "No need for pointers",
      "Queue size is fixed at creation",
      "All nodes must be created at start"
    ],
    "answer": "Dynamic resizing without overflow",
    "explanation": "Linked lists enable queues to grow dynamically without overflow issues."
  },
  {
    "question": "Which field in a linked list node stores the address of the next node?",
    "options": [
      "prev",
      "data",
      "link",
      "next"
    ],
    "answer": "next",
    "explanation": "The 'next' field stores the address of the next node."
  },
  {
    "question": "What type of linked list allows traversal in both directions?",
    "options": [
      "Doubly linked list",
      "Circular singly linked list",
      "Singly linked list",
      "Linear queue"
    ],
    "answer": "Doubly linked list",
    "explanation": "Doubly linked lists have both next and prev pointers."
  },
  {
    "question": "What happens to the head pointer during deletion at the beginning in singly linked lists?",
    "options": [
      "Points to NULL",
      "Points to last node",
      "Points to the next node",
      "Is deleted"
    ],
    "answer": "Points to the next node",
    "explanation": "The head pointer is updated to the second node."
  },
  {
    "question": "Which operation is used to add a new node at the end of a linked list?",
    "options": [
      "Insertion at beginning",
      "Insertion at end",
      "Deletion at end",
      "Insertion after specified node"
    ],
    "answer": "Insertion at end",
    "explanation": "Insertion at the end involves traversing to the last node and linking the new node."
  },
  {
    "question": "In garbage collection, what is the second step after marking reachable memory?",
    "options": [
      "Reclaiming untagged memory",
      "Tagging",
      "Updating pointers",
      "Adding more memory"
    ],
    "answer": "Reclaiming untagged memory",
    "explanation": "Garbage collector reclaims memory blocks not marked as used."
  },
  {
    "question": "What does a stack use to keep track of the top element?",
    "options": [
      "head pointer",
      "top pointer",
      "tail pointer",
      "rear pointer"
    ],
    "answer": "top pointer",
    "explanation": "The top pointer always points to the top element of the stack."
  },
  {
    "question": "Which structure uses FIFO (First In First Out) for its operations?",
    "options": [
      "Stack",
      "Tree",
      "Queue",
      "Polynomial linked list"
    ],
    "answer": "Queue",
    "explanation": "Queues work on FIFO principle."
  },
  {
    "question": "Which of the following does NOT support backward traversal?",
    "options": [
      "Singly linked list",
      "Circular linked list",
      "Doubly linked list",
      "Circular doubly linked list"
    ],
    "answer": "Singly linked list",
    "explanation": "Singly linked lists can be traversed only in one direction."
  },
  {
    "question": "What does the 'link' field in a linked list node represent?",
    "options": [
      "Data stored in the node",
      "Address of the next node",
      "NULL always",
      "Address of the previous node"
    ],
    "answer": "Address of the next node",
    "explanation": "The 'link' or 'next' field stores address of the next node."
  },
  {
    "question": "What happens to memory when a node is deleted from a linked list?",
    "options": [
      "Memory is moved to the stack",
      "Memory must be manually freed",
      "Memory is left as it is",
      "Memory is automatically de-allocated"
    ],
    "answer": "Memory must be manually freed",
    "explanation": "In C, freed memory must be explicitly deallocated."
  },
  {
    "question": "In circular queues implemented using linked lists, where does deletion occur?",
    "options": [
      "At the rear",
      "In middle always",
      "Anywhere in list",
      "At the front"
    ],
    "answer": "At the front",
    "explanation": "Deletion in queues occurs at the front."
  },
  {
    "question": "What is the time complexity for inserting at the beginning of a singly linked list?",
    "options": [
      "O(n)",
      "O(n^2)",
      "O(log n)",
      "O(1)"
    ],
    "answer": "O(1)",
    "explanation": "Insertion at the beginning involves updating one pointer (constant time)."
  },
  {
    "question": "What does the 'data' field in a linked list node contain?",
    "options": [
      "Next pointer always",
      "Actual data of the node",
      "Memory address of node",
      "Only integer data"
    ],
    "answer": "Actual data of the node",
    "explanation": "The 'data' field stores the actual value or data."
  },
  {
    "question": "Which structure uses LIFO (Last In First Out) principle?",
    "options": [
      "Stack",
      "Doubly linked list",
      "Linked queue",
      "Queue"
    ],
    "answer": "Stack",
    "explanation": "Stack follows LIFO principle."
  },
  {
    "question": "What does a NULL pointer signify in a singly linked list?",
    "options": [
      "Beginning of the list",
      "End of the list",
      "Middle of the list",
      "No specific location in the list"
    ],
    "answer": "End of the list"
  },
  {
    "question": "Which operation in a singly linked list requires traversal to the second last element?",
    "options": [
      "Deletion at the beginning",
      "Deletion at the end",
      "Insertion at the beginning",
      "Insertion at the end"
    ],
    "answer": "Deletion at the end"
  },
  {
    "question": "Which of the following is an advantage of using a doubly linked list over a singly linked list?",
    "options": [
      "Doubly linked lists require less memory space",
      "Doubly linked lists have faster insertion and deletion operations",
      "Doubly linked lists do not require maintaining previous pointers",
      "Doubly linked lists allow traversal in both forward and backward directions"
    ],
    "answer": "Doubly linked lists allow traversal in both forward and backward directions"
  },
  {
    "question": "What is a characteristic of linked queues?",
    "options": [
      "They use a single pointer called 'rear' to manage insertion operations",
      "Deletion operations in linked queues occur at the head of the list",
      "Linked queues do not support dynamic resizing of the queue",
      "The front pointer of a linked queue always points to the last element of the queue"
    ],
    "answer": "Deletion operations in linked queues occur at the head of the list"
  },
  {
    "question": "Which operation characterises a stack implemented using a linked list?",
    "options": [
      "Deletion at the end",
      "Insertion at the middle",
      "Insertion and deletion at any position",
      "Insertion and deletion at the head"
    ],
    "answer": "Insertion and deletion at the head"
  },
  {
    "question": "What will be the output of the following code snippet when the linked list has 3 nodes with data 10, 20, 30?",
    "codeBlock": "#include<stdio.h>\n#include<stdlib.h>\nstruct node {\n  int data;\n  struct node *next;\n};\nvoid traverse(struct node *head) {\n  while(head != NULL) {\n    printf(\"%d \", head->data);\n    head = head->next;\n  }\n}\nint main() {\n  struct node n1, n2, n3;\n  n1.data = 10; n1.next = &n2;\n  n2.data = 20; n2.next = &n3;\n  n3.data = 30; n3.next = NULL;\n  traverse(&n1);\n  return 0;\n}",
    "language": "C",
    "options": [
      "10 30 20",
      "30 20 10",
      "10 20 30",
      "10"
    ],
    "answer": "10 20 30",
    "explanation": "The traverse function prints the linked list from the head, so the output is the sequence of data fields: 10 20 30."
  },
  {
    "question": "What will happen if 'head' is NULL in the given code?",
    "codeBlock": "#include<stdio.h>\n#include<stdlib.h>\nstruct node {\n  int data;\n  struct node *next;\n};\nvoid traverse(struct node *head) {\n  if(head == NULL) printf(\"Empty list\");\n  else {\n    while(head != NULL) {\n      printf(\"%d \", head->data);\n      head = head->next;\n    }\n  }\n}",
    "language": "C",
    "options": [
      "Program crashes",
      "It prints 0",
      "It prints 'Empty list'",
      "It enters infinite loop"
    ],
    "answer": "It prints 'Empty list'",
    "explanation": "The if condition checks if head is NULL and prints the message."
  },
  {
    "question": "What does this snippet do?",
    "codeBlock": "struct node *ptr;\nptr = (struct node *) malloc(sizeof(struct node));",
    "language": "C",
    "options": [
      "It creates a new node",
      "It deletes a node",
      "It reverses a linked list",
      "It sorts the list"
    ],
    "answer": "It creates a new node",
    "explanation": "malloc allocates memory for a new node and returns its address."
  },
  {
    "question": "What will be the output after inserting 100 at the beginning of an empty linked list?",
    "codeBlock": "#include<stdio.h>\n#include<stdlib.h>\nstruct node {\n  int data;\n  struct node *next;\n};\nvoid begininsert(struct node **head, int item) {\n  struct node *ptr = (struct node*) malloc(sizeof(struct node));\n  ptr->data = item;\n  ptr->next = *head;\n  *head = ptr;\n}\nint main() {\n  struct node *head = NULL;\n  begininsert(&head, 100);\n  printf(\"%d\", head->data);\n  return 0;\n}",
    "language": "C",
    "options": [
      "100",
      "Nothing",
      "Segmentation fault",
      "0"
    ],
    "answer": "100",
    "explanation": "The head is updated to the new node with data 100."
  },
  {
    "question": "What is the output of this stack implementation?",
    "codeBlock": "#include<stdio.h>\nint stack[3], top = -1;\nvoid push(int data) {\n  if(top < 2) {\n    top++;\n    stack[top] = data;\n  }\n}\nint pop() {\n  if(top != -1) {\n    int temp = stack[top];\n    top--;\n    return temp;\n  }\n  return -1;\n}\nint main() {\n  push(1); push(2); push(3);\n  printf(\"%d\", pop());\n  return 0;\n}",
    "language": "C",
    "options": [
      "1",
      "3",
      "2",
      "-1"
    ],
    "answer": "3",
    "explanation": "The last pushed element 3 is popped due to LIFO."
  },
  {
    "question": "What does this snippet achieve in a doubly linked list?",
    "codeBlock": "struct node *temp = head;\nwhile(temp->next != NULL) temp = temp->next;\ntemp->next = newNode;\nnewNode->prev = temp;",
    "language": "C",
    "options": [
      "Insert at end",
      "Insert at beginning",
      "Delete last node",
      "Reverse list"
    ],
    "answer": "Insert at end",
    "explanation": "The last node's next is updated to newNode; prev of newNode is set to last node."
  },
  {
    "question": "What does the following traversal function do?",
    "codeBlock": "void traverse(struct node *head) {\n  struct node *ptr = head;\n  while(ptr != NULL) {\n    printf(\"%d \", ptr->data);\n    ptr = ptr->next;\n  }\n}",
    "language": "C",
    "options": [
      "Reverses linked list",
      "Swaps adjacent nodes",
      "Prints data of each node",
      "Deletes all nodes"
    ],
    "answer": "Prints data of each node",
    "explanation": "The while loop prints data of each node from head to last."
  },
  {
    "question": "What happens if 'ptr->next' is assigned 'head' in a circular linked list?",
    "codeBlock": "struct node *ptr;\nptr->next = head;",
    "language": "C",
    "options": [
      "It deletes head",
      "It forms a cycle",
      "It sorts the list",
      "It stops traversal"
    ],
    "answer": "It forms a cycle",
    "explanation": "Assigning ptr->next = head in circular linked lists creates the circular connection."
  },
  {
    "question": "What is the output of this code snippet for linked stack?",
    "codeBlock": "#include<stdio.h>\n#include<stdlib.h>\nstruct node {\n  int data;\n  struct node *next;\n};\nstruct node *top = NULL;\nvoid push(int data) {\n  struct node *newNode = (struct node*) malloc(sizeof(struct node));\n  newNode->data = data;\n  newNode->next = top;\n  top = newNode;\n}\nint pop() {\n  if(top == NULL) return -1;\n  int val = top->data;\n  struct node *temp = top;\n  top = top->next;\n  free(temp);\n  return val;\n}\nint main() {\n  push(10); push(20);\n  printf(\"%d\", pop());\n  return 0;\n}",
    "language": "C",
    "options": [
      "20",
      "0",
      "10",
      "-1"
    ],
    "answer": "20",
    "explanation": "The last pushed value 20 is popped due to LIFO."
  },
  {
    "question": "What is the expected output of this program that traverses and prints a singly linked list?",
    "codeBlock": "#include<stdio.h>\n#include<stdlib.h>\nstruct node {\n  int data;\n  struct node *next;\n};\nint main() {\n  struct node *head = NULL;\n  printf(\"%s\", head == NULL ? \"Empty list\" : \"Not empty\");\n  return 0;\n}",
    "language": "C",
    "options": [
      "Not empty",
      "Compilation error",
      "Empty list",
      "Segmentation fault"
    ],
    "answer": "Empty list",
    "explanation": "Since head is NULL, it prints 'Empty list'."
  },
  {
    "question": "Identify the error in this insertion function at the beginning of a linked list:",
    "codeBlock": "void insert(struct node **head, int data) {\n  struct node *ptr = malloc(sizeof(struct node));\n  ptr->data = data;\n  ptr->next = *head;\n  *head = ptr;\n}",
    "language": "C",
    "options": [
      "Improper memory allocation",
      "Wrong data type for head pointer",
      "Missing return type for function",
      "No error"
    ],
    "answer": "No error",
    "explanation": "This is a valid function to insert a node at the beginning."
  },
  {
    "question": "What does this snippet accomplish in a circular linked list?",
    "codeBlock": "struct node *ptr = malloc(sizeof(struct node));\nptr->next = head;",
    "language": "C",
    "options": [
      "Inserts a node at end",
      "Makes the list circular",
      "Deletes head",
      "Inserts a node at beginning"
    ],
    "answer": "Makes the list circular",
    "explanation": "It assigns the next of new node to head, forming a circular connection."
  },
  {
    "question": "What will happen if you call pop() on an empty linked list stack?",
    "codeBlock": "int pop() {\n  if(top == NULL) return -1;\n  int val = top->data;\n  struct node *temp = top;\n  top = top->next;\n  free(temp);\n  return val;\n}",
    "language": "C",
    "options": [
      "Segmentation fault",
      "NULL",
      "-1",
      "0"
    ],
    "answer": "-1",
    "explanation": "The function returns -1 when top is NULL."
  },
  {
    "question": "What is the purpose of malloc in linked list operations?",
    "codeBlock": "struct node *newNode = (struct node*) malloc(sizeof(struct node));",
    "language": "C",
    "options": [
      "Reverse the linked list",
      "Assign data to a node",
      "Allocate memory for a new node",
      "Free memory of a node"
    ],
    "answer": "Allocate memory for a new node",
    "explanation": "malloc is used to allocate memory for a new node."
  },
  {
    "question": "What will be the output if we insert 10, 20, 30 at the end and then traverse the list?",
    "codeBlock": "struct node *head = NULL; // Insert functions omitted\n// Traversal function:\nvoid traverse(struct node *head) {\n  while(head != NULL) {\n    printf(\"%d \", head->data);\n    head = head->next;\n  }\n}",
    "language": "C",
    "options": [
      "Empty list",
      "10 30 20",
      "10 20 30",
      "30 20 10"
    ],
    "answer": "10 20 30",
    "explanation": "Insertion at end results in traversal order 10 20 30."
  },
  {
    "question": "What will the following code output for a doubly linked list with data 5,10,15?",
    "codeBlock": "void traverse(struct node *head) {\n  while(head != NULL) {\n    printf(\"%d \", head->data);\n    head = head->next;\n  }\n}",
    "language": "C",
    "options": [
      "5 10 15",
      "10 5 15",
      "5 15 10",
      "15 10 5"
    ],
    "answer": "5 10 15",
    "explanation": "Traversal in order prints 5 10 15."
  },
  {
    "question": "What happens if you forget to free memory after deleting a node?",
    "codeBlock": "// deletion logic\nfree(ptr); // missing in question",
    "language": "C",
    "options": [
      "Memory leak",
      "Output error",
      "Program crash",
      "No effect"
    ],
    "answer": "Memory leak",
    "explanation": "Forgetting to free memory results in a memory leak."
  },
  {
    "question": "Which pointer of the last node in singly linked list should be NULL?",
    "codeBlock": "struct node {\n  int data;\n  struct node *next;\n};",
    "language": "C",
    "options": [
      "next",
      "prev",
      "data",
      "head"
    ],
    "answer": "next",
    "explanation": "The 'next' pointer of last node should be NULL."
  },
  {
    "question": "What will be the output after inserting a node at the end with data=50 in list 10->20->30?",
    "codeBlock": "// code for inserting 50 at end\nstruct node *temp = head;\nwhile(temp->next != NULL) temp = temp->next;\ntemp->next = newNode;",
    "language": "C",
    "options": [
      "10 30 20 50",
      "50 10 20 30",
      "30 20 10 50",
      "10 20 30 50"
    ],
    "answer": "10 20 30 50",
    "explanation": "Inserting at the end results in 10 20 30 50."
  }
];
