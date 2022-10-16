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
    let levelResult = [];

    for (let i = 0; i < levelLength; i++) {
      let removed = queue.shift();
      levelResult.push(removed.val);
      if (removed.left) queue.push(removed.left);

      if (removed.right) queue.push(removed.right);
    }

    result.push(levelResult);
  }

  return result;
};
