/**
 *
 * @param {Number[]} nums
 * @return {Number}
 */
const maxSubArray = (nums) => {
  let currentSum = 0;
  let maximumsum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (currentSum < 0) {
      currentSum = 0;
    }

    currentSum += nums[i];

    if (currentSum > maximumsum) {
      maximumsum = currentSum;
    }
  }

  return maximumsum;
};
