/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = (mat) => {
  let result = primaryDiagonalSum(mat) + secondaryDiagonalSum(mat);

  if (mat.length % 2 != 0) {
    const center = Math.floor(mat.length / 2);
    return result - mat[center][center];
  }

  return result;
};

const primaryDiagonalSum = (mat) => {
  const [rows, cols] = [mat.length, mat[0].length];
  let [r, c] = [0, 0];
  let result = 0;

  while (r !== rows && c !== cols) {
    result += mat[r][c];
    r++;
    c++;
  }

  return result;
};

const secondaryDiagonalSum = (mat) => {
  const [rows, cols] = [mat.length, mat[0].length];
  let [r, c] = [0, cols - 1];
  let result = 0;
  while (r !== rows && c >= 0) {
    result += mat[r][c];
    r++;
    c--;
  }

  return result;
};
