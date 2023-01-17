class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/*
    MyLinkedList() Initializes the MyLinkedList object.
    int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.

    void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.

    void addAtTail(int val) Append a node of value val as the last element of the linked list.

    void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list.

    If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.

    void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
*/
class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (this.head && index < this.length) {
      let current = this.head;
      let count = 0;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current.val;
    }
    return -1;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    this.length++;
    const newNode = new ListNode(val);
    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    this.head = this.tail = newNode;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    this.length++;
    const newNode = new ListNode(val);

    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      return;
    }

    this.tail = this.head = newNode;
  }

  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
    if (index > this.length) {
      return;
    }
    if (index == this.length) {
      return this.addAtTail(val);
    }
    if (index == 0) {
      return this.addAtHead(val);
    }

    this.length++;
    const newNode = new ListNode(val);

    let prev = this.head;
    let count = 0;
    while (count !== index - 1) {
      prev = prev.next;
      count++;
    }

    newNode.next = prev.next;
    prev.next = newNode;
  }

  /**
   * @param {number} index
   * @return {void}
   */

  deleteAtIndex(index) {
    if (index >= this.length) {
      return;
    }

    if (index == 0) {
      return this.deleteFromHead();
    }

    if (index == this.length - 1) {
      return this.deleteFromEnd();
    }
    this.length--;
    let prev = null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.next;
    }

    prev.next = current.next;
  }

  deleteFromHead() {
    if (this.head) {
      this.head = this.head.next;
      this.length--;
    }
  }

  deleteFromEnd() {
    if (this.tail) {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }

      this.tail = current;
      this.tail.next = null;
      this.length--;
    }
  }
}
