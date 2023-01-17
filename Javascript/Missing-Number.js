/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  let res = nums.length;

  for (i in nums) {
    res += i - nums[i];
  }
  return res;
};
