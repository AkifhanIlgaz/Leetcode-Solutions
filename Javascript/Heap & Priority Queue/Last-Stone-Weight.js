/**
 * @param {number[]} stones
 * @return {number}
 */
 const lastStoneWeight = (stones) => {
    const maxHeap = getMaxHeap(stones);
  
    shrink(maxHeap);
  
    return maxHeap.isEmpty() ? 0 :maxHeap.front().element;
  };
  
  const getMaxHeap = (stones, maxHeap = new MaxPriorityQueue()) => {
    for (const stone of stones) {
      maxHeap.enqueue(stone);
    }
  
    return maxHeap;
  };
  
  const shrink = (maxHeap) => {
    while (maxHeap.size() > 1) {
      const [x, y] = [maxHeap.dequeue().element, maxHeap.dequeue().element];
  
      const difference = x - y;
  
      const isPositive = difference > 0;
  
      if (isPositive) maxHeap.enqueue(difference);
    }
  };
  