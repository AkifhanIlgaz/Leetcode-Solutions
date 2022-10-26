class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // Key => Node

    this.left = new Node(0, 0); // Least Recent
    this.right = new Node(0, 0); // Most Recent

    this.left.next = this.right;
    this.right.prev = this.left;
  }

  get(key) {
    // Update to most recent
    if (this.cache.has(key)) {
      this.remove(this.cache.get(key));
      this.insert(this.cache.get(key));
      return this.cache.get(key).val;
    }
    return -1;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.remove(this.cache.get(key));
    }
    const newNode = new Node(key, value);
    this.cache.set(key, newNode);
    this.insert(newNode);

    if (this.cache.size > this.capacity) {
      // Remove from the linked list and delete from cache LRU
      let LRU = this.left.next;
      this.remove(LRU);
      this.cache.delete(LRU.key);
    }
  }

  // Remove node from list
  remove(node) {
    let prev = node.prev;
    let next = node.next;

    prev.next = next;
    next.prev = prev;
  }

  // Insert node at right
  insert(node) {
    let prev = this.right.prev;
    let next = this.right;

    prev.next = node;
    next.prev = node;

    node.next = next;
    node.prev = prev;
  }
}
