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
const deleteDuplicates = (head) => {
  if (head == null) {
    return null;
  }
  let prev = head;
  let current = head.next;

  while (current) {
    if (prev.val === current.val) {
      prev.next = current.next;
    } else {
      prev = prev.next;
    }
    current = current.next;
  }

  return head;
};
