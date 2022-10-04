/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let targetMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (targetMap.has(target - nums[i])) {
      return [i, targetMap.get(target - nums[i])];
    }

    targetMap.set(nums[i], i);
  }
};
