/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let [left, right] = [0, height.length - 1];
  let result = 0;

  while (left < right) {
    const container = Math.min(height[left], height[right]) * (right - left);
    result = Math.max(result, container);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return result;
};
