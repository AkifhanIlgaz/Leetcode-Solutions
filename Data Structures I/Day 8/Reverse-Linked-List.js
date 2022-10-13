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
  while (head !== null) {
    let temp = head.next;

    head.next = prev;
    prev = head;
    head = temp;
  }

  return prev;
};
