/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
  let chars = new Map();

  for (ch of s) {
    const newValue = (chars.get(ch) || 0) + 1;

    chars.set(ch, newValue);
  }

  for (ch of t) {
    if (!chars.has(ch) || chars.get(ch) == 0) {
      return ch;
    }
    const newValue = chars.get(ch) - 1;
    chars.set(ch, newValue);
  }
};

console.log(findTheDifference("a", "aa"));
