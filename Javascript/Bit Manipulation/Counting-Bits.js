/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = (n) => {
  const dp = new Array(n + 1).fill(0);
  let offset = 1;

  for (let i = 1; i < n + 1; i++) {
    if (offset * 2 == i) {
      offset = i;
    }
    dp[i] = 1 + dp[i - offset];
  }
  return dp;
};
