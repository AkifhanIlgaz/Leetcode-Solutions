/**
 *
 * @param {Number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const set = new Set();

  for (let number of nums) {
    if (set.has(number)) {
      return true;
    }
    set.add(number);
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
