/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  while (true) {
    let currentSum = numbers[leftPointer] + numbers[rightPointer];

    if (currentSum > target) {
      rightPointer--;
    } else if (currentSum < target) {
      leftPointer++;
    } else {
      return [leftPointer + 1, rightPointer + 1];
    }
  }
};
