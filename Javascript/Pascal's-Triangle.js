/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  let result = [[1]];

  for (let i = 0; i < numRows - 1; i++) {
    let temp = [0].concat(result.at(-1));
    temp.push(0);

    let row = [];

    for (let j = 0; j < result.at(-1).length + 1; j++) {
      row[j] = temp[j] + temp[j + 1];
    }

    result.push(row);
  }

  return result;
};
