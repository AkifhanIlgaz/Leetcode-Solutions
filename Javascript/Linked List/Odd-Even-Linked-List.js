var oddEvenList = function (head) {
  if (!head) return null;
  if (!head.next) return head;
  let result = head;
  let oddP = head;
  let evenP = head.next;
  let connector = head.next;
  while (oddP && evenP) {
    // 1 (odd) -> 2 (even) -> NULL
    if (!evenP.next) break;
    // 1 (odd) -> 2 (even) -> 3 -> 4 -> 5 -> NULL
    // 3 = 2->3
    let temp = evenP.next;
    // 1->next = 3
    oddP.next = temp;
    // 2->next = 3->4
    evenP.next = temp.next;
    // 3
    oddP = temp;
    // 4
    evenP = temp.next;
  }
  oddP.next = connector;
  return result;
};
