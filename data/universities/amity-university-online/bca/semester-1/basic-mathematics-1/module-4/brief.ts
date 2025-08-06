import { Brief } from '../../../../../../types';

export const brief: Brief[] = [
  {
    "question": "What is a graph in graph theory?",
    "answer": "A graph is a mathematical structure used to model relationships between objects. It consists of a set of vertices (nodes) and edges (links) that connect pairs of vertices."
  },
  {
    "question": "What is the difference between directed and undirected graphs?",
    "answer": "In an undirected graph, edges have no direction, meaning they can be traversed both ways. In a directed graph (digraph), edges have a specific direction from one vertex to another."
  },
  {
    "question": "What is a complete graph?",
    "answer": "A complete graph is a type of graph in which every pair of distinct vertices is connected by a unique edge. In a complete graph with 'n' vertices, there are n(n-1)/2 edges."
  },
  {
    "question": "What is the degree of a vertex in a graph?",
    "answer": "The degree of a vertex in an undirected graph is the number of edges connected to it. In a directed graph, the in-degree is the number of incoming edges, and the out-degree is the number of outgoing edges."
  },
  {
    "question": "What is the adjacency matrix representation of a graph?",
    "answer": "An adjacency matrix is a way to represent a graph using a 2D array where rows and columns represent vertices, and the presence of an edge between vertices is indicated by a non-zero value."
  }
];
