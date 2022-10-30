/**
 *
 * @param {number[][]} grid
 * @param {number} k
 * @returns {number}
 */
const shortestPath = (grid, k) => {
  const [row, col] = [grid.length, grid[0].length];
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const q = [];
  let v = new Array(row)
    .fill(false)
    .map(() =>
      new Array(col).fill(false).map(() => new Array(k + 1).fill(false))
    );

  let steps = 0;

  q.push([0, 0, k]);

  while (q.length !== 0) {
    let size = q.length;

    while (size-- > 0) {
      let curr = q.shift();

      if (curr[0] == row - 1 && curr[1] == col - 1) return steps;

      for (let d of directions) {
        let i = curr[0] + d[0];
        let j = curr[1] + d[1];
        let obs = curr[2];

        if (i >= 0 && i < row && j >= 0 && j < col) {
          if (grid[i][j] == 0 && !v[i][j][obs]) {
            q.push([i, j, obs]);
            v[i][j][obs] = true;
          } else if (grid[i][j] == 1 && obs > 0 && !v[i][j][obs - 1]) {
            q.push([i, j, obs - 1]);
            v[i][j][obs - 1] = true;
          }
        }
      }
    }

    steps++;
  }

  return -1;
};
