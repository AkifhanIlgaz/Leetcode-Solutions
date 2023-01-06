/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumDifference = (nums, k) => {
  nums.sort((a, b) => a - b);
  let [left, right] = [0, k - 1];
  let res = Number.MAX_VALUE;

  while (right < nums.length) {
    res = Math.min(res, nums[right] - nums[left]);
    left++;
    right++;
  }

  return res;
};
