/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) => {
  const result = [];

  let subset = [];

  function dfs(i) {
    if (i >= nums.length) {
      result.push(subset.slice());
      return;
    }

    subset.push(nums[i]);
    dfs(i + 1);

    subset.pop();
    dfs(i + 1);
  }

  dfs(0);
  return result;
};
