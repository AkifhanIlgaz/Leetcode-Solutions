/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */

const maximumBags = (capacity, rocks, additionalRocks) => {
  let difference = capacity.map((element, index) => {
    return element - rocks[index];
  });

  difference.sort((a, b) => a - b);
  let count = 0;

  for (let rock of difference) {
    if (additionalRocks >= rock) {
      count++;
      additionalRocks -= rock;
    }
  }

  return count;
};

console.log(
  maximumBags(
    [
      54, 18, 91, 49, 51, 45, 58, 54, 47, 91, 90, 20, 85, 20, 90, 49, 10, 84,
      59, 29, 40, 9, 100, 1, 64, 71, 30, 46, 91,
    ],
    [
      14, 13, 16, 44, 8, 20, 51, 15, 46, 76, 51, 20, 77, 13, 14, 35, 6, 34, 34,
      13, 3, 8, 1, 1, 61, 5, 2, 15, 18,
    ],
    77
  )
);
