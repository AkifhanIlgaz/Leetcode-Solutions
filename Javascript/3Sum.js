/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    if (i > 0 && a == nums[i - 1]) {
      continue;
    }

    let [left, right] = [i + 1, nums.length - 1];
    while (left < right) {
      let threeSum = a + nums[left] + nums[right];
      if (threeSum > 0) {
        right--;
      } else if (threeSum < 0) {
        left++;
      } else {
        result.push([a, nums[left], nums[right]]);
        left++;
        while (nums[left] == nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }

  return result;
};
