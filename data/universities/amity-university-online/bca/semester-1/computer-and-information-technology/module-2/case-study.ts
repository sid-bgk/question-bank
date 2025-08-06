import { CaseStudy } from '../../../../../../types';

export const case_study: CaseStudy[] = [
  {
    "title": "Case Study 1: Data Storage Optimization in a Banking System",
    "description": "A banking system processes and stores vast amounts of customer data, including account balances, transaction histories, and personal details. To improve storage efficiency and processing speed, the IT team decided to switch from decimal representation to binary and hexadecimal systems. By using hexadecimal encoding, the system reduced storage space requirements and improved data retrieval speeds.",
    "mcq": [
      {
        "question": "Why did the banking system switch to hexadecimal representation?",
        "options": [
          "To reduce storage space",
          "To increase decimal accuracy",
          "To enhance transaction speed",
          "To simplify calculations"
        ],
        "answer": "To reduce storage space"
      },
      {
        "question": "How many bits does a single hexadecimal digit represent?",
        "options": [
          "2",
          "4",
          "8",
          "16"
        ],
        "answer": "4"
      }
    ]
  },
  {
    "title": "Case Study 2: Boolean Logic in Automated Traffic Control Systems",
    "description": "An automated traffic control system uses Boolean logic to manage traffic lights based on input sensors detecting vehicle flow. The system implements Boolean expressions to control green and red signals efficiently. Using expressions like A + B and A.B', the system ensures smooth traffic movement and reduces congestion at intersections.",
    "mcq": [
      {
        "question": "Which Boolean operation is used to allow traffic from either direction?",
        "options": [
          "AND",
          "OR",
          "NOT",
          "XOR"
        ],
        "answer": "OR"
      },
      {
        "question": "What does the Boolean expression A.B' indicate in the traffic control system?",
        "options": [
          "Allow traffic from A and B",
          "Allow traffic from A only if B is not active",
          "Block traffic from A",
          "Allow traffic from B only"
        ],
        "answer": "Allow traffic from A only if B is not active"
      }
    ]
  }
];
