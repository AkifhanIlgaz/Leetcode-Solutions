/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
  let [p1, p2] = [0, 0];

  let result = "";

  while (p1 < word1.length && p2 < word2.length) {
    result += word1[p1] + word2[p2];
    p1++;
    p2++;
  }

  if (p1 < word1.length) result += word1.slice(p1);

  if (p2 < word2.length) result += word2.slice(p2);

  return result;
};
