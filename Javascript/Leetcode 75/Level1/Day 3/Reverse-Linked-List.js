/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  let prev = null;

  while (head) {
    // Store the next of head node because we don't want to lose this information
    let current = head.next;
    // Reverse edge
    head.next = prev;
    prev = head;
    head = current;
  }

  return prev;
};
