/**
 * @param {number[]} nums
 * @return {number[]}
 */

const runningSum = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] + nums[i];
  }

  return nums;
};
