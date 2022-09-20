// My solution
function isPalindrome(head) {
  let string = "";
  let reversedString = "";

  while (head) {
    string += head.val;
    reversedString = head.val + reversedString;
    head = head.next;
  }

  return string === reversedString;
}

// Array solution
function isPalindrome(head) {
  let values = [];

  while (head) {
    values.push(head.val);
    head = head.next;
  }

  let leftPointer = 0;
  let rightPointer = values.length - 1;

  while (leftPointer <= rightPointer) {
    if (values[leftPointer] !== values[rightPointer]) {
      return false;
    }
    leftPointer++;
    rightPointer--;
  }

  return true;
}
// Optimal Solution
// Two Pointers  => Fast & Slow
function isPalindrome(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let prev = null;

  while (slow) {
    let current = slow.next;
    slow.next = prev;
    prev = slow;
    slow = current;
  }

  let left = head;
  let right = prev;

  while (right) {
    if (left.val !== right.val) {
      return false;
    }

    left = left.next;
    right = right.next;
  }

  return true;
}
