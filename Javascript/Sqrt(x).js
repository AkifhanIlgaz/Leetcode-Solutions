/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x == 0 || x == 1) {
    return x;
  }

  let [i, result] = [1, 1];

  while (result <= x) {
    i++;
    result = i * i;
  }

  return i - 1;
};
