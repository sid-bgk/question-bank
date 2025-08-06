import { MCQ } from '../../../../../../types';

export const mcq: MCQ[] = [
  {
    "question": "Which of the following is a statement?",
    "options": [
      "Open the door",
      "Do your homework",
      "Switch on the fan",
      "Two plus two is four"
    ],
    "answer": "Two plus two is four"
  },
  {
    "question": "Which of the following is a statement?",
    "options": [
      "May you live long!",
      "May God bless you!",
      "The sun is a star",
      "Hurrah! we have won the match"
    ],
    "answer": "The sun is a star"
  },
  {
    "question": "Which of the following is **not** a statement?",
    "options": [
      "Every set is a finite set",
      "8 is less than 6",
      "Where are you going?",
      "The sum of all interior angles of a triangle is 180 degrees"
    ],
    "answer": "Where are you going?"
  },
  {
    "question": "Which of the following is **not** a statement?",
    "options": [
      "Please do me a favor",
      "2 is an even integer",
      "2 + 1 = 3",
      "The number 17 is prime"
    ],
    "answer": "Please do me a favor"
  },
  {
    "question": "Let P, Q, and R be three atomic propositional declarations. Let X denote (P ∨ Q) → R, and Y denote (P → R)∨(Q → R). Which of the following is a tautology?",
    "questionExplanation": "Tautology is a formula that is always true, regardless of the truth values of its components.",
    "options": [
      "X ≡ Y",
      "X → Y",
      "Y → X",
      "¬Y → X"
    ],
    "answer": "X → Y"
  },
  {
    "question": "Consider the following propositional statements:\n P1: [(A ∧ B) → C] ≡ [(A → C) ∧ (B → C)]\n P2: [(A ∨ B) → C] ≡ [(A → C) ∨ (B → C)]\nWhich one of the following is true?",
    "questionExplanation": "Consider the logical equivalence of conditionals and conjunctions.",
    "options": [
      "P1 is tautology, but not P2",
      "P2 is tautology, but not P1",
      "P1 and P2 are both tautologies",
      "Both P1 and P2 are not tautologies"
    ],
    "answer": "P1 is tautology, but not P2"
  },
  {
    "question": "Negation of the conditional statement “If it rains, I shall go to school” is:",
    "options": [
      "It rains and I shall go to school",
      "It rains and I shall not go to school",
      "It does not rain and I shall go to school",
      "None of these"
    ],
    "answer": "It rains and I shall not go to school"
  },
  {
    "question": "Which of the following is a contradiction?",
    "questionExplanation": "A contradiction is a compound statement that is always false.",
    "options": [
      "(P ∧ Q) ∧ ~(P ∨ Q)",
      "P ∨ (~P ∧ Q)",
      "(P ⇒ Q) ⇒ P",
      "None of these"
    ],
    "answer": "(P ∧ Q) ∧ ~(P ∨ Q)"
  },
  {
    "question": "~(~P) ∧ Q is equal to:",
    "questionExplanation": "Use De Morgan's laws to simplify the expression.",
    "options": [
      "~P ∨ Q",
      "P ∧ Q",
      "P ∧ ~Q",
      "~P ∧ ~Q"
    ],
    "answer": "P ∧ Q"
  },
  {
    "question": "If P, Q, R are simple propositions, then (P ∧ Q) ∧ (Q ∧ R) is true when:",
    "options": [
      "P, Q, R are all false",
      "P, Q, R are all true",
      "P, Q are all true and R is false",
      "P is true and Q and R are false"
    ],
    "answer": "P, Q, R are all true"
  },
  {
    "question": "Which of the following is a tautology?",
    "options": [
      "(P ∧ Q) → P",
      "(P ∨ Q) → P",
      "P → (P ∨ Q)",
      "None of these"
    ],
    "answer": "P → (P ∨ Q)"
  },
  {
    "question": "If P and Q are two propositions, then P ∨ Q is false when:",
    "options": [
      "P is true and Q is false",
      "P is false and Q is true",
      "P and Q both are false",
      "P and Q both are true"
    ],
    "answer": "P and Q both are false"
  },
  {
    "question": "The negation of the statement 'All birds can fly' is:",
    "options": [
      "No bird can fly",
      "Some birds cannot fly",
      "All birds cannot fly",
      "None of these"
    ],
    "answer": "Some birds cannot fly"
  },
  {
    "question": "Which of the following is logically equivalent to P → Q?",
    "options": [
      "~P ∨ Q",
      "P ∧ ~Q",
      "P ∨ Q",
      "~P ∧ Q"
    ],
    "answer": "~P ∨ Q"
  },
  {
    "question": "The contrapositive of 'If it rains, then the ground is wet' is:",
    "options": [
      "If the ground is not wet, then it does not rain",
      "If it does not rain, then the ground is not wet",
      "If the ground is wet, then it rains",
      "None of these"
    ],
    "answer": "If the ground is not wet, then it does not rain"
  },
  {
    "question": "Which of the following is a contradiction?",
    "options": [
      "(P ∧ Q) ∧ ~(P ∨ Q)",
      "P ∨ (~P ∧ Q)",
      "(P ⇒ Q) ⇒ P",
      "None of these"
    ],
    "answer": "(P ∧ Q) ∧ ~(P ∨ Q)"
  },
  {
    "question": "Which of the following is a valid statement?",
    "options": [
      "Please close the door",
      "I like chocolate",
      "x + 2 = 5",
      "How are you?"
    ],
    "answer": "x + 2 = 5"
  },
  {
    "question": "Which of the following is the inverse of 'If it is raining, then the ground is wet'?",
    "options": [
      "If the ground is wet, then it is raining",
      "If it is not raining, then the ground is not wet",
      "If the ground is not wet, then it is not raining",
      "None of these"
    ],
    "answer": "If it is not raining, then the ground is not wet"
  },
  {
    "question": "Identify the bi-conditional statement among the following:",
    "options": [
      "If P then Q",
      "P if and only if Q",
      "P or Q",
      "None of these"
    ],
    "answer": "P if and only if Q"
  },
  {
    "question": "The compound proposition P ↔ Q is logically equivalent to:",
    "options": [
      "(P → Q) ∨ (Q → P)",
      "(P ∨ Q) → (Q ∧ P)",
      "(P → Q) ∧ (Q → P)",
      "None of these"
    ],
    "answer": "(P → Q) ∧ (Q → P)"
  },
  {
    "question": "If P = {1,2,3,4} and Q = {3,4,5,6}, find P ∩ Q.",
    "questionExplanation": "The intersection ( ∩ ) of two sets includes only the elements common to both sets.",
    "options": [
      "{3,4}",
      "{1,2,3,4,5,6}",
      "{1,2,5,6}",
      "∅"
    ],
    "answer": "{3,4}"
  },
  {
    "question": "If A = {a,b,c} and B = {b,c,d}, find A ∪ B.",
    "questionExplanation": "The union ( ∪ ) of two sets includes all unique elements from both sets.",
    "options": [
      "{a,b,c,d}",
      "{b,c}",
      "{a,d}",
      "{a,b}"
    ],
    "answer": "{a,b,c,d}"
  },
  {
    "question": "Find the Cartesian product A × B if A = {1,2} and B = {x,y}.",
    "questionExplanation": "The Cartesian product A × B is read as 'A cross B' and consists of ordered pairs (a, b) where a ∈ A and b ∈ B.",
    "options": [
      "{(1,x), (1,y), (2,x), (2,y)}",
      "{(x,1), (y,1), (x,2), (y,2)}",
      "{(1,2), (x,y)}",
      "None of these"
    ],
    "answer": "{(1,x), (1,y), (2,x), (2,y)}"
  },
  {
    "question": "If P → Q and P is false, what can be inferred?",
    "questionExplanation": "The implication P → Q is read as 'If P then Q' and is false only when P is true and Q is false.",
    "options": [
      "Q must be true",
      "Q must be false",
      "P → Q is true",
      "None of these"
    ],
    "answer": "P → Q is true"
  },
  {
    "question": "Evaluate (~P ∨ Q) if P is false and Q is true.",
    "questionExplanation": "The expression (~P ∨ Q) is read as 'Not P or Q'. Use truth values to evaluate.",
    "options": [
      "True",
      "False",
      "Cannot be determined",
      "None of these"
    ],
    "answer": "True"
  },
  {
    "question": "Simplify the Boolean expression: (A ∧ B) ∨ (~A ∧ B)",
    "questionExplanation": "The expression (A ∧ B) ∨ (~A ∧ B) is read as 'A and B or not A and B'. Apply distributive properties to simplify.",
    "options": [
      "B",
      "A",
      "A ∨ B",
      "None of these"
    ],
    "answer": "B"
  },
  {
    "question": "Which of the following is logically equivalent to [(A ∧ B) → C] ≡ [(A → C) ∧ (B → C)]?",
    "questionExplanation": "The expression [(A ∧ B) → C] ≡ [(A → C) ∧ (B → C)] is read as 'A and B implies C is logically equivalent to A implies C and B implies C'.",
    "options": [
      "Tautology",
      "Contradiction",
      "Contingency",
      "None of these"
    ],
    "answer": "Tautology"
  },
  {
    "question": "Find the truth value of P ∧ (~P ∨ Q), when P is false and Q is true.",
    "questionExplanation": "The expression P ∧ (~P ∨ Q) is read as 'P and (not P or Q)'. Evaluate using given values.",
    "options": [
      "True",
      "False",
      "Cannot be determined",
      "None of these"
    ],
    "answer": "False"
  },
  {
    "question": "Evaluate the Boolean expression: (A + B)'",
    "questionExplanation": "The expression (A + B)' is read as 'not (A or B)'. Apply De Morgan's Law to simplify.",
    "options": [
      "A'B'",
      "A' + B'",
      "AB",
      "None of these"
    ],
    "answer": "A'B'"
  },
  {
    "question": "Which of the following is logically equivalent to (P → Q) ∧ (Q → R)?",
    "questionExplanation": "The expression (P → Q) ∧ (Q → R) is read as 'P implies Q and Q implies R'. Use transitivity to simplify.",
    "options": [
      "P → R",
      "P ∧ Q",
      "P ∨ R",
      "None of these"
    ],
    "answer": "P → R"
  },
  {
    "question": "Find the negation of the statement: 'All dogs bark'.",
    "options": [
      "No dog barks",
      "Some dogs do not bark",
      "Some dogs bark",
      "None of these"
    ],
    "answer": "Some dogs do not bark"
  },
  {
    "question": "If A = {1,3,5,7} and B = {2,3,4,5}, find A ∩ B.",
    "questionExplanation": "The expression A ∩ B is read as 'A intersection B' and includes only elements common to both sets.",
    "options": [
      "{3,5}",
      "{1,7}",
      "{2,4}",
      "∅"
    ],
    "answer": "{3,5}"
  },
  {
    "question": "Find the negation of (P ∨ Q).",
    "questionExplanation": "The negation of (P ∨ Q) is read as 'not (P or Q)'. Apply De Morgan's Law.",
    "options": [
      "~P ∨ Q",
      "~P ∧ ~Q",
      "P ∧ Q",
      "None of these"
    ],
    "answer": "~P ∧ ~Q"
  },
  {
    "question": "Evaluate the logical expression: (P → Q) ↔ (~Q → ~P).",
    "questionExplanation": "The biconditional ( ↔ ) means 'if and only if'. This expression is also known as the contrapositive.",
    "options": [
      "Always true",
      "Always false",
      "Depends on values of P and Q",
      "None of these"
    ],
    "answer": "Always true"
  },
  {
    "question": "Which of the following is the correct representation of De Morgan's law?",
    "questionExplanation": "De Morgan's laws state how negation distributes over conjunction and disjunction.",
    "options": [
      "¬(A ∧ B) ≡ ¬A ∨ ¬B",
      "¬(A ∧ B) ≡ A ∨ B",
      "¬(A ∨ B) ≡ ¬A ∧ B",
      "None of these"
    ],
    "answer": "¬(A ∧ B) ≡ ¬A ∨ ¬B"
  },
  {
    "question": "What is the logical equivalent of the expression (p → q) ∧ (q → r)?",
    "questionExplanation": "*Read as 'p implies q and q implies r'.*",
    "options": [
      "p → r",
      "p ∨ r",
      "p ∧ r",
      "None of these"
    ],
    "answer": "p → r"
  },
  {
    "question": "The simplified form of the Boolean expression (A ∧ B) ∨ (~A ∧ B) is:",
    "questionExplanation": "*Read as 'A and B or not A and B'.*",
    "options": [
      "A",
      "B",
      "A ∨ B",
      "None of these"
    ],
    "answer": "B"
  },
  {
    "question": "Which of the following is logically equivalent to ¬(p ∧ q)?",
    "questionExplanation": "*Read as 'not (p and q)'.*",
    "options": [
      "¬p ∨ ¬q",
      "¬p ∧ ¬q",
      "p ∧ q",
      "None of these"
    ],
    "answer": "¬p ∨ ¬q"
  },
  {
    "question": "Evaluate the Boolean expression ~(A ∨ B) if A is false and B is true.",
    "questionExplanation": "*Read as 'not (A or B)'.*",
    "options": [
      "True",
      "False",
      "Cannot be determined",
      "None of these"
    ],
    "answer": "False"
  },
  {
    "question": "Find the negation of the statement: 'If it rains, then the ground is wet'.",
    "questionExplanation": "*Read as 'if it rains then the ground is wet'.*",
    "options": [
      "It rains and the ground is not wet",
      "If it does not rain, the ground is not wet",
      "The ground is wet if it rains",
      "None of these"
    ],
    "answer": "It rains and the ground is not wet"
  },
  {
    "question": "Find the intersection A ∩ B if A = {1,3,5} and B = {3,5,7}.",
    "questionExplanation": "*Read as 'A intersection B'.*",
    "options": [
      "{3,5}",
      "{1,3,5,7}",
      "{1,5}",
      "∅"
    ],
    "answer": "{3,5}"
  },
  {
    "question": "Which of the following is logically equivalent to [(A ∧ B) → C] ≡ [(A → C) ∧ (B → C)]?",
    "questionExplanation": "*Read as 'A and B implies C is logically equivalent to A implies C and B implies C'.*",
    "options": [
      "Tautology",
      "Contradiction",
      "Contingency",
      "None of these"
    ],
    "answer": "Tautology"
  },
  {
    "question": "Which of the following represents the contrapositive of P → Q?",
    "questionExplanation": "*Read as 'if P then Q'.*",
    "options": [
      "Q → P",
      "¬Q → ¬P",
      "P ∧ Q",
      "None of these"
    ],
    "answer": "¬Q → ¬P"
  },
  {
    "question": "What is the logical equivalent of (p ↔ q)?",
    "questionExplanation": "*Read as 'p if and only if q'.*",
    "options": [
      "(p → q) ∧ (q → p)",
      "(p → q) ∨ (q → p)",
      "¬p ∨ q",
      "None of these"
    ],
    "answer": "(p → q) ∧ (q → p)"
  },
  {
    "question": "Simplify the expression (p ∧ q) ∨ (¬p ∧ q).",
    "questionExplanation": "*Read as 'p and q or not p and q'.*",
    "options": [
      "p",
      "q",
      "p ∧ q",
      "None of these"
    ],
    "answer": "q"
  },
  {
    "question": "Which of the following is a tautology?",
    "questionExplanation": "*Read as 'p or not p'.*",
    "options": [
      "p ∨ ¬p",
      "p ∧ ¬p",
      "p → p",
      "None of these"
    ],
    "answer": "p ∨ ¬p"
  },
  {
    "question": "Which of the following represents the union of A and B, where A = {1,2} and B = {2,3}?",
    "questionExplanation": "*Read as 'A union B'.*",
    "options": [
      "{1,2}",
      "{2,3}",
      "{1,2,3}",
      "None of these"
    ],
    "answer": "{1,2,3}"
  },
  {
    "question": "Which of the following represents the negation of P ∧ Q?",
    "questionExplanation": "*Read as 'not (P and Q)'.*",
    "options": [
      "¬P ∧ Q",
      "¬P ∨ ¬Q",
      "P ∨ Q",
      "None of these"
    ],
    "answer": "¬P ∨ ¬Q"
  },
  {
    "question": "If (p ∨ q) ∧ r is true, then which of the following is necessarily true?",
    "questionExplanation": "*Read as 'p or q and r'.*",
    "options": [
      "r is true",
      "p is true",
      "q is true",
      "None of these"
    ],
    "answer": "r is true"
  },
  {
    "question": "What is the simplified form of the Boolean expression (A + B)'?",
    "questionExplanation": "*Read as 'not (A or B)'.*",
    "options": [
      "A'B'",
      "A' + B'",
      "AB",
      "None of these"
    ],
    "answer": "A'B'"
  },
  {
    "question": "Which of the following logical operations is associative?",
    "questionExplanation": "*Read as 'AND or OR applied to multiple terms'.*",
    "options": [
      "AND",
      "OR",
      "IMPLIES",
      "Both AND and OR"
    ],
    "answer": "Both AND and OR"
  },
  {
    "question": "Find the negation of the statement: 'Some dogs are black'.",
    "questionExplanation": "*Read as 'some dogs are black'.*",
    "options": [
      "No dog is black",
      "All dogs are black",
      "Some dogs are not black",
      "None of these"
    ],
    "answer": "No dog is black"
  },
  {
    "question": "Evaluate the Boolean expression: (~P ∨ Q) if P is false and Q is true.",
    "questionExplanation": "*Read as 'not P or Q'.*",
    "options": [
      "True",
      "False",
      "Cannot be determined",
      "None of these"
    ],
    "answer": "True"
  },
  {
    "question": "The negation of 'All students passed' is:",
    "questionExplanation": "*Read as 'all students passed'.*",
    "options": [
      "Some students failed",
      "No student passed",
      "All students failed",
      "None of these"
    ],
    "answer": "Some students failed"
  }
];
