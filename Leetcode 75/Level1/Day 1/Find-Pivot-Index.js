/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
  let sumOfLeft = new Array(nums.length);
  let sumOfRight = new Array(nums.length);
  sumOfLeft[0] = 0;
  sumOfRight[nums.length - 1] = 0;

  for (let i = 1; i < nums.length; i++) {
    sumOfLeft[i] = sumOfLeft[i - 1] + nums[i - 1];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    sumOfRight[i] = sumOfRight[i + 1] + nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    if (sumOfLeft[i] === sumOfRight[i]) {
      return i;
    }
  }

  return -1;
};
