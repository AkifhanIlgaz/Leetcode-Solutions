function minCostClimbingStairs(cost) {
  let dp = new Array(cost.length);

  dp[dp.length - 1] = cost[cost.length - 1];
  dp[dp.length - 2] = cost[cost.length - 2];

  for (let i = dp.length - 3; i >= 0; i--) {
    dp[i] = cost[i] + Math.min(dp[i + 1], dp[i + 2]);
  }

  return Math.min(dp[0], dp[1]);
}

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
