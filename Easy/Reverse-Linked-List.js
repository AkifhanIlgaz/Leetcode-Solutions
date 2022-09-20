function reverseList(head) {
  let prev = null;

  while (head) {
    let current = head.next;
    head.next = prev;
    prev = head;
    head = current;
  }

  return prev;
}
