/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  s = s.trimEnd();
  let letter = s.length - 1;
  let length = 0;

  while (s[letter] !== " " && letter >= 0) {
    length++;
    letter--;
  }

  return length;
};
