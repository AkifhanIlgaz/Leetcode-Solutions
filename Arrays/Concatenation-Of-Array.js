/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getConcatenation = (nums) => {
  // return nums.concat(nums);
  let length = nums.length;
  let index = nums.length;
  nums.length *= 2;
  for (let i = 0; i < length; i++) {
    nums[index] = nums[i];
    index++;
  }

  return nums;
};
