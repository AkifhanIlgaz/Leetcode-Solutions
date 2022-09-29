/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  let pointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      continue;
    } else {
      nums[pointer] = nums[i];
      pointer++;
    }
  }

  return pointer;
};
