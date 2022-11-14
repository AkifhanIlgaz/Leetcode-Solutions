/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  for (let digit = digits.length - 1; 0 <= digit; digit--) {
    /* Time O(N) */
    const canCarry = digits[digit] === 9;
    if (canCarry) {
      digits[digit] = 0;
      continue;
    }

    digits[digit]++;

    return digits;
  }

  digits.unshift(1); /* Time O(N) | Space O(N) */

  return digits;
};
