/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let [first, second] = [nums.slice(0, n), nums.slice(n)];
  let result = [];

  for (let i = 0; i < first.length; i++) {
    result.push(first[i], second[i]);
  }

  return result;
};
