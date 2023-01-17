/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = (head) => {
  /* 
    Floyd's Tortoise and Hare   Cycle Detection Algorithm

    "fastPointer" is 2 times faster than "slowPointer"
    If they intersect at some point it means that there is a cycle in linked list

           a       q(cycle start)                     p(intersect)
                       /                                   /
    -------------------/----------------------------------/
                       /               b                  /
                       /                                /
                       ///////////////////////////////// 
                                      c
                                      
    Slow => a +b        Fast => a + 2b +c
    
    Since fast 2 times faster that slow

    2(a+b) = a + 2b +c

    a = c

    If one pointer start from head and one pointer starts from intersect point they will intersect at the node where cycle starts
  */

  let [fastPointer, slowPointer, start] = [head, head, head];

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if (fastPointer == slowPointer) {
      // There is a cycle
      while (start !== slowPointer) {
        start = start.next;
        slowPointer = slowPointer.next;
      }
      return slowPointer;
    }
  }

  return null;
};
