function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = 0;

  for (let n of nums) {
    if (currentSum < 0) {
      currentSum = 0;
    }
    currentSum += n;

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}
