/**
 *
 * @param {number[]} flowerbed
 * @param {number} n
 * @returns {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
  let f = [0, ...flowerbed, 0];

  for (i = 1; i < f.length - 1; i++) {
    if (f[i - 1] == 0 && f[i] == 0 && f[i + 1] == 0) {
      f[i] = 1;
      n -= 1;
    }
  }

  return n <= 0;
};
