/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicates = (nums) => {
  let set = new Set();

  for (number of nums) {
    if (set.has(number)) {
      return true;
    }
    set.add(number);
  }

  return false;
};
