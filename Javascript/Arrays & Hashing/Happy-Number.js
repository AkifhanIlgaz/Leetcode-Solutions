/**
 *
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
  const set = new Set();

  while (n !== 1) {
    if (set.has(n)) return false;
    set.add(n);
    n = newNumber(n);
  }

  return true;
};

const newNumber = (n) => {
  let newNumber = 0;
  while (n >= 1) {
    newNumber += (n % 10) ** 2;

    n = Math.floor(n / 10);
  }

  return newNumber;
};
