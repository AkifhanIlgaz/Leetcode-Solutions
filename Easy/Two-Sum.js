function twoSum(nums, target) {
  let targetMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (targetMap.has(target - nums[i])) {
      // Map.has(x) check if Map contains the specified key => x
      return [i, targetMap.get(target - nums[i])];
    } else {
      targetMap.set(nums[i], i);
    }
  }
}

function twoSum(nums, target) {
  let targetMap = new Map();

  for (let index in nums) {
    if (targetMap.has(target - nums[index])) {
      return [index, targetMap.get(target - nums[index])];
    } else {
      targetMap.set(nums[index], index);
    }
  }
}
