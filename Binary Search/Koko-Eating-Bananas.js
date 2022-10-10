/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = (piles, h) => {
  let [left, right] = [1, Math.max(...piles)];
  let result = right;
  while (left <= right) {
    let middle = (left + right) >> 1;
    const hourSpent = getHourSpent(middle, piles);

    if (hourSpent <= h) {
      result = Math.min(result, middle);
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return result;
};

const getHourSpent = (middle, piles, hourSpent = 0) => {
  for (let pile of piles) {
    hourSpent += Math.ceil(pile / middle);
  }

  return hourSpent;
};
