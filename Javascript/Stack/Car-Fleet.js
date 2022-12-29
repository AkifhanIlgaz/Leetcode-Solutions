/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
const carFleet = (target, position, speed) => {
  const pair = position.map((pos, index) => {
    return [pos, speed[index]];
  });
  pair.sort((a, b) => a[0] - b[0]);

  const stack = [];

  for (let i = pair.length - 1; i >= 0; i--) {
    const pos = pair[i][0];
    const speed = pair[i][1];
    stack.push((target - pos) / speed);
    if (stack.length >= 2 && stack.at(-1) <= stack.at(-2)) {
      stack.pop();
    }
  }
  return stack.length;
};
