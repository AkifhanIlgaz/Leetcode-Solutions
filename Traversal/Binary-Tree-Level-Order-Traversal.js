class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
/**
 *
 * @param {TreeNode} root
 */
const levelOrder = (root) => {
  const queue = [];
  const result = [];

  root ? queue.push(root) : result;

  while (queue.length > 0) {
    let levelLength = queue.length;
    const levelNodes = [];
    for (let i = 0; i < levelLength; i++) {
      let current = queue.shift();
      levelNodes.push(current.val);

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    result.push(levelNodes);
  }

  return result;
};
