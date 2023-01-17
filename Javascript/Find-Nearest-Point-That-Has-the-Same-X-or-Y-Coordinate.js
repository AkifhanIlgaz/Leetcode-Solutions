/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
const nearestValidPoints = (x, y, points) => {
  const validPoints = points.filter((point) => point[0] == x || point[1] == y);

  if (validPoints.length == 0) return -1;

  validPoints.sort(
    (a, b) => manhattanDistance(x, y, a) - manhattanDistance(x, y, b)
  );

  return points.indexOf(validPoints[0]);
};

const manhattanDistance = (x, y, point) => {
  return Math.abs(x - point[0]) + Math.abs(y - point[1]);
};
