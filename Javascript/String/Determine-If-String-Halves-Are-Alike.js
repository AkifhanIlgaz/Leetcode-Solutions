/**
 * @param {string} s
 * @return {boolean}
 */

const halvesAreAlike = (s) => {
  let middle = s.length / 2;

  return countVowels(s.slice(0, middle)) == countVowels(s.slice(middle));
};

const countVowels = (s) => {
  let set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let count = 0;

  for (letter of s) {
    if (set.has(letter)) {
      count++;
    }
  }

  return count;
};
