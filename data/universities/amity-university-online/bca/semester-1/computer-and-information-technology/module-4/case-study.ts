import { CaseStudy } from '../../../../../../types';

export const case_study: CaseStudy[] = [
  {
    "title": "Case Study: Operating System Selection for a Banking System",
    "description": "A large bank is planning to upgrade its computer systems to improve transaction processing and security. They need an operating system that can handle multiple transactions concurrently, provide real-time processing, and offer robust security features. The bank's IT team is considering options like Linux, Windows Server, and a real-time operating system (RTOS) to manage their workload efficiently.",
    "mcq": [
      {
        "question": "Which type of operating system is best suited for the bank’s requirement of real-time transaction processing?",
        "options": [
          "Batch Processing OS",
          "Real-Time OS",
          "Single-User OS",
          "Distributed OS"
        ],
        "answer": "Real-Time OS"
      },
      {
        "question": "Which of the following features is critical for ensuring security in a banking operating system?",
        "options": [
          "User authentication and access control",
          "Graphical User Interface",
          "Gaming support",
          "File sharing capabilities"
        ],
        "answer": "User authentication and access control"
      }
    ]
  },
  {
    "title": "Case Study: Managing Resources in a University Computer Lab",
    "description": "A university computer lab is used by multiple students to run various applications simultaneously. The lab requires an operating system that can efficiently manage resources like CPU, memory, and I/O devices while allowing students to run their programs without delays. The lab administrator is considering multiprogramming and multitasking operating systems to achieve better resource utilization.",
    "mcq": [
      {
        "question": "Which type of operating system would be most appropriate for the university lab’s needs?",
        "options": [
          "Single-tasking OS",
          "Multiprogramming OS",
          "Embedded OS",
          "Real-Time OS"
        ],
        "answer": "Multiprogramming OS"
      },
      {
        "question": "What is the main advantage of using a multitasking operating system in the lab?",
        "options": [
          "Allows multiple users to log in at once",
          "Enables multiple processes to run concurrently",
          "Increases hardware lifespan",
          "Provides real-time execution"
        ],
        "answer": "Enables multiple processes to run concurrently"
      }
    ]
  }
];
