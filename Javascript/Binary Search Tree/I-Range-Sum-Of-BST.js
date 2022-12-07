/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const sum = (root, L, R) => {
  let crrSum = 0;
  if (!root) {
    return crrSum;
  }
  if (root.val >= L && root.val <= R) {
    crrSum += root.val;
  }
  if (root.val > L) {
    crrSum += sum(root.left, L, R);
  }
  if (root.val < R) {
    crrSum += sum(root.right, L, R);
  }

  return crrSum;
};
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
  return sum(root, L, R);
};
