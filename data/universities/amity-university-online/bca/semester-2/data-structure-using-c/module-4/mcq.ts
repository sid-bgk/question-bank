import { MCQ } from '../../../../../../types';

export const mcq: MCQ[] = [
  {
    "question": "Which of the following statements correctly defines a binary tree?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A binary tree has at most two children for each node.",
      "A binary tree contains nodes without children.",
      "A binary tree has an infinite number of nodes.",
      "A binary tree is a graph with directed edges only."
    ],
    "answer": "A binary tree has at most two children for each node.",
    "explanation": "In a binary tree, each node has at most two children, referred to as the left and right child."
  },
  {
    "question": "What is the term for the topmost node of a binary tree?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Parent",
      "Root",
      "Leaf",
      "Child"
    ],
    "answer": "Root",
    "explanation": "The topmost node in a binary tree is called the root node."
  },
  {
    "question": "What is the balance factor in an AVL tree?",
    "codeBlock": "",
    "language": "",
    "options": [
      "The difference in height between left and right subtrees",
      "The difference in the number of children of a node",
      "The sum of depths of the left and right subtrees",
      "The total number of children of a node"
    ],
    "answer": "The difference in height between left and right subtrees",
    "explanation": "The balance factor of a node in an AVL tree is the difference in height between its left and right subtrees."
  },
  {
    "question": "Which traversal technique processes nodes in the order of root, left subtree, right subtree?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Post-order",
      "In-order",
      "Pre-order",
      "Level-order"
    ],
    "answer": "Pre-order",
    "explanation": "Pre-order traversal visits the root first, then the left subtree, and finally the right subtree."
  },
  {
    "question": "What is the condition for a binary tree to be a complete binary tree?",
    "codeBlock": "",
    "language": "",
    "options": [
      "All levels are filled except possibly the last, which is filled from the left",
      "All internal nodes have at least one child",
      "Each node has exactly two children",
      "All leaf nodes are at the same depth"
    ],
    "answer": "All levels are filled except possibly the last, which is filled from the left",
    "explanation": "A complete binary tree has all levels filled, except possibly the last, which is filled from the left."
  },
  {
    "question": "In an expression tree, what does an internal node typically represent?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Leaf Node",
      "Operand",
      "Empty Node",
      "Operator"
    ],
    "answer": "Operator",
    "explanation": "In expression trees, internal nodes represent operators (+, -, *, /), and leaves are operands."
  },
  {
    "question": "Which of the following is not a traversal technique for binary trees?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Pre-order",
      "In-order",
      "Post-order",
      "Down-order"
    ],
    "answer": "Down-order",
    "explanation": "Down-order is not a valid traversal technique for binary trees."
  },
  {
    "question": "Which of the following best describes the structure of a graph?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A collection of unrelated elements",
      "A tree with no cycles",
      "A set of vertices connected by edges",
      "A set of elements in sequential order"
    ],
    "answer": "A set of vertices connected by edges",
    "explanation": "A graph is a collection of vertices (nodes) connected by edges (lines)."
  },
  {
    "question": "What is the time complexity of searching an element in a balanced binary search tree?",
    "codeBlock": "",
    "language": "",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n²)"
    ],
    "answer": "O(log n)",
    "explanation": "Searching in a balanced BST has logarithmic time complexity because the tree height is log(n)."
  },
  {
    "question": "Which of the following data structures can be used to represent a graph?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Queue",
      "Adjacency matrix",
      "Stack",
      "Linked list"
    ],
    "answer": "Adjacency matrix",
    "explanation": "Graphs can be represented using adjacency matrices or adjacency lists."
  },
  {
    "question": "What is the primary use of B-trees in data structures?",
    "codeBlock": "",
    "language": "",
    "options": [
      "To represent only hierarchical data structures",
      "To store data in a sorted order with efficient searching, insertion, and deletion",
      "To store only binary search trees",
      "To maintain parent-child relationships in binary trees"
    ],
    "answer": "To store data in a sorted order with efficient searching, insertion, and deletion",
    "explanation": "B-trees provide efficient search, insert, and delete operations for large datasets."
  },
  {
    "question": "In Prim’s algorithm, which data structure is typically used to find the minimum key value quickly?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Stack",
      "Linked list",
      "Priority queue",
      "Array"
    ],
    "answer": "Priority queue",
    "explanation": "A priority queue helps to quickly find the minimum key vertex not yet included in MST."
  },
  {
    "question": "What is the output of the following C program snippet for a binary search tree?",
    "codeBlock": "void print_inorder(node * tree) { if (tree) { print_inorder(tree->left); printf(\"%d \",tree->data); print_inorder(tree->right); } }",
    "language": "C",
    "options": [
      "It prints the BST in random order.",
      "It prints only the leaf nodes.",
      "It prints the BST in reverse order.",
      "It prints the BST in sorted order."
    ],
    "answer": "It prints the BST in sorted order.",
    "explanation": "In-order traversal of BST prints the tree nodes in ascending order."
  },
  {
    "question": "Which of the following statements about spanning trees is correct?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A spanning tree may exclude some vertices.",
      "A spanning tree has cycles.",
      "A spanning tree has exactly n-1 edges if the graph has n vertices.",
      "A spanning tree includes only leaf nodes."
    ],
    "answer": "A spanning tree has exactly n-1 edges if the graph has n vertices.",
    "explanation": "A spanning tree connects all vertices with exactly n-1 edges."
  },
  {
    "question": "What does the Warshall algorithm find in a graph?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Only the connected components",
      "The longest path between two nodes",
      "The minimum spanning tree",
      "All-pairs shortest paths"
    ],
    "answer": "All-pairs shortest paths",
    "explanation": "The Warshall algorithm computes the shortest paths between all pairs of vertices in a weighted graph."
  },
  {
    "question": "Which of the following traversal techniques uses a queue to visit nodes level by level?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Post-order",
      "Pre-order",
      "DFS",
      "BFS"
    ],
    "answer": "BFS",
    "explanation": "Breadth-First Search (BFS) uses a queue to visit all nodes level by level."
  },
  {
    "question": "What does an external node represent in an extended binary tree?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A node representing only leaf nodes of the original tree",
      "A special leaf node added to replace null pointers",
      "A duplicate of internal nodes",
      "A node with only one child"
    ],
    "answer": "A special leaf node added to replace null pointers",
    "explanation": "In extended binary trees, external nodes replace null pointers."
  },
  {
    "question": "In a binary search tree, where are values smaller than the root stored?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Root",
      "Leaf nodes",
      "Right subtree",
      "Left subtree"
    ],
    "answer": "Left subtree",
    "explanation": "In a BST, values smaller than the root are stored in the left subtree."
  },
  {
    "question": "Which of the following data structures uses balance factors to maintain self-balance?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Binary Tree",
      "Graph",
      "AVL Tree",
      "Stack"
    ],
    "answer": "AVL Tree",
    "explanation": "AVL Trees use balance factors to ensure self-balance after insertion and deletion."
  },
  {
    "question": "What does the term 'adjacency' mean in graph theory?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A vertex is not connected to any other vertex",
      "A vertex has only one child",
      "Two nodes have the same data value",
      "Two vertices are connected by an edge"
    ],
    "answer": "Two vertices are connected by an edge",
    "explanation": "Adjacency means two vertices in a graph are connected by an edge."
  },
  {
    "question": "Which of the following best describes a general tree?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A tree where each node has exactly two children",
      "A binary search tree with only leaf nodes",
      "A tree where nodes can have zero or many children",
      "A tree with only one root and no edges"
    ],
    "answer": "A tree where nodes can have zero or many children",
    "explanation": "In general trees, there is no limitation on the number of children a node can have."
  },
  {
    "question": "What is the primary goal of Kruskal’s algorithm?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Find the minimum spanning tree of a graph",
      "Calculate the shortest path from source to all vertices",
      "Determine the height of a binary tree",
      "Find cycles in a graph"
    ],
    "answer": "Find the minimum spanning tree of a graph",
    "explanation": "Kruskal’s algorithm builds the minimum spanning tree by adding edges in increasing order of weights."
  },
  {
    "question": "Which of the following is an application of spanning trees?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Database indexing",
      "Civil network planning",
      "Sorting algorithms",
      "Balancing binary search trees"
    ],
    "answer": "Civil network planning",
    "explanation": "Spanning trees are used in applications such as network design, civil network planning, and routing protocols."
  },
  {
    "question": "In a binary tree, what is the degree of a leaf node?",
    "codeBlock": "",
    "language": "",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": "0",
    "explanation": "Leaf nodes have no children, so their degree is 0."
  },
  {
    "question": "Which data structure is suitable for representing an adjacency list in graphs?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Stack",
      "Linked list",
      "Array of integers",
      "Binary tree"
    ],
    "answer": "Linked list",
    "explanation": "An adjacency list uses a linked list to represent all adjacent vertices for each vertex."
  },
  {
    "question": "Which of the following operations is NOT a primary operation of a graph?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Display vertex",
      "Add edge",
      "Merge two graphs",
      "Add vertex"
    ],
    "answer": "Merge two graphs",
    "explanation": "The primary operations of a graph include adding/removing vertices and edges, and displaying vertices."
  },
  {
    "question": "What does the ‘path’ term in graph theory represent?",
    "codeBlock": "",
    "language": "",
    "options": [
      "The maximum weight edge in a graph",
      "A sequence of edges connecting two vertices",
      "A cycle in a spanning tree",
      "A leaf node in a tree"
    ],
    "answer": "A sequence of edges connecting two vertices",
    "explanation": "A path in graph theory is a sequence of edges that connect a sequence of vertices."
  },
  {
    "question": "What is the purpose of rotations in AVL trees?",
    "codeBlock": "",
    "language": "",
    "options": [
      "To delete a subtree in AVL tree",
      "To ensure that all nodes have two children",
      "To maintain balance factor after insertion or deletion",
      "To convert a binary tree to a general tree"
    ],
    "answer": "To maintain balance factor after insertion or deletion",
    "explanation": "Rotations in AVL trees maintain the height balance to ensure O(log n) operations."
  },
  {
    "question": "In a graph, what is an isolated vertex?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A vertex with no edges connected",
      "A vertex that has two children",
      "A leaf node in a tree",
      "A vertex that has the highest degree"
    ],
    "answer": "A vertex with no edges connected",
    "explanation": "An isolated vertex in a graph has no edges connected to it."
  },
  {
    "question": "What kind of tree traversal is used in Depth First Search (DFS) of a graph?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Breadth-first traversal",
      "Random traversal",
      "Backtracking and recursion (stack-based traversal)",
      "In-order traversal only"
    ],
    "answer": "Backtracking and recursion (stack-based traversal)",
    "explanation": "DFS uses backtracking and recursion or an explicit stack to traverse a graph."
  },
  {
    "question": "Which of the following statements is true about threaded binary trees?",
    "codeBlock": "",
    "language": "",
    "options": [
      "They store duplicate nodes in the tree.",
      "They convert null links into threads to predecessor or successor nodes.",
      "They always have at least three children for each node.",
      "They are the same as AVL trees."
    ],
    "answer": "They convert null links into threads to predecessor or successor nodes.",
    "explanation": "Threaded binary trees use threads to replace null pointers for faster in-order traversal."
  },
  {
    "question": "What is the default balance factor range in an AVL tree?",
    "codeBlock": "",
    "language": "",
    "options": [
      "-2 to 2",
      "-1 to 1",
      "0 to 3",
      "1 to 3"
    ],
    "answer": "-1 to 1",
    "explanation": "AVL trees maintain a balance factor range of -1, 0, or 1 for all nodes."
  },
  {
    "question": "In a binary search tree, which traversal returns the keys in sorted order?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Pre-order",
      "Post-order",
      "In-order",
      "Level-order"
    ],
    "answer": "In-order",
    "explanation": "In-order traversal of BST yields the sorted order of keys."
  },
  {
    "question": "Which of the following is true for a B-tree of order m?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Every node has exactly m children.",
      "A non-leaf node with k keys has k+1 children.",
      "It has only leaf nodes and no internal nodes.",
      "All nodes must be at the same level."
    ],
    "answer": "A non-leaf node with k keys has k+1 children.",
    "explanation": "A B-tree node with k keys has exactly k+1 children."
  },
  {
    "question": "What does the depth of a node in a tree represent?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Number of leaf nodes in the tree",
      "Number of edges from the root to the node",
      "Number of children of the node",
      "Number of siblings of the node"
    ],
    "answer": "Number of edges from the root to the node",
    "explanation": "Depth of a node is the number of edges from the root to the node."
  },
  {
    "question": "What is the purpose of adjacency matrix in a graph?",
    "codeBlock": "",
    "language": "",
    "options": [
      "To display nodes in preorder fashion",
      "To represent relationships between vertices",
      "To maintain node degree values",
      "To delete vertices from a graph"
    ],
    "answer": "To represent relationships between vertices",
    "explanation": "Adjacency matrix represents edges between vertices in a graph."
  },
  {
    "question": "In a complete binary tree, what property holds true for the last level?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It is filled from left to right.",
      "It is always completely empty.",
      "All nodes have two children.",
      "It is filled from right to left."
    ],
    "answer": "It is filled from left to right.",
    "explanation": "In a complete binary tree, the last level is filled from left to right."
  },
  {
    "question": "Which traversal visits each node of a binary tree exactly once in a systematic way?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Random traversal",
      "Traversal with only left children",
      "Traversal with only right children",
      "Tree traversal (preorder, inorder, postorder)"
    ],
    "answer": "Tree traversal (preorder, inorder, postorder)",
    "explanation": "Tree traversal ensures visiting each node exactly once in a systematic manner."
  },
  {
    "question": "What is the primary difference between DFS and BFS traversal?",
    "codeBlock": "",
    "language": "",
    "options": [
      "DFS uses recursion and stack, BFS uses queue",
      "BFS uses recursion and stack, DFS uses queue",
      "Both use stack only",
      "Both use queue only"
    ],
    "answer": "DFS uses recursion and stack, BFS uses queue",
    "explanation": "DFS explores using recursion and stack, BFS uses a queue to explore nodes level-wise."
  },
  {
    "question": "What is the degree of a node in a tree?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Number of edges connecting it to other nodes",
      "Number of children a node has",
      "Number of nodes at the same level",
      "Depth of the node from the root"
    ],
    "answer": "Number of children a node has",
    "explanation": "Degree of a node represents the number of its children."
  },
  {
    "question": "Which algorithm updates the key value of adjacent vertices to build a Minimum Spanning Tree (MST)?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Prim’s Algorithm",
      "Kruskal’s Algorithm",
      "DFS",
      "BFS"
    ],
    "answer": "Prim’s Algorithm",
    "explanation": "Prim’s algorithm updates key values of adjacent vertices to grow the MST."
  },
  {
    "question": "What is the initial key value of the first vertex in Prim’s algorithm?",
    "codeBlock": "",
    "language": "",
    "options": [
      "0",
      "Infinity",
      "1",
      "Depends on graph size"
    ],
    "answer": "0",
    "explanation": "The first vertex has a key value of 0 so it is picked first in Prim’s algorithm."
  },
  {
    "question": "In Kruskal’s algorithm, when is an edge added to the Minimum Spanning Tree?",
    "codeBlock": "",
    "language": "",
    "options": [
      "When it connects vertices without forming a cycle",
      "Always regardless of cycles",
      "Only if it’s the smallest edge in the graph",
      "When it connects isolated vertices only"
    ],
    "answer": "When it connects vertices without forming a cycle",
    "explanation": "Kruskal’s algorithm adds edges without creating cycles to form MST."
  },
  {
    "question": "Which of the following statements describes an extended binary tree?",
    "codeBlock": "",
    "language": "",
    "options": [
      "All null subtrees are replaced with external nodes.",
      "It has no external nodes at all.",
      "It has only leaf nodes.",
      "It has nodes of degree more than two only."
    ],
    "answer": "All null subtrees are replaced with external nodes.",
    "explanation": "An extended binary tree replaces all null links with external nodes for representation."
  },
  {
    "question": "What does an adjacency list representation of a graph use?",
    "codeBlock": "",
    "language": "",
    "options": [
      "An array of linked lists for vertices",
      "A single array only",
      "An adjacency matrix only",
      "A set of integers for each vertex"
    ],
    "answer": "An array of linked lists for vertices",
    "explanation": "Adjacency list uses an array where each entry points to a linked list of adjacent vertices."
  },
  {
    "question": "Which traversal order is typically used by the Post-order traversal of binary trees?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Left-Right-Root",
      "Root-Left-Right",
      "Left-Root-Right",
      "Root-Right-Left"
    ],
    "answer": "Left-Right-Root",
    "explanation": "Post-order traversal processes left, right, and then root."
  },
  {
    "question": "What kind of graph does not have directed edges?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Undirected graph",
      "Directed graph",
      "Weighted graph",
      "Complete graph"
    ],
    "answer": "Undirected graph",
    "explanation": "An undirected graph has edges without a specific direction."
  },
  {
    "question": "In a binary search tree, what is the maximum number of children a node can have?",
    "codeBlock": "",
    "language": "",
    "options": [
      "2",
      "3",
      "1",
      "0"
    ],
    "answer": "2",
    "explanation": "Each node in a BST can have at most two children: left and right."
  },
  {
    "question": "Which algorithm does not allow cycles while forming an MST?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Kruskal’s",
      "DFS",
      "In-order traversal",
      "Level-order traversal"
    ],
    "answer": "Kruskal’s",
    "explanation": "Kruskal’s algorithm ensures no cycles are formed while constructing MST."
  },
  {
    "question": "In a general tree, what can be said about the degree of nodes?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Nodes can have an arbitrary number of children.",
      "All nodes have exactly two children.",
      "Nodes cannot have more than two children.",
      "Nodes always have zero children."
    ],
    "answer": "Nodes can have an arbitrary number of children.",
    "explanation": "In a general tree, there is no limitation on the number of children for each node."
  },
  {
    "question": "What is the primary data structure used by BFS traversal?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Queue",
      "Stack",
      "Tree",
      "Linked list"
    ],
    "answer": "Queue",
    "explanation": "BFS uses a queue to keep track of the next vertices to visit."
  },
  {
    "question": "What is the main condition for an edge to be part of a minimum spanning tree in Prim’s algorithm?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It must have the minimum weight connecting included and excluded sets.",
      "It must connect two already included vertices.",
      "It must be part of a cycle.",
      "It must be the maximum weight edge."
    ],
    "answer": "It must have the minimum weight connecting included and excluded sets.",
    "explanation": "Prim’s algorithm always adds the minimum weight edge connecting the MST set to the outside."
  },
  {
    "question": "What happens when you delete a leaf node in a binary search tree?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It is simply removed and no further adjustments are needed.",
      "The root node is deleted instead.",
      "The entire tree is deleted.",
      "All left children are deleted too."
    ],
    "answer": "It is simply removed and no further adjustments are needed.",
    "explanation": "Leaf nodes are deleted by replacing them with NULL."
  },
  {
    "question": "Which of the following is true for a complete binary tree?",
    "codeBlock": "",
    "language": "",
    "options": [
      "All levels are completely filled except possibly the last one, filled from left to right.",
      "Each node has at least two children.",
      "All leaf nodes are at the same level only.",
      "It is always a full binary tree."
    ],
    "answer": "All levels are completely filled except possibly the last one, filled from left to right.",
    "explanation": "A complete binary tree has all levels filled except the last, which is filled from left to right."
  },
  {
    "question": "What is a path in a graph?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A sequence of edges from a source to a destination vertex",
      "A node in a binary tree",
      "A cycle in a graph",
      "A disconnected vertex"
    ],
    "answer": "A sequence of edges from a source to a destination vertex",
    "explanation": "A path in a graph represents a sequence of connected edges between two vertices."
  },
  {
    "question": "What does a node’s height in a binary tree represent?",
    "codeBlock": "",
    "language": "",
    "options": [
      "The longest path from the node to a leaf",
      "The number of children it has",
      "The total degree of the tree",
      "The total number of siblings"
    ],
    "answer": "The longest path from the node to a leaf",
    "explanation": "Node height is the longest path (edge count) from that node to a leaf."
  },
  {
    "question": "Which property distinguishes a B-tree from a binary search tree?",
    "codeBlock": "",
    "language": "",
    "options": [
      "B-trees have multiple children per node and are balanced.",
      "B-trees have only leaf nodes.",
      "B-trees are always unbalanced.",
      "B-trees do not allow deletions."
    ],
    "answer": "B-trees have multiple children per node and are balanced.",
    "explanation": "B-trees can have multiple keys and children in one node and maintain balance."
  },
  {
    "question": "What is an adjacency matrix?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A 2D array representing edges between vertices",
      "A stack of vertices for DFS",
      "A queue of vertices for BFS",
      "A single linked list of graph vertices"
    ],
    "answer": "A 2D array representing edges between vertices",
    "explanation": "Adjacency matrix uses a 2D array to represent which vertices are connected."
  },
  {
    "question": "In a graph, what does the term ‘edge’ represent?",
    "codeBlock": "",
    "language": "",
    "options": [
      "A line connecting two vertices",
      "The data of a vertex",
      "The height of a node in a tree",
      "The degree of a vertex"
    ],
    "answer": "A line connecting two vertices",
    "explanation": "Edges are the connections (lines) between pairs of vertices."
  },
  {
    "question": "What is the primary goal of Prim’s algorithm in graph theory?",
    "codeBlock": "",
    "language": "",
    "options": [
      "To create a minimum spanning tree",
      "To find the shortest path between two nodes",
      "To traverse the entire graph in BFS order",
      "To identify isolated vertices"
    ],
    "answer": "To create a minimum spanning tree",
    "explanation": "Prim’s algorithm constructs an MST by growing it edge by edge from a starting vertex."
  },
  {
    "question": "What is the distinguishing characteristic of a complete binary tree?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It must contain only leaf nodes.",
      "Every element of a leaf must incline leftward.",
      "It must have all its levels filled except possibly the lowest level, which is filled from the left.",
      "It must have exactly two children for each node."
    ],
    "answer": "It must have all its levels filled except possibly the lowest level, which is filled from the left.",
    "explanation": "A complete binary tree has all levels filled, except possibly the last one, which is filled from left to right."
  },
  {
    "question": "In an extended binary tree, what are the external nodes replaced with?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Special nodes",
      "Leaf nodes",
      "Data nodes",
      "Internal nodes"
    ],
    "answer": "Special nodes",
    "explanation": "In extended binary trees, all null subtrees are replaced by special external nodes."
  },
  {
    "question": "Which traversal technique lists the nodes in the order of root, left subtree, right subtree?",
    "codeBlock": "",
    "language": "",
    "options": [
      "Post-order traversal",
      "Pre-order traversal",
      "In-order traversal",
      "Level-order traversal"
    ],
    "answer": "Pre-order traversal",
    "explanation": "Pre-order traversal (NLR) visits root first, then left subtree, then right subtree."
  },
  {
    "question": "What is the purpose of a B-tree in data structures?",
    "codeBlock": "",
    "language": "",
    "options": [
      "To traverse binary trees efficiently",
      "To maintain balance in binary search trees",
      "To allow searches, insertions, and deletions in logarithmic amortised time",
      "To represent hierarchical data structures"
    ],
    "answer": "To allow searches, insertions, and deletions in logarithmic amortised time",
    "explanation": "B-trees support efficient search, insertion, and deletion in logarithmic time complexity."
  },
  {
    "question": "Which statement accurately describes Prim’s Minimum Spanning Tree algorithm?",
    "codeBlock": "",
    "language": "",
    "options": [
      "It assigns a key value of 0 to all vertices initially and updates the key values based on maximum weight.",
      "It maintains two sets of vertices: one for vertices already in the MST and one for vertices not yet included.",
      "It selects edges randomly from the graph to form the spanning tree.",
      "It starts with a filled spanning tree and adds edges one by one based on maximum weight."
    ],
    "answer": "It maintains two sets of vertices: one for vertices already in the MST and one for vertices not yet included.",
    "explanation": "Prim’s algorithm uses two sets: MST set and remaining vertices, adding edges connecting them with minimum weight."
  },
  {
    "question": "What will be the output of the following function when called with a binary search tree containing the elements 9, 4, 15, 6, 12, 17, 2?",
    "codeBlock": "void print_inorder(node * tree) { if (tree) { print_inorder(tree->left); printf(\"%d \",tree->data); print_inorder(tree->right); } }",
    "language": "C",
    "options": [
      "2 4 6 9 12 15 17",
      "9 4 2 6 15 12 17",
      "2 6 4 12 15 17 9",
      "17 15 12 9 6 4 2"
    ],
    "answer": "2 4 6 9 12 15 17",
    "explanation": "In-order traversal of BST prints nodes in ascending (sorted) order."
  },
  {
    "question": "Which of the following is true about the deleteNode function for deleting a node in BST if the node has two children?",
    "codeBlock": "struct node* deleteNode(struct node *node, int value) { ... if(node->left == NULL) { node = node->right; } else if(node->right == NULL) { node = node->left; } else { struct node *temp = minNode(node->right); node->data = temp->data; node->right = deleteNode(node->right, temp->data); } ... }",
    "language": "C",
    "options": [
      "It replaces the node with the minimum value node in the right subtree",
      "It deletes the node without replacement",
      "It replaces the node with the maximum node in the left subtree",
      "It converts the node into a leaf node"
    ],
    "answer": "It replaces the node with the minimum value node in the right subtree",
    "explanation": "For deletion with two children, it replaces the node's value with the minimum from right subtree and deletes that min node."
  },
  {
    "question": "What is the purpose of the following structure definition in the implementation of graphs?",
    "codeBlock": "#define MAX_VERTICES 50 typedef struct node *node_pointer; typedef struct node { int vertex; struct node *link; };",
    "language": "C",
    "options": [
      "To define adjacency list representation for graphs",
      "To define a tree structure for binary trees",
      "To create a stack for DFS traversal",
      "To implement a queue for BFS"
    ],
    "answer": "To define adjacency list representation for graphs",
    "explanation": "It defines a node with vertex and link fields to represent adjacency lists in graphs."
  },
  {
    "question": "Which output will the following postorder traversal function produce for a tree with root 1, left child 2 (with children 4,5), and right child 3?",
    "codeBlock": "void postorder(struct node* node) { if (node == NULL) return; postorder(node->left); postorder(node->right); printf(\"%d \", node->data); }",
    "language": "C",
    "options": [
      "4 5 2 3 1",
      "1 2 3 4 5",
      "4 2 5 1 3",
      "2 4 5 3 1"
    ],
    "answer": "4 5 2 3 1",
    "explanation": "Postorder traversal visits left, right, and root last: 4 5 2 3 1."
  },
  {
    "question": "What is the expected output of the following preorder traversal function for a binary tree?",
    "codeBlock": "void preorder(struct node* node) { if (node == NULL) return; printf(\"%d \", node->data); preorder(node->left); preorder(node->right); }",
    "language": "C",
    "options": [
      "1 2 4 5 3",
      "4 2 5 1 3",
      "2 4 5 1 3",
      "4 5 2 3 1"
    ],
    "answer": "1 2 4 5 3",
    "explanation": "Preorder traversal visits root first, then left and right subtrees."
  },
  {
    "question": "In the following C function for checking a complete binary tree, what is the role of index parameter?",
    "codeBlock": "bool checkComplete(struct Node *root, int index, int numberNodes) { if (root == NULL) return true; if (index >= numberNodes) return false; return (checkComplete(root->left, 2 * index + 1, numberNodes) && checkComplete(root->right, 2 * index + 2, numberNodes)); }",
    "language": "C",
    "options": [
      "It represents the index position of the current node in a complete binary tree representation",
      "It counts the number of leaf nodes in the binary tree",
      "It stores the balance factor for AVL trees",
      "It is not used in any calculations"
    ],
    "answer": "It represents the index position of the current node in a complete binary tree representation",
    "explanation": "It tracks the expected index in a complete binary tree to validate completeness."
  },
  {
    "question": "What is printed by the following function call in the binary search tree example?",
    "codeBlock": "tmp = search(&root, 4); if (tmp) { printf(\"Searched node=%d\\n\", tmp->data); } else { printf(\"Data Not found in tree.\\n\"); }",
    "language": "C",
    "options": [
      "Searched node=4",
      "Data Not found in tree.",
      "Searched node=9",
      "Searched node=2"
    ],
    "answer": "Searched node=4",
    "explanation": "The search function finds 4 in the BST and prints it."
  },
  {
    "question": "What will happen if the deleteNode function is called with a node that has only one child?",
    "codeBlock": "struct node* deleteNode(struct node *node, int value) { ... if(node->left == NULL) { node = node->right; } else if(node->right == NULL) { node = node->left; } ... }",
    "language": "C",
    "options": [
      "It replaces the node with its child",
      "It deletes the entire subtree",
      "It sets the node to NULL without replacement",
      "It swaps the left and right children"
    ],
    "answer": "It replaces the node with its child",
    "explanation": "The node is replaced by its single child and deleted."
  },
  {
    "question": "Which of the following represents a left rotation in AVL tree balancing?",
    "codeBlock": "// Assume initial tree X, Y, and subtrees alpha, beta, gamma for left rotation",
    "language": "",
    "options": [
      "Parent of Y becomes X, beta is child of X, Y becomes new root",
      "Parent of X becomes Y, beta is child of X, Y becomes new root",
      "Parent of Y becomes Z, beta is child of Y, X becomes new root",
      "Parent of X becomes Z, beta is child of Y, X becomes new root"
    ],
    "answer": "Parent of X becomes Y, beta is child of X, Y becomes new root",
    "explanation": "Left rotation moves Y up, X down as left child, and beta becomes X's right child."
  },
  {
    "question": "Which variable in the following Prim’s algorithm implementation stores the parent information for MST edges?",
    "codeBlock": "int parent[V]; void primMST(int graph[V][V]) { ... for (int v = 0; v < V; v++) if (graph[u][v] && mstSet[v] == false && graph[u][v] < key[v]) parent[v] = u, key[v] = graph[u][v]; ... }",
    "language": "C",
    "options": [
      "parent[]",
      "key[]",
      "graph[][]",
      "mstSet[]"
    ],
    "answer": "parent[]",
    "explanation": "parent[] keeps track of the parent of each vertex in the MST."
  },
  {
    "question": "Which operation is performed first in the insert function of a binary search tree if the tree is empty?",
    "codeBlock": "void insert(node ** tree, int val) { node *temp = NULL; if(!(*tree)) { temp = (node *)malloc(sizeof(node)); temp->left = temp->right = NULL; temp->data = val; *tree = temp; return; } ... }",
    "language": "C",
    "options": [
      "A new node is created and assigned as the root",
      "The data is inserted into the left child directly",
      "The data is inserted into the right child directly",
      "The function returns without doing anything"
    ],
    "answer": "A new node is created and assigned as the root",
    "explanation": "If the tree is empty, a new node is created and becomes the root."
  },
  {
    "question": "What does the following C snippet do within the context of binary search tree deletion?",
    "codeBlock": "else { struct node *temp = minNode(node->right); node->data = temp->data; node->right = deleteNode(node->right, temp->data); }",
    "language": "C",
    "options": [
      "Replaces node's data with minimum from right subtree and deletes that node",
      "Deletes only the right subtree",
      "Replaces node's data with maximum from left subtree",
      "Deletes all nodes with value less than current node's data"
    ],
    "answer": "Replaces node's data with minimum from right subtree and deletes that node",
    "explanation": "This handles deletion for nodes with two children by replacing with the inorder successor."
  },
  {
    "question": "What is the significance of the line `if(!(*tree))` in the insert function?",
    "codeBlock": "void insert(node ** tree, int val) { if(!(*tree)) { ... } ... }",
    "language": "C",
    "options": [
      "It checks if the tree is empty and allocates a new node",
      "It checks if the tree is full",
      "It validates the input data",
      "It ensures that the value is a leaf node"
    ],
    "answer": "It checks if the tree is empty and allocates a new node",
    "explanation": "If the pointer is NULL, it means the tree/subtree is empty and a new node should be created."
  },
  {
    "question": "Which data structure is used in the Warshall algorithm implementation for finding all pairs shortest paths?",
    "codeBlock": "Input: graph[][] = { {0, 5, INF, 10}, {INF, 0, 3, INF}, ... }",
    "language": "C",
    "options": [
      "2D matrix to store shortest distances",
      "Single linked list for each node",
      "Stack to store minimum spanning tree",
      "Queue for level-wise traversal"
    ],
    "answer": "2D matrix to store shortest distances",
    "explanation": "A 2D matrix is used to represent and update shortest paths in the graph."
  },
  {
    "question": "What does the following line in the Prim’s algorithm function do?",
    "codeBlock": "if (graph[u][v] && mstSet[v] == false && graph[u][v] < key[v]) parent[v] = u, key[v] = graph[u][v];",
    "language": "C",
    "options": [
      "Updates parent and key of adjacent vertex v if a shorter edge is found",
      "Deletes vertex v from the graph",
      "Marks vertex v as visited",
      "Sets the balance factor of vertex v to zero"
    ],
    "answer": "Updates parent and key of adjacent vertex v if a shorter edge is found",
    "explanation": "It updates the shortest edge for vertices not in MST."
  },
  {
    "question": "In the C program for postorder traversal, why is there a base condition `if (node == NULL)`?",
    "codeBlock": "void postorder(struct node* node) { if (node == NULL) return; postorder(node->left); postorder(node->right); printf(\"%d \", node->data); }",
    "language": "C",
    "options": [
      "To stop recursion when a NULL child is reached",
      "To delete all leaf nodes",
      "To ensure only leaf nodes are printed",
      "To initialize the recursion"
    ],
    "answer": "To stop recursion when a NULL child is reached",
    "explanation": "This condition prevents accessing NULL pointers during recursion."
  },
  {
    "question": "In the example program for creating a complete binary tree, which variable counts the total nodes?",
    "codeBlock": "int node_count = countNumNodes(root);",
    "language": "C",
    "options": [
      "node_count",
      "index",
      "root",
      "graph"
    ],
    "answer": "node_count",
    "explanation": "It stores the total number of nodes to compare with the index while checking completeness."
  },
  {
    "question": "What would be the output of an in-order traversal on a binary tree with nodes 1 as root, 2 as left child, and 3 as right child?",
    "codeBlock": "void inorder(struct node* node) { if (node == NULL) return; inorder(node->left); printf(\"%d \", node->data); inorder(node->right); }",
    "language": "C",
    "options": [
      "2 1 3",
      "1 2 3",
      "3 1 2",
      "2 3 1"
    ],
    "answer": "2 1 3",
    "explanation": "In-order traversal of binary tree visits left, root, and right children in order."
  },
  {
    "question": "What is the output of the following code for printing the preorder traversal of the binary tree example?",
    "codeBlock": "printf(\"\\nPre-order traversal of binary tree is: \"); preorder(root);",
    "language": "C",
    "options": [
      "1 2 4 5 3",
      "2 1 3 4 5",
      "4 2 5 1 3",
      "1 3 2 4 5"
    ],
    "answer": "1 2 4 5 3",
    "explanation": "Preorder traversal visits the root first, then left subtree, and finally right subtree."
  },
  {
    "question": "Which part of the Prim’s algorithm ensures that no cycle is created while adding edges?",
    "codeBlock": "if (mstSet[v] == false && graph[u][v] < key[v]) { parent[v] = u; key[v] = graph[u][v]; }",
    "language": "C",
    "options": [
      "The check of mstSet[v] == false",
      "The update of parent[v]",
      "The check of graph[u][v] < key[v]",
      "The usage of the graph array"
    ],
    "answer": "The check of mstSet[v] == false",
    "explanation": "Ensuring the vertex is not already in the MST prevents cycles from being formed."
  }
];
