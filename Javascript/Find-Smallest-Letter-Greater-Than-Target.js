function nextGreatestLetter(letters, target) {
  let result = letters[0];

  for (const letter of letters) {
    if (letter > target) {
      result = letter;
      break;
    }
  }

  return result;
}
