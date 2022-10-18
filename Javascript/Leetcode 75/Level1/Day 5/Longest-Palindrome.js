/**
 *
 * @param {string} s
 * @return {number}
 *
 */
const longestPalindrome = (s) => {
  let set = new Set();
  let length = 0;
  // If our set has the char it means it occurs 2 times. We can use this char for palindrome
  for (char of s) {
    if (set.has(char)) {
      length += 2;
      set.delete(char);
    } else {
      set.add(char);
    }
  }

  // If the size of set is greater than 0 it means we have at least one character that occurs only one time in our string
  // We can place one of them in the middle of our palindrome
  return set.size > 0 ? length + 1 : length;
};
