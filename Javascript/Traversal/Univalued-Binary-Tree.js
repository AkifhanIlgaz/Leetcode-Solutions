/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
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
 * @return {boolean}
 */

const isUnivalTree = (root) => {
  if (root == null) {
    return false;
  }

  return dfs(root, root.val);
};

const dfs = (root, val) => {
  if (root == null) {
    return true;
  }
  if (root?.val !== val) {
    return false;
  }
  return dfs(root.left, val) && dfs(root.right, val);
};
