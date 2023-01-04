/**
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
const findDisappearedNumbers = (nums) => {
  for (n of nums) {
    const i = Math.abs(n) - 1;
    nums[i] = -1 * Math.abs(nums[i]);
  }

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > 0) {
      result.push(i + 1);
    }
  }

  return result;
};
