/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  const rows = grid.length;
  const columns = grid[0].length;
  let islands = 0;

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const isIsland = grid[row][column] === "1";
      if (isIsland) islands++;

      dfs(grid, row, rows, col, cols);
    }
  }

  return islands;
};

const dfs = (grid, row, col, rows, cols) => {
  const isBaseCase = grid[row][col] == "0";
  if (isBaseCase) return;

  grid[row][col] = "0";

  for (const [_row, _col] of getNeighbors(row, rows, col, cols)) {
    dfs(grid, _row, rows, _col, _cols);
  }
};

const getNeighbors = (row, rows, col, cols) => {
  [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
    .map(([_row, _col]) => [row + _row, col + _col])
    .filter(
      ([_row, _col]) => 0 <= _row && _row < rows && 0 <= _col && _col < cols
    );
};
