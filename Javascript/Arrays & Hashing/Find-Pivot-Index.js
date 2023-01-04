/**
 *
 * @param {number[]} nums
 * @returns {number}
 */
const pivotIndex = (nums) => {
  const total = nums.reduce((acc, element) => acc + element);
  let leftSum = 0;

  for (i in nums) {
    const num = nums[i];
    const rightSum = total - leftSum - num;
    if (rightSum === leftSum) {
      return i;
    }
    leftSum += num;
  }
  return -1;
};
