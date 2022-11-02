/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = (nums1, nums2) => {
  // O(n * m)

  const map = new Map();

  nums1.forEach((num, index) => map.set(num, index));

  const result = new Array(nums1.length);

  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i];
    if (map.has(num)) {
      const idx = map.get(num);

      const nextGreater = nums2.slice(i).find((element) => element > num);

      result[idx] = nextGreater ? nextGreater : -1;
    }
  }

  return result;

  // O(m + n)
  const map = new Map();

  nums1.forEach((num, index) => map.set(num, index));

  const result = new Array(nums1.length).fill(-1);

  const stack = [];

  for (let i = 0; i < nums2.length; i++) {
    let cur = nums2[i];

    while (stack.length > 0 && cur > stack.at(-1)) {
      let val = stack.pop();
      let idx = map.get(val);
      result[idx] = cur;
    }

    if (map.has(cur)) stack.push(cur);
  }

  return result;
};
