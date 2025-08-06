import { CaseStudy } from '../../../../../../types';

export const case_study: CaseStudy[] = [
  {
    "title": "Efficient Sorting in a Retail Inventory Management System",
    "description": "A retail company manages a vast inventory of products, each with a unique identifier, name, category, and price. The inventory database must frequently be sorted based on different attributes such as product name, price, or category for efficient data retrieval and display on the front end. The existing sorting algorithm used was Bubble Sort, leading to performance issues as the number of products increased. To address these challenges, the development team decided to explore and implement the Merge Sort algorithm, leveraging its divide and conquer approach to improve sorting performance. Merge Sort was chosen due to its stable and predictable O(n log n) time complexity across all cases, ensuring reliable performance even for larger datasets. The team integrated Merge Sort into the inventory management module, which required sorting records stored in arrays and merging them to produce a consistently sorted list of products. In addition to enhancing user experience through faster page loads, the adoption of Merge Sort also improved the efficiency of data synchronization processes, as sorted data could be transferred and updated with minimal overhead. This case study explores the implementation of Merge Sort in the system, challenges faced during integration, and how its properties align with the system’s requirements for stability, speed, and scalability.",
    "codeBlock": "void merge(int arr[], int l, int m, int r) { int i, j, k; int n1 = m - l + 1; int n2 = r - m; int L[n1], R[n2]; for (i = 0; i < n1; i++) L[i] = arr[l + i]; for (j = 0; j < n2; j++) R[j] = arr[m + 1+ j]; i = 0; j = 0; k = l; while (i < n1 && j < n2) { if (L[i] <= R[j]) arr[k++] = L[i++]; else arr[k++] = R[j++]; } while (i < n1) arr[k++] = L[i++]; while (j < n2) arr[k++] = R[j++]; } void mergeSort(int arr[], int l, int r) { if (l < r) { int m = l+(r-l)/2; mergeSort(arr, l, m); mergeSort(arr, m+1, r); merge(arr, l, m, r); } }",
    "language": "C",
    "mcq": [
      {
        "question": "Why was Merge Sort chosen over Bubble Sort for this retail inventory system?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Because Bubble Sort is faster for small datasets",
          "Because Merge Sort has a predictable O(n log n) time complexity",
          "Because Merge Sort uses less memory",
          "Because Bubble Sort is more memory efficient"
        ],
        "answer": "Because Merge Sort has a predictable O(n log n) time complexity"
      },
      {
        "question": "What key feature of Merge Sort benefits the retail system the most?",
        "codeBlock": "",
        "language": "",
        "options": [
          "It uses recursion heavily",
          "It sorts only small data sets",
          "It is stable and maintains the order of equal elements",
          "It requires no merging step"
        ],
        "answer": "It is stable and maintains the order of equal elements"
      },
      {
        "question": "How does the divide and conquer approach of Merge Sort work?",
        "codeBlock": "",
        "language": "",
        "options": [
          "By swapping adjacent elements repeatedly",
          "By dividing the array into halves, sorting and merging",
          "By selecting a pivot element",
          "By comparing each element to the last"
        ],
        "answer": "By dividing the array into halves, sorting and merging"
      },
      {
        "question": "What potential drawback of Merge Sort was noted during implementation?",
        "codeBlock": "",
        "language": "",
        "options": [
          "It requires additional memory space for merging",
          "It is unstable",
          "It sorts data faster but with higher CPU usage",
          "It performs poorly on linked lists"
        ],
        "answer": "It requires additional memory space for merging"
      }
    ],
    "briefs": [
      {
        "question": "Discuss the advantages and disadvantages of using Merge Sort for the inventory management system, particularly in the context of data size and stability requirements.",
        "answer": "Merge Sort is particularly suited for scenarios like the retail inventory management system due to its stable and predictable performance. One of the most significant advantages is its O(n log n) time complexity, which ensures that even large datasets can be sorted in a reasonable amount of time. Stability is another key benefit, as Merge Sort maintains the relative order of equal elements. This is important in a retail inventory system where products may have identical prices or categories, and maintaining their input order can be valuable for display and tracking.\n\nHowever, Merge Sort does come with some disadvantages. The most notable is its extra memory usage. Unlike in-place sorting algorithms like Quick Sort, Merge Sort requires additional space proportional to the size of the array being sorted to store the temporary arrays during the merge phase. This could be a concern in systems with limited memory or when dealing with extremely large datasets.\n\nIn this case study, the system was able to accommodate the memory overhead due to its predictable performance and stability, making it an excellent choice for an inventory system that requires frequent and reliable sorting across various product attributes. The ability of Merge Sort to handle large datasets efficiently outweighs the additional memory consumption in most retail environments, where performance and reliability directly impact user experience and operational efficiency.\n\nThus, while Merge Sort’s memory requirements may limit its use in some embedded systems or memory-constrained environments, in a retail inventory system that prioritizes stable sorting and handles thousands of records, Merge Sort’s advantages clearly align with the system’s needs.",
        "codeBlock": "",
        "language": ""
      },
      {
        "question": "How does the implementation of Merge Sort improve the overall user experience and data synchronization in the retail inventory system?",
        "answer": "The implementation of Merge Sort in the retail inventory system significantly enhances both user experience and data synchronization processes. Merge Sort’s ability to handle large datasets with consistent performance ensures that product listings are sorted rapidly, reducing the wait time for users when browsing or searching for products. This leads to faster page loads and a more seamless user experience on the front end, which is crucial for retaining customers and ensuring that they can find the products they need without delays.\n\nFrom the perspective of data synchronization, Merge Sort ensures that sorted data can be easily transferred or compared with data from other systems or backup servers. Because it produces fully sorted output, the data can be updated incrementally or in bulk with minimal overhead. This is particularly important in a retail environment where inventory levels change frequently, and consistent synchronization between different systems (such as online storefronts, warehouses, and suppliers) is essential.\n\nFurthermore, Merge Sort’s stability guarantees that when sorting based on attributes like product name or category, the order of equal items is preserved. This is beneficial for maintaining a consistent look and feel in the user interface, further contributing to an intuitive and reliable shopping experience. In summary, Merge Sort’s integration aligns well with the retail system’s performance requirements, improving customer satisfaction and ensuring data consistency across different system components.",
        "codeBlock": "",
        "language": ""
      }
    ]
  },
  {
    "title": "Efficient Searching in Large Customer Databases Using Binary Search",
    "description": "A large-scale e-commerce platform manages millions of customer records in a sorted database. The data includes user IDs, names, purchase histories, and loyalty program tiers. As the user base grew, the system faced challenges in rapidly locating specific customer records based on their unique IDs, especially during real-time transactions like order processing and customer support queries.\n\nPreviously, the system relied on Linear Search, which scanned each record sequentially, resulting in high latency as the dataset expanded. To address these challenges, the engineering team implemented Binary Search, a much faster and efficient searching technique that requires the data to be sorted.\n\nBinary Search operates by repeatedly dividing the search interval in half, comparing the target value to the middle element of the interval. If the target matches the middle element, the search ends successfully. Otherwise, if the target is less than the middle element, the search continues in the lower half; if greater, in the upper half. This process drastically reduces the number of comparisons, achieving a time complexity of O(log n), which is ideal for large, sorted datasets.\n\nIncorporating Binary Search into the customer lookup functionality significantly reduced lookup times, improving order processing speed and responsiveness in customer support interactions. This case study explores the implementation of Binary Search in the e-commerce system, the practical considerations of using it, and how it improved operational efficiency and user satisfaction.",
    "codeBlock": "int binarySearch(int arr[], int n, int x) { int left = 0, right = n - 1; while (left <= right) { int mid = left + (right - left) / 2; if (arr[mid] == x) return mid; else if (arr[mid] < x) left = mid + 1; else right = mid - 1; } return -1; }",
    "language": "C",
    "mcq": [
      {
        "question": "Why was Binary Search chosen over Linear Search in this e-commerce system?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Binary Search works for unsorted data",
          "Binary Search is faster for sorted data",
          "Linear Search has lower time complexity",
          "Binary Search can handle duplicate keys better"
        ],
        "answer": "Binary Search is faster for sorted data"
      },
      {
        "question": "What condition must be met for Binary Search to work correctly?",
        "codeBlock": "",
        "language": "",
        "options": [
          "The data must be in random order",
          "The data must be sorted",
          "Data size must be small",
          "Duplicate keys must be removed"
        ],
        "answer": "The data must be sorted"
      },
      {
        "question": "What is the worst-case time complexity of Binary Search?",
        "codeBlock": "",
        "language": "",
        "options": [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n^2)"
        ],
        "answer": "O(log n)"
      },
      {
        "question": "How does Binary Search reduce the search interval in each step?",
        "codeBlock": "",
        "language": "",
        "options": [
          "By scanning every element sequentially",
          "By dividing the interval by two",
          "By skipping every alternate element",
          "By removing duplicate elements"
        ],
        "answer": "By dividing the interval by two"
      }
    ],
    "briefs": [
      {
        "question": "Explain how Binary Search improves the customer lookup performance in the e-commerce system and what are its limitations.",
        "answer": "Binary Search dramatically improves the performance of searching for customer records in the e-commerce system by reducing the number of comparisons needed to locate a specific record. Unlike Linear Search, which scans each element one by one, Binary Search repeatedly divides the search interval in half, quickly eliminating large portions of the dataset from consideration. This leads to a time complexity of O(log n), which is particularly advantageous when dealing with millions of records, as is the case in this e-commerce platform.\n\nBy reducing lookup times, Binary Search ensures that customer queries during order processing or customer service are handled promptly, enhancing the user experience. Fast record retrieval directly impacts operational efficiency, reducing server load and enabling the system to scale more effectively as the customer base grows.\n\nHowever, Binary Search also has limitations. It requires that the data be sorted beforehand, which adds complexity and requires additional maintenance if customer records are frequently updated or added. In scenarios where the dataset is dynamic and frequently modified, the system must ensure that the data remains sorted to preserve the benefits of Binary Search. Otherwise, search accuracy would be compromised.\n\nAdditionally, while Binary Search is excellent for static or rarely updated datasets, for dynamic datasets with constant insertions and deletions, alternative data structures like balanced search trees (e.g., AVL trees) or hash tables may be more suitable as they can maintain sorted order or fast lookup times even with frequent updates.\n\nIn summary, the implementation of Binary Search in the e-commerce system addresses the critical need for speed and efficiency in accessing sorted customer data, aligning perfectly with the performance requirements of real-time operations. Its limitations can be managed through careful data maintenance practices, ensuring it continues to deliver consistent performance and reliability in customer lookups.",
        "codeBlock": "",
        "language": ""
      },
      {
        "question": "Discuss how the integration of Binary Search enhances the customer support and order processing experience in the e-commerce platform.",
        "answer": "The integration of Binary Search in the e-commerce system significantly enhances both the customer support experience and order processing operations. For customer support agents, being able to retrieve a customer’s record instantly is crucial for providing quick and effective assistance. With Binary Search, support representatives can access customer details in logarithmic time, ensuring minimal delay and higher customer satisfaction.\n\nFor order processing, Binary Search contributes to faster verification of customer details, which is essential when orders are being placed or updated in real time. Faster access to data means that the system can handle a higher volume of orders without bottlenecks, directly improving overall throughput.\n\nIn terms of operational efficiency, Binary Search reduces the load on server resources by minimizing the number of comparisons needed to find a specific customer record. This not only speeds up individual queries but also allows the system to scale more effectively as the user base grows.\n\nHowever, it’s important to note that the benefits of Binary Search hinge on the data being sorted. Any updates or insertions to the customer database must ensure that the sorting is maintained to prevent errors in search results. In the e-commerce platform, this is typically managed by using scheduled updates or automatic sorting mechanisms that maintain order integrity.\n\nOverall, Binary Search provides a scalable and efficient solution for real-time data access in the customer-focused modules of the platform. Its integration supports the dual goals of operational efficiency and customer satisfaction, making it a key component in delivering a seamless and responsive e-commerce experience.",
        "codeBlock": "",
        "language": ""
      }
    ]
  },
  {
    "title": "Optimizing Hash-Based User Session Tracking in a Large Web Application",
    "description": "A large-scale web application handles millions of concurrent user sessions and needs to manage session data efficiently. Previously, the application stored session data in a flat array, requiring sequential search to locate or update a session, leading to performance bottlenecks as the user base expanded. To resolve this, the engineering team implemented hashing with separate chaining to store and manage session data effectively.\n\nIn the new implementation, each session’s unique ID (generated during login) is hashed using a modulo operation, mapping it to a specific index in the hash table. If multiple sessions hash to the same index (a collision), separate chaining ensures that all sessions are stored in a linked list at that index. This allows the application to retrieve, update, or delete session data in near-constant time, regardless of the total number of active sessions.\n\nThe choice of separate chaining was crucial because the exact number of concurrent sessions is unpredictable, and the system needed to handle collisions gracefully without resizing the table too frequently. By using a good hash function and maintaining balanced linked lists, the performance of session tracking improved drastically.\n\nThis case study explores the implementation details of hashing with separate chaining in the session management module, the practical challenges encountered, and how this approach aligns with the system’s scalability and real-time performance needs.",
    "codeBlock": "int hashcode(int key) { return (key % max); } void insert(int key, int value) { int index = hashcode(key); struct node *item = malloc(sizeof(struct node)); item->key = key; item->value = value; item->next = NULL; if (array[index].head == NULL) { array[index].head = item; array[index].tail = item; } else { array[index].tail->next = item; array[index].tail = item; } }",
    "language": "C",
    "mcq": [
      {
        "question": "What is the main reason for using separate chaining in this session management system?",
        "codeBlock": "",
        "language": "",
        "options": [
          "It sorts sessions by session ID",
          "It allows handling collisions using linked lists",
          "It does not require a hash function",
          "It ensures session IDs are always unique"
        ],
        "answer": "It allows handling collisions using linked lists"
      },
      {
        "question": "How does the hash function contribute to session tracking in this system?",
        "codeBlock": "",
        "language": "",
        "options": [
          "By encrypting session data",
          "By calculating an index for each session ID",
          "By sorting sessions alphabetically",
          "By storing data in sequential order"
        ],
        "answer": "By calculating an index for each session ID"
      },
      {
        "question": "What would happen if the hash function is poor and creates too many collisions?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Performance would degrade due to longer linked lists",
          "Sessions would be lost",
          "All sessions would be stored at index 0",
          "No effect, as collisions are not possible"
        ],
        "answer": "Performance would degrade due to longer linked lists"
      },
      {
        "question": "Why is separate chaining a good choice for unpredictable session counts?",
        "codeBlock": "",
        "language": "",
        "options": [
          "Because it requires no extra memory",
          "Because it can store unlimited sessions per index using linked lists",
          "Because it sorts sessions for fast searching",
          "Because it uses sorting to avoid collisions"
        ],
        "answer": "Because it can store unlimited sessions per index using linked lists"
      }
    ],
    "briefs": [
      {
        "question": "Explain the advantages of using hashing with separate chaining for managing user sessions in a high-traffic web application.",
        "answer": "Using hashing with separate chaining for managing user sessions in a high-traffic web application provides several critical advantages that directly impact system performance and scalability. One key benefit is **constant-time average-case access** (O(1)) for retrieving, updating, and deleting session data. As the application’s user base grows, separate chaining ensures that performance remains consistent by distributing sessions across different buckets based on the hash value.\n\nSeparate chaining is particularly effective for handling collisions in dynamic environments where the number of active sessions can fluctuate significantly. When multiple session IDs map to the same index, the linked list at that index stores all those sessions, avoiding data loss and ensuring continued access. This flexibility means the system doesn’t need to resize the hash table frequently, which could be expensive in real-time applications.\n\nAnother advantage is **graceful handling of unpredictable data volumes**. Since each linked list can grow as needed, separate chaining adapts to spikes in user activity without crashing or slowing down drastically. This adaptability is crucial in web applications that experience variable user loads throughout the day.\n\nHowever, it’s important to note that while separate chaining helps manage collisions, it does add some memory overhead due to linked list pointers. Also, if the hash function is not well-designed, excessive collisions could lead to longer linked lists and degrade performance to linear time in the worst case.\n\nIn summary, separate chaining in hashing offers a robust, scalable solution for session management in large web applications. It strikes a balance between performance and memory usage, ensuring reliable and fast session data access even under unpredictable workloads.",
        "codeBlock": "",
        "language": ""
      },
      {
        "question": "Discuss potential challenges and mitigation strategies when using separate chaining for session management in a live web application.",
        "answer": "While separate chaining is an effective method for handling collisions in a hash table, there are several challenges when implementing it in a live web application for session management. One primary challenge is **managing memory overhead** due to the use of linked lists for storing collisions. Since each linked list node requires additional memory for pointers, the total memory footprint of the system increases, particularly when there are many collisions.\n\nAnother challenge is **performance degradation in case of poor hashing**. If the hash function does not distribute session IDs evenly across the table, it can result in clustering of sessions in certain buckets. This leads to longer linked lists and increased search time, potentially negating the benefits of using a hash table.\n\nTo mitigate these challenges, the following strategies can be employed:\n\n1. **Using a good hash function**: The choice of hash function is crucial. A well-designed hash function minimizes collisions by evenly distributing session IDs across the hash table’s buckets.\n\n2. **Monitoring and rehashing**: Regularly monitor the load factor of the hash table. If it exceeds a threshold (commonly 0.75), rehashing (doubling the table size and redistributing elements) can help maintain performance.\n\n3. **Memory management**: Implement garbage collection or session expiration policies to remove inactive sessions from the hash table. This reduces memory usage and improves performance.\n\n4. **Balancing table size**: Initially allocating a larger hash table can reduce the need for frequent rehashing and improve the distribution of session data.\n\nBy adopting these strategies, web application developers can ensure that hashing with separate chaining continues to provide fast and reliable access to session data, even under unpredictable and high-traffic conditions.",
        "codeBlock": "",
        "language": ""
      }
    ]
  },
  {
    "title": "Implementing Shell Sort for Optimizing Student Records Sorting in a University Portal",
    "description": "A university’s student portal manages data for thousands of students, including details like student IDs, names, grades, and course enrollments. The system frequently needs to sort student records based on different attributes, such as names alphabetically or grades in ascending order, to support academic administration and display features like leaderboards and reports. Initially, the system used Insertion Sort, which performed well on small datasets but became inefficient as the number of records grew.\n\nTo overcome these limitations, the development team decided to implement **Shell Sort**, an enhanced version of Insertion Sort. Shell Sort reduces large shifts of elements by initially comparing distant elements and progressively reducing the gap between elements in subsequent passes. This approach significantly improves performance compared to Insertion Sort, especially for larger datasets.\n\nThe team used a gap sequence based on Knuth’s formula (h = h * 3 + 1) to determine the intervals for comparisons. By applying Shell Sort, they observed substantial improvements in data retrieval times and overall system responsiveness.\n\nThis case study examines how Shell Sort was integrated into the student portal, the algorithm’s benefits and limitations in this context, and provides practical insights into the performance gains achieved through its deployment.",
    "codeBlock": "void shellSort(int arr[], int n) { for (int gap = n/2; gap > 0; gap /= 2) { for (int i = gap; i < n; i++) { int temp = arr[i]; int j; for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) arr[j] = arr[j - gap]; arr[j] = temp; } } }",
    "language": "C",
    "mcq": [
      {
        "question": "Why was Shell Sort chosen over Insertion Sort for the student portal?",
        "codeBlock": "",
        "language": "",
        "options": [
          "It uses linked lists to store data",
          "It sorts data in reverse order by default",
          "It reduces the large shifts of distant elements before final pass",
          "It uses less memory for large datasets"
        ],
        "answer": "It reduces the large shifts of distant elements before final pass",
        "explanation": "Shell Sort minimizes the number of shifts by sorting distant elements early, improving overall performance."
      },
      {
        "question": "What role does the gap sequence play in Shell Sort?",
        "codeBlock": "",
        "language": "",
        "options": [
          "It determines which records are ignored",
          "It decides the distance between elements to compare",
          "It controls the recursion depth",
          "It limits the number of sorting passes"
        ],
        "answer": "It decides the distance between elements to compare",
        "explanation": "The gap sequence defines how far apart the elements being compared are in each pass."
      },
      {
        "question": "What is the worst-case time complexity of Shell Sort?",
        "codeBlock": "",
        "language": "",
        "options": [
          "O(n)",
          "O(n log n)",
          "O(n^2)",
          "O(1)"
        ],
        "answer": "O(n^2)",
        "explanation": "In the worst case, Shell Sort can degrade to quadratic time complexity, similar to Insertion Sort."
      },
      {
        "question": "How does Shell Sort impact the sorting of already nearly-sorted data?",
        "codeBlock": "",
        "language": "",
        "options": [
          "It slows down significantly",
          "It performs almost like Insertion Sort with high speed",
          "It fails to sort properly",
          "It requires additional arrays for sorting"
        ],
        "answer": "It performs almost like Insertion Sort with high speed",
        "explanation": "For nearly-sorted data, Shell Sort is very fast, similar to Insertion Sort’s best-case performance."
      }
    ],
    "briefs": [
      {
        "question": "Discuss how Shell Sort specifically addresses the challenges faced by the student portal’s large dataset sorting requirements, including its stability and performance considerations.",
        "answer": "Shell Sort is particularly effective for the student portal because it addresses the primary challenge of efficiently sorting large datasets that exceed the practical capabilities of simpler algorithms like Insertion Sort. In the context of the portal, the data—such as student grades and names—needs to be sorted dynamically for various reports and leaderboards.\n\nUnlike Insertion Sort, which struggles with large shifts when small elements are far from their final positions, Shell Sort tackles this by initially comparing and moving elements that are far apart. This early movement of distant elements ensures that during the final passes (with smaller gaps), fewer swaps are needed. This significantly reduces the number of total comparisons and data movements.\n\nAnother key aspect is performance stability. Although Shell Sort has a worst-case complexity of O(n^2), in practice, it performs much better on real-world data that often has some inherent order (e.g., students already roughly sorted by enrollment date). This makes it a robust choice for the portal, offering performance closer to O(n log n) for moderately-sized datasets.\n\nOne limitation of Shell Sort is that it is not stable; equal elements may change their relative order after sorting. However, in the case of the student portal—where the primary concern is sorting by numeric grades or alphabetical names—stability is not always a critical requirement.\n\nUltimately, Shell Sort provides an efficient, adaptable solution that bridges the gap between basic sorting methods and more complex algorithms like Quick Sort or Merge Sort. Its ease of implementation and significant performance boost over Insertion Sort make it an ideal fit for sorting the large and dynamic datasets of the university’s student portal.",
        "codeBlock": "",
        "language": ""
      },
      {
        "question": "Solve a coding problem based on this case study: Implement Shell Sort to sort an array of student scores in ascending order. Provide the implementation and explain how the algorithm reduces the total number of shifts compared to Insertion Sort.",
        "answer": "Let’s solve the problem by implementing Shell Sort for an array of student scores.\n\n```c\n#include <stdio.h>\n\nvoid shellSort(int arr[], int n) {\n    for (int gap = n/2; gap > 0; gap /= 2) {\n        for (int i = gap; i < n; i++) {\n            int temp = arr[i];\n            int j;\n            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)\n                arr[j] = arr[j - gap];\n            arr[j] = temp;\n        }\n    }\n}\n\nint main() {\n    int scores[] = {72, 90, 45, 68, 55, 89, 100};\n    int n = sizeof(scores)/sizeof(scores[0]);\n    shellSort(scores, n);\n    printf(\"Sorted scores: \");\n    for (int i = 0; i < n; i++) printf(\"%d \", scores[i]);\n    return 0;\n}\n```\n\n**Explanation:**\n\nShell Sort begins with a large gap (half the array size) and sorts elements that are far apart. This drastically reduces the number of large shifts required, as distant elements are moved closer to their final positions early on. In subsequent passes, the gap is reduced, and the array becomes increasingly sorted. By the time the gap is 1 (equivalent to Insertion Sort), the array is nearly sorted, requiring minimal movement of elements. This leads to a more efficient overall sorting process compared to traditional Insertion Sort, especially for larger datasets like the student scores in this example.",
        "codeBlock": "void shellSort(int arr[], int n) { for (int gap = n/2; gap > 0; gap /= 2) { for (int i = gap; i < n; i++) { int temp = arr[i]; int j; for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) arr[j] = arr[j - gap]; arr[j] = temp; } } }",
        "language": "C",
        "explanation": "This C program demonstrates how Shell Sort’s gap-based comparisons lead to fewer overall shifts, improving performance for larger datasets."
      }
    ]
  }
];
