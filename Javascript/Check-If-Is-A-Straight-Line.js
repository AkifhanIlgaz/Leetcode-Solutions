/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = (coordinates) => {
  const slope = calculateSlope(coordinates.at(-2), coordinates.at(-1));

  for (let i = 0; i < coordinates.length - 1; i++) {
    const point1 = coordinates[i];
    const point2 = coordinates[i + 1];

    if (calculateSlope(point1, point2) !== slope) return false;
  }

  return true;
};

const calculateSlope = (point1, point2) => {
  let y = point2[1] - point1[1];
  let x = point2[0] - point1[0];

  let slope = y / x;

  const inf = [-Infinity, Infinity];

  return inf.includes(slope) ? Infinity : slope;
};

console.log(
  checkStraightLine([
    [0, 0],
    [0, 1],
    [0, -1],
  ])
);
