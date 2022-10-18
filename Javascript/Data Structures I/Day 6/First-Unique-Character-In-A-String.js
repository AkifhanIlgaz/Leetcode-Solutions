/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    let current = s.charAt(i);
    if (!map.has(current)) {
      map.set(current, i);
    } else {
      map.set(current, -1);
    }
  }

  let min = Number.MAX_VALUE;
  for (let c of map.keys()) {
    if (map.get(c) > -1 && map.get(c) < min) {
      min = map.get(c);
    }
  }

  return min == Number.MAX_VALUE ? -1 : min;
};
