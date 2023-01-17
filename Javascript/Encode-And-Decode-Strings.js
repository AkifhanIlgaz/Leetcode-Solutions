/**
 *
 * @param {string[]} strs
 * @returns {string}
 */
const encode = (strs) => {
  return strs.map((str) => `${str.length}#${str}`).join("");
};

/**
 *
 * @param {string} str
 * @returns {string[]}
 */
const decode = (str) => {
  let decodedWords = [];
  let i = 0;

  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") {
      j++;
    }
    let len = parseInt(str.slice(i, j), 10);
    decodedWords.push(str.slice(j + 1, j + 1 + len));
    i = j + 1 + len;
  }
  return decodedWords;
};
