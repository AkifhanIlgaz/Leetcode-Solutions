/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
const maxIceCream = (costs, coins) => {
  costs.sort((a, b) => a - b);
  let round = 0;

  for (cost of costs) {
    if (coins < cost) {
      break;
    }

    coins -= cost;
    round++;
  }
  return round;
};
