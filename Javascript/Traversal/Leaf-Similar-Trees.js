/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = (root1, root2) => {
  let leaves1 = findLeaves(root1);
  let leaves2 = findLeaves(root2);

  return (
    leaves1.length == leaves2.length &&
    leaves1.every((leaf1, index) => leaf1 == leaves2[index])
  );
};

const findLeaves = (root, leaves = []) => {
  if (root == null) return;

  if (root.left == null && root.right == null) {
    leaves.push(root.val);
  }

  if (root.left != null) {
    findLeaves(root.left, leaves);
  }

  if (root.right != null) {
    findLeaves(root.right, leaves);
  }

  return leaves;
};
