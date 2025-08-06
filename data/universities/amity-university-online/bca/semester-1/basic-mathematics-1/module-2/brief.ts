import { Brief } from '../../../../../../types';

export const brief: Brief[] = [
  {
    "question": "What is a tautology in mathematical logic?",
    "answer": "A **tautology** is a logical statement that is always true, regardless of the truth values of its individual components. For example, the statement 'P ∨ ~P' (P or not P) is a tautology because it is true whether P is true or false."
  },
  {
    "question": "What is the contrapositive of a conditional statement?",
    "answer": "The **contrapositive** of a conditional statement 'If P then Q' (P → Q) is 'If not Q then not P' (~Q → ~P). The contrapositive is always logically equivalent to the original conditional statement."
  },
  {
    "question": "Explain De Morgan's Laws.",
    "answer": "De Morgan's Laws provide a way to distribute negation over conjunction and disjunction:\n1. ¬(P ∧ Q) ≡ ¬P ∨ ¬Q (The negation of 'P and Q' is 'not P or not Q').\n2. ¬(P ∨ Q) ≡ ¬P ∧ ¬Q (The negation of 'P or Q' is 'not P and not Q')."
  },
  {
    "question": "What is the difference between conjunction and disjunction?",
    "answer": "In logic, **conjunction (∧)** means 'and', and it is true only if both statements are true (e.g., P ∧ Q).\n**Disjunction (∨)** means 'or', and it is true if at least one of the statements is true (e.g., P ∨ Q)."
  },
  {
    "question": "What is a contingency in propositional logic?",
    "answer": "A **contingency** is a propositional statement that is neither always true (tautology) nor always false (contradiction). Its truth value depends on the values of its components."
  }
];
