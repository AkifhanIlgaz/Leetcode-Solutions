/**
 *
 * @param {string} text
 * @returns {number}
 */
const maxNumberOfBalloons = (text) => {
  let countText = {};
  let balloon = {};
  let result = text.length;

  for (ch of text) {
    countText[ch] = (countText[ch] || 0) + 1;
  }

  for (ch of "balloon") {
    balloon[ch] = (balloon[ch] || 0) + 1;
  }

  for (c in balloon) {
    result = Math.min(result, Math.floor((countText[c] || 0) / balloon[c]));
  }

  return result;
};
