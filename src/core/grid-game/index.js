"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GridGameEngine = /** @class */ (function () {
    function GridGameEngine(userInput) {
        this.rows = userInput.rows;
        this.columns = userInput.columns;
        this.numPlayers = userInput.numPlayers;
        this.obstacleCells = new Set();
        this.gameGrid = this.getGameGrid();
        this.targetCell = this.generateTargetCell(); // TODO: fix this, do not expose these variable, instead provide them default value and the use getPlayerCells
        this.playerCells = this.generatePlayerCells();
        this.calculateHeuristicGameGrid();
    }
    GridGameEngine.prototype.getGameGrid = function () {
        var gameGrid = [];
        // Initialize the game grid with empty cells
        for (var i = 0; i < this.rows; i++) {
            var row = [];
            for (var j = 0; j < this.columns; j++) {
                row.push(-1);
            }
            gameGrid.push(row);
        }
        return gameGrid;
    };
    GridGameEngine.prototype.calculateHeuristicGameGrid = function () {
        var gameGrid = this.gameGrid;
        var gridRows = gameGrid[0].length;
        var gridCols = gameGrid.length;
        var _a = this.targetCell, targetRow = _a[0], targetCol = _a[1];
        // Mark the target cell as visited with a value of 0
        gameGrid[targetRow][targetCol] = 0;
        // Create a queue for BFS
        var queue = [[targetRow, targetCol]];
        console.log('krishna in heriehr', this.gameGrid);
        // BFS loop
        while (queue.length > 0) {
            // extract row,col of first cell of queue
            var cell = queue.shift();
            if (cell) {
                var row = cell[0], col = cell[1];
                var currentValue = gameGrid[row][col];
                var neighbors = this.getNeighbours(row, col);
                for (var _i = 0, neighbors_1 = neighbors; _i < neighbors_1.length; _i++) {
                    var _b = neighbors_1[_i], neighborRow = _b[0], neighborCol = _b[1];
                    // Check if the neighbor cell is within the grid bounds
                    if (neighborRow >= 0 &&
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
    };
    /**
     * generate key for a cell
     * input - [1,2]
     * output - '1,2'
     */
    GridGameEngine.prototype.getCellKey = function (cell) {
        return cell.join(',');
    };
    GridGameEngine.prototype.generateUniqueCell = function () {
        var row = Math.floor(Math.random() * this.rows);
        var column = Math.floor(Math.random() * this.columns);
        return [row, column];
    };
    GridGameEngine.prototype.generateTargetCell = function () {
        var cell = this.generateUniqueCell();
        console.log('krishna obstace', this.obstacleCells);
        this.obstacleCells.add(this.getCellKey(cell));
        return cell;
    };
    GridGameEngine.prototype.isValidCell = function (cell) {
        var cellKey = this.getCellKey(cell);
        // check if given cell is colliding with any obstacle cell key
        if (this.obstacleCells.has(cellKey)) {
            return false;
        }
        return true;
    };
    GridGameEngine.prototype.generatePlayerCells = function () {
        var playerCells = [];
        while (playerCells.length < this.numPlayers) {
            // get the cell
            var cell = this.generateUniqueCell();
            // check if it is a valid cell
            if (this.isValidCell(cell)) {
                playerCells.push(cell);
                // add the player cell as obstacle cell
                this.obstacleCells.add(this.getCellKey(cell));
            }
        }
        return playerCells;
    };
    GridGameEngine.prototype.getTargetCell = function () {
        return this.targetCell;
    };
    GridGameEngine.prototype.getPlayerCells = function () {
        return this.playerCells;
    };
    GridGameEngine.prototype.getNeighbours = function (row, col) {
        var neighbors = [
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
    };
    GridGameEngine.prototype.movePlayersTowardTarget = function () {
        var _this = this;
        this.playerCells.forEach(function (playerCell, index) {
            var _a;
            var row = playerCell[0];
            var col = playerCell[1];
            var currentValue = _this.gameGrid[row][col];
            var gameGrid = _this.gameGrid;
            var gridRows = gameGrid[0].length;
            var gridCols = gameGrid.length;
            // Check all neighbor cells (including diagonals)
            var neighbors = _this.getNeighbours(row, col);
            // Find the neighbor with the smallest heuristic value
            var smallestValue = Infinity;
            var nextRow = row;
            var nextCol = col;
            for (var _i = 0, neighbors_2 = neighbors; _i < neighbors_2.length; _i++) {
                var _b = neighbors_2[_i], neighborRow = _b[0], neighborCol = _b[1];
                // Check if the neighbor cell is within the grid bounds
                if (neighborRow >= 0 &&
                    neighborRow < gridRows &&
                    neighborCol >= 0 &&
                    neighborCol < gridCols) {
                    var neighborValue = _this.gameGrid[neighborRow][neighborCol];
                    if (neighborValue < smallestValue) {
                        smallestValue = neighborValue;
                        _a = [neighborRow, neighborCol], nextRow = _a[0], nextCol = _a[1];
                    }
                }
            }
            // Move the player to the neighbor with the smallest heuristic value
            _this.playerCells[index] = [nextRow, nextCol];
        });
        return this.playerCells;
    };
    return GridGameEngine;
}());
exports.default = GridGameEngine;
