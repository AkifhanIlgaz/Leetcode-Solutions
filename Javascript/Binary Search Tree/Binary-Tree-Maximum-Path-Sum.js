/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let sum = Number.NEGATIVE_INFINITY;
  const dfs = (root) => {
    if (!root) {
      return 0;
    }

    const sumL = Math.max(0, dfs(root.left, sum));
    const sumR = Math.max(0, dfs(root.right, sum));
    sum = Math.max(sum, sumL + sumR + root.val);
    return root.val + Math.max(sumR, sumL);
  };
  dfs(root);
  return sum;
};
