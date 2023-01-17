const jobScheduling = function (startTime, endTime, profit) {
  const arr = startTime.reduce((acc, start, index) => {
    acc.push([start, endTime[index], profit[index]]);
    return acc;
  }, []);
  arr.sort((a, b) => a[1] - b[1]);
  const memo = [];
  let max = 0;
  const getPrevIndex = (left, right, target) => {
    let result = -1;
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      if (arr[middle][1] <= target) {
        left = middle + 1;
        result = middle;
      } else {
        right = middle - 1;
      }
    }
    return result;
  };
  for (let i = 0; i < arr.length; i++) {
    const prevIndex = getPrevIndex(0, i, arr[i][0]);
    memo[i] = Math.max(memo[i - 1] || 0, arr[i][2] + (memo[prevIndex] || 0));
    max = Math.max(max, memo[i]);
  }
  return max;
};
