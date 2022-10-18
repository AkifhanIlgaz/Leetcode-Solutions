/**
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/
 * Time O(N * (K * log(K))) | Space O(K)
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.minHeap = new MinPriorityQueue();

    nums.forEach((num) => this.add(num));
  }

  add(val) {
    const isUnderCapacity = this.minHeap.size() < this.k;
    if (isUnderCapacity) {
      this.minHeap.enqueue(val);
      return this.top();
    }

    const isLarger = this.top() < val;
    if (isLarger) {
      this.minHeap.dequeue();
      this.minHeap.enqueue(val);
    }
    return this.top();
  }

  top() {
    return this.minHeap.front()?.element || 0;
  }
}
