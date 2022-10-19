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
const isValidBST = (root) => {
    const valid = (node, leftBoundary, rightBoundary) => {
        if (node == null) {
          return true;
        }
    
        if (!(node.val < rightBoundary && node.val > leftBoundary)) {
          return false;
        }
    
        return (
          valid(node.left, leftBoundary, node.val) &&
          valid(node.right, node.val, rightBoundary)
        );
      };
    
      return valid(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
};
