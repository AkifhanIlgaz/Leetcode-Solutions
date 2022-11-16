/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = (n) => {
  let middle;

  let [low, high] = [1, n];

  while (low <= high) {
    middle = Math.floor((low + high) / 2);

    if (guess(middle) < 0) {
      high = middle - 1;
    } else if (guess(middle) > 0) {
      low = middle + 1;
    } else {
      return middle;
    }
  }
};
