import { CaseStudy } from '../../../../../../types';

export const case_study: CaseStudy[] = [
  {
    "title": "Understanding Group Properties in Cryptography",
    "description": "Alice is working on implementing cryptographic algorithms that rely on group theory. She is using a set of integers under modular addition and needs to ensure that the chosen set forms a group. She is verifying whether the set satisfies closure, associativity, identity, and inverse properties.",
    "mcq": [
      {
        "question": "Which of the following properties is NOT required for Alice's set to be a group?",
        "questionExplanation": "",
        "options": [
          "Closure",
          "Associativity",
          "Distributivity",
          "Existence of inverses"
        ],
        "answer": "Distributivity"
      },
      {
        "question": "If Alice selects the set of integers under modular addition with modulus 7, what is the identity element?",
        "questionExplanation": "",
        "options": [
          "0",
          "1",
          "7",
          "None of the above"
        ],
        "answer": "0"
      }
    ]
  },
  {
    "title": "Application of Cyclic Groups in Robotics",
    "description": "A robotics engineer is designing a robotic arm that rotates at fixed angles using modular arithmetic. The engineer realizes that the set of rotations forms a cyclic group and wants to determine the number of distinct positions achievable by the robotic arm.",
    "mcq": [
      {
        "question": "If the robotic arm moves in 30-degree increments and completes a full cycle at 360 degrees, how many distinct positions does it have?",
        "questionExplanation": "",
        "options": [
          "6",
          "8",
          "12",
          "10"
        ],
        "answer": "12"
      },
      {
        "question": "What is the generator of the cyclic group formed by the robotic arm's movements?",
        "questionExplanation": "",
        "options": [
          "15 degrees",
          "30 degrees",
          "45 degrees",
          "60 degrees"
        ],
        "answer": "30 degrees"
      }
    ]
  }
];
