/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = (s) => {
  let stack = [];

  for (let letter of s) {
    if (stack.at(-1) == letter) {
      stack.pop();
    } else {
      stack.push(letter);
    }
  }

  return stack.join("");
};
