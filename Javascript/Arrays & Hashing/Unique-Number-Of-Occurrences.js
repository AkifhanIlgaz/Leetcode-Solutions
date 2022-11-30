/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = (arr) => {
  let occurrences = new Map();

  for (num of arr) {
    if (occurrences.has(num)) {
      occurrences.set(num, occurrences.get(num) + 1);
    } else {
      occurrences.set(num, 1);
    }
  }

  return !containsDuplicates(Array.from(occurrences.values()));
};

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
