/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b);

  let [left, right, res, total] = [0, 0, 0, 0];

  while (right < nums.length) {
    total += nums[right];

    while (nums[right] * (right - left + 1) > total + k) {
      total -= nums[left];
      left++;
    }

    res = Math.max(res, right - left + 1);
    right++;
  }

  return res;
};
