/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  const result = [];

  function dfs(i, current = [], total) {
    if (total == target) {
      result.push(current.slice());
      return;
    }

    if (i >= candidates.length || total > target) return;

    current.push(candidates[i]);
    dfs(i, current, total + candidates[i]);

    current.pop();
    dfs(i + 1, current, total);
  }

  dfs(0, [], 0);

  return result;
};
