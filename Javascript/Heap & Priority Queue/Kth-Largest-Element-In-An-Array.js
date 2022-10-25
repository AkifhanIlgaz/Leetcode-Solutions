/**
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns number
 */
const findKthLargest = (nums, k) => {
  const minHeap = new MinPriorityQueue();

  for (const num of nums) {
    minHeap.enqueue(num);

    if (minHeap.size() > k) minHeap.dequeue();
  }

  return minHeap.front().element;
};

const findKthLargestSorting = (nums, k) => {
  return nums
    .sort((a, b) => a - b)
    .reverse()
    .splice(k - 1)
    .shift();
};
