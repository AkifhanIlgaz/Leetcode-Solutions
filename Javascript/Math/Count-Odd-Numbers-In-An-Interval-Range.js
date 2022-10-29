/**
 *
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds = (low, high) => {
  let count = 0;

  for (let i = low; i <= high; i++) {
    if (i % 2 !== 0) count++;
  }

  return count;
};
