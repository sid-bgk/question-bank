import { Brief } from '../../../../../../types';

export const brief: Brief[] = [
  {
    "question": "What are the key functions of an operating system?",
    "answer": "The key functions of an operating system include process management, memory management, file system management, device management, and providing a user interface. It ensures efficient utilization of system resources and enables users to interact with the system through a graphical or command-line interface."
  },
  {
    "question": "What is a real-time operating system (RTOS)?",
    "answer": "A real-time operating system (RTOS) is designed to process data and execute tasks within a defined time constraint. It is commonly used in applications requiring precise timing, such as embedded systems, robotics, and medical devices. RTOS provides predictable response times and ensures task scheduling based on priority."
  },
  {
    "question": "What is the purpose of process scheduling in an operating system?",
    "answer": "Process scheduling is the function of an operating system that determines the order in which processes are executed by the CPU. It ensures fair allocation of resources, reduces response time, and maximizes CPU utilization. Common scheduling algorithms include First-Come-First-Serve (FCFS), Round-Robin, and Shortest Job Next (SJN)."
  },
  {
    "question": "What is the difference between multiprogramming and multitasking?",
    "answer": "Multiprogramming allows multiple programs to reside in memory and execute concurrently, improving CPU utilization by switching between processes. Multitasking, on the other hand, enables users to run multiple tasks simultaneously by rapidly switching between them, giving the illusion of parallel execution."
  },
  {
    "question": "What are the main types of memory management techniques used in operating systems?",
    "answer": "The main memory management techniques include paging, segmentation, and virtual memory. Paging divides memory into fixed-size blocks to prevent fragmentation, while segmentation divides memory based on logical units. Virtual memory allows processes to execute even if they do not fit entirely in physical memory by using disk space as an extension."
  }
];
