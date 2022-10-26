/**
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {boolean}
 */
const checkSubarraySum = (nums, k) => {
  let remainderMap = new Map();
  remainderMap.set(0, -1);

  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    total += n;

    const remainder = total % k;

    if (!remainderMap.has(remainder)) {
      remainderMap.set(remainder, i);
    } else if (i - remainderMap.get(remainder) > 1) {
      return true;
    }
  }

  return false;
};

/**
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {boolean}
 */
const checkSubarraySumZoz = (nums, k) => {
  let remainderMap = new Map();
  remainderMap.set(0, -1);

  for (let index = 0; index < nums.length; index++) {
    let remainder;
    if (index == 0) {
      remainder = nums[index] % k;
    } else {
      remainder = (nums[index - 1] + nums[index]) % k;
    }

    if (
      remainderMap.has(remainder) &&
      index - remainderMap.get(remainder) >= 2
    ) {
      return true;
    } else {
      nums[index] = remainder;
      if (!remainderMap.has(remainder)) {
        remainderMap.set(remainder, index);
      }
    }
  }

  return false;
};
