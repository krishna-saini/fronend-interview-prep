class GridGame {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.GridGame = [];
    this.obstacleCells = new Set(); // used to keep track of occupied cells
    this.playerCells = [];
    this.targetCell = [];
    this.isGameOver = false; // Flag to indicate if the game is over
    this.createGrid();
    this.generateTargetCell();
    this.heuristicGameGrid = []; // keep value of neighbouts
  }

  // Method to end the game (e.g., when a player wins)
  endGame(winner) {
    this.isGameOver = true;
    this.winner = winner;
    console.log('Game is over. No new players can be added.');
    console.log(`Game over. Player ${winner} wins. try another game`);

    // reset all variables
  }

  createGrid = () => {
    for (let i = 0; i < this.rows; i++) {
      this.GridGame.push([]);
      for (let j = 0; j < this.cols; j++) {
        this.GridGame[i][j] = '_';
      }
    }
    console.log(this.GridGame);
  };

  generateRandomCell = () => {
    const row = Math.floor(Math.random() * this.rows);
    const col = Math.floor(Math.random() * this.cols);
    return [row, col];
  };

  /**
   * generate unique key for a cell
   * input - [1,2]
   * output - '1,2'
   */
  getCellKey(cell) {
    return cell.join(',');
  }

  generateTargetCell = () => {
    const [row, col] = this.generateRandomCell();

    this.obstacleCells.add(this.getCellKey([row, col]));
    this.GridGame[row][col] = 'T';
    this.targetCell = [row, col];
    console.log('krishna setting target', this.targetCell);
    console.log(this.GridGame);

    // set up heuritsic valuest oo
    this.calculateHeuristicGameGrid();
  };

  isValidCellForMovement(row, col) {
    const cellKey = this.getCellKey([row, col]);
    // check if given cell is colliding with any obstacle cell
    if (this.obstacleCells.has(cellKey)) {
      return false;
    }
    return true;
  }

  addPlayer = (player) => {
    console.log("ravvay heru", this.heuristicGameGrid);
    if (this.isGameOver) {
      this.endGame();
    }
    const [row, col] = this.generateRandomCell();
    if (this.isValidCellForMovement(row, col)) {
      this.playerCells.push([row, col]);
      this.obstacleCells.add(this.getCellKey([row, col]));
      this.GridGame[row][col] = player;
      console.log(this.GridGame);

      // update it in every 5secons
      const index = this.playerCells.length - 1;
      this.startPlayerMovementTimer([row, col], index);
    } else {
      this.addPlayer(player);
    }
  };

  getNeighbours(row, col) {
    const neighbors = [
      [row - 1, col - 1], // Top-left
      [row - 1, col], // Top
      [row - 1, col + 1], // Top-right
      [row, col - 1], // Left
      [row, col + 1], // Right
      [row + 1, col - 1], // Bottom-left
      [row + 1, col], // Bottom
      [row + 1, col + 1], // Bottom-right
    ];
    return neighbors;
  }

  calculateHeuristicGameGrid() {
    const gridRows = this.GridGame[0].length;
    const gridCols = this.GridGame.length;
    const [targetRow, targetCol] = this.targetCell;

    const heuristicGameGrid = [];
    for (let i = 0; i < gridRows; i++) {
      heuristicGameGrid.push(Array(gridCols).fill(-1));
    }
    // Mark the target cell as visited with a value of 0
    heuristicGameGrid[targetRow][targetCol] = 0;

    // Create a queue for BFS
    const queue = [[targetRow, targetCol]];

    // BFS loop
    while (queue.length > 0) {
      // extract row,col of first cell of queue
      const cell = queue.shift();

      if (cell) {
        const [row, col] = cell;
        const currentValue = heuristicGameGrid[row][col];

        const neighbors = this.getNeighbours(row, col);

        for (const [neighborRow, neighborCol] of neighbors) {
          // Check if the neighbor cell is within the grid bounds
          if (
            neighborRow >= 0 &&
            neighborRow < gridRows &&
            neighborCol >= 0 &&
            neighborCol < gridCols &&
            heuristicGameGrid[neighborRow][neighborCol] === -1 // Unvisited
          ) {
            // Assign the heuristic value (one more than the current cell)
            heuristicGameGrid[neighborRow][neighborCol] = currentValue + 1;
            queue.push([neighborRow, neighborCol]);
          }
        }
      }
    }
    console.log('krishna heuriits', heuristicGameGrid);
    this.heuristicGameGrid = heuristicGameGrid;
  }

  findNextMovementCell = (currentRow, currentCol) => {
    // Check all neighbor cells (including diagonals)
    const neighbors = this.getNeighbours(currentRow, currentCol);

    // Find the neighbor with the smallest heuristic value
    let smallestValue = Infinity;
    let nextRow = currentRow;
    let nextCol = currentCol;
    const gridRows = this.GridGame[0].length;
    const gridCols = this.GridGame.length;

    for (const [neighborRow, neighborCol] of neighbors) {
      // Check if the neighbor cell is within the grid bounds
      if (
        neighborRow >= 0 &&
        neighborRow < gridRows &&
        neighborCol >= 0 &&
        neighborCol < gridCols
      ) {
        console.log('krishna error', this.heuristicGameGrid);
        const neighborValue = this.heuristicGameGrid[neighborRow][neighborCol];
        if (neighborValue < smallestValue) {
          smallestValue = neighborValue;
          [nextRow, nextCol] = [neighborRow, neighborCol];
        }
      }
    }
    return [nextRow, nextCol];
  };

  startPlayerMovementTimer = ([currentRow, currentCol], currentIndex) => {
    const intervalId = setInterval(() => {
      // find  new position towards target
      const [newRow, newCol] = this.findNextMovementCell(
        currentRow,
        currentCol
      );

      // check if it is a target
      if (newRow === this.targetCell[0] && newCol === this.targetCell[1]) {
        // clear the interval
        clearInterval(intervalId);
        // end the game
        this.endGame();
      }

      // check if it is another player(list of occupied)
      if (isValidCellForMovement(newRow, newCol)) {
        // update grid at two places
        this.GridGame[newRow][newCol] = this.GridGame[currentRow][currentCol];
        this.GridGame[currentRow][currentCol] = '_';

        // update new position in obstruction
        const oldObstructedCellIndex = this.obstacleCells.findIndex(
          (cell) => cell[0] === currentRow && cell[1] === currentCol
        );
        this.obstacleCells[oldObstructedCellIndex] = [newRow, newCol];

        // update new postion with player
        this.playerCells[currentIndex] = [newRow, newCol];
      } else {
        // it means collision is happening
        // remove both from player cells
        this.playerCells.splice(currentIndex, 1);
        // remove both from occupied list
        const obstructedIndex = this.obstacleCells.findIndex(
          (cell) => cell[0] === newRow && cell[1] === newCol
        );
        this.obstacleCells.splice(obstructedIndex, 1);
        // clear the interval
        clearInterval(intervalId);
      }
    }, 2000);
  };

  // TODO: add a method that checks if even cells are available for object or not
}
console.log('starting the grid game');
const game1 = new GridGame(3, 4);

game1.addPlayer('A');
game1.addPlayer('B');
