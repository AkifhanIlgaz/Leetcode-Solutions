function lengthOfLastWord(s) {
  // Trim spaces from the right side
  let rightPointer;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      rightPointer = i;
      break;
    }
  }
  let length = 0;
  while (true) {
    if (rightPointer >= 0 && s[rightPointer] !== " ") {
      rightPointer--;
      length++;
    } else {
      break;
    }
  }

  return length;
}

console.log(lengthOfLastWord("a"));
