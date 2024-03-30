import { getCellStyling } from '@/core/utils/grid-game';
import React from 'react';
import styles from './PlayerPositonProcessor.module.css';

interface PlayerCells extends Array<[number, number]> {}

// TODO: fix the type of playerCells
const PlayerPositionProcessor: React.FC<any> = ({ playerCells }) => {
  return (
    <>
      {playerCells.map((playerCell: [number, number], index: number) => (
        <div
          key={index}
          className={styles.targetCell}
          style={getCellStyling(playerCell)}
        >
          {`Player ${index + 1}`}
        </div>
      ))}
    </>
  );
};

export default PlayerPositionProcessor;
