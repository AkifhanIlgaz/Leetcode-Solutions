/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {
  let dummyNode = { val: 0, next: head };
  let prev = dummyNode;
  let current = head;

  while (current) {
    if (current.val == val) {
      prev.next = current.next;
    } else {
      prev = prev.next;
    }
    current = current.next;
  }

  return dummyNode.next;
};
