/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  let one = 1;
  let two = 1;

  for (let i = 0; i < n - 1; i++) {
    let temp = one + two;
    two = one;
    one = temp;
  }

  return one;
};
