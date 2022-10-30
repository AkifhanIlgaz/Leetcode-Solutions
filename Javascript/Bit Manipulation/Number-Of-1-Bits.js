/**
 *
 * @param {number} n
 * @returns {number}
 */
const hammingWeight = (n) => {
  let result = 0;

  /* 
    1100 = 12    result = 0;
    1011 = 11

    1100 & 1011 = 1000 = 8  result = 1
    0111 = 7

    1000 & 0111 = 0000 = 0 result = 2

  */

  while (n != 0) {
    n &= n - 1;
    result++;
  }

  return result;
};
