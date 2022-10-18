function twoSum(numbers, target) {
  let targetMap = new Map();
  let resultArray;
  for (let i = 0; i < numbers.length; i++) {
    if (targetMap.has(target - numbers[i])) {
      resultArray = [targetMap.get(target - numbers[i]) + 1, i + 1];
    } else {
      targetMap.set(numbers[i], i);
    }
  }
  return resultArray.sort();
}

function twoSum(numbers, target) {
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
}
