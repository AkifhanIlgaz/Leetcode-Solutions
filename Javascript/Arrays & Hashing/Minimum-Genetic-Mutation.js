/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
const minMutation = (start, end, bank) => {
  if (bank.length == 0 || !bank.includes(end)) return -1;

  const visited = new Set();
  const bankSet = new Set(bank);

  const queue = [];

  visited.add(start);
  queue.push(start);

  let count = 0;

  while (queue.length !== 0) {
    let nodesinQueue = queue.length;

    for (let i = 0; i < nodesinQueue; i++) {
      const node = queue.shift();

      if (node == end) return count;

      for (let i = 0; i < 8; i++) {
        for (char of ["A", "C", "G", "T"]) {
          let temp = node.slice(0, i) + char + node.slice(i + 1);

          if (bankSet.has(temp) && !visited.has(temp)) {
            visited.add(temp);
            queue.push(temp);
          }
        }
      }
    }

    count++;
  }

  return -1;
};
