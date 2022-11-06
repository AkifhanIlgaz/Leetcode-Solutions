/**
 *
 * @param {string} s
 * @return {string}
 */
const freqAlphabets = (s) => {
  let result = "";

  for (let i = s.length - 1; i >= 0; i--) {
    let letter = s[i];

    if (letter == "#") {
      result = intToLetter(s[i - 1] * 1 + s[i - 2] * 10) + result;
      i -= 2;
    } else {
      result = intToLetter(+letter) + result;
    }
  }

  return result;
};

const intToLetter = (int) => {
  return String.fromCharCode(int + "a".charCodeAt(0) - 1);
};

console.log(freqAlphabets("1326#"));
