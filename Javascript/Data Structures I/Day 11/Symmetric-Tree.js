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
const isSymmetric = (root) => {
  if (root == null) return true;

  return isMirror(root.left, root.right);
};

const isMirror = (root1, root2) => {
  if (root1 == null && root2 == null) return true;

  if (root1 == null || root2 == null) return false;

  return (
    root1.val == root2.val &&
    isMirror(root1.left, root2.right) &&
    isMirror(root1.right, root2.left)
  );
};
