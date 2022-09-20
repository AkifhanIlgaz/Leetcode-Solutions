function removeDuplicates(nums) {
  let leftPointer = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[leftPointer] = nums[i];
      leftPointer++;
    }
  }
  return leftPointer;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
