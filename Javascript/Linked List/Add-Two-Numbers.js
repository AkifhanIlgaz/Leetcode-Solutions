/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let dummyHead = new ListNode(0, null);
  let tail = dummyHead;

  let remainder = 0;
  while (l1 && l2) {
    let val = (l1.val + l2.val + remainder) % 10;
    remainder = Math.floor((l1.val + l2.val + remainder) / 10);
    const newNode = new ListNode(val, null);

    tail.next = newNode;
    tail = newNode;

    l1 = l1.next;
    l2 = l2.next;
  }

  while (l1) {
    let val = (l1.val + remainder) % 10;
    remainder = Math.floor((l1.val + remainder) / 10);

    const newNode = new ListNode(val, null);
    tail.next = newNode;
    tail = newNode;

    l1 = l1.next;
  }

  while (l2) {
    let val = (l2.val + remainder) % 10;
    remainder = Math.floor((l2.val + remainder) / 10);

    const newNode = new ListNode(val, null);
    tail.next = newNode;
    tail = newNode;

    l2 = l2.next;
  }

  if (remainder) {
    const newNode = new ListNode(remainder, null);
    tail.next = newNode;
    tail = newNode;
  }

  return dummyHead.next;
};

/* 

 var addTwoNumbers = function(l1, l2, carry = 0) {
    let sentinel = tail = new ListNode();

    while (l1 || l2 || carry) {/* Time O(MAX(N, M)) 
        const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        const val = sum % 10;
        carry = Math.floor(sum / 10);

        tail.next = new ListNode(val);
        tail = tail.next;

        l1 = l1?.next || null;
        l2 = l2?.next || null;
    }

    return sentinel.next;
};
*/
