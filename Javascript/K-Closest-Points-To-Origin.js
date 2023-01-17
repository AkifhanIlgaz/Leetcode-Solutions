/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = (points, k) => {
  let maxHeap = new MaxPriorityQueue();

  for (let point of points) {
    let distance = squaredDistance(point);

    if (maxHeap.size() < k) {
      maxHeap.enqueue(point, distance);
    } else if (distance < maxHeap.front().priority) {
      maxHeap.dequeue();
      maxHeap.enqueue(point, distance);
    }
  }

  return maxHeap.toArray().map((el) => el.element);
};

const squaredDistance = ([x, y]) => x ** 2 + y ** 2;
