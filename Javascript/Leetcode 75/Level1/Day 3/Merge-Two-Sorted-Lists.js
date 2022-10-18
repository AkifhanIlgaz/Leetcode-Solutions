/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  let dummyHead = { val: 0, next: null };
  let tail = dummyHead;

  while (list1 && list2) {
    if (list1.val >= list2.val) {
      tail.next = list2;
      list2 = list2.next;
    } else {
      tail.next = list1;
      list1 = list1.next;
    }
    tail = tail.next;
  }

  // If any nodes are left on the lists merge them to the merged list
  tail.next = list1 || list2;
  return dummyHead.next;
};
