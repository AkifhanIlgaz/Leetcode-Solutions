class MyQueue {
  constructor() {
    this.inputStack = [];
    this.outputStack = [];
    this.size = 0;
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.inputStack.push(x);
    this.size++;
  }

  /**
   * @return {number}
   */
  pop() {
    if (this.outputStack.length == 0) {
      while (this.inputStack.length !== 0) {
        this.outputStack.push(this.inputStack.pop());
      }
    }

    let temp = null;

    if (this.outputStack.length !== 0) {
      temp = this.outputStack.pop();
      this.size--;
    }

    return temp;
  }

  /**
   * @return {number}
   */
  peek() {
    if (this.outputStack.length !== 0) {
      return this.outputStack.at(-1);
    } else {
      return this.inputStack[0];
    }
  }

  /**
   * @return {boolean}
   */
  empty() {
    return this.size == 0;
  }
}
