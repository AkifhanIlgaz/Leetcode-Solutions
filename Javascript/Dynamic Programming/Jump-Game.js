/**
 *
 * @param {number[]} nums
 * @returns {boolean}
 */
const canJump = (nums) => {
  let goal = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }

  return goal == 0;
};