/**
 *
 * @param {number[]} tasks
 * @returns {number}
 */

const minimumRounds = (tasks) => {
  let map = new Map();
  let res = 0;

  for (task of tasks) {
    map.set(task, map.get(task) + 1 || 1);
  }

  for (count of map.values()) {
    if (count <= 1) {
      return -1;
    }
    res += Math.ceil(count / 3);
  }

  return res;
};
