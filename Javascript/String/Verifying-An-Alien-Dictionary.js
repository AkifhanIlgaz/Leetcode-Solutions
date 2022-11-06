/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = (words, order) => {
  const orderMap = new Map();
  orderMap.set(undefined, -1);

  for (index in order) {
    let letter = order[index];
    orderMap.set(letter, +index);
  }

  for (let i = 0; i <= words.length - 2; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];
    if (sortCheck(word1, word2, orderMap) == false) return false;
  }

  return true;
};

/**
 *
 * @param {string} word1
 * @param {string} word2
 * @param {Map} orderMap
 * @return {boolean}
 */

const sortCheck = (word1, word2, orderMap) => {
  for (let i = 0; i < word1.length; i++) {
    let letter1 = word1[i];
    let letter2 = word2[i];

    if (orderMap.get(letter1) == orderMap.get(letter2)) continue;
    return orderMap.get(letter1) < orderMap.get(letter2) ? true : false;
  }
};
