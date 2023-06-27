export {};

function largestAltitude(gain: number[]): number {
  let currentAltitude = 0;
  let maxAltitude = 0;

  for (let change of gain) {
    currentAltitude += change;
    maxAltitude = Math.max(maxAltitude, currentAltitude);
  }

  return maxAltitude;
}
