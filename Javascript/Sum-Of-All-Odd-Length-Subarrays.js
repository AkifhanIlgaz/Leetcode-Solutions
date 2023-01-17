/**
 * @param {number[]} arr
 * @return {number}
 */
const sumOddLengthSubarrays = (arr) => {
  const prefixSumArray = prefixSum(arr);

  let result = 0;
  for (let start = 0; start < prefixSumArray.length; start++) {
    for (let end = start; end < prefixSumArray.length; end += 2) {
      result += sumBetween(start, end, prefixSumArray);
    }
  }

  return result;
};

const prefixSum = (arr) => {
  let prefixSumArray = new Array(arr.length);
  prefixSumArray[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prefixSumArray[i] = prefixSumArray[i - 1] + arr[i];
  }

  return prefixSumArray;
};

const sumBetween = (start, end, prefixSumArr) => {
  return prefixSumArr[end] - (prefixSumArr[start - 1] || 0);
};
