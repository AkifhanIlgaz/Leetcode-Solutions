function isValid(s) {
  if (!s) {
    return false;
  }

  let stack = [];
  let closeToOpen = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

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

  return stack.length === 0;
}
