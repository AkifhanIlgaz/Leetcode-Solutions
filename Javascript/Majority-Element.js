/**
 *
 * @param {number[]} nums
 * @returns {number}
 */
const majorityElement = (nums) => {
  let res = 0;
  let count = 0;

  for (n of nums) {
    if (count == 0) {
      res = n;
    }
    count += res == n ? 1 : -1;
  }
  return res;
};

const majorityElement2 = (nums) => {
  let count = new Map();
  let maxCount = 0;
  let res = 0;

  for (n of nums) {
    count.set(n, count.get(n) + 1 || 1);
    if (count.get(n) >= maxCount) {
      res = n;
    }
    maxCount = Math.max(maxCount, count.get(n));
  }

  return res;
};

/**
 *
 * @param {number[]} nums
 */
const majorityElement3 = (nums) => {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};
