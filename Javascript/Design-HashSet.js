class MyHashSet {
  constructor() {
    this.set = [];
  }

  add(key) {
    if (!this.set.includes(key)) {
      this.set.push(key);
    }
  }

  contains(key) {
    return this.set.includes(key);
  }

  remove(key) {
    if (this.set.includes(key)) {
      const index = this.set.indexOf(key);
      this.set.splice(index, 1);
    }
  }
}

const hashset = new MyHashSet();

hashset.add(1);
hashset.add(2); // set = [1, 2]
hashset.contains(1); // return True
hashset.contains(3); // return False, (not found)
hashset.add(2); // set = [1, 2]
hashset.contains(2); // return True
hashset.remove(2); // set = [1]
hashset.contains(2); // return False, (already removed)
