/**
 *
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = (prices) => {
  let buyPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - buyPrice > maxProfit) {
      maxProfit = prices[i] - buyPrice;
    }

    if (prices[i] < buyPrice) {
      buyPrice = prices[i];
    }
  }

  return maxProfit;
};
