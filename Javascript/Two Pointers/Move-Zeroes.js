/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  for (let i = nums.length; i--; ) {
    const number = nums[i];
    if (number == 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
};
