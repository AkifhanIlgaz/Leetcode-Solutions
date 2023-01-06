class MyStack {
  constructor() {
    this.q = [];
  }

  push(val) {
    this.q.push(val);
  }

  pop() {
    for (let i = 0; i < this.q.length - 1; i++) {
      this.q.push(this.q.shift());
    }
    return this.q.shift();
  }

  top() {
    return this.q.at(-1);
  }

  empty() {
    return this.q.length == 0;
  }
}
