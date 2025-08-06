import { CaseStudy } from '../../../../../../types';

export const case_study: CaseStudy[] = [
  {
    "title": "Case Study 1: Application of Set Theory in Real Life",
    "description": "A university conducted a survey to analyze the students who are enrolled in Mathematics and Science courses. Out of 200 students, 120 are enrolled in Mathematics, 80 are enrolled in Science, and 50 are enrolled in both subjects. The university aims to determine the number of students who are enrolled in either Mathematics or Science, and those who are not enrolled in any of these courses.",
    "mcq": [
      {
        "question": "How many students are enrolled in either Mathematics or Science?",
        "options": [
          "150",
          "200",
          "170",
          "130"
        ],
        "answer": "150"
      },
      {
        "question": "How many students are not enrolled in either Mathematics or Science?",
        "options": [
          "50",
          "30",
          "70",
          "20"
        ],
        "answer": "50"
      }
    ]
  },
  {
    "title": "Case Study 2: Use of Matrices in Business Analysis",
    "description": "A company tracks the monthly sales data of two products in two different regions. The sales are represented in matrix form as follows: Product A sales matrix [ [120, 150], [200, 250] ] and Product B sales matrix [ [100, 130], [180, 210] ]. The management wants to analyze the total sales and identify the highest selling product-region combination.",
    "mcq": [
      {
        "question": "What will be the total sales matrix if the two product matrices are added?",
        "options": [
          "[ [220, 280], [380, 460] ]",
          "[ [120, 150], [200, 250] ]",
          "[ [100, 130], [180, 210] ]",
          "[ [240, 300], [400, 500] ]"
        ],
        "answer": "[ [220, 280], [380, 460] ]"
      },
      {
        "question": "Which region-product combination has the highest sales?",
        "options": [
          "Product A, Region 2",
          "Product B, Region 2",
          "Product A, Region 1",
          "Product B, Region 1"
        ],
        "answer": "Product A, Region 2"
      }
    ]
  }
];
