/**
 *
 * @param {number[]} height
 * @returns {number}
 * Space Complexity: O(n)
 */
const trap = (height) => {
  const maxLeft = [];
  const maxRight = [];

  let current = 0;
  for (h of height) {
    maxLeft.push(current);
    current = Math.max(current, h);
  }
  current = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    const h = height[i];
    maxRight.push(current);
    current = Math.max(current, h);
  }
  maxRight.reverse();

  const minLeftRight = maxLeft.map((value, index) =>
    Math.min(value, maxRight[index])
  );

  let result = 0;
  minLeftRight.forEach((value, index) => {
    if (value - height[index] > 0) {
      result += value - height[index];
    }
  });

  return result;
};

/**
 *
 * @param {number[]} height
 * @returns {number}
 * Space Complexity: O(1)
 */
const _trap = (height) => {
  let [left, right] = [0, height.length - 1];
  let [leftMax, rightMax, result] = [height[left], height[right], 0];

  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(leftMax, height[left]);
      result += leftMax - height[left];
    } else {
      right--;
      rightMax = Math.max(rightMax, height[right]);
      result += rightMax - height[right];
    }
  }

  return result;
};
