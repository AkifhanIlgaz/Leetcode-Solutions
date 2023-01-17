function diameterOfBinaryTree(root) {
  let left = height(root.left);
  let right = height(root.right);

  return left + right;
}
function height(node) {
  if (node === null) {
    return 0;
  }
  let leftPath = diameterOfBinaryTree(node.left);
  let rightPath = diameterOfBinaryTree(node.right);

  return Math.max(leftPath, rightPath) + 1;
}
