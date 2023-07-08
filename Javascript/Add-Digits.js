/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num < 10) return num;

  return addDigits(parseNum(num));
};

/**
 *
 * @param {number} num
 * @returns {number}
 */
function parseNum(num) {
  let sumOfDigits = 0;

  while (num > 0) {
    sumOfDigits += num % 10;
    num = Math.floor(num / 10);
  }

  return sumOfDigits;
}
