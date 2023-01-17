/**
 *
 * @param {string} s
 */
const decodeString = (s) => {
  let stack = [];

  for (let letter of s) {
    if (letter !== "]") {
      stack.push(letter);
    } else {
      let substr = "";

      while (stack[stack.length - 1] !== "[") {
        substr = stack.pop() + substr;
      }
      stack.pop();

      k = "";
      while (stack.length > 0 && +stack[stack.length - 1] < 10) {
        k = stack.pop() + k;
      }

      stack.push(substr.repeat(+k));
    }
  }

  return stack.join("");
};

