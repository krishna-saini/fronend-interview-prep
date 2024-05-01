import { userInputType } from '@/components/GridGame/GridGame';
import { log } from 'console';

export default class GridGameEngine {
  private rows: number;
  private columns: number;
  private numPlayers: number;
  gameGrid: number[][];
  targetCell: [number, number];
  playerCells: [number, number][];
  obstacleCells: Set<string>;

  constructor(userInput: userInputType) {
    this.rows = userInput.rows;
    this.columns = userInput.columns;
    this.numPlayers = userInput.numPlayers;
    this.obstacleCells = new Set();
    this.gameGrid = this.getGameGrid();
    this.targetCell = this.generateTargetCell(); // TODO: fix this, do not expose these variable, instead provide them default value and the use getPlayerCells
    this.playerCells = this.generatePlayerCells();
    this.calculateHeuristicGameGrid();
  }

  private getGameGrid() {
    const gameGrid: number[][] = [];

    // Initialize the game grid with empty cells
    for (let i = 0; i < this.rows; i++) {
      const row: number[] = [];
      for (let j = 0; j < this.columns; j++) {
        row.push(-1);
      }
      gameGrid.push(row);
    }
    return gameGrid;
  }

  private calculateHeuristicGameGrid() {
    const gameGrid = this.gameGrid;
    const gridRows = gameGrid[0].length;
    const gridCols = gameGrid.length;
    const [targetRow, targetCol] = this.targetCell;
    // Mark the target cell as visited with a value of 0
    gameGrid[targetRow][targetCol] = 0;

    // Create a queue for BFS
    const queue: number[][] = [[targetRow, targetCol]];
    console.log('krishna in heriehr', this.gameGrid);
    // BFS loop
    while (queue.length > 0) {
      // extract row,col of first cell of queue
      const cell = queue.shift();
      if (cell) {
        const [row, col] = cell;
        const currentValue = gameGrid[row][col];

        const neighbors = this.getNeighbours(row, col);

        for (const [neighborRow, neighborCol] of neighbors) {
          // Check if the neighbor cell is within the grid bounds
          if (
            neighborRow >= 0 &&
            neighborRow < gridRows &&
            neighborCol >= 0 &&
            neighborCol < gridCols &&
            gameGrid[neighborRow][neighborCol] === -1 // Unvisited
          ) {
            // Assign the heuristic value (one more than the current cell)
            gameGrid[neighborRow][neighborCol] = currentValue + 1;
            queue.push([neighborRow, neighborCol]);
          }
        }
      }
    }
    console.log('krishna heuriits', gameGrid);
    return gameGrid;
  }
  /**
   * generate key for a cell
   * input - [1,2]
   * output - '1,2'
   */
  private getCellKey(cell: [number, number]): string {
    return cell.join(',');
  }

  private generateUniqueCell(): [number, number] {
    const row = Math.floor(Math.random() * this.rows);
    const column = Math.floor(Math.random() * this.columns);
    return [row, column];
  }

  private generateTargetCell(): [number, number] {
    const cell = this.generateUniqueCell();
    console.log('krishna obstace', this.obstacleCells);

    this.obstacleCells.add(this.getCellKey(cell));
    return cell;
  }

  private isValidCell(cell: [number, number]) {
    const cellKey = this.getCellKey(cell);
    // check if given cell is colliding with any obstacle cell key
    if (this.obstacleCells.has(cellKey)) {
      return false;
    }
    return true;
  }

  private generatePlayerCells(): [number, number][] {
    const playerCells = [];
    while (playerCells.length < this.numPlayers) {
      // get the cell
      const cell = this.generateUniqueCell();
      // check if it is a valid cell
      if (this.isValidCell(cell)) {
        playerCells.push(cell);
        // add the player cell as obstacle cell
        this.obstacleCells.add(this.getCellKey(cell));
      }
    }
    return playerCells;
  }

  getTargetCell() {
    return this.targetCell;
  }

  getPlayerCells() {
    return this.playerCells;
  }

  private getNeighbours(row: number, col: number) {
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

  movePlayersTowardTarget() {
    this.playerCells.forEach((playerCell: [number, number], index) => {
      const row = playerCell[0];
      const col = playerCell[1];
      const currentValue = this.gameGrid[row][col];

      const gameGrid = this.gameGrid;
      const gridRows = gameGrid[0].length;
      const gridCols = gameGrid.length;

    
    });
    return this.playerCells;
  }
}
