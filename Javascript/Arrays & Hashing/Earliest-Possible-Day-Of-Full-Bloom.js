class Seed {
  constructor(plantTime, growTime) {
    this.plantTime = plantTime;
    this.growTime = growTime;
  }
}

/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
const earliestFullBloom = (plantTime, growTime) => {
  const plant = [];
  for (let i = 0; i < plantTime.length; i++) {
    const seed = new Seed(plantTime[i], growTime[i]);
    plant.push(seed);
  }

  plant.sort((a, b) => b.growTime - a.growTime);

  let time = 0;
  let max = 0;

  for (let i = 0; i < plantTime.length; i++) {
    time += plant[i].plantTime;
    max = Math.max(max, time + plant[i].growTime);
  }
  return max;
};

earliestFullBloom([1, 4, 3], [2, 3, 1]);
