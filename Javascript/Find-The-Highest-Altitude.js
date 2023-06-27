/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let [currentAltitude, maxAltitude] = [0, 0];

  for (let i = 0; i < gain.length; i++) {
    currentAltitude += gain[i];
    maxAltitude = Math.max(currentAltitude, maxAltitude);
  }

  return maxAltitude;
};
