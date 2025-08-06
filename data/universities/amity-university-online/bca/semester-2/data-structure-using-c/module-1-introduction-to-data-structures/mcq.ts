import { MCQ } from '../../../../../../types';

export const mcq: MCQ[] = [
  {
    "question": "Which of the following is a characteristic of a good algorithm?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It can have infinite steps",
      "It is ambiguous",
      "It is feasible within available resources",
      "It requires no input or output"
    ],
    "answer": "It is feasible within available resources",
    "explanation": "A good algorithm must be feasible and achievable within the available resources."
  },
  {
    "question": "In a linear data structure, how are elements arranged?",
    "codeBlock": "",
    "language": "",
    "options": [
      "In a hierarchical manner",
      "In random order",
      "In a single-level linear fashion",
      "In a network-like structure"
    ],
    "answer": "In a single-level linear fashion",
    "explanation": "Linear data structures arrange elements sequentially, forming a single level of connections."
  },
  {
    "question": "What is the time complexity of binary search in a sorted array?",
    "codeBlock": "",
    "language": "",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n^2)"
    ],
    "answer": "O(log n)",
    "explanation": "Binary search cuts the search interval in half, resulting in a logarithmic time complexity."
  },
  {
    "question": "Which of the following is a linear data structure?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Tree",
      "Graph",
      "Array",
      "Hash table"
    ],
    "answer": "Array",
    "explanation": "Arrays are linear data structures where elements are stored in a sequence."
  },
  {
    "question": "Which statement is true about static data structures?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Their size can change at runtime",
      "Memory allocation is fixed at compile-time",
      "They support dynamic growth",
      "They store data randomly"
    ],
    "answer": "Memory allocation is fixed at compile-time",
    "explanation": "Static data structures have a fixed size determined at compile-time."
  },
  {
    "question": "What is the primary difference between an array and a linked list?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Linked lists use contiguous memory",
      "Arrays use pointers for linking elements",
      "Linked lists can grow and shrink dynamically",
      "Arrays are always stored on the stack"
    ],
    "answer": "Linked lists can grow and shrink dynamically",
    "explanation": "Unlike arrays, linked lists can change size at runtime by manipulating pointers."
  },
  {
    "question": "Which of the following C functions is used to copy one string to another?",
    "codeBlock": "",
    "language": "",
    "options": [
      "strcat",
      "strcmp",
      "strcpy",
      "strlen"
    ],
    "answer": "strcpy",
    "explanation": "The strcpy function copies a source string to a destination string, including the null terminator."
  },
  {
    "question": "Which of the following best describes a sparse matrix?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A matrix filled with zeros only",
      "A matrix with mostly zero elements",
      "A matrix that cannot be represented by arrays",
      "A matrix that does not have rows and columns"
    ],
    "answer": "A matrix with mostly zero elements",
    "explanation": "A sparse matrix contains predominantly zero values, so memory-efficient storage methods are used."
  },
  {
    "question": "Which C function is used to find the length of a string?",
    "codeBlock": "",
    "language": "",
    "options": [
      "strcmp",
      "strlen",
      "strcpy",
      "strcat"
    ],
    "answer": "strlen",
    "explanation": "The strlen function returns the number of characters in a string, excluding the null terminator."
  },
  {
    "question": "Which of the following operations can be performed efficiently using a linked list?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Accessing elements by index",
      "Inserting elements in the middle",
      "Binary search",
      "Sorting in constant time"
    ],
    "answer": "Inserting elements in the middle",
    "explanation": "Linked lists allow dynamic insertion or deletion at any point without large-scale shifting of elements."
  },
  {
    "question": "In C, which of the following denotes a 2D array?",
    "codeBlock": "",
    "language": "",
    "options": [
      "int arr[][]",
      "int arr[]",
      "int arr[3][4]",
      "int arr[3]"
    ],
    "answer": "int arr[3][4]",
    "explanation": "A 2D array in C is defined with two indices (e.g., rows and columns)."
  },
  {
    "question": "What is the primary advantage of using divide and conquer in algorithm design?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It increases time complexity",
      "It requires more memory",
      "It allows parallel processing of sub-problems",
      "It eliminates the need for recursion"
    ],
    "answer": "It allows parallel processing of sub-problems",
    "explanation": "Divide and conquer divides the problem into smaller sub-problems that can be solved independently."
  },
  {
    "question": "Which of the following statements is true about arrays in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Arrays can contain elements of different data types",
      "Arrays are always dynamic",
      "Arrays use contiguous memory locations",
      "Arrays cannot be passed to functions"
    ],
    "answer": "Arrays use contiguous memory locations",
    "explanation": "Arrays store elements of the same type in sequential memory locations."
  },
  {
    "question": "What does the following C code snippet do?",
    "codeBlock": "int arr[5] = {1, 2, 3, 4, 5};\nint i;\nfor(i=0; i<5; i++)\n    printf(\"%d \", arr[i]);",
    "language": "c",
    "options": [
      "It prints the elements in reverse",
      "It prints the indices only",
      "It prints the elements of the array",
      "It prints nothing"
    ],
    "answer": "It prints the elements of the array",
    "explanation": "This loop iterates over the array indices and prints the stored elements."
  },
  {
    "question": "In the context of data structures, what does FIFO stand for?",
    "codeBlock": "",
    "language": "",
    "options": [
      "First In First Out",
      "First In Final Output",
      "First In Few Out",
      "First In First Overflow"
    ],
    "answer": "First In First Out",
    "explanation": "FIFO means the element added first is the one removed first, as in queues."
  },
  {
    "question": "Which of the following is true about multidimensional arrays in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "They can have only 2 dimensions",
      "They can have any number of dimensions",
      "They are only used for strings",
      "They cannot store numeric data"
    ],
    "answer": "They can have any number of dimensions",
    "explanation": "C supports arrays of multiple dimensions as needed for complex data storage."
  },
  {
    "question": "Which pointer declaration is used to create a pointer to a structure?",
    "codeBlock": "",
    "language": "",
    "options": [
      "struct struct_name ptr;",
      "struct struct_name *ptr;",
      "struct *struct_name ptr;",
      "struct ptr struct_name;"
    ],
    "answer": "struct struct_name *ptr;",
    "explanation": "This declares a pointer to a structure in C."
  },
  {
    "question": "What is the main drawback of array insertion at the middle position?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Requires changing the array type",
      "Requires shifting many elements",
      "Requires deleting half the array",
      "Cannot be done"
    ],
    "answer": "Requires shifting many elements",
    "explanation": "Inserting in the middle of an array involves shifting subsequent elements to make space."
  },
  {
    "question": "Which of the following best defines a string in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A sequence of integers",
      "A sequence of characters terminated by '\\0'",
      "A data type for numbers",
      "A pointer to a float"
    ],
    "answer": "A sequence of characters terminated by '\\0'",
    "explanation": "Strings in C are character arrays terminated by a null character (\\0)."
  },
  {
    "question": "In C, which of the following is used to read an entire line of text?",
    "codeBlock": "",
    "language": "",
    "options": [
      "scanf()",
      "puts()",
      "fgets()",
      "strcmp()"
    ],
    "answer": "fgets()",
    "explanation": "The fgets() function reads a line from standard input until a newline or EOF is encountered."
  },
  {
    "question": "Which of the following data structures is best for implementing recursion?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Queue",
      "Array",
      "Stack",
      "Graph"
    ],
    "answer": "Stack",
    "explanation": "Stacks are used in recursion to keep track of function calls and their local variables."
  },
  {
    "question": "Which of the following best describes an algorithm’s space complexity?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Memory usage during execution",
      "Number of comparisons",
      "Order of growth of input size",
      "Efficiency of output"
    ],
    "answer": "Memory usage during execution",
    "explanation": "Space complexity quantifies the total memory used by an algorithm."
  },
  {
    "question": "Which of the following C functions appends one string to another?",
    "codeBlock": "",
    "language": "",
    "options": [
      "strcat",
      "strcpy",
      "strlen",
      "scanf"
    ],
    "answer": "strcat",
    "explanation": "strcat appends a source string to the end of a destination string."
  },
  {
    "question": "What is the purpose of the function strcmp() in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It copies one string to another",
      "It appends two strings",
      "It compares two strings",
      "It returns the length of a string"
    ],
    "answer": "It compares two strings",
    "explanation": "strcmp compares two strings and returns 0 if they are equal, a positive or negative value otherwise."
  },
  {
    "question": "Which of the following statements is true about arrays as function parameters in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "They can only be passed as a pointer",
      "They can be passed using array notation",
      "They cannot be passed at all",
      "They can be passed only by value"
    ],
    "answer": "They can be passed using array notation",
    "explanation": "Arrays are passed by reference in C using array notation, which essentially passes a pointer."
  },
  {
    "question": "Which of the following data structures is considered non-linear?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Queue",
      "Stack",
      "Tree",
      "Array"
    ],
    "answer": "Tree",
    "explanation": "Trees have hierarchical relationships, making them non-linear data structures."
  },
  {
    "question": "What happens if you try to assign a string literal to an array in C after it’s declared?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It will compile and work",
      "It will assign each character separately",
      "It will result in an error",
      "It will change the array type"
    ],
    "answer": "It will result in an error",
    "explanation": "Arrays do not support assignment after declaration. Strings must be copied using strcpy."
  },
  {
    "question": "Which of the following statements best defines divide and conquer?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Combining multiple algorithms into one",
      "Dividing a problem into sub-problems, solving them and combining",
      "Repeating the same steps endlessly",
      "Executing everything at once"
    ],
    "answer": "Dividing a problem into sub-problems, solving them and combining",
    "explanation": "Divide and conquer breaks a problem into smaller sub-problems and merges their solutions."
  },
  {
    "question": "Which of the following is an example of a two-dimensional array in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "int arr[5];",
      "int arr[3][4];",
      "int arr;",
      "int arr[10][10][10];"
    ],
    "answer": "int arr[3][4];",
    "explanation": "A 2D array has two indices: rows and columns."
  },
  {
    "question": "What is the output of the following code snippet?",
    "codeBlock": "char str[10] = \"Hello\";\nprintf(\"%s\", str);",
    "language": "c",
    "options": [
      "Hello",
      "H",
      "Error",
      "Hello\\0"
    ],
    "answer": "Hello",
    "explanation": "The %s format specifier prints the entire string until the null terminator."
  },
  {
    "question": "Which of the following best describes a queue?",
    "codeBlock": "",
    "language": "",
    "options": [
      "First In Last Out",
      "First In First Out",
      "Last In First Out",
      "Random order"
    ],
    "answer": "First In First Out",
    "explanation": "Queues use FIFO: the first element added is the first removed."
  },
  {
    "question": "What is the maximum number of elements in an array with upper bound 20 and lower bound 5?",
    "codeBlock": "",
    "language": "",
    "options": [
      "16",
      "15",
      "20",
      "25"
    ],
    "answer": "16",
    "explanation": "Length = UB - LB + 1 = 20 - 5 + 1 = 16."
  },
  {
    "question": "Which of the following C functions reads a string from the user until whitespace is encountered?",
    "codeBlock": "",
    "language": "",
    "options": [
      "printf()",
      "fgets()",
      "scanf()",
      "strcat()"
    ],
    "answer": "scanf()",
    "explanation": "scanf reads a string up to whitespace (space, tab, newline)."
  },
  {
    "question": "Which of the following characteristics is not required for an algorithm?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Unambiguity",
      "Finiteness",
      "Independence",
      "Infinite loops"
    ],
    "answer": "Infinite loops",
    "explanation": "Algorithms must terminate after a finite number of steps."
  },
  {
    "question": "In a sparse matrix, what do we typically store to save memory?",
    "codeBlock": "",
    "language": "",
    "options": [
      "All zeroes and non-zeroes",
      "Only non-zero elements",
      "Only zero elements",
      "Row and column indices only"
    ],
    "answer": "Only non-zero elements",
    "explanation": "Storing only non-zero elements conserves memory for sparse matrices."
  },
  {
    "question": "Which of the following is the correct syntax to declare a one-dimensional array in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "int array[5];",
      "int[5] array;",
      "array int[5];",
      "int array();"
    ],
    "answer": "int array[5];",
    "explanation": "The syntax to declare an array is `data_type array_name[size];`."
  },
  {
    "question": "What is the advantage of using arrays in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Different data types can be stored",
      "Elements are stored in random order",
      "Memory is allocated dynamically",
      "Elements can be accessed using indices"
    ],
    "answer": "Elements can be accessed using indices",
    "explanation": "Arrays store elements contiguously, enabling access by index."
  },
  {
    "question": "What does the following C code snippet output?",
    "codeBlock": "int arr[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}};\nprintf(\"%d\", arr[1][2]);",
    "language": "c",
    "options": [
      "6",
      "2",
      "5",
      "4"
    ],
    "answer": "6",
    "explanation": "arr[1][2] is the element in the second row, third column: 6."
  },
  {
    "question": "Which of the following is not a characteristic of linear data structures?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Contiguous memory allocation in arrays",
      "Sequential arrangement of elements",
      "Hierarchical relationship of data",
      "One level of data relationship"
    ],
    "answer": "Hierarchical relationship of data",
    "explanation": "Linear data structures do not have hierarchical relationships."
  },
  {
    "question": "Which of the following is a benefit of divide and conquer?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Eliminates recursion",
      "Uses a single large problem only",
      "Parallel processing is possible",
      "Slows down computation"
    ],
    "answer": "Parallel processing is possible",
    "explanation": "Sub-problems can be solved independently, allowing parallelism."
  },
  {
    "question": "Which of the following is used to declare a pointer to a structure?",
    "codeBlock": "",
    "language": "",
    "options": [
      "struct pointer;",
      "struct name *ptr;",
      "int *struct;",
      "struct name ptr;"
    ],
    "answer": "struct name *ptr;",
    "explanation": "In C, struct pointers are declared using the syntax: struct struct_name *pointer_name;"
  },
  {
    "question": "What is the default termination character of a string in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "newline",
      "backslash",
      "space",
      "null character (\\0)"
    ],
    "answer": "null character (\\0)",
    "explanation": "Strings in C end with a null character (\\0)."
  },
  {
    "question": "What happens if you exceed the declared size of an array in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Compiler error",
      "Silent data corruption",
      "Program crash or unexpected behavior",
      "All of the above"
    ],
    "answer": "All of the above",
    "explanation": "Exceeding array bounds may cause compiler errors, data corruption, or crashes."
  },
  {
    "question": "What does the following program output?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int a[3] = {1,2,3};\n    printf(\"%d\", a[0]);\n    return 0;\n}",
    "language": "c",
    "options": [
      "1",
      "2",
      "3",
      "Garbage value"
    ],
    "answer": "1",
    "explanation": "a[0] is 1, the first element of the array."
  },
  {
    "question": "Which of the following functions is used to read a line of text from the user in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "puts()",
      "fgets()",
      "scanf()",
      "printf()"
    ],
    "answer": "fgets()",
    "explanation": "fgets() reads a line of text including spaces until a newline is encountered."
  },
  {
    "question": "Which of the following describes a linked list?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Uses contiguous memory",
      "Fixed size data structure",
      "Each element points to the next",
      "Cannot store heterogeneous data"
    ],
    "answer": "Each element points to the next",
    "explanation": "Each linked list element (node) contains a pointer to the next element."
  },
  {
    "question": "What is the function of the strcat() function in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Compares two strings",
      "Calculates string length",
      "Appends one string to another",
      "Copies one string to another"
    ],
    "answer": "Appends one string to another",
    "explanation": "strcat appends a source string to the end of a destination string."
  },
  {
    "question": "What does the following code output?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int arr[4][3] = {{1,2,3},{4,5,6},{7,8,9},{10,11,12}};\n    printf(\"%d\", arr[3][1]);\n    return 0;\n}",
    "language": "c",
    "options": [
      "10",
      "11",
      "12",
      "3"
    ],
    "answer": "11",
    "explanation": "arr[3][1] refers to the second element of the fourth row (11)."
  },
  {
    "question": "Which of the following is a property of dynamic data structures?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Fixed size",
      "Cannot grow during runtime",
      "Flexible size during runtime",
      "Require contiguous memory"
    ],
    "answer": "Flexible size during runtime",
    "explanation": "Dynamic data structures can change size dynamically (e.g., linked lists)."
  },
  {
    "question": "Which of the following best describes the strcmp() function?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Appends strings",
      "Compares strings",
      "Prints a string",
      "Calculates string length"
    ],
    "answer": "Compares strings",
    "explanation": "strcmp returns 0 if two strings are equal, a positive or negative integer otherwise."
  },
  {
    "question": "What is the output of the following program?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int arr[3][3][3] = {{{1}}};\n    printf(\"%d\", arr[0][0][0]);\n    return 0;\n}",
    "language": "c",
    "options": [
      "0",
      "1",
      "Garbage value",
      "3"
    ],
    "answer": "1",
    "explanation": "The first element of the 3D array is initialized to 1."
  },
  {
    "question": "Which data structure is best suited for Last In First Out operations?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Queue",
      "Stack",
      "Array",
      "Graph"
    ],
    "answer": "Stack",
    "explanation": "A stack operates on the LIFO principle."
  },
  {
    "question": "What is the main advantage of linked lists over arrays?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Faster index-based access",
      "Dynamic size modification",
      "Elements stored contiguously",
      "Less memory used overall"
    ],
    "answer": "Dynamic size modification",
    "explanation": "Linked lists can grow or shrink during runtime by allocating/deallocating nodes."
  },
  {
    "question": "What does the following C code do?",
    "codeBlock": "int arr[5] = {1,2,3,4,5};\nint *p = arr;\nprintf(\"%d\", *(p+2));",
    "language": "c",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": "3",
    "explanation": "Pointer arithmetic *(p+2) accesses the third element (index 2)."
  },
  {
    "question": "What is the meaning of time complexity?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Memory required for execution",
      "Number of steps an algorithm takes",
      "The output of an algorithm",
      "Order of input data"
    ],
    "answer": "Number of steps an algorithm takes",
    "explanation": "Time complexity measures the number of steps needed as input size grows."
  },
  {
    "question": "Which of the following is not an advantage of arrays?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Efficient memory use for homogeneous data",
      "Random access using indices",
      "Dynamic size adjustment",
      "Organized memory structure"
    ],
    "answer": "Dynamic size adjustment",
    "explanation": "Arrays have a fixed size and do not support dynamic size changes."
  },
  {
    "question": "Which of the following terms defines the maximum size of an array in memory?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Upper Bound",
      "Lower Bound",
      "Index",
      "Pointer"
    ],
    "answer": "Upper Bound",
    "explanation": "The highest index used defines the upper bound of the array."
  },
  {
    "question": "What does this code do?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    char name[20];\n    scanf(\"%s\", name);\n    printf(\"%s\", name);\n    return 0;\n}",
    "language": "c",
    "options": [
      "Reads and prints an integer",
      "Reads and prints a string without spaces",
      "Reads and prints a string including spaces",
      "Error due to no termination"
    ],
    "answer": "Reads and prints a string without spaces",
    "explanation": "scanf with %s reads until whitespace, printing only the first word entered."
  },
  {
    "question": "In the divide and conquer approach, what is the last step called?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Conquer",
      "Combine",
      "Divide",
      "Terminate"
    ],
    "answer": "Combine",
    "explanation": "Sub-problems are solved and then combined to get the final solution."
  },
  {
    "question": "Which of the following is an example of a string initialization in C?",
    "codeBlock": "",
    "language": "",
    "options": [
      "char c[] = {'a', 'b', 'c', '\\0'};",
      "char c = \"abc\";",
      "string c = \"abc\";",
      "char c[] = 123;"
    ],
    "answer": "char c[] = {'a', 'b', 'c', '\\0'};",
    "explanation": "This declares a character array that ends with a null terminator."
  },
  {
    "question": "What are abstract data types (ADTs)?",
    "codeBlock": "",
    "language": "",
    "options": [
      "a) Algorithms used to structure data in memory",
      "b) Advanced data structures",
      "c) Rich data models",
      "d) Algorithms representing logical relationships between data elements"
    ],
    "answer": "d) Algorithms representing logical relationships between data elements",
    "explanation": "ADTs are conceptual models that represent logical relationships and the operations that can be performed on data, independent of implementation."
  },
  {
    "question": "Which of the following methods can be used to represent a sparse matrix efficiently?",
    "codeBlock": "",
    "language": "",
    "options": [
      "a) Array representation",
      "b) Linked list representation",
      "c) Both array and linked list representations",
      "d) None of the above"
    ],
    "answer": "c) Both array and linked list representations",
    "explanation": "Sparse matrices can be represented using either arrays or linked lists to store only the non-zero elements."
  },
  {
    "question": "Which of the following functions can be used to append a source string to the end of a destination string?",
    "codeBlock": "",
    "language": "",
    "options": [
      "a) strcpy",
      "b) strcat",
      "c) strcmp",
      "d) strlen"
    ],
    "answer": "b) strcat",
    "explanation": "The strcat function in C appends the source string to the end of the destination string."
  },
  {
    "question": "What is the purpose of the sorting operation on an array?",
    "codeBlock": "",
    "language": "",
    "options": [
      "a) To reverse the elements of the array",
      "b) To change the size of the array",
      "c) To rearrange the elements of the array in either ascending or descending order",
      "d) To remove duplicate elements from the array"
    ],
    "answer": "c) To rearrange the elements of the array in either ascending or descending order",
    "explanation": "Sorting is used to reorder the elements of an array to improve searching and data organization."
  },
  {
    "question": "Which of the following best describes time complexity?",
    "codeBlock": "",
    "language": "",
    "options": [
      "a) The number of operations required for an algorithm to finish executing",
      "b) The amount of memory needed for an algorithm to execute",
      "c) The speed at which an algorithm completes execution",
      "d) The size of the input data for an algorithm"
    ],
    "answer": "a) The number of operations required for an algorithm to finish executing",
    "explanation": "Time complexity measures the number of steps or operations an algorithm takes to complete."
  },
  {
    "question": "What is the output of the following C program?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int arr[3] = {10, 20, 30};\n    printf(\"%d\", arr[1]);\n    return 0;\n}",
    "language": "c",
    "options": [
      "10",
      "20",
      "30",
      "Garbage value"
    ],
    "answer": "20",
    "explanation": "The element at index 1 is 20, so it prints 20."
  },
  {
    "question": "Which of the following code snippets correctly declares and initializes a 2D array in C?",
    "codeBlock": "",
    "language": "c",
    "options": [
      "int arr[2][2] = {1, 2, 3, 4};",
      "int arr[2][2] = {{1, 2}, {3, 4}};",
      "int arr[2][2] = [1, 2, 3, 4];",
      "int arr = {1, 2, 3, 4};"
    ],
    "answer": "int arr[2][2] = {{1, 2}, {3, 4}};",
    "explanation": "In C, a 2D array can be initialized using nested braces for rows and columns."
  },
  {
    "question": "What will be the output of the following code?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int arr[4] = {1, 2, 3};\n    printf(\"%d\", arr[3]);\n    return 0;\n}",
    "language": "c",
    "options": [
      "0",
      "1",
      "3",
      "Garbage value"
    ],
    "answer": "0",
    "explanation": "Uninitialized elements in a static array are zero-initialized, so arr[3] is 0."
  },
  {
    "question": "What does this code snippet print?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    char str[] = \"Hello\";\n    printf(\"%c\", str[1]);\n    return 0;\n}",
    "language": "c",
    "options": [
      "H",
      "e",
      "l",
      "o"
    ],
    "answer": "e",
    "explanation": "The character at index 1 is 'e'."
  },
  {
    "question": "Which of the following snippets correctly reads a line of text including spaces in C?",
    "codeBlock": "",
    "language": "c",
    "options": [
      "scanf(\"%s\", str);",
      "fgets(str, 20, stdin);",
      "printf(str);",
      "scanf(\"%d\", str);"
    ],
    "answer": "fgets(str, 20, stdin);",
    "explanation": "fgets() reads a line including spaces until a newline or EOF."
  },
  {
    "question": "What is the output of this program?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int a[2][2] = {{1,2}, {3,4}};\n    printf(\"%d\", a[1][0]);\n    return 0;\n}",
    "language": "c",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "3",
    "explanation": "a[1][0] accesses the first element of the second row, which is 3."
  },
  {
    "question": "Which of the following code snippets correctly declares a pointer to a structure?",
    "codeBlock": "",
    "language": "c",
    "options": [
      "struct node *ptr;",
      "node ptr;",
      "struct *node ptr;",
      "node *ptr;"
    ],
    "answer": "struct node *ptr;",
    "explanation": "The correct syntax is: struct struct_name *pointer_name;"
  },
  {
    "question": "What will the following code output?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int arr[5] = {10, 20, 30, 40, 50};\n    for(int i=0; i<5; i++) {\n        printf(\"%d \", arr[i]);\n    }\n    return 0;\n}",
    "language": "c",
    "options": [
      "10 20 30 40 50",
      "50 40 30 20 10",
      "1 2 3 4 5",
      "0 0 0 0 0"
    ],
    "answer": "10 20 30 40 50",
    "explanation": "The for loop iterates over the array and prints all the elements in order."
  },
  {
    "question": "Which of the following operations can be efficiently performed using linked lists?",
    "codeBlock": "",
    "language": "c",
    "options": [
      "Direct access by index",
      "Insertion and deletion in the middle",
      "Binary search directly",
      "Constant time sorting"
    ],
    "answer": "Insertion and deletion in the middle",
    "explanation": "Linked lists allow dynamic insertions and deletions without shifting elements."
  },
  {
    "question": "Predict the output:\n\n",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int arr[2][3] = {{1,2,3},{4,5,6}};\n    printf(\"%d\", arr[0][2]);\n    return 0;\n}",
    "language": "c",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "3",
    "explanation": "arr[0][2] is the third element in the first row, which is 3."
  },
  {
    "question": "What will be the output of the following C code?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int arr[3] = {1, 2, 3};\n    printf(\"%d\", arr[2]);\n    return 0;\n}",
    "language": "c",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "answer": "3",
    "explanation": "arr[2] accesses the third element (index 2), which is 3."
  },
  {
    "question": "Identify the error in this code snippet:",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int arr[5];\n    arr = {1, 2, 3, 4, 5};\n    return 0;\n}",
    "language": "c",
    "options": [
      "Array size missing",
      "Incorrect syntax for initialization",
      "Missing semicolon",
      "Array index out of bounds"
    ],
    "answer": "Incorrect syntax for initialization",
    "explanation": "Arrays cannot be assigned with braces after declaration; initialization must be done at the time of declaration."
  },
  {
    "question": "What is the output of this code?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    char str[5] = \"abcd\";\n    printf(\"%s\", str);\n    return 0;\n}",
    "language": "c",
    "options": [
      "abcd",
      "abc",
      "abcd\\0",
      "ab"
    ],
    "answer": "abcd",
    "explanation": "The string \"abcd\" fits within the 5-character array (including the null character), so it prints correctly."
  },
  {
    "question": "Which of the following correctly declares a 3D array in C?",
    "codeBlock": "",
    "language": "c",
    "options": [
      "int arr[2][3][4];",
      "int arr(2,3,4);",
      "int [2][3][4] arr;",
      "array arr[2][3][4];"
    ],
    "answer": "int arr[2][3][4];",
    "explanation": "The correct syntax is: int arr[size1][size2][size3];"
  },
  {
    "question": "What will be printed?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int arr[2][2] = {{1,2},{3,4}};\n    printf(\"%d\", arr[1][1]);\n    return 0;\n}",
    "language": "c",
    "options": [
      "2",
      "3",
      "4",
      "1"
    ],
    "answer": "4",
    "explanation": "arr[1][1] is the second element of the second row, which is 4."
  },
  {
    "question": "Predict the output:",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int arr[3][2] = {{1,2}, {3,4}, {5,6}};\n    printf(\"%d\", arr[2][0]);\n    return 0;\n}",
    "language": "c",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": "5",
    "explanation": "arr[2][0] is the first element of the third row, which is 5."
  },
  {
    "question": "What does this code output?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    char c[] = {'a', 'b', 'c', '\\0'};\n    printf(\"%s\", c);\n    return 0;\n}",
    "language": "c",
    "options": [
      "a",
      "abc",
      "c",
      "ab"
    ],
    "answer": "abc",
    "explanation": "The char array is null-terminated, so printf prints 'abc'."
  },
  {
    "question": "Identify the correct way to pass a 2D array to a function in C.",
    "codeBlock": "",
    "language": "c",
    "options": [
      "void func(int arr[][]);",
      "void func(int arr[2][3]);",
      "void func(arr);",
      "void func(int[] arr);"
    ],
    "answer": "void func(int arr[2][3]);",
    "explanation": "To pass a 2D array, specify at least the second dimension size."
  },
  {
    "question": "What does this C code output?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int i;\n    int arr[4] = {1, 2, 3, 4};\n    for(i=3; i>=0; i--)\n        printf(\"%d \", arr[i]);\n    return 0;\n}",
    "language": "c",
    "options": [
      "1 2 3 4",
      "4 3 2 1",
      "1 3 2 4",
      "2 3 4 1"
    ],
    "answer": "4 3 2 1",
    "explanation": "The loop prints the array in reverse order."
  },
  {
    "question": "What will the following code print?",
    "codeBlock": "#include<stdio.h>\nint main() {\n    int arr[3] = {1};\n    printf(\"%d\", arr[2]);\n    return 0;\n}",
    "language": "c",
    "options": [
      "1",
      "0",
      "Garbage value",
      "3"
    ],
    "answer": "0",
    "explanation": "Only the first element is initialized to 1, the rest are zero by default."
  }
];
