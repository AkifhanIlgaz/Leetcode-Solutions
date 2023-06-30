/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let ranges = [];

  let start = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] + 1 !== nums[i]) {
      ranges.push(rangeString(nums[start], nums[i - 1]));
      start = i;
    }
  }

  if (nums.length > 0) {
    ranges.push(rangeString(nums[start], nums[nums.length - 1]));
  }

  return ranges;
};

function rangeString(start, end) {
  if (start == end) {
    return `${start}`;
  }
  return `${start}->${end}`;
}
