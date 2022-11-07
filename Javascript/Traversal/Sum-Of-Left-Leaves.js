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
const sumOfLeftLeaves = (root) => {
  let result = 0;

  if (root != null) {
    if (isLeaf(root.left)) {
      result += root.left.val;
    } else {
      result += sumOfLeftLeaves(root.left);
    }

    result += sumOfLeftLeaves(root.right);
  }
  return result;
};

const isLeaf = (node) => {
  if (node == null) return false;

  if (node.left == null && node.right == null) return true;

  return false;
};
