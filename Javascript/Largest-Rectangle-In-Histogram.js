/**
 *
 * @param {number[]} heights
 * @returns {number}
 */

const largestRectangleArea = (heights) => {
  let stack = []; // [index, height]
  let maxArea = 0;

  for (i in heights) {
    const h = heights[i];
    let start = i;

    while (stack.length > 0 && h <= stack.at(-1)[1]) {
      const [index, height] = stack.pop();
      maxArea = Math.max(maxArea, height * (i - index));
      start = index;
    }
    stack.push([start, h]);
  }

  for ([i, h] of stack) {
    maxArea = Math.max(maxArea, h * (heights.length - i));
  }

  return maxArea;
};
