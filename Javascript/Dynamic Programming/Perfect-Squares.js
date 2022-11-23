/**
 * @param {number} n
 * @return {number}
 */
const numSquares = (n) => {
  const dp = new Array(n + 1).fill(n);
  dp[0] = 0;

  for (let target = 1; target < n + 1; target++) {
    for (let s = 1; s < target + 1; s++) {
      let square = s * s;
      if (target - square < 0) break;
      dp[target] = Math.min(dp[target], 1 + dp[target - square]);
    }
  }
  return dp[n];
};
