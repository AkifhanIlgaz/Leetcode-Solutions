/**
 *
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  let [left, right] = [0, s.length - 1];

  let temp = s.split("");

  while (left < right) {
    while (left < s.length && !vowels.has(temp[left].toLowerCase())) {
      left++;
    }

    while (right >= 0 && !vowels.has(temp[right].toLowerCase())) {
      right--;
    }

    if (left < right) {
      let t = temp[left];
      temp[left] = temp[right];
      temp[right] = t;
      left++;
      right--;
    }
  }
  return temp.join("");
};
