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

const postorderTraversal = (root) => {
  const result = [];

  function postorder(root) {
    if (root === null) {
      return;
    }

    postorder(root.left);
    postorder(root.right);
    result.push(root.val);
  }

  postorder(root);

  return result;
};
