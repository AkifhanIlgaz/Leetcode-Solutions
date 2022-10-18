/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
const countPrefixes = (words, s) => {
  const prefixes = new Set();

  for (let i = 1; i <= s.length; i++) {
    prefixes.add(s.slice(0, i));
  }

  let count = 0;

  words.forEach((word) => {
    if (prefixes.has(word)) count++;
  });

  return count;
};
