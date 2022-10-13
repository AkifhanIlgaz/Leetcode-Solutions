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
const rightSideView = (root) => {
  const queue = [];
  const result = [];

  root ? queue.push(root) : result;

  while (queue.length > 0) {
    let levelLength = queue.length;
    for (let i = 0; i < levelLength; i++) {
      let current = queue.shift();

      if (i == levelLength - 1) result.push(current.val);

      if (current.left) queue.push(current.left);

      if (current.right) queue.push(current.right);
    }
  }
  return result;
};
