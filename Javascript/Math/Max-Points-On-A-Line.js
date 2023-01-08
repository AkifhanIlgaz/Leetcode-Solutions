/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  if (points.length < 2) {
    return points.length;
  }
  let max = 2;

  for (let i = 0; i < points.length; i++) {
    const map = new Map();
    const point = points[i];
    for (let j = i + 1; j < points.length; j++) {
      const p2 = points[j];
      let angle;
      if (p2[0] === point[0]) {
        angle = Number.MAX_SAFE_INTEGER;
      } else {
        angle = (p2[1] - point[1]) / (p2[0] - point[0]);
      }
      if (!map.has(angle)) {
        map.set(angle, 2);
      } else {
        map.set(angle, map.get(angle) + 1);
        max = Math.max(max, map.get(angle));
      }
    }
  }
  return max;
};
