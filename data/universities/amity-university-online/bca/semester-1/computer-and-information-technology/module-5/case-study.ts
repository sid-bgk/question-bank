import { CaseStudy } from '../../../../../../types';

export const case_study: CaseStudy[] = [
  {
    "title": "Case Study 1: Algorithm Design for a Banking Application",
    "description": "ABC Bank wants to develop an automated system for processing customer loan applications. The system should take customer details, verify eligibility criteria using an algorithm, and decide whether the loan can be approved. The algorithm follows a sequence of steps: collecting data, checking eligibility conditions, and providing an approval or rejection message. The flowchart representation of this process helps visualize the workflow for developers.",
    "mcq": [
      {
        "question": "Which of the following is the primary benefit of using flowcharts in the banking system development?",
        "options": [
          "It reduces programming complexity",
          "It eliminates the need for testing",
          "It makes the software faster",
          "It improves hardware performance"
        ],
        "answer": "It reduces programming complexity"
      },
      {
        "question": "What control structure is primarily used in the loan approval algorithm?",
        "options": [
          "Sequence",
          "Selection",
          "Iteration",
          "Recursion"
        ],
        "answer": "Selection"
      }
    ]
  },
  {
    "title": "Case Study 2: Pseudocode for an E-commerce Order Processing System",
    "description": "XYZ E-commerce wants to optimize their order processing by defining the logic in pseudocode before implementation. The pseudocode includes steps for checking product availability, processing payment, and generating an invoice. By using pseudocode, developers can ensure that all edge cases are considered before actual coding.",
    "mcq": [
      {
        "question": "What is the primary advantage of using pseudocode in the order processing system?",
        "options": [
          "It provides a detailed, syntax-free algorithm",
          "It speeds up code execution",
          "It acts as a programming language",
          "It eliminates the need for debugging"
        ],
        "answer": "It provides a detailed, syntax-free algorithm"
      },
      {
        "question": "Which step should come first in the order processing pseudocode?",
        "options": [
          "Generate invoice",
          "Check product availability",
          "Process payment",
          "Ship the order"
        ],
        "answer": "Check product availability"
      }
    ]
  }
];
