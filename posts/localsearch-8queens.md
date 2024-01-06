---
title: "Local Search visualisation on 8 Queens Problem"

date: "2023-08-01"

built_using:
  - React Js
  - Javascript
  - HTML
  - CSS

demo_links:
  [
    {
      text: "Demo",
      src: "https://localsearch-8queens.netlify.app/",
    },
    {
      text: "Source Code",
      src: "https://github.com/ehtishama/local-search-8-queens",
    },
  ]

featured_image: /projects/localsearch.png

thumbnail_image: /projects/localsearch.png

short_desc: This project utilizes ReactJS to provide a visual representation of the local search algorithm solving the 8 Queens problem. The 8 Queens problem is a classic puzzle that involves placing eight chess queens on an 8x8 chessboard in a way that none of the queens threaten each other.

long_desc: The 8 Queens problem is a classic puzzle that involves placing 8 chess queens on an 8x8 chessboard in a way that none of the queens threaten each other. This project utilizes ReactJS to provide a visual representation of the local search algorithm solving the 8 Queens problem. 
---

## Background Information


### 8 Queens Problem

The 8 queens puzzle is a classic and challenging problem that requires placing eight chess queens on an 8x8 chessboard in such a way that no two queens are attacking each other. A queen can attack other pieces if they are placed in the same row, column, or diagonal. Therefore, the main goal of the puzzle is to find a solution that places the queens on the board without any of them sharing the same row, column, or diagonal. 

![A solution for 8 queens puzzle](/projects/8queens-solution.png)

However, solving the 8 queens problem can be computationally expensive due to the sheer number of possible arrangements. In fact, there are more than 4 billion possible ways to arrange 8 queens on an 8x8 grid, and only 92 of them are valid solutions. This makes a bruteforce search approach impractical since it has an exponential time complexity.

## Local search 
The local search algorithm is a heuristic approach that initiates with a random state and gradually improves it by making small changes to the present state in such a way that the new state has less cost than the current state. This process is repeated until it finds the optimal solution. The local search algorithm may not always produce the optimal solution due to the possibility of getting stuck in a local minima/maxima state. 

The local search algorithm is useful for solving problems where the goal is to find the best solution by either maximizing or minimizing a cost value from a set of candidate solutions. These algorithms are applied to many hard computational problems, such as the TSP (travelling salesman) problem.  

### Initial State
![initial state for local search](/projects/localsearch/initial-state.png)

The algorithms starts by randomly placing a queen in each of the column on the 8x8 chessboard as shown in the image above. This is the initial configuration where the search starts and moves towards a better configuration. As you can see, the current configuration contains queens sharing same rows and diagonals. This gets accomulated in the total cost of the current configuration which is shown at the top of the chess board. The goal here is to bring the total cost of the configuration down to 0. The local search algorithm does this by exploring the neighboring states and moving to one with cost less than current. 

### Neighboring States


### Getting stuck in local minima
![local minima](/projects/localsearch/local-minima.png)

### Random restart



## Further Reading

  - [Local Search](https://en.wikipedia.org/wiki/Local_search_(optimization)) 
  - [8 Queens Puzzle](https://en.wikipedia.org/wiki/Eight_queens_puzzle)
  - [Travelling Salesman Problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem)
  - [Hill Climbing](https://en.wikipedia.org/wiki/Hill_climbing)