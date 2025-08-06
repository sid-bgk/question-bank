import { MCQ } from '../../../../../../types';

export const mcq: MCQ[] = [
  {
    "question": "What is the worst-case time complexity of the Insertion Sort algorithm?",
    "codeBlock": "",
    "language": "",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(n^2)",
      "O(log n)"
    ],
    "answer": "O(n^2)",
    "explanation": "In the worst-case, every element is compared with all preceding elements, leading to quadratic time complexity."
  },
  {
    "question": "Which sorting technique divides the array into smaller subarrays and merges them after sorting?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Quick Sort",
      "Heap Sort",
      "Merge Sort",
      "Bubble Sort"
    ],
    "answer": "Merge Sort",
    "explanation": "Merge Sort uses divide and conquer by splitting the array, sorting recursively, and merging."
  },
  {
    "question": "What is the primary advantage of using Bubble Sort?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It is very efficient for large data sets",
      "It is easy to understand and implement",
      "It always uses O(n log n) time",
      "It does not require swapping"
    ],
    "answer": "It is easy to understand and implement",
    "explanation": "Despite being inefficient for large datasets, Bubble Sort’s simplicity makes it easy to grasp."
  },
  {
    "question": "In which sorting algorithm is the pivot element placed at its correct position after partitioning?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Insertion Sort",
      "Bubble Sort",
      "Quick Sort",
      "Selection Sort"
    ],
    "answer": "Quick Sort",
    "explanation": "Quick Sort places the pivot at its correct position during partitioning."
  },
  {
    "question": "Which of the following statements best describes Selection Sort?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It sorts by repeatedly selecting the largest element",
      "It sorts by repeatedly selecting the smallest element",
      "It uses the divide and conquer method",
      "It compares adjacent elements and swaps them"
    ],
    "answer": "It sorts by repeatedly selecting the smallest element",
    "explanation": "Selection Sort picks the smallest element and places it at the beginning of the sorted portion."
  },
  {
    "question": "What is the primary characteristic of external sorting?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It only works on small datasets",
      "It uses in-memory sorting algorithms only",
      "It involves sorting data that doesn’t fit in main memory",
      "It doesn’t involve merging runs"
    ],
    "answer": "It involves sorting data that doesn’t fit in main memory",
    "explanation": "External sorting manages large datasets using external storage."
  },
  {
    "question": "Which of the following is a divide and conquer sorting algorithm?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Bubble Sort",
      "Selection Sort",
      "Quick Sort",
      "Insertion Sort"
    ],
    "answer": "Quick Sort",
    "explanation": "Quick Sort repeatedly partitions the array, making it a divide and conquer algorithm."
  },
  {
    "question": "What is the worst-case time complexity of Linear Search?",
    "codeBlock": "",
    "language": "",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n^2)"
    ],
    "answer": "O(n)",
    "explanation": "In Linear Search, each element is checked sequentially, leading to O(n) complexity."
  },
  {
    "question": "Which sorting algorithm uses a heap data structure?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Bubble Sort",
      "Insertion Sort",
      "Heap Sort",
      "Shell Sort"
    ],
    "answer": "Heap Sort",
    "explanation": "Heap Sort uses a binary heap for sorting elements."
  },
  {
    "question": "In Binary Search, how is the middle element calculated in a sorted array?",
    "codeBlock": "",
    "language": "",
    "options": [
      "(low + high) / 2",
      "low + (high - low) / 2",
      "(low * high) / 2",
      "low - (high + low) / 2"
    ],
    "answer": "low + (high - low) / 2",
    "explanation": "This calculation prevents integer overflow in some languages."
  },
  {
    "question": "What is the main problem of linear probing in hashing?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It causes high memory usage",
      "It leads to clustering",
      "It is too complex",
      "It uses recursive calls"
    ],
    "answer": "It leads to clustering",
    "explanation": "Linear probing can result in clustering, causing performance degradation."
  },
  {
    "question": "Which algorithm is based on reducing the gap between compared elements until it becomes 1?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Selection Sort",
      "Shell Sort",
      "Bubble Sort",
      "Heap Sort"
    ],
    "answer": "Shell Sort",
    "explanation": "Shell Sort reduces the gap progressively, improving insertion sort’s performance."
  },
  {
    "question": "What is the load factor in hashing?",
    "codeBlock": "",
    "language": "",
    "options": [
      "The ratio of table size to the number of keys",
      "The ratio of the number of keys to table size",
      "The number of collisions in the table",
      "The total number of keys stored"
    ],
    "answer": "The ratio of the number of keys to table size",
    "explanation": "Load factor is calculated as number of items / table size."
  },
  {
    "question": "Which search technique requires the list to be sorted before searching?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Linear Search",
      "Binary Search",
      "Hashing",
      "Bubble Sort"
    ],
    "answer": "Binary Search",
    "explanation": "Binary Search requires a sorted array for effective searching."
  },
  {
    "question": "In Quick Sort, what is the primary role of the partition function?",
    "codeBlock": "",
    "language": "",
    "options": [
      "To merge two sorted arrays",
      "To rearrange the array around the pivot",
      "To check for duplicate elements",
      "To compare all pairs of elements"
    ],
    "answer": "To rearrange the array around the pivot",
    "explanation": "Partition places the pivot at the right place and rearranges other elements."
  },
  {
    "question": "Which of the following hash collision resolution techniques uses linked lists?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Linear probing",
      "Quadratic probing",
      "Double hashing",
      "Separate chaining"
    ],
    "answer": "Separate chaining",
    "explanation": "Separate chaining uses linked lists at each index to store multiple keys."
  },
  {
    "question": "In selection sort, what happens in each iteration?",
    "codeBlock": "",
    "language": "",
    "options": [
      "The largest element is moved to the end",
      "The array is split into halves",
      "Adjacent elements are swapped",
      "The smallest element is placed at the correct position"
    ],
    "answer": "The smallest element is placed at the correct position",
    "explanation": "Selection sort selects the smallest unsorted element and puts it at the correct position."
  },
  {
    "question": "Which sorting algorithm continuously compares and swaps adjacent elements?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Merge Sort",
      "Bubble Sort",
      "Heap Sort",
      "Selection Sort"
    ],
    "answer": "Bubble Sort",
    "explanation": "Bubble Sort compares adjacent elements and swaps them if needed."
  },
  {
    "question": "What is the typical complexity of Hash Table operations like insert and search (without collisions)?",
    "codeBlock": "",
    "language": "",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(1)",
      "O(log n)"
    ],
    "answer": "O(1)",
    "explanation": "Hash table operations typically take constant time in the best case."
  },
  {
    "question": "Which technique does external sorting typically rely on for handling large datasets?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Radix sort",
      "Merge sort",
      "Insertion sort",
      "Selection sort"
    ],
    "answer": "Merge sort",
    "explanation": "External sorting uses merge sort to handle chunks of data and combine them."
  },
  {
    "question": "In hashing, what is the primary goal of the hash function?",
    "codeBlock": "",
    "language": "",
    "options": [
      "To store the data in sorted order",
      "To convert data into a smaller range index",
      "To reverse the data for security",
      "To compare data in pairs"
    ],
    "answer": "To convert data into a smaller range index",
    "explanation": "The hash function maps a large key space to a smaller index range for quick access."
  },
  {
    "question": "What is the average-case time complexity of Binary Search?",
    "codeBlock": "",
    "language": "",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": "O(log n)",
    "explanation": "Binary search cuts the search space in half each time, leading to O(log n)."
  },
  {
    "question": "In Linear Search, when does the search end unsuccessfully?",
    "codeBlock": "",
    "language": "",
    "options": [
      "When the last element is found",
      "When the first element is found",
      "When no match is found after checking all elements",
      "When half of the array is checked"
    ],
    "answer": "When no match is found after checking all elements",
    "explanation": "The search continues until the end of the list if no match is found."
  },
  {
    "question": "Which of these sorting algorithms is generally not suitable for large datasets due to high time complexity?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Heap Sort",
      "Quick Sort",
      "Bubble Sort",
      "Merge Sort"
    ],
    "answer": "Bubble Sort",
    "explanation": "Bubble Sort’s O(n^2) complexity makes it inefficient for large datasets."
  },
  {
    "question": "Which sort algorithm improves performance by handling far-apart elements first?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Insertion Sort",
      "Bubble Sort",
      "Shell Sort",
      "Selection Sort"
    ],
    "answer": "Shell Sort",
    "explanation": "Shell Sort reduces large gaps first, improving overall efficiency."
  },
  {
    "question": "Which sorting technique requires a complete binary tree structure?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Heap Sort",
      "Insertion Sort",
      "Quick Sort",
      "Merge Sort"
    ],
    "answer": "Heap Sort",
    "explanation": "Heap Sort uses a binary heap structure, a complete binary tree."
  },
  {
    "question": "What is the main advantage of Hash Tables compared to arrays?",
    "codeBlock": "",
    "language": "",
    "options": [
      "They are simpler to implement",
      "They can store sorted data",
      "They provide constant time access",
      "They use less memory"
    ],
    "answer": "They provide constant time access",
    "explanation": "Hash tables allow O(1) average time access, unlike linear access in arrays."
  },
  {
    "question": "What does the load factor (λ) represent in a hash table?",
    "codeBlock": "",
    "language": "",
    "options": [
      "The number of collisions",
      "The ratio of number of elements to table size",
      "The size of the hash table",
      "The number of empty slots"
    ],
    "answer": "The ratio of number of elements to table size",
    "explanation": "Load factor measures how full the hash table is."
  },
  {
    "question": "Which algorithm's worst-case time complexity is O(n^2) but average-case is O(n log n)?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Quick Sort",
      "Selection Sort",
      "Bubble Sort",
      "Insertion Sort"
    ],
    "answer": "Quick Sort",
    "explanation": "Quick Sort’s average-case is O(n log n), but worst-case is O(n^2) if pivots are poorly chosen."
  },
  {
    "question": "What does separate chaining do to handle hash collisions?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Uses arrays instead of lists",
      "Inserts colliding elements in a linked list at the hash index",
      "Deletes colliding elements",
      "Sorts all data again"
    ],
    "answer": "Inserts colliding elements in a linked list at the hash index",
    "explanation": "Separate chaining maintains a list of elements at each index for collisions."
  },
  {
    "question": "Which of these is not a collision resolution technique in hashing?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Separate chaining",
      "Quadratic probing",
      "Binary Search",
      "Linear probing"
    ],
    "answer": "Binary Search",
    "explanation": "Binary Search is a search technique, not for resolving collisions in hashing."
  },
  {
    "question": "Which sort algorithm uses ‘partition-exchange’ to sort elements?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Merge Sort",
      "Quick Sort",
      "Heap Sort",
      "Bubble Sort"
    ],
    "answer": "Quick Sort",
    "explanation": "Quick Sort partitions elements and exchanges them to sort efficiently."
  },
  {
    "question": "What type of searching technique is used in hashing?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Linear Search",
      "Binary Search",
      "Direct index lookup",
      "Interpolation search"
    ],
    "answer": "Direct index lookup",
    "explanation": "Hashing uses direct index mapping for fast access."
  },
  {
    "question": "Which of the following best describes the main purpose of sorting?",
    "codeBlock": "",
    "language": "",
    "options": [
      "To delete data",
      "To search data faster",
      "To duplicate data",
      "To store data in random order"
    ],
    "answer": "To search data faster",
    "explanation": "Sorting improves the efficiency of searching and data organization."
  },
  {
    "question": "What is the main purpose of the ‘heapify’ function in Heap Sort?",
    "codeBlock": "",
    "language": "",
    "options": [
      "To merge sorted arrays",
      "To rearrange the array to satisfy heap property",
      "To find median elements",
      "To split the array into subarrays"
    ],
    "answer": "To rearrange the array to satisfy heap property",
    "explanation": "Heapify ensures parent nodes in heap are larger than their children."
  },
  {
    "question": "In external sorting, what is the first phase where chunks are sorted individually?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Merge phase",
      "Partition phase",
      "Run creation phase",
      "Sorting phase"
    ],
    "answer": "Run creation phase",
    "explanation": "In external sorting, sorted runs are created first before merging."
  },
  {
    "question": "What happens in Binary Search if the element is not found?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It returns -1 or similar",
      "It returns the first element",
      "It returns the last element",
      "It returns the middle element"
    ],
    "answer": "It returns -1 or similar",
    "explanation": "If no match is found, binary search indicates failure, often with -1."
  },
  {
    "question": "Which sorting algorithm has the worst cache performance due to pointer chasing?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Bubble Sort",
      "Selection Sort",
      "Heap Sort",
      "Separate chaining in hashing"
    ],
    "answer": "Separate chaining in hashing",
    "explanation": "Linked list-based approaches like separate chaining have poor cache performance."
  },
  {
    "question": "What is a common issue with linear probing?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It wastes space due to linked lists",
      "It requires too many comparisons",
      "It creates primary clustering",
      "It sorts data automatically"
    ],
    "answer": "It creates primary clustering",
    "explanation": "Linear probing can lead to contiguous filled slots, called clustering."
  },
  {
    "question": "What key advantage does merge sort have over quick sort?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It always has O(n log n) time complexity",
      "It uses less memory",
      "It doesn’t divide the array",
      "It doesn’t use recursion"
    ],
    "answer": "It always has O(n log n) time complexity",
    "explanation": "Merge sort consistently has O(n log n) time, even in worst case."
  },
  {
    "question": "Which search algorithm checks every element sequentially until a match is found or end is reached?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Binary Search",
      "Hashing",
      "Linear Search",
      "Interpolation Search"
    ],
    "answer": "Linear Search",
    "explanation": "Linear Search checks each element one by one."
  },
  {
    "question": "Which of the following sorting algorithms does NOT require an additional array for merging?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Merge Sort",
      "Quick Sort",
      "External Merge Sort",
      "Shell Sort"
    ],
    "answer": "Quick Sort",
    "explanation": "Quick Sort sorts in place and doesn’t need an extra array."
  },
  {
    "question": "In external sorting, what happens during the merge phase?",
    "codeBlock": "",
    "language": "",
    "options": [
      "The data is loaded back to memory in random order",
      "Multiple sorted runs are combined to form a larger sorted file",
      "The array is split into halves repeatedly",
      "The first element is moved to the last position"
    ],
    "answer": "Multiple sorted runs are combined to form a larger sorted file",
    "explanation": "In merge phase, the sorted chunks are combined to form a single sorted file."
  },
  {
    "question": "What is the best-case time complexity of Insertion Sort?",
    "codeBlock": "",
    "language": "",
    "options": [
      "O(n)",
      "O(n^2)",
      "O(log n)",
      "O(n log n)"
    ],
    "answer": "O(n)",
    "explanation": "Insertion Sort performs best when the array is already sorted."
  },
  {
    "question": "Which algorithm is based on inserting the current element into the sorted portion?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Selection Sort",
      "Merge Sort",
      "Insertion Sort",
      "Heap Sort"
    ],
    "answer": "Insertion Sort",
    "explanation": "Insertion Sort inserts each element into the correct position in the sorted part."
  },
  {
    "question": "Which collision resolution method in hashing avoids storing linked lists?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Separate chaining",
      "Linear probing",
      "Separate chaining with BST",
      "Open chaining"
    ],
    "answer": "Linear probing",
    "explanation": "Linear probing avoids linked lists by probing within the array."
  },
  {
    "question": "What is the main advantage of open addressing in hashing?",
    "codeBlock": "",
    "language": "",
    "options": [
      "No memory overhead of pointers",
      "No clustering issues",
      "Uses linked lists",
      "Best cache performance"
    ],
    "answer": "No memory overhead of pointers",
    "explanation": "Open addressing keeps all keys in the array itself, avoiding extra memory for pointers."
  },
  {
    "question": "Which of the following best defines a complete binary tree?",
    "codeBlock": "",
    "language": "",
    "options": [
      "All levels filled completely",
      "All levels except last filled, and last filled from left to right",
      "All nodes have two children",
      "All leaf nodes at same level"
    ],
    "answer": "All levels except last filled, and last filled from left to right",
    "explanation": "This is the precise definition of a complete binary tree."
  },
  {
    "question": "What is the typical worst-case time complexity of Heap Sort?",
    "codeBlock": "",
    "language": "",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(n^2)"
    ],
    "answer": "O(n log n)",
    "explanation": "Heap Sort’s worst-case time complexity is O(n log n)."
  },
  {
    "question": "What does quadratic probing do differently than linear probing?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It uses linked lists",
      "It checks quadratically further slots",
      "It hashes again for new index",
      "It uses binary search"
    ],
    "answer": "It checks quadratically further slots",
    "explanation": "Quadratic probing checks slots at increasing quadratic intervals."
  },
  {
    "question": "Which of these algorithms is not based on comparison of adjacent elements?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Bubble Sort",
      "Insertion Sort",
      "Selection Sort",
      "Merge Sort"
    ],
    "answer": "Merge Sort",
    "explanation": "Merge Sort divides the list and merges without directly comparing adjacent elements."
  },
  {
    "question": "What technique is used in hashing to ensure constant time average case for search and insert?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Separate chaining",
      "Efficient hash functions",
      "Open addressing",
      "All of the above"
    ],
    "answer": "All of the above",
    "explanation": "All these strategies help maintain O(1) average time for hashing."
  },
  {
    "question": "Which of the following is true about Quick Sort pivot selection?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Pivot can be first element only",
      "Pivot can be last element only",
      "Pivot can be any element",
      "Pivot is always the largest element"
    ],
    "answer": "Pivot can be any element",
    "explanation": "Pivot can be first, last, median or any random element for flexibility."
  },
  {
    "question": "What is the major drawback of quadratic probing compared to linear probing?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It suffers from primary clustering",
      "It has poor cache performance",
      "It doesn’t work with large tables",
      "It has no drawbacks"
    ],
    "answer": "It has poor cache performance",
    "explanation": "Quadratic probing has more jumps, leading to poorer cache performance."
  },
  {
    "question": "What is the key advantage of using hashing over linear search?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Better time complexity",
      "No need to sort the data",
      "No need for contiguous memory",
      "All of the above"
    ],
    "answer": "All of the above",
    "explanation": "Hashing has constant time access and no need to sort or contiguous memory."
  },
  {
    "question": "Which of these does not have an O(n log n) worst-case time complexity?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Heap Sort",
      "Quick Sort",
      "Merge Sort",
      "Bubble Sort"
    ],
    "answer": "Bubble Sort",
    "explanation": "Bubble Sort has O(n^2) worst-case complexity."
  },
  {
    "question": "What role does the ‘flag’ variable play in the Insertion Sort example in the document?",
    "codeBlock": "int n, array[1000], c, d, t, flag = 0; ... for (d = c - 1 ; d >= 0; d--) { if (array[d] > t) { array[d+1] = array[d]; flag = 1; } else break; } if (flag) array[d+1] = t;",
    "language": "C",
    "options": [
      "It tracks the number of swaps",
      "It indicates if shifting is needed",
      "It stores the current element",
      "It counts comparisons"
    ],
    "answer": "It indicates if shifting is needed",
    "explanation": "The flag signals if shifting of elements occurred before placing t at its new position."
  },
  {
    "question": "In the given heapify function, what does ‘largest’ variable represent?",
    "codeBlock": "void heapify(int arr[], int size, int i) { int largest = i; int left = 2*i + 1; int right = 2*i + 2; if (left < size && arr[left] > arr[largest]) largest = left; if (right < size && arr[right] > arr[largest]) largest = right; if (largest != i) { swap(&arr[i], &arr[largest]); heapify(arr, size, largest); } }",
    "language": "C",
    "options": [
      "The smallest index",
      "The index of the largest element among i, left, right",
      "The index of the last element",
      "The index of the pivot element"
    ],
    "answer": "The index of the largest element among i, left, right",
    "explanation": "‘largest’ holds the index of the largest of the current node and its children."
  },
  {
    "question": "What is the purpose of the ‘rehash’ function in the hashing example?",
    "codeBlock": "",
    "language": "",
    "options": [
      "To clear the hash table",
      "To handle load factor exceeding threshold",
      "To sort the data in hash table",
      "To delete duplicate elements"
    ],
    "answer": "To handle load factor exceeding threshold",
    "explanation": "Rehashing is done when load factor exceeds threshold (like 0.75) to resize table and reduce collisions."
  },
  {
    "question": "What is a key disadvantage of separate chaining?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Poor cache performance",
      "Limited keys storage",
      "High memory usage",
      "A and C"
    ],
    "answer": "A and C",
    "explanation": "Separate chaining uses extra memory for pointers and has poor cache performance."
  },
  {
    "question": "Which sorting algorithm arranges elements by continuously finding the least element from the unsorted portion and placing it at the beginning of the array?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Insertion Sort",
      "Bubble Sort",
      "Selection Sort",
      "Merge Sort"
    ],
    "answer": "Selection Sort",
    "explanation": "Selection Sort repeatedly selects the smallest element from the unsorted subarray and places it at the beginning."
  },
  {
    "question": "What is the time complexity of the Quick Sort algorithm?",
    "codeBlock": "",
    "language": "",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(n^2)"
    ],
    "answer": "O(n log n)",
    "explanation": "The average time complexity of Quick Sort is O(n log n), though its worst-case is O(n^2)."
  },
  {
    "question": "Which of the following statements about Quick Sort is true?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Quick Sort is based on the concept of Divide and Conquer, where the majority of the work is done during the merging step.",
      "The pivot element in Quick Sort can only be the first element of the array.",
      "Quick Sort always selects the middle element of the array as the pivot.",
      "The partition-exchange sort algorithm splits the list into two main parts: elements greater than the pivot and elements less than the pivot."
    ],
    "answer": "The partition-exchange sort algorithm splits the list into two main parts: elements greater than the pivot and elements less than the pivot.",
    "explanation": "This accurately describes how Quick Sort partitions data around the pivot."
  },
  {
    "question": "What happens when two different keys map to the same position in a hash table?",
    "codeBlock": "",
    "language": "",
    "options": [
      "The data is lost.",
      "The search operation becomes faster.",
      "A collision resolution technique like chaining or open addressing is used.",
      "The hash function needs to be rewritten."
    ],
    "answer": "A collision resolution technique like chaining or open addressing is used.",
    "explanation": "Collisions are resolved using these techniques, not by rewriting the hash function."
  },
  {
    "question": "What is the key characteristic of External Sorting?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It uses a hybrid sort-merge strategy.",
      "It relies solely on in-memory sorting techniques.",
      "It works best with small data sets.",
      "It performs sorting operations entirely in main memory."
    ],
    "answer": "It uses a hybrid sort-merge strategy.",
    "explanation": "External Sorting handles large data sets by dividing and merging sorted runs using a hybrid sort-merge approach."
  },
  {
    "question": "What will be the output of the following Bubble Sort implementation when the input is 20 30 50 40 70?",
    "codeBlock": "int array[100], n, c, d, swap; printf(\"Enter number of elements\\n\"); scanf(\"%d\", &n); printf(\"Enter %d integers\\n\", n); for (c = 0; c < n; c++) scanf(\"%d\", &array[c]); for (c = 0 ; c < n - 1; c++) { for (d = 0 ; d < n - c - 1; d++) { if (array[d] > array[d+1]) { swap = array[d]; array[d] = array[d+1]; array[d+1] = swap; } } } printf(\"Sorted list in ascending order:\\n\"); for (c = 0; c < n; c++) printf(\"%d\\n\", array[c]);",
    "language": "C",
    "options": [
      "20 30 40 50 70",
      "70 50 40 30 20",
      "30 20 50 40 70",
      "20 30 50 70 40"
    ],
    "answer": "20 30 40 50 70",
    "explanation": "Bubble Sort repeatedly swaps adjacent elements until the array is sorted in ascending order."
  },
  {
    "question": "What does the following Insertion Sort implementation do when input is 5 11 12 13 6?",
    "codeBlock": "int n = 5; int array[5] = {5, 11, 12, 13, 6}; int c, d, t, flag = 0; for (c = 1 ; c <= n - 1; c++) { t = array[c]; for (d = c - 1 ; d >= 0; d--) { if (array[d] > t) { array[d+1] = array[d]; flag = 1; } else break; } if (flag) array[d+1] = t; }",
    "language": "C",
    "options": [
      "The array becomes sorted as 5 6 11 12 13",
      "It sorts only the first half",
      "No change occurs in the array",
      "It crashes due to index out of bounds"
    ],
    "answer": "The array becomes sorted as 5 6 11 12 13",
    "explanation": "Insertion Sort inserts the current element at its correct place in the sorted portion of the array."
  },
  {
    "question": "What will be printed as output by the given partition function when the array is {4, 6, 3, 2, 1, 9, 7}?",
    "codeBlock": "int partition(int left, int right, int pivot) { int leftPointer = left -1; int rightPointer = right; while(true) { while(intArray[++leftPointer] < pivot) {} while(rightPointer > 0 && intArray[--rightPointer] > pivot) {} if(leftPointer >= rightPointer) { break; } else { swap(leftPointer,rightPointer); } } swap(leftPointer, right); return leftPointer; }",
    "language": "C",
    "options": [
      "The pivot is placed at index 3",
      "The pivot is placed at index 0",
      "The pivot is removed",
      "The pivot is placed at index 6"
    ],
    "answer": "The pivot is placed at index 3",
    "explanation": "The partition function places the pivot in its correct position by rearranging smaller and larger elements."
  },
  {
    "question": "What is the purpose of the 'heapify' function in the following code?",
    "codeBlock": "void heapify(int arr[], int size, int i) { int largest = i; int left = 2*i + 1; int right = 2*i + 2; if (left < size && arr[left] >arr[largest]) largest = left; if (right < size && arr[right] > arr[largest]) largest = right; if (largest != i) { int temp = arr[i]; arr[i]= arr[largest]; arr[largest] = temp; heapify(arr, size, largest); } }",
    "language": "C",
    "options": [
      "It swaps two elements and stops",
      "It ensures the max-heap property for subtree rooted at index i",
      "It sorts the entire array in one pass",
      "It finds the median element"
    ],
    "answer": "It ensures the max-heap property for subtree rooted at index i",
    "explanation": "The heapify function is called recursively to restore the heap property."
  },
  {
    "question": "What will be the output of this Linear Search code when searching for 11 in array {10, 20, 11, 14}?",
    "codeBlock": "int a[4] = {10, 20, 11, 14}; int i, x=11; for(i=0;i<4;++i) if(a[i]==x) break; if(i<4) printf(\"Element found at index %d\",i); else printf(\"Element not found\");",
    "language": "C",
    "options": [
      "Element found at index 2",
      "Element found at index 1",
      "Element found at index 3",
      "Element not found"
    ],
    "answer": "Element found at index 2",
    "explanation": "Linear Search checks each element until it finds a match at index 2."
  },
  {
    "question": "What is the output of the Binary Search code if array is {1, 2, 3, 4, 5} and search value is 1?",
    "codeBlock": "int c, first=0, last=4, middle; int array[5]={1,2,3,4,5}; int search=1; middle = (first+last)/2; while (first <= last) { if (array[middle] < search) first = middle + 1; else if (array[middle] == search) { printf(\"%d found at location %d.\\n\", search, middle+1); break; } else last = middle - 1; middle = (first + last)/2; } if (first > last) printf(\"Not found! %d isn't present in the list.\\n\", search);",
    "language": "C",
    "options": [
      "1 found at location 1",
      "1 found at location 3",
      "1 found at location 5",
      "Not found"
    ],
    "answer": "1 found at location 1",
    "explanation": "Binary Search correctly finds 1 at the first position."
  },
  {
    "question": "What happens if the load factor exceeds 0.75 in the given hash table implementation?",
    "codeBlock": "if (n >= 0.75) { printf(\"going to rehash\\n\"); rehash(); }",
    "language": "C",
    "options": [
      "It deletes half the elements",
      "It resizes the hash table and rehashes keys",
      "It ignores the condition",
      "It sorts the hash table"
    ],
    "answer": "It resizes the hash table and rehashes keys",
    "explanation": "Rehashing occurs when load factor exceeds the threshold to improve performance."
  },
  {
    "question": "What will be the final output array after performing Heap Sort on {1, 10, 2, 3, 4}?",
    "codeBlock": "int arr[] = {1, 10, 2, 3, 4}; int size = 5; heapSort(arr, size); for (int i=0; i<size; ++i) printf(\"%d\\n\",arr[i]);",
    "language": "C",
    "options": [
      "1 2 3 4 10",
      "10 4 3 2 1",
      "1 3 2 4 10",
      "1 2 3 4 5"
    ],
    "answer": "1 2 3 4 10",
    "explanation": "Heap Sort arranges the elements in ascending order as expected."
  },
  {
    "question": "What is the output of Shell Sort for the initial array {35, 33, 42, 10, 14, 19, 27, 44}?",
    "codeBlock": "Initial array: 35, 33, 42, 10, 14, 19, 27, 44. Final sorted array printed after applying Shell Sort steps.",
    "language": "",
    "options": [
      "10 14 19 27 33 35 42 44",
      "44 42 35 33 27 19 14 10",
      "35 33 42 10 14 19 27 44",
      "10 19 14 27 44 33 35 42"
    ],
    "answer": "10 14 19 27 33 35 42 44",
    "explanation": "Shell Sort sorts the array in ascending order, even though intermediate steps are different."
  },
  {
    "question": "What will the rehash function do in this code?",
    "codeBlock": "void rehash() { struct arrayitem *temp = array; int i = 0, n = max; size = 0; max = 2 * max; array = (struct arrayitem*) malloc(max * sizeof(struct node)); init_array(); for (i = 0; i < n; i++) { struct node* list = (struct node*) temp[i].head; while (list != NULL) { insert(list->key, list->value); list = list->next; } } temp = NULL; }",
    "language": "C",
    "options": [
      "Deletes all existing keys",
      "Creates a new larger hash table and re-inserts keys",
      "Sorts keys in ascending order",
      "Reduces memory usage"
    ],
    "answer": "Creates a new larger hash table and re-inserts keys",
    "explanation": "Rehashing expands the table and reinserts existing keys to reduce collisions."
  },
  {
    "question": "What is the output of the following Selection Sort implementation when the input is 9 4 1 2 6?",
    "codeBlock": "int array[100] = {9, 4, 1, 2, 6}; int c, d, position, t, n=5; for (c = 0; c < (n - 1); c++) { position = c; for (d = c + 1; d < n; d++) { if (array[position] > array[d]) position = d; } if (position != c) { t = array[c]; array[c] = array[position]; array[position] = t; } } for (c = 0; c < n; c++) printf(\"%d\\n\", array[c]);",
    "language": "C",
    "options": [
      "1 2 4 6 9",
      "9 4 1 2 6",
      "4 1 2 6 9",
      "9 1 4 2 6"
    ],
    "answer": "1 2 4 6 9",
    "explanation": "Selection Sort places the smallest unsorted element at the beginning in each pass."
  },
  {
    "question": "What does this external sorting approach do in stage 1?",
    "codeBlock": "// Stage 1: Read either M blocks or the rest of the relation having a smaller size; sort the in-memory part of the relation; write the sorted data to run file Ri; i = i+1;",
    "language": "",
    "options": [
      "Merges two large files",
      "Creates sorted runs that fit in RAM",
      "Deletes duplicate records",
      "Sorts using only in-memory data"
    ],
    "answer": "Creates sorted runs that fit in RAM",
    "explanation": "Stage 1 creates sorted subfiles (runs) to prepare for final merge phase."
  },
  {
    "question": "What will the final output of Merge Sort be for the array {10, 14, 19, 26, 27, 31, 33, 35, 42, 44, 0}?",
    "codeBlock": "int a[11] = {10, 14, 19, 26, 27, 31, 33, 35, 42, 44, 0}; // sorted using Merge Sort function",
    "language": "C",
    "options": [
      "0 10 14 19 26 27 31 33 35 42 44",
      "44 42 35 33 31 27 26 19 14 10 0",
      "10 14 19 26 27 31 33 35 42 44 0",
      "10 14 19 26 27 31 33 35 42 0 44"
    ],
    "answer": "0 10 14 19 26 27 31 33 35 42 44",
    "explanation": "Merge Sort recursively splits and merges to produce a fully sorted array."
  },
  {
    "question": "In the following Hash Table code, what does the find function do?",
    "codeBlock": "int find(struct node *list, int key) { int retval = 0; struct node *temp = list; while (temp != NULL) { if (temp->key == key) return retval; temp = temp->next; retval++; } return -1; }",
    "language": "C",
    "options": [
      "Deletes the key from the list",
      "Returns the index of the key in the linked list",
      "Sorts the linked list",
      "Adds the key to the hash table"
    ],
    "answer": "Returns the index of the key in the linked list",
    "explanation": "The function iterates through the linked list and returns the position of the key."
  },
  {
    "question": "What will be the output of this hashing insert function if key 27 and value 3 are inserted?",
    "codeBlock": "void insert(int key, int value) { int index = hashcode(key); struct node *item = (struct node*) malloc(sizeof(struct node)); item->key = key; item->value = value; item->next = NULL; if (array[index].head == NULL) { array[index].head = item; array[index].tail = item; } else { array[index].tail->next = item; array[index].tail = item; } }",
    "language": "C",
    "options": [
      "Key 27 is added at the end of a chain in hash table",
      "Key 27 overwrites existing key",
      "Key 27 is placed at index 0",
      "Key 27 is removed from the hash table"
    ],
    "answer": "Key 27 is added at the end of a chain in hash table",
    "explanation": "The code appends new key-value pairs to the linked list at the calculated index."
  },
  {
    "question": "What does the following Quick Sort code do with an array {90,23,101,45,65,28,67,89,34,29}?",
    "codeBlock": "void quickSort(int a[], int beg, int end) { int loc; if(beg<end) { loc = partition(a, beg, end); quickSort(a, beg, loc-1); quickSort(a, loc+1, end); } }",
    "language": "C",
    "options": [
      "Sorts the array in descending order",
      "Sorts the array in ascending order",
      "Splits array into two without sorting",
      "Sorts only half the array"
    ],
    "answer": "Sorts the array in ascending order",
    "explanation": "Quick Sort recursively partitions and sorts to arrange in ascending order."
  },
  {
    "question": "What does the flag variable do in the Insertion Sort implementation shown below?",
    "codeBlock": "int flag = 0; for (c = 1 ; c <= n - 1; c++) { t = array[c]; for (d = c - 1 ; d >= 0; d--) { if (array[d] > t) { array[d+1] = array[d]; flag = 1; } else break; } if (flag) array[d+1] = t; }",
    "language": "C",
    "options": [
      "It counts number of swaps",
      "Indicates if element shifting occurred",
      "Stores the largest element",
      "Stores the index of smallest element"
    ],
    "answer": "Indicates if element shifting occurred",
    "explanation": "The flag signals whether elements were moved to insert the current element."
  },
  {
    "question": "In this external sorting process, what is done after stage 2 merge?",
    "codeBlock": "// Stage 2: repeat: select the first tuple among all buffer blocks and write to output; if a buffer block is empty and not EOF, read next block; until all input buffers empty",
    "language": "",
    "options": [
      "The array is sorted in memory",
      "The final sorted output is written to disk",
      "All data is deleted",
      "New input data is read from user"
    ],
    "answer": "The final sorted output is written to disk",
    "explanation": "External sorting merges sorted runs to produce a final sorted file on disk."
  },
  {
    "question": "What happens if the Binary Search code doesn’t find the search element?",
    "codeBlock": "if (first > last) printf(\"Not found! %d isn't present in the list.\\n\", search);",
    "language": "C",
    "options": [
      "It displays the first element",
      "It says the search element isn't present",
      "It restarts the search",
      "It returns the closest match"
    ],
    "answer": "It says the search element isn't present",
    "explanation": "If search space is empty, it confirms the element is not found."
  },
  {
    "question": "What does the final output of the Quick Sort partitioning phase look like for array {52, 37, 63, 14, 17, 8, 6, 25} with pivot 25?",
    "codeBlock": "// Partition step rearranges elements around pivot 25",
    "language": "",
    "options": [
      "6 8 17 14 25 63 37 52",
      "25 6 8 17 14 63 37 52",
      "52 37 63 14 17 8 6 25",
      "6 8 14 17 25 52 37 63"
    ],
    "answer": "6 8 17 14 25 63 37 52",
    "explanation": "Elements smaller than pivot move left, pivot placed at final position, and larger elements to the right."
  }
];
