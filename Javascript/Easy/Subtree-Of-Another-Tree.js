function isSubtree(root, subRoot) {
  // given two nodes are they the same?
  const isSame = (n1, n2) => {
    if (!n1 && !n2) return true;
    if (!n1 || !n2 || n1.val !== n2.val) return false;
    return isSame(n1.left, n2.left) && isSame(n1.right, n2.right);
  };

  // check if subRoot is subtree of root:
  const DFS = (node) => {
    if (!node) return false;
    if (isSame(node, subRoot)) return true;
    return DFS(node.left) || DFS(node.right);
  };

  return DFS(root);
}
