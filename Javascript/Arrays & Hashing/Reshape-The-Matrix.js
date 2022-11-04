/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = (mat, r, c) => {
  if (mat.length * mat[0].length !== r * c) return mat;

  let arr = [];

  mat.forEach((array) => {
    arr.push(...array);
  });

  let result = new Array();

  for (let i = 0; i < r; i++) {
    result.push(new Array(c));
  }

  let k = 0;

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      result[i][j] = arr[k];
      k++;
    }
  }

  return result;
};
