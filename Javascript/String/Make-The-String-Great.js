/**
 * @param {string} s
 * @return {string}
 */
const makeGood = (s) => {
  let stack = [];

  for (let char of s) {
    if (stack.length > 0 && isPair(stack.at(-1), char)) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};

const isPair = (s1, s2) => {
  return Math.abs(s1.charCodeAt(0) - s2.charCodeAt(0)) == 32;
};

makeGood("leEeetcode");
