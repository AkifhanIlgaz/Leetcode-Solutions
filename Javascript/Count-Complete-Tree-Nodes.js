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
const countNodes = (root) => {
  if (root == null) return 0;

  let leftDepth = getLeftHeight(root) + 1;
  let rightDepth = getRightHeight(root) + 1;

  if (leftDepth == rightDepth) {
    return (2 << (leftDepth - 1)) - 1;
  } else {
    return countNodes(root.left) + countNodes(root.right) + 1;
  }
};

const getLeftHeight = (root) => {
  if (root == null) return 0;

  let height = 0;

  while (root.left !== null) {
    height++;
    root = root.left;
  }

  return height;
};

const getRightHeight = (root) => {
  if (root == null) return 0;

  let height = 0;

  while (root.right !== null) {
    height++;
    root = root.right;
  }

  return height;
};
