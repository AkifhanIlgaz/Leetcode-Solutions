/**
 *
 * @param {string} word
 * @returns {boolean}
 */
const detectCapitalUse = (word) => {
  if (word.length == 1) {
    return true;
  }

  return (
    word
      .slice(1)
      .split("")
      .every((ch) => isLowercase(ch)) ||
    word.split("").every((ch) => isUppercase(ch))
  );
};

/**
 *
 * @param {string} word
 * @returns {boolean}
 */
const isLowercase = (word) => {
  return word.charCodeAt(0) >= 97 && word.charCodeAt(0) <= 122;
};

const isUppercase = (word) => {
  return word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90;
};
