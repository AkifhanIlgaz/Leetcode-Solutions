/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = (cost) => {
  //   let dp = new Array(cost.length);
  //   dp[cost.length - 1] = cost[cost.length - 1];
  //   dp[cost.length - 2] = cost[cost.length - 2];

  for (let i = cost.length - 3; i >= 0; i--) {
    cost[i] = cost[i] + Math.min(cost[i + 1], cost[i + 2]);
  }

  return Math.min(cost[0], cost[1]);
};
