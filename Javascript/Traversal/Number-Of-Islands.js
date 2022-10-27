/**
 *
 * @param {character[][]} grid
 * @param {number} connectedComponents
 */
const numIslands = (grid, connectedComponents = 0) => {
  const rows = grid.length;
  const cols = grid[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const isIsland = grid[row][col] == "1";
      if (isIsland) connectedComponents++;

      dfs(grid, row, rows, col, cols);
    }
  }

  return connectedComponents;
};

const dfs = (grid, row, rows, col, cols) => {
  const isBaseCase = grid[row][col] == "0";
  if (isBaseCase) return;

  grid[row][col] = "0";

  for ([_row, _col] of getNeighbors(row, rows, col, cols)) {
    dfs(grid, _row, rows, _col, cols);
  }
};

const getNeighbors = (row, rows, col, cols) => {
  return [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
    .map(([_row, _col]) => [_row + row, col + _col])
    .filter(
      ([_row, _col]) => _row >= 0 && _col >= 0 && _row < rows && _col < cols
    );
};
