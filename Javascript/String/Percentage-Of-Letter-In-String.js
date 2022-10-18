/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
const percentageLetter = (s, letter) => {
  let occurrence = 0;
  for (let char of s) {
    if (char === letter) {
      occurrence++;
    }
  }

  return Math.floor((occurrence * 100) / s.length);
};
