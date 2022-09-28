/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = (left + right) >> 1; // Math.floor((left + rigth) / 2)
    const guess = nums[mid];

    const isTarget = guess === target;
    if (isTarget) return mid;

    const isTargetGreater = target > guess;
    if (isTargetGreater) left = mid + 1;

    const isTargetSmaller = target < guess;
    if (isTargetSmaller) right = mid - 1;
  }
  return -1;
};
