import React, { useEffect, useState } from 'react';
import styles from './UI.module.css';
import PlayerPostionProcessor from './PlayerPostionProcessor';
import GridGameEngine from '@/core/grid-game';
import { getCellStyling } from '@/core/utils/grid-game';

interface GameGridProps {
  rows: number;
  columns: number;
  numPlayers: number;
}
const UI: React.FC<GameGridProps> = ({ rows, columns, numPlayers }) => {
  console.log('krishna in UIT stat');
  const gameEngine = new GridGameEngine({ rows, columns, numPlayers });
  const [playerCells, setPlayerCells] = useState<[number, number][]>(
    gameEngine.playerCells
  );
  useEffect(() => {
    const interval = setInterval(() => {
      const newPlayerCells = gameEngine.movePlayersTowardTarget();
      setPlayerCells(newPlayerCells); // Trigger re-render
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const targetCell = gameEngine.targetCell;

  const gridRows = [];

  // Outer loop to generate each row
  for (let i = 0; i < rows; i++) {
    // Create an array to store the cells of each row
    const rowCells = [];

    // Inner loop to generate each cell in the row
    for (let j = 0; j < columns; j++) {
      // Add the cell to the row
      rowCells.push(<div key={j} className={styles.cell}></div>);
    }
    // Add the row to the grid
    gridRows.push(
      <div key={i} className={styles.row}>
        {rowCells}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.grid}>{gridRows}</div>
      <div className={styles.playerPosition}>
        <PlayerPostionProcessor playerCells={playerCells} />
        <div className={styles.targetCell} style={getCellStyling(targetCell)}>
          Target
        </div>
      </div>
    </div>
  );
};

export default UI;
