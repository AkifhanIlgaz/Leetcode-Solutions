/**
 * @param {number} n
 * @return {boolean}
 */
const isUgly = (n) => {
  if (n <= 0) return false;

  for (prime of [2, 3, 5]) {
    while (n % prime === 0) {
      n = Math.floor(n / prime);
    }
  }

  return n == 1;
};
