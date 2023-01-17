function removeElements(head, val) {
  let dummyNode = { val: 0, next: head };
  let prev = dummyNode;
  let current = head;

  while (current) {
    if (current.val === val) {
      prev.next = current.next;
      current = current.next;
    } else {
      prev = prev.next;
      current = current.next;
    }
  }

  return dummyNode.next;
}
