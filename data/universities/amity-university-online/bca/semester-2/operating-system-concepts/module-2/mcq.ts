import { MCQ } from '../../../../../../types';

export const mcq: MCQ[] = [
  {
    "question": "Which of the following best describes a process in an operating system?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A program in execution with allocated resources",
      "A static set of instructions waiting to be executed",
      "A method for managing files",
      "A hardware unit responsible for computation"
    ],
    "answer": "A program in execution with allocated resources"
  },
  {
    "question": "In the analogy of cooking meals, what does a thread represent?",
    "codeBlock": "",
    "language": "",
    "options": [
      "The entire cooking session",
      "A recipe stored in a cookbook",
      "A task within the cooking session, like boiling water",
      "A separate kitchen used for another meal"
    ],
    "answer": "A task within the cooking session, like boiling water"
  },
  {
    "question": "Which memory segment stores dynamically allocated data structures during runtime?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Stack",
      "Text Segment",
      "Heap",
      "Data Segment"
    ],
    "answer": "Heap"
  },
  {
    "question": "Which of the following is NOT a characteristic of a process?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Execution of instructions",
      "Possession of resources",
      "Direct access to other processes' memory",
      "Concurrency with other processes"
    ],
    "answer": "Direct access to other processes' memory"
  },
  {
    "question": "What does the 'Program Counter' (PC) in a Process Control Block represent?",
    "codeBlock": "",
    "language": "",
    "options": [
      "The ID of the process owner",
      "The address of the next instruction to execute",
      "A pointer to the PCB of the next process",
      "The amount of memory allocated to the process"
    ],
    "answer": "The address of the next instruction to execute"
  },
  {
    "question": "Which of the following is an example of an I/O-bound process?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Scientific simulations with complex calculations",
      "Downloading large files from the internet",
      "Performing mathematical operations on matrices",
      "3D rendering of graphics"
    ],
    "answer": "Downloading large files from the internet"
  },
  {
    "question": "What is the main purpose of the Process Control Block (PCB)?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Facilitate process communication",
      "Store process-related information for management and control",
      "Manage user permissions and access",
      "Allocate disk space for processes"
    ],
    "answer": "Store process-related information for management and control"
  },
  {
    "question": "Which process state represents a process waiting for a specific event like I/O completion?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Running",
      "New",
      "Terminated",
      "Waiting"
    ],
    "answer": "Waiting"
  },
  {
    "question": "Which of the following correctly defines 'context switching' in an operating system?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Transferring data between two storage devices",
      "Switching between different hardware devices",
      "Saving the state of one process and loading another process's state",
      "Executing instructions from multiple processes at once"
    ],
    "answer": "Saving the state of one process and loading another process's state"
  },
  {
    "question": "Which of the following is a primary trigger for context switching?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Process termination",
      "Lack of system resources",
      "User login request",
      "Process ownership change"
    ],
    "answer": "Process termination"
  },
  {
    "question": "Which of these IPC methods uses a shared memory region for communication between processes?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Pipes",
      "Shared Memory",
      "Message Queues",
      "Sockets"
    ],
    "answer": "Shared Memory"
  },
  {
    "question": "What is the key role of the CPU scheduler in an operating system?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Allocating disk space",
      "Managing file storage and retrieval",
      "Deciding which process will run next on the CPU",
      "Coordinating process communication"
    ],
    "answer": "Deciding which process will run next on the CPU"
  },
  {
    "question": "Which of the following is a key advantage of the Round Robin scheduling algorithm?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Minimises average waiting time",
      "Favors long processes over short ones",
      "Provides fairness by allocating equal time slices",
      "Minimises turnaround time for CPU-bound processes"
    ],
    "answer": "Provides fairness by allocating equal time slices"
  },
  {
    "question": "What is the key difference between preemptive and non-preemptive scheduling?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Preemptive scheduling does not allow process interruption",
      "Non-preemptive scheduling can forcibly interrupt a running process",
      "Preemptive scheduling allows a process to be interrupted and moved to the ready state",
      "Non-preemptive scheduling ensures processes run in any random order"
    ],
    "answer": "Preemptive scheduling allows a process to be interrupted and moved to the ready state"
  },
  {
    "question": "Which of the following best describes a 'safe state' in deadlock avoidance?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A state where processes share the same resource without conflict",
      "A state where processes can finish in some sequence without deadlock",
      "A state where processes wait indefinitely for resources",
      "A state where processes are forcibly terminated to avoid deadlock"
    ],
    "answer": "A state where processes can finish in some sequence without deadlock"
  },
  {
    "question": "Which of the following is NOT a technique to prevent deadlocks?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Hold and Wait",
      "Circular Wait Prevention",
      "Resource Allocation Ordering",
      "No Preemption Policy"
    ],
    "answer": "Hold and Wait"
  },
  {
    "question": "Which of the following is an example of a scheduling algorithm that uses priority levels?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Round Robin",
      "First-Come, First-Served (FCFS)",
      "Priority Scheduling",
      "Shortest Job First (SJF)"
    ],
    "answer": "Priority Scheduling"
  },
  {
    "question": "What does the term 'waiting time' refer to in process scheduling?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Time a process spends using the CPU",
      "Time taken to complete I/O operations",
      "Time a process waits in the ready queue before execution",
      "Total time taken by the process from start to finish"
    ],
    "answer": "Time a process waits in the ready queue before execution"
  },
  {
    "question": "In which scenario would a cycle in a resource allocation graph not lead to a deadlock?",
    "codeBlock": "",
    "language": "",
    "options": [
      "When there is only one instance of each resource",
      "When resources are allocated in a circular fashion",
      "When multiple instances of resources exist and are available to break the cycle",
      "When all processes have the same priority"
    ],
    "answer": "When multiple instances of resources exist and are available to break the cycle"
  },
  {
    "question": "Which condition for deadlock involves a process holding resources while requesting new ones?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Circular Wait",
      "No Preemption",
      "Hold and Wait",
      "Mutual Exclusion"
    ],
    "answer": "Hold and Wait"
  },
  {
    "question": "What is the primary focus of deadlock avoidance techniques?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Ensuring the system remains in a safe state",
      "Terminating all processes to free resources",
      "Allowing processes to hold resources indefinitely",
      "Maximising CPU utilisation only"
    ],
    "answer": "Ensuring the system remains in a safe state"
  },
  {
    "question": "Which of the following IPC techniques involves processes writing and reading from a queue?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Pipes",
      "Message Queues",
      "Shared Memory",
      "Direct Communication"
    ],
    "answer": "Message Queues"
  },
  {
    "question": "What does the term 'turnaround time' refer to in process scheduling?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Total CPU time used by a process",
      "Time spent waiting in the ready queue",
      "Total time from process submission to completion",
      "Time taken by the CPU to start executing a process"
    ],
    "answer": "Total time from process submission to completion"
  },
  {
    "question": "Which of the following represents a condition that can cause a deadlock if not handled?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Resource Sharing",
      "No Preemption",
      "Data Consistency",
      "Process Synchronisation"
    ],
    "answer": "No Preemption"
  },
  {
    "question": "Which type of scheduling algorithm always ensures the process with the shortest burst time is executed next?",
    "codeBlock": "",
    "language": "",
    "options": [
      "First-Come, First-Served (FCFS)",
      "Shortest Job First (SJF)",
      "Round Robin",
      "Multilevel Queue Scheduling"
    ],
    "answer": "Shortest Job First (SJF)"
  },
  {
    "question": "In the context of process scheduling, what is a 'dispatcher' responsible for?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Saving and restoring process states during context switching",
      "Selecting the next process to execute",
      "Managing file system resources",
      "Handling I/O device requests"
    ],
    "answer": "Saving and restoring process states during context switching"
  },
  {
    "question": "What is the effect of frequent context switching in an operating system?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Improves CPU utilisation significantly",
      "Increases overhead and can reduce performance",
      "Eliminates process waiting times",
      "Guarantees no deadlock in the system"
    ],
    "answer": "Increases overhead and can reduce performance"
  },
  {
    "question": "Which attribute in the PCB specifies the user associated with the process?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Program Counter",
      "User ID (UID)",
      "Priority",
      "Stack Pointer"
    ],
    "answer": "User ID (UID)"
  },
  {
    "question": "What kind of process usually runs in the background without user interaction?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Foreground Process",
      "Daemon Process",
      "Parent Process",
      "CPU-bound Process"
    ],
    "answer": "Daemon Process"
  },
  {
    "question": "Which of the following is a key advantage of using monitors for synchronisation?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Eliminates all possible deadlocks",
      "Encapsulates shared data with controlled access procedures",
      "Allows direct memory access by processes",
      "Prevents context switching completely"
    ],
    "answer": "Encapsulates shared data with controlled access procedures"
  },
  {
    "question": "Which of the following describes the 'waiting' state of a process?",
    "codeBlock": "",
    "language": "",
    "options": [
      "The process is actively executing",
      "The process is terminated and removed from memory",
      "The process is ready to run but waiting for CPU allocation",
      "The process is paused until an external event completes"
    ],
    "answer": "The process is paused until an external event completes"
  },
  {
    "question": "What is the primary goal of the 'long-term scheduler'?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Manages the I/O devices",
      "Determines which jobs are admitted into the system",
      "Allocates memory to all processes",
      "Handles interprocess communication"
    ],
    "answer": "Determines which jobs are admitted into the system"
  },
  {
    "question": "Which of these describes the 'priority' attribute in a PCB?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It stores the execution time of the process",
      "It represents the current stack pointer value",
      "It determines the order in which processes are scheduled",
      "It stores the data segment address of the process"
    ],
    "answer": "It determines the order in which processes are scheduled"
  },
  {
    "question": "Which of these is a disadvantage of the First-Come, First-Served (FCFS) scheduling algorithm?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It causes high context switching overhead",
      "It can lead to a convoy effect, causing long waiting times for shorter processes",
      "It does not allow process termination",
      "It prevents user interaction in the system"
    ],
    "answer": "It can lead to a convoy effect, causing long waiting times for shorter processes"
  },
  {
    "question": "In process management, what does 'CPU-bound process' refer to?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A process that waits for input/output operations",
      "A process that primarily uses external devices",
      "A process that spends most of its time using the CPU for computations",
      "A process that only runs in the background"
    ],
    "answer": "A process that spends most of its time using the CPU for computations"
  },
  {
    "question": "Which of the following techniques helps prevent 'hold and wait' in deadlock prevention?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Processes request all resources before execution begins",
      "Processes hold resources indefinitely",
      "Processes preempt resources from others forcibly",
      "Processes always share resources with other processes"
    ],
    "answer": "Processes request all resources before execution begins"
  },
  {
    "question": "Which type of process is most likely to experience starvation under priority scheduling?",
    "codeBlock": "",
    "language": "",
    "options": [
      "High-priority processes",
      "CPU-bound processes",
      "Low-priority processes",
      "Foreground processes"
    ],
    "answer": "Low-priority processes"
  },
  {
    "question": "In which process state are all required resources allocated and the process is waiting for CPU time?",
    "codeBlock": "",
    "language": "",
    "options": [
      "New",
      "Ready",
      "Terminated",
      "Running"
    ],
    "answer": "Ready"
  },
  {
    "question": "Which condition in deadlock is addressed by using a strict ordering of resource allocation?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Mutual Exclusion",
      "Hold and Wait",
      "Circular Wait",
      "No Preemption"
    ],
    "answer": "Circular Wait"
  },
  {
    "question": "Which of the following is true about 'interprocess communication' (IPC) in operating systems?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It allows processes to share data and coordinate actions",
      "It allocates memory segments to processes",
      "It determines the execution priority of processes",
      "It only involves direct process communication"
    ],
    "answer": "It allows processes to share data and coordinate actions"
  },
  {
    "question": "What is the main purpose of the 'medium-term scheduler' in operating systems?",
    "codeBlock": "",
    "language": "",
    "options": [
      "To swap processes in and out of memory to manage multiprogramming",
      "To handle direct communication between processes",
      "To manage disk I/O operations",
      "To allocate CPU time to the highest priority processes only"
    ],
    "answer": "To swap processes in and out of memory to manage multiprogramming"
  },
  {
    "question": "Which of the following is a typical responsibility of the short-term scheduler?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Determine long-term job admissions",
      "Select which ready process will execute next",
      "Manage file storage and access",
      "Monitor network traffic between computers"
    ],
    "answer": "Select which ready process will execute next"
  },
  {
    "question": "What is a primary drawback of using context switching in an operating system?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It guarantees that all processes complete at the same time",
      "It increases CPU cache efficiency",
      "It introduces overhead, potentially reducing system performance",
      "It allows processes to directly share their memory spaces"
    ],
    "answer": "It introduces overhead, potentially reducing system performance"
  },
  {
    "question": "Which of the following is an example of a foreground process?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A system backup running without user interaction",
      "A user’s text editor application actively in use",
      "A daemon service handling print jobs",
      "A virus scanner running in the background"
    ],
    "answer": "A user’s text editor application actively in use"
  },
  {
    "question": "What happens when the ‘no preemption’ condition of deadlock is violated?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Resources can be forcibly taken from processes to resolve conflicts",
      "Processes will never experience waiting times",
      "Deadlocks will become more common",
      "Processes are isolated in separate memory spaces"
    ],
    "answer": "Resources can be forcibly taken from processes to resolve conflicts"
  },
  {
    "question": "In the context of process scheduling, what does the term 'response time' refer to?",
    "codeBlock": "",
    "language": "",
    "options": [
      "The time it takes to execute a complete process",
      "The total time a process waits for input/output",
      "The time from a request’s submission until the first response is produced",
      "The time a process spends on CPU computations"
    ],
    "answer": "The time from a request’s submission until the first response is produced"
  },
  {
    "question": "Which of the following is a synchronisation primitive that acts like a counter for controlling access to resources?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Mutex",
      "Semaphore",
      "Process Control Block",
      "Program Counter"
    ],
    "answer": "Semaphore"
  },
  {
    "question": "Which of the following is a potential consequence of repeated preemption of the same process?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Starvation of that process",
      "Complete elimination of deadlocks",
      "Elimination of waiting time for that process",
      "Guaranteed resource allocation for that process"
    ],
    "answer": "Starvation of that process"
  },
  {
    "question": "Which of the following statements best describes a 'system process'?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A process that is only visible to the user",
      "A process created by user applications to perform simple tasks",
      "A process that is essential for operating system operations",
      "A process that requires no CPU time"
    ],
    "answer": "A process that is essential for operating system operations"
  },
  {
    "question": "What is the main purpose of the resource allocation graph in deadlock detection?",
    "codeBlock": "",
    "language": "",
    "options": [
      "To visualise memory usage for a process",
      "To track resource requests and assignments for deadlock analysis",
      "To track user logins and activity",
      "To schedule processes in FIFO order"
    ],
    "answer": "To track resource requests and assignments for deadlock analysis"
  },
  {
    "question": "What is the effect of 'priority inversion' in synchronisation mechanisms?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It allows low-priority processes to complete faster",
      "It can delay high-priority processes due to resource locks by lower-priority ones",
      "It completely eliminates deadlocks in a system",
      "It ensures that only the highest-priority processes can access resources"
    ],
    "answer": "It can delay high-priority processes due to resource locks by lower-priority ones"
  },
  {
    "question": "In Round Robin scheduling, what is the term for the fixed CPU time allocated to each process?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Burst time",
      "Time quantum",
      "Priority number",
      "Response window"
    ],
    "answer": "Time quantum"
  },
  {
    "question": "What is the primary purpose of inter-process communication (IPC)?",
    "codeBlock": "",
    "language": "",
    "options": [
      "To speed up context switching",
      "To enable processes to share data and coordinate actions",
      "To permanently allocate resources to processes",
      "To ensure processes cannot access each other's data"
    ],
    "answer": "To enable processes to share data and coordinate actions"
  },
  {
    "question": "Which of the following is an advantage of multilevel queue scheduling?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It guarantees zero context switching overhead",
      "It provides flexibility in managing different types of processes",
      "It eliminates starvation completely",
      "It allows direct memory access by processes"
    ],
    "answer": "It provides flexibility in managing different types of processes"
  },
  {
    "question": "Which of these processes can typically be swapped out by the medium-term scheduler?",
    "codeBlock": "",
    "language": "",
    "options": [
      "High-priority real-time processes",
      "Interactive foreground applications",
      "Background or low-priority processes",
      "Processes executing direct I/O operations"
    ],
    "answer": "Background or low-priority processes"
  },
  {
    "question": "In which scheduling algorithm do processes move between multiple queues with different policies?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Round Robin",
      "First-Come, First-Served (FCFS)",
      "Multilevel Feedback Queue Scheduling",
      "Shortest Job First (SJF)"
    ],
    "answer": "Multilevel Feedback Queue Scheduling"
  },
  {
    "question": "Which synchronisation mechanism allows exclusive access to shared resources by only one process at a time?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Semaphore",
      "Mutex",
      "Shared Memory",
      "Dispatcher"
    ],
    "answer": "Mutex"
  },
  {
    "question": "What is the primary goal of 'deadlock prevention' strategies?",
    "codeBlock": "",
    "language": "",
    "options": [
      "To allow resource sharing at all times",
      "To ensure no deadlock conditions can occur simultaneously",
      "To forcibly terminate running processes",
      "To allocate memory to processes dynamically"
    ],
    "answer": "To ensure no deadlock conditions can occur simultaneously"
  },
  {
    "question": "Which of the following is NOT a method for detecting or resolving deadlocks?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Resource preemption",
      "Context switching",
      "Process termination",
      "Deadlock detection algorithm"
    ],
    "answer": "Context switching"
  },
  {
    "question": "What is a major disadvantage of using 'resource preemption' to break a deadlock?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It is easy to implement and requires minimal system resources",
      "It can result in data inconsistency and requires rollback",
      "It guarantees that no processes will be affected by the preemption",
      "It always preserves the work done by the preempted process"
    ],
    "answer": "It can result in data inconsistency and requires rollback"
  },
  {
    "question": "What is the function of a Process Control Block (PCB)?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Facilitates interprocess communication",
      "Stores information about a process",
      "Allocates CPU resources",
      "Manages disk I/O operations"
    ],
    "answer": "Stores information about a process"
  },
  {
    "question": "Which component is responsible for selecting processes for execution on the CPU?",
    "codeBlock": "",
    "language": "",
    "options": [
      "PCB",
      "CPU Scheduler",
      "Interprocess Communication mechanism",
      "Memory Manager"
    ],
    "answer": "CPU Scheduler"
  },
  {
    "question": "What is the purpose of Interprocess Communication (IPC)?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Facilitates communication and coordination between processes",
      "Allocates memory resources to processes",
      "Manages disk storage operations",
      "Determines process priorities"
    ],
    "answer": "Facilitates communication and coordination between processes"
  },
  {
    "question": "What is deadlock in process management?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A situation where a process completes its execution",
      "A situation where two or more processes are unable to proceed due to resource contention",
      "A mechanism for preventing process execution",
      "A technique for scheduling processes"
    ],
    "answer": "A situation where two or more processes are unable to proceed due to resource contention"
  },
  {
    "question": "Which technique aims to eliminate one of the necessary conditions for deadlock?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Deadlock detection",
      "Deadlock avoidance",
      "Deadlock recovery",
      "Deadlock prevention"
    ],
    "answer": "Deadlock prevention"
  }
];
