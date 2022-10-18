function validPalindrome(s) {
  let stack = [];

  let lowerCase = s.toLowerCase();

  for (let i = 0; i < lowerCase.length; i++) {
    if (
      (lowerCase.charCodeAt(i) <= 122 && lowerCase.charCodeAt(i) >= 97) ||
      (lowerCase.charCodeAt(i) <= 57 && lowerCase.charCodeAt(i) >= 48)
    ) {
      stack.push(lowerCase[i]);
    }
  }

  let string = stack.join("");

  let reversedString = "";
  while (stack.length !== 0) {
    reversedString += stack.pop();
  }

  return string === reversedString;
}


