/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = (arr) => {
  return arr.sort((a, b) => {
    return numberOf1Bits(a) == numberOf1Bits(b)
      ? a - b
      : numberOf1Bits(a) - numberOf1Bits(b);
  });
};

const numberOf1Bits = (x) => {
  let count = 0;

  while (x) {
    x &= x - 1;
    count++;
  }

  return count;
};

console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]));
