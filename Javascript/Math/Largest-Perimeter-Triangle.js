/**
 * @param {number[]} nums
 * @return {number}
 */
const largestPerimeter = (nums) => {
  nums.sort((a, b) => a - b);
  nums.reverse();

  let maxPerimeter = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] < nums[i + 1] + nums[i + 2]) {
      maxPerimeter = Math.max(
        maxPerimeter,
        nums[i] + nums[i + 1] + nums[i + 2]
      );
      break;
    }
  }

  return maxPerimeter ? maxPerimeter : 0;
};
