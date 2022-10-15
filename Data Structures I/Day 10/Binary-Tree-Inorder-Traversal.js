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
 * @return {number[]}
 */

const inorderTraversal = (root) => {
  const result = [];

  function inorder(root) {
    if (root === null) {
      return;
    }

    inorder(root.left);
    result.push(root.val);
    inorder(root.right);
  }

  inorder(root);

  return result;
};
