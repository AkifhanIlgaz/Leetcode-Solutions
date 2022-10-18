function containsDuplicate(nums) {
  let numbers = {};

  for (let element of nums) {
    if (numbers.hasOwnProperty(element)) {
      return true;
    } else {
      numbers[element] = 1;
    }
  }
  return false;
}
