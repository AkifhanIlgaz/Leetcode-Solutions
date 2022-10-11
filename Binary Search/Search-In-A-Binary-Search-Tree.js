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
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = (root, val) => {
  if (root == null) {
    return null;
  }
  
  let node;
  if (val > root.val) {
    node = searchBST(root.right, val);
  } else if (val < root.val) {
    node = searchBST(root.left, val);
  } else {
    return root;
  }

  return node;
};
