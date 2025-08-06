import { MCQ } from '../../../../../../types';

export const mcq: MCQ[] = [
  {
    "question": "Which of the following memory allocation techniques eliminates external fragmentation?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Segmentation",
      "Fixed partitioning",
      "Contiguous allocation",
      "Paging"
    ],
    "answer": "Paging"
  },
  {
    "question": "What is the primary role of the Memory Management Unit (MMU)?",
    "codeBlock": "",
    "language": "",
    "options": [
      "To translate logical addresses to physical addresses",
      "To generate logical addresses",
      "To store page tables",
      "To manage disk storage"
    ],
    "answer": "To translate logical addresses to physical addresses"
  },
  {
    "question": "Which type of fragmentation occurs in fixed-size partitioning when a process doesn’t completely fill the assigned block?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Logical fragmentation",
      "Internal fragmentation",
      "External fragmentation",
      "Virtual fragmentation"
    ],
    "answer": "Internal fragmentation"
  },
  {
    "question": "In which memory management technique is memory allocated in variable-sized blocks to exactly match the process size?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Dynamic partitioning",
      "Fixed-size partitioning",
      "Paging",
      "Single partition allocation"
    ],
    "answer": "Dynamic partitioning"
  },
  {
    "question": "What happens when a page fault occurs?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A new process is started",
      "The CPU directly accesses the data",
      "The OS loads the required page into RAM",
      "The page table is deleted"
    ],
    "answer": "The OS loads the required page into RAM"
  },
  {
    "question": "Which of the following is a key advantage of virtual memory?",
    "codeBlock": "",
    "language": "",
    "options": [
      "No dynamic allocation",
      "Limited multitasking",
      "Allows larger processes than physical memory",
      "Slower execution"
    ],
    "answer": "Allows larger processes than physical memory"
  },
  {
    "question": "What is the main drawback of the FIFO page replacement algorithm?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It always chooses the newest page",
      "It doesn’t support swapping",
      "It requires complex hardware support",
      "It may lead to Belady’s anomaly"
    ],
    "answer": "It may lead to Belady’s anomaly"
  },
  {
    "question": "Which of the following best describes demand paging?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Loading all program pages at once",
      "Only loading required pages when needed",
      "Allocating continuous blocks to each process",
      "Loading pages based on process priority"
    ],
    "answer": "Only loading required pages when needed"
  },
  {
    "question": "Which of these memory allocation techniques can suffer from external fragmentation?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Contiguous allocation",
      "Paging",
      "Both contiguous allocation and segmentation",
      "Segmentation"
    ],
    "answer": "Both contiguous allocation and segmentation"
  },
  {
    "question": "What is the purpose of page replacement algorithms?",
    "codeBlock": "",
    "language": "",
    "options": [
      "To reduce page faults",
      "To convert logical to physical addresses",
      "To allocate disk space",
      "To increase page faults"
    ],
    "answer": "To reduce page faults"
  },
  {
    "question": "In segmentation, what does each segment represent?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A single word of memory",
      "A logical unit of a program",
      "A fixed-size page",
      "An entire program"
    ],
    "answer": "A logical unit of a program"
  },
  {
    "question": "Which of the following is NOT a type of page replacement algorithm?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Optimal",
      "LRU",
      "FIFO",
      "Random fit"
    ],
    "answer": "Random fit"
  },
  {
    "question": "What is the main disadvantage of segmentation?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Overhead of maintaining segment tables",
      "Always requires fixed-size partitions",
      "Lacks process isolation",
      "Leads to internal fragmentation"
    ],
    "answer": "Overhead of maintaining segment tables"
  },
  {
    "question": "Which technique uses a table to map logical addresses to physical frames?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Segmentation",
      "Paging",
      "Fixed partitioning",
      "Single partition allocation"
    ],
    "answer": "Paging"
  },
  {
    "question": "What is the term for the process of moving allocated blocks to create a single contiguous free block?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Swapping",
      "Compaction",
      "Paging",
      "Segmentation"
    ],
    "answer": "Compaction"
  },
  {
    "question": "What does virtual memory use to extend available memory?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Multiple cores",
      "Secondary storage",
      "Larger RAM chips",
      "Faster CPU"
    ],
    "answer": "Secondary storage"
  },
  {
    "question": "In FIFO, which page is evicted when RAM is full?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Page with lowest priority",
      "Most recently used",
      "Oldest page in memory",
      "Largest page"
    ],
    "answer": "Oldest page in memory"
  },
  {
    "question": "What does the term ‘page table’ refer to?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A mapping from pages to frames",
      "A scheduling table",
      "A table of logical addresses only",
      "A list of all processes"
    ],
    "answer": "A mapping from pages to frames"
  },
  {
    "question": "Which of the following best describes external fragmentation?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Wasted space within allocated blocks",
      "Overlapping of segments",
      "No wasted memory",
      "Wasted space outside of allocated blocks"
    ],
    "answer": "Wasted space outside of allocated blocks"
  },
  {
    "question": "What is a key benefit of flexible partitioning?",
    "codeBlock": "",
    "language": "",
    "options": [
      "No internal fragmentation",
      "No external fragmentation",
      "Simpler than fixed partitioning",
      "Dynamic allocation to exact process size"
    ],
    "answer": "Dynamic allocation to exact process size"
  },
  {
    "question": "What does the term 'compaction' refer to in memory management?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Using a larger page size",
      "Rearranging memory to reduce external fragmentation",
      "Swapping out the oldest page",
      "Page replacement"
    ],
    "answer": "Rearranging memory to reduce external fragmentation"
  },
  {
    "question": "What is the main objective of demand paging?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Minimise initial memory usage by loading only needed pages",
      "Load all program pages at once",
      "Maximise internal fragmentation",
      "Increase page table size"
    ],
    "answer": "Minimise initial memory usage by loading only needed pages"
  },
  {
    "question": "What is an example of external fragmentation?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Unused space scattered between allocated blocks",
      "A process size not fully using a page",
      "Fixed-size blocks of the same size",
      "Data alignment issues"
    ],
    "answer": "Unused space scattered between allocated blocks"
  },
  {
    "question": "Which of the following is NOT an advantage of LRU page replacement algorithm?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Efficiently manages page usage",
      "Tracks recently used pages",
      "Requires minimal hardware support",
      "Reduces page faults in most cases"
    ],
    "answer": "Requires minimal hardware support"
  },
  {
    "question": "Which type of fragmentation can be eliminated by paging?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Logical fragmentation",
      "External fragmentation",
      "Internal fragmentation",
      "Page table fragmentation"
    ],
    "answer": "External fragmentation"
  },
  {
    "question": "What does 'page fault' signify?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A process exceeds its allocated memory",
      "A page is not found in RAM",
      "The CPU stops working",
      "An error in disk allocation"
    ],
    "answer": "A page is not found in RAM"
  },
  {
    "question": "What is the term for dividing memory into fixed-sized pages?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Paging",
      "Segmentation",
      "Dynamic partitioning",
      "Compaction"
    ],
    "answer": "Paging"
  },
  {
    "question": "Which algorithm evicts the least recently accessed page?",
    "codeBlock": "",
    "language": "",
    "options": [
      "FIFO",
      "Optimal",
      "LRU",
      "Random"
    ],
    "answer": "LRU"
  },
  {
    "question": "Which of the following techniques provides process isolation and protection?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Single partition allocation",
      "Paging and segmentation",
      "Fixed partitioning",
      "Contiguous allocation only"
    ],
    "answer": "Paging and segmentation"
  },
  {
    "question": "What is a key advantage of the Optimal Page Replacement algorithm?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Predicts future page accesses",
      "Simple to implement in hardware",
      "Requires no future access information",
      "Has no page faults"
    ],
    "answer": "Predicts future page accesses"
  },
  {
    "question": "What is one key disadvantage of demand paging?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It can increase memory access time",
      "It causes internal fragmentation",
      "It requires a larger disk",
      "It cannot share pages between processes"
    ],
    "answer": "It can increase memory access time"
  },
  {
    "question": "What does the 'relocation register' contain in single partition allocation?",
    "codeBlock": "",
    "language": "",
    "options": [
      "The page table entries",
      "The logical address of the process",
      "The starting physical address of the process",
      "The limit of the allocated partition"
    ],
    "answer": "The starting physical address of the process"
  },
  {
    "question": "Which allocation scheme is simple but does not support multiprogramming?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Single partition allocation",
      "Multiple partition allocation",
      "Segmentation",
      "Paging"
    ],
    "answer": "Single partition allocation"
  },
  {
    "question": "What is the main advantage of flexible (dynamic) partitioning?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Supports multiprogramming",
      "Simpler to implement than fixed partitioning",
      "Allocates memory to exact process size",
      "Eliminates external fragmentation"
    ],
    "answer": "Allocates memory to exact process size"
  },
  {
    "question": "What is the key purpose of the page table?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Manage disk swapping",
      "Store process priority",
      "Translate logical to physical addresses",
      "Track CPU usage"
    ],
    "answer": "Translate logical to physical addresses"
  },
  {
    "question": "What does the term 'page offset' refer to?",
    "codeBlock": "",
    "language": "",
    "options": [
      "The offset within a page frame",
      "The total size of the page table",
      "The start of a new process",
      "The logical address of the next page"
    ],
    "answer": "The offset within a page frame"
  },
  {
    "question": "Which of the following is an example of a real-world use of demand paging?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Data encryption",
      "Web browsing",
      "RAM disk creation",
      "CPU scheduling"
    ],
    "answer": "Web browsing"
  },
  {
    "question": "What is a key feature of segmentation that aligns with programmer's view?",
    "codeBlock": "",
    "language": "",
    "options": [
      "No page faults",
      "Logical division into code, data, stack",
      "Internal fragmentation only",
      "Fixed-size allocation"
    ],
    "answer": "Logical division into code, data, stack"
  },
  {
    "question": "Which of the following best defines virtual memory?",
    "codeBlock": "",
    "language": "",
    "options": [
      "RAM stored on disk",
      "Static memory allocation",
      "Only used in mobile devices",
      "A larger logical memory space than physical RAM"
    ],
    "answer": "A larger logical memory space than physical RAM"
  },
  {
    "question": "What is the primary disadvantage of fixed-size partitioning?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It can cause significant internal fragmentation",
      "It uses variable partition sizes",
      "It requires dynamic address translation",
      "It cannot support multitasking"
    ],
    "answer": "It can cause significant internal fragmentation"
  },
  {
    "question": "What is the main purpose of the Memory Management Unit (MMU) in address translation?",
    "codeBlock": "",
    "language": "",
    "options": [
      "To store disk page tables",
      "To convert physical addresses to logical addresses",
      "To translate logical addresses to physical addresses",
      "To manage CPU registers"
    ],
    "answer": "To translate logical addresses to physical addresses"
  },
  {
    "question": "Which page replacement algorithm chooses the page that will not be used for the longest time in the future?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Optimal",
      "FIFO",
      "LRU",
      "Random"
    ],
    "answer": "Optimal"
  },
  {
    "question": "In which allocation technique does the OS create partitions dynamically based on process size?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Dynamic (flexible) partitioning",
      "Fixed-size partitioning",
      "Paging",
      "Single partition allocation"
    ],
    "answer": "Dynamic (flexible) partitioning"
  },
  {
    "question": "Which of the following is an example of internal fragmentation?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Unused space inside an allocated memory block",
      "Pages swapped out to disk",
      "Non-contiguous memory allocation",
      "Excessive disk swapping"
    ],
    "answer": "Unused space inside an allocated memory block"
  },
  {
    "question": "What is a potential drawback of the FIFO page replacement algorithm?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Thrashing under heavy load",
      "Complex data structure required",
      "Predicts future page usage",
      "Supports only single partition allocation"
    ],
    "answer": "Thrashing under heavy load"
  },
  {
    "question": "What is a segment in segmentation?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A fixed-size block of memory",
      "A logical unit like code, stack or data",
      "A single instruction",
      "A disk partition"
    ],
    "answer": "A logical unit like code, stack or data"
  },
  {
    "question": "Which of the following describes virtual memory accurately?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Physical RAM only",
      "Secondary storage only",
      "Combination of RAM and secondary storage",
      "Memory in CPU cache"
    ],
    "answer": "Combination of RAM and secondary storage"
  },
  {
    "question": "What is the goal of memory compaction?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Increase external fragmentation",
      "Create a large contiguous free block",
      "Create smaller partitions",
      "Load all processes into RAM at once"
    ],
    "answer": "Create a large contiguous free block"
  },
  {
    "question": "What is a characteristic of the Optimal page replacement algorithm?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Does not require future knowledge",
      "Best practical performance",
      "Theoretical model for comparison",
      "Highest page faults"
    ],
    "answer": "Theoretical model for comparison"
  },
  {
    "question": "Which of these best describes demand paging in modern systems?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Loads pages only as needed",
      "Eliminates page faults",
      "Allocates large contiguous blocks",
      "Loads all pages at once"
    ],
    "answer": "Loads pages only as needed"
  },
  {
    "question": "What happens when a program accesses a page not in RAM?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A page fault occurs",
      "A process crash occurs",
      "Data is permanently lost",
      "The CPU halts"
    ],
    "answer": "A page fault occurs"
  },
  {
    "question": "Which of the following is NOT typically part of the memory management responsibilities?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Memory allocation",
      "Disk scheduling",
      "Fragmentation control",
      "Address translation"
    ],
    "answer": "Disk scheduling"
  },
  {
    "question": "What is the main disadvantage of the Optimal page replacement algorithm in real systems?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Complex to implement due to future knowledge requirement",
      "Needs large memory overhead",
      "Doesn’t minimise page faults",
      "No practical applications"
    ],
    "answer": "Complex to implement due to future knowledge requirement"
  },
  {
    "question": "What is one key difference between segmentation and paging?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Segments map logical units, pages do not",
      "Segments are fixed size, pages are variable size",
      "Pages eliminate internal fragmentation",
      "Segments use page tables"
    ],
    "answer": "Segments map logical units, pages do not"
  },
  {
    "question": "What is the function of the limit register in single partition allocation?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Holds the process ID",
      "Sets the maximum size of logical addresses",
      "Points to the last page table entry",
      "Tracks disk I/O"
    ],
    "answer": "Sets the maximum size of logical addresses"
  },
  {
    "question": "What type of fragmentation can happen with variable-sized partitions?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Internal",
      "External",
      "Logical",
      "None"
    ],
    "answer": "External"
  },
  {
    "question": "What is a main benefit of virtual memory in multitasking environments?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Enables processes larger than physical memory",
      "No memory overhead",
      "Allocates huge contiguous blocks",
      "Allows all processes to run in physical RAM"
    ],
    "answer": "Enables processes larger than physical memory"
  },
  {
    "question": "What is the purpose of the relocation register?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Adds the base address to logical addresses",
      "Protects memory from corruption",
      "Translates physical to logical addresses",
      "Stores CPU usage stats"
    ],
    "answer": "Adds the base address to logical addresses"
  },
  {
    "question": "What is a defining feature of multiple partition allocation?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Partitions created dynamically as needed",
      "Fixed-size partitions only",
      "No page faults",
      "Only one process in memory"
    ],
    "answer": "Partitions created dynamically as needed"
  },
  {
    "question": "Which technique divides memory into fixed-size frames and uses a page table for mapping?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Segmentation",
      "Paging",
      "Single partition allocation",
      "Compaction"
    ],
    "answer": "Paging"
  },
  {
    "question": "Which memory management technique divides memory into fixed-size blocks?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Paging",
      "Segmentation",
      "Contiguous Allocation",
      "Fragmentation"
    ],
    "answer": "Paging"
  },
  {
    "question": "What is the purpose of a page fault in memory management?",
    "codeBlock": "",
    "language": "",
    "options": [
      "To allocate memory to a process",
      "To deallocate memory from a process",
      "To handle memory errors",
      "To load a memory page into physical memory"
    ],
    "answer": "To load a memory page into physical memory"
  },
  {
    "question": "Which of the following is NOT a disadvantage of segmentation in memory management?",
    "codeBlock": "",
    "language": "",
    "options": [
      "External fragmentation",
      "High overhead due to maintaining segment tables",
      "Unequal size segments leading to inefficient swapping",
      "No support for dynamic memory allocation"
    ],
    "answer": "No support for dynamic memory allocation"
  },
  {
    "question": "What is the main objective of page replacement algorithms in memory management?",
    "codeBlock": "",
    "language": "",
    "options": [
      "To maximise internal fragmentation",
      "To minimise page faults",
      "To increase memory fragmentation",
      "To reduce memory overhead"
    ],
    "answer": "To minimise page faults"
  },
  {
    "question": "Which memory management algorithm replaces the oldest page present in memory?",
    "codeBlock": "",
    "language": "",
    "options": [
      "LRU (Least Recently Used)",
      "FIFO (First-In-First-Out)",
      "OPR (Optimal Page Replacement)",
      "LFU (Least Frequently Used)"
    ],
    "answer": "FIFO (First-In-First-Out)"
  }
];
