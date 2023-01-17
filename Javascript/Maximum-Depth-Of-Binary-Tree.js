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
const maxDepth = (root) => {
  if (root) {
    return dfs(root);
  }

  return 0;
};

const dfs = (root) => {
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  const height = Math.max(left, right);

  return height + 1;
};
