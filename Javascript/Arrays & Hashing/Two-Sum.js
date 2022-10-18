/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  let targetMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let number = target - nums[i];

    if (targetMap.has(number)) {
      return [i, targetMap.get(number)];
    }

    targetMap.set(nums[i], i);
  }
};
