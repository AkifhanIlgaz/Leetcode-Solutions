let minimumAverageDifference = function (nums) {
  let n = nums.length;
  let ans = -1;
  let minAvgDiff = Number.MAX_SAFE_INTEGER;
  let currPrefixSum = 0;

  // Get total sum of array.
  let totalSum = 0;
  for (let index = 0; index < n; ++index) {
    totalSum += nums[index];
  }

  for (let index = 0; index < n; ++index) {
    currPrefixSum += nums[index];

    // Calculate average of left part of array, index 0 to i.
    let leftPartAverage = currPrefixSum;
    leftPartAverage = Math.floor(leftPartAverage / (index + 1));

    // Calculate average of right part of array, index i+1 to n-1.
    let rightPartAverage = totalSum - currPrefixSum;
    // If right part have 0 elements, then we don't divide by 0.
    if (index != n - 1) {
      rightPartAverage = Math.floor(rightPartAverage / (n - index - 1));
    }

    let currDifference = Math.abs(leftPartAverage - rightPartAverage);
    // If current difference of averages is smaller,
    // then current index can be our answer.
    if (currDifference < minAvgDiff) {
      minAvgDiff = currDifference;
      ans = index;
    }
  }

  return ans;
};
