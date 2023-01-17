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
 * @return {number}
 */
const kthSmallest = (root, k) => {
  let value;

  function inorder(root) {
    if (root == null) {
      return;
    }

    inorder(root.left);
    if (k == 1) {
      value = root.val;
    }
    k--;
    inorder(root.right);
  }
  inorder(root);

  return value;
};
