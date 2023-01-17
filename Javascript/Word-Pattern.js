/**
 *
 * @param {string} pattern
 * @param {string} s
 * @returns {boolean}
 */
const wordPattern = (pattern, s) => {
  let words = s.split(" ");

  if (words.length !== pattern.length) {
    return false;
  }

  let charToWord = new Map();
  let wordToChar = new Map();

  for (let i = 0; i < words.length; i++) {
    let c = pattern[i];
    let w = words[i];

    if (charToWord.has(c) && charToWord.get(c) != w) {
      return false;
    }

    if (wordToChar.has(w) && wordToChar.get(w) != c) {
      return false;
    }

    charToWord.set(c, w);
    wordToChar.set(w, c);
  }

  return true;
};
