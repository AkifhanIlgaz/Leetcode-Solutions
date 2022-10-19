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
 * @param {number} k
 * @return {boolean}
 */
const findTarget = (root, k) => {
  l = new Set();

  function dfs(node) {
    if (!node) return false;
    let y = k - node.val;
    if (l.has(y)) {
      return true;
    } else {
      l.add(node.val);
    }
    return dfs(node.left) || dfs(node.right);
  }

  return dfs(root);
};
