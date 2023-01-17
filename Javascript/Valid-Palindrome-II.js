/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s) => {
  if (s.length === 1) {
    return true;
  }

  let leftPointer = 0;
  let rightPointer = s.length - 1;

  while (leftPointer < rightPointer) {
    const isSame = s[leftPointer] === s[rightPointer];

    if (!isSame) {
      return (
        isPalindrome(s.slice(leftPointer + 1, rightPointer + 1)) ||
        isPalindrome(s.slice(leftPointer, rightPointer))
      );
    }

    leftPointer++;
    rightPointer--;
  }

  return true;
};

const isPalindrome = (s) => {
  if (s.length === 1) {
    return true;
  }

  let leftPointer = 0;
  let rightPointer = s.length - 1;

  while (leftPointer < rightPointer) {
    const isSame = s[leftPointer] === s[rightPointer];

    if (!isSame) {
      return false;
    }

    leftPointer++;
    rightPointer--;
  }

  return true;
};
