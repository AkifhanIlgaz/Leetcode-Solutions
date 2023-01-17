/**
 * @param {number[]} nums
 * @return {number}
 */
const numberOfArithmeticSlices = function (nums, dp = new Map(), result = 0) {
  nums.forEach((n, k) => {
    dp[k] = new Map();

    for (let i = 0; i < k; i++) {
      let m = nums[i];
      let diff = n - m;
      let apsAsK = dp[k].get(diff) || 0;
      let apsAsI = dp[i].get(diff) || 0;

      result += apsAsI;
      dp[k].set(diff, apsAsK + apsAsI + 1);
    }
  });

  return result;
};
