/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const numsMap = new Set(nums1);
  const intersectionOfNums = [];

  for (let num of nums2) {
    if (numsMap.has(num)) {
      intersectionOfNums.push(num);
      numsMap.delete(num);
    }
  }

  return intersectionOfNums;
};
