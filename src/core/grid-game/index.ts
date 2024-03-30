import { userInputType } from '@/components/GridGame/GridGame';
import { log } from 'console';

export default class GridGameEngine {
  private rows: number;
  private columns: number;
  private numPlayers: number;
  // gameGrid: string[][];
  targetCell: [number, number];
  playerCells: [number, number][];
  obstacleCells: Set<string>;

  constructor(userInput: userInputType) {
    this.rows = userInput.row;
    this.columns = userInput.column;
    this.numPlayers = userInput.numPlayers;
    this.obstacleCells = new Set();
    // this.gameGrid = this.getGameGrid();
    this.targetCell = this.generateTargetCell(); // TODO: fix this, do not expose these variable, instead provide them default value and the use getPlayerCells
    this.playerCells = this.generatePlayerCells();
  }

  // private getGameGrid() {
  //   const gameGrid: string[][] = [];

  //   // Initialize the game grid with empty cells
  //   for (let i = 0; i < this.rows; i++) {
  //     const row: string[] = [];
  //     for (let j = 0; j < this.columns; j++) {
  //       row.push('.');
  //     }
  //     gameGrid.push(row);
  //   }
  //   return gameGrid;
  // }

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
}
