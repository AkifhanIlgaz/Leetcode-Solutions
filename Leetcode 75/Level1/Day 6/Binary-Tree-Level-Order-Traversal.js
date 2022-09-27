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
 * @return {number[][]}
 */
// class Queue {
//   constructor() {
//     this.queue = [];
//   }

//   enqueue(node) {
//     this.queue.push(node);
//   }

//   dequeue() {
//     return this.queue.shift();
//   }

//   length() {
//     return this.queue.length;
//   }
// }

const levelOrder = (root) => {
  let queue = [];
  let result = [];

  root ? queue.push(root) : result;

  while (queue.length > 0) {
    let length = queue.length;
    let levelNodes = [];
    for (let i = 0; i < length; i++) {
      let removedNode = queue.shift();
      levelNodes.push(removedNode.val);
      if (removedNode.left) {
        queue.push(removedNode.left);
      }
      if (removedNode.right) {
        queue.push(removedNode.right);
      }
    }
    result.push(levelNodes);
  }

  return result;
};
