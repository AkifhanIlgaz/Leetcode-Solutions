function lastStoneWeight(stones) {
  let priorityQueue = [];

  function enqueue(weight) {
    let added = false;
    for (let i = 0; i < priorityQueue.length; i++) {
      if (weight >= priorityQueue[i]) {
        priorityQueue.splice(i, 0, weight);
        added = true;
        break;
      }
    }

    if (!added) {
      priorityQueue.push(weight);
    }
  }

  stones.forEach((weight) => enqueue(weight));

  while (priorityQueue.length > 1) {
    let first = priorityQueue.shift();
    let second = priorityQueue.shift();
    if (first === second) {
      continue;
    }
    enqueue(first - second);
  }

  return priorityQueue;
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
