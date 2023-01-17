/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = (arr) => {
  //   if (arr.length == 1) {
  //     return [-1];
  //   }
  let rightGreatest = arr[arr.length - 1];
  arr[arr.length - 1] = -1;

  for (let i = arr.length - 2; i >= 0; i--) {
    let currentValue = arr[i];
    arr[i] = rightGreatest;
    rightGreatest = Math.max(currentValue, rightGreatest);
  }

  return arr;
};
