/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children; Node[]
 * };
 */

const { StaticJsonRpcProvider } = require("@ethersproject/providers");
const { resolveProperties } = require("ethers/lib/utils");

/**
 * @param {Node|null} root
 * @return {number[]}
 */

const preOrder = (root) => {
  let result = [];
  let stack = [];

  if (root) {
    stack.push(root);
  }

  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);
    if (node.children) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push(node.children[i]);
      }
    }
  }

  return result;
};
