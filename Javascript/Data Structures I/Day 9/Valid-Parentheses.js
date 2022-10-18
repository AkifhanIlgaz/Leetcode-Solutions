/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  let closeToOpen = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  let stack = [];

  for (let parenthes of s) {
    if (closeToOpen.hasOwnProperty(parenthes)) {
      if (stack.length !== 0 && stack.at(-1) === closeToOpen[parenthes]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(parenthes);
    }
  }

  return stack.length == 0;
};
