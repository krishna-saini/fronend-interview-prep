// pages/games/grid-game.tsx

import React, { useState } from 'react';
import styles from './GridGame.module.css';
import GridGameEngine from '@/core/grid-game';
import UI from './UI';

export interface userInputType {
  rows: number;
  columns: number;
  numPlayers: number;
}

const GridGame = () => {
  const [showGameRules, setShowGameRules] = useState(true);
  const [showInputForm, setShowInputForm] = useState(false);
  const [userInput, setUserInput] = useState<userInputType>({
    rows: 0,
    columns: 0,
    numPlayers: 0,
  });
  const [gameInitialized, setGameInitialized] = useState<boolean>(false);

  const handleStartGame = () => {
    setShowGameRules(false);
    setShowInputForm(true);
  };

  const handleInputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowInputForm(false);
    setGameInitialized(true);
  };

  return (
    <div className={styles.container}>
      {showGameRules && (
        <div className={styles.rules}>
          <h2>Game Rules</h2>
          <p>Here are the rules of the grid game...</p>
          <button onClick={handleStartGame}>
            Provide your input for Grid Game
          </button>
        </div>
      )}
      {showInputForm && (
        <div className={styles.formContainer}>
          <h2>Enter Game Details</h2>
          <form onSubmit={handleInputSubmit}>
            <div className={styles.formField}>
              <label>Number of Rows:</label>
              <input
                type='number'
                value={userInput.rows}
                onChange={(e) =>
                  setUserInput((prev: userInputType) => {
                    return {
                      ...prev,
                      rows: parseInt(e.target.value),
                    };
                  })
                }
              />
            </div>
            <div className={styles.formField}>
              <label>Number of Columns:</label>
              <input
                type='number'
                value={userInput.columns}
                onChange={(e) =>
                  setUserInput((prev: userInputType) => {
                    return {
                      ...prev,
                      columns: parseInt(e.target.value),
                    };
                  })
                }
              />
            </div>
            <div className={styles.formField}>
              <label>Number of Players:</label>
              <input
                type='number'
                value={userInput.numPlayers}
                onChange={(e) =>
                  setUserInput((prev: userInputType) => {
                    return {
                      ...prev,
                      numPlayers: parseInt(e.target.value),
                    };
                  })
                }
              />
            </div>
            <button type='submit'>Start Game</button>
          </form>
        </div>
      )}
      {gameInitialized && (
        <UI
          rows={userInput.rows}
          columns={userInput.columns}
          numPlayers={userInput.numPlayers}
        />
      )}
    </div>
  );
};

export default GridGame;
