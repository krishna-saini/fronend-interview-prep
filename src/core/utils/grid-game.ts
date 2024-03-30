export const getCellStyling = (cell: [number, number]) => {
  const cellSize = 50;
  const top = cell[0] * cellSize;
  const left = cell[1] * cellSize;

  const playerStyle: React.CSSProperties = {
    top,
    left,
  };
  return playerStyle;
};
