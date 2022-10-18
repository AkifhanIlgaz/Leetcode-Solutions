/**
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = (s, t) => {
  let sStack = [];
  let tStack = [];

  addToStack(sStack, s);
  addToStack(tStack, t);

  return sStack.toString() == tStack.toString();
};

/**
 *
 * @param {string[]} stack
 * @param {string} str
 */
const addToStack = (stack, str) => {
  for (let letter of str) {
    if (letter === "#") {
      stack.pop();
    } else {
      stack.push(letter);
    }
  }
};
