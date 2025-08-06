import { CaseStudy } from '../../../../../../types';

export const case_study: CaseStudy[] = [
  {
    "title": "Network Optimization in a Delivery Service",
    "description": "A logistics company wants to optimize its delivery routes using graph theory. The cities are represented as vertices, and the roads connecting them are edges with weights representing distances. The company aims to find the shortest path for delivery and minimize transportation costs.",
    "mcq": [
      {
        "question": "Which algorithm is best suited to find the shortest path between two cities in a weighted graph?",
        "options": [
          "Depth First Search (DFS)",
          "Breadth First Search (BFS)",
          "Dijkstra's Algorithm",
          "Kruskal's Algorithm"
        ],
        "answer": "Dijkstra's Algorithm"
      },
      {
        "question": "What type of graph is most appropriate for modeling the delivery network?",
        "options": [
          "Undirected graph",
          "Directed graph",
          "Complete graph",
          "Bipartite graph"
        ],
        "answer": "Directed graph"
      }
    ]
  },
  {
    "title": "Social Media Network Analysis",
    "description": "A social media company wants to analyze user interactions using graph theory. Users are represented as vertices, and interactions (likes, shares, and messages) are represented as directed edges. The goal is to identify influential users and optimize content sharing strategies.",
    "mcq": [
      {
        "question": "What is the most suitable way to represent the social media network in terms of graph theory?",
        "options": [
          "Adjacency matrix",
          "Adjacency list",
          "Incidence matrix",
          "Path matrix"
        ],
        "answer": "Adjacency list"
      },
      {
        "question": "In the given social media network, what graph traversal algorithm can be used to identify the most connected users?",
        "options": [
          "Breadth First Search (BFS)",
          "Depth First Search (DFS)",
          "Dijkstra's Algorithm",
          "Prim's Algorithm"
        ],
        "answer": "Breadth First Search (BFS)"
      }
    ]
  }
];
