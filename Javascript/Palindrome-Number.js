/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) return false;

  let div = 1;

  while (x >= 10 * div) {
    div *= 10;
  }

  while (x) {
    if (x < 100 && x % 11 == 0) return true;
    const right = x % 10;
    const left = Math.floor(x / div);

    if (right !== left) return false;

    x = Math.floor((x % div) / 10);
    div = div / 100;
  }

  return true;
};
