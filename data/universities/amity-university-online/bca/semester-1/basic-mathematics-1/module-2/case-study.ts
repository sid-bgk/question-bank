import { CaseStudy } from '../../../../../../types';

export const case_study: CaseStudy[] = [
  {
    "title": "Case Study 1: Logical Equivalence in Circuit Design",
    "description": "A digital circuit designer is working on optimizing a circuit by reducing the number of logic gates. The circuit implements the Boolean expression (A ∧ B) ∨ (~A ∧ B). The designer wants to simplify the expression to optimize the circuit performance. Using logical equivalences, the designer finds that the expression simplifies to B.",
    "mcq": [
      {
        "question": "What is the simplified form of the Boolean expression (A ∧ B) ∨ (~A ∧ B)?",
        "questionExplanation": "The given expression can be simplified using the distributive property of Boolean algebra.",
        "options": [
          "A",
          "B",
          "A ∨ B",
          "None of these"
        ],
        "answer": "B"
      },
      {
        "question": "Which Boolean algebra property is used to simplify (A ∧ B) ∨ (~A ∧ B) to B?",
        "questionExplanation": "Consider factoring the common term in the expression.",
        "options": [
          "Absorption Law",
          "Distributive Law",
          "Idempotent Law",
          "Complement Law"
        ],
        "answer": "Distributive Law"
      }
    ]
  },
  {
    "title": "Case Study 2: Propositional Logic in Decision Making",
    "description": "A company uses propositional logic to analyze their business decisions. They state: 'If product quality improves, then customer satisfaction increases.' They also believe that if customer satisfaction increases, revenue will rise. Based on these, they derive the conclusion that 'If product quality improves, then revenue will rise.'",
    "mcq": [
      {
        "question": "What type of logical reasoning is applied to conclude 'If product quality improves, then revenue will rise'?",
        "questionExplanation": "The conclusion follows by combining two conditional statements.",
        "options": [
          "Modus Tollens",
          "Contradiction",
          "Hypothetical Syllogism",
          "Conjunction"
        ],
        "answer": "Hypothetical Syllogism"
      },
      {
        "question": "Which of the following represents the contrapositive of the statement 'If product quality improves, then customer satisfaction increases'?",
        "questionExplanation": "The contrapositive of P → Q is ~Q → ~P.",
        "options": [
          "If customer satisfaction does not increase, then product quality does not improve.",
          "If product quality improves, then customer satisfaction will not increase.",
          "If customer satisfaction increases, then product quality improves.",
          "None of these"
        ],
        "answer": "If customer satisfaction does not increase, then product quality does not improve."
      }
    ]
  }
];
