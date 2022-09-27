class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = []; // We have this because we want to retrieve minimum element in O(1)
  }

  push(val) {
    this.stack.push(val);
    if (
      this.minStack.length == 0 ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }
  }

  pop() {
    let val = this.stack.pop();
    if (val == this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return val;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.stack.length - 1];
  }
}
