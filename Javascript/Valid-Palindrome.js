/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  if (s.length == 0) {
    return true;
  }

  s = s.toLowerCase();
  return isValid(s);
};

const isValid = (s) => {
  let leftPointer = 0;
  let rightPointer = s.length - 1;

  while (leftPointer < rightPointer) {
    while (leftPointer < rightPointer && isNonAlphaNumeric(s[leftPointer]))
      leftPointer++;
    while (leftPointer < rightPointer && isNonAlphaNumeric(s[rightPointer]))
      rightPointer--;

    const isSame = s[leftPointer] == s[rightPointer];

    if (!isSame) {
      return false;
    }
    leftPointer++;
    rightPointer--;
  }

  return true;
};

const isNonAlphaNumeric = (char) => {
  const isNonAlpha = char < "a" || "z" < char; // a(97) - z(122)
  const isNonNumeric = char < "0" || "9" < char; // 0(48) - 9(57)

  return isNonAlpha && isNonNumeric;
};
